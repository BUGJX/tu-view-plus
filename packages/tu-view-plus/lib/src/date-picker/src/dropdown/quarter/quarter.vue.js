"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("vue"),l=require("./quarter.js"),f=require("@tu-view-plus/hooks"),n=require("@tu-view-plus/utils"),h=require("../header.vue.js"),q=require("../body.vue.js"),b=a.defineComponent({name:"TuQuarter"}),k=a.defineComponent({...b,props:l.quarterProps,emits:l.quarterEmits,setup(u,{emit:d}){const i=u,o=d,s=f.useNamespace("picker"),{headerValue:t}=a.toRefs(i),c=a.computed(()=>t.value.format("YYYY")),m=a.computed(()=>{const e=t.value.year();return[[1,2,3,4].map(r=>({label:`Q${r}`,value:n.dayjs(`${e}-${n.padStart((r-1)*3+1,2,"0")}-01`)}))]}),p=(e,r)=>e.isSame(r,"month")||e.isSame(r,"year")&&Math.floor(e.month()/3)===Math.floor(r.month()/3),v=e=>{o("select",e.value)},_=e=>{o("cell-mouse-enter",e.value)};return(e,r)=>(a.openBlock(),a.createElementBlock("div",{class:a.normalizeClass(a.unref(s).e("dropdown-quarter"))},[a.createElementVNode("div",{class:a.normalizeClass(a.unref(s).e("dropdown-quarter-inner"))},[a.createVNode(h.default,a.mergeProps({...e.headerOperations,icons:e.headerIcons},{mode:"quarter",title:c.value,value:a.unref(t),"on-label-click":e.onHeaderLabelClick}),null,16,["title","value","on-label-click"]),a.createVNode(q.default,{mode:"quarter",rows:m.value,value:e.value,"range-values":e.rangeValues,"disabled-date":e.disabledDate,"is-same-time":p,"date-render":e.dateRender,onCellClick:v,onCellMouseEnter:_},null,8,["rows","value","range-values","disabled-date","date-render"])],2)],2))}});exports.default=k;