(this["webpackJsonpipl-cards-game"]=this["webpackJsonpipl-cards-game"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a,c,r,i,s,d,l,o,u,j,f=n(0),b=n.n(f),m=n(11),x=n.n(m),p=(n(25),n(26),n(5)),O=n(2),h=n(10),g=n(3),S=n(4),v=n(13),y=Object(v.b)({name:"game",initialState:{playerCards:[],computerCards:[],isInTurn:!1,changesDone:!1,turnOf:"player",dataSelected:null,otherData:null},reducers:{setPlayerCards:function(t,e){t.playerCards=e.payload},setComputerCards:function(t,e){t.computerCards=e.payload},toggleTurn:function(t){t.isInTurn=!t.isInTurn},setCardData:function(t,e){t.dataSelected=e.payload},setChangesDone:function(t,e){t.changesDone=e.payload}}}),A=y.actions,T=y.reducer,C=n(1),w=S.a.div(a||(a=Object(g.a)(["\n\ttransform: translateX(","px)\n\t\ttranslateY(","px)\n\t\tscale(",");\n\t@media (max-width: 1000px) {\n\t\ttransform: translateX(\n\t\t\t\t","px\n\t\t\t)\n\t\t\ttranslateY(","px)\n\t\t\tscale(",");\n\t}\n\t@media (max-width: 600px) {\n\t\ttransform: translateX(\n\t\t\t\t","px\n\t\t\t)\n\t\t\ttranslateY(","px)\n\t\t\tscale(",");\n\t}\n\tanimation: ",";\n\tpointer-events: ",";\n"])),(function(t){return 2.5*-(t.total-t.index)}),(function(t){return 3*-(t.total-t.index)}),(function(t){return 1-.015*(t.total-t.index)}),(function(t){return 1.5*-(t.total-t.index)}),(function(t){return 1.8*-(t.total-t.index)}),(function(t){return 1-.01*(t.total-t.index)}),(function(t){return 1.3*-(t.total-t.index)}),(function(t){return 1.5*-(t.total-t.index)}),(function(t){return 1-.008*(t.total-t.index)}),(function(t){return t.isCardSwappable?"swap-computer 700ms forwards;":null}),(function(t){return t.isInTurn?"none":"auto"})),k=function(t){var e=t.length,n=t.index,a=t.total,c=Object(O.c)((function(t){return t.game.isInTurn})),r=Object(O.c)((function(t){return t.game.changesDone})),i=Object(f.useState)(!1),s=Object(p.a)(i,2),d=s[0],l=s[1];return Object(f.useEffect)((function(){c&&r&&n+1===e&&(l(!0),setTimeout((function(){l(!1)}),1500))}),[c,n,e,r]),Object(C.jsx)(w,{total:a,index:n,isCardSwappable:d,isInTurn:c,className:"card computer-card",children:Object(C.jsx)("div",{children:d?null:e})})},N=S.a.div(c||(c=Object(g.a)(["\n\t","\n"])),(function(t){return t.isInTurn?"transform:translateY(-140px); \n\t\t\t\t@media (max-width: 600px){\n\t\t\t\ttransform:translateY(-80px);\n\t\t\t}":null})),E=function(){var t=Object(O.b)(),e=Object(O.c)((function(t){return t.game.changesDone})),n=Object(O.c)((function(t){return t.game.computerCards})),a=Object(f.useState)(0),c=Object(p.a)(a,2),r=c[0],i=c[1];Object(f.useEffect)((function(){i(n.length)}),[n]);var s=function(){var e=Object(h.a)(n);e.pop(),t(A.setComputerCards(e))};return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(N,{className:"stack computer-stack",isInTurn:e,children:n.map((function(t,e){return Object(C.jsx)(k,{length:n.length,total:r,index:e,onSwap:s},t)}))})})},I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAEcBAMAAAAlzwV+AAAAD1BMVEUAAABHcEwAAAAAAAAAAABxUQwvAAAABXRSTlNmAFIcO+xdyvsAAARzSURBVHja7dyNdaMwEATgeaAGYlwADleAwVeAifvv6fLyawcMK2l2HJ9FA98bSbsSwgme5A8KWchCFrKQhSxkIQtZyELeL9kcTqeDkjy8PLdA9XzqRWTzgs+nYkWFVXxDe3eyOeLy+dM7k5cZP4L6klOREnSBHDD7ZAe9Tja49nRO5GTp0ExEDuv7c/Igm3aJrHoHcjEkEPjkcsjXZ0cnV0K+Di2bXA2ZExNpIXNizpPrIYGRSm4NYvqinSWPFhI9kWxMYvICmiM3NjIQSdu4Jo8skooya2SRuF4zRhZJfSBrP0H6VKZ2A6RPZerpAOlTmTqZSK3K9NY+Jfd2Mm0ykbF6aGQbQdYUsokhKw6JmKdnkNsocnen5CaK7Bjk8NvJP3oyMMh9IR+UrB+C7O6UHPRtffjtO8m9kttC+pDNY5CtnHx6DPIob+txJOVUELd7VRQybivp9eTIIDfeh59cMuGGK5dMGNncuUwY2cy6TCmTzIZ3G7KXk7gBORaykIV0bwU36LHDQ5CRW3QgkHFvewnn9ZlvXs4bSd5ntrSzc9bHRNahMu4NgXJ0jlo/nHeSqMnkvF/GTCbnm1dUMxhZpLkyWd+i7SPL+8hvLpPEn+Ol/94n+UdGv4U0VmZPJG3rp6KSrVsfuErufc4DS+RGn3LQp9zqU5qqJNw7aSpM7sCaqoSccqNP2ehTWtYPOaVlMskpLZPJTtnoUxoqk53SMLLcLdo2siOZNIwsndzoyfVuQCfXR7amk1s9uTqyFZ1cHVnmm5d1ZPnk6qF9xyf3Lutnkdy6rJ/lP4aUXU/YJzPwSZcyWSb3Hg1omVx/A+vZ5PobWK0nKZ+/I0/QoeeSlnuKTk9G/8kpgYwtzhXSdhvTM0nb16i4P8+mkHG/mF8hrXfenTxl1LJlkRHLlkVGmKS5jCkVWkr7siWSVjN7J4lvCXH/7oJiRv67C4YJqmiqFXBFiwmyaDDBFtd7Aujian3Ok4dn5DxdPPm3BfxMkAfVsH3CRVw0J+ShBeXpzGRDEhdywku8nhN5W0dKTviJ11of6Gt19fYCbhmvTucZ+UIX54cWaSernN9ZwaM8lm9M4BpyNiZ8Q87FRPybQO6ihflDTOqivUa6jevM1TScx3WmBSHi5oPUDmC/32GNLKzXg7yRhfdUTkcW3lM5vT+F+1ROmh6sv5XgdQO4T+Wkz0rI3ZQ8OpNBT1ZTsnUmL8sEvtvI3KYJ73Y3nUwNeVEmInL8QQ7+ZP2D3EM6mSLyfDIh6AQ/JhOKsrysTBUZ9GR1SQLS9SMjx3NyKyG7c3IjIetzcpCQQZ/ye/3IUl6QopQ7fcpOn7LWpwz6lJU+5deS1aX86rLClKM+Za1PWetTBn3KSp/ys0qU5PgQ5E583PquEiUZ9GSln8uPK0sliV7dfT6rRJpyp0/Z6VPW+pRBnzLoU75XiTTlFylMOd6O3EPbC7Qp69uRwhUb9Ckrfcq3TVqbEr085VthKo9b32QDbS9QXQGfFeb/T4aHIKsbkK+94B8MU33+FCTuyQAAAABJRU5ErkJggg==",P=function(t){var e=t.field,n=t.data,a=Object(O.b)();return Object(C.jsxs)("div",{className:"display-data",onClick:function(){return a(A.setCardData({field:e,data:n}))},children:[Object(C.jsxs)("span",{className:"display-data__field",children:[e,": "]}),Object(C.jsx)("span",{className:"body-row__value",children:n})]})},R=function(){return Object(C.jsxs)("div",{className:"card-selected__back",children:[Object(C.jsx)("div",{children:Object(C.jsx)("object",{data:I,type:"image/png",className:"display-image",children:Object(C.jsx)("img",{className:"display-image",src:I,alt:"player_name"})})}),Object(C.jsxs)("div",{className:"display-main",children:[Object(C.jsx)("div",{className:"main-player-name",children:"Ravichandran Ashwin"}),Object(C.jsx)("div",{className:"main-player-team",children:"Punjab Kings"}),Object(C.jsx)("div",{className:"main-last",children:Object(C.jsx)(P,{field:"Matches",data:100})})]}),Object(C.jsxs)("div",{className:"display-row display-row-1",children:[Object(C.jsx)(P,{field:"Runs",data:100}),Object(C.jsx)(P,{field:"Highest",data:100}),Object(C.jsx)(P,{field:"Bat Avg",data:100}),Object(C.jsx)(P,{field:"Str Rt",data:100}),Object(C.jsx)(P,{field:"Hundreds",data:100}),Object(C.jsx)(P,{field:"Fifties",data:100})]}),Object(C.jsxs)("div",{className:"mobile-display-row",children:[Object(C.jsx)("div",{children:Object(C.jsx)(P,{field:"Sixes",data:100})}),Object(C.jsx)("div",{children:Object(C.jsx)(P,{field:"Not Outs",data:100})})]}),Object(C.jsxs)("div",{className:"display-row display-row-2",children:[Object(C.jsx)(P,{field:"Catches",data:100}),Object(C.jsx)(P,{field:"Overs",data:100}),Object(C.jsx)(P,{field:"Wickets",data:100}),Object(C.jsx)(P,{field:"Ball Avg",data:100}),Object(C.jsx)(P,{field:"Economy",data:100}),Object(C.jsx)(P,{field:"4 Wickets",data:100})]})]})},D=Object(S.b)(r||(r=Object(g.a)(["\n\t0% {opacity: 0 }\n\t50%{opacity:0}\n\t100% {opacity: 1; }\n"]))),F=S.a.div(i||(i=Object(g.a)(["\n\t","\n"])),(function(t){return t.isFlipped?"\n\t\t\tz-index: 2;\n\t\t\ttransform: translate(-200px, 140px) rotateY(180deg); \n                @media (max-width: 1000px){\n                    transform: translate(-10px, 180px) rotateY(180deg);\n\t\t\t\t@media (max-width: 600px){\n\t\t\t\t\ttransform: translate(-10px, 5px) rotateY(180deg);\n\t\t\t\t}\n                }":null})),U=S.a.div(s||(s=Object(g.a)(["\n\tanimation-name: ",";\n\tanimation-duration: 3.5s;\n\tanimation-fill-mode: forwards;\n"])),D),K=function(t){var e=t.isCardSelected,n=Object(O.c)((function(t){return t.game.dataSelected})),a=Object(f.useState)(!1),c=Object(p.a)(a,2),r=c[0],i=c[1];return Object(f.useEffect)((function(){n&&setTimeout((function(){i(!0),console.log(n)}),300)}),[n]),Object(C.jsx)(C.Fragment,{children:e&&Object(C.jsxs)(F,{className:"card-selected computer-card-selected",isFlipped:r,children:[Object(C.jsx)(U,{className:"card-selected__front"}),Object(C.jsx)(R,{})]})})},Y=S.a.div(d||(d=Object(g.a)(["\n\ttransform: translateX(","px)\n\t\ttranslateY(","px)\n\t\tscale(",");\n\t@media (max-width: 1000px) {\n\t\ttransform: translateX(","px)\n\t\t\ttranslateY(","px)\n\t\t\tscale(",");\n\t}\n\t@media (max-width: 600px) {\n\t\ttransform: translateX(","px)\n\t\t\ttranslateY(","px)\n\t\t\tscale(",");\n\t}\n\tanimation: ",";\n\tpointer-events: ",";\n"])),(function(t){return 3*(t.total-t.index)}),(function(t){return 5*-(t.total-t.index)}),(function(t){return 1-.02*(t.total-t.index)}),(function(t){return 2*(t.total-t.index)}),(function(t){return 3.5*-(t.total-t.index)}),(function(t){return 1-.015*(t.total-t.index)}),(function(t){return 1.5*(t.total-t.index)}),(function(t){return 2.5*-(t.total-t.index)}),(function(t){return 1-.01*(t.total-t.index)}),(function(t){return t.isCardSwappable?"swap-player 700ms forwards;":null}),(function(t){return t.isInTurn?"none":"auto"})),L=function(t){var e=t.length,n=t.onSwap,a=t.index,c=t.total,r=Object(O.b)(),i=Object(O.c)((function(t){return t.game.isInTurn})),s=Object(f.useState)(!1),d=Object(p.a)(s,2),l=d[0],o=d[1];return Object(C.jsx)(Y,{total:c,index:a,isCardSwappable:l,isInTurn:i,onClick:function(){a+1===e&&(o(!0),r(A.toggleTurn()),setTimeout((function(){o(!1),n()}),1500))},className:"card player-card",children:Object(C.jsx)("div",{children:l?null:e})})},M=S.a.div(l||(l=Object(g.a)(["\n\t","\n"])),(function(t){return t.isInTurn?"transform:translateY(150px); \n\t\t@media (max-width: 600px){\n\t\t\ttransform:translateY(80px);\n\t}":null})),Q=function(){var t=Object(O.b)(),e=Object(O.c)((function(t){return t.game.isInTurn})),n=Object(O.c)((function(t){return t.game.playerCards})),a=Object(O.c)((function(t){return t.game.computerCards})),c=Object(f.useState)(0),r=Object(p.a)(c,2),i=r[0],s=r[1],d=Object(f.useState)(!1),l=Object(p.a)(d,2),o=l[0],u=l[1];Object(f.useEffect)((function(){s(n.length)}),[n]),Object(f.useEffect)((function(){e&&setTimeout((function(){u(!0)}),1500)}),[e]);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(M,{className:"stack player-stack",isInTurn:o,children:n.map((function(e,c){return Object(C.jsx)(L,{length:n.length,total:i,index:c,onSwap:function(){return function(e){if(e+1===i){var c=Object(h.a)(n);c.pop(),t(A.setPlayerCards(c)),Object(h.a)(a).pop(),t(A.setComputerCards(c)),t(A.setChangesDone(!0))}}(c)}},e)}))})})},Z=function(t){var e=t.isCardSelected,n=Object(f.useState)(!1),a=Object(p.a)(n,2),c=a[0],r=a[1];return Object(f.useEffect)((function(){setTimeout((function(){r(!0)}),2500)}),[e]),Object(C.jsx)(C.Fragment,{children:e&&Object(C.jsxs)(J,{className:"card-selected player-card-selected",isFlipped:c,children:[Object(C.jsx)(V,{className:"card-selected__front"}),Object(C.jsx)(R,{})]})})},B=Object(S.b)(o||(o=Object(g.a)(["\n\t0% {opacity: 0 }\n\t30%{opacity:0}\n\t100% {opacity: 1; }\n"]))),J=S.a.div(u||(u=Object(g.a)(["\n\t","\n"])),(function(t){return t.isFlipped?"\n\t\t\tz-index: 2;\n\t\t\ttransform: translate(200px, 140px) rotateY(180deg); \n\t\t\t@media (max-width: 1000px){\n\t\t\t\ttransform: translate(35px, 180px) rotateY(180deg);\n\t\t\t}\n\t\t\t@media (max-width: 600px){\n\t\t\t\ttransform: translate(10px, 325px) rotateY(180deg);\n\t\t\t}":null})),V=S.a.div(j||(j=Object(g.a)(["\n\tanimation-name: ",";\n\tanimation-duration: 1s;\n\tanimation-fill-mode: forwards;\n"])),B),X=function(){var t=Object(O.b)(),e=Object(O.c)((function(t){return t.game.isInTurn})),n=Object(f.useState)(!1),a=Object(p.a)(n,2),c=a[0],r=a[1];return Object(f.useEffect)((function(){var e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];t(A.setPlayerCards(e)),t(A.setComputerCards(e))}),[t]),Object(f.useEffect)((function(){e&&r(!0)}),[e]),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/ipl-cards-game",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_KEY),Object(C.jsxs)("div",{className:"game-arena",children:[Object(C.jsx)(Q,{}),Object(C.jsx)(Z,{isCardSelected:c}),Object(C.jsx)(E,{}),Object(C.jsx)(K,{isCardSelected:c})]})},H=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(X,{})})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},G=Object(v.a)({reducer:{game:T}});x.a.render(Object(C.jsx)(b.a.StrictMode,{children:Object(C.jsx)(O.a,{store:G,children:Object(C.jsx)(H,{})})}),document.getElementById("root")),W()}},[[35,1,2]]]);
//# sourceMappingURL=main.ece45ca1.chunk.js.map