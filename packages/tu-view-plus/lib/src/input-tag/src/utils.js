"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("@tu-view-plus/utils"),s=(l,e)=>{const r=[];for(const t of l)if(o.isObject(t))r.push({raw:t,value:t[e.value],label:t[e.label],closable:t[e.closable],tagProps:t[e.tagProps]});else if(l||o.isNumber(l)){const a={value:t,label:String(t),closable:!0};r.push({raw:a,...a})}return r};exports.getValueData=s;
