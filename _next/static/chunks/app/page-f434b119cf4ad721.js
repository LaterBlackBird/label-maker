(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2229:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var i=a(469),s=a.n(i),n=a(1524),l=a.n(n)()(s());l.push([e.id,`.label-container {
  display: flex;
  justify-content: space-between;
}

.left-column,
.right-column {
  width: 75%;
  display: flex;
  flex-direction: column;
}

.right-column {
  width: 25%;
}

.label-container>div {
  box-sizing: border-box;
}

.label-container * {
  color: black;
}

.label-container .right-column>div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 40px;
  margin: 0 0 -.25rem 2rem;
}

.modelNumber {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 20px;
  margin: 0 0 .25rem 7.5rem;
  font-weight: bold;
  font-size: 12px;
}

.blueBackground {
  background-color: var(--primary-color);
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 130px;
}

.blueBackground .blueBackgroundOutline {
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  border-left: none;
  margin: 2% 2% 2% 0;
  height: 90%;
  color: white;
}

.blueBackground .blueBackgroundOutline * {
  color: white;
}

.productDetails {
  display: flex;
  justify-content: space-between;
  margin-left: 2.5rem;
}

.productDetails .left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.productDetails .right-column {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25%;
  height: 115px;
  margin-right: 5px;
}

.title {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: auto;
  font-weight: bold;
}

.subtitle {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: auto;
}

.details {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-self: center;
  align-self: center;
  width: 100%;
  height: auto;
}

.leadFree {
  justify-self: center;
  align-self: center;
  width: 100%;
  font-size: 13px;
}

.disclaimers {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2.5rem;
  height: 120px;
  width: 86%;
}

.disclaimers>div {
  margin: 5px 0 5px 0;
}

.leadFreeDisclaimer {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: auto;
  font-size: 8.5px;
}

.prop65Heading {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: auto;
  font-weight: bold;
  font-size: 10px;
}

.prop65Warning {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: auto;
  font-size: 8.5px;
}

.address {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: auto;
  font-weight: bold;
  font-size: 8.5px;
}

.certs {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 30px;
}

.quantity {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 30px;
    font-weight: bold;
}

.partPicture {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 115px;
}

.origin {
  justify-self: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  height: 25px;
  }
  
  .originEnglish {
    font-size: 10px;
  }
  
  .originSpanish {
    font-size: 8.5px;
  }
  
  .barcode {
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 115px;
}

.partNumber {
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 20px;
    font-size: 11px;
}`,""]);let r=l},5812:(e,t,a)=>{Promise.resolve().then(a.bind(a,9965))},9965:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var i=a(5155),s=a(2115),n=a(5565),l=a(6171),r=a.n(l);a(7181);var o=a(3370),d=a.n(o),c=a(8633),u=a.n(c),m=a(4141),h=a.n(m),g=a(1234),x=a.n(g),f=a(8182),p=a.n(f),b=a(7205),j=a.n(b),y=a(2229),w={};w.styleTagTransform=j(),w.setAttributes=x(),w.insert=h().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=p(),d()(y.A,w),y.A&&y.A.locals&&y.A.locals;let N=e=>{let{size:t,model:a,title:l,subtitle:o,details:d,quantity:c,origin:u,partNumber:m}=e,[h,g]=(0,s.useState)("15px"),x=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=d.split("\n").length;g("".concat(15-(e-1)*1.5,"px"))},[d]),(0,s.useEffect)(()=>{x.current&&r()(x.current,m,{format:"CODE128",displayValue:!0,fontSize:14})},[m]);let f=u.toUpperCase(),p="Hecho en ".concat(u.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" "));return(0,i.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg p-4",style:{width:t.width,height:t.height,paddingLeft:0},children:(0,i.jsxs)("div",{className:"label-container",style:{color:"black"},children:[(0,i.jsxs)("div",{className:"left-column",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)(n.default,{src:"/logo.png",alt:"Company Logo",width:400,height:400,style:{width:"75%",height:"auto"}})}),(0,i.jsxs)("div",{className:"modelNumber",children:["MODEL # ",a]}),(0,i.jsx)("div",{className:"blueBackground",children:(0,i.jsx)("div",{className:"blueBackgroundOutline",children:(0,i.jsxs)("div",{className:"productDetails",children:[(0,i.jsxs)("div",{className:"left-column",children:[(0,i.jsx)("div",{className:"title",children:l}),(0,i.jsx)("div",{className:"subtitle",children:o}),(0,i.jsx)("div",{className:"details",style:{fontSize:h},children:(0,i.jsx)("ul",{className:"list-disc pl-5",children:d.split("\n").map((e,t)=>(0,i.jsx)("li",{children:e},t))})})]}),(0,i.jsx)("div",{className:"right-column",children:(0,i.jsx)("div",{className:"leadFree",children:"LEAD-FREE"})})]})})}),(0,i.jsxs)("div",{className:"disclaimers",children:[(0,i.jsx)("div",{className:"leadFreeDisclaimer",children:"* Lead-free refers to the wetted surface of pipe, fittings and fixtures in potable water systems that have a weighted average lead content ≤ 0.25% per the Safe Drinking Water Act (Sec. 1417) amended 1-4-2011 and other equivalent state regulations."}),(0,i.jsxs)("div",{className:"prop65Block",children:[(0,i.jsx)("div",{className:"prop65Heading",children:(0,i.jsx)("span",{className:"text-red-600",children:"FOR CALIFORNIA CONSUMERS ⚠️ WARNING:"})}),(0,i.jsxs)("div",{className:"prop65Warning",children:["This product can expose you to chemicals including lead compounds, which are known to the State of California to cause cancer and birth defects or other reproductive harm."," ",(0,i.jsx)("strong",{children:"For more information go to www.P65Warnings.ca.go"})]})]}),(0,i.jsx)("div",{className:"address",children:"HYDRAPRO, Inc. 7400 Sunbelt Drive, SE • Austell, GA 30168"})]})]}),(0,i.jsxs)("div",{className:"right-column",children:[(0,i.jsx)("div",{className:"certs",children:"✔️"}),(0,i.jsx)("div",{className:"quantity",children:(0,i.jsxs)("strong",{children:["QTY: ",c]})}),(0,i.jsx)("div",{className:"partPicture",children:(0,i.jsx)(n.default,{src:"/Images/Red-Brass-Nipple.png",alt:"Red Brass Nipple",className:"image",width:80,height:80})}),(0,i.jsxs)("div",{className:"origin",children:[(0,i.jsxs)("p",{className:"originEnglish",children:["MADE IN ",f]}),(0,i.jsx)("p",{className:"originSpanish",children:p})]}),(0,i.jsx)("div",{className:"barcode",children:(0,i.jsx)("svg",{ref:x})}),(0,i.jsx)("div",{className:"partNumber",children:(0,i.jsxs)("strong",{children:["PART # ",m]})})]})]})})},v=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];function S(e){let{onChange:t}=e,[a,n]=(0,s.useState)("3x5"),[l,r]=(0,s.useState)({width:3,height:1}),[o,d]=(0,s.useState)("BRN18CL"),[c,u]=(0,s.useState)("Red Brass Coupling"),[m,h]=(0,s.useState)('1/8" x CLOSE'),[g,x]=(0,s.useState)(["Schedule 40 Red Brass"]),[f,p]=(0,s.useState)(25),[b,j]=(0,s.useState)("Taiwan"),[y,w]=(0,s.useState)("H88500"),[N,S]=(0,s.useState)(v);(0,s.useEffect)(()=>{t({size:"custom"===a?{width:96*l.width,height:96*l.height}:L(a),model:o,title:c,subtitle:m,details:g.join("\n"),quantity:f,origin:b,partNumber:y})},[a,l,o,c,m,g,f,b,y]);let k=e=>n(e.target.value),C=e=>{let{name:t,value:a}=e.target;r(e=>({...e,[t]:parseFloat(a)||0}))},A=e=>t=>e(t.target.value),B=(e,t)=>{let a=[...g];a[e]=t,x(a)},E=e=>{x(g.filter((t,a)=>a!==e))},L=e=>{switch(e){case"3x5":return{width:480,height:360};case"3x10":return{width:960,height:360};default:return{width:360,height:360}}};return(0,i.jsxs)("form",{onSubmit:e=>e.preventDefault(),className:"space-y-4",children:[(0,i.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Model"}),(0,i.jsx)("input",{type:"text",value:o,onChange:A(d),className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Part Number"}),(0,i.jsx)("input",{type:"text",value:y,onChange:A(w),className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Quantity"}),(0,i.jsx)("input",{type:"number",value:f,onChange:A(p),className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Country of Origin"}),(0,i.jsx)("input",{type:"text",value:b,onChange:e=>{let t=e.target.value;j(t),S(v.filter(e=>e.toLowerCase().includes(t.toLowerCase())))},className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",list:"country-list"}),(0,i.jsx)("datalist",{id:"country-list",children:N.map(e=>(0,i.jsx)("option",{value:e},e))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Title"}),(0,i.jsx)("input",{type:"text",value:c,onChange:A(u),className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Subtitle"}),(0,i.jsx)("input",{type:"text",value:m,onChange:A(h),className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,i.jsxs)("div",{className:"sm:col-span-2",children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Details"}),g.map((e,t)=>(0,i.jsxs)("div",{className:"flex items-center mt-1",children:[(0,i.jsx)("input",{type:"text",value:e,onChange:e=>B(t,e.target.value),className:"details-input block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",maxLength:33,style:{width:"20%"}}),(0,i.jsx)("button",{type:"button",onClick:()=>E(t),className:"ml-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",style:{height:"2rem"},children:"-"})]},t)),(0,i.jsx)("button",{type:"button",onClick:()=>x([...g,""]),className:"mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"+ Add Detail"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Size"}),(0,i.jsxs)("div",{className:"mt-2 flex flex-wrap items-center space-x-4",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("input",{type:"radio",value:"3x5",checked:"3x5"===a,onChange:k,className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}),(0,i.jsx)("label",{className:"ml-2 block text-sm font-medium text-gray-700",children:'3.75" x 5"'})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("input",{type:"radio",value:"3x10",checked:"3x10"===a,onChange:k,className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}),(0,i.jsx)("label",{className:"ml-2 block text-sm font-medium text-gray-700",children:'3.75" x 10"'})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("input",{type:"radio",value:"custom",checked:"custom"===a,onChange:k,className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}),(0,i.jsx)("label",{className:"ml-2 block text-sm font-medium text-gray-700",children:"Custom Size"})]}),"custom"===a&&(0,i.jsxs)("div",{className:"flex items-center space-x-2 mt-2",children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Width (in):"}),(0,i.jsx)("input",{type:"number",name:"width",value:l.width||"",onChange:e=>C({target:{name:"width",value:e.target.value}}),min:"2",step:"0.1",className:"block w-20 shadow-sm sm:text-sm border-gray-300 rounded-md"}),(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Height (in):"}),(0,i.jsx)("input",{type:"number",name:"height",value:l.height||"",onChange:e=>C({target:{name:"height",value:e.target.value}}),min:"1",step:"0.1",className:"block w-20 shadow-sm sm:text-sm border-gray-300 rounded-md"})]})]})]})]})}function k(){let[e,t]=(0,s.useState)("light");return(0,s.useEffect)(()=>{let e=localStorage.getItem("theme")||"light";t(e),document.documentElement.setAttribute("data-theme",e)},[]),(0,i.jsx)("button",{onClick:()=>{let a="light"===e?"dark":"light";t(a),document.documentElement.setAttribute("data-theme",a),localStorage.setItem("theme",a)},className:"p-2 rounded bg-gray-200 dark:bg-gray-800",style:{color:"light"===e?"black":"white"},children:"light"===e?"\uD83C\uDF19":"☀️"})}function C(){let[e,t]=(0,s.useState)({text:"",size:{width:480,height:360},model:"BRN18CL",title:"Red Brass Coupling",subtitle:'1/8" x CLOSE',details:"• Schedule 40\nRed Brass",quantity:25,origin:"MADE IN TAIWAN\nHecho en Taiwan",partNumber:"H88500"});return(0,i.jsxs)("div",{className:"container mx-auto p-4",style:{backgroundColor:"var(--background)"},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,i.jsxs)("div",{className:"flex-1 flex items-center justify-center",children:[(0,i.jsx)(n.default,{src:"/logo.png",alt:"Company Logo",width:1e3,height:1e3,style:{width:"15rem",height:"auto"}}),(0,i.jsx)("h1",{className:"text-2xl font-bold ml-4",style:{color:"var(--foreground)"},children:"Label Maker"})]}),(0,i.jsx)(k,{})]}),(0,i.jsx)(S,{onChange:e=>{t(e)}}),(0,i.jsx)("div",{className:"mt-8 flex justify-center",children:(0,i.jsx)(N,{...e})}),(0,i.jsx)("div",{className:"mt-4 flex justify-center",children:(0,i.jsx)("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Create Label"})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[587,441,517,358],()=>t(5812)),_N_E=e.O()}]);