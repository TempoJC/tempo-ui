import{R as d}from"./iframe-BbYXPg0S.js";import{V as r,W as m,X as L,Y as l,Z as A,_ as e,$ as p,a0 as u}from"./AlternativeField-2ypbVuJS.js";import"./jsx-runtime-D_zvdyIk.js";const _={title:"Feedback/Loader",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:[e,p],description:"Loader kind."},size:{control:{type:"select"},options:[L,l,A],description:"Loader size, only applies to the `circular` kind."},color:{control:{type:"select"},options:[r,m],description:"Sets the color scheme of the component."},className:{control:"text",description:"Additional CSS classes."},testId:{control:"text",description:"Data-testid attribute for testing."}}},a={args:{kind:e,size:L,color:r}},s={args:{kind:e,size:l,color:r}},o={args:{kind:e,size:A,color:r}},t={args:{kind:e,size:l,color:m}},n={args:{kind:p,color:r},decorators:[R=>d.createElement("div",{style:{width:"400px",padding:"10px"}},d.createElement(R))]},c={args:{kind:p,color:m},decorators:[R=>d.createElement("div",{style:{width:"400px",padding:"10px"}},d.createElement(R))]},i={args:{kind:e,size:l,color:r,className:"my-custom-loader-class"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_SMALL,
    color: LOADER_LIGHT
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_MEDIUM,
    color: LOADER_LIGHT
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_LARGE,
    color: LOADER_LIGHT
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_MEDIUM,
    // Using medium as a default size for dark
    color: LOADER_DARK
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    kind: LOADER_BAR,
    color: LOADER_LIGHT
  },
  decorators: [Story => React.createElement("div", {
    style: {
      width: "400px",
      padding: "10px"
    }
  }, React.createElement(Story))]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kind: LOADER_BAR,
    color: LOADER_DARK
  },
  decorators: [Story => React.createElement("div", {
    style: {
      width: "400px",
      padding: "10px"
    }
  }, React.createElement(Story))]
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_MEDIUM,
    color: LOADER_LIGHT,
    className: "my-custom-loader-class" // Add a custom class for demonstration
  }
}`,...i.parameters?.docs?.source}}};const g=["CircularSmall","CircularMedium","CircularLarge","CircularDark","Bar","BarDark","WithCustomClass"];export{n as Bar,c as BarDark,t as CircularDark,o as CircularLarge,s as CircularMedium,a as CircularSmall,i as WithCustomClass,g as __namedExportsOrder,_ as default};
