"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("@tu-view-plus/utils"),n=o.buildProps({loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}}),r={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(o.isNumber)};exports.dropdownPanelEmits=r;exports.dropdownPanelProps=n;
