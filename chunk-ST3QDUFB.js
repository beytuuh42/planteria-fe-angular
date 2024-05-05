import{a as L,b as U,c as j,d as A,f as z}from"./chunk-BO4WVBIY.js";import{d as T,n as O,q as R}from"./chunk-SUFPLXEP.js";import{$a as E,Da as S,Ga as l,R as M,Ta as s,Va as v,Za as g,_a as F,ab as P,ba as d,bb as o,cb as a,db as u,ea as C,eb as $,ib as w,jb as _,oa as y,pa as h,qb as D,rb as c,sb as V,tb as f,vb as k,wb as N,xb as b,yb as x,zb as B}from"./chunk-XKGJ2RL6.js";var H=(t,e)=>e.id,K=t=>["/plants",t];function Q(t,e){if(t&1){let i=$();o(0,"div",4)(1,"div",5),u(2,"img",6),o(3,"div",7)(4,"h4",8),c(5),a(),o(6,"p",9),c(7),a()(),o(8,"div",10)(9,"div",11)(10,"small",12),c(11,"Last irrigation 3 mins ago"),a(),o(12,"div",13)(13,"button",14),w("click",function(){let n=y(i).$implicit,p=_(2),m=D(6);return h(p.onEdit(m,n))}),u(14,"i",15),a()()()()()()}if(t&2){let i=e.$implicit,r=_(2);l(2),v("src",r.plantService.getBaseUrl()+(i==null?null:i.photo),S)("alt",i==null?null:i.name),l(2),v("routerLink",N(5,K,i.id)),l(),f(" ",i.name," "),l(2),f(" ",i.description," ")}}function W(t,e){t&1&&E(0,Q,15,7,"div",4,H),t&2&&P(e)}function X(t,e){if(t&1){let i=$();o(0,"div",16)(1,"h4",17),c(2,"Edit Plant"),a(),o(3,"button",18),w("click",function(){let n=y(i).$implicit;return h(n.dismiss("Cross click"))}),a()(),u(4,"div",19),o(5,"div",20)(6,"button",21),w("click",function(){let n=y(i).$implicit;return h(n.close("Close click"))}),c(7," Close "),a()()}}var q=(()=>{let e=class e{constructor(){this.modalService=d(z),this.plantService=d(L)}ngOnInit(){this.plants$=this.plantService.getList()}onEdit(r,n){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=C({type:e,selectors:[["app-plant-list"]],standalone:!0,features:[k],decls:7,vars:3,consts:[["content",""],[1,"album","py-5","bg-body-tertiary"],[1,"container"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],[1,"col"],[1,"card","h-100","shadow-sm"],["height","100%",1,"card-img-top","img-thumbnail",3,"src","alt"],[1,"card-body"],[1,"card-title",3,"routerLink"],[1,"card-text"],[1,"card-footer"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"text-body-secondary"],[1,"btn-group"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"bi","bi-pencil-square"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(n,p){if(n&1&&(o(0,"div",1)(1,"div",2)(2,"div",3),s(3,W,2,0),b(4,"async"),a()()(),s(5,X,8,0,"ng-template",null,0,B)),n&2){let m;l(3),g(3,(m=x(4,1,p.plants$))?3:-1,m)}},dependencies:[R,T],styles:[".card-title[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{cursor:pointer}"]});let t=e;return t})();function Y(t,e){if(t&1&&(o(0,"h1",2),c(1),a(),o(2,"p",3),c(3),a(),o(4,"button",4),c(5,"Edit!"),a()),t&2){let i=e;l(),V(i==null?null:i.name),l(2),f(" ",i==null?null:i.description," ")}}function Z(t,e){if(t&1&&(o(0,"div",6),u(1,"img",7),a(),o(2,"div",8)(3,"h3"),c(4),a(),o(5,"p"),c(6,"Nulla vitae elit libero, a pharetra augue mollis interdum."),a()()),t&2){let i=_(),r=i.$implicit,n=i.$index,p=_(2);l(),v("src",p.plantService.getBaseUrl()+r.path,S),l(3),f("First slide label ",n,"")}}function tt(t,e){t&1&&s(0,Z,7,2,"ng-template",5)}function et(t,e){t&1&&(o(0,"ngb-carousel"),E(1,tt,1,0,null,5,F),a()),t&2&&(l(),P(e))}var J=(()=>{let e=class e{constructor(){this.route=d(O),this.plantService=d(L)}ngOnInit(){let r=Number(this.route.snapshot.paramMap.get("id"));this.plant$=this.plantService.get(r),this.plantImages$=this.plant$.pipe(M(n=>this.plantService.getImagesList(n.id)))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=C({type:e,selectors:[["app-plant-detail"]],standalone:!0,features:[k],decls:6,vars:6,consts:[[1,"p-5","mb-4","bg-body-tertiary","rounded-3"],[1,"container-fluid","py-5"],[1,"display-5","fw-bold"],[1,"col-md-8","fs-4"],["type","button",1,"btn","btn-primary","btn-lg"],["ngbSlide",""],[1,"d-flex","justify-content-center"],["alt","Random first slide",1,"d-block","w-25",3,"src"],[1,"carousel-caption","text-primary"]],template:function(n,p){if(n&1&&(o(0,"div",0)(1,"div",1),s(2,Y,6,2),b(3,"async"),a(),s(4,et,3,0,"ngb-carousel"),b(5,"async"),a()),n&2){let m,I;l(2),g(2,(m=x(3,2,p.plant$))?2:-1,m),l(2),g(4,(I=x(5,4,p.plantImages$))?4:-1,I)}},dependencies:[A,j,U,T]});let t=e;return t})();var Ct=[{path:"",component:q},{path:":id",component:J}];export{Ct as PLANT_ROUTES};