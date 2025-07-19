import{e as p}from"./iframe-BWMqAxdt.js";import{B as g}from"./AlternativeField-DNkpWLaD.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,S={title:"Atoms/Buttons/Button",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["standard","primary","danger"]},color:{control:{type:"select"},options:["light","dark"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"},loading:{control:"boolean"},extra:{control:"boolean"},dropdown:{control:"boolean"},dropdownVisible:{control:"boolean"},label:{control:"text"},iconStart:{control:!1},iconEnd:{control:!1},onClick:{action:"clicked"},onMouseDown:{action:"mouse down"},onMouseUp:{action:"mouse up"},onMouseLeave:{action:"mouse leave"},onTouchStart:{action:"touch start"},onTouchEnd:{action:"touch end"}},args:{onClick:o(),onMouseDown:o(),onMouseUp:o(),onMouseLeave:o(),onTouchStart:o(),onTouchEnd:o()}},r={args:{label:"Default Button",kind:"standard",color:"light",type:"button"}},e={args:{label:"Primary Button",kind:"primary",color:"light"}},a={args:{label:"Danger Button",kind:"danger",color:"light"}},n={args:{label:"Dark Button",color:"dark"},decorators:[m=>p.createElement("div",{style:{backgroundColor:"black"}},p.createElement(m))]},t={args:{label:"Disabled Button",disabled:!0}},s={args:{label:"Loading Button",loading:!0}},l={args:{loading:!0,title:"Uploading..."}},c={args:{label:"Full Width Button",fullWidth:!0}},d={args:{label:"Extra Size Button",extra:!0}},u={args:{label:"Dropdown Button (Closed)",dropdown:!0,dropdownVisible:!1}},i={args:{label:"Dropdown Button (Open)",dropdown:!0,dropdownVisible:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default Button",
    kind: "standard",
    color: "light",
    type: "button"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Primary Button",
    kind: "primary",
    color: "light"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Danger Button",
    kind: "danger",
    color: "light"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dark Button",
    color: "dark"
  },
  decorators: [Story => React.createElement("div", {
    style: {
      backgroundColor: "black"
    }
  }, React.createElement(Story))]
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading Button",
    loading: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    title: "Uploading..."
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full Width Button",
    fullWidth: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Extra Size Button",
    extra: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown Button (Closed)",
    dropdown: true,
    dropdownVisible: false
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown Button (Open)",
    dropdown: true,
    dropdownVisible: true
  }
}`,...i.parameters?.docs?.source}}};const k=["Default","Primary","Danger","DarkColor","Disabled","Loading","LoadingNoLabel","FullWidth","ExtraSize","DropdownClosed","DropdownOpen"];export{a as Danger,n as DarkColor,r as Default,t as Disabled,u as DropdownClosed,i as DropdownOpen,d as ExtraSize,c as FullWidth,s as Loading,l as LoadingNoLabel,e as Primary,k as __namedExportsOrder,S as default};
