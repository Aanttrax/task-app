import{D as g,F as a,J as v,O as C,R as x,S as y,T as c,ea as b,f as d,i as f,j as h,ja as w,ka as A,m as u,ma as H,na as M,oa as P,p as i,pa as D,qa as I,ra as R,sa as O,ua as s}from"./chunk-CMP777OV.js";var S=()=>{let t=i(s),o=i(R);return t.isAuthenticated()||o.navigate(["/"]),t.isAuthenticated()};var _=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-4C7DVUAT.js").then(t=>t.LoginPage)},{path:"register",loadComponent:()=>import("./chunk-GGJ4K2OP.js").then(t=>t.RegisterPage)},{path:"dashboard",canActivate:[S],loadComponent:()=>import("./chunk-V7VCTSZQ.js").then(t=>t.DashboardPage)},{path:"**",redirectTo:""}];var F=(t,o)=>{let e=i(s).getToken(),n=t.clone({headers:t.headers.append("auth-token",e)});return o(n)};var p=class t{isloading=g(!1);show(){this.isloading.set(!0)}hide(){this.isloading.set(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})};function E(t,o){let e=i(p);return e.show(),o(t).pipe(h(n=>{n.type===w.Response&&e.hide()}),f(n=>(n instanceof A&&e.hide(),d(()=>n))))}var k={providers:[O(_),b(),H(P(),M([F,E]))]};function j(t,o){t&1&&(x(0,"div",0)(1,"div",1),c(2,"div")(3,"div"),y()())}var m=class t{loaderService=i(p);get isLoading(){return this.loaderService.isloading()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["app-loader"]],decls:1,vars:1,consts:[[1,"overlay"],[1,"lds-ripple"]],template:function(e,n){e&1&&v(0,j,4,0,"div",0),e&2&&C(n.isLoading?0:-1)},styles:[".overlay[_ngcontent-%COMP%]{z-index:99;position:fixed;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.lds-ripple[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;animation:_ngcontent-%COMP%_lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.5s}@keyframes _ngcontent-%COMP%_lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:0}4.9%{top:36px;left:36px;width:0;height:0;opacity:0}5%{top:36px;left:36px;width:0;height:0;opacity:1}to{top:0;left:0;width:72px;height:72px;opacity:0}}"],changeDetection:0})};var l=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["app-root"]],decls:2,vars:0,template:function(e,n){e&1&&c(0,"app-loader")(1,"router-outlet")},dependencies:[I,m],encapsulation:2,changeDetection:0})};D(l,k).catch(t=>console.error(t));
