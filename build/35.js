webpackJsonp([35],{2071:function(n,t,e){"use strict";function l(n){return a._57(0,[a._52(402653184,1,{content:0}),(n()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,I.a,[J.a,a.t,a.V,[2,K.a]],null,null),(n()(),a._55(-1,null,["\n    "])),(n()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,N.b,N.a)),a._30(5,49152,null,0,q.a,[z.a,[2,K.a],[2,A.a],J.a,a.t,a.V],null,null),a._30(6,212992,null,0,B.a,[q.a,H.a,Q.a,X.a],null,null),(n()(),a._55(-1,3,["\n        "])),(n()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,Y.b,Y.a)),a._30(9,49152,null,0,Z.a,[J.a,a.t,a.V,[2,$.a],[2,q.a]],null,null),(n()(),a._55(10,0,["",""])),a._47(131072,nn.a,[Q.a,a.j]),(n()(),a._55(-1,3,["\n\n        "])),(n()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,tn.a,[J.a,a.t,a.V,[2,$.a],[2,q.a]],null,null),a._52(603979776,2,{_buttons:1}),(n()(),a._55(-1,null,["\n            "])),(n()(),a._55(-1,null,["\n        "])),(n()(),a._55(-1,3,["\n    "])),(n()(),a._55(-1,null,["\n"])),(n()(),a._55(-1,null,["\n"])),(n()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,en.b,en.a)),a._30(22,4374528,null,0,ln.a,[J.a,H.a,an.a,a.t,a.V,z.a,on.a,a.M,[2,K.a],[2,A.a]],null,null),(n()(),a._55(-1,1,["\n    "])),(n()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,t,e){var l=!0;if("ionRefresh"===t){l=!1!==n.component.refreshData(e)&&l}return l},null,null)),a._30(25,212992,null,0,un.a,[H.a,ln.a,a.M,rn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),a._55(-1,null,["\n        "])),(n()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,cn.b,cn.a)),a._30(28,114688,null,0,sn.a,[un.a,J.a],{pullingText:[0,"pullingText"]},null),a._47(131072,nn.a,[Q.a,a.j]),(n()(),a._55(-1,null,["\n    "])),(n()(),a._55(-1,1,["\n    "])),(n()(),a._31(32,0,null,1,1,"core-site-plugins-plugin-content",[],null,null,null,_n.b,_n.a)),a._30(33,376832,[[1,4]],0,r.a,[pn.a,fn.a,[2,A.a],a.F],{component:[0,"component"],method:[1,"method"],args:[2,"args"],initResult:[3,"initResult"],data:[4,"data"],preSets:[5,"preSets"],pageTitle:[6,"pageTitle"]},null),(n()(),a._55(-1,1,["\n"])),(n()(),a._55(-1,null,["\n"]))],function(n,t){var e=t.component;n(t,6,0);n(t,25,0,e.content&&e.content.dataLoaded);n(t,28,0,a._34(1,"",a._56(t,28,0,a._44(t,29).transform("core.pulltorefresh")),""));n(t,33,0,e.component,e.method,e.args,e.initResult,e.jsData,e.preSets,e.title)},function(n,t){var e=t.component;n(t,4,0,a._44(t,5)._hidden,a._44(t,5)._sbPadding);n(t,10,0,a._56(t,10,0,a._44(t,11).transform(e.title)));n(t,21,0,a._44(t,22).statusbarPadding,a._44(t,22)._hasRefresher);n(t,24,0,"inactive"!==a._44(t,25).state,a._44(t,25)._top);n(t,27,0,a._44(t,28).r.state)})}Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),o=e(5),i=e(3),u=e(32),r=e(156),c=this&&this.__decorate||function(n,t,e,l){var a,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,t,e,l);else for(var u=n.length-1;u>=0;u--)(a=n[u])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},s=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},_=function(){function n(n){this.title=n.get("title"),this.component=n.get("component"),this.method=n.get("method"),this.args=n.get("args"),this.initResult=n.get("initResult"),this.jsData=n.get("jsData"),this.preSets=n.get("preSets")}return n.prototype.refreshData=function(n){this.content.refreshContent(!1).finally(function(){n.complete()})},n.prototype.ionViewWillEnter=function(){this.content.callComponentFunction("ionViewWillEnter")},n.prototype.ionViewDidEnter=function(){this.content.callComponentFunction("ionViewDidEnter")},n.prototype.ionViewWillLeave=function(){this.content.callComponentFunction("ionViewWillLeave")},n.prototype.ionViewDidLeave=function(){this.content.callComponentFunction("ionViewDidLeave")},n.prototype.ionViewWillUnload=function(){this.content.callComponentFunction("ionViewWillUnload")},n.prototype.ionViewCanLeave=function(){return this.content.callComponentFunction("ionViewCanLeave")},c([Object(a._9)(r.a),s("design:type",r.a)],n.prototype,"content",void 0),n=c([Object(a.m)({selector:"page-core-site-plugins-plugin",templateUrl:"plugin-page.html"}),s("design:paramtypes",[o.t])],n)}(),p=e(741),f=this&&this.__decorate||function(n,t,e,l){var a,o=arguments.length,i=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,t,e,l);else for(var u=n.length-1;u>=0;u--)(a=n[u])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},d=function(){function n(){}return n=f([Object(a.I)({declarations:[_],imports:[u.a,p.a,o.l.forChild(_),i.b.forChild()]})],n)}(),h=e(1522),b=e(1523),g=e(1524),m=e(1525),v=e(1526),y=e(1527),R=e(1528),V=e(1529),j=e(1530),w=e(1531),C=e(1532),D=e(1533),O=e(1534),P=e(1578),F=e(1606),L=e(1607),S=e(1608),W=e(1609),x=e(1610),E=e(1611),M=e(1612),T=e(1613),U=e(1614),k=e(1615),G=e(1616),I=e(370),J=e(8),K=e(39),N=e(721),q=e(211),z=e(35),A=e(21),B=e(473),H=e(16),Q=e(17),X=e(9),Y=e(722),Z=e(314),$=e(247),nn=e(25),tn=e(371),en=e(181),ln=e(29),an=e(34),on=e(107),un=e(159),rn=e(44),cn=e(212),sn=e(173),_n=e(407),pn=e(4),fn=e(58),dn=e(69),hn=a._29({encapsulation:2,styles:[],data:{}}),bn=a._27("page-core-site-plugins-plugin",_,function(n){return a._57(0,[(n()(),a._31(0,0,null,null,1,"page-core-site-plugins-plugin",[],null,null,null,l,hn)),a._30(1,49152,null,0,_,[dn.a],null,null)],null,null)},{},{},[]),gn=e(7),mn=e(23),vn=e(366),yn=e(367),Rn=e(369),Vn=e(368),jn=e(472),wn=e(720),Cn=e(106),Dn=e(26),On=e(477),Pn=e(270);e.d(t,"CoreSitePluginsPluginPageModuleNgFactory",function(){return Fn});var Fn=a._28(d,[],function(n){return a._40([a._41(512,a.o,a._21,[[8,[h.a,b.a,g.a,m.a,v.a,y.a,R.a,V.a,j.a,w.a,C.a,D.a,O.a,P.a,F.a,L.a,S.a,W.a,x.a,E.a,M.a,T.a,U.a,k.a,G.a,bn]],[3,a.o],a.K]),a._41(4608,gn.m,gn.l,[a.G,[2,gn.w]]),a._41(4608,mn.x,mn.x,[]),a._41(4608,mn.d,mn.d,[]),a._41(4608,vn.b,vn.a,[]),a._41(4608,yn.a,yn.b,[]),a._41(4608,Rn.b,Rn.a,[]),a._41(4608,Vn.b,Vn.a,[]),a._41(4608,Q.a,Q.a,[jn.a,vn.b,yn.a,Rn.b,Vn.b,Q.b,Q.c]),a._41(512,u.a,u.a,[]),a._41(512,gn.b,gn.b,[]),a._41(512,mn.v,mn.v,[]),a._41(512,mn.i,mn.i,[]),a._41(512,mn.s,mn.s,[]),a._41(512,wn.a,wn.a,[]),a._41(512,i.b,i.b,[]),a._41(512,Cn.a,Cn.a,[]),a._41(512,Dn.a,Dn.a,[]),a._41(512,On.a,On.a,[]),a._41(512,p.a,p.a,[]),a._41(512,wn.b,wn.b,[]),a._41(512,d,d,[]),a._41(256,Q.c,void 0,[]),a._41(256,Q.b,void 0,[]),a._41(256,Pn.a,_,[])])})}});