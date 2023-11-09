"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),E=require("./avatar.js"),P=require("./constants.js"),_=require("@tu-view-plus/hooks"),V=require("@tu-view-plus/icons-vue"),i=require("@tu-view-plus/utils");require("../style/avatar.css");const W=["src"],j=e.defineComponent({name:"TuAvatar"}),G=e.defineComponent({...j,props:E.avatarProps,emits:E.avatarEmits,setup(I,{emit:U}){const n=I,g=U,T=e.useSlots(),b=e.useAttrs(),r=_.useNamespace("avatar"),{shape:p,size:c,autoFixFontSize:w,triggerType:S,triggerIconStyle:h}=e.toRefs(n),a=e.inject(P.avatarGroupInjectionKey,void 0),d=e.ref(),s=e.ref(),m=e.ref(!1),v=e.ref(!1),y=e.ref(!0),N=e.ref(!1),F=e.computed(()=>({[r.b()]:!0,[r.m(n.effect)]:n.effect,[r.is("shape")]:p.value=="circle",[r.is("trigger-icon")]:T["trigger-icon"]})),R=e.computed(()=>({[r.e("image")]:m.value||n.imageUrl,[r.e("text")]:!(m.value||n.imageUrl)})),$=e.computed(()=>({[r.e(`trigger-icon-${S.value}`)]:!0,[r.is("shape")]:p.value=="circle"})),k=a?_.useIndex({itemRef:d,selector:`.${_.defaultNamespace}-avatar`}).computedIndex:e.ref(-1),B=e.computed(()=>{const t=i.isNumber(u.value)?{width:i.addUnit(u.value),height:i.addUnit(u.value),fontSize:i.addUnit(u.value/2)}:{};return a&&(t.zIndex=a.zIndexAscend?k.value+1:a.total-k.value,t.marginLeft=k.value!==0?`-${(u.value??40)/4}px`:"0"),t}),q=(({triggerType:t,inlineStyle:l={},triggerIconStyle:o={}})=>{let f={};return t==="button"&&(!o||o&&!o.color)&&l&&l.backgroundColor&&(f={color:l.backgroundColor}),{...o,...f}})({triggerIconStyle:h==null?void 0:h.value,inlineStyle:b.style,triggerType:S.value});e.computed(()=>(a==null?void 0:a.shape)??p.value);const u=e.computed(()=>(a==null?void 0:a.size)??c.value),z=e.computed(()=>(a==null?void 0:a.autoFixFontSize)??w.value),C=()=>{!m.value&&!n.imageUrl&&e.nextTick(()=>{if(!s.value||!d.value)return;const t=s.value.clientWidth,l=u.value??d.value.offsetWidth,o=l/(t+8);l&&o<1&&(s.value.style.transform=`scale(${o}) translateX(-50%)`),y.value=!0})},x=t=>{g("click",t)},L=()=>{z.value&&C()},A=()=>{N.value=!0,g("load")},M=()=>{v.value=!0,g("error")};return e.watch(c,()=>{z.value&&C()}),e.onMounted(()=>{var t;(t=s.value)!=null&&t.firstElementChild&&["IMG","PICTURE"].includes(s.value.firstElementChild.tagName)&&(m.value=!0),z.value&&C()}),(t,l)=>{const o=e.resolveComponent("tu-icon"),f=e.resolveComponent("tu-resize-observer");return e.openBlock(),e.createElementBlock("div",{ref_key:"itemRef",ref:d,class:e.normalizeClass(F.value),style:e.normalizeStyle(B.value),onClick:x},[e.createVNode(f,{onResize:L},{default:e.withCtx(()=>[e.createElementVNode("span",{ref_key:"wrapperRef",ref:s,class:e.normalizeClass(R.value)},[n.imageUrl?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[v.value?e.renderSlot(t.$slots,"error",{key:0},()=>[e.createElementVNode("div",{class:e.normalizeClass(e.unref(r).e("image-icon"))},[e.createVNode(o,null,{default:e.withCtx(()=>[e.createVNode(e.unref(V.PictureRounded))]),_:1})],2)]):e.createCommentVNode("",!0),!(v.value||!y.value)&&!N.value?e.renderSlot(t.$slots,"default",{key:1},()=>[e.createElementVNode("div",{class:e.normalizeClass(e.unref(r).e("image-icon"))},[e.createVNode(o,null,{default:e.withCtx(()=>[e.createVNode(e.unref(V.Loading))]),_:1})],2)]):e.createCommentVNode("",!0),v.value||!y.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("img",{key:2,alt:"avatar",src:n.imageUrl,style:e.normalizeStyle({width:e.unref(i.addUnit)(e.unref(c)),height:e.unref(i.addUnit)(e.unref(c))}),onLoad:A,onError:M},null,44,W))],64)):e.renderSlot(t.$slots,"default",{key:1})],2)]),_:3}),t.$slots["trigger-icon"]?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass($.value),style:e.normalizeStyle(e.unref(q))},[e.renderSlot(t.$slots,"trigger-icon")],6)):e.createCommentVNode("",!0)],6)}}});exports.default=G;
