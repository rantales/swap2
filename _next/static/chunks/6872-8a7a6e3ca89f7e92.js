"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6872],{98672:function(e,o,t){t.d(o,{H:function(){return getTokenInfoPath},q:function(){return getChainName}});var a=t(80332),r=t(54276),n=t(6533),l=t(4841);function getTokenInfoPath(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.A.V3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return`/info${t===l.A.V3?"/v3":""}${n.Dw[e]}/tokens/${o}?chain=${r.MS[e]}${a.replace("?","&")}`}function getChainName(e){switch(e){case a.a_.BSC:return"BSC";case a.a_.ETHEREUM:return"ETH";default:return"BSC"}}},87482:function(e,o,t){t.d(o,{Em:function(){return l},Lr:function(){return n},Mp:function(){return u},Tb:function(){return i},ew:function(){return r},ir:function(){return d},og:function(){return m},qX:function(){return c},uv:function(){return s}});var a=t(80332);let r="info/v3",n={[a.a_.ETHEREUM]:["0x86d257cDB7bC9c0dF10E84C8709697F92770b335","0xf8DBD52488978a79DfE6ffBd81A01Fc5948bF9eE","0x8Fe8D9bb8Eeba3Ed688069c3D6b556C9ca258248","0xA850478aDAACe4c08fc61DE44d8CF3b64f359bEc","0x277667eB3e34f134adf870be9550E9f323d0dc24","0x8c0411F2ad5470A66cb2E9C64536CFb8dcD54d51","0x055284A4CA6532ECc219Ac06b577D540C686669d","0xB078BF211E330b5F95B7114AE845188CC36B795D","0x7778797342652bd27B365962Ffc7f6eCE356EB57","0xe9825d867e3BeF05223bDA609fA8aB89AeF93797"],[a.a_.BSC]:["0x87196a3BCeC98116307bdc8B887c3074E8b5bc96","0x4b2C510Fe0b6a50D117220cd6D66a9C714C83dFb","0xf0b579380cA08e75441DC73c2Da9f27CE23725F2","0x9829f916C617e1b269b410dfD84c7F22ad479417","0x9829f916C617e1b269b410dfD84c7F22ad479417","0xA0E4442DC4aDDba0A57be757fbb802b48BA8051C","0xBAdBEdaFe2cA7318a25B665bfA307e91A3EEb88d","0xa7619D726F619062d2d2BCAdbb2ee1FB1952d6d7","0x5FB5EB2c8Ecbf712115007990C70B79F6B256f9b"]},l={[a.a_.ETHEREUM]:["0xD46bA6D942050d489DBd938a2C909A5d5039A161","0x7dFB72A2AAd08C937706f21421B15bFC34Cba9ca","0x12B32f10A499Bf40Db334Efe04226Cca00Bf2D9B","0x160dE4468586B6B2F8a92FEB0c260Fc6cFC743B1","0xD84787a01B0cad89fBCa231E6960cC0f3f18df34","0xdb19f2052D2B1aD46Ed98C66336A5dAADEB13005"],[a.a_.BSC]:["0xdb19f2052D2B1aD46Ed98C66336A5dAADEB13005","0x57a63C32CC2aD6CE4FBE5423d548D12d0EEDdfc1"]},s={DAY:"day",WEEK:"week",MONTH:"month"},i=3600,d=86400,u={[a.a_.BSC]:26956207,[a.a_.ETHEREUM]:16950686,[a.a_.POLYGON_ZKEVM]:750149,[a.a_.ZKSYNC]:8639214,[a.a_.ARBITRUM_ONE]:101028949,[a.a_.LINEA]:1444,[a.a_.BASE]:2912007,[a.a_.OPBNB]:1721753},c=50,m={day:i,week:d,month:d,year:d}},16872:function(e,o,t){t.d(o,{Eo:function(){return usePairPriceChartTokenData},lR:function(){return usePoolChartData},CU:function(){return usePoolData},j8:function(){return usePoolTransactions},R6:function(){return usePoolsData},CN:function(){return usePoolsForToken},B5:function(){return useProtocolChartData},rf:function(){return useProtocolData},Gx:function(){return useProtocolTransactionData},sk:function(){return useSearchData},ku:function(){return useTokenChartData},Ws:function(){return useTokenData},Q4:function(){return useTokenPriceData},Vq:function(){return useTokenTransactions},xu:function(){return useTokensData},TJ:function(){return useTopPoolsData},oe:function(){return useTopTokensData}});var a=t(27860),r=t.n(a),n=t(52983),l=t(6533),s=t(33740),i=t(98672),d=t(91529),u=t(58833),c=t(77744),m=t(30989),p=t(87482),k=t(97269),D=t(93132),v=t.n(D),y=t(68591),f=t.n(y),S=t(13138);r().extend(v()),r().extend(f());let h=S.gql`
  query poolDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
    poolDayDatas(
      first: 1000
      skip: $skip
      where: { pool: $address, date_gt: $startTime }
      orderBy: date
      orderDirection: asc
    ) {
      date
      volumeUSD
      tvlUSD
      feesUSD
      protocolFeesUSD
      pool {
        feeTier
      }
    }
  }
