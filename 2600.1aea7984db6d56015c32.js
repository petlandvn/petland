(self.webpackChunkPetland=self.webpackChunkPetland||[]).push([[2600],{2600:(t,e,o)=>{"use strict";o.r(e),o.d(e,{AddCustomerModule:()=>I});var i=o(8583),n=o(9895),s=o(9765),r=o(6782),a=o(4762),c=o(7716),p=o(3679),u=o(2859);function h(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"ion-icon",8),c.NdJ("click",function(){c.CHM(t);const e=c.oxw();return e.onBack.emit(e.data)}),c.qZA()}}var l=(()=>(function(t){t.fullName="fullName",t.phone="phone",t.address="address",t.desc="desc"}(l||(l={})),l))();let d=(()=>{class t{constructor(t,e,o){this.alertController=t,this.formBuilder=e,this.modalCtrl=o,this.FormField=l,this.onSubmit=new c.vpe,this.submited=!1,this.popup=!1,this.destroy$=new s.xQ,this.onBack=new c.vpe}ngOnInit(){this.forworder(),this.form=this.formBuilder.group({[l.fullName]:[this.data.fullName,[p.kI.required]],[l.phone]:[this.data.phone,[p.kI.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]],[l.address]:[this.data.address]})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}submit(){return(0,a.mG)(this,void 0,void 0,function*(){this.submited=!0,this.form.controls[l.fullName].errors?this.notifyCreate("Th\xf4ng tin kh\xf4ng h\u1ee3p l\u1ec7","Vui l\xf2ng \u0111i\u1ec1n h\u1ecd v\xe0 t\xean kh\xe1ch h\xe0ng"):this.form.controls[l.phone].errors?this.notifyCreate("Th\xf4ng tin kh\xf4ng h\u1ee3p l\u1ec7","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng h\u1ee3p l\u1ec7"):this.form.valid&&this.onSubmit.emit(Object.assign(this.data,this.form.getRawValue()))})}forworder(){if(this.popup){const t={onSubmit:this.onSubmit,onBack:this.onBack};Object.keys(t).forEach(e=>{t[e].pipe((0,r.R)(this.destroy$)).subscribe(t=>{this.modalCtrl.dismiss({action:e,state:t})})})}}notifyCreate(t,e){this.alertController.create({mode:"ios",header:t,message:e,buttons:[{text:"OK"}]}).then(t=>{t.present()})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.Br),c.Y36(p.qu),c.Y36(u.IN))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-add-customer-c"]],inputs:{data:"data",popup:"popup"},outputs:{onSubmit:"onSubmit",onBack:"onBack"},decls:21,vars:7,consts:[[1,"form-validation",2,"padding","40px 30px 30px 30px",3,"formGroup"],[2,"display","flex","position","relative","justify-content","center","align-items","center"],["class","icon-back","name","arrow-back-outline",3,"click",4,"ngIf"],[1,"title-name"],["placeholder","H\u1ecd v\xe0 t\xean kh\xe1ch h\xe0ng","type","text",3,"formControlName"],["placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i","type","text",3,"formControlName"],["placeholder","\u0110\u1ecba ch\u1ec9","type","text",3,"formControlName"],[1,"form-btn","custom-font",2,"margin-top","12px",3,"click"],["name","arrow-back-outline",1,"icon-back",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"form",0),c.TgZ(1,"ion-grid"),c.TgZ(2,"ion-row"),c.TgZ(3,"ion-col"),c.TgZ(4,"div",1),c.YNc(5,h,1,0,"ion-icon",2),c.TgZ(6,"div",3),c._uU(7," Th\xf4ng tin kh\xe1ch h\xe0ng "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"ion-row"),c.TgZ(9,"ion-col"),c._UZ(10,"ion-input",4),c.qZA(),c.qZA(),c.TgZ(11,"ion-row"),c.TgZ(12,"ion-col"),c._UZ(13,"ion-input",5),c.qZA(),c.qZA(),c.TgZ(14,"ion-row"),c.TgZ(15,"ion-col"),c._UZ(16,"ion-input",6),c.qZA(),c.qZA(),c.TgZ(17,"ion-row"),c.TgZ(18,"ion-col"),c.TgZ(19,"button",7),c.NdJ("click",function(){return e.submit()}),c._uU(20," Ho\xe0n th\xe0nh "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.ekj("submited",e.submited),c.Q6J("formGroup",e.form),c.xp6(5),c.Q6J("ngIf",e.popup),c.xp6(5),c.Q6J("formControlName",e.FormField.fullName),c.xp6(3),c.Q6J("formControlName",e.FormField.phone),c.xp6(3),c.Q6J("formControlName",e.FormField.address))},directives:[p._Y,p.JL,p.sg,u.jY,u.Nd,u.wI,i.O5,u.pK,u.j9,p.JJ,p.u,u.gu],styles:[".title-name[_ngcontent-%COMP%]{font-weight:700;font-size:18px;line-height:21px;text-align:center;padding-bottom:12px}.icon-back[_ngcontent-%COMP%]{position:absolute;font-size:30px;top:-6px;left:3px;color:var(--color2);z-index:2}"]}),t})();var m=o(6011),f=o(9866),g=o(2541);function b(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"app-add-customer-c",3),c.NdJ("onSubmit",function(e){return c.CHM(t),c.oxw().submit(e)}),c.qZA()}if(2&t){const t=c.oxw();c.Q6J("data",t.data)}}let Z=(()=>{class t{constructor(t,e,o,i,n){this.mobileSupportServive=t,this.route=e,this.router=o,this.spinner=i,this.customerService=n,this.destroy$=new s.xQ}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),console.log("des")}ngOnInit(){this.router.events.pipe((0,r.R)(this.destroy$)).subscribe(t=>{t instanceof n.m2&&t.url.includes("/home/tabs/tab1/customer-new")&&(console.log("Vo"),this.data={fullName:null,phone:null,address:null,desc:null,url:null,seqNo:null,search:null},this.mobileSupportServive.toPopup(this.data,d,{}).subscribe(t=>{switch(t.action){case"onSubmit":this.submit(t.state);break;case"onBack":this.router.navigate(["/home/tabs/tab1"])}}))})}submit(t){this.spinner.show(),this.customerService.createCustomer(t).subscribe(t=>{this.route.snapshot.paramMap.get("id")?this.router.navigate(["/home/tabs/tab1/view-customer",t.id]).then(t=>{this.spinner.hide()}):this.router.navigate(["/home/tabs/tab1/customer/pet",t.id]).then(t=>{this.spinner.hide()})})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(m.f),c.Y36(n.gz),c.Y36(n.F0),c.Y36(f.t2),c.Y36(g.v))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-add-customer"]],features:[c._Bn([m.f])],decls:3,vars:1,consts:[[1,"pet-land-body"],[1,"content-wraper"],[3,"data","onSubmit",4,"ngIf"],[3,"data","onSubmit"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.YNc(2,b,1,1,"app-add-customer-c",2),c.qZA(),c.qZA()),2&t&&(c.xp6(2),c.Q6J("ngIf",e.data&&!e.mobileSupportServive.isMobile))},directives:[i.O5,d],styles:[".pet-land-body[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.pet-land-body[_ngcontent-%COMP%]   .content-wraper[_ngcontent-%COMP%]{width:100%;max-width:417px;border:1px solid #e5e5e5;box-shadow:0 0 4px #00000040;border-radius:30px}"]}),t})();var x=o(7468),v=o(345),w=o(1368),k=o(7676),y=o(1729),C=o(6359),T=o(2973),q=o(6045),S=o(2996),N=o(5435),A=o(3190),J=o(5257);function O(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"ion-icon",8),c.NdJ("click",function(){c.CHM(t);const e=c.oxw();return e.onBack.emit(e.data)}),c.qZA()}}var Y=(()=>(function(t){t.fullName="fullName",t.phone="phone",t.address="address",t.desc="desc"}(Y||(Y={})),Y))();let B=(()=>{class t{constructor(t,e,o){this.alertController=t,this.formBuilder=e,this.modalCtrl=o,this.FormField=Y,this.onSubmit=new c.vpe,this.submited=!1,this.popup=!1,this.destroy$=new s.xQ,this.onBack=new c.vpe}ngOnInit(){this.forworder(),this.form=this.formBuilder.group({[Y.fullName]:[this.data.fullName,[p.kI.required]],[Y.phone]:[this.data.phone,[p.kI.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]],[Y.address]:[this.data.address]})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}submit(){return(0,a.mG)(this,void 0,void 0,function*(){this.submited=!0,this.form.controls[Y.fullName].errors?this.notifyCreate("Th\xf4ng tin kh\xf4ng h\u1ee3p l\u1ec7","Vui l\xf2ng \u0111i\u1ec1n h\u1ecd v\xe0 t\xean kh\xe1ch h\xe0ng"):this.form.controls[Y.phone].errors?this.notifyCreate("Th\xf4ng tin kh\xf4ng h\u1ee3p l\u1ec7","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng h\u1ee3p l\u1ec7"):this.form.valid&&this.onSubmit.emit(Object.assign(this.data,this.form.getRawValue()))})}forworder(){if(this.popup){const t={onSubmit:this.onSubmit,onBack:this.onBack};Object.keys(t).forEach(e=>{t[e].pipe((0,r.R)(this.destroy$)).subscribe(t=>{this.modalCtrl.dismiss({action:e,state:t})})})}}notifyCreate(t,e){this.alertController.create({mode:"ios",header:t,message:e,buttons:[{text:"OK"}]}).then(t=>{t.present()})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.Br),c.Y36(p.qu),c.Y36(u.IN))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-edit-customer-c"]],inputs:{data:"data",popup:"popup"},outputs:{onSubmit:"onSubmit",onBack:"onBack"},decls:21,vars:7,consts:[[1,"form-validation",2,"padding","40px 30px 30px 30px",3,"formGroup"],[2,"display","flex","position","relative","justify-content","center","align-items","center"],["class","icon-back","name","arrow-back-outline",3,"click",4,"ngIf"],[1,"title-name"],["placeholder","H\u1ecd v\xe0 t\xean kh\xe1ch h\xe0ng","type","text",3,"formControlName"],["placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i","type","text",3,"formControlName"],["placeholder","\u0110\u1ecba ch\u1ec9","type","text",3,"formControlName"],[1,"form-btn","custom-font",2,"margin-top","12px",3,"click"],["name","arrow-back-outline",1,"icon-back",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"form",0),c.TgZ(1,"ion-grid"),c.TgZ(2,"ion-row"),c.TgZ(3,"ion-col"),c.TgZ(4,"div",1),c.YNc(5,O,1,0,"ion-icon",2),c.TgZ(6,"div",3),c._uU(7," Th\xf4ng tin kh\xe1ch h\xe0ng "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"ion-row"),c.TgZ(9,"ion-col"),c._UZ(10,"ion-input",4),c.qZA(),c.qZA(),c.TgZ(11,"ion-row"),c.TgZ(12,"ion-col"),c._UZ(13,"ion-input",5),c.qZA(),c.qZA(),c.TgZ(14,"ion-row"),c.TgZ(15,"ion-col"),c._UZ(16,"ion-input",6),c.qZA(),c.qZA(),c.TgZ(17,"ion-row"),c.TgZ(18,"ion-col"),c.TgZ(19,"button",7),c.NdJ("click",function(){return e.submit()}),c._uU(20," Ho\xe0n th\xe0nh "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.ekj("submited",e.submited),c.Q6J("formGroup",e.form),c.xp6(5),c.Q6J("ngIf",e.popup),c.xp6(5),c.Q6J("formControlName",e.FormField.fullName),c.xp6(3),c.Q6J("formControlName",e.FormField.phone),c.xp6(3),c.Q6J("formControlName",e.FormField.address))},directives:[p._Y,p.JL,p.sg,u.jY,u.Nd,u.wI,i.O5,u.pK,u.j9,p.JJ,p.u,u.gu],styles:[".title-name[_ngcontent-%COMP%]{font-weight:700;font-size:18px;line-height:21px;text-align:center;padding-bottom:12px}.icon-back[_ngcontent-%COMP%]{position:absolute;font-size:30px;top:-6px;left:3px;color:var(--color2);z-index:2}"]}),t})();function _(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"app-edit-customer-c",3),c.NdJ("onSubmit",function(e){return c.CHM(t),c.oxw().submit(e)}),c.qZA()}if(2&t){const t=c.oxw();c.Q6J("data",t.data)}}let F=(()=>{class t{constructor(t,e,o,i,n){this.mobileSupportServive=t,this.route=e,this.router=o,this.spinner=i,this.customerService=n,this.destroy$=new s.xQ}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngOnInit(){console.log("open"),this.route.params.pipe((0,S.j)("id"),(0,N.h)(t=>!!t),(0,A.w)(t=>this.customerService.get(t).pipe((0,J.q)(1))),(0,r.R)(this.destroy$)).subscribe(t=>{this.data=t,this.mobileSupportServive.toPopup(this.data,d,{}).subscribe(t=>{switch(t.action){case"onSubmit":this.submit(t.state);break;case"onBack":this.router.navigate(["/home/tabs/tab1/view-customer",t.state.id])}})})}submit(t){this.spinner.show(),this.customerService.createCustomer(t).subscribe(t=>{this.route.snapshot.paramMap.get("id")?this.router.navigate(["/home/tabs/tab1/view-customer",t.id]).then(t=>{this.spinner.hide()}):this.router.navigate(["/home/tabs/tab1/customer/pet",t.id]).then(t=>{this.spinner.hide()})})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(m.f),c.Y36(n.gz),c.Y36(n.F0),c.Y36(f.t2),c.Y36(g.v))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-edit-customer"]],features:[c._Bn([m.f])],decls:3,vars:1,consts:[[1,"pet-land-body"],[1,"content-wraper"],[3,"data","onSubmit",4,"ngIf"],[3,"data","onSubmit"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.YNc(2,_,1,1,"app-edit-customer-c",2),c.qZA(),c.qZA()),2&t&&(c.xp6(2),c.Q6J("ngIf",e.data&&!e.mobileSupportServive.isMobile))},directives:[i.O5,B],styles:[".pet-land-body[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.pet-land-body[_ngcontent-%COMP%]   .content-wraper[_ngcontent-%COMP%]{width:100%;max-width:417px;border:1px solid #e5e5e5;box-shadow:0 0 4px #00000040;border-radius:30px}"]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[u.Pc,i.ez,p.u5,n.Bz.forChild([{path:"",component:Z},{path:"edit/:id",component:F}]),x.Y,v.m,w.T,k.N,y.j,C.b,T.C,q.J]]}),t})()}}]);