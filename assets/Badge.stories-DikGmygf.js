import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as p}from"./AlternativeField-MQj48xBp.js";import"./iframe-jfSdAMG2.js";const d="coconut",m="blackberry",g="cherry",x="apricot",u="kiwi",y="mint",A="water",_="blueberry",O="grape",f="watermelon",B={title:"ContentDisplay/Badge",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text"},size:{control:{type:"select"},options:["small","large"]},color:{control:{type:"select"},options:["light","dark"]},kind:{control:{type:"select"},options:["circular","autolayout"]},variant:{control:{type:"select"},options:[d,m,g,x,u,y,A,_,O,f]}}},n={args:{text:"1"}},s={args:{text:"Texto de prueba",kind:"autolayout"}},o={args:{text:"1",size:"small"}},l={args:{text:"1",color:"dark"}},v=[{label:"Coconut",variant:d},{label:"Blackberry",variant:m},{label:"Cherry",variant:g},{label:"Apricot",variant:x},{label:"Kiwi",variant:u},{label:"Mint",variant:y},{label:"Water",variant:A},{label:"Blueberry",variant:_},{label:"Grape",variant:O},{label:"Watermelon",variant:f}],a=i=>e.jsx("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:v.map(({label:c,variant:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},children:[e.jsx(p,{...i,variant:t}),e.jsx("span",{style:{fontSize:"12px"},children:c})]},t))});a.args={text:"1"};const r=i=>e.jsx("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:v.map(({label:c,variant:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},children:[e.jsx(p,{...i,variant:t,color:"dark"}),e.jsx("span",{style:{fontSize:"12px"},children:c})]},t))});r.args={text:"2"};a.__docgenInfo={description:"",methods:[],displayName:"AllColorVariantsOfLigthMode"};r.__docgenInfo={description:"",methods:[],displayName:"AllColorVariantsOfDarkMode"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "1"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Texto de prueba",
    kind: "autolayout"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "1",
    size: "small"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: "1",
    color: "dark"
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  gap: "10px",
  alignItems: "center"
}}>
    {ALL_BADGE_VARIANTS.map(({
    label,
    variant
  }) => <div key={variant} style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px"
  }}>
        <Badge {...args} variant={variant as any} />
        <span style={{
      fontSize: "12px"
    }}>{label}</span>
      </div>)}
  </div>`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  gap: "10px",
  alignItems: "center"
}}>
    {ALL_BADGE_VARIANTS.map(({
    label,
    variant
  }) => <div key={variant} style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px"
  }}>
        <Badge {...args} variant={variant as any} color="dark" />
        <span style={{
      fontSize: "12px"
    }}>{label}</span>
      </div>)}
  </div>`,...r.parameters?.docs?.source}}};const E=["Default","Autolayout","Small","Dark","AllColorVariantsOfLigthMode","AllColorVariantsOfDarkMode"];export{r as AllColorVariantsOfDarkMode,a as AllColorVariantsOfLigthMode,s as Autolayout,l as Dark,n as Default,o as Small,E as __namedExportsOrder,B as default};
