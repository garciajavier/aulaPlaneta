(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lAzm:function(t,e,n){"use strict";n.r(e),n.d(e,"httpLoaderFactory",(function(){return Rt})),n.d(e,"ExamplesModule",(function(){return Ut}));var o=n("vobO"),a=n("EM62"),i=n("2kYt");function s(t,e,n,o){return new(n||(n=Promise))((function(a,i){function s(t){try{c(o.next(t))}catch(e){i(e)}}function r(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}c((o=o.apply(t,e||[])).next())}))}const r=new a.s("LAZY_ELEMENT_CONFIGS"),c=new a.s("LAZY_ELEMENT_ROOT_OPTIONS"),l=new a.s("LAZY_ELEMENT_ROOT_GUARD"),u=new a.s("LAZY_ELEMENTS_REGISTRY",{providedIn:"root",factory:()=>new Map}),d="@angular-extensions/elements";let m=(()=>{class t{constructor(t,e){this.registry=t,this.options=e,this.configs=[],e||(this.options={})}addConfigs(t){t.forEach(t=>{this.getElementConfig(t.tag)?console.warn(`${d} - ElementConfig for tag '${t.tag}' was previously added, it will not be added multiple times, continue...`):(t.isAdded=!0,this.configs.push(t),(void 0!==t.preload?t.preload:this.options.preload)&&this.loadElement(t.url,t.tag,t.isModule,t.importMap,t.hooks))})}getElementConfig(t){return this.configs.find(e=>e.tag===t)}preload(t){let e=this.configs;t&&(e=this.configs.filter(e=>t.includes(e.tag))),e.forEach(t=>this.loadElement(t.url,t.tag,t.isModule,t.importMap,t.hooks))}loadElement(t,e,n,o,a){var i,r,c,l,u,m,b,f,p,g,h,v;return s(this,void 0,void 0,(function*(){const s=this.getElementConfig(e);if(null!=n||(n=null!==(i=null==s?void 0:s.isModule)&&void 0!==i?i:this.options.isModule),null!=o||(o=null!==(r=null==s?void 0:s.importMap)&&void 0!==r?r:this.options.importMap),!e)throw new Error(`${d} - tag for '${t}' not found, the *axLazyElement has to be used on HTML element`);if(!t){if(!(null==s?void 0:s.url)&&!o)throw new Error(`${d} - url for <${e}> not found`);t=o?e:s.url}if(!this.hasElement(t)){const i=this.addElement(t),r=null!==(u=null!==(c=null==a?void 0:a.beforeLoad)&&void 0!==c?c:null===(l=null==s?void 0:s.hooks)||void 0===l?void 0:l.beforeLoad)&&void 0!==u?u:null===(b=null===(m=this.options)||void 0===m?void 0:m.hooks)||void 0===b?void 0:b.beforeLoad,d=null!==(g=null!==(f=null==a?void 0:a.afterLoad)&&void 0!==f?f:null===(p=null==s?void 0:s.hooks)||void 0===p?void 0:p.afterLoad)&&void 0!==g?g:null===(v=null===(h=this.options)||void 0===h?void 0:h.hooks)||void 0===v?void 0:v.afterLoad;o&&(t=yield this.resolveImportMap(t));const S=document.createElement("script");n&&(S.type="module"),S.src=t,S.onload=()=>{d?this.handleHook(d,e).then(i.resolve).catch(i.reject):i.resolve()},S.onerror=i.reject,r?this.handleHook(r,e).then(()=>document.body.appendChild(S)).catch(i.reject):document.body.appendChild(S)}return this.registry.get(this.stripUrlProtocol(t))}))}addElement(t){let e;return this.registry.set(this.stripUrlProtocol(t),new Promise((t,n)=>e={resolve:t,reject:n})),e}hasElement(t){return this.registry.has(this.stripUrlProtocol(t))}stripUrlProtocol(t){return t.replace(/https?:\/\//,"")}handleHook(t,e){try{return Promise.resolve(t(e))}catch(n){return Promise.reject(n)}}resolveImportMap(t){return s(this,void 0,void 0,(function*(){const e=window.System;if(!e)throw new Error(`${d} - importMap feature depends on SystemJS library to be globally loaded but none was found, thus '${t}' can't be resolved. You should either load SystemJS or remove the importMap flag.`);return yield e.prepareImport(),t=e.resolve(t)}))}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(u),a.Xb(c,8))},t.\u0275prov=Object(a.Jb)({factory:function(){return new t(Object(a.Xb)(u),Object(a.Xb)(c,8))},token:t,providedIn:"root"}),t})();function b(t){if(t)throw new TypeError("LazyElementsModule.forRoot() called twice. Feature modules should use LazyElementsModule.forFeature() instead.");return"LazyElementsModule.forRoot() multiple execution guard"}let f=(()=>{class t{constructor(t,e,n){e&&e.length&&e.filter(t=>t.some(t=>!t.isAdded)).forEach(e=>t.addConfigs(e))}static forRoot(e){return{ngModule:t,providers:[{provide:r,useValue:e&&e.elementConfigs?e.elementConfigs:[],multi:!0},{provide:c,useValue:e.rootOptions?e.rootOptions:{}},{provide:l,useFactory:b,deps:[[c,new a.C,new a.L]]}]}}static forFeature(e){return{ngModule:t,providers:[{provide:r,useValue:e&&e.elementConfigs?e.elementConfigs:[],multi:!0}]}}}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)(a.Xb(m),a.Xb(r,8),a.Xb(l,8))},providers:[],imports:[[i.c]]}),t})();var p=n("s2Ay"),g=n("i8O3"),h=n("PCNd"),v=n("AytR"),S=n("sEIs"),T=n("pKmL"),k=n("NKdq"),C=n("mQTi"),y=n("KZIX"),O=n("R7+U"),x=n("mFH5");function M(t,e){if(1&t&&(a.Tb(0,"a",6,7),a.Dc(2),a.fc(3,"translate"),a.Sb()),2&t){const t=e.$implicit,n=a.qc(1);a.kc("routerLink",t.link)("active",n.isActive)("disabled",t.auth),a.Bb(2),a.Fc(" ",a.gc(3,4,t.label)," ")}}function w(t,e){if(1&t&&(a.Tb(0,"mat-option",8),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t){const t=e.$implicit;a.kc("value",t)("routerLink",t.link)("disabled",t.auth),a.Bb(1),a.Fc(" ",a.gc(2,4,t.label)," ")}}let E=(()=>{class t{constructor(t,e,n){this.translateService=t,this.settingsService=e,this.authManagementService=n,this.examples=[]}ngOnInit(){this.settingsService.settings$.subscribe(({language:t})=>this.translateService.use(t)),this.examples=[{link:"todos",label:"aula-planeta.examples.menu.todos"},{link:"simple-state-management",label:"aula-planeta.examples.menu.simple-state-management",auth:!this.authManagementService.userCan(["PROFESOR"])}]}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(p.d),a.Nb(k.a),a.Nb(C.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["aula-planeta-examples"]],decls:9,vars:7,consts:[["mat-tab-nav-bar","","role","tab",1,"d-none","d-sm-flex"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active","disabled",4,"ngFor","ngForOf"],["role","navigation",1,"nav-responsive","d-sm-none","d-flex","justify-content-center"],["panelClass","cdkSelect",3,"placeholder","value"],[3,"value","routerLink","disabled",4,"ngFor","ngForOf"],["o","outlet"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active","disabled"],["rla","routerLinkActive"],[3,"value","routerLink","disabled"]],template:function(t,e){if(1&t&&(a.Tb(0,"nav",0),a.Cc(1,M,4,6,"a",1),a.Sb(),a.Tb(2,"nav",2),a.Tb(3,"mat-select",3),a.fc(4,"translate"),a.Cc(5,w,3,6,"mat-option",4),a.Sb(),a.Sb(),a.Tb(6,"div"),a.Ob(7,"router-outlet",null,5),a.Sb()),2&t){const t=a.qc(8);a.Bb(1),a.kc("ngForOf",e.examples),a.Bb(2),a.kc("placeholder",a.gc(4,5,"aula-planeta.examples.title"))("value","todos"),a.Bb(2),a.kc("ngForOf",e.examples),a.Bb(1),a.kc("@routeAnimations",t.isActivated&&t.activatedRoute.routeConfig.path)}},directives:[y.b,i.j,O.a,S.l,S.j,y.a,S.i,x.o,S.h],pipes:[p.c],styles:["nav[_ngcontent-%COMP%]{margin-bottom:1.25em}nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:7.5em;padding:0 .9375em}@media (max-width:768px){nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:0}}"],data:{animation:[T.e]},changeDetection:0}),t})();var I,F=n("J+dc"),B=n("C05f"),D=new Uint8Array(16);function P(){if(!I&&!(I="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return I(D)}for(var _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,L=function(t){return"string"==typeof t&&_.test(t)},N=[],A=0;A<256;++A)N.push((A+256).toString(16).substr(1));var $=function(t,e,n){var o=(t=t||{}).random||(t.rng||P)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=o[a];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(N[t[e+0]]+N[t[e+1]]+N[t[e+2]]+N[t[e+3]]+"-"+N[t[e+4]]+N[t[e+5]]+"-"+N[t[e+6]]+N[t[e+7]]+"-"+N[t[e+8]]+N[t[e+9]]+"-"+N[t[e+10]]+N[t[e+11]]+N[t[e+12]]+N[t[e+13]]+N[t[e+14]]+N[t[e+15]]).toLowerCase();if(!L(n))throw TypeError("Stringified UUID is invalid");return n}(o)},j=n("EP1h");let R=(()=>{class t{constructor(t){this.localStorageService=t,this._todos=new B.a([]),this.todos$=this._todos.asObservable(),this._removeDoneDisabled=new B.a(!1),this.removeDoneDisabled$=this._removeDoneDisabled.asObservable(),this._filter=new B.a("ALL"),this.filter$=this._filter.asObservable();const e=this.localStorageService.getItem("EXAMPLES.TODOS");this.todoNext(e||[]);const n=this.localStorageService.getItem("EXAMPLES.TODOS.FILTER");this._filter.next(n||"ALL")}get todos(){return this._todos.getValue()}get removeDoneDisabled(){return this._removeDoneDisabled.getValue()}get filter(){return this.filter.getValue()}addTodo(t){this.todoNext([{id:$(),name:t,done:!1},...this.todos])}toggleTodo(t){this.todoNext(this.todos.map(e=>e.id===t?Object.assign(Object.assign({},e),{done:!e.done}):e))}removeDone(){this.todoNext(this.todos.filter(t=>!t.done))}updateFilter(t){this.filterNext(t)}isRemoveDoneDisabled(){this._removeDoneDisabled.next(!this.todos.some(t=>t.done))}todoNext(t){this.localStorageService.setItem("EXAMPLES.TODOS",t),this._todos.next(t),this.isRemoveDoneDisabled()}filterNext(t){this.localStorageService.setItem("EXAMPLES.TODOS.FILTER",t),this._filter.next(t)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(j.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var U=n("W1gw"),q=n("Meci");const V=function(t){return{"has-focus":t}},X=["*"];let H=(()=>{class t{constructor(){this.value="",this.disabled=!1,this.hasFocus=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["aula-planeta-big-input"]],inputs:{placeholder:"placeholder",value:"value",disabled:"disabled"},ngContentSelectors:X,decls:3,vars:6,consts:[[1,"big-input",3,"ngClass"],["aria-label","Escribe tu recordatorio",3,"value","placeholder","disabled","focus","blur"]],template:function(t,e){1&t&&(a.jc(),a.Tb(0,"mat-card",0),a.Tb(1,"input",1),a.ac("focus",(function(){return e.hasFocus=!0}))("blur",(function(){return e.hasFocus=!1})),a.Sb(),a.ic(2),a.Sb()),2&t&&(a.kc("ngClass",a.nc(4,V,e.hasFocus)),a.Bb(1),a.kc("value",e.value)("placeholder",e.placeholder)("disabled",e.disabled))},directives:[q.a,i.i],styles:[".big-input[_ngcontent-%COMP%]{width:100%;transition:all .5s;display:flex;padding:.625em .625em .625em 1.25em}.big-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1;border:0;font-size:1.25em;min-width:6.25em}"],changeDetection:0}),t})(),Y=(()=>{class t{constructor(t,e){this.el=t,this.translate=e,t.nativeElement.style.textAlign="he"===e.currentLang?"right":"left",t.nativeElement.style.direction="he"===e.currentLang?"rtl":"ltr"}ngOnInit(){this.subscription=this.translate.onLangChange.subscribe(t=>{this.el.nativeElement.style.textAlign="he"===t.lang?"right":"left",this.el.nativeElement.style.direction="he"===t.lang?"rtl":"ltr"})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(a.l),a.Nb(p.d))},t.\u0275dir=a.Ib({type:t,selectors:[["","rtl",""]]}),t})();var G=n("PBFl"),J=n("bFHC"),z=n("Pq5H");function K(t,e){if(1&t&&a.Ob(0,"mat-icon",4),2&t){const t=a.ec();a.kc("fontSet",t.fontSet)("fontIcon",t.fontIcon)}}function Z(t,e){if(1&t&&a.Ob(0,"fa-icon",5),2&t){const t=a.ec();a.kc("icon",t.faIcon)}}function Q(t,e){if(1&t&&(a.Tb(0,"span"),a.Dc(1),a.Sb()),2&t){const t=a.ec();a.Bb(1),a.Ec(t.label)}}let W=(()=>{class t{constructor(){this.disabled=!1,this.fontSet="",this.fontIcon="",this.faIcon="",this.label="",this.color="",this.action=new a.o,this.hasFocus=!1}onClick(){this.action.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["aula-planeta-big-input-action"]],inputs:{disabled:"disabled",fontSet:"fontSet",fontIcon:"fontIcon",faIcon:"faIcon",label:"label",color:"color"},outputs:{action:"action"},decls:4,vars:4,consts:[["role","button","mat-raised-button","","color","color",3,"disabled","click"],[3,"fontSet","fontIcon",4,"ngIf"],[3,"icon",4,"ngIf"],[4,"ngIf"],[3,"fontSet","fontIcon"],[3,"icon"]],template:function(t,e){1&t&&(a.Tb(0,"button",0),a.ac("click",(function(){return e.onClick()})),a.Cc(1,K,1,2,"mat-icon",1),a.Cc(2,Z,1,1,"fa-icon",2),a.Cc(3,Q,2,1,"span",3),a.Sb()),2&t&&(a.kc("disabled",e.disabled),a.Bb(1),a.kc("ngIf",e.fontSet&&e.fontIcon&&!e.faIcon),a.Bb(1),a.kc("ngIf",e.faIcon),a.Bb(1),a.kc("ngIf",e.label))},directives:[G.a,i.k,J.a,z.a],styles:["button[_ngcontent-%COMP%]{padding:0;min-width:2.25em;margin-left:.625em}button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{top:.125em}button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;font-size:1.125em}"],changeDetection:0}),t})();var tt=n("Y2X+"),et=n("Jb3d"),nt=n("S17y"),ot=n("+Tre");let at=(()=>{class t{transform(t,e){return t&&"ALL"!==e?t.filter("DONE"===e?t=>t.done:t=>!t.done):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Mb({name:"todos",type:t,pure:!0}),t})();function it(t,e){if(1&t&&(a.Dc(0),a.fc(1,"translate")),2&t){const t=a.ec().ngIf;a.Gc("",t.length," ",a.gc(1,2,"aula-planeta.examples.todos.filter.items"),"")}}function st(t,e){1&t&&(a.Dc(0),a.fc(1,"translate"),a.fc(2,"translate")),2&t&&a.Gc("",a.gc(1,2,"aula-planeta.examples.todos.filter.one")," ",a.gc(2,4,"aula-planeta.examples.todos.filter.item"),"")}function rt(t,e){1&t&&(a.Dc(0),a.fc(1,"translate"),a.fc(2,"translate")),2&t&&a.Gc("",a.gc(1,2,"aula-planeta.examples.todos.filter.none")," ",a.gc(2,4,"aula-planeta.examples.todos.filter.items"),"")}const ct=function(t){return{"todo-label-done":t}};function lt(t,e){if(1&t){const t=a.Ub();a.Tb(0,"mat-card",25),a.Tb(1,"mat-checkbox",26),a.ac("change",(function(){a.tc(t);const n=e.$implicit;return a.ec(2).onToggleTodo(n)})),a.Tb(2,"span",27),a.ac("click",(function(){a.tc(t);const n=e.$implicit;return a.ec(2).onToggleTodo(n)})),a.Dc(3),a.Sb(),a.Sb(),a.Sb()}if(2&t){const t=e.$implicit,n=a.ec(2);a.kc("ngClass",n.routeAnimationsElements),a.Bb(1),a.kc("checked",t.done),a.Bb(1),a.kc("ngClass",a.nc(4,ct,t.done)),a.Bb(1),a.Fc(" \xa0",t.name,"\xa0 ")}}function ut(t,e){if(1&t){const t=a.Ub();a.Rb(0,7),a.Tb(1,"div",8),a.Tb(2,"h2",9),a.Tb(3,"span"),a.Dc(4),a.fc(5,"translate"),a.Sb(),a.Tb(6,"button",10),a.Ob(7,"fa-icon",11),a.Sb(),a.Tb(8,"mat-menu",12,13),a.Tb(10,"button",14),a.ac("click",(function(){return a.tc(t),a.ec().onFilterTodos("ALL")})),a.fc(11,"async"),a.Tb(12,"mat-icon"),a.Ob(13,"fa-icon",15),a.Sb(),a.Tb(14,"span"),a.Dc(15),a.fc(16,"translate"),a.Sb(),a.Sb(),a.Tb(17,"button",16),a.ac("click",(function(){return a.tc(t),a.ec().onFilterTodos("DONE")})),a.fc(18,"async"),a.Tb(19,"mat-icon"),a.Ob(20,"fa-icon",17),a.Sb(),a.Tb(21,"span"),a.Dc(22),a.fc(23,"translate"),a.Sb(),a.Sb(),a.Tb(24,"button",16),a.ac("click",(function(){return a.tc(t),a.ec().onFilterTodos("ACTIVE")})),a.fc(25,"async"),a.Tb(26,"mat-icon"),a.Ob(27,"fa-icon",18),a.Sb(),a.Tb(28,"span"),a.Dc(29),a.fc(30,"translate"),a.Sb(),a.Sb(),a.Sb(),a.Tb(31,"mat-chip-list",19),a.Tb(32,"mat-chip",20),a.Dc(33),a.fc(34,"translate"),a.Cc(35,it,2,4,"ng-template",21),a.Cc(36,st,3,6,"ng-template",22),a.Cc(37,rt,3,6,"ng-template",23),a.Sb(),a.Sb(),a.Sb(),a.Cc(38,lt,4,6,"mat-card",24),a.fc(39,"todos"),a.fc(40,"async"),a.Sb(),a.Qb()}if(2&t){const t=e.ngIf,n=a.qc(9),o=a.ec();a.Bb(4),a.Ec(a.gc(5,15,"aula-planeta.examples.todos.list")),a.Bb(2),a.kc("matMenuTriggerFor",n),a.Bb(4),a.Fb("active","ALL"===a.gc(11,17,o.todosManagementService.filter$)),a.Bb(5),a.Ec(a.gc(16,19,"aula-planeta.examples.todos.filter.all")),a.Bb(2),a.Fb("active","DONE"===a.gc(18,21,o.todosManagementService.filter$)),a.Bb(5),a.Ec(a.gc(23,23,"aula-planeta.examples.todos.filter.done")),a.Bb(2),a.Fb("active","ACTIVE"===a.gc(25,25,o.todosManagementService.filter$)),a.Bb(5),a.Ec(a.gc(30,27,"aula-planeta.examples.todos.filter.active")),a.Bb(3),a.kc("disabled",!0)("ngPlural",t.length),a.Bb(1),a.Fc(" ",a.gc(34,29,"aula-planeta.examples.todos.filter.description")," "),a.Bb(5),a.kc("ngForOf",a.hc(39,31,t,a.gc(40,34,o.todosManagementService.filter$)))}}let dt=(()=>{class t{constructor(t,e,n,o){this.snackBar=t,this.translateService=e,this.todosManagementService=n,this.notificationService=o,this.routeAnimationsElements=T.d,this.newTodo=""}ngOnInit(){}get isAddTodoDisabled(){return this.newTodo.length<4}onNewTodoChange(t){this.newTodo=t}onNewTodoClear(){this.newTodo=""}onAddTodo(){this.todosManagementService.addTodo(this.newTodo);const t=this.translateService.instant("aula-planeta.examples.todos.added.notification",{name:this.newTodo});this.notificationService.info(t),this.newTodo=""}onToggleTodo(t){this.todosManagementService.toggleTodo(t.id);const e=this.translateService.instant("aula-planeta.examples.todos.filter."+(t.done?"active":"done")),n=this.translateService.instant("aula-planeta.examples.todos.undo"),o=this.translateService.instant("aula-planeta.examples.todos.toggle.notification",{name:t.name});this.snackBar.open(`${o} ${e}`,n,{duration:2500,panelClass:"todos-notification-overlay"}).onAction().pipe(Object(F.a)(1)).subscribe(()=>this.onToggleTodo(Object.assign(Object.assign({},t),{done:!t.done})))}onRemoveDoneTodos(){this.todosManagementService.removeDone();const t=this.translateService.instant("aula-planeta.examples.todos.remove.notification");this.notificationService.info(t)}onFilterTodos(t){this.todosManagementService.updateFilter(t);const e=this.translateService.instant("aula-planeta.examples.todos.filter.notification"),n=this.translateService.instant("aula-planeta.examples.todos.filter."+t.toLowerCase());this.notificationService.info(`${e} ${n}`)}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(U.a),a.Nb(p.d),a.Nb(R),a.Nb(T.c))},t.\u0275cmp=a.Hb({type:t,selectors:[["aula-planeta-todos"]],features:[a.Ab([R])],decls:13,vars:17,consts:[[1,"container"],[1,"row"],[1,"offset-md-2","col-md-8","entry"],["rtl","",3,"placeholder","value","keyup","keyup.enter","keyup.escape"],["fontSet","fas","fontIcon","fa-plus","faIcon","plus","color","accent","matTooltipPosition","before",3,"disabled","matTooltip","action"],["fontSet","fas","fontIcon","fa-trash","faIcon","trash","color","warn","matTooltipPosition","after",3,"disabled","matTooltip","action"],["role","list",4,"ngIf"],["role","list"],[1,"offset-md-2","col-md-8"],["rtl","",1,"dotos-title"],["role","button","aria-label","Filtrar","mat-icon-button","",1,"todos-filter",3,"matMenuTriggerFor"],["icon","filter"],["xPosition","before",1,"todos-filter-menu-overlay"],["todosFilter","matMenu"],["role","button","mat-menu-item","","rtl","",3,"click"],["icon","tasks"],["role","button","mat-menu-item","",3,"click"],["icon","check"],["icon","square"],[1,"todos-filter-info","d-none","d-sm-block","d-md-none","d-lg-block"],[3,"disabled","ngPlural"],["ngPluralCase","other"],["ngPluralCase","=1"],["ngPluralCase","=0"],["role","listitem","class","todo",3,"ngClass",4,"ngFor","ngForOf"],["role","listitem",1,"todo",3,"ngClass"],[1,"todo-done",3,"checked","change"],[1,"todo-label",3,"ngClass","click"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"aula-planeta-big-input",3),a.ac("keyup",(function(t){return e.onNewTodoChange(t.target.value)}))("keyup.enter",(function(){return!e.isAddTodoDisabled&&e.onAddTodo()}))("keyup.escape",(function(){return e.onNewTodoClear()})),a.fc(4,"translate"),a.Tb(5,"aula-planeta-big-input-action",4),a.ac("action",(function(){return e.onAddTodo()})),a.fc(6,"translate"),a.Sb(),a.Tb(7,"aula-planeta-big-input-action",5),a.ac("action",(function(){return e.onRemoveDoneTodos()})),a.fc(8,"async"),a.fc(9,"translate"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(10,"div",1),a.Cc(11,ut,41,36,"ng-container",6),a.fc(12,"async"),a.Sb(),a.Sb()),2&t&&(a.Bb(3),a.kc("placeholder",a.gc(4,7,"aula-planeta.examples.todos.input"))("value",e.newTodo),a.Bb(2),a.kc("disabled",e.isAddTodoDisabled)("matTooltip",a.gc(6,9,"aula-planeta.examples.todos.tooltip.add")),a.Bb(2),a.kc("disabled",a.gc(8,11,e.todosManagementService.removeDoneDisabled$))("matTooltip",a.gc(9,13,"aula-planeta.examples.todos.tooltip.remove")),a.Bb(4),a.kc("ngIf",a.gc(12,15,e.todosManagementService.todos$)))},directives:[H,Y,W,tt.a,i.k,G.a,et.c,z.a,et.d,et.a,J.a,nt.b,nt.a,i.l,i.m,i.j,q.a,i.i,ot.a],pipes:[p.c,i.b,at],styles:[".entry[_ngcontent-%COMP%]{margin-top:2.5em;margin-bottom:2.5em}.todos-filter-info[_ngcontent-%COMP%]{float:right;font-weight:400}.dotos-title[_ngcontent-%COMP%]{display:flex}.dotos-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex:1}.todos-filter[_ngcontent-%COMP%]{float:right;position:relative;left:.625em;top:-.3125em;margin-left:-.625em}.todo[_ngcontent-%COMP%]{display:flex;margin-bottom:.625em}.todo[_ngcontent-%COMP%]   .todo-done[_ngcontent-%COMP%]{margin:0 1.25em 0 0}.todo[_ngcontent-%COMP%]   .todo-label[_ngcontent-%COMP%]{position:relative;top:.125em;cursor:pointer}.todo[_ngcontent-%COMP%]   .todo-label.todo-label-done[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.5}"],changeDetection:0}),t})();var mt=n("nIj0"),bt=n("jIqt"),ft=n("YtkY"),pt=n("0aut");n("9RND");const gt="https://aula-node-backend.herokuapp.com/api";class ht{constructor(t,e,n,o,a,i,s,r,c){this.firstName=t,this.lastName=e,this.email=n,this.uuid=o,this.username=a,this.password=i,this.img=s,this.google=r,this.roles=c,this.username=`${t} ${e}`}get imagenUrl(){return this.img.includes("https")?this.img:this.img?`${gt}/upload/user/${this.img}`:gt+"/upload/user/no-img"}}const vt=[new ht("Elon","Musk","elon@musk.com",$()),new ht("Nassim","Taleb","nassim@taleb.com",$()),new ht("Yuval","Harari","yuval@harari",$())];let St=(()=>{class t{constructor(t){this.localStorageService=t,this._users=new B.a([]),this.users$=this._users.asObservable();const e=this.localStorageService.getItem("EXAMPLES.USERS");this.usersNext(e||vt)}get users(){return this._users.getValue()}addUser(t){this.users.push(Object.assign(Object.assign({},t),{uuid:$()})),this.usersNext(this.users)}updateUser(t){const e=this.users.findIndex(e=>e.uuid===t.uuid);this.users[e]=t,this.usersNext(this.users)}removeUser(t){const e=this.users.findIndex(e=>e.uuid===t);this.users.splice(e,1),this.usersNext(this.users)}usersNext(t){this._users.next(t)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(j.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac}),t})();var Tt=n("29Wa"),kt=n("Cd2c");function Ct(t,e){if(1&t){const t=a.Ub();a.Tb(0,"mat-card",9),a.Tb(1,"mat-card-header"),a.Ob(2,"img",10),a.Tb(3,"mat-card-title"),a.Dc(4),a.Sb(),a.Tb(5,"mat-card-subtitle"),a.Dc(6),a.Sb(),a.Sb(),a.Tb(7,"mat-card-actions"),a.Tb(8,"button",11),a.ac("click",(function(){a.tc(t);const n=e.$implicit;return a.ec(2).editUser(n)})),a.Dc(9),a.fc(10,"translate"),a.Sb(),a.Tb(11,"button",11),a.ac("click",(function(){a.tc(t);const n=e.$implicit;return a.ec(2).removeUser(n.id)})),a.Dc(12),a.fc(13,"translate"),a.Sb(),a.Sb(),a.Sb()}if(2&t){const t=e.$implicit,n=a.ec(2);a.kc("ngClass",n.routeAnimationsElements),a.Bb(2),a.lc("src","https://source.unsplash.com/200x200/?",t.username,"",a.vc),a.kc("alt",t.username),a.Bb(2),a.Gc("",t.firstName," ",t.lastName,""),a.Bb(2),a.Fc("@",t.username,""),a.Bb(3),a.Ec(a.gc(10,8,"aula-planeta.examples.crud.tooltip.edit")),a.Bb(3),a.Ec(a.gc(13,10,"aula-planeta.examples.crud.title"))}}function yt(t,e){if(1&t&&(a.Rb(0,7),a.Cc(1,Ct,14,12,"mat-card",8),a.Qb()),2&t){const t=e.ngIf,n=a.ec();a.Bb(1),a.kc("ngForOf",t)("ngForTrackBy",n.trackByUserId)}}function Ot(t,e){1&t&&(a.Tb(0,"h2"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t&&(a.Bb(1),a.Ec(a.gc(2,1,"aula-planeta.examples.simple-state-management.form.add.title")))}function xt(t,e){1&t&&(a.Tb(0,"h2"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t&&(a.Bb(1),a.Ec(a.gc(2,1,"aula-planeta.examples.simple-state-management.form.edit.title")))}const Mt=function(t){return{minlength:t}};function wt(t,e){if(1&t&&(a.Tb(0,"mat-error"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t){const t=a.ec(2);a.Bb(1),a.Fc(" ",a.hc(2,1,"aula-planeta.examples.simple-state-management.validator.minlength",a.nc(4,Mt,t.userForm.get("username").errors.minlength.requiredLength))," ")}}function Et(t,e){1&t&&(a.Tb(0,"mat-error"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t&&(a.Bb(1),a.Fc(" ",a.gc(2,1,"aula-planeta.examples.simple-state-management.validator.required")," "))}function It(t,e){if(1&t&&(a.Tb(0,"mat-error"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t){const t=a.ec(2);a.Bb(1),a.Fc(" ",a.hc(2,1,"aula-planeta.examples.simple-state-management.validator.minlength",a.nc(4,Mt,t.userForm.get("firstName").errors.minlength.requiredLength))," ")}}function Ft(t,e){1&t&&(a.Tb(0,"mat-error"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t&&(a.Bb(1),a.Fc(" ",a.gc(2,1,"aula-planeta.examples.simple-state-management.validator.required")," "))}function Bt(t,e){if(1&t&&(a.Tb(0,"mat-error"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t){const t=a.ec(2);a.Bb(1),a.Fc(" ",a.hc(2,1,"aula-planeta.examples.simple-state-management.validator.minlength",a.nc(4,Mt,t.userForm.get("lastName").errors.minlength.requiredLength))," ")}}function Dt(t,e){1&t&&(a.Tb(0,"mat-error"),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t&&(a.Bb(1),a.Fc(" ",a.gc(2,1,"aula-planeta.examples.simple-state-management.validator.required")," "))}function Pt(t,e){1&t&&(a.Tb(0,"button",19),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t&&(a.Bb(1),a.Fc(" ",a.gc(2,1,"aula-planeta.examples.simple-state-management.form.add.submit")," "))}function _t(t,e){1&t&&(a.Tb(0,"button",19),a.Dc(1),a.fc(2,"translate"),a.Sb()),2&t&&(a.Bb(1),a.Fc(" ",a.gc(2,1,"aula-planeta.examples.simple-state-management.form.edit.submit")," "))}function Lt(t,e){if(1&t){const t=a.Ub();a.Rb(0),a.Cc(1,Ot,3,3,"h2",6),a.Cc(2,xt,3,3,"h2",6),a.Tb(3,"form",12,13),a.ac("ngSubmit",(function(){a.tc(t);const e=a.qc(4);return a.ec().onSubmit(e)})),a.Tb(5,"fieldset"),a.Tb(6,"mat-form-field"),a.Ob(7,"input",14),a.fc(8,"translate"),a.Cc(9,wt,3,6,"mat-error",6),a.Cc(10,Et,3,3,"mat-error",6),a.Sb(),a.Tb(11,"mat-form-field"),a.Ob(12,"input",15),a.fc(13,"translate"),a.Cc(14,It,3,6,"mat-error",6),a.Cc(15,Ft,3,3,"mat-error",6),a.Sb(),a.Tb(16,"mat-form-field"),a.Ob(17,"input",16),a.fc(18,"translate"),a.Cc(19,Bt,3,6,"mat-error",6),a.Cc(20,Dt,3,3,"mat-error",6),a.Sb(),a.Tb(21,"div"),a.Cc(22,Pt,3,3,"button",17),a.Cc(23,_t,3,3,"button",17),a.Tb(24,"button",18),a.Dc(25),a.fc(26,"translate"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Qb()}if(2&t){const t=e.ngIf,n=a.ec();a.Bb(1),a.kc("ngIf",!t.value),a.Bb(1),a.kc("ngIf",t.value),a.Bb(1),a.kc("formGroup",n.userForm),a.Bb(4),a.kc("placeholder",a.gc(8,15,"aula-planeta.examples.simple-state-management.username")+"*"),a.Bb(2),a.kc("ngIf",n.userForm.get("username").hasError("minlength")),a.Bb(1),a.kc("ngIf",n.userForm.get("username").hasError("required")),a.Bb(2),a.kc("placeholder",a.gc(13,17,"aula-planeta.examples.simple-state-management.name")+"*"),a.Bb(2),a.kc("ngIf",n.userForm.get("firstName").hasError("minlength")),a.Bb(1),a.kc("ngIf",n.userForm.get("firstName").hasError("required")),a.Bb(2),a.kc("placeholder",a.gc(18,19,"aula-planeta.examples.simple-state-management.surname")+"*"),a.Bb(2),a.kc("ngIf",n.userForm.get("lastName").hasError("minlength")),a.Bb(1),a.kc("ngIf",n.userForm.get("lastName").hasError("required")),a.Bb(2),a.kc("ngIf",!t.value),a.Bb(1),a.kc("ngIf",t.value),a.Bb(2),a.Ec(a.gc(26,21,"aula-planeta.examples.form.reset"))}}let Nt=(()=>{class t{constructor(t,e){this.userManagementService=t,this.fb=e,this.routeAnimationsElements=pt.a}ngOnInit(){this.userForm=this.fb.group({id:"",username:["",[mt.p.required,mt.p.minLength(5)]],firstName:["",[mt.p.required,mt.p.minLength(5)]],lastName:["",[mt.p.required,mt.p.minLength(5)]]}),this.isEdit$=this.userForm.get("id").valueChanges.pipe(Object(bt.a)(""),Object(ft.a)(t=>({value:(t||"").length>0})))}removeUser(t){this.userManagementService.removeUser(t)}editUser(t){this.userForm.patchValue(Object.assign({},t))}onSubmit(t){if(this.userForm.valid){const e=this.userForm.getRawValue();e.id&&e.id.length?this.userManagementService.updateUser(e):this.userManagementService.addUser(Object.assign({},e)),t.resetForm(),this.userForm.reset()}}trackByUserId(t,e){return e.uuid}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(St),a.Nb(mt.d))},t.\u0275cmp=a.Hb({type:t,selectors:[["aula-planeta-user"]],decls:12,vars:10,consts:[[1,"container"],[1,"row"],[1,"offset-md-2","col-md-8"],["rtl","",1,"main-heading"],["rtl","",1,"row",3,"ngClass"],["role","list",4,"ngIf"],[4,"ngIf"],["role","list"],["role","listitem",3,"ngClass",4,"ngFor","ngForOf","ngForTrackBy"],["role","listitem",3,"ngClass"],["role","img","aria-label","Avatar","mat-card-avatar","","crossorigin","anonymous",3,"src","alt"],["role","button","mat-button","",3,"click"],["role","form",3,"formGroup","ngSubmit"],["userFormRef","ngForm"],["matInput","","formControlName","username",3,"placeholder"],["matInput","","formControlName","firstName",3,"placeholder"],["matInput","","formControlName","lastName",3,"placeholder"],["role","button","type","submit","mat-raised-button","","color","primary",4,"ngIf"],["role","button","type","reset","mat-button","","color","warn"],["role","button","type","submit","mat-raised-button","","color","primary"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"h1",3),a.Dc(4),a.fc(5,"translate"),a.Sb(),a.Sb(),a.Sb(),a.Tb(6,"div",4),a.Tb(7,"div",2),a.Cc(8,yt,2,2,"ng-container",5),a.fc(9,"async"),a.Cc(10,Lt,27,23,"ng-container",6),a.fc(11,"async"),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Bb(4),a.Fc(" ",a.gc(5,4,"aula-planeta.examples.simple-state-management.title")," "),a.Bb(2),a.kc("ngClass",e.routeAnimationsElements),a.Bb(2),a.kc("ngIf",a.gc(9,6,e.userManagementService.users$)),a.Bb(2),a.kc("ngIf",a.gc(11,8,e.isEdit$)))},directives:[Y,i.i,i.k,i.j,q.a,q.e,q.c,q.h,q.g,q.b,G.a,mt.q,mt.l,mt.f,Tt.c,kt.b,mt.c,mt.k,mt.e,Tt.b],pipes:[p.c,i.b],styles:[".main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 1.25em}mat-card[_ngcontent-%COMP%]{margin:0 0 1.25em;display:flex}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{flex:1 0 auto}form[_ngcontent-%COMP%]{margin:1.25em 0}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:1.25em .625em 0 0}"],changeDetection:0}),t})();var At=n("gUAp");const $t=[{path:"",component:E,children:[{path:"",redirectTo:"todos",pathMatch:"full"},{path:"todos",component:dt,canActivate:[At.a],data:{title:"aula-planeta.examples.menu.todos"}},{path:"simple-state-management",component:Nt,canActivate:[At.a],data:{title:"aula-planeta.examples.menu.simple-state-management"}}]}];let jt=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[S.k.forChild($t)],S.k]}),t})();function Rt(t){return new g.a(t,v.a.i18nPrefix+"/assets/i18n/examples/",".json")}let Ut=(()=>{class t{constructor(){}}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},providers:[St],imports:[[f,h.a,jt,p.b.forChild({loader:{provide:p.a,useFactory:Rt,deps:[o.b]},isolate:!0})]]}),t})()}}]);