(this.webpackJsonpexpenses=this.webpackJsonpexpenses||[]).push([[0],{208:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(35),i=e.n(o),a=e(8),c=e(11),s=e(25),l=e(13),d=Object(r.createContext)(),u=e(36),h=e(78),b=e(7),p={items:[{id:1,icon:"computer",color:"red",name:"New computer",value:"940",date:{month:5,year:2021}},{id:2,icon:"shopping",color:"green",name:"Groceries",value:"80",date:{month:6,year:2021}},{id:3,icon:"tshirt",color:"yellow",name:"New t-shirt",value:"30",date:{month:5,year:2021}},{id:4,icon:"car",color:"purple",name:"New brake pads",value:"480",date:{month:7,year:2021}},{id:5,icon:"computer",color:"purple",name:"React courses",value:"1200",date:{month:6,year:2021}},{id:6,icon:"shopping",color:"red",name:"Chewing gum",value:"5",date:{month:9,year:2021}},{id:7,icon:"heart",color:"orange",name:"Date with Kylie",value:"250",date:{month:7,year:2021}},{id:8,icon:"chemistry",color:"yellow",name:"Medicines",value:"90",date:{month:5,year:2021}}]},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REMOVE_ITEM":return{items:Object(b.a)(t.items.filter((function(t){return t.id!==n.payload.id})))};case"ADD_ITEM":return{items:[].concat(Object(b.a)(t.items),[n.payload.newItem])};default:return t}},f=e(79),j=e.n(f),g=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(n){return}}(),x=Object(u.c)(m,g,Object(u.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(u.a)(h.a)));x.subscribe(j()((function(){!function(t){try{var n=JSON.stringify(t);localStorage.setItem("state",n)}catch(e){}}({items:x.getState().items})}),1e3));var O,y,v,w,k,S,z,D=x,E=e.p+"static/media/paint.849956e0.svg",T=e.p+"static/media/heart.034ab291.svg",C=e.p+"static/media/shopping.0415469d.svg",_=e.p+"static/media/car.0f828968.svg",I=e.p+"static/media/tshirt.af272425.svg",M=e.p+"static/media/computer.16e15d56.svg",W=e.p+"static/media/chemistry.37831714.svg",P=e.p+"static/media/trash.667f51f1.svg",N=e.p+"static/media/tick.9844bb96.svg",A=function(t){var n=new Date,e=n.getFullYear(),r=n.getMonth();switch(t){case"year":return e;case"month":return r;default:return{month:r,year:e}}},L={months:[0,1,2,3,4,5,6,7,8,9,10,11],years:[2024,2023,2022,2021,2020,2019,2018,2017]},R=["January","February","March","April","May","June","July","August","September","October","November","December"],V=function(t){return t.reduce((function(t,n){return t+parseInt(n.value,10)}),0)},B={paint:E,heart:T,shopping:C,car:_,tshirt:I,computer:M,chemistry:W,trash:P,tick:N},J=e(3),X=e(2),F=e.p+"static/media/logo.8a5a1cd3.svg",Y=e(1),U=X.d.nav(O||(O=Object(J.a)(["\n\tmin-width: 40vw;\n\tpadding: 18px 20px;\n\tborder-radius: 20px;\n\toverflow: hidden;\n\tbackground-color: ",";\n\tposition: absolute;\n\tbottom: 30px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"])),(function(t){return t.theme.color.gray100})),$=X.d.span(y||(y=Object(J.a)(["\n\tcontent: url(",");\n\theight: 100%;\n"])),F),G=X.d.button(v||(v=Object(J.a)(["\n\tborder-radius: 20px;\n\tbackground-color: ",";\n\tpadding: 15px 20px;\n\tfont-weight: ","; ;\n"])),(function(t){return t.theme.color.gray200}),(function(t){return t.theme.fontWeight.bold})),H=function(t){var n=t.toggleSettings;return Object(Y.jsxs)(U,{children:[Object(Y.jsx)($,{}),Object(Y.jsx)(G,{onClick:function(){return n(!0)},children:"Settings"})]})},K=X.d.h1(w||(w=Object(J.a)(["\n\tfont-size: ",";\n\tfont-weight: ",";\n"])),(function(t){var n=t.theme;return t.big?n.fontSize.xl:n.fontSize.l}),(function(t){return t.theme.fontWeight.bold})),q=X.d.p(k||(k=Object(J.a)(["\n\tfont-size: ",";\n\tfont-weight: ",";\n"])),(function(t){return t.theme.fontSize.s}),(function(t){return t.theme.fontWeight.regular})),Q=X.d.button(S||(S=Object(J.a)(["\n\tposition: relative;\n\tpadding: ",";\n\tborder-radius: 8px;\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-weight: ",";\n\tfont-size: ",";\n\tbox-shadow: 0 8px 0 0 ",",\n\t\t",";\n\ttop: -8px;\n\ttransition: ease 0.2s;\n\n\t&:active {\n\t\ttop: 0;\n\t\tbox-shadow: 0 0 0 0, 0 0px 2px 2px rgba(0, 0, 0, 0.1);\n\t}\n"])),(function(t){return t.secondary?"2px 30px":"10px 40px"}),(function(t){var n=t.theme;return t.secondary?n.color.gray300:n.color.blue}),(function(t){return t.theme.color.white}),(function(t){return t.theme.fontWeight.bold}),(function(t){var n=t.theme;return t.secondary?n.fontSize.xxs:n.fontSize.xs}),(function(t){var n=t.theme;return t.secondary?n.color.gray350:n.color.blueDark}),"0 6px 8px 2px rgba(0,0,0,.2)"),Z=X.d.span(z||(z=Object(J.a)(["\n\tmask: url(",") center/80% no-repeat;\n\tbackground-color: white;\n\tdisplay: block;\n\twidth: 32px;\n\theight: 32px;\n\tmargin: 0 auto;\n"])),(function(t){return t.icon})),tt=function(t){var n=Object.assign({},t);return Object(Y.jsx)(Q,Object(a.a)(Object(a.a)({},n),{},{as:n.href&&"a",children:n.icon?Object(Y.jsx)(Z,{icon:n.icon}):n.children}))};tt.defaultProps={href:null,secondary:!1,icon:!1,children:null};var nt,et,rt,ot,it,at,ct,st,lt,dt,ut,ht,bt,pt,mt=tt,ft=e.p+"static/media/close.16d17dbe.svg",jt=Object(X.e)(nt||(nt=Object(J.a)(["\n\tfrom {\n\t\topacity: 0 ;\n\t\ttransform: translate(-50%, -20%);\n\t}\n\n\tto {\n\t\topacity: 1 ;\n\t\ttransform:  translate(-50%, -50%);\n\t}\n"]))),gt=X.d.section(et||(et=Object(J.a)(["\n\tbackground: white;\n\tborder-radius: 20px;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n\ttransform: translate(-50%, -50%);\n\tpadding: 25px 30px;\n\tbox-shadow: 0 0 0 100vw ",";\n\tanimation: "," ease-in-out 0.5s;\n"])),(function(t){return t.theme.color.alphaBlack2}),jt),xt=X.d.div(rt||(rt=Object(J.a)(["\n\twidth: 100%;\n\tdisplay: inline-flex;\n\tpadding: 25px 0;\n\n\t","\n\n\t","\n"])),(function(t){return t.heading&&Object(X.c)(ot||(ot=Object(J.a)(["\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t"])))}),(function(t){return t.settings&&Object(X.c)(it||(it=Object(J.a)(["\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-start;\n\t\t"])))})),Ot=X.d.button(at||(at=Object(J.a)(["\n\twidth: 32px;\n\theight: 32px;\n\tbackground: url(",") center/contain no-repeat;\n"])),ft),yt=X.d.div(ct||(ct=Object(J.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: auto;\n\tgrid-template-rows: auto;\n"]))),vt=Object(X.d)(q)(st||(st=Object(J.a)(["\n\tgrid-area: 2 / 1 / 2 / 2;\n\twidth: 70%;\n\tmargin: 12px 0;\n"]))),wt=Object(X.d)(mt)(lt||(lt=Object(J.a)(["\n\tgrid-area: 1 / 2 / 3 / 3;\n\talign-self: center;\n\tpadding: 12px 30px;\n"]))),kt=function(t){var n=t.toggleSettings;return Object(Y.jsxs)(gt,{children:[Object(Y.jsxs)(xt,{heading:!0,children:[Object(Y.jsx)(K,{children:"Settings"}),Object(Y.jsx)(Ot,{onClick:function(){return n(!1)}})]}),Object(Y.jsx)(xt,{settings:!0,children:Object(Y.jsxs)(yt,{children:[Object(Y.jsx)(K,{children:"Clear data"}),Object(Y.jsx)(vt,{children:"This opetation will cause loss of data. It can't be undone."}),Object(Y.jsx)(wt,{secondary:!0,onClick:function(){confirm("Are you sure you want to clear all your data?")&&(localStorage.clear(),location.reload())},children:"Clear data"})]})})]})},St=X.d.main(dt||(dt=Object(J.a)(["\n\tdisplay: grid;\n\theight: 100vh;\n\tgrid-gap: 32px 36px;\n\tpadding: 60px 5vw 150px;\n\tjustify-items: start;\n\tgrid-template-columns: 0.9fr 1.1fr;\n\tgrid-template-rows: auto 1fr;\n"]))),zt=function(t){var n=t.children,e=Object(r.useState)(!1),o=Object(c.a)(e,2),i=o[0],a=o[1];return Object(Y.jsxs)(St,{children:[Object(Y.jsx)(H,{toggleSettings:a}),n,i&&Object(Y.jsx)(kt,{toggleSettings:a})]})},Dt=e(10),Et=X.d.div(ut||(ut=Object(J.a)(["\n\tdisplay: flex;\n\talign-items: ",";\n"])),(function(t){return t.secondary?"flex-end":"flex-start"})),Tt=X.d.div(ht||(ht=Object(J.a)(["\n\tmargin-right: 20px;\n\tposition: relative;\n\n\t&:last-child {\n\t\tmargin-right: 0;\n\t}\n"]))),Ct=X.d.label(bt||(bt=Object(J.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n\ttransition: all ease-in-out 0.3s;\n\tcolor: ",";\n\tfont-weight: ",";\n\tfont-size: ",";\n"])),(function(t){var n=t.theme;return t.secondary?n.color.gray400:n.color.gray500}),(function(t){return t.theme.fontWeight.bold}),(function(t){var n=t.theme;return t.secondary?n.fontSize.s:n.fontSize.m})),_t=X.d.input(pt||(pt=Object(J.a)(["\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\tposition: absolute;\n\tinset: 0;\n\n\t&:checked ~ "," {\n\t\tcolor: ",";\n\t\ttransform: scale(1.45);\n\t\tpadding: 0 20px;\n\t}\n"])),Ct,(function(t){var n=t.theme;return t.secondary?n.color.gray500:n.color.blue})),It=function(t){var n=t.itemsList,e=t.itemType,o=t.secondary,i=Object(r.useContext)(d),c=i.contextDate,l=i.setContextDate,u=Object(s.c)(),h=function(t){l((function(n){return Object(a.a)(Object(a.a)({},n),{},Object(Dt.a)({},e,parseInt(t.target.value,10)))})),"month"===e&&u("/".concat(R[t.target.value]))};return console.log(c[e]),Object(Y.jsx)(Et,{secondary:o,children:n.map((function(t){return Object(Y.jsxs)(Tt,{children:[Object(Y.jsx)(_t,{type:"radio",name:e,id:t,secondary:o,value:t,defaultChecked:t===c[e],onChange:h}),Object(Y.jsx)(Ct,{forHtml:t,secondary:o,children:"month"===e?R[t]:t})]},t)}))})};It.defaultProps={secondary:!1};var Mt,Wt,Pt=It,Nt=X.d.div(Mt||(Mt=Object(J.a)(["\n\twidth: 80%;\n\theight: 100px;\n\tjustify-self: center;\n\tposition: relative;\n\tgrid-area: 1 / 1 / 2 / 3;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tflex-direction: column;\n\talign-items: center;\n"]))),At=function(){return Object(Y.jsxs)(Nt,{children:[Object(Y.jsx)(Pt,{itemType:"year",itemsList:L.years,secondary:!0}),Object(Y.jsx)(Pt,{itemType:"month",itemsList:L.months})]})},Lt=e(86),Rt=e(210),Vt=X.d.input(Wt||(Wt=Object(J.a)(["\n\twidth: 100%;\n\theight: 64px;\n\tborder-radius: 32px;\n\tbackground-color: ",";\n\tpadding: 16px 24px;\n\tfont-size: ",";\n\toutline: none;\n\n\t&::placeholder {\n\t\tcolor: ",";\n\t}\n\n\t&:focus {\n\t\tbox-shadow: inset 0 0 0 2px ",";\n\t}\n"])),(function(t){return t.theme.color.gray100}),(function(t){return t.theme.fontSize.s}),(function(t){return t.theme.color.gray400}),(function(t){return t.theme.color.blue})),Bt=function(t){var n=t.register,e=t.name,r=t.type;return Object(Y.jsx)(Vt,Object(a.a)(Object(a.a)(Object(a.a)({},t),n(e)),{},{id:e,type:r}))};Bt.defaultProps={type:"text"};var Jt,Xt,Ft,Yt,Ut,$t,Gt,Ht,Kt,qt,Qt,Zt,tn,nn,en,rn,on,an,cn,sn,ln,dn,un,hn,bn,pn,mn,fn,jn,gn,xn,On,yn,vn,wn,kn,Sn,zn=Bt,Dn=X.d.div(Jt||(Jt=Object(J.a)(["\n\tposition: relative;\n\tmargin-right: 8px;\n\twidth: 42px;\n\theight: 42px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tpointer-events: all;\n\n\t&:last-child {\n\t\tmargin-right: 0;\n\t}\n"]))),En=X.d.span(Xt||(Xt=Object(J.a)(["\n\tbackground-color: ",";\n\tdisplay: block;\n\tposition: absolute;\n\tinset: 0;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n\ttransition: all 0.2s ease-in-out;\n\n\t","\n\n\t&:before {\n\t\tcontent: '';\n\t\tmask: url(",") 50%/50% no-repeat;\n\t\tbackground-color: white;\n\t\topacity: 0;\n\t\tdisplay: ",";\n\t\tposition: absolute;\n\t\tinset: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 999;\n\t}\n"])),(function(t){var n=t.theme,e=t.value;return n.color[e]}),(function(t){return"icon"===t.name&&Object(X.c)(Ft||(Ft=Object(J.a)(["\n\t\t\tmask: url(",") 50%/60% no-repeat;);\n            background-color:  ",";\n\t\t"])),(function(t){var n=t.value;return B[n]}),(function(t){return t.theme.color.gray500}))}),B.tick,(function(t){return"icon"===t.name?"none":"block"})),Tn=X.d.input(Yt||(Yt=Object(J.a)(["\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\n\t&:checked + ",":before {\n\t\topacity: 1;\n\t}\n\n\t&:checked + "," {\n\t\tbackground-color: ",";\n\t\tbox-shadow: inset 0 0 0 6px ",", inset 0 0 0 8px white;\n\t\tborder-radius: 50%;\n\n\t\t","\n\t}\n"])),En,En,(function(t){return t.theme.color.blue}),(function(t){var n=t.theme,e=t.value;return n.color[e]}),(function(t){return"icon"===t.name&&Object(X.c)(Ut||(Ut=Object(J.a)(["\n\t\t\t\tborder-radius: none;\n\t\t\t\tbox-shadow: none;\n\t\t\t\ttransform: scale(1.4);\n\t\t\t"])))})),Cn=function(t){var n=t.item,e=t.itemType,r=t.register;return Object(Y.jsxs)(Dn,{children:[Object(Y.jsx)(Tn,Object(a.a)(Object(a.a)({},r(e)),{},{defaultChecked:!1,type:"radio",value:n,name:e,id:n})),Object(Y.jsx)(En,{name:e,value:n})]})},_n=["heart","shopping","car","tshirt","computer","chemistry"],In=["red","orange","yellow","green","purple"],Mn=X.d.section($t||($t=Object(J.a)(["\n\tposition: relative;\n"]))),Wn=X.d.form(Gt||(Gt=Object(J.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tposition: relative;\n\n\t","\n"])),(function(t){return t.isFormDisabled&&Object(X.c)(Ht||(Ht=Object(J.a)(["\n\t\t\tvisibility: hidden;\n\t\t\topacity: 0;\n\t\t\tpointer-events: none;\n\t\t"])))})),Pn=Object(X.d)(mt)(Kt||(Kt=Object(J.a)(["\n\tflex-basis: 60%;\n\tmargin-top: 20px;\n"]))),Nn=Object(X.d)(zn)(qt||(qt=Object(J.a)(["\n\t&:nth-of-type(1) {\n\t\tflex-basis: calc(60% - 20px);\n\t\tmargin: 0 10px;\n\t}\n\n\t&:nth-of-type(2) {\n\t\tflex-basis: 28%;\n\t}\n"]))),An=X.d.button(Qt||(Qt=Object(J.a)(["\n\tflex-basis: 12%;\n\tbackground-color: ",";\n\tmask: url(",") center/60% no-repeat;\n\theight: 64px;\n\tborder-radius: 50%;\n"])),(function(t){var n=t.theme;return t.isPopupVisible?n.color.blue:n.color.gray400}),B.paint),Ln=(Object(X.e)(Zt||(Zt=Object(J.a)(["\n    from { \n        opacity: 0;\n        transform: scale(0.4)\n    }\n    to { \n        opacity: 1;\n        transform: scale(1)\n    }\n"]))),X.d.fieldset(tn||(tn=Object(J.a)(["\n\tposition: absolute;\n\tleft: 12px;\n\tbottom: calc(100% - 12px);\n\tborder: none;\n\tborder-radius: 20px 20px 20px 0;\n\twidth: 320px;\n\tpadding: 20px;\n\tbackground-color: white;\n\tfilter: drop-shadow(0 8px 5px ",");\n\ttransform-origin: bottom left;\n\ttransition: all 0.3s ease-out;\n\topacity: 0;\n\ttransform: scale(0.4);\n\tvisibility: hidden;\n\n\t","\n\n\t&:after {\n\t\tcontent: '';\n\t\tclip-path: polygon(50% 100%, 0 0, 100% 0);\n\t\twidth: 40px;\n\t\theight: 20px;\n\t\tbackground-color: inherit;\n\t\tposition: absolute;\n\t\tbottom: -20px;\n\t\tleft: 0;\n\t}\n"])),(function(t){return t.theme.color.alphaBlack2}),(function(t){return t.isPopupVisible&&Object(X.c)(nn||(nn=Object(J.a)(["\n\t\t\topacity: 1;\n\t\t\ttransform: scale(1);\n\t\t\tvisibility: visible;\n\t\t"])))}))),Rn=X.d.span(en||(en=Object(J.a)(["\n\tfont-size: ",";\n\tfont-weight: ",";\n\tcolor: ",";\n\tdisplay: block;\n\tmargin: 12px 0;\n\t&:first-child {\n\t\tmargin-top: 0;\n\t}\n"])),(function(t){return t.theme.fontSize.xs}),(function(t){return t.theme.fontWeight.bold}),(function(t){return t.theme.color.gray400})),Vn=X.d.div(rn||(rn=Object(J.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-radius: 10px;\n\twidth: 100%;\n\tpadding: 5px;\n\tbackground-color: ",";\n\tpointer-events: none;\n"])),(function(t){return t.theme.color.gray100})),Bn=X.d.div(on||(on=Object(J.a)(["\n\ttext-align: center;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: white;\n\tpointer-events: none;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n"]))),Jn=Object(X.d)(q)(an||(an=Object(J.a)(["\n\tfont-size: ",";\n\twhite-space: pre-line;\n"])),(function(t){return t.theme.fontSize.m})),Xn=function(){var t=Object(Lt.a)(),n=t.register,e=t.handleSubmit,o=t.reset,i=Object(r.useState)(!1),s=Object(c.a)(i,2),u=s[0],h=s[1],b=Object(r.useState)(!1),p=Object(c.a)(b,2),m=p[0],f=p[1],j=Object(l.b)(),g=Object(r.useContext)(d).contextDate,x=new Date(g.year,g.month),O=new Date(A("year"),A("month"));Object(r.useEffect)((function(){f(x<O)}),[g]);var y=function(){h((function(t){return!t}))};return Object(Y.jsxs)(Mn,{children:[m&&Object(Y.jsx)(Bn,{children:Object(Y.jsxs)(Jn,{children:["Unfortunately ",R[g.month]," ",g.year," is over. ",Object(Y.jsx)("br",{})," You can't add new expense here \ud83d\ude22"]})}),Object(Y.jsxs)(Wn,{onSubmit:e((function(t){console.log(t),o(),j({type:"ADD_ITEM",payload:{newItem:Object(a.a)(Object(a.a)({},t),{},{id:Object(Rt.a)(),date:g})}})})),isFormDisabled:m,children:[Object(Y.jsx)(An,{type:"button",onClick:y,isPopupVisible:u}),Object(Y.jsxs)(Ln,{isPopupVisible:u,onMouseLeave:y,children:[Object(Y.jsx)(Rn,{children:"Pick your color:"}),Object(Y.jsx)(Vn,{children:In.map((function(t){return Object(Y.jsx)(Cn,{itemType:"color",item:t,register:n},t)}))}),Object(Y.jsx)(Rn,{children:"Pick your icon:"}),Object(Y.jsx)(Vn,{children:_n.map((function(t){return Object(Y.jsx)(Cn,{itemType:"icon",item:t,register:n},t)}))})]}),Object(Y.jsx)(Nn,{name:"name",register:n,placeholder:"What was your expense..."}),Object(Y.jsx)(Nn,{type:"number",name:"value",register:n,placeholder:"Amount..."}),Object(Y.jsx)(Pn,{children:"Add expense"})]})]})},Fn=e.p+"static/media/list-placeholder.07f1dcca.svg",Yn=Object(X.e)(cn||(cn=Object(J.a)(["\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: translateY(25%);\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n"]))),Un=Object(X.e)(sn||(sn=Object(J.a)(["\n\tfrom {\n\t\topacity: 1;\n\t\ttransform: translateX(0);\n\t}\n\tto {\n\t\topacity: 0;\n\t\ttransform: translateX(100%);\n\t}\n"]))),$n=X.d.li(ln||(ln=Object(J.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 12px 0;\n\tborder-bottom: 1px solid ",";\n\tanimation: "," ease-in-out 0.4s;\n\n\t&:last-child {\n\t\tborder-bottom: 0;\n\t}\n\n\t","\n"])),(function(t){return t.theme.color.gray200}),(function(t){return t.isRemoved?Un:Yn}),(function(t){return t.isRemoved&&Object(X.c)(dn||(dn=Object(J.a)(["\n\t\t\t~ "," {\n\t\t\t\ttransition: transform 0.35s ease-in-out;\n\t\t\t\ttransform: translateY(-100%);\n\t\t\t}\n\t\t"])),$n)})),Gn=X.d.div(un||(un=Object(J.a)(["\n\tborder-radius: 50%;\n\twidth: 52px;\n\theight: 52px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: ",";\n\tcolor: ",";\n\taspect-ratio: 1/1;\n\tbackground-color: ",";\n"])),(function(t){return t.theme.fontSize.xl}),(function(t){return t.theme.color.alphaBlack3}),(function(t){var n=t.theme,e=t.color;return n.color[e]||n.color.gray200})),Hn=Object(X.d)(K)(hn||(hn=Object(J.a)(["\n\twidth: 100%;\n\tmargin: 0 20px;\n\tfont-weight: ",";\n"])),(function(t){return t.theme.fontWeight.light})),Kn=X.d.span(bn||(bn=Object(J.a)(["\n\tborder-radius: 32px;\n\tpadding: 12px 0;\n\tbackground-color: hsl(0, 0%, 90%);\n\tmargin-right: 20px;\n\tmin-width: 110px;\n\ttext-align: center;\n\tfont-size: ",";\n\tfont-weight: ",";\n\tcolor: ",";\n"])),(function(t){return t.theme.fontSize.l}),(function(t){return t.theme.fontWeight.bold}),(function(t){return t.theme.color.gray500})),qn=Object(X.d)(mt)(pn||(pn=Object(J.a)(["\n\tmargin-top: 8px;\n\tpadding: 8px 16px;\n"]))),Qn=X.d.span(mn||(mn=Object(J.a)(["\n\topacity: 0.4;\n\tbackground: url(",") 50%/60% no-repeat;\n\twidth: 100%;\n\theight: 100%;\n"])),(function(t){var n=t.icon;return B[n]})),Zn=function(t){var n=t.id,e=t.color,o=t.icon,i=t.name,a=t.value,s=Object(r.useState)(!1),d=Object(c.a)(s,2),u=d[0],h=d[1],b=Object(l.b)();return Object(Y.jsxs)($n,{isRemoved:u,children:[Object(Y.jsx)(Gn,{color:e,children:Object(Y.jsx)(Qn,{icon:o})}),Object(Y.jsx)(Hn,{children:i}),Object(Y.jsx)(Kn,{children:a}),Object(Y.jsx)(qn,{secondary:!0,onClick:function(){h(!0),setTimeout((function(){b(function(t){return{type:"REMOVE_ITEM",payload:{id:t}}}(n))}),400)},icon:B.trash})]})},te=Object(X.e)(fn||(fn=Object(J.a)(["\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: scale(0.8)\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\ttransform: scale(1)\n\t}\n"]))),ne=X.d.ul(jn||(jn=Object(J.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 20px;\n\tbackground-color: ",";\n\tpadding: 20px;\n\toverflow-x: hidden;\n\tgrid-area: 2 / 1 / 3 / 2;\n\tposition: relative;\n\n\t","\n"])),(function(t){return t.theme.color.gray100}),(function(t){return t.isEmpty&&Object(X.c)(gn||(gn=Object(J.a)(["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tflex-direction: column;\n\n\t\t\t&::before {\n\t\t\t\tcontent: '';\n\t\t\t\tmask: url(",") center/contain no-repeat;\n\t\t\t\tbackground-color: ",";\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-height: 220px;\n\t\t\t\tdisplay: block;\n\t\t\t\tanimation: "," ease-in-out 0.5s;\n\t\t\t}\n\n\t\t\t&::after {\n\t\t\t\tcontent: \"Look's like you don't have any expenses! Lucky you!\";\n\t\t\t\twidth: 100%;\n\t\t\t\ttext-align: center;\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin: 25px 0;\n\t\t\t\tfont-size: ",";\n\t\t\t\tcolor: ",";\n\t\t\t\tanimation: "," ease-in-out 0.5s;\n\t\t\t}\n\t\t"])),Fn,(function(t){return t.theme.color.gray300}),te,(function(t){return t.theme.fontSize.xl}),(function(t){return t.theme.color.gray300}),te)})),ee=function(){var t=Object(l.c)((function(t){return t.items})),n=Object(r.useContext)(d).contextDate,e=t.filter((function(t){return t.date.month===n.month&&t.date.year===n.year}));return Object(Y.jsx)(ne,{isEmpty:0===e.length,children:e.map((function(t){return Object(r.createElement)(Zn,Object(a.a)(Object(a.a)({},t),{},{key:t.id}))}))})},re={color:{gray100:"hsl(0, 0%, 96%)",gray200:"hsl(0, 0%, 90%)",gray300:"hsl(0, 0%, 70%)",gray350:"hsl(0, 0%, 65%)",gray400:"hsl(0, 0%, 50%)",gray500:"hsl(0, 0%, 35%)",alphaBlack1:"hsla(0, 0%, 0%, .05)",alphaBlack2:"hsla(0, 0%, 0%, .1)",alphaBlack3:"hsla(0, 0%, 0%, .5)",blue:"hsl(221, 100%, 60%)",blueDark:"hsl(221, 100%, 40%)",blueAlpha:"hsla(221, 100%, 60%, .3)",white:"#fff",yellow:"hsl(50, 100%, 70%)",red:"hsl(0, 100%, 70%)",green:"hsl(120, 100%, 70%)",purple:"hsl(290, 80%, 60%)",orange:"hsl(20, 100%, 70%)"},fontWeight:{regular:300,bold:600},fontSize:{xxxs:"1rem",xxs:"1.2rem",xs:"1.4rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"3rem",xxl:"4rem",xxxl:"8rem"}},oe=e(85),ie=e.p+"static/media/calendar-placeholder.3ca33692.svg",ae=Object(X.e)(xn||(xn=Object(J.a)(["\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: scale(0.8)\n\t}\n\n\tto {\n\t\topacity: 1;\n\t\ttransform: scale(1)\n\t}\n"]))),ce=X.d.section(On||(On=Object(J.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 20px;\n\tbackground-color: ",";\n\tpadding: 20px;\n\toverflow-y: auto;\n\tgrid-area: 2 / 2 / 4 / 3;\n\tdisplay: inline-grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: auto 1fr;\n\tgrid-gap: 20px 10px;\n"])),(function(t){return t.theme.color.gray100})),se=X.d.div(yn||(yn=Object(J.a)(["\n\tborder-radius: 20px;\n\tbackground-color: ",";\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tpadding: 6px 8px;\n\n\t&:last-child {\n\t\tgrid-column: 1 / 4;\n\t\tbackground-color: transparent;\n\t}\n\n\t","\n"])),(function(t){return t.theme.color.gray200}),(function(t){return t.currentDateSelected&&Object(X.c)(vn||(vn=Object(J.a)(["\n\t\t\tgrid-column: 1 / 4;\n\t\t\tposition: relative;\n\n\t\t\t~ "," {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t&::before {\n\t\t\t\tcontent: '';\n\t\t\t\tmask: url(",") center/contain no-repeat;\n\t\t\t\tbackground-color: ",";\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-height: 220px;\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 200%;\n\t\t\t\tanimation: ",' ease-in-out 0.5s;\n\t\t\t}\n\n\t\t\t&::after {\n\t\t\t\tcontent: "I\'ve got nothing to say. Let me look at another month!";\n\t\t\t\twidth: 100%;\n\t\t\t\ttext-align: center;\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin: 25px 0;\n\t\t\t\tfont-size: ',";\n\t\t\t\tcolor: ",";\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(200% + 220px);\n\t\t\t\tanimation: "," ease-in-out 0.5s;\n\t\t\t}\n\t\t"])),se,ie,(function(t){return t.theme.color.gray300}),ae,(function(t){return t.theme.fontSize.xl}),(function(t){return t.theme.color.gray300}),ae)})),le=X.d.span(wn||(wn=Object(J.a)(["\n\tfont-size: ",";\n\tcolor: ",";\n\tfont-weight: ",";\n\tpadding: 4px 0;\n"])),(function(t){return t.theme.fontSize.xxl}),(function(t){return t.theme.color.blue}),(function(t){return t.theme.fontWeight.bold})),de=X.d.span(kn||(kn=Object(J.a)(["\n\tfont-size: ",";\n\tfont-weight: ",";\n\tcolor: ",";\n\ttext-transform: uppercase;\n\ttext-align: center;\n"])),(function(t){return t.theme.fontSize.xxs}),(function(t){return t.theme.fontWeight.bold}),(function(t){return t.theme.color.gray400})),ue=function(){var t=Object(r.useContext)(d).contextDate,n=A(),e=new Date(t.year,t.month).getTime(),o=new Date(n.year,n.month).getTime(),i=Object(l.c)((function(t){return t.items})),a=i.filter((function(t){return t.date.month===n.month&&t.date.year===n.year})),c=i.filter((function(n){return n.date.month===t.month&&n.date.year===t.year})),s=V(a),u=V(c),h=(u/s*100).toFixed(2),b=[R[t.month],R[n.month]],p={labels:b,datasets:a.concat(c).map((function(t){return function(t){var n=new Date(t.date.year,t.date.month).getTime(),e=[t.value,null];return n===o&&e.reverse(),{label:t.name,backgroundColor:re.color[t.color],data:e}}(t)}))};return console.log(p.datasets),Object(Y.jsxs)(ce,{children:[Object(Y.jsxs)(se,{currentDateSelected:o===e,children:[Object(Y.jsx)(le,{children:"$ ".concat(s)}),Object(Y.jsx)(de,{children:"Summary in this month"})]}),Object(Y.jsxs)(se,{children:[Object(Y.jsx)(le,{children:"$ ".concat(u)}),Object(Y.jsx)(de,{children:"Summary in ".concat(R[t.month])})]}),Object(Y.jsxs)(se,{children:[Object(Y.jsx)(le,{children:"".concat(h,"%")}),Object(Y.jsx)(de,{children:"Percentage compared to ".concat(R[t.month])})]}),Object(Y.jsx)(se,{children:o!==e?Object(Y.jsx)(oe.a,{data:p,options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{stacked:!0},y:{stacked:!0}},plugins:{legend:{display:!1},tooltip:{enabled:!1}}}}):null})]})},he=function(){return Object(Y.jsxs)(zt,{children:[Object(Y.jsx)(At,{}),Object(Y.jsx)(ee,{}),Object(Y.jsx)(Xn,{}),Object(Y.jsx)(ue,{})]})},be=Object(X.b)(Sn||(Sn=Object(J.a)(['\n    *, *::before, *::after {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    input, select, button, textarea, a {\n        border: initial;\n        background: initial;\n        font-family: inherit;\n        color: inherit;\n        text-decoration: none;\n    }\n\n    ul, ol {\n        list-style: none;\n    }\n\n    img {\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        font: 300 1.6rem "Montserrat", sans-serif;\n        overflow: hidden;\n    }\n']))),pe=function(t){var n=t.children;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(be,{}),Object(Y.jsx)(X.a,{theme:re,children:n})]})},me={month:A("month"),year:A("year")},fe=function(){var t=Object(r.useState)(me),n=Object(c.a)(t,2),e=n[0],o=n[1],i=window.location.pathname.substring(1),u=R[e.month];return Object(r.useEffect)((function(){""!==i&&o((function(t){return Object(a.a)(Object(a.a)({},t),{},{month:R.indexOf(i)})}))}),[i]),Object(Y.jsx)(l.a,{store:D,children:Object(Y.jsx)(d.Provider,{value:{contextDate:e,setContextDate:o},children:Object(Y.jsx)(pe,{children:Object(Y.jsxs)(s.b,{children:[Object(Y.jsx)(s.a,{from:"/",to:"/".concat(u),noThrow:!0}),Object(Y.jsx)(he,{path:"/"}),Object(Y.jsx)(he,{path:"/:month"})]})})})})};i.a.render(Object(Y.jsx)(fe,{}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.03501f4a.chunk.js.map