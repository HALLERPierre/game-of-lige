import{L as ge,S as ee,i as te,s as se,l as ne,g as Q,M as le,N as re,a as C,d as m,b as i,O as oe,P as Y,Q as ae,e as O,t as W,k as X,c as z,h as Z,m as j,R as de,J as d,T as me,U as pe,j as ve,K as x,V as be,W as ie,v as ye,X as we,Y as ke,w as Se,Z as Ie,x as Te,y as Ce,q as Me,o as Ne,B as Ee}from"../chunks/vendor-7f937735.js";import{r as Re}from"../chunks/singletons-a6a7384f.js";const Ue=()=>{const e=ge("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},Oe={subscribe(e){return Ue().page.subscribe(e)}},ze=Ae;async function Ae(e,t){return Re.goto(e,t,[])}const{window:Be}=ke;function ce(e,t,s){const l=e.slice();return l[25]=t[s],l[27]=s,l}function ue(e,t,s){const l=e.slice();return l[25]=t[s],l[29]=s,l}function he(e){let t,s,l,r,a,o,h,p,k;function v(){return e[19](e[27],e[29])}return{c(){t=le("rect"),this.h()},l(c){t=re(c,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0,rx:!0,ry:!0}),C(t).forEach(m),this.h()},h(){i(t,"class","rect svelte-183mf6o"),i(t,"x",s=e[27]*e[6]),i(t,"y",l=e[29]*e[6]),i(t,"width",r=e[6]-F),i(t,"height",a=e[6]-F),i(t,"rx",o=Math.log(e[6])),i(t,"ry",h=Math.log(e[6])),oe(t,"selected",e[1].includes(`${e[27]}:${e[29]}`))},m(c,u){Q(c,t,u),p||(k=Y(t,"click",v),p=!0)},p(c,u){e=c,u&64&&s!==(s=e[27]*e[6])&&i(t,"x",s),u&64&&l!==(l=e[29]*e[6])&&i(t,"y",l),u&64&&r!==(r=e[6]-F)&&i(t,"width",r),u&64&&a!==(a=e[6]-F)&&i(t,"height",a),u&64&&o!==(o=Math.log(e[6]))&&i(t,"rx",o),u&64&&h!==(h=Math.log(e[6]))&&i(t,"ry",h),u&2&&oe(t,"selected",e[1].includes(`${e[27]}:${e[29]}`))},d(c){c&&m(t),p=!1,k()}}}function fe(e){let t,s=Array(e[4]),l=[];for(let r=0;r<s.length;r+=1)l[r]=he(ue(e,s,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=ne()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);t=ne()},m(r,a){for(let o=0;o<l.length;o+=1)l[o].m(r,a);Q(r,t,a)},p(r,a){if(a&338){s=Array(r[4]);let o;for(o=0;o<s.length;o+=1){const h=ue(r,s,o);l[o]?l[o].p(h,a):(l[o]=he(h),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length}},d(r){ae(l,r),r&&m(t)}}}function Pe(e){let t,s,l,r,a,o,h=(e[0]?"Stop":"Start")+"",p,k,v,c,u,b,y,_,A,I,q,B,T,D,G,H,E=Array(e[5]),g=[];for(let f=0;f<E.length;f+=1)g[f]=fe(ce(e,E,f));return{c(){t=O("div"),s=O("div"),l=O("button"),r=W("Clear"),a=X(),o=O("button"),p=W(h),k=X(),v=O("button"),c=W("Copy"),u=X(),b=O("div"),y=O("button"),_=W("-"),A=X(),I=O("button"),q=W("+"),B=X(),T=le("svg");for(let f=0;f<g.length;f+=1)g[f].c();this.h()},l(f){t=z(f,"DIV",{class:!0});var w=C(t);s=z(w,"DIV",{class:!0});var n=C(s);l=z(n,"BUTTON",{class:!0});var S=C(l);r=Z(S,"Clear"),S.forEach(m),a=j(n),o=z(n,"BUTTON",{class:!0});var R=C(o);p=Z(R,h),R.forEach(m),k=j(n),v=z(n,"BUTTON",{class:!0});var L=C(v);c=Z(L,"Copy"),L.forEach(m),u=j(n),b=z(n,"DIV",{class:!0});var J=C(b);y=z(J,"BUTTON",{class:!0});var M=C(y);_=Z(M,"-"),M.forEach(m),A=j(J),I=z(J,"BUTTON",{class:!0});var N=C(I);q=Z(N,"+"),N.forEach(m),J.forEach(m),n.forEach(m),B=j(w),T=re(w,"svg",{width:!0,height:!0});var U=C(T);for(let P=0;P<g.length;P+=1)g[P].l(U);U.forEach(m),w.forEach(m),this.h()},h(){i(l,"class","reset svelte-183mf6o"),i(o,"class","start svelte-183mf6o"),i(v,"class","start svelte-183mf6o"),i(y,"class","svelte-183mf6o"),i(I,"class","svelte-183mf6o"),i(b,"class","speed svelte-183mf6o"),i(s,"class","actions svelte-183mf6o"),i(T,"width","100%"),i(T,"height","100%"),i(t,"class","grid svelte-183mf6o"),de(()=>e[20].call(t))},m(f,w){Q(f,t,w),d(t,s),d(s,l),d(l,r),d(s,a),d(s,o),d(o,p),d(s,k),d(s,v),d(v,c),d(s,u),d(s,b),d(b,y),d(y,_),d(b,A),d(b,I),d(I,q),d(t,B),d(t,T);for(let n=0;n<g.length;n+=1)g[n].m(T,null);D=me(t,e[20].bind(t)),G||(H=[Y(Be,"wheel",e[9]),Y(l,"click",e[18]),Y(o,"click",function(){pe(e[0]?e[11]:e[10])&&(e[0]?e[11]:e[10]).apply(this,arguments)}),Y(v,"click",e[14]),Y(y,"click",e[13]),Y(I,"click",e[12])],G=!0)},p(f,[w]){if(e=f,w&1&&h!==(h=(e[0]?"Stop":"Start")+"")&&ve(p,h),w&370){E=Array(e[5]);let n;for(n=0;n<E.length;n+=1){const S=ce(e,E,n);g[n]?g[n].p(S,w):(g[n]=fe(S),g[n].c(),g[n].m(T,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=E.length}},i:x,o:x,d(f){f&&m(t),ae(g,f),D(),G=!1,be(H)}}}let F=0;function Ye(e){const t=[];for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++){const r=s+e.x,a=l+e.y;r===e.x&&a===e.y||t.push(`${r}:${a}`)}return t}function Le(e,t,s){let l,r,a,o;ie(e,Oe,n=>s(23,a=n));let h,p;ye(()=>{const n=new URLSearchParams(a.url.hash.replace("#",""));s(15,h=n.get("pattern")),s(16,p=n.get("zoom"))});let k=0,v=0,c=50,u,b=200,{playing:y=!1}=t,{aliveCells:_=[]}=t;const A=we(c,{damping:1});ie(e,A,n=>s(6,o=n));function I(n,S){D();const R=`${n}:${S}`;_.includes(R)?s(1,_=_.filter(L=>L!==R)):s(1,_=[..._,R])}function q(n){n.deltaY<0&&s(17,c+=2),n.deltaY>0&&c>20&&s(17,c-=2)}function B(){const n=[],[S,R,L,J]=_.reduce(([M,N,U,P],$)=>{const[V,K]=$.split(":").map(_e=>parseInt(_e,10));return[Math.min(M,V),Math.max(N,V),Math.min(U,K),Math.max(P,K)]},[1/0,-1/0,1/0,-1/0]);for(let M=S-1;M<=R+1;M++)for(let N=L-1;N<=J+1;N++){const U=`${M}:${N}`,P=_.includes(U),V=Ye({x:M,y:N}).filter(K=>_.includes(K)).length;(P&&(V===2||V===3)||V===3)&&n.push(U)}s(1,_=n)}function T(){s(0,y=!0),u=setInterval(B,b)}function D(){s(0,y=!1),clearInterval(u)}function G(){b-=50,clearInterval(u),u=setInterval(B,b)}function H(){b+=50,clearInterval(u),u=setInterval(B,b)}function E(){const n=new URLSearchParams("");n.set("pattern",encodeURI(JSON.stringify(_))),n.set("zoom",c.toString()),ze(`#?${n.toString()}`,{keepfocus:!0,replaceState:!0,noscroll:!0}),window.navigator.clipboard.writeText(window.location.href)}const g=()=>s(1,_=[]),f=(n,S)=>I(n,S);function w(){k=this.clientHeight,v=this.clientWidth,s(2,k),s(3,v)}return e.$$set=n=>{"playing"in n&&s(0,y=n.playing),"aliveCells"in n&&s(1,_=n.aliveCells)},e.$$.update=()=>{e.$$.dirty&98304&&(h!=null&&s(1,_=JSON.parse(decodeURI(h))),p!=null&&s(17,c=JSON.parse(decodeURI(p)))),e.$$.dirty&131080&&s(5,l=Math.floor(v/c)+1),e.$$.dirty&131076&&s(4,r=Math.floor(k/c)+1),e.$$.dirty&131072&&A.set(c)},[y,_,k,v,r,l,o,A,I,q,T,D,G,H,E,h,p,c,g,f,w]}class Je extends ee{constructor(t){super();te(this,t,Le,Pe,se,{playing:0,aliveCells:1})}}function Ve(e){let t,s,l;return s=new Je({}),{c(){t=X(),Se(s.$$.fragment),this.h()},l(r){Ie('[data-svelte="svelte-mb0vpf"]',document.head).forEach(m),t=j(r),Te(s.$$.fragment,r),this.h()},h(){document.title="Game of Life"},m(r,a){Q(r,t,a),Ce(s,r,a),l=!0},p:x,i(r){l||(Me(s.$$.fragment,r),l=!0)},o(r){Ne(s.$$.fragment,r),l=!1},d(r){r&&m(t),Ee(s,r)}}}class qe extends ee{constructor(t){super();te(this,t,null,Ve,se,{})}}export{qe as default};