`;async function chartData_fetchPoolChartData(e,o){let t=[],a=r().utc().unix(),n=!1,l=0,s=!1;try{for(;!s;){let a=await o.request(h,{address:e,startTime:1619170975,skip:l});a.poolDayDatas.length>0&&(l+=1e3,(a.poolDayDatas.length<1e3||n)&&(s=!0),a.poolDayDatas&&(t=t.concat(a.poolDayDatas)))}}catch(e){console.error(e),n=!0}if(t){var i,d;let e=t.reduce((e,o)=>{let t=parseInt((o.date/86400).toFixed(0)),a=parseFloat(o.pool.feeTier)/1e4,r=(null==o?void 0:o.volumeUSD)?parseFloat(o.volumeUSD)*a:0;return e[t]={date:o.date,volumeUSD:parseFloat(o.volumeUSD),totalValueLockedUSD:parseFloat(o.tvlUSD)-r,feesUSD:new k.Z(o.feesUSD).minus(o.protocolFeesUSD).toNumber()},e},{}),o=e[parseInt(Object.keys(e)[0])],r=null!==(i=null==o?void 0:o.date)&&void 0!==i?i:1619170975,n=null!==(d=null==o?void 0:o.totalValueLockedUSD)&&void 0!==d?d:0;for(;r<a-86400;){let o=r+86400,t=parseInt((o/86400).toFixed(0));Object.keys(e).includes(t.toString())?n=e[t].totalValueLockedUSD:e[t]={date:o,volumeUSD:0,totalValueLockedUSD:n,feesUSD:0},r=o}let l=Object.keys(e).map(o=>e[parseInt(o)]);return{data:l,error:!1}}return{data:void 0,error:n}}var b=t(58741);let POOLS_BULK=(e,o)=>{let t="[";o.forEach(e=>{t=`${t}"${e}",`}),t+="]";let a=`
    query pools {
      pools(where: {id_in: ${t}},
     ${e?`block: {number: ${e}} ,`:""}
     orderBy: totalValueLockedUSD, orderDirection: desc) {
        id
        feeTier
        liquidity
        sqrtPrice
        tick
        token0 {
            id
            symbol
            name
            decimals
            derivedETH
        }
        token1 {
            id
            symbol
            name
            decimals
            derivedETH
        }
        token0Price
        token1Price
        volumeUSD
        volumeToken0
        volumeToken1
        txCount
        totalValueLockedToken0
        totalValueLockedToken1
        totalValueLockedUSD
        feesUSD
        protocolFeesUSD
      }
      bundles(where: {id: "1"}) {
        ethPriceUSD
      }
    }
    `;return S.gql`
    ${a}
  `};async function poolData_fetchPoolDatas(e,o,t){try{var a,r,n,l;let[s,i,d]=null!=t?t:[],u=await e.request(POOLS_BULK(void 0,o)),c=await e.request(POOLS_BULK(null==s?void 0:s.number,o)),m=await e.request(POOLS_BULK(null==i?void 0:i.number,o)),p=await e.request(POOLS_BULK(null==d?void 0:d.number,o)),D=(null==u?void 0:null===(r=u.bundles)||void 0===r?void 0:null===(a=r[0])||void 0===a?void 0:a.ethPriceUSD)?parseFloat(null==u?void 0:null===(l=u.bundles)||void 0===l?void 0:null===(n=l[0])||void 0===n?void 0:n.ethPriceUSD):0,v=(null==u?void 0:u.pools)?u.pools.reduce((e,o)=>(e[o.id]=o,e),{}):{},y=(null==c?void 0:c.pools)?c.pools.reduce((e,o)=>(e[o.id]=o,e),{}):{},f=(null==m?void 0:m.pools)?m.pools.reduce((e,o)=>(e[o.id]=o,e),{}):{},S=(null==p?void 0:p.pools)?p.pools.reduce((e,o)=>(e[o.id]=o,e),{}):{},h=o.reduce((e,o)=>{let t=v[o],a=y[o],r=f[o],n=S[o],[l,s]=t&&a&&r?(0,b.P)(t.volumeUSD,a.volumeUSD,r.volumeUSD):t?[parseFloat(t.volumeUSD),0]:[0,0],i=t&&n?parseFloat(t.volumeUSD)-parseFloat(n.volumeUSD):t?parseFloat(t.volumeUSD):0,d=t&&a?new k.Z(null==t?void 0:t.feesUSD).minus(null==t?void 0:t.protocolFeesUSD).minus(new k.Z(null==a?void 0:a.feesUSD).minus(null==a?void 0:a.protocolFeesUSD)):new k.Z(null==t?void 0:t.feesUSD).minus(null==t?void 0:t.protocolFeesUSD),u=t?parseFloat(t.totalValueLockedToken0):0,c=t?parseFloat(t.totalValueLockedToken1):0,m=t?parseFloat(t.totalValueLockedUSD):0,p=t&&a?(parseFloat(t.totalValueLockedUSD)-parseFloat(a.totalValueLockedUSD))/parseFloat("0"===a.totalValueLockedUSD?"1":a.totalValueLockedUSD)*100:0,h=t?u*parseFloat(t.token0.derivedETH)*D+c*parseFloat(t.token1.derivedETH)*D:void 0;h&&(m=h);let U=t?parseInt(t.feeTier):0;return t&&(e[o]={address:o,feeTier:U,liquidity:parseFloat(t.liquidity),sqrtPrice:parseFloat(t.sqrtPrice),tick:parseFloat(t.tick),token0:{address:t.token0.id,name:t.token0.name,symbol:t.token0.symbol,decimals:parseInt(t.token0.decimals),derivedETH:parseFloat(t.token0.derivedETH)},token1:{address:t.token1.id,name:t.token1.name,symbol:t.token1.symbol,decimals:parseInt(t.token1.decimals),derivedETH:parseFloat(t.token1.derivedETH)},token0Price:parseFloat(t.token0Price),token1Price:parseFloat(t.token1Price),volumeUSD:l,volumeUSDChange:s,volumeUSDWeek:i,tvlUSD:m,tvlUSDChange:p,tvlToken0:u,tvlToken1:c,feeUSD:d.toNumber()}),e},{});return{error:!1,data:h}}catch(e){return console.error(e),{error:!0,data:void 0}}}t(64038),t(43692),S.gql`
  query pool($poolAddress: ID!) {
    pool(id: $poolAddress) {
      tick
      token0 {
        symbol
        id
        decimals
      }
      token1 {
        symbol
        id
        decimals
      }
      feeTier
      sqrtPrice
      liquidity
    }
  }
`;var U=t(42735);let F=S.gql`
  query topPools {
    pools(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
    }
  }
