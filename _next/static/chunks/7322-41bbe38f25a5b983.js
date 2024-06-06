"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7322],{20751:function(e,n,t){t.d(n,{H:function(){return r.HY}});var r=t(71674)},31420:function(e,n,t){t.d(n,{Z:function(){return AppBody},e:function(){return o}});var r=t(97458),i=t(62656),l=t(39754);let o=(0,i.zo)(l.Z)`
  border-radius: 24px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
`;function AppBody(e){let{children:n,...t}=e;return(0,r.jsx)(o,{...t,children:n})}},42956:function(e,n,t){t.d(n,{j:function(){return Z.Z},t:function(){return App_AppHeader}});var r=t(97458),i=t(62656),l=t(39290),o=t(28055),s=t(51296),a=t(39293),c=t(83229),d=t(1802),u=t(20174),p=t(24216),x=t(54917),h=t(75647),f=t(70779),g=t.n(f),m=t(96986);let j=(0,i.zo)(l.Z)`
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
  border-bottom: 1px solid ${e=>{let{theme:n}=e;return n.colors.cardBorder}};

  ${e=>{let{borderHidden:n}=e;return n&&i.iv`
      border-bottom: 1px solid transparent;
    `}}
`,w=(0,i.zo)(o.BA)`
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid ${e=>{let{theme:n}=e;return n.colors.cardBorder}};
`;var App_AppHeader=e=>{let{title:n,subtitle:t,helper:i,backTo:o,noConfig:f=!1,IconSlot:Z=null,buttons:v,filter:y,shouldCenter:b=!1,borderHidden:k=!1}=e,[C]=(0,x.zu)();return(0,r.jsx)(j,{borderHidden:k,children:(0,r.jsxs)(l.Z,{alignItems:"center",width:"100%",style:{gap:"16px"},children:[o&&("string"==typeof o?(0,r.jsx)(g(),{legacyBehavior:!0,passHref:!0,href:o,children:(0,r.jsx)(s.Z,{as:"a",scale:"sm",children:(0,r.jsx)(a.Z,{width:"32px"})})}):(0,r.jsx)(s.Z,{scale:"sm",variant:"text",onClick:o,children:(0,r.jsx)(a.Z,{width:"32px"})})),(0,r.jsxs)(l.Z,{pr:o&&b?"48px":"",flexDirection:"column",width:"100%",marginTop:"4px",children:[(0,r.jsxs)(l.Z,{mb:"8px",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",style:{gap:"16px"},children:[(0,r.jsxs)(l.Z,{flex:1,justifyContent:b?"center":"",children:["string"==typeof n?(0,r.jsx)(c.Z,{as:"h2",children:n}):n,i&&(0,r.jsx)(d.s,{text:i,ml:"4px",placement:"top"})]}),!f&&(0,r.jsxs)(l.Z,{alignItems:"flex-end",children:[Z,(0,r.jsx)(u.Z,{show:C,children:(0,r.jsx)(h.Z,{mode:m.a.SWAP_LIQUIDITY})})]}),f&&v&&(0,r.jsx)(l.Z,{alignItems:"center",mr:"16px",children:v}),f&&Z&&(0,r.jsx)(l.Z,{alignItems:"center",children:Z})]}),t&&(0,r.jsx)(l.Z,{alignItems:"center",justifyContent:b?"center":"",children:(0,r.jsx)(p.Z,{textAlign:b?"center":"inherit",color:"textSubtle",fontSize:"14px",children:t})}),y&&(0,r.jsx)(w,{justifyContent:"space-between",gap:"8px",children:y})]})]})})},Z=t(31420)},1568:function(e,n,t){var r=t(97458),i=t(19232),l=t(20751),o=t(80332),s=t(70395),a=t(3432);n.Z=e=>{let{children:n,removePadding:t=!1,hideFooterOnDesktop:c=!1,noMinHeight:d=!1,helpUrl:u=a.B4,...p}=e,{t:x}=(0,i.Z)(),{chainId:h}=(0,s.g)(),f=h===o.a_.BSC,g=f?x("Bridge assets to BNB Chain"):"";return(0,r.jsx)(l.H.T3,{removePadding:t,noMinHeight:d,hideFooterOnDesktop:c,helpUrl:u,externalText:g,externalLinkUrl:f?"https://app.swapkit.network/":"",...p,children:n})}},78191:function(e,n,t){var r=t(62656),i=t(56175);let l=(0,r.zo)(i.ZP)`
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:n}=e;return n.colors.textDisabled}};
  border-top: 2px solid transparent;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;l.defaultProps={width:"20px",height:"20px"},n.Z=l},56374:function(e,n,t){var r=t(97458);t(52983);var i=t(56175),l=t(9868);n.Z=e=>{let{size:n=128}=e;return(0,r.jsx)(i.ZP,{width:n,height:1.197*n,position:"relative",children:(0,r.jsx)(l.Z,{width:n,height:1.197*n,src:"https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif",alt:"pancake-3d-spinner"})})}},49493:function(e,n,t){var r=t(97458);t(52983);var i=t(91204);n.Z=e=>(0,r.jsx)(i.Z,{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 00-.7 0z"})})},13882:function(e,n,t){var r=t(97458);t(52983);var i=t(91204);n.Z=e=>(0,r.jsxs)(i.Z,{viewBox:"0 0 96 96",...e,children:[(0,r.jsx)("circle",{cx:"48",cy:"48",r:"48",fill:"#F0B90B"}),(0,r.jsx)("path",{d:"M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z",fill:"white"})]})},75765:function(e,n,t){var r=t(97458);t(52983);var i=t(91204);n.Z=e=>(0,r.jsx)(i.Z,{viewBox:"0 0 24 25",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"})})},68657:function(e,n,t){t.d(n,{E:function(){return c}});var r=t(97458),i=t(18846),l=t.n(i),o=t(52983),s=t(3411),a=t(56175);let c=(0,o.memo)(e=>{let{chainId:n,width:t=24,height:i=24,...o}=e,c=n?(0,r.jsx)(l(),{alt:`chain-${n}`,style:{maxHeight:`${i}px`},src:`https://assets.pancakeswap.finance/web/chains/${n}.png`,width:t,height:i,unoptimized:!0}):(0,r.jsx)(s.Z,{width:t,height:i});return(0,r.jsx)(a.ZP,{...o,children:c})})},66130:function(e,n,t){t.d(n,{X:function(){return CurrencyLogo}});var r=t(97458),i=t(80332),l=t(52983),o=t(62656),s=t(13729),a=t(5675),c=t(45900),d=t(13882),u=t(84093);let p=(0,o.zo)(c.Z)`
  width: ${e=>{let{size:n}=e;return n}};
  height: ${e=>{let{size:n}=e;return n}};
  border-radius: 50%;

  ${s.Dh}
`;function CurrencyLogo(e){var n;let{currency:t,size:o="24px",style:s,useTrustWalletUrl:c,...x}=e,h=(0,a.ai)(null==t?void 0:t.logoURI),f=(0,l.useMemo)(()=>{if(null==t?void 0:t.isNative)return[];if(null==t?void 0:t.isToken){let e=(0,u.Ne)(t,{useTrustWallet:c});return(null==t?void 0:t.logoURI)?[...h,...e]:[...e]}return[]},[t,h,c]);return(null==t?void 0:t.isNative)?t.chainId===i.a_.BSC?(0,r.jsx)(d.Z,{width:o,style:s,...x}):(0,r.jsx)(p,{size:o,srcs:[`https://assets.pancakeswap.finance/web/native/${t.chainId}.png`],width:o,style:s,...x}):(0,r.jsx)(p,{size:o,srcs:f,alt:`${null!==(n=null==t?void 0:t.symbol)&&void 0!==n?n:"token"} logo`,style:s,...x})}},46351:function(e,n,t){t.d(n,{g:function(){return DoubleCurrencyLogo}});var r=t(97458),i=t(62656),l=t(66130);let o=i.zo.div`
  display: flex;
  flex-direction: row;
  margin-right: ${e=>{let{margin:n}=e;return n&&"4px"}};
`;function DoubleCurrencyLogo(e){let{currency0:n,currency1:t,size:i=20,margin:s=!1}=e;return(0,r.jsxs)(o,{margin:s,children:[n&&(0,r.jsx)(l.X,{currency:n,size:`${i.toString()}px`,style:{marginRight:"4px"}}),t&&(0,r.jsx)(l.X,{currency:t,size:`${i.toString()}px`})]})}},91627:function(e,n,t){t.d(n,{Xw:function(){return r.X},ge:function(){return i.g}});var r=t(66130),i=t(46351);t(68657),t(84093)},84093:function(e,n,t){t.d(n,{BP:function(){return u},FX:function(){return getTokenListTokenUrl},Ne:function(){return g}});var r=t(80332),i=t(43692),l=t(73643),o=t(67997),s=t.n(o),a=t(56560);let c={[r.a_.BSC]:"smartchain",[r.a_.ETHEREUM]:"ethereum",[r.a_.POLYGON_ZKEVM]:"polygonzkevm",[r.a_.ARBITRUM_ONE]:"arbitrum",[r.a_.ZKSYNC]:"zksync",[r.a_.BASE]:"base",[r.a_.LINEA]:"linea",[r.a_.OPBNB]:"opbnb"},d=s()(e=>e&&c[e.chainId]?`https://assets-cdn.trustwallet.com/blockchains/${c[e.chainId]}/assets/${(0,a.K)(e.address)}/logo.png`:null,e=>`${null==e?void 0:e.chainId}#${null==e?void 0:e.address}`),u=s()((e,n)=>e&&n&&c[n]?`https://assets-cdn.trustwallet.com/blockchains/${c[n]}/assets/${(0,a.K)(e)}/logo.png`:null,(e,n)=>`${n}#${e}`),p={[r.a_.BSC]:"",[r.a_.ETHEREUM]:"eth",[r.a_.POLYGON_ZKEVM]:"polygon-zkevm",[r.a_.ARBITRUM_ONE]:"arbitrum",[r.a_.ZKSYNC]:"zksync",[r.a_.LINEA]:"linea",[r.a_.BASE]:"base",[r.a_.OPBNB]:"opbnb"},getTokenListTokenUrl=e=>Object.keys(p).includes(String(e.chainId))?`https://tokens.pancakeswap.finance/images/${e.chainId===r.a_.BSC?"":`${p[e.chainId]}/`}${e.address}.png`:null,x=[l.ethereumTokens.usdt,l.ethereumTokens.usdc,l.bscTokens.cake,l.ethereumTokens.wbtc,l.ethereumTokens.weth,i.B5[r.a_.BSC],l.bscTokens.busd,l.ethereumTokens.dai].map(e=>{let{symbol:n}=e;return n}),h=s()(e=>f(null==e?void 0:e.symbol),e=>`logoUrls#${null==e?void 0:e.chainId}#${null==e?void 0:e.symbol}`),f=s()(e=>e&&x.includes(e)?`https://tokens.pancakeswap.finance/images/symbol/${e.toLocaleLowerCase()}.png`:void 0,e=>`logoUrls#symbol#${e}`),g=s()(function(e){let{useTrustWallet:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=d(null==e?void 0:e.wrapped),r=e?getTokenListTokenUrl(e.wrapped):null;return[h(e),n?t:void 0,r].filter(e=>!!e)},(e,n)=>{var t;return`logoUrls#${null==e?void 0:e.chainId}#${null==e?void 0:null===(t=e.wrapped)||void 0===t?void 0:t.address}#${n?JSON.stringify(n):""}`})},36570:function(e,n,t){t.d(n,{y:function(){return ApproveModalContent}});var r=t(97458),i=t(19232),l=t(51627),o=t(24216),s=t(56175),a=t(22232),c=t(56374),d=t(39290),u=t(90041);let ApproveModalContent=e=>{let{title:n,isMM:t,isBonus:p}=e,{t:x}=(0,i.Z)(),{targetRef:h,tooltip:f,tooltipVisible:g}=(0,l.Z)((0,r.jsx)(o.Z,{children:x("Pancakeswap AMM includes V3, V2 and stable swap.")}),{placement:"top"});return(0,r.jsxs)(s.ZP,{width:"100%",children:[(0,r.jsx)(s.ZP,{mb:"16px",children:(0,r.jsx)(a.lg,{children:(0,r.jsx)(c.Z,{})})}),(0,r.jsxs)(a.Tz,{gap:"12px",justify:"center",children:[(0,r.jsx)(o.Z,{bold:!0,textAlign:"center",children:n}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(o.Z,{fontSize:"14px",children:x("Swapping thru:")}),t?(0,r.jsx)(o.Z,{ml:"4px",fontSize:"14px",children:x("Pancakeswap MM")}):p?(0,r.jsx)(o.Z,{ml:"4px",fontSize:"14px",children:x("Bonus Route")}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{ml:"4px",fontSize:"14px",color:"textSubtle",ref:h,children:x("Pancakeswap AMM")}),g&&f]})]})]})]})}},29151:function(e,n,t){t.d(n,{p:function(){return ConfirmationModalContent}});var r=t(97458),i=t(62656),l=t(56175);let o=i.zo.div`
  width: 100%;
`;function ConfirmationModalContent(e){let{bottomContent:n,topContent:t}=e;return(0,r.jsxs)(o,{children:[(0,r.jsx)(l.ZP,{children:t()}),(0,r.jsx)(l.ZP,{children:n()})]})}},16634:function(e,n,t){t.d(n,{P:function(){return ConfirmationPendingContent}});var r=t(97458),i=t(19232),l=t(62656),o=t(22232),s=t(56374),a=t(24216);let c=l.zo.div`
  width: 100%;
`,d=(0,l.zo)(o.lg)`
  padding: 24px 0;
`;function ConfirmationPendingContent(e){let{pendingText:n}=e,{t}=(0,i.Z)();return(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{children:(0,r.jsx)(s.Z,{})}),(0,r.jsxs)(o.Tz,{gap:"12px",justify:"center",children:[n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{fontSize:"20px",children:t("Waiting For Confirmation")}),(0,r.jsx)(o.Tz,{gap:"12px",justify:"center",children:(0,r.jsx)(a.Z,{bold:!0,small:!0,textAlign:"center",children:n})})]}):null,(0,r.jsx)(a.Z,{small:!0,color:"textSubtle",textAlign:"center",children:t("Confirm this transaction in your wallet")})]})]})}},89179:function(e,n,t){t.d(n,{n:function(){return ImportList}});var r=t(97458),i=t(19232),l=t(5675),o=t(52983),s=t(62656),a=t(56175),c=t(22232),d=t(28055),u=t(24216),p=t(54562),x=t(72794),h=t(39290),f=t(68490),g=t(57562),m=t(47637);let j=s.zo.div`
  position: relative;
  width: 100%;
`,w=s.zo.div`
  height: 3px;
  width: 3px;
  background-color: ${e=>{let{theme:n}=e;return n.colors.text}};
  border-radius: 50%;
`,Z=(0,s.zo)(a.ZP)`
  width: ${e=>{let{width:n}=e;return null!=n?n:"100%"}};
  padding: ${e=>{let{padding:n}=e;return null!=n?n:"1.25rem"}};
  border: ${e=>{let{border:n}=e;return n}};
  border-radius: ${e=>{let{borderRadius:n}=e;return null!=n?n:"16px"}};
  background-color: ${e=>{let{theme:n}=e;return n.colors.background}};
`;function ImportList(e){let{listURL:n,listLogoURI:t,listName:s,listTokenLength:a,onAddList:v,addError:y}=e,{theme:b}=(0,l.Fg)(),{t:k}=(0,i.Z)(),[C,L]=(0,o.useState)(!1);return(0,r.jsx)(j,{children:(0,r.jsx)(c.Tz,{gap:"md",children:(0,r.jsxs)(c.Tz,{gap:"md",children:[(0,r.jsx)(Z,{width:"370px",padding:"12px 20px",children:(0,r.jsx)(d.m0,{children:(0,r.jsxs)(d.DA,{flexWrap:"nowrap",children:[t&&(0,r.jsx)(m._,{logoURI:t,size:"40px"}),(0,r.jsxs)(c.Tz,{gap:"sm",style:{marginLeft:"20px"},children:[(0,r.jsxs)(d.DA,{children:[(0,r.jsx)(u.Z,{bold:!0,mr:"6px",children:s}),(0,r.jsx)(w,{}),(0,r.jsxs)(u.Z,{small:!0,color:"textSubtle",ml:"6px",children:[a," tokens"]})]}),(0,r.jsx)(p.Z,{style:{width:"100%",overflowX:"scroll"},small:!0,external:!0,ellipsis:!0,href:`https://tokenlists.org/token-list?url=${n}`,children:n})]})]})})}),(0,r.jsx)(x.Z,{variant:"danger",children:(0,r.jsxs)(h.Z,{flexDirection:"column",children:[(0,r.jsx)(u.Z,{fontSize:"20px",textAlign:"center",color:b.colors.failure,mb:"16px",children:k("Import at your own risk")}),(0,r.jsx)(u.Z,{color:b.colors.failure,mb:"8px",children:k("By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.")}),(0,r.jsx)(u.Z,{bold:!0,color:b.colors.failure,mb:"16px",children:k("If you purchase a token from this list, you may not be able to sell it back.")}),(0,r.jsxs)(h.Z,{alignItems:"center",children:[(0,r.jsx)(f.Z,{name:"confirmed",type:"checkbox",checked:C,onChange:()=>L(!C),scale:"sm"}),(0,r.jsx)(u.Z,{ml:"10px",style:{userSelect:"none"},children:k("I understand")})]})]})}),(0,r.jsx)(g.Z,{disabled:!C,onClick:v,children:k("Import")}),y?(0,r.jsx)(u.Z,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:y}):null]})})})}},89803:function(e,n,t){t.d(n,{v:function(){return InfoBox}});var r=t(97458),i=t(22232),l=t(24216);function InfoBox(e){let{message:n,icon:t}=e;return(0,r.jsxs)(i.lg,{style:{height:"100%",justifyContent:"center"},children:[t,n&&(0,r.jsx)(l.Z,{pt:"4px",textAlign:"center",fontSize:"20px",bold:!0,children:n})]})}},47637:function(e,n,t){t.d(n,{_:function(){return ListLogo}});var r=t(97458),i=t(62656),l=t(5675),o=t(45900);let s=(0,i.zo)(o.Z)`
  width: ${e=>{let{size:n}=e;return n}};
  height: ${e=>{let{size:n}=e;return n}};
`;function ListLogo(e){let{logoURI:n,style:t,size:i="24px",alt:o}=e,a=(0,l.ai)(n);return(0,r.jsx)(s,{alt:o,size:i,srcs:a,style:t})}},71130:function(e,n,t){t.d(n,{$:function(){return c}});var r=t(97458),i=t(14517),l=t(52983),o=t(19232),s=t(92631);let a=RegExp("^\\d*(?:\\\\[.])?\\d*$"),c=(0,l.memo)(function(e){let{value:n,onUserInput:t,placeholder:l,error:c,align:d,className:u,loading:p,...x}=e,enforcer=e=>{(""===e||a.test(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")))&&t(e)},{t:h}=(0,o.Z)();return(0,r.jsx)("input",{className:(0,i.default)(u,s.inputVariants({error:c,align:d,loading:p})),...x,value:n,onChange:e=>{enforcer(e.target.value.replace(/,/g,"."))},inputMode:"decimal",title:h("Token Amount"),autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:l||"0.0",minLength:1,maxLength:79,spellCheck:"false"})})},87983:function(e,n,t){t.d(n,{F:function(){return SwapPendingModalContent}});var r=t(97458),i=t(56175),l=t(15317),o=t(22232),s=t(56374),a=t(24216),c=t(39290),d=t(17884),u=t(91627),swap_TokenTransferInfo=e=>{let{symbolA:n,symbolB:t,amountA:l,amountB:o,currencyA:s,currencyB:p}=e;return(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z,{mr:"4px",fontSize:"14px",children:`${l} ${n}`}),(0,r.jsx)(u.Xw,{size:"20px",currency:s})]}),(0,r.jsx)(i.ZP,{m:"0 8px",children:(0,r.jsx)(d.Z,{color:"textSubtle"})}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z,{mr:"4px",fontSize:"14px",children:`${o} ${t}`}),(0,r.jsx)(u.Xw,{size:"20px",currency:p})]})]})};let SwapPendingModalContent=e=>{let{title:n,showIcon:t,currencyA:c,currencyB:d,amountA:u,amountB:p,children:x}=e,h=null==c?void 0:c.symbol,f=null==d?void 0:d.symbol;return(0,r.jsxs)(i.ZP,{width:"100%",children:[t?(0,r.jsx)(i.ZP,{margin:"auto auto 36px auto",width:"fit-content",children:(0,r.jsx)(l.Z,{color:"success",width:80,height:80})}):(0,r.jsx)(i.ZP,{mb:"16px",children:(0,r.jsx)(o.lg,{children:(0,r.jsx)(s.Z,{})})}),(0,r.jsxs)(o.Tz,{gap:"12px",justify:"center",children:[(0,r.jsx)(a.Z,{bold:!0,textAlign:"center",children:n}),(0,r.jsx)(swap_TokenTransferInfo,{symbolA:h,symbolB:f,amountA:u,amountB:p,currencyA:c,currencyB:d}),x]})]})}},98502:function(e,n,t){t.d(n,{a:function(){return SwapTransactionReceiptModalContent}});var r=t(97458),i=t(19232),l=t(56175),o=t(5503),s=t(22232),a=t(24216);let SwapTransactionReceiptModalContent=e=>{let{children:n}=e,{t}=(0,i.Z)();return(0,r.jsxs)(l.ZP,{width:"100%",children:[(0,r.jsx)(l.ZP,{margin:"auto auto 36px auto",width:"fit-content",children:(0,r.jsx)(o.Z,{color:"success",width:80,height:80})}),(0,r.jsxs)(s.Tz,{gap:"12px",justify:"center",children:[(0,r.jsx)(a.Z,{bold:!0,textAlign:"center",children:t("Transaction receipt")}),n]})]})}},49671:function(e,n,t){t.d(n,{M:function(){return TokenRowButton}});var r=t(97458),i=t(62656),l=t(19232),o=t(5503),s=t(37939),a=t(57562),c=t(28055),d=t(24216);let u=(0,i.zo)(o.Z)`
  height: 16px;
  width: 16px;
  margin-right: 6px;
  stroke: ${e=>{let{theme:n}=e;return n.colors.success}};
`;function TokenRowButton(e){let{token:n,isActive:t,isAdded:i,setImportToken:o,showImportView:p}=e,{t:x}=(0,l.Z)(),{isMobile:h}=(0,s.Z)();return t||i?(0,r.jsxs)(c.DA,{style:{minWidth:"fit-content"},children:[(0,r.jsx)(u,{}),(0,r.jsx)(d.Z,{color:"success",children:"Active"})]}):(0,r.jsx)(a.Z,{scale:h?"sm":"md",width:"fit-content",onClick:()=>{o&&o(n),p()},children:x("Import")})}},55952:function(e,n,t){t.d(n,{h:function(){return TransactionErrorContent}});var r=t(97458),i=t(19232),l=t(62656),o=t(22232),s=t(32536),a=t(24216),c=t(39290),d=t(57562);let u=l.zo.div`
  width: 100%;
`;function TransactionErrorContent(e){let{message:n,onDismiss:t}=e,{t:l}=(0,i.Z)();return(0,r.jsxs)(u,{children:[(0,r.jsxs)(o.Tz,{justify:"center",children:[(0,r.jsx)(s.Z,{color:"failure",width:"64px"}),(0,r.jsx)(a.Z,{color:"failure",style:{textAlign:"center",width:"85%",wordBreak:"break-word"},children:n})]}),t?(0,r.jsx)(c.Z,{justifyContent:"center",pt:"24px",children:(0,r.jsx)(d.Z,{onClick:t,children:l("Dismiss")})}):null]})}},71674:function(e,n,t){t.d(n,{HY:function(){return r}});var r={};t.r(r),t.d(r,{EJ:function(){return f},Cy:function(){return m},oz:function(){return g},tP:function(){return CurrencyInputPanel},$_:function(){return y},kI:function(){return SwapInfo},P1:function(){return SwapInfoLabel},T3:function(){return SwapPage},U3:function(){return SwitchButton},zB:function(){return TradePrice}}),t(44280),t(89179),t(47637);var i=t(71130),l=t(97458),o=t(62656);o.zo.div`
  background-color: ${e=>{let{theme:n}=e;return`${n.colors.failure33}`}};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${e=>{let{theme:n}=e;return n.colors.failure}};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`,o.zo.div`
  background-color: ${e=>{let{theme:n}=e;return`${n.colors.failure33}`}};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;var s=t(51296),a=t(41125),c=t(49493),d=t(86588),u=t(92631),p=t(24216);function CurrencyInputPanel(e){let{value:n,onUserInput:t,onInputBlur:r,top:o,bottom:s,id:a,disabled:c,error:x,loading:h,showBridgeWarning:f}=e;return(0,l.jsxs)(d.p,{position:"relative",id:a,display:"grid",gap:"4px",children:[(0,l.jsx)(d.p,{display:"flex",alignItems:"center",justifyContent:"space-between",children:o}),(0,l.jsxs)(d.p,{display:"flex",flexDirection:"column",flexWrap:"nowrap",position:"relative",backgroundColor:"backgroundAlt",zIndex:"1",children:[(0,l.jsxs)(d.p,{as:"label",className:u.inputContainerVariants({showBridgeWarning:!!f,error:!!x}),children:[(0,l.jsx)(d.p,{display:"flex",flexDirection:"row",flexWrap:"nowrap",color:"text",fontSize:"12px",lineHeight:"16px",px:"16px",pt:"12px",children:(0,l.jsx)(i.$,{error:!!x,disabled:c,loading:h,className:"token-amount-input",value:n,onBlur:r,onUserInput:e=>{t(e)}})}),s]}),x?(0,l.jsx)(p.Z,{pb:"8px",fontSize:"12px",color:"red",children:x}):null,c&&(0,l.jsx)(d.p,{role:"presentation",position:"absolute",inset:"0px",backgroundColor:"backgroundAlt",opacity:"0.6"})]})]})}var x=t(52983),h=t(83229);let f=(0,x.memo)(e=>{let{title:n,subtitle:t}=e;return(0,l.jsxs)(d.p,{width:"100%",alignItems:"center",flexDirection:"column",padding:"24px",borderBottom:"1",children:[(0,l.jsx)(d.p,{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",children:n}),t]})}),g=(0,x.memo)(e=>{let{children:n}=e;return(0,l.jsx)(h.Z,{as:"h2",children:n})}),m=(0,x.memo)(e=>{let{children:n}=e;return(0,l.jsx)(p.Z,{color:"textSubtle",fontSize:"14px",textAlign:"center",children:n})});var j=t(19232),w=t(39290),Z=t(9868);let v=o.zo.div`
  width: 100%;
  height: ${e=>{let{$isSide:n}=e;return n?"100%":"auto"}};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  padding-right: ${e=>{let{$isSide:n}=e;return n?"32px":"0px"}};
  ${e=>{let{theme:n}=e;return n.mediaQueries.md}} {
    justify-content: space-between;
    flex-direction: ${e=>{let{$isSide:n}=e;return n?"column":"row"}};
  }
`;(0,o.zo)(w.Z)`
  svg {
    fill: ${e=>{let{theme:n}=e;return n.colors.textSubtle}};
    transition: background-color 0.2s, opacity 0.2s;
  }
  &:hover {
    svg {
      opacity: 0.65;
    }
  }
  &:active {
    svg {
      opacity: 0.85;
    }
  }
`;let y=(0,x.memo)(e=>{let{variant:n="default",helpUrl:t,externalText:r,externalLinkUrl:i,helpImage:o=(0,l.jsx)(Z.Z,{src:"https://cdn.pancakeswap.com/help/help.png",alt:"Get some help",width:160,height:108})}=e,{t:s}=(0,j.Z)();return(0,l.jsx)(v,{$isSide:"side"===n})}),SwapPage=e=>{let{removePadding:n,noMinHeight:t,children:r,hideFooterOnDesktop:i,helpUrl:o,helpImage:s,externalText:a,externalLinkUrl:c,...p}=e;return(0,l.jsxs)(d.p,{className:u.pageVariants({removePadding:n,noMinHeight:t}),...p,children:[r,(0,l.jsx)(d.p,{display:"flex",flexGrow:1}),(0,l.jsx)(d.p,{display:["block",null,null,i?"none":"block"],width:"100%",children:(0,l.jsx)(y,{externalText:a,externalLinkUrl:c,helpUrl:o,helpImage:s})})]})};var b=t(5675),k=t(22232),C=t(28055);let SwapInfoLabel=e=>(0,l.jsx)(p.Z,{fontSize:"12px",bold:!0,color:"secondary",...e}),SwapInfo=e=>{let{allowedSlippage:n,price:t,onSlippageClick:r,allowedSlippageSlot:i}=e,{t:o}=(0,j.Z)(),s=(0,b.tm)();return(0,l.jsxs)(k.Tz,{gap:"sm",py:"0px",px:"16px",children:[(0,l.jsx)(C.m0,{alignItems:"center",children:t}),"number"==typeof n&&(0,l.jsxs)(C.m0,{style:{cursor:"pointer"},alignItems:"center",children:[(0,l.jsx)(SwapInfoLabel,{onClick:r,children:o("Slippage Tolerance")}),s&&(null!=i?i:(0,l.jsxs)(p.Z,{bold:!0,color:"primary",onClick:r,children:[n/100,"%"]}))]})]})};var L=t(55221),z=t(75765),$=t(78191),S=t(42059);function TradePrice(e){var n,t,r,i;let{price:o,loading:s}=e,[a,c]=(0,x.useState)(!1),h=a?(0,L.T4)(o,6):(0,L.T4)(null==o?void 0:o.invert(),6),f=!!((null==o?void 0:o.baseCurrency)&&(null==o?void 0:o.quoteCurrency));return(0,l.jsx)(p.Z,{fontSize:"14px",style:{justifyContent:"center",alignItems:"center",display:"flex",opacity:s?.6:1},children:f?(0,l.jsxs)(l.Fragment,{children:[`1 ${a?null==o?void 0:null===(n=o.baseCurrency)||void 0===n?void 0:n.symbol:null==o?void 0:null===(t=o.quoteCurrency)||void 0===t?void 0:t.symbol}`,(0,l.jsx)(z.Z,{width:"14px",height:"14px",color:"textSubtle",ml:"4px",mr:"4px"}),`${h} ${a?null==o?void 0:null===(r=o.quoteCurrency)||void 0===r?void 0:r.symbol:null==o?void 0:null===(i=o.baseCurrency)||void 0===i?void 0:i.symbol}`,s?(0,l.jsx)(d.p,{className:u.iconButtonClass,children:(0,l.jsx)($.Z,{width:"12px",height:"12px"})}):(0,l.jsx)(d.p,{role:"button",className:u.iconButtonClass,onClick:()=>c(!a),children:(0,l.jsx)(S.Z,{width:"14px"})})]}):"-"})}let I=(0,o.zo)(s.Z)`
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  .icon-up-down {
    display: none;
  }
  &:hover {
    background-color: ${e=>{let{theme:n}=e;return n.colors.primary}};
    .icon-down {
      display: none;
      fill: white;
    }
    .icon-up-down {
      display: block;
      fill: white;
    }
  }
`,SwitchButton=e=>(0,l.jsxs)(I,{variant:"light",scale:"sm",...e,children:[(0,l.jsx)(a.Z,{className:"icon-down",color:"primary"}),(0,l.jsx)(c.Z,{className:"icon-up-down",color:"primary"})]});t(55952),t(29151),t(16634),t(27502),t(49671),t(36570),t(87983),t(98502),t(89803)},27502:function(e,n,t){t.d(n,{D:function(){return withCurrencyLogo}});var r=t(97458),i=t(19232),l=t(62656),o=t(39290),s=t(37939),a=t(57562),c=t(22232),d=t(28055),u=t(24216),p=t(47637);let x=l.zo.div`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto;
  grid-gap: 10px;
  align-items: center;

  opacity: ${e=>{let{dim:n}=e;return n?"0.4":"1"}};

  ${e=>{let{theme:n}=e;return n.mediaQueries.md}} {
    grid-gap: 16px;
  }
`,h=(0,l.zo)(o.Z)`
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
  text-overflow: ellipsis;
  max-width: 210px;
  gap: 8px;
`;function withCurrencyLogo(e){return n=>{let{token:t,style:l,dim:o,onCurrencySelect:f,list:g,isActive:m,children:j}=n,{t:w}=(0,i.Z)(),{isMobile:Z}=(0,s.Z)();return(0,r.jsxs)(x,{style:l,variant:"text",as:m&&f?a.Z:"a",onClick:()=>{m&&(null==f||f(t))},children:[(0,r.jsx)(e,{currency:t,size:Z?"20px":"24px",style:{opacity:o?"0.6":"1"}}),(0,r.jsxs)(c.Tz,{gap:"4px",style:{opacity:o?"0.6":"1"},children:[(0,r.jsx)(d.BA,{children:(0,r.jsxs)(h,{title:t.name,children:[t.symbol,(0,r.jsx)(u.Z,{ellipsis:!0,color:"textDisabled",fontSize:"12px",children:t.name})]})}),g&&g.logoURI&&(0,r.jsxs)(d.DA,{children:[(0,r.jsxs)(u.Z,{fontSize:Z?"10px":"14px",mr:"4px",color:"textSubtle",children:[w("via")," ",g.name]}),(0,r.jsx)(p._,{logoURI:g.logoURI,size:"12px"})]})]}),j]})}}}}]);
//# sourceMappingURL=7322-41bbe38f25a5b983.js.map