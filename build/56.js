webpackJsonp([56],{2051:function(e,t,n){"use strict";function i(e){return l._57(0,[(e()(),l._31(0,0,null,null,8,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,S.b,S.a)),l._30(1,4374528,null,0,C.a,[D.a,w.a,H.a,l.t,l.V,L.a,T.a,l.M,[2,M.a],[2,V.a]],null,null),(e()(),l._55(-1,1,["\n    "])),(e()(),l._31(3,0,null,1,4,"div",[["class","core-bglogo"]],null,null,null,null,null)),(e()(),l._55(-1,null,["\n        "])),(e()(),l._31(5,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,N.b,N.a)),l._30(6,114688,null,0,k.a,[D.a,l.t,l.V],null,null),(e()(),l._55(-1,null,["\n    "])),(e()(),l._55(-1,1,["\n"])),(e()(),l._55(-1,null,["\n"]))],function(e,t){e(t,6,0)},function(e,t){e(t,0,0,l._44(t,1).statusbarPadding,l._44(t,1)._hasRefresher);e(t,5,0,l._44(t,6)._paused)})}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=n(5),r=n(754),o=n(10),u=n(154),s=n(1),c=n(40),f=n(125),d=this&&this.__decorate||function(e,t,n,i){var l,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(a<3?l(r):a>3?l(t,n,r):l(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e,t,n,i,l,a){this.navCtrl=e,this.appProvider=t,this.initDelegate=n,this.sitesProvider=i,this.loginHelper=l,this.splashScreen=a}return e.prototype.ionViewDidLoad=function(){var e=this;this.initDelegate.ready().then(function(){var t=e.appProvider.getRedirect();return t.siteId&&(e.appProvider.storeRedirect("","",""),Date.now()-t.timemodified<2e4)?t.siteId!=c.a.NO_SITE_ID?e.sitesProvider.loadSite(t.siteId,t.page,t.params).then(function(n){if(n)return e.loginHelper.goToSiteInitialPage(e.navCtrl,t.page,t.params,{animate:!1})}).catch(function(){return e.loadPage()}):e.loginHelper.goToNoSitePage(e.navCtrl,t.page,t.params):e.loadPage()}).then(function(){setTimeout(function(){e.splashScreen.hide()},100)})},e.prototype.loadPage=function(){var e=this;return this.sitesProvider.isLoggedIn()?this.loginHelper.isSiteLoggedOut()?this.sitesProvider.logout().then(function(){return e.loadPage()}):this.sitesProvider.getCurrentSite().getPublicConfig().catch(function(){return{}}).then(function(t){return e.sitesProvider.checkRequiredMinimumVersion(t).then(function(){return e.loginHelper.goToSiteInitialPage()}).catch(function(){return e.loadPage()})}):this.navCtrl.setRoot("CoreLoginSitesPage")},e=d([Object(l.m)({selector:"page-core-login-init",templateUrl:"init.html"}),g("design:paramtypes",[a.s,o.a,u.a,s.a,f.a,r.a])],e)}(),_=this&&this.__decorate||function(e,t,n,i){var l,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(a<3?l(r):a>3?l(t,n,r):l(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},h=function(){function e(){}return e=_([Object(l.I)({declarations:[p],imports:[a.l.forChild(p)]})],e)}(),v=n(1522),P=n(1523),b=n(1524),m=n(1525),y=n(1526),R=n(1527),O=n(1528),j=n(1529),I=n(1530),S=n(181),C=n(29),D=n(8),w=n(16),H=n(34),L=n(35),T=n(107),M=n(39),V=n(21),N=n(121),k=n(101),x=l._29({encapsulation:2,styles:[],data:{}}),q=l._27("page-core-login-init",p,function(e){return l._57(0,[(e()(),l._31(0,0,null,null,1,"page-core-login-init",[],null,null,null,i,x)),l._30(1,49152,null,0,p,[V.a,o.a,u.a,s.a,f.a,r.a],null,null)],null,null)},{},{},[]),E=n(7),F=n(23),G=n(720),J=n(270);n.d(t,"CoreLoginInitPageModuleNgFactory",function(){return K});var K=l._28(h,[],function(e){return l._40([l._41(512,l.o,l._21,[[8,[v.a,P.a,b.a,m.a,y.a,R.a,O.a,j.a,I.a,q]],[3,l.o],l.K]),l._41(4608,E.m,E.l,[l.G,[2,E.w]]),l._41(4608,F.x,F.x,[]),l._41(4608,F.d,F.d,[]),l._41(512,E.b,E.b,[]),l._41(512,F.v,F.v,[]),l._41(512,F.i,F.i,[]),l._41(512,F.s,F.s,[]),l._41(512,G.a,G.a,[]),l._41(512,G.b,G.b,[]),l._41(512,h,h,[]),l._41(256,J.a,p,[])])})}});