`;async function topPools_fetchTopPoolAddresses(e,o){try{let t=await e.request(F,{client:e,fetchPolicy:"cache-first"}),a=t?t.pools.map(e=>{var t;if(null===p.Lr||void 0===p.Lr||null===(t=p.Lr[o])||void 0===t||!t.includes(e.id.toLocaleLowerCase()))return e.id}).filter(e=>!(0,U.Z)(e)):void 0;return{error:!1,addresses:a}}catch(e){return console.error(e),{error:!1,addresses:void 0}}}var T=t(36073);let P=S.gql`
  query transactions($address: String) {
    mints(first: 100, orderBy: timestamp, orderDirection: desc, where: { pool: $address }) {
      timestamp
      transaction {
        id
      }

      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      owner
      sender
      origin
      amount0
      amount1
      amountUSD
    }
    swaps(first: 100, orderBy: timestamp, orderDirection: desc, where: { pool: $address }) {
      timestamp
      transaction {
        id
      }
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      origin
      amount0
      amount1
      amountUSD
    }
    burns(first: 100, orderBy: timestamp, orderDirection: desc, where: { pool: $address }) {
      timestamp
      transaction {
        id
      }
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      owner
      origin
      amount0
      amount1
      amountUSD
    }
  }
`;async function fetchPoolTransactions(e,o){try{let t=await o.request(P,{address:e}),a=t.mints.map(e=>({type:T.i.MINT,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),r=t.burns.map(e=>({type:T.i.BURN,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),n=t.swaps.map(e=>({type:T.i.SWAP,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}));return{data:[...a,...r,...n],error:!1}}catch(e){return console.error(e),{data:void 0,error:!0}}}t(80332),r().extend(v()),r().extend(f());let g=S.gql`
  query pancakeDayDatas($startTime: Int!, $skip: Int!) {
    pancakeDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {
      id
      date
      volumeUSD
      tvlUSD
    }
  }
`;async function fetchChartData(e){let o=[],t=r().utc().unix(),a=!1;try{let t=await e.request(g,{startTime:1619170975,skip:0});o=t.pancakeDayDatas}catch{a=!0}if(o){var n,l;let e=o.reduce((e,o)=>{let t=parseInt((o.date/86400).toFixed(0));return e[t]={date:o.date,volumeUSD:parseFloat(o.volumeUSD),tvlUSD:parseFloat(o.tvlUSD)},e},{}),a=e[parseInt(Object.keys(e)[0])],r=null!==(n=null==a?void 0:a.date)&&void 0!==n?n:1619170975,s=null!==(l=null==a?void 0:a.tvlUSD)&&void 0!==l?l:0;for(;r<t-86400;){let o=r+86400,t=parseInt((o/86400).toFixed(0));Object.keys(e).includes(t.toString())?s=e[t].tvlUSD:e[t]={date:o,volumeUSD:0,tvlUSD:s},r=o}return{data:Object.values(e),error:!1}}return{data:void 0,error:a}}let GLOBAL_DATA=e=>{let o=` query pancakeFactories {
      factories(
       ${void 0!==e?`block: { number: ${e}}`:""} 
       first: 1) {
        txCount
        totalVolumeUSD
        totalFeesUSD
        totalValueLockedUSD
        totalProtocolFeesUSD
      }
    }`;return S.gql`
    ${o}
  `};async function fetchProtocolData(e,o){try{var t,a,r,n,l;let[s,i]=null!=o?o:[],d=await e.request(GLOBAL_DATA()),u=await e.request(GLOBAL_DATA(null!==(n=null==s?void 0:s.number)&&void 0!==n?n:0)),c=await e.request(GLOBAL_DATA(null!==(l=null==i?void 0:i.number)&&void 0!==l?l:0)),m=null==d?void 0:null===(t=d.factories)||void 0===t?void 0:t[0],p=null==u?void 0:null===(a=u.factories)||void 0===a?void 0:a[0],D=null==c?void 0:null===(r=c.factories)||void 0===r?void 0:r[0],v=m&&p?parseFloat(m.totalVolumeUSD)-parseFloat(p.totalVolumeUSD):parseFloat(m.totalVolumeUSD),y=(null==p?void 0:p.totalVolumeUSD)&&(null==D?void 0:D.totalVolumeUSD)?parseFloat(p.totalVolumeUSD)-parseFloat(D.totalVolumeUSD):void 0,f=v&&y?(v-y)/y*100:0,S=(0,b.Y)(null==m?void 0:m.totalValueLockedUSD,null==p?void 0:p.totalValueLockedUSD),h=m&&p?parseFloat(m.txCount)-parseFloat(p.txCount):parseFloat(m.txCount),U=p&&D?parseFloat(p.txCount)-parseFloat(D.txCount):void 0,F=h&&U?(0,b.Y)(h.toString(),U.toString()):0,T=p&&D?new k.Z(p.totalFeesUSD).minus(p.totalProtocolFeesUSD).minus(new k.Z(D.totalFeesUSD).minus(D.totalProtocolFeesUSD)):void 0,P=m&&p?new k.Z(m.totalFeesUSD).minus(m.totalProtocolFeesUSD).minus(new k.Z(p.totalFeesUSD).minus(p.totalProtocolFeesUSD)):new k.Z(m.totalFeesUSD).minus(m.totalProtocolFeesUSD),g=P&&T?(0,b.Y)(P.toString(),T.toString()):0,$={volumeUSD:v,volumeUSDChange:"number"==typeof f?f:0,tvlUSD:parseFloat(null==m?void 0:m.totalValueLockedUSD),tvlUSDChange:S,feesUSD:P.toNumber(),feeChange:g,txCount:h,txCountChange:F};return{error:!1,data:$}}catch(e){return console.error(e),{error:!1,data:void 0}}}let $=S.gql`
  query transactions {
    transactions(first: 500, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      mints {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
        owner
        sender
        origin
        amount0
        amount1
        amountUSD
      }
      swaps {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
        origin
        amount0
        amount1
        amountUSD
      }
      burns {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
        owner
        origin
        amount0
        amount1
        amountUSD
      }
    }
  }
