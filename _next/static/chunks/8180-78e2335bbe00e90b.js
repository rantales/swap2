"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8180],{31306:function(e,n,r){r.d(n,{X:function(){return t.X}});var t=r(66130)},98276:function(e,n,r){r.d(n,{_:function(){return t._}});var t=r(47637)},12455:function(e,n,r){r.d(n,{BA:function(){return i},DA:function(){return a},m0:function(){return l}});var t=r(62656),o=r(56175);let s=(0,t.zo)(o.ZP)`
  width: ${e=>{let{width:n}=e;return null!=n?n:"100%"}};
  display: flex;
  align-items: ${e=>{let{align:n}=e;return null!=n?n:"center"}};
  justify-content: ${e=>{let{justify:n}=e;return null!=n?n:"flex-start"}};
  padding: ${e=>{let{padding:n}=e;return null!=n?n:"0"}};
  border: ${e=>{let{border:n}=e;return n}};
  border-radius: ${e=>{let{borderRadius:n}=e;return n}};
`,l=(0,t.zo)(s)`
  justify-content: space-between;
`;t.zo.div`
  display: flex;
  align-items: flex-end;
`;let i=(0,t.zo)(s)`
  flex-wrap: wrap;
  margin: ${e=>{let{gap:n}=e;return n&&`-${n}`}};
  justify-content: ${e=>{let{justify:n}=e;return n}};

  & > * {
    margin: ${e=>{let{gap:n}=e;return n}} !important;
  }
`,a=(0,t.zo)(s)`
  width: fit-content;
  margin: ${e=>{let{gap:n}=e;return n&&`-${n}`}};

  & > * {
    margin: ${e=>{let{gap:n}=e;return n}} !important;
  }
`;n.ZP=s},48481:function(e,n,r){r.d(n,{Z:function(){return CircleLoader}});var t=r(97458),o=r(62656);let s=o.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,l=o.zo.svg`
  animation: 2s ${s} linear infinite;
  height: ${e=>{let{size:n}=e;return n}};
  width: ${e=>{let{size:n}=e;return n}};
  path {
    stroke: ${e=>{let{stroke:n,theme:r}=e;return null!=n?n:r.colors.primary}};
  }
`;function CircleLoader(e){let{size:n="16px",stroke:r,...o}=e;return(0,t.jsx)(l,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:n,stroke:r,...o,children:(0,t.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}},75272:function(e,n,r){r.d(n,{X:function(){return FiatLogo},Z:function(){return CurrencyLogo}});var t=r(97458),o=r(80332),s=r(45900),l=r(13882),i=r(52983),a=r(62198),c=r(62656),d=r(69451),u=r(5675),h=r(97390);let m=(0,c.zo)(s.Z)`
  width: ${e=>{let{size:n}=e;return n}};
  height: ${e=>{let{size:n}=e;return n}};
  border-radius: 50%;
