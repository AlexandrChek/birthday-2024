(function(){"use strict";var r={4074:function(r,t,n){var e=n(5130),i=n(6768);const o={id:"app"},u={key:0,class:"greeting"},s=(0,i.Lk)("h1",null,"С Днём Рождения, Наташа!!!",-1),a={key:1,class:"video-container"},l=(0,i.Lk)("iframe",{src:"https://www.youtube.com/embed/WWRzjhk6who?si=3SYhaPoiq1v4IOX-",frameborder:"0",allowfullscreen:""},null,-1),c=(0,i.Lk)("p",null,"Поверни телефон",-1),f=[l,c],d={key:2,class:"fireworks"},v=(0,i.Lk)("div",{class:"firework",id:"firework-left"},null,-1),h=(0,i.Lk)("div",{class:"firework",id:"firework-right"},null,-1),w=[v,h],b={key:3,class:"balloons"};function k(r,t,n,e,l,c){return(0,i.uX)(),(0,i.CE)("div",o,[l.started?((0,i.uX)(),(0,i.CE)("div",a,f)):((0,i.uX)(),(0,i.CE)("div",u,[s,(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...r)=>c.startVideo&&c.startVideo(...r))},"Старт!")])),l.isFirework?((0,i.uX)(),(0,i.CE)("div",d,w)):(0,i.Q3)("",!0),l.started?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",b,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.balloons,(r=>((0,i.uX)(),(0,i.CE)("div",{key:r,class:"balloon"})))),128))]))])}var p={data(){return{isFirework:!1,started:!1,balloons:5}},mounted(){window.addEventListener("load",(()=>{this.isFirework=!0,setTimeout((()=>{this.isFirework=!1}),3e3)})),this.getNumber(),window.addEventListener("resize",this.getNumber)},methods:{getNumber(){this.balloons=Math.round(window.innerWidth/75)},startVideo(){this.started=!0}}},y=n(1241);const m=(0,y.A)(p,[["render",k]]);var g=m;(0,e.Ef)(g).mount("#app")}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}n.m=r,function(){var r=[];n.O=function(t,e,i,o){if(!e){var u=1/0;for(c=0;c<r.length;c++){e=r[c][0],i=r[c][1],o=r[c][2];for(var s=!0,a=0;a<e.length;a++)(!1&o||u>=o)&&Object.keys(n.O).every((function(r){return n.O[r](e[a])}))?e.splice(a--,1):(s=!1,o<u&&(u=o));if(s){r.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=r.length;c>0&&r[c-1][2]>o;c--)r[c]=r[c-1];r[c]=[e,i,o]}}(),function(){n.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return n.d(t,{a:t}),t}}(),function(){n.d=function(r,t){for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)}}(),function(){var r={524:0};n.O.j=function(t){return 0===r[t]};var t=function(t,e){var i,o,u=e[0],s=e[1],a=e[2],l=0;if(u.some((function(t){return 0!==r[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var c=a(n)}for(t&&t(e);l<u.length;l++)o=u[l],n.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return n.O(c)},e=self["webpackChunkbirthday_2024"]=self["webpackChunkbirthday_2024"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[504],(function(){return n(4074)}));e=n.O(e)})();
//# sourceMappingURL=app.c9ca00b5.js.map