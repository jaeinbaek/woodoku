(this.webpackJsonpwoodoku=this.webpackJsonpwoodoku||[]).push([[0],{13:function(r,e,t){},15:function(r,e,t){},16:function(r,e,t){},17:function(r,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),o=t(8),c=t.n(o),u=(t(13),t(0));var i=function(){return Object(u.jsx)("div",{className:"header"})},f=t(6),v=t(2),s=t(3);var l=function(r){var e=r.value,t=r.rowIndex,n=r.colIndex,a=r.deliverClickIndex,o=r.deliverMouserOverIndex,c=function(){a(t,n)},i=function(r){o(t,n,r.type)};return 3===t||4===t||5===t?3===n||4===n||5===n?Object(u.jsx)("div",{className:0===e?"board-col":1===e?"board-col placed":"board-col overlay",onClick:c,onMouseOver:i,onMouseLeave:i}):Object(u.jsx)("div",{className:0===e?"board-col-bright":1===e?"board-col placed":"board-col overlay",onClick:c,onMouseOver:i,onMouseLeave:i}):0===n||1===n||2===n||6===n||7===n||8===n?Object(u.jsx)("div",{className:0===e?"board-col":1===e?"board-col placed":"board-col overlay",onClick:c,onMouseOver:i,onMouseLeave:i}):Object(u.jsx)("div",{className:0===e?"board-col-bright":1===e?"board-col placed":"board-col overlay",onClick:c,onMouseOver:i,onMouseLeave:i})};var d=function(r){var e=r.value,t=r.rowIndex,n=r.deliverClickIndex,a=r.deliverMouserOverIndex,o=e.map((function(r,e){return Object(u.jsx)(l,{value:r,rowIndex:t,colIndex:e,deliverClickIndex:n,deliverMouserOverIndex:a},e)}));return Object(u.jsx)("div",{className:"board-row",children:o})};var j=function(r){var e=r.value;return Object(u.jsx)("div",{className:0===e?"tray-block":"tray-block placed"})};var b=function(r){var e=r.value.map((function(r,e){return Object(u.jsx)(j,{value:r},e)}));return Object(u.jsx)("div",{className:"tray-block-row",children:e})};var O=function(r){var e=r.blockCode,t=Object.values({0:{},1:{1:[1,1,1,1,1]},2:{1:[1,1,1]},3:{1:[1],2:[1],3:[1],4:[1],5:[1]},4:{1:[1],2:[1],3:[1]},5:{1:[1,1],2:[1,1]}}[e]).map((function(r,e){return Object(u.jsx)(b,{value:r},e)}));return Object(u.jsx)("div",{className:"block-wrap",children:t})};var x=function(r){var e=r.blockCode,t=r.codeDeliver,n=r.indexDeliver,a=r.trayIndex;return Object(u.jsx)("div",{className:"tray-block-area",onClick:function(){t(e),n(a)},children:Object(u.jsx)(O,{blockCode:e})})};var h=function(r,e,t,n){switch(e){case 1:if(n>4)return 0;for(var a=0;a<5;a++)if(1===r[t][n+a])return 0;for(var o=0;o<5;o++)r[t][n+o]=1;return r;case 2:if(n>6)return 0;for(var c=0;c<3;c++)if(1===r[t][n+c])return 0;for(var u=0;u<3;u++)r[t][n+u]=1;return r;case 3:if(t>4)return 0;for(var i=0;i<5;i++)if(1===r[t+i][n])return 0;for(var f=0;f<5;f++)r[t+f][n]=1;return r;case 4:if(t>6)return 0;for(var v=0;v<3;v++)if(1===r[t+v][n])return 0;for(var s=0;s<3;s++)r[t+s][n]=1;return r;case 5:if(t>7)return 0;if(n>7)return 0;for(var l=0;l<2;l++)for(var d=0;d<=1;d++)if(1===r[t+l][n+d])return 0;for(var j=0;j<2;j++)for(var b=0;b<=1;b++)r[t+j][n+b]=1;return r}};var m=function(r,e,t,n){switch(e){case 1:if(n>4)return 0;for(var a=0;a<5;a++)if(1===r[t][n+a])return 0;return 1;case 2:if(n>6)return 0;for(var o=0;o<3;o++)if(1===r[t][n+o])return 0;return 1;case 3:if(t>4)return 0;for(var c=0;c<5;c++)if(1===r[t+c][n])return 0;return 1;case 4:if(t>6)return 0;for(var u=0;u<3;u++)if(1===r[t+u][n])return 0;return 1;case 5:if(t>7)return 0;if(n>7)return 0;for(var i=0;i<2;i++)for(var f=0;f<=1;f++)if(1===r[t+i][n+f])return 0;return 1}};var p=function(r,e,t,n){switch(e){case 1:if(n>4)return 0;for(var a=0;a<5;a++)if(1===r[t][n+a])return 0;for(var o=0;o<5;o++)r[t][n+o]=2;return r;case 2:if(n>6)return 0;for(var c=0;c<3;c++)if(1===r[t][n+c])return 0;for(var u=0;u<3;u++)r[t][n+u]=2;return r;case 3:if(t>4)return 0;for(var i=0;i<5;i++)if(1===r[t+i][n])return 0;for(var f=0;f<5;f++)r[t+f][n]=2;return r;case 4:if(t>6)return 0;for(var v=0;v<3;v++)if(1===r[t+v][n])return 0;for(var s=0;s<3;s++)r[t+s][n]=2;return r;case 5:if(t>7)return 0;if(n>7)return 0;for(var l=0;l<2;l++)for(var d=0;d<=1;d++)if(1===r[t+l][n+d])return 0;for(var j=0;j<2;j++)for(var b=0;b<=1;b++)r[t+j][n+b]=2;return r}};function y(r,e){for(var t=new Array(r),n=0;n<r;n++)t[n]=new Array(e),t[n].fill(0);return t}var k=function(){var r=Object(n.useState)(y(9,9)),e=Object(s.a)(r,2),t=e[0],a=e[1],o=Object(n.useState)(0),c=Object(s.a)(o,2),i=c[0],l=c[1],j=Object(n.useState)(0),b=Object(s.a)(j,2),O=b[0],k=b[1],M=Object(n.useState)(0),w=Object(s.a)(M,2),I=w[0],N=w[1],C=Object(n.useState)(function(){for(var r=[],e=Math.ceil(1),t=Math.floor(5),n=1;n<=3;n++)r.push(Math.floor(Math.random()*(t-e+1))+e);return r}()),g=Object(s.a)(C,2),S=g[0],L=g[1],D=Object(n.useState)(y(9,9)),F=Object(s.a)(D,2),q=F[0],A=F[1];Object(n.useEffect)((function(){V()}),[S]);var B=function(r,e){T(r,e)},E=function(r,e,t){z(r,e,t)},J=t.map((function(r,e){return Object(u.jsx)(d,{value:r,rowIndex:e,deliverClickIndex:B,deliverMouserOverIndex:E},e)})),P=S.map((function(r,e){return Object(u.jsx)(x,{blockCode:r,codeDeliver:k,indexDeliver:N,trayIndex:e},e)})),T=function(r,e){var n=h(t,O,r,e);0===n?console.log("nothing to do"):"object"==typeof n&&(a(Object(v.a)(n)),k(0),K(),A(Object(v.a)(t)))},z=function(r,e,t){switch(t){case"mouseover":return void G(r,e);case"mouseleave":return void H()}},G=function(r,e){var n=p(t,O,r,e);"object"===typeof n&&a(Object(v.a)(n))},H=function(){a(Object(v.a)(q.map((function(r){return Object(v.a)(r)}))))},K=function(){R(t),S.splice(I,1,0);for(var r=0,e=0;e<3;e++)r+=S[e];0===r&&function(){for(var r=[],e=Math.ceil(1),t=Math.floor(5),n=1;n<=3;n++)r.push(Math.floor(Math.random()*(t-e+1))+e);L(r)}(),V()},Q={1:{1:0,2:0,3:2,4:2},2:{1:0,2:3,3:2,4:5},3:{1:0,2:6,3:2,4:8},4:{1:3,2:0,3:5,4:2},5:{1:3,2:3,3:5,4:5},6:{1:3,2:6,3:5,4:8},7:{1:6,2:0,3:8,4:2},8:{1:6,2:3,3:8,4:5},9:{1:6,2:6,3:8,4:8}},R=function(r){for(var e={row:[],col:[],sqr:[]},t=0;t<9;t++){for(var n=0,a=0;a<9;a++)n+=r[t][a];9===n&&e.row.push(t)}for(var o=0;o<9;o++){for(var c=0,u=0;u<9;u++)c+=r[u][o];9===c&&e.col.push(o)}for(var i=1;i<10;i++)for(var f=0,v=Q[i][1];v<=Q[i][3];v++){for(var s=Q[i][2];s<=Q[i][4];s++)f+=r[v][s];9===f&&e.sqr.push(i)}U(e)},U=function(r){var e,n=t,o=0,c=Object(f.a)(r.row);try{for(c.s();!(e=c.n()).done;)for(var u=e.value,s=0;s<9;s++)n[u][s]=0,o++}catch(k){c.e(k)}finally{c.f()}var d,j=Object(f.a)(r.col);try{for(j.s();!(d=j.n()).done;)for(var b=d.value,O=0;O<9;O++)n[O][b]=0,o++}catch(k){j.e(k)}finally{j.f()}var x,h=Object(f.a)(r.sqr);try{for(h.s();!(x=h.n()).done;)for(var m=x.value,p=Q[m][1];p<=Q[m][3];p++)for(var y=Q[m][2];y<=Q[m][4];y++)n[p][y]=0,o++}catch(k){h.e(k)}finally{h.f()}l(i+o),a(Object(v.a)(n))},V=function(){for(var r=0,e=0,n=0;n<S.length;n++)if(0!==S[n])for(var a=0;a<9;a++)for(var o=0;o<9;o++)0===t[a][o]&&(r+=W(t,S[n],a,o));else 0===S[n]&&e++;0===r&&3===e||0===r&&console.error("gameover")},W=function(r,e,t,n){var a=0;return 0!==e&&(a=m(r,e,t,n)),0===a?0:1===a?1:void 0};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"score",children:Object(u.jsx)("div",{className:"score-text",children:i})}),Object(u.jsx)("div",{className:"board",children:J}),Object(u.jsx)("div",{className:"tray",children:P})]})};var M=function(){return Object(u.jsx)("div",{className:"footer"})};t(15),t(16);var w=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(i,{}),Object(u.jsx)(k,{}),Object(u.jsx)(M,{})]})})},I=function(r){r&&r instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;t(r),n(r),a(r),o(r),c(r)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),I()}},[[17,1,2]]]);
//# sourceMappingURL=main.a420c925.chunk.js.map