`;function FiatLogo(e){var n;let{currency:r,size:o="24px",style:s}=e;return(0,t.jsx)(m,{size:o,srcs:[`/images/currencies/${null==r?void 0:null===(n=r.symbol)||void 0===n?void 0:n.toLowerCase()}.png`],width:o,style:s})}function CurrencyLogo(e){var n;let{currency:r,size:s="24px",style:c}=e,p=(0,u.ai)(r instanceof a.DT?r.logoURI:void 0),x=(0,i.useMemo)(()=>{if(null==r?void 0:r.isNative)return[];if(null==r?void 0:r.isToken){let e=(0,h.Z)(r);return r instanceof a.DT?e?[...p,e]:[...p]:e?[e]:[]}return[]},[r,p]);return(null==r?void 0:r.isNative)?r.chainId===o.a_.BSC?(0,t.jsx)(l.Z,{width:s,style:c}):(0,t.jsx)(m,{size:s,srcs:[`${d.EW}/web/native/${r.chainId}.png`],width:s,style:c}):(0,t.jsx)(m,{size:s,srcs:x,alt:`${null!==(n=null==r?void 0:r.symbol)&&void 0!==n?n:"token"} logo`,style:c})}},21665:function(e,n,r){r.d(n,{Z:function(){return DoubleCurrencyLogo}});var t=r(97458),o=r(62656),s=r(75272);let l=o.zo.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: ${e=>{let{margin:n}=e;return n&&"4px"}};
`;function DoubleCurrencyLogo(e){let{currency0:n,currency1:r,size:o=20,margin:i=!1}=e;return(0,t.jsxs)(l,{margin:i,children:[n&&(0,t.jsx)(s.Z,{currency:n,size:`${o.toString()}px`,style:{marginRight:"4px"}}),r&&(0,t.jsx)(s.Z,{currency:r,size:`${o.toString()}px`})]})}},41224:function(e,n,r){r.d(n,{X:function(){return t.Z},g:function(){return o.Z}});var t=r(75272),o=r(21665)},88180:function(e,n,r){let t;r.d(n,{Z:function(){return CurrencySearchModal}});var o=r(97458),s=r(5675),l=r(19232),i=r(27822),a=r(58356),c=r(37939),d=r(25306),u=r(83229),h=r(57562),m=r(89179),p=r(16203),x=r(52983),g=r(18640),v=r(1962),f=r(62656),y=r(22232),k=r(56175),j=r(24216),w=r(99373),b=r(21994),C=r(62198),S=r(54917),I=r(37528),Z=r(70395),T=r(68917),E=r(81824),R=r(33649),D=r(12455),M=r(1802),_=r(31306),L=r(78010),U=r(51357);let B=f.zo.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
`,N=f.zo.div`
  border: 1px solid ${e=>{let{theme:n,disable:r}=e;return r?"transparent":n.colors.dropdown}};
  border-radius: 10px;
  display: flex;
  padding: 6px;
  align-items: center;
  &:hover {
    cursor: ${e=>{let{disable:n}=e;return!n&&"pointer"}};
    background-color: ${e=>{let{theme:n,disable:r}=e;return!r&&n.colors.background}};
  }
  background-color: ${e=>{let{theme:n,disable:r}=e;return r&&n.colors.dropdown}};
  opacity: ${e=>{let{disable:n}=e;return n&&"0.4"}};
`,A=f.zo.div`
  white-space: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;function CommonBases(e){let{chainId:n,onSelect:r,selectedCurrency:t,commonBasesType:s}=e,i=(0,b.Z)(),{t:a}=(0,l.Z)(),c=a(s===U.L0.SWAP_LIMITORDER?"Common tokens":"Common bases");return(0,o.jsxs)(y.Tz,{gap:"md",children:[(0,o.jsxs)(D.BA,{children:[(0,o.jsx)(j.Z,{fontSize:"14px",children:c}),s===U.L0.LIQUIDITY&&(0,o.jsx)(M.s,{text:a("These tokens are commonly paired with other tokens."),ml:"4px"})]}),(0,o.jsxs)(A,{children:[(0,o.jsx)(B,{children:(0,o.jsxs)(N,{onClick:()=>{t&&t.isNative||r(i)},disable:null==t?void 0:t.isNative,children:[(0,o.jsx)(_.X,{currency:i,style:{marginRight:8}}),(0,o.jsx)(j.Z,{children:null==i?void 0:i.symbol})]})}),(n&&L.kx[n]||[]).map(e=>{let n=null==t?void 0:t.equals(e);return(0,o.jsx)(B,{children:(0,o.jsxs)(N,{onClick:()=>!n&&r(e),disable:n,children:[(0,o.jsx)(_.X,{currency:e,style:{marginRight:8,borderRadius:"50%"}}),(0,o.jsx)(j.Z,{children:e.symbol})]})},`buttonBase#${e.address}`)})]})]})}var z=r(17884),$=r(55221),P=r(92031),H=r(99408),K=r(33865),O=r(59776),V=r(75272),F=r(26440),Y=r(48481),W=r(49671),G=r(27502),X=r(41224),J=(0,G.D)(X.X),SearchModal_ImportTokenRow=e=>{let{token:n,style:r,dim:t,list:s,onCurrencySelect:l,isActive:i,isAdded:a,setImportToken:c,showImportView:d}=e;return(0,o.jsx)(J,{style:r,token:n,dim:t,list:s,onCurrencySelect:l,isActive:i,children:(0,o.jsx)(W.M,{token:n,isActive:i,isAdded:a,setImportToken:c,showImportView:d})})};function ImportRow(e){var n,r;let{token:t,style:s,dim:l,onCurrencySelect:i,showImportView:a,setImportToken:c}=e,d=(0,g.qB)(),u=(null==t?void 0:t.chainId)&&(null==d?void 0:null===(r=d[t.chainId])||void 0===r?void 0:null===(n=r[t.address])||void 0===n?void 0:n.list),h=(0,R.EH)(t),m=(0,R.ZN)(t);return(0,o.jsx)(SearchModal_ImportTokenRow,{style:s,token:t,dim:l,onCurrencySelect:i,showImportView:a,setImportToken:c,list:u,isActive:m,isAdded:h})}function currencyKey(e){return(null==e?void 0:e.isToken)?e.address:(null==e?void 0:e.isNative)?e.symbol:""}let q=(0,f.zo)(j.Z)`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`,Q=f.zo.div`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-gap: 16px;
  align-items: center;
`;function Balance(e){let{balance:n}=e;return(0,o.jsx)(q,{title:n.toExact(),children:(0,$.dN)(n,4)})}let ee=(0,f.zo)(D.m0)`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);
  grid-gap: 8px;
  cursor: ${e=>{let{disabled:n}=e;return!n&&"pointer"}};
  pointer-events: ${e=>{let{disabled:n}=e;return n&&"none"}};
  &:hover {
    background-color: ${e=>{let{theme:n,disabled:r}=e;return!r&&n.colors.background}};
  }
  opacity: ${e=>{let{disabled:n,selected:r}=e;return n||r?.5:1}};
`;function CurrencyRow(e){let{currency:n,onSelect:r,isSelected:t,otherSelected:s,style:i,onRampFlow:a,mode:c}=e,{address:d}=(0,O.mA)(),{t:u}=(0,l.Z)(),h=currencyKey(n),m=(0,g.z0)(),p=(0,I.wK)(m,n),x=(0,R.EH)(n),v=(0,F._h)(null!=d?d:void 0,n);return(0,o.jsxs)(ee,{style:i,className:`token-item-${h}`,onClick:()=>t?null:r(),disabled:t,selected:s,children:["onramp-input"===c?(0,o.jsx)(V.X,{currency:n,size:"24px"}):(0,o.jsx)(_.X,{currency:n,size:"24px"}),(0,o.jsxs)(y.sg,{children:[(0,o.jsx)(j.Z,{bold:!0,children:null==n?void 0:n.symbol}),(0,o.jsxs)(j.Z,{color:"textSubtle",small:!0,ellipsis:!0,maxWidth:"200px",children:[!p&&x&&`${u("Added by user")} •`," ",null==n?void 0:n.name]})]}),(0,o.jsx)(D.DA,{style:{justifySelf:"flex-end"},children:v?(0,o.jsx)(Balance,{balance:v}):d&&!a?(0,o.jsx)(Y.Z,{}):(0,o.jsx)(z.Z,{})})]})}function CurrencyList(e){let{height:n,currencies:r,inactiveCurrencies:t,selectedCurrency:s,onCurrencySelect:i,otherCurrency:a,fixedListRef:c,showNative:d,showImportView:u,setImportToken:h,breakIndex:m,mode:g}=e,v=(0,b.Z)(),{pathname:f}=(0,p.useRouter)(),y="/buy-crypto"===f,k=(0,x.useMemo)(()=>{if(y)return"onramp-output"===g?[v,...r]:[...r];let e=d?[v,...r,...t]:[...r,...t];return void 0!==m&&(e=[...e.slice(0,m),void 0,...e.slice(m,e.length)]),e},[m,r,t,d,v,y,g]),{chainId:w}=(0,Z.g)(),{t:C}=(0,l.Z)(),S=(0,x.useCallback)(e=>{let{data:n,index:t,style:l}=e,c=n[t],d=!!Object.keys(T.L$).includes(null==c?void 0:c.symbol),p=!1,x=!1;d||"onramp-input"===g?(p=!!((null==s?void 0:s.symbol)&&c&&(null==s?void 0:s.symbol)===(null==c?void 0:c.symbol)),x=!!((null==a?void 0:a.symbol)&&c&&(null==a?void 0:a.symbol)===(null==c?void 0:c.symbol))):(p=!!(s&&c&&s.equals(c)),x=!!(a&&c&&a.equals(c)));let handleSelect=()=>i(c),v=(0,K.pu)(c,w),f=t>r.length;return t!==m&&n?f&&v?(0,o.jsx)(ImportRow,{onCurrencySelect:handleSelect,style:l,token:v,showImportView:u,setImportToken:h,dim:!0}):(0,o.jsx)(CurrencyRow,{style:l,currency:c,isSelected:p,onSelect:handleSelect,otherSelected:x,onRampFlow:y,mode:g}):(0,o.jsx)(Q,{style:l,children:(0,o.jsx)(P.m5,{padding:"8px 12px",borderRadius:"8px",children:(0,o.jsxs)(D.m0,{children:[(0,o.jsx)(j.Z,{small:!0,children:C("Expanded results from inactive Token Lists")}),(0,o.jsx)(M.s,{text:C("Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."),ml:"4px"})]})})})},[s,a,w,r.length,m,i,C,u,h,y,g]),I=(0,x.useCallback)((e,n)=>`${currencyKey(n[e])}-${e}`,[]);return(0,o.jsx)(H.t7,{height:n,ref:c,width:"100%",itemData:k,itemCount:k.length,itemSize:56,itemKey:I,children:S})}var en=r(43692),sorting=function(e){let n=(0,F.uD)(),r=(0,x.useMemo)(()=>(0,en.Nk)(null!=n?n:{}),[n]);return(0,x.useMemo)(()=>e?(e,n)=>-1*r(e,n):r,[e,r])};let getSwapSound=()=>(t||(t=new Audio("https://cdn.pancakeswap.com/swap.mp3")),t);var SearchModal_CurrencySearch=function(e){let{selectedCurrency:n,onCurrencySelect:r,otherSelectedCurrency:t,showCommonBases:i,commonBasesType:a,showSearchInput:d=!0,showImportView:u,setImportToken:h,height:m,tokensToShow:p,mode:v,onRampFlow:f}=e,{t:M}=(0,l.Z)(),{chainId:_}=(0,Z.g)(),L=(0,x.useRef)(),[U,B]=(0,x.useState)(""),N=(0,s.Nr)(U,200),[A]=(0,x.useState)(!1),z=(0,R.e_)(),$=(0,R.dQ)(N),P=(0,R.EH)($),{isMobile:H}=(0,c.Z)(),[K]=(0,S.pp)(),O=(0,b.Z)(),V=(0,x.useMemo)(()=>{var e,n,r;if(p||"onramp-input"===v)return!1;let t=N.toLowerCase().trim();return O&&(null===(r=O.symbol)||void 0===r?void 0:null===(n=r.toLowerCase)||void 0===n?void 0:null===(e=n.call(r))||void 0===e?void 0:e.indexOf(t))!==-1},[N,O,p,v]),F=(0,x.useMemo)(()=>{let e=(0,C.SR)(N,e=>(0,E.U)(e));return Object.values(p||z).filter(e)},[p,z,N]),Y=(0,s.T2)(F,N),W=(0,x.useMemo)(()=>_&&"onramp-input"===v?Y.filter(e=>T.NN[_].includes(e.symbol)):Y,[v,Y,_]),G=sorting(A),X=(0,x.useMemo)(()=>f?[...W]:[...W].sort(G),[W,G,f]),J=(0,x.useCallback)(e=>{r(e),K&&getSwapSound().play()},[K,r]),q=(0,x.useRef)();(0,x.useEffect)(()=>{var e;H||null===(e=q.current)||void 0===e||e.focus()},[H]);let Q=(0,x.useCallback)(e=>{var n;let r=e.target.value,t=(0,I.xP)(r);B(t||r),null===(n=L.current)||void 0===n||n.scrollTo(0)},[]),ee=(0,x.useCallback)(e=>{if("Enter"===e.key){let e=N.toLowerCase().trim();if(e===O.symbol.toLowerCase().trim())J(O);else if(X.length>0){var n;((null===(n=X[0].symbol)||void 0===n?void 0:n.toLowerCase())===N.trim().toLowerCase()||1===X.length)&&J(X[0])}}},[N,X,J,O]),en=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=(0,g.R0)(),t=(0,g.eu)(),{chainId:o}=(0,Z.g)(),s=(0,R.e_)();return(0,x.useMemo)(()=>{if(!e||0===e.trim().length)return[];let l=(0,C.SR)(e,e=>(0,E.U)(e)),i=[],a=[],c={},d=e.toLowerCase().trim();for(let e of t){var u,h,m;let n=null===(u=r[e])||void 0===u?void 0:u.current;if(n){for(let e of n.tokens)if(e.chainId===o&&!(e.address in s)&&!c[e.address]&&l(e)){let n=new C.DT({...e,address:(0,I.xP)(e.address)||e.address});c[n.address]=!0,(null===(h=e.name)||void 0===h?void 0:h.toLowerCase())===d||(null===(m=e.symbol)||void 0===m?void 0:m.toLowerCase())===d?i.push(n):a.push(n)}}}return[...i,...a].slice(0,n)},[s,o,t,r,n,e])}(N),er=!!(null==en?void 0:en.length),et=(0,x.useCallback)(()=>!$||P||er?(null==X?void 0:X.length)||er||"onramp-output"===v?(0,o.jsx)(k.ZP,{mx:"-24px",my:"24px",children:(0,o.jsx)(CurrencyList,{height:H?i?m||250:m?m+80:350:390,showNative:V,currencies:X,inactiveCurrencies:"onramp-input"===v?[]:en,breakIndex:(null==en?void 0:en.length)&&X?X.length:void 0,onCurrencySelect:J,otherCurrency:t,selectedCurrency:n,fixedListRef:L,showImportView:u,setImportToken:h,mode:v})}):(0,o.jsx)(y.sg,{style:{padding:"20px",height:"100%"},children:(0,o.jsx)(j.Z,{color:"textSubtle",textAlign:"center",mb:"20px",children:M("No results found.")})}):(0,o.jsx)(y.sg,{style:{padding:"20px 0",height:"100%"},children:(0,o.jsx)(ImportRow,{onCurrencySelect:J,token:$,showImportView:u,setImportToken:h})}),[en,X,J,er,t,$,P,n,h,V,u,M,i,H,m,v]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y.Tz,{gap:"16px",children:[d&&(0,o.jsx)(D.ZP,{children:(0,o.jsx)(w.Z,{id:"token-search-input",placeholder:f?M("Search name"):M("Search name or paste address"),scale:"lg",autoComplete:"off",value:U,ref:q,onChange:Q,onKeyDown:ee})}),i&&(0,o.jsx)(CommonBases,{chainId:_,onSelect:J,selectedCurrency:n,commonBasesType:a})]}),et()]})},er=r(75395),et=r(94472),eo=r(31419),es=r(51627),el=r(40749),ei=r(22665),ea=r(81969),ec=r(4987),ed=r(98276),eu=r(87889),eh=r(78977),em=r(13030);let ep=(0,f.zo)(y.sg)`
  width: 100%;
  height: 100%;
`,ex=(0,f.zo)(D.ZP)`
  background-color: ${e=>{let{active:n,theme:r}=e;return n?`${r.colors.success19}`:"transparent"}};
  border: solid 1px;
  border-color: ${e=>{let{active:n,theme:r}=e;return n?r.colors.success:r.colors.tertiary}};
  transition: 200ms;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  opacity: ${e=>{let{hasActiveTokens:n}=e;return n?1:.4}};
`,eg=(0,x.memo)(function(e){var n;let{listUrl:r}=e,{chainId:t}=(0,Z.g)(),{t:s}=(0,l.Z)(),a=(0,g.EF)(r),c=(0,em.Dv)(g.Ti),[,d]=(0,v.n_)(),{current:u,pendingUpdate:m}=c[r],p=(0,x.useMemo)(()=>u&&t?u.tokens.reduce((e,n)=>n.chainId===t?e+1:e,0):0,[t,u]),f=(0,x.useCallback)(()=>{m&&d((0,i.xJ)(r))},[d,r,m]),k=(0,x.useCallback)(()=>{window.confirm("Please confirm you would like to remove this list")&&d((0,i.J_)(r))},[d,r]),w=(0,x.useCallback)(()=>{d((0,i.ic)(r))},[d,r]),b=(0,x.useCallback)(()=>{d((0,i.K$)(r))},[d,r]),{targetRef:C,tooltip:S,tooltipVisible:I}=(0,es.Z)((0,o.jsxs)("div",{children:[(0,o.jsx)(j.Z,{children:u&&(n=u.version,`v${n.major}.${n.minor}.${n.patch}`)}),(0,o.jsx)(el.Z,{external:!0,href:`https://tokenlists.org/token-list?url=${r}`,children:s("See")}),(0,o.jsx)(h.Z,{variant:"danger",scale:"xs",onClick:k,disabled:1===Object.keys(c).length,children:s("Remove")}),m&&(0,o.jsx)(h.Z,{variant:"text",onClick:f,style:{fontSize:"12px"},children:s("Update list")})]}),{placement:"right-end",trigger:"click",isInPortal:!1});return u?(0,o.jsxs)(ex,{active:a,hasActiveTokens:p>0,id:`list-row-${r.replace(/\./g,"-")}`,children:[I&&S,u.logoURI?(0,o.jsx)(ed._,{size:"40px",style:{marginRight:"1rem"},logoURI:u.logoURI,alt:`${u.name} list logo`}):(0,o.jsx)("div",{style:{width:"24px",height:"24px",marginRight:"1rem"}}),(0,o.jsxs)(y.sg,{style:{flex:"1"},children:[(0,o.jsx)(D.ZP,{children:(0,o.jsx)(j.Z,{bold:!0,children:u.name})}),(0,o.jsxs)(D.DA,{mt:"4px",children:[(0,o.jsxs)(j.Z,{fontSize:"12px",mr:"6px",textTransform:"lowercase",children:[u.tokens.length," ",s("Tokens")]}),(0,o.jsx)("span",{ref:C,children:(0,o.jsx)(ei.Z,{color:"text",width:"12px"})})]})]}),(0,o.jsx)(ea.Z,{checked:a,onChange:()=>{a?b():w()}})]},r):null}),ev=f.zo.div`
  padding: 1rem 0;
  height: 100%;
  overflow: auto;
`;var SearchModal_ManageLists=function(e){let{setModalView:n,setImportList:r,setListUrl:t}=e,[s,a]=(0,x.useState)(""),{chainId:c}=(0,Z.g)(),{t:d}=(0,l.Z)(),[,u]=(0,v.n_)(),m=(0,g.R0)(),p=(0,g.v0)(),[f,k]=(0,x.useState)();(0,x.useEffect)(()=>{!f&&p&&k(p)},[f,p]);let b=(0,x.useCallback)(e=>{a(e.target.value)},[]),C=(0,i.jn)(u),S=(0,x.useMemo)(()=>(0,eu.Z)(s).length>0,[s]),I=(0,x.useMemo)(()=>{let e=Object.keys(m);return e.filter(e=>{let n=!!m[e].current&&!eh.US.includes(e);if(n&&c){var r;return null===(r=eh.vv[c])||void 0===r?void 0:r.includes(e)}return!1}).sort((e,n)=>{let{current:r}=m[e],{current:t}=m[n];if((null==f?void 0:f.includes(e))&&!(null==f?void 0:f.includes(n)))return -1;if(!(null==f?void 0:f.includes(e))&&(null==f?void 0:f.includes(n)))return 1;if(r&&t){let e="pancakeswap";return!r.name.toLowerCase().includes(e)&&t.name.toLowerCase().includes(e)?1:r.name.toLowerCase()<t.name.toLowerCase()?-1:r.name.toLowerCase()===t.name.toLowerCase()?0:1}return r?-1:t?1:0})},[m,c,f]),[T,E]=(0,x.useState)(),[R,M]=(0,x.useState)();(0,x.useEffect)(()=>{S?C(s,!1).then(e=>E(e)).catch(()=>M("Error importing list")):(E(void 0),""!==s&&M("Enter valid list location")),""===s&&M(void 0)},[C,s,S]);let _=Object.keys(m).includes(s),L=(0,x.useCallback)(()=>{T&&(r(T),n(U.Hv.importList),t(s))},[s,r,t,n,T]);return(0,o.jsxs)(ep,{children:[(0,o.jsxs)(y.Tz,{gap:"14px",children:[(0,o.jsx)(D.ZP,{children:(0,o.jsx)(w.Z,{id:"list-add-input",scale:"lg",placeholder:d("https:// or ipfs://"),value:s,onChange:b})}),R?(0,o.jsx)(j.Z,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:R}):null]}),T&&(0,o.jsx)(y.Tz,{style:{marginTop:8},children:(0,o.jsx)(P.ZP,{padding:"12px 20px",children:(0,o.jsxs)(D.m0,{children:[(0,o.jsxs)(D.DA,{children:[T.logoURI&&(0,o.jsx)(ed._,{logoURI:T.logoURI,size:"40px"}),(0,o.jsxs)(y.Tz,{gap:"4px",style:{marginLeft:"20px"},children:[(0,o.jsx)(j.Z,{bold:!0,children:T.name}),(0,o.jsxs)(j.Z,{color:"textSubtle",small:!0,textTransform:"lowercase",children:[T.tokens.length," ",d("Tokens")]})]})]}),_?(0,o.jsxs)(D.DA,{children:[(0,o.jsx)(ec.Z,{width:"16px",mr:"10px"}),(0,o.jsx)(j.Z,{children:d("Loaded")})]}):(0,o.jsx)(h.Z,{width:"fit-content",onClick:L,children:d("Import")})]})})}),(0,o.jsx)(ev,{children:(0,o.jsx)(y.Tz,{gap:"md",children:I.map(e=>(0,o.jsx)(eg,{listUrl:e},e))})})]})},ef=r(54562),ey=r(75078),ek=r(51296),ej=r(11292),ew=r(56367),eb=r(32791);let eC=f.zo.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  padding-bottom: 60px;
`,eS=f.zo.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function ManageTokens(e){let{setModalView:n,setImportToken:r}=e,{chainId:t}=(0,Z.g)(),{t:s}=(0,l.Z)(),[i,a]=(0,x.useState)(""),c=(0,x.useRef)(),d=(0,x.useCallback)(e=>{let n=e.target.value,r=(0,I.xP)(n);a(r||n)},[]),u=(0,R.dQ)(i),m=(0,eb.Z)(),p=(0,ew.QG)(),g=(0,x.useCallback)(()=>{t&&m&&m.forEach(e=>p(t,e.address))},[p,m,t]),v=(0,x.useMemo)(()=>t&&m.map(e=>(0,o.jsxs)(D.m0,{width:"100%",children:[(0,o.jsxs)(D.DA,{children:[(0,o.jsx)(X.X,{currency:e,size:"20px"}),(0,o.jsx)(ef.Z,{external:!0,href:(0,I.C)(e.address,"address",t),color:"textSubtle",ml:"10px",mr:"3px",children:e.symbol}),(0,o.jsx)("a",{href:(0,I.C)(e.address,"token",t),target:"_blank",rel:"noreferrer noopener",children:(0,o.jsx)(ey.Z,{width:"20px",color:"textSubtle"})})]}),(0,o.jsx)(D.DA,{children:(0,o.jsx)(ek.Z,{variant:"text",onClick:()=>p(t,e.address),children:(0,o.jsx)(ej.Z,{color:"textSubtle"})})})]},e.address)),[m,t,p]),f=""===i||(0,I.xP)(i);return(0,o.jsx)(eC,{children:(0,o.jsxs)(y.sg,{style:{width:"100%",flex:"1 1"},children:[(0,o.jsxs)(y.Tz,{gap:"14px",children:[(0,o.jsx)(D.ZP,{children:(0,o.jsx)(w.Z,{id:"token-search-input",scale:"lg",placeholder:"0x0000",value:i,autoComplete:"off",ref:c,onChange:d,isWarning:!f})}),!f&&(0,o.jsx)(j.Z,{color:"failure",children:s("Enter valid token address")}),u&&(0,o.jsx)(ImportRow,{token:u,showImportView:()=>n(U.Hv.importToken),setImportToken:r,style:{height:"fit-content"}})]}),v,(0,o.jsxs)(eS,{children:[(0,o.jsxs)(j.Z,{bold:!0,color:"textSubtle",children:[null==m?void 0:m.length," ",s(1===m.length?"Imported Token":"Imported Tokens")]}),m.length>0&&(0,o.jsx)(h.Z,{variant:"tertiary",onClick:g,children:s("Clear all")})]})]})})}let eI=(0,f.zo)(et.Z)`
  width: 100%;
