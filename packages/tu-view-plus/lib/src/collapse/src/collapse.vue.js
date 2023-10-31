"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),u=require("./collapse.js"),_=require("@tu-view-plus/hooks"),i=require("@tu-view-plus/utils"),d=require("@tu-view-plus/constants"),C=require("./constants.js");require("../style/collapse.css");const E=e.defineComponent({name:"TuCollapse"}),q=e.defineComponent({...E,props:u.collapseProps,emits:u.collapseEmits,setup(p,{emit:m}){const s=p,n=m,a=_.useNamespace("collapse"),l=e.ref(i.ensureArray(s.modelValue)),f=e.computed(()=>({[a.b()]:!0,[a.m(s.effect)]:s.effect,[a.m(s.size)]:s.size})),r=t=>{l.value=t;const o=s.accordion?l.value[0]:l.value;n(d.UPDATE_MODEL_EVENT,o),n(d.CHANGE_EVENT,o)},v=t=>{if(s.accordion)r([l.value[0]===t?"":t]);else{const o=[...l.value],c=o.indexOf(t);c>-1?o.splice(c,1):o.push(t),r(o)}};return e.watch(()=>s.modelValue,()=>l.value=i.ensureArray(s.modelValue),{deep:!0}),e.provide(C.collapseContextKey,{activeNames:l,handleItemClick:v}),(t,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(f.value),role:"tablist","aria-multiselectable":"true"},[e.renderSlot(t.$slots,"default")],2))}});exports.default=q;