`;async function fetchTopTransactions(e){try{let o=await e.request($);if(!o)return;let t=o.transactions.reduce((e,o)=>{let t=o.mints.map(e=>({type:T.i.MINT,hash:o.id,timestamp:o.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),a=o.burns.map(e=>({type:T.i.BURN,hash:o.id,timestamp:o.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),r=o.swaps.map(e=>({hash:o.id,type:T.i.SWAP,timestamp:o.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}));return e=[...e,...t,...a,...r]},[]);return t}catch{return}}var w=t(37528),A=t(18624);let ETH_PRICES=(e,o,t)=>{let a=e?`oneDay: bundles(first: 1, block: { number: ${e} }) {
      ethPriceUSD
    }`:"",r=o?`twoDay: bundles(first: 1, block: { number: ${o} }) {
      ethPriceUSD
    }`:"",n=t?`oneWeek: bundles(first: 1, block: { number: ${t} }) {
      ethPriceUSD
    }`:"",l=`
  query prices {
    current: bundles(first: 1) {
      ethPriceUSD
    }
    ${a}
    ${r}
    ${n}
  }
`;return S.gql`
    ${l}
  `};async function fetchEthPrices(e,o){try{let[m,p,k]=null!=o?o:[],D=await e.request(ETH_PRICES(null==m?void 0:m.number,null==p?void 0:p.number,null==k?void 0:k.number));if(D){var t,a,r,n,l,s,i,d,u,c;return{data:{current:parseFloat(null!==(i=D.current[0].ethPriceUSD)&&void 0!==i?i:"0"),oneDay:parseFloat(null!==(d=null==D?void 0:null===(a=D.oneDay)||void 0===a?void 0:null===(t=a[0])||void 0===t?void 0:t.ethPriceUSD)&&void 0!==d?d:"0"),twoDay:parseFloat(null!==(u=null==D?void 0:null===(n=D.twoDay)||void 0===n?void 0:null===(r=n[0])||void 0===r?void 0:r.ethPriceUSD)&&void 0!==u?u:"0"),week:parseFloat(null!==(c=null==D?void 0:null===(s=D.oneWeek)||void 0===s?void 0:null===(l=s[0])||void 0===l?void 0:l.ethPriceUSD)&&void 0!==c?c:"0")},error:!1}}return{data:void 0,error:!0}}catch(e){return console.error(e),{data:void 0,error:!0}}}let TOKENS_BULK=(e,o)=>{let t="[";o.forEach(e=>{t=`${t}"${e}",`}),t+="]";let a=`
    query tokens {
      tokens(where: {id_in: ${t}},
    ${e?`block: {number: ${e}} ,`:""}
     orderBy: totalValueLockedUSD, orderDirection: desc) {
        id
        symbol
        name
        decimals
        derivedETH
        volumeUSD
        volume
        txCount
        totalValueLocked
        feesUSD
        totalValueLockedUSD
      }
    }
    `;return S.gql`
    ${a}
  `};async function fetchedTokenDatas(e,o,t){let[a,r,n]=null!=t?t:[];try{let{data:l}=await fetchEthPrices(e,t),s=await e.request(TOKENS_BULK(void 0,o)),i=await e.request(TOKENS_BULK(null==a?void 0:a.number,o)),d=await e.request(TOKENS_BULK(null==r?void 0:r.number,o)),u=await e.request(TOKENS_BULK(null==n?void 0:n.number,o));if(!l)return{error:!1,data:void 0};let c=(null==s?void 0:s.tokens)?s.tokens.reduce((e,o)=>(e[o.id]=o,e),{}):{},m=(null==i?void 0:i.tokens)?i.tokens.reduce((e,o)=>(e[o.id]=o,e),{}):{},p=(null==d?void 0:d.tokens)?d.tokens.reduce((e,o)=>(e[o.id]=o,e),{}):{},k=(null==u?void 0:u.tokens)?u.tokens.reduce((e,o)=>(e[o.id]=o,e),{}):{},D=o.reduce((e,o)=>{var t,a;let r=c[o],n=m[o],s=p[o],i=k[o],[d,u]=r&&n&&s?(0,b.P)(r.volumeUSD,n.volumeUSD,s.volumeUSD):r?[parseFloat(r.volumeUSD),0]:[0,0],D=r&&i?parseFloat(r.volumeUSD)-parseFloat(i.volumeUSD):r?parseFloat(r.volumeUSD):0,v=r?parseFloat(r.totalValueLockedUSD):0,y=(0,A.Y)(parseFloat(null==r?void 0:r.totalValueLockedUSD),parseFloat(null==n?void 0:n.totalValueLockedUSD)),f=r?parseFloat(r.decimals):0,S=r?parseFloat(r.totalValueLocked):0,h=r?parseFloat(r.derivedETH)*l.current:0,U=n?parseFloat(n.derivedETH)*l.oneDay:0,F=i?parseFloat(i.derivedETH)*l.week:0,T=h&&U?(0,A.Y)(h,U):0,P=h&&F?(0,A.Y)(h,F):0,g=r&&n?parseFloat(r.txCount)-parseFloat(n.txCount):r?parseFloat(r.txCount):0,$=r&&n?parseFloat(r.feesUSD)-parseFloat(n.feesUSD):r?parseFloat(r.feesUSD):0;return e[o]={exists:!!r,address:o,name:null!==(t=null==r?void 0:r.name)&&void 0!==t?t:"",symbol:null!==(a=null==r?void 0:r.symbol)&&void 0!==a?a:"",decimals:f,volumeUSD:d,volumeUSDChange:u,volumeUSDWeek:D,txCount:g,tvlUSD:v,feesUSD:$,tvlUSDChange:y,tvlToken:S,priceUSD:h,priceUSDChange:T,priceUSDChangeWeek:P},e},{});return{error:!1,data:D}}catch(e){return{error:!0,data:void 0}}}let q=S.gql`
  query tokens($value: String, $id: ID) {
    asSymbol: tokens(where: { symbol_contains: $value }, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      symbol
      name
      totalValueLockedUSD
    }
    asName: tokens(where: { name_contains: $value }, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      symbol
      name
      totalValueLockedUSD
    }
    asAddress: tokens(where: { id: $id }, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      symbol
      name
      totalValueLockedUSD
    }
  }