`;function Manage(e){let{setModalView:n,setImportList:r,setImportToken:t,setListUrl:s}=e,[i,c]=(0,x.useState)(!0),{t:d}=(0,l.Z)();return(0,o.jsxs)(a.fe,{style:{overflow:"visible"},children:[(0,o.jsxs)(eI,{activeIndex:i?0:1,onItemClick:()=>c(e=>!e),scale:"sm",variant:"subtle",mb:"32px",children:[(0,o.jsx)(eo.Z,{width:"50%",children:d("Lists")}),(0,o.jsx)(eo.Z,{width:"50%",children:d("Tokens")})]}),i?(0,o.jsx)(SearchModal_ManageLists,{setModalView:n,setImportList:r,setListUrl:s}):(0,o.jsx)(ManageTokens,{setModalView:n,setImportToken:t})]})}let eZ=f.zo.div`
  width: 100%;
  background-color: ${e=>{let{theme:n}=e;return n.colors.backgroundAlt}};
  text-align: center;
`,eT=(0,f.zo)(a.F0)`
  width: 100%;
  min-width: 320px;
  max-width: 420px !important;
  min-height: calc(var(--vh, 1vh) * 90);
  ${e=>{let{theme:n}=e;return n.mediaQueries.md}} {
    min-height: auto;
  }
