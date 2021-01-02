var app=function(){"use strict";function e(){}const t=e=>e;function a(e){return e()}function n(){return Object.create(null)}function m(e){e.forEach(a)}function c(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}const r="undefined"!=typeof window;let o=r?()=>window.performance.now():()=>Date.now(),l=r?e=>requestAnimationFrame(e):e;const s=new Set;function R(e){s.forEach((t=>{t.c(e)||(s.delete(t),t.f())})),0!==s.size&&l(R)}function u(e,t){e.appendChild(t)}function f(e,t,a){e.insertBefore(t,a||null)}function d(e){e.parentNode.removeChild(e)}function p(e,t){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(t)}function h(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function $(){return g(" ")}function _(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const b=new Set;let x,E=0;function N(e,t,a,n,m,c,i,r=0){const o=16.666/n;let l="{\n";for(let e=0;e<=1;e+=o){const n=t+(a-t)*c(e);l+=100*e+`%{${i(n,1-n)}}\n`}const s=l+`100% {${i(a,1-a)}}\n}`,R=`__svelte_${function(e){let t=5381,a=e.length;for(;a--;)t=(t<<5)-t^e.charCodeAt(a);return t>>>0}(s)}_${r}`,u=e.ownerDocument;b.add(u);const f=u.__svelte_stylesheet||(u.__svelte_stylesheet=u.head.appendChild(h("style")).sheet),d=u.__svelte_rules||(u.__svelte_rules={});d[R]||(d[R]=!0,f.insertRule(`@keyframes ${R} ${s}`,f.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${R} ${n}ms linear ${m}ms 1 both`,E+=1,R}function v(e,t){const a=(e.style.animation||"").split(", "),n=a.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),m=a.length-n.length;m&&(e.style.animation=n.join(", "),E-=m,E||l((()=>{E||(b.forEach((e=>{const t=e.__svelte_stylesheet;let a=t.cssRules.length;for(;a--;)t.deleteRule(a);e.__svelte_rules={}})),b.clear())})))}function w(e){x=e}const C=[],A=[],O=[],M=[],S=Promise.resolve();let D=!1;function T(e){O.push(e)}let Y=!1;const k=new Set;function G(){if(!Y){Y=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];w(t),L(t.$$)}for(w(null),C.length=0;A.length;)A.pop()();for(let e=0;e<O.length;e+=1){const t=O[e];k.has(t)||(k.add(t),t())}O.length=0}while(C.length);for(;M.length;)M.pop()();D=!1,Y=!1,k.clear()}}function L(e){if(null!==e.fragment){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}let q;function F(e,t,a){e.dispatchEvent(function(e,t){const a=document.createEvent("CustomEvent");return a.initCustomEvent(e,!1,!1,t),a}(`${t?"intro":"outro"}${a}`))}const K=new Set;let X;function U(e,t){e&&e.i&&(K.delete(e),e.i(t))}function V(e,t,a,n){if(e&&e.o){if(K.has(e))return;K.add(e),X.c.push((()=>{K.delete(e),n&&(a&&e.d(1),n())})),e.o(t)}}const W={duration:0};function z(a,n,i,r){let u=n(a,i),f=r?0:1,d=null,p=null,h=null;function g(){h&&v(a,h)}function $(e,t){const a=e.b-f;return t*=Math.abs(a),{a:f,b:e.b,d:a,duration:t,start:e.start,end:e.start+t,group:e.group}}function _(n){const{delay:c=0,duration:i=300,easing:r=t,tick:_=e,css:y}=u||W,b={start:o()+c,b:n};n||(b.group=X,X.r+=1),d||p?p=b:(y&&(g(),h=N(a,f,n,i,c,r,y)),n&&_(0,1),d=$(b,i),T((()=>F(a,n,"start"))),function(e){let t;0===s.size&&l(R),new Promise((a=>{s.add(t={c:e,f:a})}))}((e=>{if(p&&e>p.start&&(d=$(p,i),p=null,F(a,d.b,"start"),y&&(g(),h=N(a,f,d.b,d.duration,0,r,u.css))),d)if(e>=d.end)_(f=d.b,1-f),F(a,d.b,"end"),p||(d.b?g():--d.group.r||m(d.group.c)),d=null;else if(e>=d.start){const t=e-d.start;f=d.a+d.d*r(t/d.duration),_(f,1-f)}return!(!d&&!p)})))}return{run(e){c(u)?(q||(q=Promise.resolve(),q.then((()=>{q=null}))),q).then((()=>{u=u(),_(e)})):_(e)},end(){g(),d=p=null}}}function B(e){e&&e.c()}function j(e,t,n){const{fragment:i,on_mount:r,on_destroy:o,after_update:l}=e.$$;i&&i.m(t,n),T((()=>{const t=r.map(a).filter(c);o?o.push(...t):m(t),e.$$.on_mount=[]})),l.forEach(T)}function H(e,t){const a=e.$$;null!==a.fragment&&(m(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(C.push(e),D||(D=!0,S.then(G)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(t,a,c,i,r,o,l=[-1]){const s=x;w(t);const R=a.props||{},u=t.$$={fragment:null,ctx:null,props:o,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let f=!1;if(u.ctx=c?c(t,R,((e,a,...n)=>{const m=n.length?n[0]:a;return u.ctx&&r(u.ctx[e],u.ctx[e]=m)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](m),f&&P(t,e)),a})):[],u.update(),f=!0,m(u.before_update),u.fragment=!!i&&i(u.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);u.fragment&&u.fragment.l(e),e.forEach(d)}else u.fragment&&u.fragment.c();a.intro&&U(t.$$.fragment),j(t,a.target,a.anchor),G()}w(s)}class J{$destroy(){H(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function I(e){const t=e-1;return t*t*t+1}function Q(e,{delay:a=0,duration:n=400,easing:m=t}){const c=+getComputedStyle(e).opacity;return{delay:a,duration:n,easing:m,css:e=>"opacity: "+e*c}}function ee(e,{delay:t=0,duration:a=400,easing:n=I,x:m=0,y:c=0,opacity:i=0}){const r=getComputedStyle(e),o=+r.opacity,l="none"===r.transform?"":r.transform,s=o*(1-i);return{delay:t,duration:a,easing:n,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*m}px, ${(1-e)*c}px);\n\t\t\topacity: ${o-s*t}`}}function te(e,t,a){const n=e.slice();return n[5]=t[a],n}function ae(e,t,a){const n=e.slice();return n[8]=t[a],n}function ne(t){let a,n,m,c,i=t[8].charAt(0)+"",r=t[8].substring(1)+"";return{c(){a=g(i),n=h("span"),m=g(r),c=g("  "),_(n,"class","non-capital svelte-1qscbh4")},m(e,t){f(e,a,t),f(e,n,t),u(n,m),u(n,c)},p:e,d(e){e&&d(a),e&&d(n)}}}function me(e){let t,a,n,m,c,i=e[5].c+"";return{c(){t=h("h1"),a=g(i),n=g("  "),_(t,"class","svelte-1qscbh4")},m(e,m){f(e,t,m),u(t,a),u(t,n),c=!0},p(t,a){e=t},i(a){c||(T((()=>{m||(m=z(t,ee,{x:e[5].x,duration:2e3},!0)),m.run(1)})),c=!0)},o(a){m||(m=z(t,ee,{x:e[5].x,duration:2e3},!1)),m.run(0),c=!1},d(e){e&&d(t),e&&m&&m.end()}}}function ce(e){let t,a,n,c,i=e[0],r=[];for(let t=0;t<i.length;t+=1)r[t]=ne(ae(e,i,t));let o=e[1],l=[];for(let t=0;t<o.length;t+=1)l[t]=me(te(e,o,t));const s=e=>V(l[e],1,1,(()=>{l[e]=null}));return{c(){t=h("h1");for(let e=0;e<r.length;e+=1)r[e].c();a=$(),n=h("div");for(let e=0;e<l.length;e+=1)l[e].c();_(t,"class","full-text svelte-1qscbh4"),_(n,"class","brief-text svelte-1qscbh4")},m(e,m){f(e,t,m);for(let e=0;e<r.length;e+=1)r[e].m(t,null);f(e,a,m),f(e,n,m);for(let e=0;e<l.length;e+=1)l[e].m(n,null);c=!0},p(e,[a]){if(1&a){let n;for(i=e[0],n=0;n<i.length;n+=1){const m=ae(e,i,n);r[n]?r[n].p(m,a):(r[n]=ne(m),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=i.length}if(2&a){let t;for(o=e[1],t=0;t<o.length;t+=1){const m=te(e,o,t);l[t]?(l[t].p(m,a),U(l[t],1)):(l[t]=me(m),l[t].c(),U(l[t],1),l[t].m(n,null))}for(X={r:0,c:[],p:X},t=o.length;t<l.length;t+=1)s(t);X.r||m(X.c),X=X.p}},i(e){if(!c){for(let e=0;e<o.length;e+=1)U(l[e]);c=!0}},o(e){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)V(l[e]);c=!1},d(e){e&&d(t),p(r,e),e&&d(a),e&&d(n),p(l,e)}}}function ie(e,t,a){let{fullTitle:n}=t,{shortTitle:m}=t,c=n.split(" "),i=m.split(""),r=[];return i.forEach(((e,t)=>{r.push({c:e,x:-100*(t+1)})})),console.log(i),e.$$set=e=>{"fullTitle"in e&&a(2,n=e.fullTitle),"shortTitle"in e&&a(3,m=e.shortTitle)},[c,r,n,m]}class re extends J{constructor(e){super(),Z(this,e,ie,ce,i,{fullTitle:2,shortTitle:3})}}function oe(t){let a,n,m,c,i,r,o,l,s,R,p,b,x;return{c(){a=h("hr"),n=$(),m=h("p"),c=g("Copyright "),i=g(t[0]),r=g(" by "),o=h("i"),l=g(t[1]),s=g(", prepared for "),R=h("span"),p=g(t[2]),b=g(" using "),x=h("a"),x.textContent="Svelte",_(a,"class","svelte-ex8ezg"),_(R,"class","svelte-ex8ezg"),_(x,"href","https://svelte.dev/tutorial")},m(e,t){f(e,a,t),f(e,n,t),f(e,m,t),u(m,c),u(m,i),u(m,r),u(m,o),u(o,l),u(m,s),u(m,R),u(R,p),u(m,b),u(m,x)},p(e,[t]){1&t&&y(i,e[0]),2&t&&y(l,e[1]),4&t&&y(p,e[2])},i:e,o:e,d(e){e&&d(a),e&&d(n),e&&d(m)}}}function le(e,t,a){let{year:n="2021"}=t,{author:m}=t,{owner:c}=t;return e.$$set=e=>{"year"in e&&a(0,n=e.year),"author"in e&&a(1,m=e.author),"owner"in e&&a(2,c=e.owner)},[n,m,c]}class se extends J{constructor(e){super(),Z(this,e,le,oe,i,{year:0,author:1,owner:2})}}var Re=[{_id:"5f3a3c5faa55d5c4ea549ac1",picture:"http://placehold.it/64x64",age:38,name:"Padilla Adkins",team:"EURON",races:[{name:"Race 0",time:"1:11:39.515"},{name:"Race 1",time:"1:17:24.312"},{name:"Race 2",time:"1:22:29.376"},{name:"Race 3",time:"1:10:34.491"},{name:"Race 4",time:"1:51:45.103"},{name:"Race 5",time:"1:44:16.158"},{name:"Race 6",time:"1:30:14.658"},{name:"Race 7",time:"1:29:41.505"},{name:"Race 8",time:"1:47:52.109"},{name:"Race 9",time:"1:23:38.271"}]},{_id:"5f3a3c5f4984bd9be6a6f655",picture:"http://placehold.it/64x64",age:39,name:"Richards Floyd",team:"VENDBLEND",races:[{name:"Race 0",time:"1:16:53.224"},{name:"Race 1",time:"1:31:32.533"},{name:"Race 2",time:"1:26:56.186"},{name:"Race 3",time:"1:0:15.169"},{name:"Race 4",time:"1:21:5.428"},{name:"Race 5",time:"1:26:18.202"},{name:"Race 6",time:"1:22:24.379"},{name:"Race 7",time:"1:22:9.316"},{name:"Race 8",time:"1:28:6.268"},{name:"Race 9",time:"1:57:56.461"}]},{_id:"5f3a3c5fc4c1a2c2dd9df702",picture:"http://placehold.it/64x64",age:39,name:"Jewel Mcdaniel",team:"GENESYNK",races:[{name:"Race 0",time:"1:4:42.549"},{name:"Race 1",time:"1:53:19.849"},{name:"Race 2",time:"1:51:25.667"},{name:"Race 3",time:"1:58:26.847"},{name:"Race 4",time:"1:47:42.841"},{name:"Race 5",time:"1:51:24.73"},{name:"Race 6",time:"1:4:0.075"},{name:"Race 7",time:"1:52:40.457"},{name:"Race 8",time:"1:18:17.738"},{name:"Race 9",time:"1:37:35.128"}]},{_id:"5f3a3c5f8a23c3e2c85cab74",picture:"http://placehold.it/64x64",age:21,name:"Welch Mays",team:"UXMOX",races:[{name:"Race 0",time:"1:21:48.956"},{name:"Race 1",time:"1:0:56.521"},{name:"Race 2",time:"1:53:9.793"},{name:"Race 3",time:"1:51:15.265"},{name:"Race 4",time:"1:59:43.968"},{name:"Race 5",time:"1:31:27.167"},{name:"Race 6",time:"1:59:49.156"},{name:"Race 7",time:"1:18:49.836"},{name:"Race 8",time:"1:47:46.692"},{name:"Race 9",time:"1:10:57.173"}]},{_id:"5f3a3c5f355a5be1fb74076a",picture:"http://placehold.it/64x64",age:28,name:"Lilian Levine",team:"UXMOX",races:[{name:"Race 0",time:"1:48:32.99"},{name:"Race 1",time:"1:1:41.043"},{name:"Race 2",time:"1:22:57.229"},{name:"Race 3",time:"1:4:40.618"},{name:"Race 4",time:"1:43:28.734"},{name:"Race 5",time:"1:59:19.861"},{name:"Race 6",time:"1:16:19.976"},{name:"Race 7",time:"1:28:39.612"},{name:"Race 8",time:"1:23:2.596"},{name:"Race 9",time:"1:38:32.305"}]},{_id:"5f3a3c5fc42b87fc0d6e31a9",picture:"http://placehold.it/64x64",age:27,name:"Harmon Mills",team:"GENESYNK",races:[{name:"Race 0",time:"1:38:45.622"},{name:"Race 1",time:"1:11:14.969"},{name:"Race 2",time:"1:46:46.861"},{name:"Race 3",time:"1:44:18.84"},{name:"Race 4",time:"1:42:3.761"},{name:"Race 5",time:"1:25:17.811"},{name:"Race 6",time:"1:12:57.672"},{name:"Race 7",time:"1:55:48.879"},{name:"Race 8",time:"1:34:55.445"},{name:"Race 9",time:"1:58:25.125"}]},{_id:"5f3a3c5f86cbcda872a8f1ed",picture:"http://placehold.it/64x64",age:24,name:"Olsen Donaldson",team:"DEVAWAY",races:[{name:"Race 0",time:"1:26:39.47"},{name:"Race 1",time:"1:8:11.491"},{name:"Race 2",time:"1:50:5.416"},{name:"Race 3",time:"1:48:56.726"},{name:"Race 4",time:"1:17:8.218"},{name:"Race 5",time:"1:26:42.32"},{name:"Race 6",time:"1:55:43.729"},{name:"Race 7",time:"1:6:13.931"},{name:"Race 8",time:"1:48:25.087"},{name:"Race 9",time:"1:52:38.604"}]},{_id:"5f3a3c5f65e328c1a1263781",picture:"http://placehold.it/64x64",age:29,name:"Anne Johnston",team:"DEVAWAY",races:[{name:"Race 0",time:"1:46:20.667"},{name:"Race 1",time:"1:25:48.31"},{name:"Race 2",time:"1:0:26.598"},{name:"Race 3",time:"1:40:54.377"},{name:"Race 4",time:"1:53:38.533"},{name:"Race 5",time:"1:27:11.601"},{name:"Race 6",time:"1:20:27.344"},{name:"Race 7",time:"1:48:58.123"},{name:"Race 8",time:"1:56:35.634"},{name:"Race 9",time:"1:47:46.822"}]},{_id:"5f3a3c5fde8d2bb91cab3352",picture:"http://placehold.it/64x64",age:31,name:"Cherie Fitzgerald",team:"EURON",races:[{name:"Race 0",time:"1:46:21.421"},{name:"Race 1",time:"1:43:5.956"},{name:"Race 2",time:"1:27:27.411"},{name:"Race 3",time:"1:32:43.108"},{name:"Race 4",time:"1:51:21.313"},{name:"Race 5",time:"1:23:48.083"},{name:"Race 6",time:"1:6:0.916"},{name:"Race 7",time:"1:57:54.609"},{name:"Race 8",time:"1:54:32.003"},{name:"Race 9",time:"1:31:15.369"}]},{_id:"5f3a3c5f5a4ce67633e028ad",picture:"http://placehold.it/64x64",age:29,name:"Debora Sears",team:"GENESYNK",races:[{name:"Race 0",time:"1:16:52.691"},{name:"Race 1",time:"1:20:32.393"},{name:"Race 2",time:"1:35:38.871"},{name:"Race 3",time:"1:35:16.146"},{name:"Race 4",time:"1:41:49.539"},{name:"Race 5",time:"1:57:46.918"},{name:"Race 6",time:"1:12:47.641"},{name:"Race 7",time:"1:55:52.599"},{name:"Race 8",time:"1:26:36.246"},{name:"Race 9",time:"1:22:26.748"}]},{_id:"5f3a3c5f0e202f4a527bf502",picture:"http://placehold.it/64x64",age:27,name:"Morris Combs",team:"EURON",races:[{name:"Race 0",time:"1:47:3.23"},{name:"Race 1",time:"1:28:54.578"},{name:"Race 2",time:"1:40:5.387"},{name:"Race 3",time:"1:28:49.392"},{name:"Race 4",time:"1:47:18.89"},{name:"Race 5",time:"1:11:2.444"},{name:"Race 6",time:"1:22:29.818"},{name:"Race 7",time:"1:4:24.429"},{name:"Race 8",time:"1:14:15.846"},{name:"Race 9",time:"1:39:5.08"}]},{_id:"5f3a3c5ff1c5e552442b292d",picture:"http://placehold.it/64x64",age:29,name:"Naomi Rutledge",team:"VENDBLEND",races:[{name:"Race 0",time:"1:44:36.643"},{name:"Race 1",time:"1:15:9.451"},{name:"Race 2",time:"1:50:37.69"},{name:"Race 3",time:"1:8:31.728"},{name:"Race 4",time:"1:32:50.154"},{name:"Race 5",time:"1:51:22.663"},{name:"Race 6",time:"1:30:35.122"},{name:"Race 7",time:"1:17:25.795"},{name:"Race 8",time:"1:36:56.224"},{name:"Race 9",time:"1:32:52.749"}]},{_id:"5f3a3c5f086b43d06ac5a984",picture:"http://placehold.it/64x64",age:35,name:"Guerra Rosario",team:"DEVAWAY",races:[{name:"Race 0",time:"1:22:53.242"},{name:"Race 1",time:"1:54:8.187"},{name:"Race 2",time:"1:1:5.747"},{name:"Race 3",time:"1:44:13.98"},{name:"Race 4",time:"1:30:28.754"},{name:"Race 5",time:"1:13:14.073"},{name:"Race 6",time:"1:41:58.781"},{name:"Race 7",time:"1:8:10.042"},{name:"Race 8",time:"1:54:42.966"},{name:"Race 9",time:"1:58:35.652"}]},{_id:"5f3a3c5f2744fa89349fe0f3",picture:"http://placehold.it/64x64",age:34,name:"Nguyen Fletcher",team:"GENESYNK",races:[{name:"Race 0",time:"1:8:15.559"},{name:"Race 1",time:"1:50:21.71"},{name:"Race 2",time:"1:4:55.952"},{name:"Race 3",time:"1:34:18.34"},{name:"Race 4",time:"1:59:9.568"},{name:"Race 5",time:"1:59:42.241"},{name:"Race 6",time:"1:46:33.387"},{name:"Race 7",time:"1:55:49.791"},{name:"Race 8",time:"1:29:4.4"},{name:"Race 9",time:"1:45:37.349"}]},{_id:"5f3a3c5f970bc40e21b8ee63",picture:"http://placehold.it/64x64",age:27,name:"Lisa Montoya",team:"GENESYNK",races:[{name:"Race 0",time:"1:19:38.374"},{name:"Race 1",time:"1:52:42.372"},{name:"Race 2",time:"1:59:9.399"},{name:"Race 3",time:"1:33:33.531"},{name:"Race 4",time:"1:15:15.002"},{name:"Race 5",time:"1:12:1.19"},{name:"Race 6",time:"1:56:48.602"},{name:"Race 7",time:"1:49:20.073"},{name:"Race 8",time:"1:53:21.555"},{name:"Race 9",time:"1:40:52.086"}]},{_id:"5f3a3c5f0a5f78c603fc1d14",picture:"http://placehold.it/64x64",age:30,name:"Misty Marsh",team:"UXMOX",races:[{name:"Race 0",time:"1:39:54.655"},{name:"Race 1",time:"1:26:8.059"},{name:"Race 2",time:"1:23:11.046"},{name:"Race 3",time:"1:41:4.32"},{name:"Race 4",time:"1:9:53.404"},{name:"Race 5",time:"1:13:42.517"},{name:"Race 6",time:"1:48:18.026"},{name:"Race 7",time:"1:55:3.198"},{name:"Race 8",time:"1:19:46.733"},{name:"Race 9",time:"1:40:17.202"}]},{_id:"5f3a3c5f876488cda4de309a",picture:"http://placehold.it/64x64",age:32,name:"Stanton Ayala",team:"CONFRENZY",races:[{name:"Race 0",time:"1:10:20.58"},{name:"Race 1",time:"1:53:44.181"},{name:"Race 2",time:"1:5:18.992"},{name:"Race 3",time:"1:47:55.459"},{name:"Race 4",time:"1:49:31.585"},{name:"Race 5",time:"1:38:20.841"},{name:"Race 6",time:"1:48:19.814"},{name:"Race 7",time:"1:36:18.023"},{name:"Race 8",time:"1:31:21.812"},{name:"Race 9",time:"1:48:26.514"}]},{_id:"5f3a3c5f8bd0087dc1b70b77",picture:"http://placehold.it/64x64",age:39,name:"Gilda Lindsay",team:"UXMOX",races:[{name:"Race 0",time:"1:53:0.702"},{name:"Race 1",time:"1:28:42.037"},{name:"Race 2",time:"1:53:24.687"},{name:"Race 3",time:"1:38:10.498"},{name:"Race 4",time:"1:46:58.467"},{name:"Race 5",time:"1:21:51.764"},{name:"Race 6",time:"1:2:8.072"},{name:"Race 7",time:"1:26:54.026"},{name:"Race 8",time:"1:56:31.087"},{name:"Race 9",time:"1:56:5.192"}]},{_id:"5f3a3c5f8df3fe2e8c6ae477",picture:"http://placehold.it/64x64",age:29,name:"Daniels Manning",team:"CONFRENZY",races:[{name:"Race 0",time:"1:0:57.037"},{name:"Race 1",time:"1:19:21.263"},{name:"Race 2",time:"1:16:58.378"},{name:"Race 3",time:"1:21:1.485"},{name:"Race 4",time:"1:16:2.04"},{name:"Race 5",time:"1:50:30.417"},{name:"Race 6",time:"1:54:33.324"},{name:"Race 7",time:"1:15:45.267"},{name:"Race 8",time:"1:2:42.528"},{name:"Race 9",time:"1:24:7.128"}]},{_id:"5f3a3c5f0c713e786503e798",picture:"http://placehold.it/64x64",age:39,name:"Howe Gaines",team:"VENDBLEND",races:[{name:"Race 0",time:"1:47:32.432"},{name:"Race 1",time:"1:40:12.872"},{name:"Race 2",time:"1:44:7.808"},{name:"Race 3",time:"1:47:10.399"},{name:"Race 4",time:"1:16:48.487"},{name:"Race 5",time:"1:35:58.714"},{name:"Race 6",time:"1:9:2.596"},{name:"Race 7",time:"1:58:10.066"},{name:"Race 8",time:"1:10:34.986"},{name:"Race 9",time:"1:11:36.368"}]},{_id:"5f3a3c5f37ce779261434517",picture:"http://placehold.it/64x64",age:24,name:"Hillary Leonard",team:"CONFRENZY",races:[{name:"Race 0",time:"1:48:28.477"},{name:"Race 1",time:"1:37:16.852"},{name:"Race 2",time:"1:7:36.766"},{name:"Race 3",time:"1:54:50.18"},{name:"Race 4",time:"1:11:35.705"},{name:"Race 5",time:"1:1:52.361"},{name:"Race 6",time:"1:15:58.031"},{name:"Race 7",time:"1:49:1.957"},{name:"Race 8",time:"1:50:46.778"},{name:"Race 9",time:"1:2:21.754"}]},{_id:"5f3a3c5fdc6f6738e4f35dd7",picture:"http://placehold.it/64x64",age:32,name:"Reva French",team:"GENESYNK",races:[{name:"Race 0",time:"1:53:36.228"},{name:"Race 1",time:"1:59:58.061"},{name:"Race 2",time:"1:27:19.038"},{name:"Race 3",time:"1:0:6.003"},{name:"Race 4",time:"1:6:38.885"},{name:"Race 5",time:"1:50:42.074"},{name:"Race 6",time:"1:42:55.71"},{name:"Race 7",time:"1:38:16.095"},{name:"Race 8",time:"1:56:0.979"},{name:"Race 9",time:"1:29:18.093"}]}];function ue(e){let t,a,n,m,c,i,r,o,l,s,R,p,g;return a=new re({props:{fullTitle:e[0],shortTitle:"WKC"}}),p=new se({props:{author:"Miguel Villar",owner:"devaway_"}}),{c(){t=h("main"),B(a.$$.fragment),n=$(),m=h("p"),m.textContent=`${Re[3].age}`,i=$(),r=h("p"),r.textContent="HOLA",l=$(),s=h("span"),s.textContent=`${e[1][1]}`,R=$(),B(p.$$.fragment),_(s,"class","svelte-183niqg"),_(t,"class","svelte-183niqg")},m(e,c){f(e,t,c),j(a,t,null),u(t,n),u(t,m),u(t,i),u(t,r),u(t,l),u(t,s),u(t,R),j(p,t,null),g=!0},p(e,[t]){const n={};1&t&&(n.fullTitle=e[0]),a.$set(n)},i(e){g||(U(a.$$.fragment,e),T((()=>{c||(c=z(m,ee,{y:-200,duration:2e3},!0)),c.run(1)})),T((()=>{o||(o=z(r,Q,{},!0)),o.run(1)})),U(p.$$.fragment,e),g=!0)},o(e){V(a.$$.fragment,e),c||(c=z(m,ee,{y:-200,duration:2e3},!1)),c.run(0),o||(o=z(r,Q,{},!1)),o.run(0),V(p.$$.fragment,e),g=!1},d(e){e&&d(t),H(a),e&&c&&c.end(),e&&o&&o.end(),H(p)}}}function fe(e,t,a){let{appName:n}=t;return e.$$set=e=>{"appName"in e&&a(0,n=e.appName)},[n,["🏎","🏁","🏆","🥇","🥈","🥉","🕑","ℹ"]]}return new class extends J{constructor(e){super(),Z(this,e,fe,ue,i,{appName:0})}}({target:document.body,intro:!0,props:{appName:"World Kart Championship"}})}();
//# sourceMappingURL=bundle.js.map
