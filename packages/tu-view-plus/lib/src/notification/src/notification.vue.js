"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),p=require("@vueuse/core"),f=require("./notification.js"),v=require("@tu-view-plus/hooks"),a=require("@tu-view-plus/utils"),c=require("@tu-view-plus/constants");require("../../config-provider/index.js");const I=require("@tu-view-plus/icons-vue"),C=require("../../icon/index.js");require("../style/notification.css");const L=require("../../config-provider/src/hooks/use-global-config.js"),O=["id"],P={key:0},H=["innerHTML"],G=e.defineComponent({name:"TuNotification"}),U=e.defineComponent({...G,props:f.notificationProps,emits:f.notificationEmits,setup(y,{expose:h,emit:k}){let i;const t=y,E=k,n=v.useNamespace("notification"),{ns:T,zIndex:w}=L.useGlobalComponentSettings("notification"),{nextZIndex:g,currentZIndex:z}=w,s=e.ref(!1),N=e.computed(()=>t.position.endsWith("r")?"right":"left"),S=e.computed(()=>t.position.startsWith("t")?"top":"bottom"),u=e.computed(()=>t.type&&a.TypeComponentsMap[t.type]||t.icon),B=e.computed(()=>[n.b(),{[n.m(t.size)]:t.size},{[n.is("show-close")]:t.showClose},t.customClass,N.value]),q=e.computed(()=>({[S.value]:a.addUnit(t.offset),zIndex:t.zIndex??z.value})),M=e.computed(()=>{const o=t.type;return o&&a.TypeComponentsMap[t.type]?n.em("type-icon",o):""}),V=e.computed(()=>t.title?void 0:{margin:0}),D=()=>{E("destroy")},l=()=>{t.duration>0&&({stop:i}=p.useTimeoutFn(()=>{s.value&&r()},t.duration))},d=()=>{i==null||i()},r=()=>{s.value=!1},_=({code:o})=>{o===c.EVENT_CODE.delete||o===c.EVENT_CODE.backspace?d():o===c.EVENT_CODE.esc?s.value&&r():l()};return p.useEventListener(document,"keydown",_),e.onMounted(()=>{l(),g(),s.value=!0}),h({visible:s,close:r}),(o,m)=>(e.openBlock(),e.createBlock(e.Transition,{name:`${e.unref(v.defaultNamespace)}-notification-fade`,onBeforeLeave:o.onClose,onAfterLeave:D},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{role:"alert",id:o.id,class:e.normalizeClass(B.value),style:e.normalizeStyle(q.value),onMouseenter:d,onMouseleave:l,onClick:m[0]||(m[0]=(...b)=>o.onClick&&o.onClick(...b))},[u.value?(e.openBlock(),e.createBlock(e.unref(C.TuIcon),{key:0,class:e.normalizeClass([e.unref(T).e("type-icon"),M.value])},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(u.value)))]),_:1},8,["class"])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(e.unref(n).e("group"))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(n).e("title"))},e.toDisplayString(o.title),3),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(e.unref(n).e("content")),style:e.normalizeStyle(V.value)},[e.renderSlot(o.$slots,"default",{},()=>[o.dangerouslyUseHTMLString?(e.openBlock(),e.createElementBlock("div",{key:1,innerHTML:o.message},null,8,H)):(e.openBlock(),e.createElementBlock("div",P,e.toDisplayString(o.message),1))])],6),[[e.vShow,o.message]]),e.withDirectives(e.createVNode(e.unref(C.TuIcon),{class:e.normalizeClass(e.unref(n).e("close-icon")),onClick:e.withModifiers(r,["stop"])},{default:e.withCtx(()=>[e.createVNode(e.unref(I.Close))]),_:1},8,["class"]),[[e.vShow,o.showClose]])],2)],46,O),[[e.vShow,s.value]])]),_:3},8,["name","onBeforeLeave"]))}});exports.default=U;
