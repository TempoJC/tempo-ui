import{I as k}from"./AlternativeField-2ypbVuJS.js";import"./jsx-runtime-D_zvdyIk.js";import{R as o}from"./iframe-BbYXPg0S.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,C={title:"Atoms/Icon",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{group:{control:"text",description:"The icon group (e.g., 'actions', 'navigation').",defaultValue:"actions"},name:{control:"text",description:"The specific icon name (e.g., 'add', 'arrow-right').",defaultValue:"add"},className:{control:"text",description:"Additional CSS class to be applied to the component."},testId:{control:"text",description:"Sets the `data-testid` attribute."},errorFallback:{control:!1,description:"Fallback component to render on error."},onClick:{action:"clicked"},width:{control:"number"},height:{control:"number"},viewBox:{control:"text"}},args:{onClick:x()}},e=(b,I)=>o.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center"}},I.map(p=>o.createElement("div",{key:p,style:{textAlign:"center",width:"100px",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"}},o.createElement(k,{group:b,name:p,width:24,height:24}),o.createElement("p",{style:{fontSize:"12px",margin:0,wordBreak:"break-word"}},p)))),m=["add-circle-filled","add-circle-outlined","add-square-filled","add-square-outlined","add","align-center","align-left","align-right","align-text-bottom","align-text-middle","align-text-top","boolean-exclude","boolean-intersect","boolean-subtract","boolean-union","bottom-filled","bottom-outlined","check-circle-filled","check-circle-outlined","check-square-filled","check-square-outlined","check","clear-filled","clear-outlined","close-circle-filled","close-circle-outlined","close-large","close-small","close-square-filled","close-square-outlined","cloud-download-filled","cloud-download-outlined","cloud-upload-filled","cloud-upload-outlined","collapse-all-filled","collapse-all-outlined","collapse-one-filled","collapse-one-outlined","collapse","compare-to-excel","copy-sales","copy","delete-filled","delete-outlined","edit-filled","edit-outlined","element-align-bottom-filled","element-align-bottom-outlined","element-align-horizontal-filled","element-align-horizontal-outlined","element-align-left-filled","element-align-left-outlined","element-align-right-filled","element-align-right-outlined","element-align-top-filled","element-align-top-outlined","element-align-vertical-filled","element-align-vertical-outlined","excel-download","excel-upload","expand-all-filled","expand-all-outlined","expand-horizontal","expand-one-filled","expand-one-outlined","expand-vertical","expand","export","filter-filled","filter-outlined","flip-outlined","forward","full-screen-enter","full-screen-exit","horizontal-text","import-products-outlined","import","left-filled","left-outlined","lock-filled","lock-outlined","log-in","log-out","lowercase-outlined","mass-edit-filled","mass-edit-outlined","move","numbers","paste-outlined","pdf-download","refresh","reset","restart","right-filled","right-outlined","save","search","send-filled","send-outlined","share-filled","share-outlined","sort-ascending","sort-descending","sort","subtract-circle-filled","subtract-circle-outlined","subtract-square-filled","subtract-square-outlined","subtract","symbols","top-filled","top-outlined","transfer-filled","transfer-outlined","unlock-filled","unlock-outlined","upper-and-lower-case-outlined","uppercase-outlined","vertical-text","zoom-in","zoom-out"],g=["help-filled","help-outlined","information-filled","information-outlined","warning-alt-filled","warning-alt-outlined","warning-filled","warning-outlined"],f=["arrow-circle-left-filled","arrow-circle-left-outlined","arrow-circle-right-filled","arrow-circle-right-outlined","arrow-circle-up-filled","arrow-circle-up-outlined","arrow-down","arrow-left","arrow-right","arrow-up","arrown-circle-down-filled","arrown-circle-down-outlined","chevron-down","chevron-left","chevron-right","chevron-up","double-chevron-left","double-chevron-right","link-arrow","long-arrow-down","long-arrow-left","long-arrow-right","long-arrow-up","long-arrown-right"],w=["pause-circle-filled","pause-circle-outlined","pause-filled","pause-outlined","play-circle-filled","play-circle-outlined","play-filled","play-outlined","skip-backward-circle-filled","skip-backward-circle-outlined","skip-backward-filled","skip-backward-outlined","skip-forward-circle-filled","skip-forward-circle-outlined","skip-forward-filled","skip-forward-outlined","stop-circle-filled","stop-circle-outlined","stop-filled","stop-outlined","volume-down-filled","volume-down-outlined","volume-filled","volume-mute-filled","volume-mute-outlined","volume-outlined","volume-up-filled","volume-up-outlined"],h=["call-me-back-filled","call-me-back-outlined","facebook-filled","facebook-outlined","google-filled","google-outlined","instagram-filled","instagram-outlined","pinterest-filled","pinterest-outlined","rrss-filled","rrss-outlined","tiktok-filled"],l={args:{group:"actions",name:m[0]},render:()=>e("actions",m)},r={args:{group:"alerts",name:g[0]},render:()=>e("alerts",g)},n={args:{group:"arrows",name:f[0]},render:()=>e("arrows",f)},t={args:{group:"controls",name:w[0]},render:()=>e("controls",w)},a={args:{group:"social-media",name:h[0]},render:()=>e("social-media",h)},i={args:{group:"actions",name:"close-large",onClick:x()}},s={args:{group:"actions",name:"cloud-download-outlined",width:32,height:32,className:"my-larger-icon"}},c={args:{group:"actions",name:"copy-sales",className:"text-red-500"}},d={args:{group:"actions",name:"close-small",testId:"my-component"}},u={args:{group:"non-existent-group",name:"non-existent-icon"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    group: "actions",
    name: actionsIcons[0]
  },
  render: () => renderIcons("actions", actionsIcons)
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    group: "alerts",
    name: alertsIcons[0]
  },
  render: () => renderIcons("alerts", alertsIcons)
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    group: "arrows",
    name: arrowsIcons[0]
  },
  render: () => renderIcons("arrows", arrowsIcons)
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    group: "controls",
    name: controlsIcons[0]
  },
  render: () => renderIcons("controls", controlsIcons)
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    group: "social-media",
    name: socialMediaIcons[0]
  },
  render: () => renderIcons("social-media", socialMediaIcons)
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    group: "actions",
    name: "close-large",
    onClick: fn()
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    group: "actions",
    name: "cloud-download-outlined",
    width: 32,
    height: 32,
    className: "my-larger-icon"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    group: "actions",
    name: "copy-sales",
    className: "text-red-500"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    group: "actions",
    name: "close-small",
    testId: "my-component"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    group: "non-existent-group",
    name: "non-existent-icon"
  }
}`,...u.parameters?.docs?.source}}};const z=["Actions","Alerts","Arrows","Controls","SocialMedia","ClickableIcon","WithCustomSize","WithCustomClassName","WithTestId","ErrorState"];export{l as Actions,r as Alerts,n as Arrows,i as ClickableIcon,t as Controls,u as ErrorState,a as SocialMedia,c as WithCustomClassName,s as WithCustomSize,d as WithTestId,z as __namedExportsOrder,C as default};
