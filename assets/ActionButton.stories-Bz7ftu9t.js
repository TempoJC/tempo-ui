import"./iframe-jfSdAMG2.js";import{A as u}from"./AlternativeField-MQj48xBp.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,g={title:"Atoms/Buttons/ActionButton",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["standard","danger"]},color:{control:{type:"select"},options:["light","dark"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"},loading:{control:"boolean"},dropdown:{control:"boolean"},dropdownVisible:{control:"boolean"},label:{control:"text"},hideLabel:{control:"boolean"},iconStart:{control:!1},iconEnd:{control:!1},onClick:{action:"clicked"},onMouseDown:{action:"mouse down"},onMouseUp:{action:"mouse up"},onMouseLeave:{action:"mouse leave"},onTouchStart:{action:"touch start"},onTouchEnd:{action:"touch end"}},args:{onClick:o(),onMouseDown:o(),onMouseUp:o(),onMouseLeave:o(),onTouchStart:o(),onTouchEnd:o()}},r={args:{label:"Action Button",kind:"standard",color:"light"}},a={args:{label:"Danger Button",kind:"danger"}},e={args:{label:"Dark Button",color:"dark"}},n={args:{label:"Disabled Button",disabled:!0}},t={args:{label:"Loading Button",loading:!0}},s={args:{label:"Full Width Button",fullWidth:!0}},c={args:{label:"Icon Button",iconStart:"❤️"}},l={args:{iconStart:"❤️",title:"Icon only button"}},d={args:{label:"Dropdown Button",dropdown:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Action Button",
    kind: "standard",
    color: "light"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Danger Button",
    kind: "danger"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dark Button",
    color: "dark"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading Button",
    loading: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full Width Button",
    fullWidth: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Icon Button",
    iconStart: "❤️"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    iconStart: "❤️",
    title: "Icon only button"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown Button",
    dropdown: true
  }
}`,...d.parameters?.docs?.source}}};const b=["Default","Danger","Dark","Disabled","Loading","FullWidth","WithIcon","IconOnly","Dropdown"];export{a as Danger,e as Dark,r as Default,n as Disabled,d as Dropdown,s as FullWidth,l as IconOnly,t as Loading,c as WithIcon,b as __namedExportsOrder,g as default};
