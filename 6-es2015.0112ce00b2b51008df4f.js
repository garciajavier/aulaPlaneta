(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"vm+o":function(t,e,n){"use strict";n.r(e),n.d(e,"LoginModule",(function(){return x}));var o=n("nIj0"),r=n("2kYt"),i=n("sEIs"),a=n("J+dc"),c=n("kuMc"),m=n("ZTXN"),s=n("mQTi"),b=n("EM62"),l=n("W1gw"),g=n("HYj3"),u=n("Meci"),d=n("29Wa"),h=n("Cd2c"),f=n("R7+U"),p=n("PBFl"),C=n("mFH5");function O(t,e){if(1&t&&(b.Sb(0,"mat-option",20),b.Bc(1),b.Rb()),2&t){const t=e.$implicit;b.jc("value",t),b.Ab(1),b.Cc(t.desc)}}let M=(()=>{class t{constructor(t,e,n,o,r){this.formBuilder=t,this.router=e,this.snackBar=n,this.overlayContainer=o,this.authManagementService=r,this.destroy$=new m.a,this.loading=!1,this.submitted=!1,this.overlayContainer.getContainerElement().classList.add("login-theme"),this.authManagementService.currentUser&&this.router.navigate(["/"])}ngOnInit(){this.registerForm=this.formBuilder.group({firstName:["",o.o.required],lastName:["",o.o.required],email:["",o.o.required,o.o.email],role:["",o.o.required],password:["",[o.o.required,o.o.minLength(4)]]})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onSubmit(){this.submitted=!0,this.registerForm.invalid||(this.loading=!0,this.authManagementService.register(this.registerForm.value).pipe(Object(a.a)(1),Object(c.a)(this.destroy$)).subscribe(()=>{this.snackBar.open("Registro completado","OK",{duration:2e3}),this.router.navigate(["/"])}))}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(o.c),b.Mb(i.g),b.Mb(l.a),b.Mb(g.e),b.Mb(s.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-register"]],decls:45,vars:5,consts:[[1,"login-theme","d-flex","flex-row","justify-content-center","align-items-center"],["id","register",1,"d-flex","mat-elevation-z4"],[1,"img-container","d-flex"],["src","assets/login.jpg","alt",""],["role","form",3,"formGroup","ngSubmit"],[1,"d-flex","flex-column"],[1,"w-100"],["aria-label","Nombre"],["matInput","","name","firstName","type","text","formControlName","firstName"],["aria-label","Apellido"],["matInput","","name","lastName","type","text","formControlName","lastName"],["aria-label","Email"],["matInput","","name","email","type","text","formControlName","email"],["aria-label","Contrase\xf1a"],["matInput","","name","password","type","text","formControlName","password"],["aria-label","Roles"],["formControlName","role","multiple","","panelClass","cdkSelect"],[3,"value",4,"ngFor","ngForOf"],["role","button","type","submit","mat-raised-button","","color","primary",1,"w-100",3,"disabled","click"],["role","button","mat-raised-button","","color","accent","routerLink","/login",1,"w-100"],[3,"value"]],template:function(t,e){1&t&&(b.Sb(0,"div",0),b.Sb(1,"section",1),b.Sb(2,"div",2),b.Nb(3,"img",3),b.Rb(),b.Sb(4,"mat-card"),b.Sb(5,"mat-card-title-group"),b.Sb(6,"mat-card-title"),b.Bc(7,"Crea a tu usuario"),b.Rb(),b.Rb(),b.Sb(8,"mat-card-content"),b.Sb(9,"form",4),b.Zb("ngSubmit",(function(){return e.onSubmit()})),b.Sb(10,"fieldset",5),b.Sb(11,"mat-form-field",6),b.Sb(12,"mat-label",7),b.Bc(13,"Nombre"),b.Rb(),b.Nb(14,"input",8),b.Sb(15,"mat-error"),b.Bc(16,"Campo requerido"),b.Rb(),b.Rb(),b.Sb(17,"mat-form-field",6),b.Sb(18,"mat-label",9),b.Bc(19,"Apellido"),b.Rb(),b.Nb(20,"input",10),b.Sb(21,"mat-error"),b.Bc(22,"Campo requerido"),b.Rb(),b.Rb(),b.Sb(23,"mat-form-field",6),b.Sb(24,"mat-label",11),b.Bc(25,"email"),b.Rb(),b.Nb(26,"input",12),b.Sb(27,"mat-error"),b.Bc(28,"Campo requerido"),b.Rb(),b.Rb(),b.Sb(29,"mat-form-field",6),b.Sb(30,"mat-label",13),b.Bc(31,"Contrase\xf1a"),b.Rb(),b.Nb(32,"input",14),b.Sb(33,"mat-error"),b.Bc(34,"Campo requerido"),b.Rb(),b.Rb(),b.Sb(35,"mat-form-field",6),b.Sb(36,"mat-label",15),b.Bc(37,"Roles"),b.Rb(),b.Sb(38,"mat-select",16),b.Ac(39,O,2,2,"mat-option",17),b.ec(40,"async"),b.Rb(),b.Rb(),b.Sb(41,"button",18),b.Zb("click",(function(){return e.onSubmit()})),b.Bc(42,"Crear"),b.Rb(),b.Sb(43,"button",19),b.Bc(44,"Iniciar Sesi\xf3n"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Ab(9),b.jc("formGroup",e.registerForm),b.Ab(30),b.jc("ngForOf",b.fc(40,3,e.authManagementService.roles$)),b.Ab(2),b.jc("disabled",e.registerForm.invalid))},directives:[u.a,u.i,u.h,u.d,o.p,o.k,o.e,d.c,d.f,h.a,o.b,o.j,o.d,d.b,f.a,r.j,p.a,i.h,C.l],pipes:[r.b],styles:[".login-theme[_ngcontent-%COMP%]{width:100vw;height:100vh;background-image:url(/assets/aula-bg.jpg);background-size:cover;background-repeat:no-repeat;background-blend-mode:lighten;background-color:hsla(0,0%,100%,.75)}.login-theme[_ngcontent-%COMP%]   #register[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{max-width:12.5em}.login-theme[_ngcontent-%COMP%]   #register[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-top-left-radius:.25em;border-bottom-left-radius:.25em;-o-object-fit:cover;object-fit:cover}.login-theme[_ngcontent-%COMP%]   #register[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{width:24.375em;border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:none}.login-theme[_ngcontent-%COMP%]   #register[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{margin-bottom:0}.login-theme[_ngcontent-%COMP%]   #register[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:1.5625em}.login-theme[_ngcontent-%COMP%]   #register[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:.625em 0}.login-theme[_ngcontent-%COMP%]   #register[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:.9375em;margin-bottom:0}"]}),t})();var P=n("eQuC"),S=n("pHcU"),_=n("Pq5H"),v=n("bFHC");const R=function(){return["fab","microsoft"]},w=function(){return["fab","google"]},y=[{path:"",component:(()=>{class t{constructor(t,e,n,o,r){this.formBuilder=t,this.route=e,this.router=n,this.authenticationService=o,this.authService=r,this.destroy$=new m.a,this.submitted=!1,this.authenticationService.currentUser&&this.router.navigate(["/"])}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",o.o.required],password:["",o.o.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||(S.a.isConnected?this.authenticationService.authLogin(this.f.email.value,this.f.password.value).pipe(Object(a.a)(1),Object(c.a)(this.destroy$)).subscribe(()=>{this.router.navigateByUrl("/")}):this.authenticationService.authLoginOffline().pipe(Object(a.a)(1),Object(c.a)(this.destroy$)).subscribe(()=>{setTimeout(()=>{this.router.navigateByUrl("/")},1e3)}))}socialLogin(t){switch(t){case"google":if(!S.a.isConnected)throw{statusText:"No est\xe1s conectado a internet"};this.authService.signIn(P.a.PROVIDER_ID).then(t=>{this.authenticationService.authLoginGoogle(t.idToken).pipe(Object(a.a)(1),Object(c.a)(this.destroy$)).subscribe(()=>{this.router.navigateByUrl("/")})});break;case"microsoft":if(!S.a.isConnected)throw{statusText:"No est\xe1s conectado a internet"};this.authService.signIn(P.b.PROVIDER_ID);break;default:this.onSubmit()}}register(){this.router.navigateByUrl("/login/register")}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(o.c),b.Mb(i.a),b.Mb(i.g),b.Mb(s.a),b.Mb(P.c))},t.\u0275cmp=b.Gb({type:t,selectors:[["ng-component"]],decls:38,vars:6,consts:[[1,"login-theme","d-flex","flex-row","justify-content-center","align-items-center"],["id","login",1,"d-flex","mat-elevation-z4"],[1,"img-container","d-flex"],["src","assets/login.jpg","alt",""],["role","form",1,"d-flex","flex-column",3,"formGroup"],[1,"d-flex","flex-column"],[1,"w-100"],["matInput","","name","email","type","text","formControlName","email"],["matInput","","name","password","type","password","formControlName","password"],["role","button","type","submit","mat-raised-button","","color","primary",1,"w-100",3,"disabled","click"],["href","#",1,"text-center"],["type","button","role","button","mat-raised-button","","color","accent",1,"w-100",3,"click"],["type","button","role","button","mat-raised-button","",3,"click"],[3,"icon"],["role","button","mat-raised-button","",3,"click"],["role","button","aria-label","Alumno","mat-mini-fab","","color","primary"]],template:function(t,e){1&t&&(b.Sb(0,"div",0),b.Sb(1,"section",1),b.Sb(2,"div",2),b.Nb(3,"img",3),b.Rb(),b.Sb(4,"mat-card"),b.Sb(5,"mat-card-title-group"),b.Sb(6,"mat-card-title"),b.Bc(7,"Ingresa a aulaPlaneta"),b.Rb(),b.Rb(),b.Sb(8,"mat-card-content"),b.Sb(9,"form",4),b.Sb(10,"fieldset",5),b.Sb(11,"mat-form-field",6),b.Sb(12,"mat-label"),b.Bc(13,"Usuario"),b.Rb(),b.Nb(14,"input",7),b.Sb(15,"mat-error"),b.Bc(16,"Campo requerido"),b.Rb(),b.Rb(),b.Sb(17,"mat-form-field",6),b.Sb(18,"mat-label"),b.Bc(19,"Contrase\xf1a"),b.Rb(),b.Nb(20,"input",8),b.Sb(21,"mat-error"),b.Bc(22,"Campo requerido"),b.Rb(),b.Rb(),b.Sb(23,"button",9),b.Zb("click",(function(){return e.onSubmit()})),b.Bc(24,"Entrar"),b.Rb(),b.Rb(),b.Sb(25,"a",10),b.Bc(26,"\xbfHas olvidado tu contrase\xf1a?"),b.Rb(),b.Sb(27,"button",11),b.Zb("click",(function(){return e.register()})),b.Bc(28,"Crear cuenta"),b.Rb(),b.Sb(29,"button",12),b.Zb("click",(function(){return e.socialLogin("microsoft")})),b.Nb(30,"fa-icon",13),b.Bc(31," Entrar con Office365 "),b.Rb(),b.Sb(32,"button",14),b.Zb("click",(function(){return e.socialLogin("google")})),b.Nb(33,"fa-icon",13),b.Bc(34," Entrar con Google "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(35,"button",15),b.Sb(36,"mat-icon"),b.Bc(37,"school"),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Ab(9),b.jc("formGroup",e.loginForm),b.Ab(14),b.jc("disabled",e.loginForm.invalid),b.Ab(7),b.jc("icon",b.kc(4,R)),b.Ab(3),b.jc("icon",b.kc(5,w)))},directives:[u.a,u.i,u.h,u.d,o.p,o.k,o.e,d.c,d.f,h.a,o.b,o.j,o.d,d.b,p.a,_.a,v.a],styles:[".login-theme[_ngcontent-%COMP%]{width:100vw;height:100vh;background-image:url(/assets/aula-bg.jpg);background-size:cover;background-repeat:no-repeat;background-blend-mode:lighten;background-color:hsla(0,0%,100%,.75)}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{max-width:12.5em}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-top-left-radius:.25em;border-bottom-left-radius:.25em;-o-object-fit:cover;object-fit:cover}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{width:24.375em;border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:none}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{margin-bottom:0}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:1.5625em}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:.625em 0 1.5625em;text-align:right;cursor:pointer}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:.625em 0}.login-theme[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:.9375em;margin-bottom:0}.login-theme[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{position:fixed;top:2em;right:2em}"]}),t})()},{path:"register",component:M}];let k=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[i.k.forChild(y)],i.k]}),t})();var B=n("hctd"),j=n("W8IG");let x=(()=>{class t{constructor(t){t.addIcons(j.e,j.b)}}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)(b.Wb(_.b))},imports:[[r.c,k,o.n,B.a,_.c],_.c]}),t})()}}]);