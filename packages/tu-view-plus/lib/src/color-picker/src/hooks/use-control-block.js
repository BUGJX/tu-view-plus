"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("vue"),L=({value:l,onChange:r})=>{const s=c.ref(!1),i=c.ref(),w=c.ref(),d=(e,n)=>e<0?0:e>n?1:e/n,v=e=>{if(!i.value)return;const{clientX:n,clientY:a}=e,o=i.value.getBoundingClientRect(),u=[d(n-o.x,o.width),d(a-o.y,o.height)];(u[0]!==l[0]||u[1]!==l[1])&&(r==null||r(u))},t=()=>{s.value=!1,window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",t),window.removeEventListener("contextmenu",t)},m=e=>{s.value=!0,v(e),window.addEventListener("mousemove",f),window.addEventListener("mouseup",t),window.addEventListener("contextmenu",t)};function f(e){e.preventDefault(),e.buttons>0?v(e):t()}return{active:s,blockRef:i,handlerRef:w,onMouseDown:m}};exports.useControlBlock=L;
