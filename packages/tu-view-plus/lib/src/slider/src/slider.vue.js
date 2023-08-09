"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),z=require("@tu-view-plus/hooks"),y=require("@tu-view-plus/utils"),B=require("./slider.js");require("../../form/index.js");const m=require("number-precision"),N=require("./ticks.vue.js");require("../style/slider.css");const P=require("../../form/src/hooks/use-form-props.js"),R=e.defineComponent({name:"TuSlider"}),S=e.defineComponent({...R,props:B.sliderProps,setup(p){const t=p,r=z.useNamespace("slider"),d=P.useFormDisabled(),i=e.ref(null),o=e.ref(),a=t.modelValue?t.modelValue:t.defaultValue,v=e.ref(y.isArray(a)?a[1]:a),_=e.computed(()=>({[r.b()]:!0,[r.m("vertical")]:t.direction==="vertical",[r.m(t.size)]:t.size,[r.is("with-marks")]:!!t.marks})),k=e.computed(()=>({[r.e("track")]:!0,[r.m("vertical")]:t.direction==="vertical",[r.is("disabled")]:d.value})),h=(n,l)=>{if(!o.value)return 0;const{left:c,top:g,width:q,height:f}=o.value,u=t.direction==="horizontal"?q:f,V=u*t.step/(t.max-t.min);let s=t.direction==="horizontal"?n-c:g+f-l;s<0&&(s=0),s>u&&(s=u);const b=Math.round(s/V);return m.plus(t.min,m.times(b,t.step))},C=n=>{if(d.value)return;const{clientX:l,clientY:c}=n;i.value&&(o.value=i.value.getBoundingClientRect()),v.value=h(l,c)};return(n,l)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(_))},[e.createElementVNode("div",{ref_key:"trackRef",ref:i,class:e.normalizeClass(e.unref(k)),onClick:C},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(r).e("bar"))},null,2),e.createVNode(N.default)],2)],2))}});exports.default=S;
