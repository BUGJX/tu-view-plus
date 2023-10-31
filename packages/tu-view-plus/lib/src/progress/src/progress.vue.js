"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),q=require("../../icon/index.js"),M=require("./progress.js"),h=require("@tu-view-plus/hooks"),k=require("@tu-view-plus/utils"),u=require("@tu-view-plus/icons-vue");require("../style/progress.css");const _=["aria-valuenow"],O=["id"],F=["stop-color"],A=["stop-color"],L=["d","stroke","stroke-width"],j=["d","stroke","stroke-width","stroke-linecap"],G={key:0},R=e.defineComponent({name:"TuProgress"}),U=e.defineComponent({...R,props:M.progressProps,setup(B){const f={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},v=e.computed(()=>Math.floor(Math.random()*1e4)),s=B,a=h.useNamespace("progress"),n=h.useNamespace("progress-bar"),l=h.useNamespace("progress-circle"),z=e.computed(()=>{const t={};return t["--stroke-width"]=`${2*s.strokeWidth}px`,t}),b=e.computed(()=>({[a.b()]:!0,[a.m(s.type)]:s.type,[a.m("without-text")]:!s.showText,[a.m("text-inside")]:s.textInside,[a.is(s.status)]:s.status})),E=e.computed(()=>({[n.e("outer")]:!0,[n.is("narrow")]:s.strokeWidth<8})),N=e.computed(()=>({[n.e("inner")]:!0,[n.em("inner","indeterminate")]:s.indeterminate,[n.em("inner","striped")]:s.striped,[n.em("inner","striped-flow")]:s.stripedFlow})),V=e.computed(()=>({[l.e("outer")]:!0,[l.is("narrow")]:s.strokeWidth<8})),P=e.computed(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:y(s.percentage)})),y=t=>{var m;const{color:r}=s;if(k.isFunction(r))return r(t);if(k.isString(r))return r;{const o=x(r);for(const c of o)if(c.percentage>t)return c.color;return(m=o[o.length-1])==null?void 0:m.color}},x=t=>{const r=100/t.length;return t.map((o,c)=>k.isString(o)?{color:o,percentage:(c+1)*r}:o).sort((o,c)=>o.percentage-c.percentage)},g=e.computed(()=>s.format(s.percentage)),d=e.computed(()=>(s.strokeWidth/s.width*100).toFixed(1)),C=e.computed(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),$=e.computed(()=>{const t=C.value,r=s.type==="dashboard";return`
          M 50 50
          m 0 ${r?"":"-"}${t}
          a ${t} ${t} 0 1 1 0 ${r?"-":""}${t*2}
          a ${t} ${t} 0 1 1 0 ${r?"":"-"}${t*2}
          `}),i=e.computed(()=>2*Math.PI*C.value),p=e.computed(()=>s.type==="dashboard"?.75:1),w=e.computed(()=>`${-1*i.value*(1-p.value)/2}px`),S=e.computed(()=>{let t;return s.color?t=y(s.percentage):t=f[s.status]||f.default,t}),D=e.computed(()=>({strokeDasharray:`${i.value*p.value}px, ${i.value}px`,strokeDashoffset:w.value})),T=e.computed(()=>({strokeDasharray:`${i.value*p.value*(s.percentage/100)}px, ${i.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),I=e.computed(()=>s.type==="line"?10+s.strokeWidth*.5:s.width*.111111),W=e.computed(()=>s.status==="warning"?u.WarningFilled:s.type==="line"?s.status==="success"?u.CircleCheck:u.CircleClose:s.status==="success"?u.Check:u.Close);return(t,r)=>(e.openBlock(),e.createElementBlock("div",{role:"progressbar",class:e.normalizeClass(b.value),"aria-valuenow":t.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[t.type==="line"?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(n).b())},[e.createElementVNode("div",{class:e.normalizeClass(E.value),style:e.normalizeStyle({height:`${t.strokeWidth}px`})},[e.createElementVNode("div",{class:e.normalizeClass(N.value),style:e.normalizeStyle(P.value)},[(t.showText||t.$slots.default)&&t.textInside?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(n).e("innerText"))},[e.renderSlot(t.$slots,"default",{percentage:t.percentage},()=>[e.createElementVNode("span",null,e.toDisplayString(g.value),1)])],2)):e.createCommentVNode("",!0)],6)],6)],2)):(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(l).b()),style:e.normalizeStyle({height:t.width+"px",width:t.width+"px"})},[t.type=="circle"?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(V.value),style:e.normalizeStyle(z.value)},null,6)):e.createCommentVNode("",!0),(e.openBlock(),e.createElementBlock("svg",{viewBox:" 0 0 100 100",class:e.normalizeClass(e.unref(l).e("inner"))},[e.createElementVNode("defs",null,[e.createElementVNode("radialGradient",{id:`gradient-${v.value}`,cx:"50%",cy:"50%",r:"60%",fx:"50%",fy:"50%"},[e.createElementVNode("stop",{offset:"30%","stop-color":S.value},null,8,F),e.createElementVNode("stop",{offset:"100%","stop-color":S.value},null,8,A)],8,O)]),e.createElementVNode("path",{class:e.normalizeClass(e.unref(l).m("track")),d:$.value,stroke:t.type=="dashboard"?"#c8d0e761":"","stroke-width":d.value,style:e.normalizeStyle(D.value),fill:"none"},null,14,L),e.createElementVNode("path",{class:e.normalizeClass(e.unref(l).m("path")),d:$.value,stroke:`url(#gradient-${v.value})`,"stroke-width":t.percentage?d.value:0,"stroke-linecap":t.strokeLinecap,style:e.normalizeStyle(T.value),fill:"none"},null,14,j)],2))],6)),(t.showText||t.$slots.default)&&!t.textInside?(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(e.unref(a).e("text")),style:e.normalizeStyle({fontSize:`${I.value}px`})},[e.renderSlot(t.$slots,"default",{percentage:t.percentage},()=>[t.status?(e.openBlock(),e.createBlock(e.unref(q.TuIcon),{key:1},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(W.value)))]),_:1})):(e.openBlock(),e.createElementBlock("span",G,e.toDisplayString(g.value),1))])],6)):e.createCommentVNode("",!0)],10,_))}});exports.default=U;
