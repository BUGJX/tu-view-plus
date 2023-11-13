"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("./constants.js"),u=require("./descriptions-row.js"),r=require("./descriptions-cell.js"),a={key:1},s=e.defineComponent({name:"TuDescriptionsRow"}),i=e.defineComponent({...s,props:u.descriptionsRowProps,setup(d){const o=e.inject(c.descriptionsInjectionKey,{});return(l,p)=>e.unref(o).direction==="vertical"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.row,(t,n)=>(e.openBlock(),e.createBlock(e.unref(r.default),{key:`tr1-${n}`,cell:t,tag:"th",type:"label"},null,8,["cell"]))),128))]),e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.row,(t,n)=>(e.openBlock(),e.createBlock(e.unref(r.default),{key:`tr2-${n}`,cell:t,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(e.openBlock(),e.createElementBlock("tr",a,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.row,(t,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:`tr3-${n}`},[e.unref(o).border?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createVNode(e.unref(r.default),{cell:t,tag:"th",type:"label"},null,8,["cell"]),e.createVNode(e.unref(r.default),{cell:t,tag:"td",type:"content"},null,8,["cell"])],64)):(e.openBlock(),e.createBlock(e.unref(r.default),{key:1,cell:t,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});exports.default=i;