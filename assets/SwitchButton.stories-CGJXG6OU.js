import{e as n}from"./iframe-Cb-HJWtn.js";import{S as s}from"./AlternativeField-GAF1F_lH.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,i={title:"Atoms/Buttons/SwitchButton",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},focused:{control:"boolean"},color:{control:{type:"select"},options:["light","dark"]},icon:{control:!1},onClick:{action:"clicked"},onMouseDown:{action:"mouse down"},onMouseUp:{action:"mouse up"},onMouseLeave:{action:"mouse leave"},onTouchStart:{action:"touch start"},onTouchEnd:{action:"touch end"}},args:{onClick:o(),onMouseDown:o(),onMouseUp:o(),onMouseLeave:o(),onTouchStart:o(),onTouchEnd:o()}},e={args:{icon:"☀️"}},r={args:{icon:"🌙",selected:!0}},t={args:{icon:"🚫",disabled:!0}},a={args:{icon:"💡",color:"dark"},decorators:[c=>n.createElement("div",{style:{backgroundColor:"black"}},n.createElement(c))]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "☀️"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "🌙",
    selected: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "🚫",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "💡",
    color: "dark"
  },
  decorators: [Story => React.createElement("div", {
    style: {
      backgroundColor: "black"
    }
  }, React.createElement(Story))]
}`,...a.parameters?.docs?.source}}};const m=["Default","Selected","Disabled","Dark"];export{a as Dark,e as Default,t as Disabled,r as Selected,m as __namedExportsOrder,i as default};
