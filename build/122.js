webpackJsonp([122],{1995:function(n,l,e){"use strict";function a(n){return t._57(0,[t._52(402653184,1,{chatComponent:0}),(n()(),t._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),t._30(2,16384,null,0,T.a,[A.a,t.t,t.V,[2,F.a]],null,null),(n()(),t._55(-1,null,["\n    "])),(n()(),t._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,G.b,G.a)),t._30(5,49152,null,0,J.a,[K.a,[2,F.a],[2,N.a],A.a,t.t,t.V],null,null),t._30(6,212992,null,0,U.a,[J.a,q.a,z.a,B.a],null,null),(n()(),t._55(-1,3,["\n        "])),(n()(),t._31(8,0,null,3,3,"ion-title",[],null,null,null,E.b,E.a)),t._30(9,49152,null,0,H.a,[A.a,t.t,t.V,[2,Q.a],[2,J.a]],null,null),(n()(),t._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),t._30(11,540672,null,0,S.a,[t.t,W.a,X.a,Y.a,z.a,q.a,Z.a,$.a,nn.a,ln.a,en.a,an.a,[2,N.a],[2,tn.a],[2,un.a],on.a,B.a,rn.a,dn.a,_n.a,t._11],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),t._55(-1,3,["\n\n        "])),(n()(),t._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),t._30(14,16384,null,1,cn.a,[A.a,t.t,t.V,[2,Q.a],[2,J.a]],null,null),t._52(603979776,2,{_buttons:1}),(n()(),t._55(-1,null,["\n            "])),(n()(),t._55(-1,null,["\n        "])),(n()(),t._55(-1,3,["\n    "])),(n()(),t._55(-1,null,["\n"])),(n()(),t._55(-1,null,["\n"])),(n()(),t._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,sn.b,sn.a)),t._30(22,4374528,null,0,tn.a,[A.a,q.a,fn.a,t.t,t.V,K.a,bn.a,t.M,[2,F.a],[2,N.a]],null,null),(n()(),t._55(-1,1,["\n    "])),(n()(),t._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,l,e){var a=!0;if("ionRefresh"===l){a=!1!==n.component.chatComponent.doRefresh(e)&&a}return a},null,null)),t._30(25,212992,null,0,hn.a,[q.a,tn.a,t.M,pn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),t._55(-1,null,["\n        "])),(n()(),t._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,mn.b,mn.a)),t._30(28,114688,null,0,vn.a,[hn.a,A.a],{pullingText:[0,"pullingText"]},null),t._47(131072,gn.a,[z.a,t.j]),(n()(),t._55(-1,null,["\n    "])),(n()(),t._55(-1,1,["\n\n    "])),(n()(),t._31(32,0,null,1,1,"addon-mod-chat-index",[],null,[[null,"dataRetrieved"]],function(n,l,e){var a=!0;if("dataRetrieved"===l){a=!1!==n.component.updateData(e)&&a}return a},k.c,k.b)),t._30(33,245760,[[1,4]],0,_.a,[t.C,Rn.a,xn.a,N.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(n()(),t._55(-1,1,["\n"])),(n()(),t._55(-1,null,["\n"]))],function(n,l){var e=l.component;n(l,6,0);n(l,11,0,e.title,"module",e.module.id,e.courseId);n(l,25,0,e.chatComponent.loaded);n(l,28,0,t._34(1,"",t._56(l,28,0,t._44(l,29).transform("core.pulltorefresh")),""));n(l,33,0,e.module,e.courseId)},function(n,l){n(l,4,0,t._44(l,5)._hidden,t._44(l,5)._sbPadding);n(l,21,0,t._44(l,22).statusbarPadding,t._44(l,22)._hasRefresher);n(l,24,0,"inactive"!==t._44(l,25).state,t._44(l,25)._top);n(l,27,0,t._44(l,28).r.state)})}Object.defineProperty(l,"__esModule",{value:!0});var t=e(0),u=e(5),o=e(3),r=e(32),d=e(734),_=e(498),c=this&&this.__decorate||function(n,l,e,a){var t,u=arguments.length,o=u<3?l:null===a?a=Object.getOwnPropertyDescriptor(l,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,l,e,a);else for(var r=n.length-1;r>=0;r--)(t=n[r])&&(o=(u<3?t(o):u>3?t(l,e,o):t(l,e))||o);return u>3&&o&&Object.defineProperty(l,e,o),o},i=this&&this.__metadata||function(n,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,l)},s=function(){function n(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.title=this.module.name}return n.prototype.updateData=function(n){this.title=n.name||this.title},c([Object(t._9)(_.a),i("design:type",_.a)],n.prototype,"chatComponent",void 0),n=c([Object(t.m)({selector:"page-addon-mod-chat-index",templateUrl:"index.html"}),i("design:paramtypes",[u.t])],n)}(),f=this&&this.__decorate||function(n,l,e,a){var t,u=arguments.length,o=u<3?l:null===a?a=Object.getOwnPropertyDescriptor(l,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,l,e,a);else for(var r=n.length-1;r>=0;r--)(t=n[r])&&(o=(u<3?t(o):u>3?t(l,e,o):t(l,e))||o);return u>3&&o&&Object.defineProperty(l,e,o),o},b=function(){function n(){}return n=f([Object(t.I)({declarations:[s],imports:[r.a,d.a,u.l.forChild(s),o.b.forChild()]})],n)}(),h=e(1522),p=e(1523),m=e(1524),v=e(1525),g=e(1526),R=e(1527),x=e(1528),y=e(1529),I=e(1530),j=e(1531),O=e(1532),C=e(1533),P=e(1534),M=e(1537),V=e(1538),w=e(1535),D=e(1536),L=e(1539),k=e(1557),T=e(370),A=e(8),F=e(39),G=e(721),J=e(211),K=e(35),N=e(21),U=e(473),q=e(16),z=e(17),B=e(9),E=e(722),H=e(314),Q=e(247),S=e(48),W=e(1),X=e(4),Y=e(11),Z=e(2),$=e(22),nn=e(6),ln=e(18),en=e(10),an=e(15),tn=e(29),un=e(28),on=e(42),rn=e(41),dn=e(31),_n=e(36),cn=e(371),sn=e(181),fn=e(34),bn=e(107),hn=e(159),pn=e(44),mn=e(212),vn=e(173),gn=e(25),Rn=e(279),xn=e(24),yn=e(69),In=t._29({encapsulation:2,styles:[],data:{}}),jn=t._27("page-addon-mod-chat-index",s,function(n){return t._57(0,[(n()(),t._31(0,0,null,null,1,"page-addon-mod-chat-index",[],null,null,null,a,In)),t._30(1,49152,null,0,s,[yn.a],null,null)],null,null)},{},{},[]),On=e(7),Cn=e(23),Pn=e(366),Mn=e(367),Vn=e(369),wn=e(368),Dn=e(472),Ln=e(720),kn=e(106),Tn=e(26),An=e(271),Fn=e(74),Gn=e(270);e.d(l,"AddonModChatIndexPageModuleNgFactory",function(){return Jn});var Jn=t._28(b,[],function(n){return t._40([t._41(512,t.o,t._21,[[8,[h.a,p.a,m.a,v.a,g.a,R.a,x.a,y.a,I.a,j.a,O.a,C.a,P.a,M.a,V.a,w.a,D.a,L.a,k.a,jn]],[3,t.o],t.K]),t._41(4608,On.m,On.l,[t.G,[2,On.w]]),t._41(4608,Cn.x,Cn.x,[]),t._41(4608,Cn.d,Cn.d,[]),t._41(4608,Pn.b,Pn.a,[]),t._41(4608,Mn.a,Mn.b,[]),t._41(4608,Vn.b,Vn.a,[]),t._41(4608,wn.b,wn.a,[]),t._41(4608,z.a,z.a,[Dn.a,Pn.b,Mn.a,Vn.b,wn.b,z.b,z.c]),t._41(512,r.a,r.a,[]),t._41(512,On.b,On.b,[]),t._41(512,Cn.v,Cn.v,[]),t._41(512,Cn.i,Cn.i,[]),t._41(512,Cn.s,Cn.s,[]),t._41(512,Ln.a,Ln.a,[]),t._41(512,o.b,o.b,[]),t._41(512,kn.a,kn.a,[]),t._41(512,Tn.a,Tn.a,[]),t._41(512,An.a,An.a,[]),t._41(512,Fn.a,Fn.a,[]),t._41(512,d.a,d.a,[]),t._41(512,Ln.b,Ln.b,[]),t._41(512,b,b,[]),t._41(256,z.c,void 0,[]),t._41(256,z.b,void 0,[]),t._41(256,Gn.a,s,[])])})}});