import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{T as o,z as s,E as n,G as i,J as c,K as d,M as p,N as m,O as u,P as b,Q as _,R as T,U as O}from"./AlternativeField-2ypbVuJS.js";import"./iframe-BbYXPg0S.js";const L={title:"ContentDisplay/Tag",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"El texto a mostrar en la etiqueta."},onRemoveButtonClick:{action:"onRemoveButtonClick",description:"Función que se llama cuando se hace clic en el botón de eliminar."},readOnly:{control:"boolean",description:"Si es `true`, el botón de eliminar no se mostrará. Por defecto es `true`.",defaultValue:{summary:!0}},color:{control:{type:"select"},options:[_,T],description:"El esquema de color de la etiqueta (claro u oscuro)."},variant:{control:{type:"select"},options:[o,s,n,i,c,d,p,m,u,b],description:"La variante de color de la etiqueta."}}},v=[{label:"Coconut",variant:o},{label:"Blackberry",variant:s},{label:"Cherry",variant:n},{label:"Apricot",variant:i},{label:"Kiwi",variant:c},{label:"Mint",variant:d},{label:"Water",variant:p},{label:"Blueberry",variant:m},{label:"Grape",variant:u},{label:"Watermelon",variant:b}],a={args:{label:"Etiqueta por defecto"}},r={args:{label:"Etiqueta eliminable",readOnly:!1}},e=R=>l.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"2px"},children:v.map(({label:A,variant:t})=>l.jsx(O,{...R,label:A,variant:t,readOnly:!1,onClick:()=>{console.log("click")}},t))});e.argTypes={label:{table:{disable:!0}},variant:{table:{disable:!0}},color:{table:{disable:!0}}};e.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta por defecto"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta eliminable",
    readOnly: false
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "row",
  gap: "2px"
}}>
    {ALL_VARIANTS.map(({
    label,
    variant
  }) => <Tag key={variant} {...args} label={label} variant={variant} readOnly={false} onClick={() => {
    console.log("click");
  }} />)}
  </div>`,...e.parameters?.docs?.source}}};const f=["Default","Removable","AllVariants"];export{e as AllVariants,a as Default,r as Removable,f as __namedExportsOrder,L as default};
