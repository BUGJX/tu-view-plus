"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue"),v=require("resize-observer-polyfill"),l=require("@tu-view-plus/utils"),d=n.defineComponent({name:"TuResizeObserverV2",emits:["resize"],setup(m,{emit:f,slots:i}){let r;const t=n.ref(),o=n.computed(()=>l.isComponentInstance(t.value)?t.value.$el:t.value),s=e=>{e&&(r=new v(u=>{const a=u[0];f("resize",a)}),r.observe(e))},c=()=>{r&&(r.disconnect(),r=null)};return n.watch(o,e=>{r&&c(),e&&s(e)}),n.onMounted(()=>{o.value&&s(o.value)}),n.onUnmounted(()=>{c()}),()=>{var u;const e=l.getFirstComponent(((u=i.default)==null?void 0:u.call(i))??[]);return e?n.cloneVNode(e,{ref:t},!0):null}}});exports.default=d;