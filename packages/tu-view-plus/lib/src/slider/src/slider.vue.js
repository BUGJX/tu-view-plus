"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue"),X=require("@tu-view-plus/hooks"),u=require("@tu-view-plus/utils"),S=require("./slider.js");require("../../form/index.js");const V=require("number-precision"),m=require("./utils.js"),Y=require("./slider-ticks.vue.js"),$=require("./slider-dots.vue.js"),G=require("./slider-marks.vue.js"),z=require("./slider-button.vue.js"),H=require("./slider-input.vue.js");require("../style/slider.css");const J=require("../../form/src/hooks/use-form-props.js"),K=n.defineComponent({name:"TuSlider"}),Q=n.defineComponent({...K,props:S.sliderProps,emits:S.sliderEmits,setup(N,{emit:w}){V.enableBoundaryChecking(!1);const t=N,f=w,i=X.useNamespace("slider"),g=J.useFormDisabled(),d=n.ref(null),k=n.ref(),c=t.modelValue?t.modelValue:t.defaultValue,r=n.ref(u.isArray(c)?c[0]:0),a=n.ref(u.isArray(c)?c[1]:c),C=n.ref(!1),P=n.computed(()=>({[i.b()]:!0,[i.m(t.direction)]:t.direction,[i.m(t.size)]:t.size})),T=n.computed(()=>({[i.e("track")]:!0,[i.em("track",t.direction)]:t.direction,[i.is("disabled")]:g.value})),l=n.computed(()=>t.range?u.isArray(t.modelValue)?t.modelValue:[r.value,t.modelValue??a.value]:u.isUndefined(t.modelValue)?[r.value,a.value]:u.isArray(t.modelValue)?[t.min??0,t.modelValue[1]]:[t.min??0,t.modelValue]),h=(e,o)=>{if(!k.value)return 0;const{left:s,top:j,width:F,height:M}=k.value,y=t.direction==="horizontal"?F:M,I=y*t.step/(t.max-t.min);let p=t.direction==="horizontal"?e-s:j+M-o;p<0&&(p=0),p>y&&(p=y);const U=Math.round(p/I);return V.plus(t.min,V.times(U,t.step))},E=([e,o])=>(e>o&&([e,o]=[o,e]),t.direction==="vertical"?{bottom:m.getOffsetPercent(e,[t.min,t.max]),top:m.getOffsetPercent(t.max+t.min-o,[t.min,t.max])}:{left:m.getOffsetPercent(e,[t.min,t.max]),right:m.getOffsetPercent(t.max+t.min-o,[t.min,t.max])}),B=n.computed(()=>Object.keys(t.marks||{}).map(e=>{var s;const o=Number(e);return{key:o,content:(s=t.marks)==null?void 0:s[o],isActive:o>=l.value[0]&&o<=l.value[1]}})),b=e=>m.getPositionStyle(m.getOffsetPercent(e,[t.min,t.max]),t.direction),v=()=>{t.range?(f("update:modelValue",[r.value,a.value]),f("change",[r.value,a.value])):(f("update:modelValue",a.value),f("change",a.value))},O=e=>{if(g.value)return;const{clientX:o,clientY:s}=e;d.value&&(k.value=d.value.getBoundingClientRect()),a.value=h(o,s),v()},_=()=>{C.value=!0,d.value&&(k.value=d.value.getBoundingClientRect())},A=(e,o)=>{r.value=h(e,o),v()},q=()=>{C.value=!1},R=(e,o)=>{a.value=h(e,o),v()},D=e=>{e=e??t.min,r.value=e,v()},L=e=>{e=e??t.min,a.value=e,v()};return n.watch(()=>t.modelValue,e=>{u.isArray(e)?(r.value=e[0]??t.min??0,a.value=e[1]??t.min??0):a.value=e??t.min??0}),(e,o)=>(n.openBlock(),n.createElementBlock("div",{class:n.normalizeClass(P.value)},[n.createElementVNode("div",{ref_key:"trackRef",ref:d,class:n.normalizeClass(T.value),onClick:O},[n.createElementVNode("div",{class:n.normalizeClass(n.unref(i).e("bar")),style:n.normalizeStyle(E(l.value))},null,6),e.showTicks?(n.openBlock(),n.createBlock(Y.default,{key:0,value:l.value,step:e.step,min:e.min,max:e.max,direction:e.direction},null,8,["value","step","min","max","direction"])):n.createCommentVNode("",!0),e.marks?(n.openBlock(),n.createBlock($.default,{key:1,dots:B.value,min:e.min,max:e.max,direction:e.direction},null,8,["dots","min","max","direction"])):n.createCommentVNode("",!0),e.marks?(n.openBlock(),n.createBlock(G.default,{key:2,marks:B.value,min:e.min,max:e.max,direction:e.direction},null,8,["marks","min","max","direction"])):n.createCommentVNode("",!0),e.range?(n.openBlock(),n.createBlock(z.default,{key:3,style:n.normalizeStyle(b(l.value[0])),value:l.value[0],min:e.min,max:e.max,disabled:n.unref(g),direction:e.direction,"format-tooltip":e.formatTooltip,"show-tooltip":e.showTooltip,onMovestart:_,onMoving:A,onMoveend:q},null,8,["style","value","min","max","disabled","direction","format-tooltip","show-tooltip"])):n.createCommentVNode("",!0),n.createVNode(z.default,{style:n.normalizeStyle(b(l.value[1])),value:l.value[1],min:e.min,max:e.max,direction:e.direction,disabled:n.unref(g),"format-tooltip":e.formatTooltip,"show-tooltip":e.showTooltip,onMovestart:_,onMoving:R,onMoveend:q},null,8,["style","value","min","max","direction","disabled","format-tooltip","show-tooltip"])],2),e.showInput?(n.openBlock(),n.createBlock(H.default,{key:0,"model-value":l.value,size:e.size,min:e.min,max:e.max,step:e.step,range:e.range,disabled:e.disabled,onStartChange:D,onEndChange:L},null,8,["model-value","size","min","max","step","range","disabled"])):n.createCommentVNode("",!0)],2))}});exports.default=Q;
