"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("@tu-view-plus/utils");function l(e){const t=[];function r(a){a&&a.forEach(n=>{t.push(n),r(n.children)})}return r(e),t}function o(e){const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t}function s(e){return e.selectable&&!e.disabled}function c(e){return!e.isLeaf&&e.children}function u(e){return i.isBoolean(e.isLeaf)?e.isLeaf:!e.children}exports.getFlattenTreeData=l;exports.getKey2TreeNode=o;exports.isLeafNode=u;exports.isNodeExpandable=c;exports.isNodeSelectable=s;