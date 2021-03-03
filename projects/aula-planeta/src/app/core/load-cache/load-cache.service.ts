import { Injectable } from "@angular/core";

import { isEmpty, isString, isNumber, isDate } from 'lodash';
import { LocalStorageService } from "../local-storage/local-storage.service";
import { Observable, of as _observableOf } from 'rxjs';
import { mergeMap as _observableMergeMap, catchError as _observableCatch, map } from 'rxjs/operators';
import { NetworkConnection } from '../network-connection/network-connection.service';

@Injectable()
export class LocalCacheService {

  /**
   * Default expiry in seconds
   *
   * @type {number}
   */
  defaultExpires: number = 7776000; // 7776000s=90d  86400s = 24Hrs

  constructor(private localstorage: LocalStorageService) { }

  /**
   * Cache or use result from observable
   *
   * If cache key does not exist or is expired, observable supplied in argument is returned and result cached
   *
   * @param key
   * @param observable
   * @param expires
   * @returns {Observable<T>}
   */
  public observable<T>(key: string, observable: Observable<T>, expires: number = this.defaultExpires): Observable<T> {
    //First fetch the item from localstorage (even though it may not exist)
    return this.localstorage.getItem(key).pipe(

      //If the cached value has expired, nullify it, otherwise pass it through
      map((val: CacheStorageRecord) => {
        if (val) {
          return (new Date(val.expires)).getTime() > Date.now() ? val : null;
        }
        return null;
      })
    )
      //At this point, if we encounter a null value, either it doesnt exist in the cache or it has expired.
      //If it doesnt exist, simply return the observable that has been passed in, caching its value as it passes through
      .pipe(_observableMergeMap((val: CacheStorageRecord | null) => {
        if (!isEmpty(val)) {
          if (NetworkConnection.isConnected) {
            return observable.pipe(_observableMergeMap((val: any) => this.value(key, val, expires))); //The result may have 'expires' explicitly set
          } else {
            return _observableOf(val.value);
          }
        } else {
          return observable.pipe(_observableMergeMap((val: any) => this.value(key, val, expires))); //The result may have 'expires' explicitly set
        }
      }))
  }


  /**
   * Cache supplied value until expiry
   *
   * @param key
   * @param value
   * @param expires
   * @returns {Observable<T>}
   */
  value<T>(key: string, value: T, expires: number | string | Date = this.defaultExpires): Observable<T> {
    let _expires: Date = this.sanitizeAndGenerateDateExpiry(expires);

    return this.localstorage.setItem(key, {
      expires: _expires,
      value: value
    }).pipe(map(val => val.value));
  }

  /**
   *
   * @param key
   * @returns {Observable<void>}
   */
  expire(key: string): Observable<void> {
    return this.localstorage.removeItem(key);
  }

  /**
   *
   * @param expires
   * @returns {Date}
   */
  private sanitizeAndGenerateDateExpiry(expires: string | number | Date): Date {
    let expiryDate: Date = this.expiryToDate(expires);

    //Dont allow expiry dates in the past
    if (expiryDate.getTime() <= Date.now()) {
      return new Date(Date.now() + this.defaultExpires);
    }

    return expiryDate;
  }

  /**
   *
   * @param expires
   * @returns {Date}
   */
  private expiryToDate(expires: number | string | Date): Date {
    if (isNumber(expires)) {
      return new Date(Date.now() + Math.abs(expires as number) * 1000);
    }
    if (isString(expires)) {
      return new Date(expires);
    }
    if (isDate(expires)) {
      return expires as Date;
    }

    return new Date();
  }
}

/**
 * Cache storage record interface
 */
interface CacheStorageRecord {
  expires: Date,
  value: any
}