`,eE=(0,f.zo)(a.fe)`
  padding: 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;function CurrencySearchModal(e){var n;let{onDismiss:r=()=>null,onCurrencySelect:t,selectedCurrency:f,otherSelectedCurrency:y,showCommonBases:k=!0,commonBasesType:j,showSearchInput:w,tokensToShow:b,mode:C}=e,[S,I]=(0,x.useState)(U.Hv.search),{pathname:Z}=(0,p.useRouter)(),T="/buy-crypto"===Z,E=(0,x.useCallback)(e=>{null==r||r(),null==t||t(e)},[r,t]),R=(0,s.zP)(S),[D,M]=(0,x.useState)(),[_,L]=(0,x.useState)(),[B,N]=(0,x.useState)(),{t:A}=(0,l.Z)(),[,z]=(0,v.n_)(),$=(0,g.R0)(),P=!!(B&&(null===(n=$[B])||void 0===n?void 0:n.loadingRequestId)),H=(0,i.jn)(z),[K,O]=(0,x.useState)(null),V=(0,x.useCallback)(()=>{!P&&B&&(O(null),H(B).then(()=>{z((0,i.ic)(B)),I(U.Hv.manage)}).catch(e=>{O(e.message),z((0,i.J_)(B))}))},[P,z,H,B]),F={[U.Hv.search]:{title:A("Select a Token"),onBack:void 0},[U.Hv.manage]:{title:A("Manage"),onBack:()=>I(U.Hv.search)},[U.Hv.importToken]:{title:A("Import Tokens"),onBack:()=>I(R&&R!==U.Hv.importToken?R:U.Hv.search)},[U.Hv.importList]:{title:A("Import List"),onBack:()=>I(U.Hv.search)}},{isMobile:Y}=(0,c.Z)(),W=(0,x.useRef)(null),[G,X]=(0,x.useState)(void 0);return(0,x.useEffect)(()=>{W.current&&X(W.current.offsetHeight-330)},[]),(0,o.jsxs)(eT,{drag:!!Y&&"y",dragConstraints:{top:0,bottom:600},dragElastic:{top:0},dragSnapToOrigin:!0,onDragStart:()=>{W.current&&(W.current.style.animation="none")},onDragEnd:(e,n)=>{n.velocity.y>d.dl&&r&&r()},ref:W,children:[(0,o.jsxs)(a.xB,{children:[(0,o.jsxs)(a.r6,{children:[F[S].onBack&&(0,o.jsx)(a.vy,{onBack:F[S].onBack}),(0,o.jsx)(u.Z,{children:F[S].title})]}),(0,o.jsx)(a.ol,{onDismiss:r})]}),(0,o.jsxs)(eE,{children:[S===U.Hv.search?(0,o.jsx)(SearchModal_CurrencySearch,{onCurrencySelect:E,selectedCurrency:f,otherSelectedCurrency:y,showCommonBases:k,commonBasesType:j,showSearchInput:w,showImportView:()=>I(U.Hv.importToken),setImportToken:M,height:G,tokensToShow:b,mode:C,onRampFlow:T}):S===U.Hv.importToken&&D?(0,o.jsx)(er.Z,{tokens:[D],handleCurrencySelect:E}):S===U.Hv.importList&&_&&B?(0,o.jsx)(m.n,{onAddList:V,addError:K,listURL:B,listLogoURI:null==_?void 0:_.logoURI,listName:null==_?void 0:_.name,listTokenLength:null==_?void 0:_.tokens.length}):S===U.Hv.manage?(0,o.jsx)(Manage,{setModalView:I,setImportToken:M,setImportList:L,setListUrl:N}):"",S===U.Hv.search&&!T&&(0,o.jsx)(eZ,{children:(0,o.jsx)(h.Z,{scale:"sm",variant:"text",onClick:()=>I(U.Hv.manage),className:"list-token-manage-button",children:A("Manage Tokens")})})]})]})}},75395:function(e,n,r){var t=r(97458),o=r(80332),s=r(19232),l=r(62198),i=r(51627),a=r(22232),c=r(72794),d=r(24216),u=r(39290),h=r(37893),m=r(44406),p=r(32536),x=r(54562),g=r(75078),v=r(68490),f=r(3411),y=r(57562),k=r(75009),j=r(98276),w=r(31698),b=r(97306),C=r(82587),S=r(70395),I=r(52983),Z=r(18640),T=r(56367),E=r(37528),R=r(8913),D=r(30989);n.Z=function(e){var n;let{tokens:r,handleCurrencySelect:M}=e,{chainId:_}=(0,S.g)(),{t:L}=(0,s.Z)(),[U,B]=(0,I.useState)(!1),N=(0,T._E)(),A=(0,Z.qB)(),{data:z}=(0,D.a)({queryKey:["has-risks",r],queryFn:async()=>{let e=await Promise.all(r.map(e=>(0,C.L)(e.address,e.chainId)));return e.some(e=>e.riskLevel>=w.LL.MEDIUM)},enabled:!!r,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchOnMount:!1}),{targetRef:$,tooltip:P,tooltipVisible:H}=(0,i.Z)(L("I have read the scanning result, understood the risk and want to proceed with token importing."));return(0,t.jsxs)(a.Tz,{gap:"lg",children:[(0,t.jsx)(c.Z,{variant:"warning",children:(0,t.jsxs)(d.Z,{children:[L("Anyone can create tokens on %network% with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.",{network:null===(n=R.p5.find(e=>e.id===_))||void 0===n?void 0:n.name}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:L("If you purchase a fraudulent token, you may be exposed to permanent loss of funds.")})]})}),r.map(e=>{var n,r;let s=e.chainId&&(null==A?void 0:null===(r=A[e.chainId])||void 0===r?void 0:null===(n=r[e.address])||void 0===n?void 0:n.list),l=e.address?`${(0,k.Z)(e.address)}`:null;return(0,t.jsxs)(u.Z,{flexDirection:["column","column","row"],alignItems:["left","left","center"],justifyContent:"space-between",children:[(0,t.jsxs)(h.Z,{gridTemplateRows:"1fr 1fr 1fr 1fr",gridGap:"4px",children:[void 0!==s?(0,t.jsxs)(m.Z,{variant:"success",outline:!0,scale:"sm",startIcon:s.logoURI&&(0,t.jsx)(j._,{logoURI:s.logoURI,size:"12px"}),children:[L("via")," ",s.name]}):(0,t.jsx)(m.Z,{variant:"failure",outline:!0,scale:"sm",startIcon:(0,t.jsx)(p.Z,{color:"failure"}),children:L("Unknown Source")}),(0,t.jsxs)(u.Z,{alignItems:"center",children:[(0,t.jsx)(d.Z,{mr:"8px",children:e.name}),(0,t.jsxs)(d.Z,{children:["(",e.symbol,")"]})]}),!!e.chainId&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{mr:"4px",children:l}),(0,t.jsxs)(x.Z,{href:(0,E.C)(e.address,"address",e.chainId),external:!0,children:["(",L("View on %site%",{site:(0,E.X0)(e.chainId)}),e.chainId===o.a_.BSC&&(0,t.jsx)(g.Z,{color:"primary",ml:"4px"}),")"]})]})]}),e&&_&&b.g.includes(_)&&(0,t.jsx)(u.Z,{mt:["20px","20px","0"],children:(0,t.jsx)(w.ZP,{token:e})})]},e.address)}),(0,t.jsxs)(h.Z,{gridTemplateRows:"1fr 1fr",gridGap:"4px",children:[(0,t.jsxs)(u.Z,{alignItems:"center",onClick:()=>B(!U),children:[(0,t.jsx)(v.Z,{scale:"sm",name:"confirmed",type:"checkbox",checked:U,onChange:()=>B(!U)}),(0,t.jsx)(d.Z,{ml:"8px",style:{userSelect:"none"},children:z?L("I acknowledge the risk"):L("I understand")}),z&&(0,t.jsxs)("div",{ref:$,children:[(0,t.jsx)(f.Z,{color:"textSubtle"}),H&&P]})]}),(0,t.jsx)(y.Z,{variant:"danger",disabled:!U,onClick:()=>{r.forEach(e=>{var n;let r=_&&(null==A?void 0:null===(n=A[e.chainId])||void 0===n?void 0:n[e.address]),t=e;r&&(t=new l.DT({...e,logoURI:r.token.logoURI,name:e.name||r.token.name})),N(t)}),M&&M(r[0])},className:".token-dismiss-button",children:z?L("Proceed"):L("Import")})]})]})}},51357:function(e,n,r){var t,o,s,l;r.d(n,{Hv:function(){return t},L0:function(){return o}}),(s=t||(t={}))[s.search=0]="search",s[s.manage=1]="manage",s[s.importToken=2]="importToken",s[s.importList=3]="importList",(l=o||(o={})).LIQUIDITY="LIQUIDITY",l.SWAP_LIMITORDER="SWAP_LIMITORDER"},33865:function(e,n,r){r.d(n,{Bv:function(){return o.Bv},pu:function(){return wrappedCurrency}});var t=r(43692),o=r(73643);function wrappedCurrency(e,n){return n&&(null==e?void 0:e.isNative)?t.FX[n]:(null==e?void 0:e.isToken)?e:void 0}},68917:function(e,n,r){r.d(n,{G:function(){return getChainCurrencyWarningMessages},IR:function(){return isBuyCryptoSupported},L$:function(){return k},LV:function(){return u},N2:function(){return m},NI:function(){return getNetworkDisplay},NN:function(){return p},Pz:function(){return c},QU:function(){return v},UW:function(){return l},bC:function(){return y},gy:function(){return s},hR:function(){return x},tM:function(){return g}});var t,o,s,l,i=r(80332),a=r(47814);let c=["ETH","DAI","USDT","USDC","BUSD","BNB"],d=["USD","EUR","GBP","HKD","CAD","AUD","BRL","JPY","KRW","VND"],u=1694512859;(t=s||(s={})).MoonPay="MoonPay",t.Mercuryo="Mercuryo",t.Transak="Transak",(o=l||(l={})).TotalFees="Est. Total Fees",o.NetworkingFees="Networking Fees",o.ProviderFees="Provider Fees";let h=["Est. Total Fees","Networking Fees","Provider Fees"],m={[i.a_.BSC]:{MoonPay:["BNB","BUSD"],Mercuryo:["BNB","BUSD"],Transak:["BNB","BUSD"]},[i.a_.ETHEREUM]:{MoonPay:["ETH","USDC","DAI","USDT"],Mercuryo:["ETH","USDT","DAI"],Transak:["ETH","USDT","DAI"]},[i.a_.ARBITRUM_ONE]:{MoonPay:["ETH","USDC"],Mercuryo:["ETH","USDC"],Transak:["ETH","USDC"]},[i.a_.ZKSYNC]:{MoonPay:["ETH","USDC","DAI","USDT"],Mercuryo:[],Transak:["ETH"]},[i.a_.LINEA]:{MoonPay:[],Mercuryo:[],Transak:["ETH","USDC"]},[i.a_.POLYGON_ZKEVM]:{MoonPay:[],Mercuryo:[],Transak:["ETH"]},[i.a_.BASE]:{MoonPay:[],Mercuryo:[],Transak:["ETH","USDC"]}},p={[i.a_.BSC]:d,[i.a_.ETHEREUM]:d,[i.a_.ARBITRUM_ONE]:d,[i.a_.ZKSYNC]:d,[i.a_.LINEA]:["EUR","GBP","HKD","CAD","AUD","JPY","KRW","VND"],[i.a_.POLYGON_ZKEVM]:d,[i.a_.BASE]:["EUR","GBP","HKD","CAD","AUD","JPY","KRW","VND"]};function isBuyCryptoSupported(e){return a.FZ.includes(e)}let x={MoonPay:h,Mercuryo:["Est. Total Fees"],Transak:h},getNetworkDisplay=e=>{switch(e){case i.a_.ETHEREUM:return"Ethereum";case i.a_.BSC:return"BNB Chain";case i.a_.ZKSYNC:return"zkSync Era";case i.a_.ARBITRUM_ONE:return"Arbitrum One";case i.a_.POLYGON_ZKEVM:return"Polygon zkEVM";case i.a_.LINEA:return"Linea";case i.a_.BASE:return"Base Mainnet";default:return""}},g={[i.a_.ETHEREUM]:"ETHEREUM",[i.a_.BSC]:"BINANCESMARTCHAIN",[i.a_.ARBITRUM_ONE]:"ARBITRUM",[i.a_.ZKSYNC]:"ZKSYNC",[i.a_.POLYGON_ZKEVM]:"ZKEVM",[i.a_.LINEA]:"LINEA",[i.a_.BASE]:"BASE"},v={[i.a_.ETHEREUM]:"",[i.a_.BSC]:"_bsc",[i.a_.ARBITRUM_ONE]:"_arbitrum",[i.a_.ZKSYNC]:"_zksync",[i.a_.POLYGON_ZKEVM]:"_polygonzkevm",[i.a_.LINEA]:"_linea",[i.a_.BASE]:"_base"},f={[i.a_.ETHEREUM]:"ethereum",[i.a_.BSC]:"bsc",[i.a_.ARBITRUM_ONE]:"arbitrum",[i.a_.ZKSYNC]:"zksync",[i.a_.POLYGON_ZKEVM]:"polygonzkevm",[i.a_.LINEA]:"linea",[i.a_.BASE]:"base"},y={MoonPay:v,Mercuryo:g,Transak:f},getChainCurrencyWarningMessages=(e,n)=>{let r=getNetworkDisplay(n);return{[i.a_.LINEA]:e("%chainId% supports limited fiat currencies. USD are not supported",{chainId:r}),[i.a_.BASE]:e("%chainId% supports limited fiat currencies. USD are not supported",{chainId:r})}},k={USD:{name:"United States Dollar",symbol:"USD"},EUR:{name:"Euro",symbol:"EUR"},GBP:{name:"Great British Pound",symbol:"GBP"},HKD:{name:"Hong Kong Dollar",symbol:"HKD"},CAD:{name:"Canadian Dollar",symbol:"CAD"},AUD:{name:"Australian Dollar",symbol:"AUD"},BRL:{name:"Brazilian Real",symbol:"BRL"},JPY:{name:"Japanese Yen",symbol:"JPY"},KRW:{name:"South Korean Won",symbol:"KRW"},TWD:{name:"New Taiwan Dollar",symbol:"TWD"},IDR:{name:"Indonesian Rupiah",symbol:"IDR"},SGD:{name:"Singapore Dollar",symbol:"SGD"},VND:{name:"Vietnamese Dong",symbol:"VND"}}},11292:function(e,n,r){var t=r(97458);r(52983);var o=r(91204);n.Z=e=>(0,t.jsx)(o.Z,{viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"})})}}]);
//# sourceMappingURL=8180-78e2335bbe00e90b.js.map