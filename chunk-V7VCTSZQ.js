import{a as X,b as x,c as Y,d as ee,e as te,f as ie,g as ae,i as ne,j as re}from"./chunk-526B22NQ.js";import{$,A as l,C as M,D as S,E as H,F as y,J as _,L as O,M as f,N as g,O as u,P as B,Q as R,R as n,S as r,T as b,U as C,V as k,W as m,X as N,Y as q,Z as d,_ as j,aa as G,ba as z,c as E,ca as T,g as P,ia as Q,la as Z,m as A,p as h,r as c,ra as J,s as p,t as v,ta as K,u as w,ua as W,x as I,y as F}from"./chunk-CMP777OV.js";var U={_id:"",title:"",description:"",done:!1};var oe=a=>a.response,se=a=>a.response;var{API_URL:ce}=K,D=class a{API_URL=`${ce}task`;http=h(Z);headers=new Q({"Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"});createTask(t){return this.http.post(this.API_URL,t)}getAllTasks(){return this.http.get(this.API_URL,{headers:this.headers}).pipe(P(t=>oe(t)))}getTaskById(t){let e=`${this.API_URL}/${t}`;return this.http.get(e).pipe(P(i=>se(i)))}updateTask(t){let e=`${this.API_URL}/${t._id}`;return this.http.put(e,t,{headers:this.headers})}deleteTask(t){let e=`${this.API_URL}/${t}`;return this.http.delete(e)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=A({token:a,factory:a.\u0275fac,providedIn:"root"})};function me(a,t){if(a&1){let e=C();n(0,"article",0)(1,"div",1)(2,"span",2),k("click",function(){c(e);let o=m(),s=T(0);return p(o.changeStatus(s))})("keydown.enter",function(){c(e);let o=m(),s=T(0);return p(o.changeStatus(s))})("keydown.space",function(){c(e);let o=m(),s=T(0);return p(o.changeStatus(s))}),r(),n(3,"button",3)(4,"span"),d(5),r()(),n(6,"div"),v(),n(7,"svg",4),k("click",function(){c(e);let o=m(),s=T(0);return p(o.toEdit(s))}),b(8,"path",5)(9,"path",6)(10,"path",7)(11,"path",8),r(),n(12,"svg",9),k("click",function(){c(e);let o=m(),s=T(0);return p(o.deleteTask(s._id))}),b(13,"path",10),r()()(),w(),n(14,"div",11)(15,"div",12),d(16),r()()()}if(a&2){m();let e=T(0);l(2),g("bg-transparent",!e.done)("border-white",e.done),l(),O("data-bs-target","#"+e._id),l(2),j(e.title),l(9),f("id",e._id),l(2),$(" ",e.description," ")}}var L=class a{task=F.required();editTask=I();toChangeStatus=I();toDeleteTask=I();toEdit(t){this.editTask.emit(t)}changeStatus(t){this.toChangeStatus.emit(t)}deleteTask(t){this.toDeleteTask.emit(t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["app-taskcard"]],inputs:{task:[1,"task"]},outputs:{editTask:"editTask",toChangeStatus:"toChangeStatus",toDeleteTask:"toDeleteTask"},decls:2,vars:2,consts:[[1,"d-flex","flex-column","w-100","m-auto","p-2",2,"max-width","600px","min-width","330px"],[1,"w-100","bg-primary","text-white","d-flex","justify-content-between","align-items-center","px-2"],["tabindex","0",1,"rounded-circle","bg-white","d-inline-block","text-center","border",2,"width","24px","height","24px","line-height","24px","font-size","0.8rem","cursor","pointer",3,"click","keydown.enter","keydown.space"],["type","button","data-bs-toggle","collapse","aria-expanded","false","aria-controls","collapseTask",1,"btn","d-flex","justify-content-between",2,"width","70%"],["fill","none","height","24","stroke-width","1.5","viewBox","0 0 24 24","width","24","xmlns","http://www.w3.org/2000/svg",1,"mx-2",2,"cursor","pointer",3,"click"],["d","M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round"],["d","M8 10H16M8 6H12M8 14H11","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round"],["d","M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z","fill","currentColor","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round"],["d","M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round"],["viewBox","0 0 448 512","xmlns","http://www.w3.org/2000/svg","height","24","width","24",2,"cursor","pointer",3,"click"],["fill","currentColor","d","M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"],[1,"collapse",3,"id"],[1,"card","card-body","text-white"]],template:function(e,i){if(e&1&&(G(0),_(1,me,17,8,"article",0)),e&2){let o=z(i.task());l(),u(o?1:-1)}},encapsulation:2,changeDetection:0})};var ue=["staticBackdrop"],ke=(a,t)=>t._id;function he(a,t){if(a&1){let e=C();n(0,"app-taskcard",25),k("editTask",function(o){c(e);let s=m();return p(s.editTask(o))})("toChangeStatus",function(o){c(e);let s=m();return p(s.toChangeStatus(o))})("toDeleteTask",function(o){c(e);let s=m();return p(s.toDeleteTask(o))}),r()}if(a&2){let e=t.$implicit;f("task",e)}}function _e(a,t){a&1&&(n(0,"h1",14),d(1,"Update Task"),r())}function fe(a,t){a&1&&(n(0,"h1",14),d(1,"New Task"),r())}function be(a,t){a&1&&(n(0,"span"),d(1,"* Required field"),r())}function Te(a,t){a&1&&(n(0,"span"),d(1,"* Required more characters"),r())}function ge(a,t){if(a&1&&(n(0,"div",21),_(1,be,2,0,"span")(2,Te,2,0,"span"),r()),a&2){let e=m();l(),u(!(e.title==null||e.title.errors==null)&&e.title.errors.required?1:-1),l(),u(!(e.title==null||e.title.errors==null)&&e.title.errors.minlength?2:-1)}}function Ce(a,t){a&1&&(n(0,"span"),d(1,"* Required field"),r())}function xe(a,t){a&1&&(n(0,"span"),d(1,"* Required more characters"),r())}function ve(a,t){if(a&1&&(n(0,"div",21),_(1,Ce,2,0,"span")(2,xe,2,0,"span"),r()),a&2){let e=m();l(),u(!(e.description==null||e.description.errors==null)&&e.description.errors.required?1:-1),l(),u(!(e.description==null||e.description.errors==null)&&e.description.errors.minlength?2:-1)}}function we(a,t){if(a&1&&(n(0,"button",24),d(1," Update "),r()),a&2){let e=m();f("disabled",e.disabledUpdate())}}function Ie(a,t){if(a&1&&(n(0,"button",24),d(1," Create "),r()),a&2){let e=m();f("disabled",e.createUpdateForm.invalid)}}var de=class a{staticBackdrop=H.required("staticBackdrop");taskService=h(D);authService=h(W);formBuilder=h(ne);renderer=h(M);router=h(J);tasks=S([]);update=S(!1);updateTask=S(U);createUpdateForm=this.formBuilder.group({_id:[""],title:["",[x.required,x.minLength(3)]],description:["",[x.required,x.minLength(3)]]});ngOnInit(){this.getTasks()}submitCreateUpdateForm(){if(this.update()&&this.taskService.updateTask(this.createUpdateForm.value).subscribe({next:e=>{e.success&&this.getTasks()},complete:()=>{this.close()}}),!this.update()){let t=this.createUpdateForm.value,{_id:e}=t,i=E(t,["_id"]);this.taskService.createTask(i).subscribe({next:o=>{o.success&&this.getTasks()},complete:()=>{this.close()}})}}getTasks(){this.taskService.getAllTasks().subscribe({next:t=>{this.tasks.set(t)}})}close(){this.createUpdateForm.markAsUntouched(),this.createUpdateForm.reset(),this.update.set(!1),this.updateTask.set(U);let t=this.staticBackdrop().nativeElement;t.classList.remove("show","d-block"),t.style.display="none",document.querySelectorAll(".modal-backdrop").forEach(i=>i.remove())}editTask(t){this.update.set(!0),this.updateTask.set(t),this.createUpdateForm.patchValue(t);let e=this.staticBackdrop().nativeElement;e.classList.add("show","d-block"),e.style.display="block";let i=this.renderer.createElement("div");this.renderer.addClass(i,"modal-backdrop"),this.renderer.addClass(i,"fade"),this.renderer.addClass(i,"show"),this.renderer.appendChild(document.body,i)}toChangeStatus(t){t.done=!t.done,this.taskService.updateTask(t).subscribe({next:e=>{e.success&&this.getTasks()}})}toDeleteTask(t){this.taskService.deleteTask(t).subscribe({next:e=>{e.success&&this.getTasks()}})}disabledUpdate(){let t=this.createUpdateForm.value;return t.done=this.updateTask().done,JSON.stringify(t)===JSON.stringify(this.updateTask())}exit(){this.authService.logout(),this.router.navigate(["/login"])}get title(){return this.createUpdateForm.get("title")}get description(){return this.createUpdateForm.get("description")}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["app-dashboard"]],viewQuery:function(e,i){e&1&&N(i.staticBackdrop,ue,5),e&2&&q()},decls:35,vars:9,consts:[["staticBackdrop",""],["data-bs-theme","dark","data-lt-installed","true",1,"d-flex","flex-column","align-items-center","justify-content-center","py-4","bg-body-tertiary",2,"min-height","100vh","height","auto"],["tabindex","0",1,"position-absolute","exit",3,"click","keydown.enter","keydown.space"],["viewBox","0 0 96 96","height","30","fill","#fff","width","30","xmlns","http://www.w3.org/2000/svg"],["d","M20.4844,54H66a6,6,0,0,0,0-12H20.4844l7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844-8.4844l-18,18a5.9979,5.9979,0,0,0,0,8.4844l18,18a5.9994,5.9994,0,1,0,8.4844-8.4844Z"],["d","M90,0H42a5.9966,5.9966,0,0,0-6,6V18a6,6,0,0,0,12,0V12H84V84H48V78a6,6,0,0,0-12,0V90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,90,0Z"],[1,"text-white"],[1,"w-100"],[3,"task"],["data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-outline-primary","mx-auto","w-100","m-2",2,"max-width","600px","min-width","330px"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title","fs-5","text-white"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"ngSubmit","formGroup"],[1,"form-floating","my-2"],["id","floatingInput","type","email","formControlName","title","placeholder","name@example.com",1,"form-control","text-white"],["for","floatingInput",1,"text-secondary-emphasis"],[1,"text-danger"],["formControlName","description","type","text","id","floatingDescription","placeholder","Description",1,"form-control","text-white"],["for","floatingDescription",1,"text-secondary-emphasis"],["data-bs-dismiss","modal","type","submit",1,"btn","btn-primary","w-100","py-2",3,"disabled"],[3,"editTask","toChangeStatus","toDeleteTask","task"]],template:function(e,i){if(e&1){let o=C();n(0,"main",1)(1,"div",2),k("click",function(){return c(o),p(i.exit())})("keydown.enter",function(){return c(o),p(i.exit())})("keydown.space",function(){return c(o),p(i.exit())}),v(),n(2,"svg",3)(3,"g"),b(4,"path",4)(5,"path",5),r()()(),w(),n(6,"h1",6),d(7,"Tasks"),r(),n(8,"article",7),B(9,he,1,1,"app-taskcard",8,ke),r(),n(11,"button",9),d(12," + Create new task "),r(),n(13,"div",10,0)(15,"div",11)(16,"div",12)(17,"div",13),_(18,_e,2,0,"h1",14)(19,fe,2,0,"h1",14),n(20,"button",15),k("click",function(){return c(o),p(i.close())}),r()(),n(21,"div",16)(22,"form",17),k("ngSubmit",function(){return c(o),p(i.submitCreateUpdateForm())}),n(23,"div",18),b(24,"input",19),n(25,"label",20),d(26,"Title Task"),r()(),_(27,ge,3,2,"div",21),n(28,"div",18),b(29,"input",22),n(30,"label",23),d(31,"Description"),r()(),_(32,ve,3,2,"div",21)(33,we,2,1,"button",24)(34,Ie,2,1,"button",24),r()()()()()()}e&2&&(l(9),R(i.tasks()),l(9),u(i.update()?18:19),l(4),f("formGroup",i.createUpdateForm),l(2),g("is-invalid",(i.title==null?null:i.title.invalid)&&(i.title==null?null:i.title.touched)),l(3),u(i.title!=null&&i.title.invalid&&(i.title!=null&&i.title.touched)?27:-1),l(2),g("is-invalid",(i.description==null?null:i.description.invalid)&&(i.description==null?null:i.description.touched)),l(3),u(i.description!=null&&i.description.invalid&&(i.description!=null&&i.description.touched)?32:-1),l(),u(i.update()?33:34))},dependencies:[L,re,te,X,Y,ee,ie,ae],styles:[".exit[_ngcontent-%COMP%]{top:10%;right:10%;cursor:pointer}"],changeDetection:0})};export{de as DashboardPage};