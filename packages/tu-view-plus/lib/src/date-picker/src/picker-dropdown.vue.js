"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./picker-dropdown.js"),t=e.defineComponent({name:"PickerDropdown"}),n=e.defineComponent({...t,props:r.pickerDropdownProps,setup(c){return(o,p)=>(e.openBlock(),e.createElementBlock("div",null,[e.createTextVNode(" picker-dropdown "),e.renderSlot(o.$slots,"default")]))}});exports.default=n;