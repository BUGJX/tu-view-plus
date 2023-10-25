"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),k=require("./collapse-item.js"),d=require("@tu-view-plus/hooks"),y=require("@tu-view-plus/utils"),I=require("@tu-view-plus/icons-vue"),V=require("../../collapse-transition/index.js"),$=require("../../icon/index.js"),q=require("./constants.js");require("../style/collapse.css");const w=["aria-expanded","aria-controls","aria-describedby"],x=["id","tabindex","onKeypress"],g=["aria-hidden","aria-labelledby","id"],S=e.defineComponent({name:"TuCollapseItem"}),T=e.defineComponent({...S,props:k.collapseItemProps,setup(f){const n=f,t=d.useNamespace("collapse"),a=e.inject(q.collapseContextKey),o=e.ref(!1),l=e.ref(!1),c=e.ref(y.generateId()),r=e.computed(()=>a==null?void 0:a.activeNames.value.includes(n.name)),i=e.computed(()=>`${d.defaultNamespace}-content-${c.value}`),u=e.computed(()=>`${d.defaultNamespace}-head-${c.value}`),p=e.computed(()=>({[t.e("item")]:!0,[t.is("active")]:r.value,[t.is("disabled")]:n.disabled})),v=e.computed(()=>({[t.e("item-header")]:!0,[t.is("active")]:r.value,[t.is("focusing")]:o.value&&!n.disabled})),C=e.computed(()=>({[t.e("item-arrow")]:!0,[t.is("active")]:r.value})),b=()=>{n.disabled||(a==null||a.handleItemClick(n.name),o.value=!1,l.value=!0)},h=()=>{a==null||a.handleItemClick(n.name)},N=()=>{setTimeout(()=>{l.value?l.value=!1:o.value=!0},50)};return(s,m)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(p))},[e.createElementVNode("div",{role:"tab","aria-expanded":e.unref(r),"aria-controls":e.unref(i),"aria-describedby":e.unref(i)},[e.createElementVNode("div",{role:"button",id:e.unref(u),class:e.normalizeClass(e.unref(v)),tabindex:s.disabled?-1:0,onClick:b,onKeypress:e.withKeys(e.withModifiers(h,["stop","prevent"]),["space","enter"]),onFocus:N,onBlur:m[0]||(m[0]=_=>o.value=!1)},[e.createVNode(e.unref($.TuIcon),{class:e.normalizeClass(e.unref(C))},{default:e.withCtx(()=>[e.createVNode(e.unref(I.CaretRight))]),_:1},8,["class"]),e.renderSlot(s.$slots,"title",{},()=>[e.createTextVNode(e.toDisplayString(s.title),1)]),s.$slots.extra||s.extra?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(t).e("item-extra"))},[e.renderSlot(s.$slots,"extra",{},()=>[e.createTextVNode(e.toDisplayString(s.extra),1)])],2)):e.createCommentVNode("",!0)],42,x)],8,w),e.createVNode(e.unref(V.TuCollapseTransition),null,{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{role:"tabpanel","aria-hidden":!e.unref(r),"aria-labelledby":e.unref(u),id:e.unref(i),class:e.normalizeClass(e.unref(t).e("item-wrap"))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(t).e("item-content"))},[e.renderSlot(s.$slots,"default")],2)],10,g),[[e.vShow,e.unref(r)]])]),_:3})],2))}});exports.default=T;