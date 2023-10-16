"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),z=require("./timeline-item.js"),S=require("@tu-view-plus/hooks"),E=require("./constants.js"),T=e.defineComponent({name:"TuTimelineItem"}),g=e.defineComponent({...T,props:z.timelineItemProps,setup(f){const n=f,o=S.useNamespace("timeline-item"),c=e.getCurrentInstance(),l=e.inject(E.timelineInjectionKey,{}),m=e.computed(()=>{var t;return((t=l.items)==null?void 0:t.indexOf((c==null?void 0:c.uid)??-1))??-1}),d=e.computed(()=>(l==null?void 0:l.direction)??"vertical"),p=e.computed(()=>(l==null?void 0:l.labelPosition)??"same"),k=(t,s,a,u)=>{let r=["left","right"];a==="horizontal"&&(r=["top","bottom"]);const i=s==="alternate"?u||r[t%2]:s;return r.indexOf(i)>-1?i:r[0]},y=e.computed(()=>{const{items:t=[],reverse:s,labelPosition:a,mode:u="left"}=l,r=d.value,i=k(m.value,u,r,n.position);return{[o.b()]:!0,[o.m(`${r}-${i}`)]:r,[o.em("label",`${a}`)]:a,[o.is("last")]:m.value===(s===!0?0:t.length-1)}}),b=e.computed(()=>({[o.e("dot-line")]:!0,[o.em("dot-line",d.value)]:d.value})),v=e.computed(()=>{const{direction:t}=l||{};return{[t==="horizontal"?"borderTopStyle":"borderLeftStyle"]:n.lineType,...n.lineColor?{borderColor:n.lineColor}:{}}}),C=e.computed(()=>({[o.e("dot")]:!0,[o.em("dot",n.dotType)]:n.dotType})),B=e.computed(()=>({[n.dotType==="solid"?"backgroundColor":"borderColor"]:n.dotColor}));return(t,s)=>(e.openBlock(),e.createElementBlock("div",{role:"listitem",class:e.normalizeClass(e.unref(y))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(o).e("dot-wrapper"))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(b)),style:e.normalizeStyle(e.unref(v))},null,6),e.createElementVNode("div",{class:e.normalizeClass(e.unref(o).e("dot-content"))},[t.$slots.dot?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(o).e("dot-custom"))},[e.renderSlot(t.$slots,"dot")],2)):(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(C)),style:e.normalizeStyle(e.unref(B))},null,6))],2)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(o).e("content-wrapper"))},[t.$slots.default?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(o).e("content"))},[e.renderSlot(t.$slots,"default")],2)):e.createCommentVNode("",!0),e.unref(p)!=="relative"?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(o).e("label"))},[t.$slots.label?e.renderSlot(t.$slots,"label",{key:0}):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(t.label),1)],64))],2)):e.createCommentVNode("",!0)],2),e.unref(p)=="relative"?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(o).e("label"))},[t.$slots.label?e.renderSlot(t.$slots,"label",{key:0}):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(t.label),1)],64))],2)):e.createCommentVNode("",!0)],2))}});exports.default=g;
