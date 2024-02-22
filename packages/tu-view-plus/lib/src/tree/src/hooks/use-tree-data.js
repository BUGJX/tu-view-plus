"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),v=require("../utils/index.js"),i=require("../utils/tree-data.js");function d(D){const{treeData:f,fieldNames:t,selectable:a,showLine:r,blockNode:u,checkable:l,loadMore:o,draggable:n}=e.toRefs(D),c=e.ref([]);e.watchEffect(()=>{c.value=i.generateTreeData(f.value||[],{selectable:(a==null?void 0:a.value)??!1,showLine:!!(r!=null&&r.value),blockNode:!!(u!=null&&u.value),checkable:(l==null?void 0:l.value)??!1,fieldNames:t==null?void 0:t.value,loadMore:!!(o!=null&&o.value),draggable:!!(n!=null&&n.value)})});const s=e.computed(()=>v.getFlattenTreeData(c.value)),T=e.computed(()=>v.getKey2TreeNode(s.value));return{treeData:c,flattenTreeData:s,key2TreeNode:T}}exports.useTreeData=d;
