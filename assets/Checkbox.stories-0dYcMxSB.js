import{C as c}from"./AlternativeField-zKiPZJqj.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BSQxJN51.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,m={title:"Atoms/Checkbox",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:{type:"select"},options:["light","dark"]},disabled:{control:"boolean"},readOnly:{control:"boolean"},indeterminate:{control:"boolean"},value:{control:"boolean"},onChange:{action:"changed"},onClick:{action:"clicked"}},args:{onChange:t(),onClick:t()}},e={args:{label:"Default Checkbox",value:!1}},a={args:{label:"Checked Checkbox",value:!0}},r={args:{label:"Indeterminate Checkbox",indeterminate:!0}},o={args:{label:"Disabled Checkbox",disabled:!0}},s={args:{label:"Read Only Checkbox",readOnly:!0}},n={args:{label:"Dark Checkbox",color:"dark"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default Checkbox",
    value: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checked Checkbox",
    value: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checkbox",
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Read Only Checkbox",
    readOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dark Checkbox",
    color: "dark"
  }
}`,...n.parameters?.docs?.source}}};const b=["Default","Checked","Indeterminate","Disabled","ReadOnly","Dark"];export{a as Checked,n as Dark,e as Default,o as Disabled,r as Indeterminate,s as ReadOnly,b as __namedExportsOrder,m as default};
