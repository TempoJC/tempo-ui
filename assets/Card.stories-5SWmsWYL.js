import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as p}from"./iframe-D4mEG_fw.js";import{i as s,H as a,j as n,k as d,l as c,F as i}from"./AlternativeField-yz5OIBcR.js";const u={title:"ContentDisplay/Card",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["default","outlined"]},color:{control:{type:"select"},options:["light","dark"]},children:{control:"text"}}},r={args:{children:e.jsxs(s,{children:[e.jsxs(a,{children:[e.jsx(n,{src:"https://picsum.photos/id/237/200/300"}),e.jsx(d,{children:"Lorem ipsum dolor sit amet."})]}),e.jsx(c,{src:"https://picsum.photos/id/1084/536/354"}),e.jsx(i,{children:"Footer content"})]})}},t={args:{kind:"outlined",children:e.jsxs(s,{children:[e.jsxs(a,{children:[e.jsx(n,{src:"https://picsum.photos/id/237/200/300"}),e.jsx(d,{children:"Lorem ipsum dolor sit amet."})]}),e.jsx(c,{src:"https://picsum.photos/id/1084/536/354"}),e.jsx(i,{children:"Footer content"})]})}},o={args:{color:"dark",children:e.jsxs(s,{children:[e.jsxs(a,{children:[e.jsx(n,{src:"https://picsum.photos/id/237/200/300"}),e.jsx(d,{children:"Lorem ipsum dolor sit amet."})]}),e.jsx(c,{src:"https://picsum.photos/id/1084/536/354"}),e.jsx(i,{children:"Footer content"})]})},decorators:[m=>p.createElement("div",{style:{backgroundColor:"black"}},p.createElement(m))]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Card>
        <CardHeader>
          <CardHeaderImage src="https://picsum.photos/id/237/200/300" />
          <CardHeaderContent>Lorem ipsum dolor sit amet.</CardHeaderContent>
        </CardHeader>
        <CardContentImage src="https://picsum.photos/id/1084/536/354" />
        <CardFooter>Footer content</CardFooter>
      </Card>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "outlined",
    children: <Card>
        <CardHeader>
          <CardHeaderImage src="https://picsum.photos/id/237/200/300" />
          <CardHeaderContent>Lorem ipsum dolor sit amet.</CardHeaderContent>
        </CardHeader>
        <CardContentImage src="https://picsum.photos/id/1084/536/354" />
        <CardFooter>Footer content</CardFooter>
      </Card>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark",
    children: <Card>
        <CardHeader>
          <CardHeaderImage src="https://picsum.photos/id/237/200/300" />
          <CardHeaderContent>Lorem ipsum dolor sit amet.</CardHeaderContent>
        </CardHeader>
        <CardContentImage src="https://picsum.photos/id/1084/536/354" />
        <CardFooter>Footer content</CardFooter>
      </Card>
  },
  decorators: [Story => React.createElement("div", {
    style: {
      backgroundColor: "black"
    }
  }, React.createElement(Story))]
}`,...o.parameters?.docs?.source}}};const x=["Default","Outlined","Dark"];export{o as Dark,r as Default,t as Outlined,x as __namedExportsOrder,u as default};
