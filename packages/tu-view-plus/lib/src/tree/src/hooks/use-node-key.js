"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),o=require("../utils/tree-data.js");function u(){const e=t.getCurrentInstance(),r=()=>(e==null?void 0:e.vnode.key)??o.generateKey(),n=t.ref(r());return t.onUpdated(()=>{n.value=r()}),n}exports.useNodeKey=u;
