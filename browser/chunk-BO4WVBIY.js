import{a as te,c as Ze,f as Xe,h as ie,v as et}from"./chunk-SUFPLXEP.js";import{$a as ve,A as xe,Aa as Ve,B as F,C as Be,D as k,E as R,Eb as qe,Ga as y,H as A,Hb as Ae,Ia as me,J as de,K as Le,Ma as x,Mb as ee,Q as he,R as ue,S as u,T as j,Ta as be,U as pe,Ua as S,Va as B,Wa as $e,X as _,Xa as L,Y as _e,Ya as q,Za as je,_ as Ge,_a as ye,a as ae,aa as W,ab as we,b as ke,ba as l,bb as m,cb as v,db as De,ea as z,eb as Te,fa as fe,fb as Z,g as $,ga as He,gb as We,hb as ze,ib as G,j as g,jb as M,k as D,ka as ge,kb as Ke,l as Pe,lb as Qe,ma as Ue,mb as Je,n as re,nb as Ye,o as T,oa as K,ob as Re,pa as Q,pb as Ee,r as O,s as le,sa as P,ua as J,va as Y,vb as X,wa as N,y as b,z as ce}from"./chunk-XKGJ2RL6.js";var it=(()=>{let i=class i extends et{constructor(e){super(e)}getList(e=this.getEndpoint()){return this.httpClient.get(e).pipe(R(t=>T(()=>t)))}get(e){return this.httpClient.get(this.getEndpoint(e)).pipe(R(t=>T(()=>t)))}add(e){return this.httpClient.post(this.getEndpoint(),e).pipe(R(t=>T(()=>t)))}update(e){return this.httpClient.put(this.getEndpoint(),e).pipe(R(t=>T(()=>t)))}delete(e){return this.httpClient.delete(this.getEndpoint(e)).pipe(R(t=>T(()=>t)))}};i.\u0275fac=function(t){return new(t||i)(W(ie))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var $t=(()=>{let i=class i extends it{constructor(e){super(e),this.http=e,this.resource="plants"}getImagesList(e){let t=`${this.getEndpoint(e)}/images`,s=this.getList(t);return s.pipe(j(o=>{console.log(o)}),R(o=>T(()=>o))),s}};i.\u0275fac=function(t){return new(t||i)(W(ie))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function ne(n){n||(Ue(ne),n=l(J));let i=new $(a=>n.onDestroy(a.next.bind(a)));return a=>a.pipe(u(i))}var ct=["*"];function dt(n,i){if(n&1){let a=Te();m(0,"button",7),G("click",function(){let t=K(a).$implicit,s=M();return s.focus(),Q(s.select(t.id,s.NgbSlideEventSource.INDICATOR))}),v()}if(n&2){let a=i.$implicit,e=M();L("active",a.id===e.activeId),S("aria-labelledby","slide-"+a.id)("aria-controls","slide-"+a.id)("aria-selected",a.id===e.activeId)}}function ht(n,i){}function ut(n,i){if(n&1&&(m(0,"div",6)(1,"span",8),Z(2,0),v(),be(3,ht,0,0,"ng-template",9),v()),n&2){let a=i.$implicit,e=i.$index,t=i.$count;B("id","slide-"+a.id),y(2),We(e+1)(t),ze(2),y(),B("ngTemplateOutlet",a.templateRef)}}function pt(n,i){if(n&1){let a=Te();m(0,"button",10),G("click",function(){K(a);let t=M();return Q(t.arrowLeft())}),De(1,"span",11),m(2,"span",12),Z(3,1),v()(),m(4,"button",13),G("click",function(){K(a);let t=M();return Q(t.arrowRight())}),De(5,"span",14),m(6,"span",12),Z(7,2),v()()}if(n&2){let a=M();S("aria-labelledby",a.id+"-previous"),y(2),B("id",a.id+"-previous"),y(2),S("aria-labelledby",a.id+"-next"),y(2),B("id",a.id+"-next")}}var _t=["dialog"];var nt={animation:!0,transitionTimerDelayMs:5},st=(()=>{let i=class i{constructor(){this.animation=nt.animation}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function ft(n){let{transitionDelay:i,transitionDuration:a}=window.getComputedStyle(n),e=parseFloat(i),t=parseFloat(a);return(e+t)*1e3}function ot(n){return typeof n=="string"}function Oe(n){return n!=null}function gt(n){return n&&n.then}function Me(n){return(n||document.body).getBoundingClientRect()}function mt(n){return i=>new $(a=>{let e=o=>n.run(()=>a.next(o)),t=o=>n.run(()=>a.error(o)),s=()=>n.run(()=>a.complete());return i.subscribe({next:e,error:t,complete:s})})}var bt=()=>{},{transitionTimerDelayMs:yt}=nt,H=new Map,w=(n,i,a,e)=>{let t=e.context||{},s=H.get(i);if(s)switch(e.runningTransition){case"continue":return Pe;case"stop":n.run(()=>s.transition$.complete()),t=Object.assign(s.context,t),H.delete(i)}let o=a(i,e.animation,t)||bt;if(!e.animation||window.getComputedStyle(i).transitionProperty==="none")return n.run(()=>o()),re(void 0).pipe(mt(n));let r=new g,c=new g,d=r.pipe(Le(!0));H.set(i,{transition$:r,complete:()=>{c.next(),c.complete()},context:t});let h=ft(i);return n.runOutsideAngular(()=>{let E=b(i,"transitionend").pipe(u(d),F(({target:f})=>f===i)),p=ce(h+yt).pipe(u(d));Be(p,E,c).pipe(u(d)).subscribe(()=>{H.delete(i),n.run(()=>{o(),r.next(),r.complete()})})}),r.asObservable()},vt=n=>{H.get(n)?.complete()};var wt=(()=>{let i=class i{constructor(){this._ngbConfig=l(st),this.interval=5e3,this.wrap=!0,this.keyboard=!0,this.pauseOnHover=!0,this.pauseOnFocus=!0,this.showNavigationArrows=!0,this.showNavigationIndicators=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})(),C=function(n){return n.START="start",n.END="end",n}(C||{}),at=({classList:n})=>n.contains("carousel-item-start")||n.contains("carousel-item-end"),V=n=>{n.remove("carousel-item-start"),n.remove("carousel-item-end")},se=n=>{V(n),n.remove("carousel-item-prev"),n.remove("carousel-item-next")},Dt=(n,i,{direction:a})=>{let{classList:e}=n;if(!i){V(e),se(e),e.add("active");return}return at(n)?V(e):(e.add("carousel-item-"+(a===C.START?"next":"prev")),Me(n),e.add("carousel-item-"+a)),()=>{se(e),e.add("active")}},Tt=(n,i,{direction:a})=>{let{classList:e}=n;if(!i){V(e),se(e),e.remove("active");return}return at(n)?V(e):e.add("carousel-item-"+a),()=>{se(e),e.remove("active")}},Rt=0,Et=0,At=(()=>{let i=class i{constructor(){this.templateRef=l(me),this.id=`ngb-slide-${Rt++}`,this.slid=new N}};i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=He({type:i,selectors:[["ng-template","ngbSlide",""]],inputs:{id:"id"},outputs:{slid:"slid"},standalone:!0});let n=i;return n})(),an=(()=>{let i=class i{constructor(){this.NgbSlideEventSource=U,this._config=l(wt),this._platformId=l(Ve),this._ngZone=l(x),this._cd=l(Ae),this._container=l(Y),this._destroyRef=l(J),this._interval$=new D(this._config.interval),this._mouseHover$=new D(!1),this._focused$=new D(!1),this._pauseOnHover$=new D(this._config.pauseOnHover),this._pauseOnFocus$=new D(this._config.pauseOnFocus),this._pause$=new D(!1),this._wrap$=new D(this._config.wrap),this.id=`ngb-carousel-${Et++}`,this.animation=this._config.animation,this.keyboard=this._config.keyboard,this.showNavigationArrows=this._config.showNavigationArrows,this.showNavigationIndicators=this._config.showNavigationIndicators,this.slide=new N,this.slid=new N,this._transitionIds=null}set interval(e){this._interval$.next(e)}get interval(){return this._interval$.value}set wrap(e){this._wrap$.next(e)}get wrap(){return this._wrap$.value}set pauseOnHover(e){this._pauseOnHover$.next(e)}get pauseOnHover(){return this._pauseOnHover$.value}set pauseOnFocus(e){this._pauseOnFocus$.next(e)}get pauseOnFocus(){return this._pauseOnFocus$.value}set mouseHover(e){this._mouseHover$.next(e)}get mouseHover(){return this._mouseHover$.value}set focused(e){this._focused$.next(e)}get focused(){return this._focused$.value}arrowLeft(){this.focus(),this.prev(U.ARROW_LEFT)}arrowRight(){this.focus(),this.next(U.ARROW_RIGHT)}ngAfterContentInit(){Xe(this._platformId)&&this._ngZone.runOutsideAngular(()=>{let e=le([this.slide.pipe(O(t=>t.current),he(this.activeId)),this._wrap$,this.slides.changes.pipe(he(null))]).pipe(O(([t,s])=>{let o=this.slides.toArray(),r=this._getSlideIdxById(t);return s?o.length>1:r<o.length-1}),de());le([this._pause$,this._pauseOnHover$,this._mouseHover$,this._pauseOnFocus$,this._focused$,this._interval$,e]).pipe(O(([t,s,o,r,c,d,h])=>t||s&&o||r&&c||!h?0:d),de(),ue(t=>t>0?ce(t,t):xe),ne(this._destroyRef)).subscribe(()=>this._ngZone.run(()=>this.next(U.TIMER)))}),this.slides.changes.pipe(ne(this._destroyRef)).subscribe(()=>{this._transitionIds?.forEach(e=>vt(this._getSlideElement(e))),this._transitionIds=null,this._cd.markForCheck(),this._ngZone.onStable.pipe(A(1)).subscribe(()=>{for(let{id:e}of this.slides){let t=this._getSlideElement(e);e===this.activeId?t.classList.add("active"):t.classList.remove("active")}})})}ngAfterContentChecked(){let e=this._getSlideById(this.activeId);this.activeId=e?e.id:this.slides.length?this.slides.first.id:""}ngAfterViewInit(){if(this.activeId){let e=this._getSlideElement(this.activeId);e&&e.classList.add("active")}}select(e,t){this._cycleToSelected(e,this._getSlideEventDirection(this.activeId,e),t)}prev(e){this._cycleToSelected(this._getPrevSlide(this.activeId),C.END,e)}next(e){this._cycleToSelected(this._getNextSlide(this.activeId),C.START,e)}pause(){this._pause$.next(!0)}cycle(){this._pause$.next(!1)}focus(){this._container.nativeElement.focus()}_cycleToSelected(e,t,s){let o=this._transitionIds;if(o&&(o[0]!==e||o[1]!==this.activeId))return;let r=this._getSlideById(e);if(r&&r.id!==this.activeId){this._transitionIds=[this.activeId,e],this.slide.emit({prev:this.activeId,current:r.id,direction:t,paused:this._pause$.value,source:s});let c={animation:this.animation,runningTransition:"stop",context:{direction:t}},d=[],h=this._getSlideById(this.activeId);if(h){let Fe=w(this._ngZone,this._getSlideElement(h.id),Tt,c);Fe.subscribe(()=>{h.slid.emit({isShown:!1,direction:t,source:s})}),d.push(Fe)}let E=this.activeId;this.activeId=r.id;let p=this._getSlideById(this.activeId),f=w(this._ngZone,this._getSlideElement(r.id),Dt,c);f.subscribe(()=>{p?.slid.emit({isShown:!0,direction:t,source:s})}),d.push(f),k(...d).pipe(A(1)).subscribe(()=>{this._transitionIds=null,this.slid.emit({prev:E,current:r.id,direction:t,paused:this._pause$.value,source:s})})}this._cd.markForCheck()}_getSlideEventDirection(e,t){let s=this._getSlideIdxById(e),o=this._getSlideIdxById(t);return s>o?C.END:C.START}_getSlideById(e){return this.slides.find(t=>t.id===e)||null}_getSlideIdxById(e){let t=this._getSlideById(e);return t!=null?this.slides.toArray().indexOf(t):-1}_getNextSlide(e){let t=this.slides.toArray(),s=this._getSlideIdxById(e);return s===t.length-1?this.wrap?t[0].id:t[t.length-1].id:t[s+1].id}_getPrevSlide(e){let t=this.slides.toArray(),s=this._getSlideIdxById(e);return s===0?this.wrap?t[t.length-1].id:t[0].id:t[s-1].id}_getSlideElement(e){return this._container.nativeElement.querySelector(`#slide-${e}`)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=z({type:i,selectors:[["ngb-carousel"]],contentQueries:function(t,s,o){if(t&1&&Je(o,At,4),t&2){let r;Re(r=Ee())&&(s.slides=r)}},hostAttrs:["tabIndex","0",1,"carousel","slide"],hostVars:3,hostBindings:function(t,s){t&1&&G("keydown.arrowLeft",function(){return s.keyboard&&s.arrowLeft()})("keydown.arrowRight",function(){return s.keyboard&&s.arrowRight()})("mouseenter",function(){return s.mouseHover=!0})("mouseleave",function(){return s.mouseHover=!1})("focusin",function(){return s.focused=!0})("focusout",function(){return s.focused=!1}),t&2&&(S("aria-activedescendant","slide-"+s.activeId),$e("display","block"))},inputs:{animation:"animation",activeId:"activeId",interval:"interval",wrap:"wrap",keyboard:"keyboard",pauseOnHover:"pauseOnHover",pauseOnFocus:"pauseOnFocus",showNavigationArrows:"showNavigationArrows",showNavigationIndicators:"showNavigationIndicators"},outputs:{slide:"slide",slid:"slid"},exportAs:["ngbCarousel"],standalone:!0,features:[X],decls:7,vars:3,consts:()=>{let e;e=$localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;let t;t=$localize`:@@ngb.carousel.previous:Previous`;let s;return s=$localize`:@@ngb.carousel.next:Next`,[e,t,s,["role","tablist",1,"carousel-indicators"],["type","button","data-bs-target","","role","tab",3,"active"],[1,"carousel-inner"],["role","tabpanel",1,"carousel-item",3,"id"],["type","button","data-bs-target","","role","tab",3,"click"],[1,"visually-hidden"],[3,"ngTemplateOutlet"],["type","button",1,"carousel-control-prev",3,"click"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden",3,"id"],["type","button",1,"carousel-control-next",3,"click"],["aria-hidden","true",1,"carousel-control-next-icon"]]},template:function(t,s){t&1&&(m(0,"div",3),ve(1,dt,1,5,"button",4,ye),v(),m(3,"div",5),ve(4,ut,4,4,"div",6,ye),v(),be(6,pt,8,4)),t&2&&(L("visually-hidden",!s.showNavigationIndicators),y(),we(s.slides),y(3),we(s.slides),y(2),je(6,s.showNavigationArrows?6:-1))},dependencies:[Ze],encapsulation:2,changeDetection:0});let n=i;return n})(),U=function(n){return n.TIMER="timer",n.ARROW_LEFT="arrowLeft",n.ARROW_RIGHT="arrowRight",n.INDICATOR="indicator",n}(U||{}),rn=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=fe({type:i}),i.\u0275inj=_e({});let n=i;return n})();var Ce=function(n){return n[n.Tab=9]="Tab",n[n.Enter=13]="Enter",n[n.Escape=27]="Escape",n[n.Space=32]="Space",n[n.PageUp=33]="PageUp",n[n.PageDown=34]="PageDown",n[n.End=35]="End",n[n.Home=36]="Home",n[n.ArrowLeft=37]="ArrowLeft",n[n.ArrowUp=38]="ArrowUp",n[n.ArrowRight=39]="ArrowRight",n[n.ArrowDown=40]="ArrowDown",n}(Ce||{});var ln=(()=>{let n=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,i=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(n()||i()):!1})();var Ot=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function rt(n){let i=Array.from(n.querySelectorAll(Ot)).filter(a=>a.tabIndex!==-1);return[i[0],i[i.length-1]]}var Nt=(n,i,a,e=!1)=>{n.runOutsideAngular(()=>{let t=b(i,"focusin").pipe(u(a),O(s=>s.target));b(i,"keydown").pipe(u(a),F(s=>s.which===Ce.Tab),pe(t)).subscribe(([s,o])=>{let[r,c]=rt(i);(o===r||o===i)&&s.shiftKey&&(c.focus(),s.preventDefault()),o===c&&!s.shiftKey&&(r.focus(),s.preventDefault())}),e&&b(i,"click").pipe(u(a),pe(t),O(s=>s[1])).subscribe(s=>s.focus())})};var cn=new Date(1882,10,12),dn=new Date(2174,10,25);var hn=1e3*60*60*24;var Ie=1080,St=24*Ie,Mt=12*Ie+793,un=29*St+Mt,pn=11*Ie+204;var _n=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=fe({type:i}),i.\u0275inj=_e({});let n=i;return n})(),Ct=(()=>{let i=class i{constructor(){this._ngbConfig=l(st),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})(),I=class{constructor(i,a,e){this.nodes=i,this.viewRef=a,this.componentRef=e}};var It=(()=>{let i=class i{constructor(){this._document=l(te)}hide(){let e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),t=this._document.body,s=t.style,{overflow:o,paddingRight:r}=s;if(e>0){let c=parseFloat(window.getComputedStyle(t).paddingRight);s.paddingRight=`${c+e}px`}return s.overflow="hidden",()=>{e>0&&(s.paddingRight=r),s.overflow=o}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})(),Ft=(()=>{let i=class i{constructor(){this._nativeElement=l(Y).nativeElement,this._zone=l(x)}ngOnInit(){this._zone.onStable.asObservable().pipe(A(1)).subscribe(()=>{w(this._zone,this._nativeElement,(e,t)=>{t&&Me(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return w(this._zone,this._nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=z({type:i,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(t,s){t&2&&(q("modal-backdrop"+(s.backdropClass?" "+s.backdropClass:"")),L("show",!s.animation)("fade",s.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[X],decls:0,vars:0,template:function(t,s){},encapsulation:2});let n=i;return n})(),oe=class{update(i){}close(i){}dismiss(i){}},kt=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],Pt=["animation","backdropClass"],Ne=class{_applyWindowOptions(i,a){kt.forEach(e=>{Oe(a[e])&&(i[e]=a[e])})}_applyBackdropOptions(i,a){Pt.forEach(e=>{Oe(a[e])&&(i[e]=a[e])})}update(i){this._applyWindowOptions(this._windowCmptRef.instance,i),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,i)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(u(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(u(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(i,a,e,t){this._windowCmptRef=i,this._contentRef=a,this._backdropCmptRef=e,this._beforeDismiss=t,this._closed=new g,this._dismissed=new g,this._hidden=new g,i.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,o)=>{this._resolve=s,this._reject=o}),this.result.then(null,()=>{})}close(i){this._windowCmptRef&&(this._closed.next(i),this._resolve(i),this._removeModalElements())}_dismiss(i){this._dismissed.next(i),this._reject(i),this._removeModalElements()}dismiss(i){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(i);else{let a=this._beforeDismiss();gt(a)?a.then(e=>{e!==!1&&this._dismiss(i)},()=>{}):a!==!1&&this._dismiss(i)}}_removeModalElements(){let i=this._windowCmptRef.instance.hide(),a=this._backdropCmptRef?this._backdropCmptRef.instance.hide():re(void 0);i.subscribe(()=>{let{nativeElement:e}=this._windowCmptRef.location;e.parentNode.removeChild(e),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),a.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:e}=this._backdropCmptRef.location;e.parentNode.removeChild(e),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),k(i,a).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},Se=function(n){return n[n.BACKDROP_CLICK=0]="BACKDROP_CLICK",n[n.ESC=1]="ESC",n}(Se||{}),xt=(()=>{let i=class i{constructor(){this._document=l(te),this._elRef=l(Y),this._zone=l(x),this._closed$=new g,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new N,this.shown=new g,this.hidden=new g}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":ot(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(A(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:e}=this._elRef,t={animation:this.animation,runningTransition:"stop"},s=w(this._zone,e,()=>e.classList.remove("show"),t),o=w(this._zone,this._dialogEl.nativeElement,()=>{},t),r=k(s,o);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let e={animation:this.animation,runningTransition:"continue"},t=w(this._zone,this._elRef.nativeElement,(o,r)=>{r&&Me(o),o.classList.add("show")},e),s=w(this._zone,this._dialogEl.nativeElement,()=>{},e);k(t,s).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{b(e,"keydown").pipe(u(this._closed$),F(s=>s.which===Ce.Escape)).subscribe(s=>{this.keyboard?requestAnimationFrame(()=>{s.defaultPrevented||this._zone.run(()=>this.dismiss(Se.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let t=!1;b(this._dialogEl.nativeElement,"mousedown").pipe(u(this._closed$),j(()=>t=!1),ue(()=>b(e,"mouseup").pipe(u(this._closed$),A(1))),F(({target:s})=>e===s)).subscribe(()=>{t=!0}),b(e,"click").pipe(u(this._closed$)).subscribe(({target:s})=>{e===s&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!t&&this._zone.run(()=>this.dismiss(Se.BACKDROP_CLICK))),t=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){let t=e.querySelector("[ngbAutofocus]"),s=rt(e)[0];(t||s||e).focus()}}_restoreFocus(){let e=this._document.body,t=this._elWithFocus,s;t&&t.focus&&e.contains(t)?s=t:s=e,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&w(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=z({type:i,selectors:[["ngb-modal-window"]],viewQuery:function(t,s){if(t&1&&Ye(_t,7),t&2){let o;Re(o=Ee())&&(s._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(t,s){t&2&&(S("aria-modal",!0)("aria-labelledby",s.ariaLabelledBy)("aria-describedby",s.ariaDescribedBy),q("modal d-block"+(s.windowClass?" "+s.windowClass:"")),L("fade",s.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[X],ngContentSelectors:ct,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(t,s){t&1&&(Ke(),m(0,"div",1,0)(2,"div",2),Qe(3),v()()),t&2&&q("modal-dialog"+(s.size?" modal-"+s.size:"")+(s.centered?" modal-dialog-centered":"")+s.fullscreenClass+(s.scrollable?" modal-dialog-scrollable":"")+(s.modalDialogClass?" "+s.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let n=i;return n})(),Bt=(()=>{let i=class i{constructor(){this._applicationRef=l(qe),this._injector=l(P),this._environmentInjector=l(ge),this._document=l(te),this._scrollBar=l(It),this._activeWindowCmptHasChanged=new g,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new N;let e=l(x);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let t=this._windowCmpts[this._windowCmpts.length-1];Nt(e,t.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(t.location.nativeElement)}})}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,t,s){let o=s.container instanceof HTMLElement?s.container:Oe(s.container)?this._document.querySelector(s.container):this._document.body;if(!o)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new oe;e=s.injector||e;let c=e.get(ge,null)||this._environmentInjector,d=this._getContentRef(e,c,t,r,s),h=s.backdrop!==!1?this._attachBackdrop(o):void 0,E=this._attachWindowComponent(o,d.nodes),p=new Ne(E,d,h,s.beforeDismiss);return this._registerModalRef(p),this._registerWindowCmpt(E),p.hidden.pipe(A(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=f=>{p.close(f)},r.dismiss=f=>{p.dismiss(f)},r.update=f=>{p.update(f)},p.update(s),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),h&&h.instance&&h.changeDetectorRef.detectChanges(),E.changeDetectorRef.detectChanges(),p}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(t=>t.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let t=ee(Ft,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(t.hostView),e.appendChild(t.location.nativeElement),t}_attachWindowComponent(e,t){let s=ee(xt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:t});return this._applicationRef.attachView(s.hostView),e.appendChild(s.location.nativeElement),s}_getContentRef(e,t,s,o,r){return s?s instanceof me?this._createFromTemplateRef(s,o):ot(s)?this._createFromString(s):this._createFromComponent(e,t,s,o,r):new I([])}_createFromTemplateRef(e,t){let s={$implicit:t,close(r){t.close(r)},dismiss(r){t.dismiss(r)}},o=e.createEmbeddedView(s);return this._applicationRef.attachView(o),new I([o.rootNodes],o)}_createFromString(e){let t=this._document.createTextNode(`${e}`);return new I([[t]])}_createFromComponent(e,t,s,o,r){let c=P.create({providers:[{provide:oe,useValue:o}],parent:e}),d=ee(s,{environmentInjector:t,elementInjector:c}),h=d.location.nativeElement;return r.scrollable&&h.classList.add("component-host-scrollable"),this._applicationRef.attachView(d.hostView),new I([[h]],d.hostView,d)}_setAriaHidden(e){let t=e.parentElement;t&&e!==this._document.body&&(Array.from(t.children).forEach(s=>{s!==e&&s.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}),this._setAriaHidden(t))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,t)=>{e?t.setAttribute("aria-hidden",e):t.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){let t=()=>{let s=this._modalRefs.indexOf(e);s>-1&&(this._modalRefs.splice(s,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(t,t)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{let t=this._windowCmpts.indexOf(e);t>-1&&(this._windowCmpts.splice(t,1),this._activeWindowCmptHasChanged.next())})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})(),fn=(()=>{let i=class i{constructor(){this._injector=l(P),this._modalStack=l(Bt),this._config=l(Ct)}open(e,t={}){let s=ae(ke(ae({},this._config),{animation:this._config.animation}),t);return this._modalStack.open(this._injector,e,s)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var gn=new Ge("live announcer delay",{providedIn:"root",factory:()=>100});export{$t as a,At as b,an as c,rn as d,_n as e,fn as f};
