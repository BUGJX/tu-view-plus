"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),m=require("@tu-view-plus/hooks"),p=require("./slider-ticks.js"),c=require("./utils.js"),d=require("number-precision"),k=e.defineComponent({name:"TuSliderTicks"}),f=e.defineComponent({...k,props:p.sliderTicksProps,setup(l){const t=l,o=m.useNamespace("slider"),u=e.computed(()=>{const n=[],i=Math.floor((t.max-t.min)/t.step);for(let s=0;s<=i;s++){const r=d.plus(s*t.step,t.min);r<=t.min||r>=t.max||n.push({key:r,isActive:r>=t.value[0]&&r<=t.value[1]})}return n}),a=n=>c.getPositionStyle(c.getOffsetPercent(n,[t.min,t.max]),t.direction);return(n,i)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(o).e("ticks"))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,s=>(e.openBlock(),e.createElementBlock("div",{key:s.key,class:e.normalizeClass([e.unref(o).e("tick"),{[e.unref(o).is("active")]:s.isActive}]),style:e.normalizeStyle(a(s.key))},null,6))),128))],2))}});exports.default=f;