`,E=S.gql`
  query pools($tokens: [String!], $id: ID) {
    as0: pools(where: { token0_in: $tokens }) {
      id
      feeTier
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
    as1: pools(where: { token1_in: $tokens }) {
      id
      feeTier
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
    asAddress: pools(where: { id: $id }) {
      id
      feeTier
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
  }
`;async function fetchSearchResults(e,o,t){try{var a,r,n;let l=await e.request(q,{value:o?o.toUpperCase():"",id:o}),s=await e.request(E,{tokens:null===(a=l.asSymbol)||void 0===a?void 0:a.map(e=>e.id).slice(0,p.qX),id:o}),i=[...l.asAddress.map(e=>e.id),...l.asName.map(e=>e.id),...l.asSymbol.map(e=>e.id)].slice(0,p.qX),d=[...s.as0.map(e=>e.id),...s.as1.map(e=>e.id),...s.asAddress.map(e=>e.id)].slice(0,p.qX),u=await fetchedTokenDatas(e,i,t),c=await poolData_fetchPoolDatas(e,d,t),m=Object.values(null!==(r=null==u?void 0:u.data)&&void 0!==r?r:{}).filter(e=>!(0,U.Z)(e)).filter(e=>{let t=Object.keys(e).map(t=>{let a="0x"===o.slice(0,2);return("address"===t&&!!a||"symbol"===t&&!a||"name"===t&&!a)&&e[t].match(RegExp((0,w.hr)(o),"i"))});return t.some(e=>e)}),k=Object.values(null!==(n=null==c?void 0:c.data)&&void 0!==n?n:{}).filter(e=>!(0,U.Z)(e)).filter(e=>{let t=Object.keys(e).map(t=>{let a="0x"===o.slice(0,2);return"address"===t&&a?e[t].match(RegExp((0,w.hr)(o),"i")):("token0"===t||"token1"===t)&&!a&&(e[t].name.match(RegExp((0,w.hr)(o),"i"))||e[t].symbol.toLocaleLowerCase().match(RegExp((0,w.hr)(o.toLocaleLowerCase()),"i")))});return t.some(e=>e)});return{tokens:m,pools:k}}catch(e){return{tokens:[],pools:[]}}}r().extend(v()),r().extend(f());let C=S.gql`
  query tokenDayDatas($startTime: Int!, $skip: Int!, $address: String) {
    tokenDayDatas(
      first: 1000
      skip: $skip
      where: { token: $address, date_gt: $startTime }
      orderBy: date
      orderDirection: asc
    ) {
      date
      volumeUSD
      totalValueLockedUSD
    }
  }
`;async function fetchTokenChartData(e,o){let t=[],a=r().utc().unix(),n=!1,l=0,s=!1;try{for(;!s;){let a=await o.request(C,{address:e,startTime:1619170975,skip:l});a.tokenDayDatas.length>0&&(l+=1e3,(a.tokenDayDatas.length<1e3||n)&&(s=!0),a&&(t=t.concat(a.tokenDayDatas)))}}catch{n=!0}if(t){var i,d;let e=t.reduce((e,o)=>{let t=parseInt((o.date/86400).toFixed(0));return e[t]={date:o.date,volumeUSD:parseFloat(o.volumeUSD),totalValueLockedUSD:parseFloat(o.totalValueLockedUSD)},e},{}),o=e[parseInt(Object.keys(e)[0])],r=null!==(i=null==o?void 0:o.date)&&void 0!==i?i:1619170975,n=null!==(d=null==o?void 0:o.totalValueLockedUSD)&&void 0!==d?d:0;for(;r<a-86400;){let o=r+86400,t=parseInt((o/86400).toFixed(0));Object.keys(e).includes(t.toString())?n=e[t].totalValueLockedUSD:e[t]={date:o,volumeUSD:0,totalValueLockedUSD:n},r=o}let l=Object.keys(e).map(o=>e[parseInt(o)]);return{data:l,error:!1}}return{data:void 0,error:n}}let B=S.gql`
  query topPools($address: String!) {
    asToken0: pools(first: 200, orderBy: totalValueLockedUSD, orderDirection: desc, where: { token0: $address }) {
      id
    }
    asToken1: pools(first: 200, orderBy: totalValueLockedUSD, orderDirection: desc, where: { token1: $address }) {
      id
    }
  }
`;async function fetchPoolsForToken(e,o){try{let t=await o.request(B,{address:e}),a=t.asToken0.concat(t.asToken1).map(e=>e.id);return{error:!1,addresses:a}}catch{return{error:!0,addresses:void 0}}}var _=t(33800);r().extend(v()),r().extend(f());let DAY_PAIR_PRICE_CHART=e=>{let o="query poolHourDatas($address: String) {";return e.forEach(e=>{o+=`
      t${e}:poolDayDatas(
        first: 1
        skip: 0
        where: { pool: $address, date_gte: ${e} }
        orderBy: date
        orderDirection: asc
      ) {
        date
        high
        low
        open
        close
      }
    `}),o+="}",S.gql`
    ${o}
  `},DAY_PAIR_MAX=e=>{let o=`query maxPrice($address: String) {
      poolDayDatas(
        first: 1
        skip: 0
        where: { pool: $address, date_gte: ${e} }
        orderBy: high
        orderDirection: desc
      ) {
        high
      }
  }`;return S.gql`
    ${o}
  `},DAY_PAIR_MIN=e=>{let o=`query minPrice($address: String) {
     poolDayDatas(
        first: 1
        skip: 0
        where: { pool: $address, date_gte: ${e},low_gt: 0 }
        orderBy: low
        orderDirection: asc
      ) {
        low
      }
  }`;return S.gql`
    ${o}
  `},HOUR_PAIR_PRICE_CHART=e=>{let o="query poolHourDatas($address: String) {";return e.forEach(e=>{o+=`
      t${e}:poolHourDatas(
        first: 1
        skip: 0
        where: { pool: $address, periodStartUnix: ${e} }
        orderBy: periodStartUnix
        orderDirection: asc
      ) {
        periodStartUnix
        high
        low
        open
        close
      }
    `}),o+="}",S.gql`
    ${o}
  `},x=S.gql`
  query tokenHourDatas($startTime: Int!, $skip: Int!, $address: String!) {
    tokenHourDatas(
      first: 100
      skip: $skip
      where: { token: $address, periodStartUnix_gt: $startTime }
      orderBy: periodStartUnix
      orderDirection: asc
    ) {
      periodStartUnix
      high
      low
      open
      close
    }
  }
`,HOUR_PRICE_MIN=e=>S.gql`
  query minPrice( $address: String!) {
    poolHourDatas(
      first: 1
      where: { pool: $address, periodStartUnix: ${e}, low_gt: 0 }
      orderBy: low
      orderDirection: asc
    ) {
      low
    }
  }
`,HOUR_PRICE_MAX=e=>S.gql`
  query maxPrice( $address: String!) {
    poolHourDatas(
      first: 1
      where: { pool: $address, periodStartUnix: ${e} }
      orderBy: high
      orderDirection: desc
    ) {
      high
    }
  }
`;async function priceData_fetchTokenPriceData(e,o,t,a,n,l){try{let d=r().utc().unix();if(!t)return console.error("Error constructing price start timestamp"),{data:[],error:!1};let u=[],c=t;for(;c<=d;)u.push(c),c+=o;if(0===u.length)return{data:[],error:!1};let m=(await (0,_.z)(u,"asc",500,n)).filter(e=>e.number>=l);if(!m||0===m.length)return console.error("Error fetching blocks"),{data:[],error:!1};let p=[],k=0,D=!1;for(;!D;){var s,i;let o=await a.request(x,{address:e,startTime:t,skip:k});(null==o?void 0:null===(s=o.tokenHourDatas)||void 0===s?void 0:s.length)>0&&(k+=100,(null==o?void 0:null===(i=o.tokenHourDatas)||void 0===i?void 0:i.length)<100&&(D=!0),o&&(p=p.concat(o.tokenHourDatas)))}let v=p.map(e=>({time:(null==e?void 0:e.periodStartUnix)||(null==e?void 0:e.date),open:parseFloat(e.open),close:parseFloat(e.close),high:parseFloat(e.high),low:parseFloat(e.low)}));return{data:v,error:!1}}catch(e){return console.error(e),{data:[],error:!0}}}async function fetchPairPriceChartTokenData(e,o,t,a,n,l){let s=o===p.ir,i=0;try{var d,u,c,m,k,D,v,y,f,S,h,b,U;let p=r().utc().unix();if(!t)return console.error("Error constructing price start timestamp"),{data:[],error:!1};let F=[],T=t;for(;T<=p;)F.push(T),T+=o;if(0===F.length)return{data:[],error:!1};let P=(await (0,_.z)(F,"asc",500,n)).filter(e=>e.number>=l);if(!P||0===P.length)return console.error("Error fetching blocks"),{data:[],error:!1};let g=[],$=await a.request(s?DAY_PAIR_PRICE_CHART(P.map(e=>e.timestamp)):HOUR_PAIR_PRICE_CHART(P.map(e=>e.timestamp)),{address:e}),w=s?null===(c=await a.request(DAY_PAIR_MAX(null==P?void 0:P[0].timestamp),{address:e}))||void 0===c?void 0:null===(u=c.poolDayDatas)||void 0===u?void 0:null===(d=u[0])||void 0===d?void 0:d.high:null===(D=await a.request(HOUR_PRICE_MAX(null==P?void 0:P[0].timestamp),{address:e}))||void 0===D?void 0:null===(k=D.poolHourDatas)||void 0===k?void 0:null===(m=k[0])||void 0===m?void 0:m.high,A=s?null===(f=await a.request(DAY_PAIR_MIN(null==P?void 0:P[0].timestamp),{address:e}))||void 0===f?void 0:null===(y=f.poolDayDatas)||void 0===y?void 0:null===(v=y[0])||void 0===v?void 0:v.low:null===(b=await a.request(HOUR_PRICE_MIN(null==P?void 0:P[0].timestamp),{address:e}))||void 0===b?void 0:null===(h=b.poolHourDatas)||void 0===h?void 0:null===(S=h[0])||void 0===S?void 0:S.low;(null===(U=Object.keys($))||void 0===U?void 0:U.length)>0&&$&&Object.values($).forEach(e=>{g=g.concat(e)});let q=g.map(e=>{let o=parseFloat(e.high),t=parseFloat(e.low),a=parseFloat(e.close);return i+=a,{time:(null==e?void 0:e.periodStartUnix)||(null==e?void 0:e.date),open:parseFloat(e.open),close:a,high:o,low:t}});return i/=q.length,{data:q,maxPrice:parseFloat(w),minPrice:parseFloat(A),averagePrice:i,error:!1}}catch(e){return console.error(e),{data:[],error:!0}}}let I=S.gql`
  query topPools {
    tokens(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
    }
  }
`;async function fetchTopTokenAddresses(e){try{let o=await e.request(I);return{error:!1,addresses:o?o.tokens.map(e=>e.id):void 0}}catch(e){return{error:!0,addresses:void 0}}}let L=S.gql`
  query transactions($address: String!) {
    mintsAs0: mints(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      sender
      origin
      amount0
      amount1
      amountUSD
    }
    mintsAs1: mints(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      sender
      origin
      amount0
      amount1
      amountUSD
    }
    swapsAs0: swaps(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      origin
      amount0
      amount1
      amountUSD
    }
    swapsAs1: swaps(first: 500, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      origin
      amount0
      amount1
      amountUSD
    }
    burnsAs0: burns(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      origin
      amount0
      amount1
      amountUSD
    }
    burnsAs1: burns(first: 500, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      origin
      amount0
      amount1
      amountUSD
    }
  }
`;async function fetchTokenTransactions(e,o){try{let t=await o.request(L,{address:e}),a=t.mintsAs0.map(e=>({type:T.i.MINT,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),r=t.mintsAs1.map(e=>({type:T.i.MINT,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),n=t.burnsAs0.map(e=>({type:T.i.BURN,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),l=t.burnsAs1.map(e=>({type:T.i.BURN,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),s=t.swapsAs0.map(e=>({type:T.i.SWAP,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),i=t.swapsAs1.map(e=>({type:T.i.SWAP,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}));return{data:[...a,...r,...n,...l,...s,...i],error:!1,loading:!1}}catch{return{data:void 0,error:!0,loading:!1}}}let R={retry:3,retryDelay:3e3,keepPreviousData:!0,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1},useProtocolChartData=()=>{let e=(0,s.RE)(),o=l.Pi[e],{data:t}=(0,m.a)({queryKey:[`v3/info/protocol/ProtocolChartData/${o}`,o],queryFn:()=>fetchChartData(u.GI[o]),enabled:!!o,...R});return(0,n.useMemo)(()=>{var e;return null!==(e=null==t?void 0:t.data)&&void 0!==e?e:[]},[t])},useProtocolData=()=>{var e;let o=(0,s.RE)(),t=l.Pi[o],[a,r]=(0,d.z)(),{blocks:n}=(0,c.I)([a,r]),{data:i}=(0,m.a)({queryKey:[`v3/info/protocol/ProtocolData/${t}`,t],queryFn:()=>fetchProtocolData(u.GI[t],n),enabled:!!(t&&n&&n.length>0),...R});return null!==(e=null==i?void 0:i.data)&&void 0!==e?e:void 0},useProtocolTransactionData=()=>{let e=(0,s.RE)(),o=l.Pi[e],{data:t}=(0,m.a)({queryKey:[`v3/info/protocol/ProtocolTransactionData/${o}`,o],queryFn:()=>fetchTopTransactions(u.GI[o]),enabled:!!o,...R});return(0,n.useMemo)(()=>{var e;return null!==(e=null==t?void 0:t.filter(e=>e.amountUSD>0))&&void 0!==e?e:[]},[t])},usePairPriceChartTokenData=(e,o,t)=>{let a=(0,s.RE)(),i=t||l.Pi[a],{data:d}=(0,m.a)({queryKey:[`v3/info/token/pairPriceChartToken/${e}/${o}`,null!=t?t:i],queryFn:async()=>{if(!e)throw Error("Address is not defined");let a=r()(),n=a.subtract(1,null!=o?o:"day").startOf("hour").unix();return fetchPairPriceChartTokenData(e,p.og[null!=o?o:"day"],n,u.GI[null!=t?t:i],l.VQ[null!=t?t:i],p.Mp[i])},enabled:!!(i&&e),...R});return(0,n.useMemo)(()=>{var e;return{data:null!==(e=null==d?void 0:d.data)&&void 0!==e?e:[],maxPrice:null==d?void 0:d.maxPrice,minPrice:null==d?void 0:d.minPrice,averagePrice:null==d?void 0:d.averagePrice}},[d])};async function fetchTopTokens(e,o){try{var t;let a=await fetchTopTokenAddresses(e),r=await fetchedTokenDatas(e,null!==(t=a.addresses)&&void 0!==t?t:[],o);return r}catch(e){return console.error(e),{data:{},error:!0}}}let useTopTokensData=()=>{let e=(0,s.RE)(),o=l.Pi[e],[t,a,r]=(0,d.z)(),{blocks:n}=(0,c.I)([t,a,r]),{data:i}=(0,m.a)({queryKey:[`v3/info/token/TopTokensData/${o}`,o],queryFn:()=>fetchTopTokens(u.GI[o],null==n?void 0:n.filter(e=>e.number>=p.Mp[o])),enabled:!!(o&&n&&n.length>0),...R});return null==i?void 0:i.data},tokenDataFetcher=(e,o,t)=>{let a=Math.ceil(o.length/50),r=[];for(let e=0;e<a;e++)r.push(o.slice(50*e,(e+1)*50));return Promise.all(r.map(o=>fetchedTokenDatas(e,o,t)))},useTokensData=(e,o)=>{let t=(0,s.RE)(),a=null!=o?o:l.Pi[t],[r,k,D]=(0,d.z)(),{blocks:v}=(0,c.I)([r,k,D],void 0,void 0,(0,i.q)(a)),{data:y}=(0,m.a)({queryKey:[`v3/info/token/tokensData/${o}/${null==e?void 0:e.join()}`,a],queryFn:()=>tokenDataFetcher(u.GI[a],e,null==v?void 0:v.filter(e=>e.number>=p.Mp[a])),enabled:!!(a&&v&&e&&(null==e?void 0:e.length)>0&&(null==v?void 0:v.length)>0),...R}),f=(0,n.useMemo)(()=>{if(y)return y.reduce((e,o)=>({...e,...o.data}),{})},[y]);return(0,n.useMemo)(()=>f?Object.values(f):void 0,[f])},useTokenData=e=>{var o;let t=(0,s.RE)(),a=l.Pi[t],[r,n,i]=(0,d.z)(),{blocks:k}=(0,c.I)([r,n,i]),{data:D}=(0,m.a)({queryKey:[`v3/info/token/tokenData/${a}/${e}`,a],queryFn:()=>fetchedTokenDatas(u.GI[a],[e],null==k?void 0:k.filter(e=>e.number>=p.Mp[a])),enabled:!!(a&&k&&e&&"undefined"!==e&&(null==k?void 0:k.length)>0),...R});return null==D?void 0:null===(o=D.data)||void 0===o?void 0:o[e]},usePoolsForToken=e=>{let o=(0,s.RE)(),t=l.Pi[o],{data:a}=(0,m.a)({queryKey:[`v3/info/token/poolsForToken/${t}/${e}`,t],queryFn:()=>fetchPoolsForToken(e,u.GI[t]),enabled:!!(t&&e),...R});return null==a?void 0:a.addresses},useTokenChartData=e=>{let o=(0,s.RE)(),t=l.Pi[o],{data:a}=(0,m.a)({queryKey:[`v3/info/token/tokenChartData/${t}/${e}`,t],queryFn:()=>fetchTokenChartData(e,u.GI[t]),enabled:!!(t&&e),...R});return null==a?void 0:a.data},useTokenPriceData=(e,o,t)=>{let a=(0,s.RE)(),n=l.Pi[a],i=r()(),d=i.subtract(1,null!=t?t:"day").startOf("hour").unix(),{data:c}=(0,m.a)({queryKey:[`v3/info/token/tokenPriceData/${n}/${e}/${o}/${t}`,n],queryFn:()=>priceData_fetchTokenPriceData(e,o,d,u.GI[n],l.VQ[n],p.Mp[n]),enabled:!!(n&&e),...R});return null==c?void 0:c.data},useTokenTransactions=e=>{let o=(0,s.RE)(),t=l.Pi[o],{data:a}=(0,m.a)({queryKey:[`v3/info/token/tokenTransaction/${t}/${e}`,t],queryFn:()=>fetchTokenTransactions(e,u.GI[t]),enabled:!!(t&&e),...R});return(0,n.useMemo)(()=>{var e;return null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.filter(e=>e.amountUSD>0)},[a])};async function fetchTopPools(e,o,t){try{var a;let r=await topPools_fetchTopPoolAddresses(e,o),n=await poolData_fetchPoolDatas(e,null!==(a=r.addresses)&&void 0!==a?a:[],t);return n}catch(e){return console.error(e),{data:{},error:!0}}}let useTopPoolsData=()=>{let e=(0,s.RE)(),o=l.Pi[e],[t,a,r]=(0,d.z)(),{blocks:n}=(0,c.I)([t,a,r]),{data:i}=(0,m.a)({queryKey:[`v3/info/pool/TopPoolsData/${o}`,o],queryFn:()=>fetchTopPools(u.GI[o],o,null==n?void 0:n.filter(e=>e.number>=p.Mp[o])),enabled:!!(o&&n&&n.length>0),...R});return null==i?void 0:i.data},usePoolsData=e=>{let o=(0,s.RE)(),t=l.Pi[o],[a,r,i]=(0,d.z)(),{blocks:k}=(0,c.I)([a,r,i]),{data:D}=(0,m.a)({queryKey:[`v3/info/pool/poolsData/${t}/${e.join()}`,t],queryFn:()=>poolData_fetchPoolDatas(u.GI[t],e,null==k?void 0:k.filter(e=>e.number>=p.Mp[t])),enabled:!!(t&&k&&(null==k?void 0:k.length)>0&&e&&(null==e?void 0:e.length)>0),...R});return(0,n.useMemo)(()=>(null==D?void 0:D.data)?Object.values(D.data):void 0,[D])},usePoolData=e=>{var o,t;let a=(0,s.RE)(),r=l.Pi[a],[n,i,k]=(0,d.z)(),{blocks:D}=(0,c.I)([n,i,k]),{data:v}=(0,m.a)({queryKey:[`v3/info/pool/poolData/${r}/${e}`,r],queryFn:()=>poolData_fetchPoolDatas(u.GI[r],[e],null==D?void 0:D.filter(e=>e.number>=p.Mp[r])),enabled:!!(r&&D&&(null==D?void 0:D.length)>0&&e&&"undefined"!==e),...R});return null!==(t=null==v?void 0:null===(o=v.data)||void 0===o?void 0:o[e])&&void 0!==t?t:void 0},usePoolTransactions=e=>{let o=(0,s.RE)(),t=l.Pi[o],{data:a}=(0,m.a)({queryKey:[`v3/info/pool/poolTransaction/${t}/${e}`,t],queryFn:()=>fetchPoolTransactions(e,u.GI[t]),enabled:!!(t&&e),...R});return(0,n.useMemo)(()=>{var e,o;return null!==(o=null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.filter(e=>e.amountUSD>0))&&void 0!==o?o:void 0},[a])},usePoolChartData=e=>{let o=(0,s.RE)(),t=l.Pi[o],{data:a}=(0,m.a)({queryKey:[`v3/info/pool/poolChartData/${t}/${e}`,t],queryFn:()=>chartData_fetchPoolChartData(e,u.GI[t]),enabled:!!(t&&e&&"undefined"!==e),...R});return null==a?void 0:a.data},useSearchData=e=>{let o=(0,s.RE)(),t=l.Pi[o],[a,r,i]=(0,d.z)(),{blocks:k}=(0,c.I)([a,r,i]),{data:D,status:v,error:y}=(0,m.a)({queryKey:[`v3/info/pool/searchData/${t}/${e}`,t],queryFn:()=>fetchSearchResults(u.GI[t],e,null==k?void 0:k.filter(e=>e.number>=p.Mp[t])),enabled:!!(t&&e),...R}),f=(0,n.useMemo)(()=>D?{...D,loading:"success"!==v,error:y}:{tokens:[],pools:[],loading:!0,error:y},[D,v,y]);return f}},36073:function(e,o,t){var a,r,n,l;t.d(o,{H:function(){return a},i:function(){return r}}),(n=a||(a={}))[n.daily=0]="daily",n[n.weekly=1]="weekly",n[n.monthly=2]="monthly",(l=r||(r={}))[l.SWAP=0]="SWAP",l[l.MINT=1]="MINT",l[l.BURN=2]="BURN"},58741:function(e,o,t){t.d(o,{P:function(){return get2DayChange},Y:function(){return getPercentChange}});let get2DayChange=(e,o,t)=>{let a=parseFloat(e)-parseFloat(o),r=parseFloat(o)-parseFloat(t),n=(a-r)/r*100;return Number.isNaN(n)||!Number.isFinite(n)?[a,0]:[a,n]},getPercentChange=(e,o)=>{if(e&&o){let t=(parseFloat(e)-parseFloat(o))/parseFloat(o)*100;if(Number.isFinite(t))return t}return 0}}}]);
//# sourceMappingURL=6872-8a7a6e3ca89f7e92.js.map