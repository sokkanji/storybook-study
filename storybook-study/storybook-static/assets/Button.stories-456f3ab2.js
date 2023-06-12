import{j as q}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{p as e}from"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const s=({primary:k,backgroundColor:n,size:h,label:v,...S})=>{const z=k?"storybook-button--primary":"storybook-button--secondary";return q("button",{type:"button",className:["storybook-button",`storybook-button--${h}`,z].join(" "),style:n&&{backgroundColor:n},...S,children:v})};s.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func};s.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}};const V={title:"Wanted/Button",component:s,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},r={args:{primary:!0,label:"Button"}},o={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,g,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,f,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const j=["Primary","Secondary","Large","Small"];export{a as Large,r as Primary,o as Secondary,t as Small,j as __namedExportsOrder,V as default};
//# sourceMappingURL=Button.stories-456f3ab2.js.map
