import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{L as p,n as d,o as L,p as m,q as u,r as A,s as b,t as g,u as _,v as f,w as R,x as E,y as c}from"./AlternativeField-2ypbVuJS.js";import"./iframe-BbYXPg0S.js";const h={title:"ContentDisplay/Label",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"El texto a mostrar en la etiqueta."},iconLeft:{control:!1,description:"Un icono para mostrar a la izquierda del texto."},iconRight:{control:!1,description:"Un icono para mostrar a la derecha del texto."},uppercase:{control:"boolean",description:"Define si el texto de la etiqueta debe estar en mayúsculas."},color:{control:{type:"select"},options:[R,E],description:"El esquema de color de la etiqueta (claro u oscuro)."},variant:{control:{type:"select"},options:[p,d,L,m,u,A,b,g,_,f],description:"La variante de color de la etiqueta."}}},O=[{label:"Coconut",variant:p},{label:"Blackberry",variant:d},{label:"Cherry",variant:L},{label:"Apricot",variant:m},{label:"Kiwi",variant:u},{label:"Mint",variant:A},{label:"Water",variant:b},{label:"Blueberry",variant:g},{label:"Grape",variant:_},{label:"Watermelon",variant:f}],t={args:{label:"Etiqueta por defecto"}},n={args:{label:"Etiqueta con icono izquierdo",iconLeft:a.jsx("span",{role:"img","aria-label":"emoji de casa",children:"🏠"})}},l={args:{label:"Etiqueta con icono derecho",iconRight:a.jsx("span",{role:"img","aria-label":"emoji de estrella",children:"⭐"})}},r=s=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:O.map(({label:i,variant:e})=>a.jsx(c,{...s,label:i,variant:e},e))}),o=s=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:O.map(({label:i,variant:e})=>a.jsx(c,{...s,label:i,variant:e,color:E},e))});r.__docgenInfo={description:"",methods:[],displayName:"AllVariantsOfLigthMode"};o.__docgenInfo={description:"",methods:[],displayName:"AllVariantsOfDarkMode"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta por defecto"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta con icono izquierdo",
    iconLeft: <span role="img" aria-label="emoji de casa">
        🏠
      </span>
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Etiqueta con icono derecho",
    iconRight: <span role="img" aria-label="emoji de estrella">
        ⭐
      </span>
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "10px"
}}>
    {ALL_VARIANTS.map(({
    label,
    variant
  }) => <Label key={variant} {...args} label={label} variant={variant as any} />)}
  </div>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "10px"
}}>
    {ALL_VARIANTS.map(({
    label,
    variant
  }) => <Label key={variant} {...args} label={label} variant={variant as any} color={LABEL_DARK} />)}
  </div>`,...o.parameters?.docs?.source}}};const B=["Default","WithLeftIcon","WithRightIcon","AllVariantsOfLigthMode","AllVariantsOfDarkMode"];export{o as AllVariantsOfDarkMode,r as AllVariantsOfLigthMode,t as Default,n as WithLeftIcon,l as WithRightIcon,B as __namedExportsOrder,h as default};
