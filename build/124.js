webpackJsonp([124],{1992:function(n,e,l){"use strict";function View_AddonModBookIndexPage_0(n){return a._57(0,[a._52(402653184,1,{bookComponent:0}),(n()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,D.a,[L.a,a.t,a.V,[2,T.a]],null,null),(n()(),a._55(-1,null,["\n    "])),(n()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),a._30(5,49152,null,0,G.a,[H.a,[2,T.a],[2,J.a],L.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[G.a,N.a,U.a,q.a],null,null),(n()(),a._55(-1,3,["\n        "])),(n()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,E.a,[L.a,a.t,a.V,[2,Q.a],[2,G.a]],null,null),(n()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,S.a,[a.t,W.a,X.a,Y.a,U.a,N.a,Z.a,$.a,nn.a,en.a,ln.a,an.a,[2,J.a],[2,tn.a],[2,on.a],un.a,q.a,dn.a,rn.a,_n.a,a._11],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),a._55(-1,3,["\n\n        "])),(n()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,cn.a,[L.a,a.t,a.V,[2,Q.a],[2,G.a]],null,null),a._52(603979776,2,{_buttons:1}),(n()(),a._55(-1,null,["\n            "])),(n()(),a._55(-1,null,["\n        "])),(n()(),a._55(-1,3,["\n    "])),(n()(),a._55(-1,null,["\n"])),(n()(),a._55(-1,null,["\n"])),(n()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,sn.b,sn.a)),a._30(22,4374528,null,0,tn.a,[L.a,N.a,fn.a,a.t,a.V,H.a,bn.a,a.M,[2,T.a],[2,J.a]],null,null),(n()(),a._55(-1,1,["\n    "])),(n()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,l){var a=!0;if("ionRefresh"===e){a=!1!==n.component.bookComponent.doRefresh(l)&&a}return a},null,null)),a._30(25,212992,null,0,pn.a,[N.a,tn.a,a.M,hn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),a._55(-1,null,["\n        "])),(n()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,gn.b,gn.a)),a._30(28,114688,null,0,mn.a,[pn.a,L.a],{pullingText:[0,"pullingText"]},null),a._47(131072,In.a,[U.a,a.j]),(n()(),a._55(-1,null,["\n    "])),(n()(),a._55(-1,1,["\n\n    "])),(n()(),a._31(32,0,null,1,1,"addon-mod-book-index",[],null,[[null,"dataRetrieved"]],function(n,e,l){var a=!0;if("dataRetrieved"===e){a=!1!==n.component.updateData(l)&&a}return a},w.c,w.b)),a._30(33,245760,[[1,4]],0,r.a,[a.C,xn.a,vn.a,ln.a,kn.a,Mn.a,Pn.a,[2,tn.a]],{module:[0,"module"],courseId:[1,"courseId"],initialChapterId:[2,"initialChapterId"]},{dataRetrieved:"dataRetrieved"}),(n()(),a._55(-1,1,["\n"])),(n()(),a._55(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,6,0);n(e,11,0,l.title,"module",l.module.id,l.courseId);n(e,25,0,l.bookComponent.loaded);n(e,28,0,a._34(1,"",a._56(e,28,0,a._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,l.module,l.courseId,l.chapterId)},function(n,e){n(e,4,0,a._44(e,5)._hidden,a._44(e,5)._sbPadding);n(e,21,0,a._44(e,22).statusbarPadding,a._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==a._44(e,25).state,a._44(e,25)._top);n(e,27,0,a._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var a=l(0),t=l(5),o=l(3),u=l(32),d=l(752),r=l(497),_=this&&this.__decorate||function(n,e,l,a){var t,o=arguments.length,u=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(t=n[d])&&(u=(o<3?t(u):o>3?t(e,l,u):t(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},c=function(){function AddonModBookIndexPage(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.chapterId=n.get("chapterId"),this.title=this.module.name}return AddonModBookIndexPage.prototype.updateData=function(n){this.title=n.name||this.title},_([Object(a._9)(r.a),i("design:type",r.a)],AddonModBookIndexPage.prototype,"bookComponent",void 0),AddonModBookIndexPage=_([Object(a.m)({selector:"page-addon-mod-book-index",templateUrl:"index.html"}),i("design:paramtypes",[t.t])],AddonModBookIndexPage)}(),s=this&&this.__decorate||function(n,e,l,a){var t,o=arguments.length,u=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(t=n[d])&&(u=(o<3?t(u):o>3?t(e,l,u):t(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},f=function(){function AddonModBookIndexPageModule(){}return AddonModBookIndexPageModule=s([Object(a.I)({declarations:[c],imports:[u.a,d.a,t.l.forChild(c),o.b.forChild()]})],AddonModBookIndexPageModule)}(),b=l(1522),p=l(1523),h=l(1524),g=l(1525),m=l(1526),I=l(1527),x=l(1528),v=l(1529),k=l(1530),M=l(1531),P=l(1532),R=l(1533),y=l(1534),j=l(1537),A=l(1538),B=l(1535),O=l(1536),C=l(1539),V=l(1540),w=l(1588),D=l(370),L=l(8),T=l(39),F=l(721),G=l(211),H=l(35),J=l(20),K=l(473),N=l(16),U=l(18),q=l(9),z=l(722),E=l(314),Q=l(247),S=l(47),W=l(1),X=l(4),Y=l(11),Z=l(2),$=l(22),nn=l(6),en=l(17),ln=l(10),an=l(15),tn=l(29),on=l(28),un=l(42),dn=l(40),rn=l(30),_n=l(36),cn=l(371),sn=l(181),fn=l(34),bn=l(107),pn=l(159),hn=l(44),gn=l(212),mn=l(173),In=l(25),xn=l(221),vn=l(13),kn=l(398),Mn=l(162),Pn=l(163),Rn=l(69),yn=a._29({encapsulation:2,styles:[],data:{}}),jn=a._27("page-addon-mod-book-index",c,function View_AddonModBookIndexPage_Host_0(n){return a._57(0,[(n()(),a._31(0,0,null,null,1,"page-addon-mod-book-index",[],null,null,null,View_AddonModBookIndexPage_0,yn)),a._30(1,49152,null,0,c,[Rn.a],null,null)],null,null)},{},{},[]),An=l(7),Bn=l(23),On=l(366),Cn=l(367),Vn=l(369),wn=l(368),Dn=l(472),Ln=l(720),Tn=l(106),Fn=l(26),Gn=l(271),Hn=l(74),Jn=l(274),Kn=l(270);l.d(e,"AddonModBookIndexPageModuleNgFactory",function(){return Nn});var Nn=a._28(f,[],function(n){return a._40([a._41(512,a.o,a._21,[[8,[b.a,p.a,h.a,g.a,m.a,I.a,x.a,v.a,k.a,M.a,P.a,R.a,y.a,j.a,A.a,B.a,O.a,C.a,V.a,w.a,jn]],[3,a.o],a.K]),a._41(4608,An.m,An.l,[a.G,[2,An.w]]),a._41(4608,Bn.x,Bn.x,[]),a._41(4608,Bn.d,Bn.d,[]),a._41(4608,On.b,On.a,[]),a._41(4608,Cn.a,Cn.b,[]),a._41(4608,Vn.b,Vn.a,[]),a._41(4608,wn.b,wn.a,[]),a._41(4608,U.a,U.a,[Dn.a,On.b,Cn.a,Vn.b,wn.b,U.b,U.c]),a._41(512,u.a,u.a,[]),a._41(512,An.b,An.b,[]),a._41(512,Bn.v,Bn.v,[]),a._41(512,Bn.i,Bn.i,[]),a._41(512,Bn.s,Bn.s,[]),a._41(512,Ln.a,Ln.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Tn.a,Tn.a,[]),a._41(512,Fn.a,Fn.a,[]),a._41(512,Gn.a,Gn.a,[]),a._41(512,Hn.a,Hn.a,[]),a._41(512,Jn.a,Jn.a,[]),a._41(512,d.a,d.a,[]),a._41(512,Ln.b,Ln.b,[]),a._41(512,f,f,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Kn.a,c,[])])})}});