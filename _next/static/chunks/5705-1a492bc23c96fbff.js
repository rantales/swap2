"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5705],{33740:function(e,t,r){r.d(t,{y9:function(){return useAllPoolDataQuery},NJ:function(){return useAllTokenDataQuery},bm:function(){return useAllTokenHighLight},uX:function(){return useChainIdByQuery},RE:function(){return useChainNameByQuery},qg:function(){return hooks_useGetChainName},hb:function(){return useMultiChainPath},I9:function(){return usePoolChartDataQuery},rx:function(){return usePoolDatasQuery},PG:function(){return usePoolTransactionsQuery},A5:function(){return usePoolsForTokenQuery},Zx:function(){return useProtocolChartDataQuery},Qc:function(){return useProtocolDataQuery},Y1:function(){return useProtocolTransactionsQuery},U1:function(){return useStableSwapPath},BS:function(){return useStableSwapTopPoolsAPR},vz:function(){return useTokenChartDataQuery},yo:function(){return useTokenDataQuery},lb:function(){return useTokenDatasQuery},aK:function(){return useTokenPriceDataQuery},uk:function(){return useTokenTransactionsQuery}});var a=r(27860),o=r.n(a),n=r(95385),i=r.n(n),l=r(16203),s=r(52983),u=r(30989),d=r(13138),c=r(73070),m=r(21061),p=r.n(m),v=r(4841),y=r(6533);let mapMints=e=>{var t,r,a,o;return{type:v.i.MINT,hash:e.id.split("-")[0],timestamp:e.timestamp,sender:e.to,token0Symbol:null===(t=e.pair)||void 0===t?void 0:t.token0.symbol,token1Symbol:null===(r=e.pair)||void 0===r?void 0:r.token1.symbol,token0Address:null===(a=e.pair)||void 0===a?void 0:a.token0.id,token1Address:null===(o=e.pair)||void 0===o?void 0:o.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}},mapBurns=e=>{var t,r,a,o;return{type:v.i.BURN,hash:e.id.split("-")[0],timestamp:e.timestamp,sender:e.sender,token0Symbol:null===(t=e.pair)||void 0===t?void 0:t.token0.symbol,token1Symbol:null===(r=e.pair)||void 0===r?void 0:r.token1.symbol,token0Address:null===(a=e.pair)||void 0===a?void 0:a.token0.id,token1Address:null===(o=e.pair)||void 0===o?void 0:o.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}},mapSwaps=e=>{var t,r,a,o;return{type:v.i.SWAP,hash:e.id.split("-")[0],timestamp:e.timestamp,sender:e.from,token0Symbol:null===(t=e.pair)||void 0===t?void 0:t.token0.symbol,token1Symbol:null===(r=e.pair)||void 0===r?void 0:r.token1.symbol,token0Address:null===(a=e.pair)||void 0===a?void 0:a.token0.id,token1Address:null===(o=e.pair)||void 0===o?void 0:o.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0In)-parseFloat(e.amount0Out),amountToken1:parseFloat(e.amount1In)-parseFloat(e.amount1Out)}},mapDayData=e=>({date:e.date,volumeUSD:parseFloat(e.dailyVolumeUSD),liquidityUSD:parseFloat(e.totalLiquidityUSD)}),mapPairDayData=e=>({date:e.date,volumeUSD:parseFloat(e.dailyVolumeUSD),liquidityUSD:parseFloat(e.reserveUSD)}),helpers_fetchChartData=async(e,t)=>{var r,a;let n=[],i=!1,l=0,s=!1;for(;!s&&!i;){let{data:r,error:a}=await t(e,l),o=(null==r?void 0:r.length)||0;l+=1e3,s=o<1e3||l>2e3,i=a,r&&(n=n.concat(r))}if(i||0===n.length)return{error:!0};let u=p()(n.map(e=>{let t=parseInt((e.date/c.Bq).toFixed(0));return[t,e]})),d=Object.keys(u).map(e=>parseInt(e,10)),m=u[d[0]],v=null!==(r=null==m?void 0:m.date)&&void 0!==r?r:y.YM[e],h=null!==(a=null==m?void 0:m.liquidityUSD)&&void 0!==a?a:0,f=o()().unix();for(;v<f-c.Bq;){v+=c.Bq;let e=parseInt((v/c.Bq).toFixed(0),10);Object.keys(u).includes(e.toString())?h=u[e].liquidityUSD:u[e]={date:v,volumeUSD:0,liquidityUSD:h}}return{data:Object.values(u),error:!1}},fetchChartDataWithAddress=async(e,t,r)=>{var a,n;let i=[],l=!1,s=0,u=!1;for(;!u&&!l;){let{data:a,error:o}=await t(e,s,r);s+=1e3;let n=(null==a?void 0:a.length)||0;u=n<1e3||s>2e3,l=o,a&&(i=i.concat(a))}if(l||0===i.length)return{error:!0};let d=p()(i.map(e=>{let t=parseInt((e.date/c.Bq).toFixed(0));return[t,e]})),m=Object.keys(d).map(e=>parseInt(e,10)),v=d[m[0]],h=null!==(a=null==v?void 0:v.date)&&void 0!==a?a:y.YM[e],f=null!==(n=null==v?void 0:v.liquidityUSD)&&void 0!==n?n:0,D=o()().unix();for(;h<D-c.Bq;){h+=c.Bq;let e=parseInt((h/c.Bq).toFixed(0),10);Object.keys(d).includes(e.toString())?f=d[e].liquidityUSD:d[e]={date:h,volumeUSD:0,liquidityUSD:f}}return{data:Object.values(d),error:!1}},getPoolChartData=async(e,t,r)=>{try{var a;let o=d.gql`
      query pairDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
        pairDayDatas(
          first: 1000
          skip: $skip
          where: { pairAddress: $address, date_gt: $startTime }
          orderBy: date
          orderDirection: asc
        ) {
          date
          dailyVolumeUSD
          reserveUSD
        }
      }
    `,{pairDayDatas:n}=await (null===(a=(0,y.rf)(e))||void 0===a?void 0:a.request(o,{startTime:y.YM[e],skip:t,address:r}))||{},i=null==n?void 0:n.map(mapPairDayData);return{data:i,error:!1}}catch(e){return console.error("Failed to fetch pool chart data",e),{error:!0}}},fetchPoolChartData=async(e,t)=>fetchChartDataWithAddress(e,getPoolChartData,t);var h=r(92011);let getLpFeesAndApr=(e,t,r)=>{let a=e*c.om,o=t*c.om,n=e*c.BY,i=t*c.BY,l=r>0?t*c.BY*c.MV*100/r:0;return{totalFees24h:a,totalFees7d:o,lpFees24h:n,lpFees7d:i,lpApr7d:l!==1/0?l:0}};var f=r(18624),D=r(37528),k=r(91529);let getQuery=(e,t)=>d.gql`
      query topPools($blacklist: [String!]) {
        pairDayDatas(
          first: ${e}
          ${t}
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `,fetchTopPools=async(e,t)=>{if(!e)return[];let r=(0,y.J5)(),a=r?100:30,o="BSC"===e?`where: { dailyTxns_gt: 300, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: ${t} }`:`where: { date_gt: ${t}, token0_not_in: $blacklist, token1_not_in: $blacklist, dailyVolumeUSD_gt: 2000 }`;r&&(o=`where: { date_gt: ${t}}`);try{let t=await (0,y.rf)(e).request(getQuery(a,o),{blacklist:y.z2[e]});return 0===t.pairDayDatas.length&&(t=await (0,y.rf)(e).request(getQuery(a,""),{blacklist:y.z2[e]})),t.pairDayDatas.map(e=>e.id.split("-")[0])}catch(e){return console.error("Failed to fetch top pools",e),[]}},fetchTopPoolAddresses=async e=>{let[t]=(0,k.z)(),r=await fetchTopPools(e,t);return r},POOL_AT_BLOCK=(e,t,r)=>{let a=t?`block: {number: ${t}}`:"",o=`["${r.join('","')}"]`,n=(0,y.J5)()?"volumeOutUSD":"";return`pairs(
    where: { id_in: ${o} }
    ${a}
    orderBy: trackedReserve${y.WR[e]}
    orderDirection: desc
  ) {
    id
    reserve0
    reserve1
    reserveUSD
    volumeUSD
    ${n}
    token0Price
    token1Price
    timestamp
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
  }`},fetchPoolData=async function(e,t,r,a,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"BSC",i=(0,y.J5)(),l=i?y.ai[n]:void 0;try{let i=d.gql`
      query pools {
        now: ${POOL_AT_BLOCK(n,null,o)}
        oneDayAgo: ${POOL_AT_BLOCK(n,e,o)}
        ${(l&&l<=t||!l)&&t>0?`twoDaysAgo: ${POOL_AT_BLOCK(n,t,o)}`:""}
        ${(l&&l<=r||!l)&&r>0?`oneWeekAgo: ${POOL_AT_BLOCK(n,r,o)}`:""}
        ${(l&&l<=a||!l)&&a>0?`twoWeeksAgo: ${POOL_AT_BLOCK(n,a,o)}`:""}
      }
    `,s=await (0,y.rf)(n).request(i);return{data:s,error:!1}}catch(e){return console.error("Failed to fetch pool data",e),{error:!0}}},parsePoolData=e=>e?e.reduce((e,t)=>{let{volumeUSD:r,reserveUSD:a,reserve0:o,reserve1:n,token0Price:i,token1Price:l,volumeOutUSD:s}=t;return e[t.id.toLowerCase()]={...t,volumeUSD:parseFloat(r),volumeOutUSD:s?parseFloat(s):0,reserveUSD:parseFloat(a),reserve0:parseFloat(o),reserve1:parseFloat(n),token0Price:parseFloat(i),token1Price:parseFloat(l)},e},{}):{},fetchAllPoolDataWithAddress=async(e,t,r)=>{var a,o,n,i;let[l,s,u,d]=null!=e?e:[],{data:c}=await fetchPoolData(null!==(a=null==l?void 0:l.number)&&void 0!==a?a:0,null!==(o=null==s?void 0:s.number)&&void 0!==o?o:0,null!==(n=null==u?void 0:u.number)&&void 0!==n?n:0,null!==(i=null==d?void 0:d.number)&&void 0!==i?i:0,r,t),m=parsePoolData(null==c?void 0:c.now),p=parsePoolData(null==c?void 0:c.oneDayAgo),v=parsePoolData(null==c?void 0:c.twoDaysAgo),k=parsePoolData(null==c?void 0:c.oneWeekAgo),b=parsePoolData(null==c?void 0:c.twoWeeksAgo),S=r.reduce((e,t)=>{var r,a,o,n,i,l,s,u,d,c,S,T,w,g,$,P,A;let q=m[t],U=p[t],F=v[t],B=k[t],C=b[t],[O,_]=(0,h.T)(null==q?void 0:q.volumeUSD,null==U?void 0:U.volumeUSD,null==F?void 0:F.volumeUSD),Q=(null==q?void 0:q.volumeOutUSD)&&(0,f.D)(null==q?void 0:q.volumeOutUSD,null==U?void 0:U.volumeOutUSD),N=(null==q?void 0:q.volumeOutUSD)&&(0,f.D)(null==q?void 0:q.volumeOutUSD,null==B?void 0:B.volumeOutUSD),[L,I]=(0,h.T)(null==q?void 0:q.volumeUSD,null==B?void 0:B.volumeUSD,null==C?void 0:C.volumeUSD),K=q?q.reserveUSD:0,x=(0,f.Y)(null==q?void 0:q.reserveUSD,null==U?void 0:U.reserveUSD),R=q?q.reserve0:0,M=q?q.reserve1:0,V=null!==(r=null==q?void 0:q.timestamp)&&void 0!==r?r:0,{totalFees24h:E,totalFees7d:W,lpFees24h:J,lpFees7d:j,lpApr7d:z}=getLpFeesAndApr(O,L,K);if(q){let r=(0,D.xP)(null==q?void 0:null===(a=q.token0)||void 0===a?void 0:a.id),m=(0,D.xP)(null==q?void 0:null===(o=q.token1)||void 0===o?void 0:o.id);e[t]={data:{address:t,token0:{address:null!==(c=null==q?void 0:null===(n=q.token0)||void 0===n?void 0:n.id)&&void 0!==c?c:"",name:null!==(S=null==q?void 0:null===(i=q.token0)||void 0===i?void 0:i.name)&&void 0!==S?S:"",symbol:r&&null!==(w=null!==(T=y.VG[r])&&void 0!==T?T:null==q?void 0:null===(l=q.token0)||void 0===l?void 0:l.symbol)&&void 0!==w?w:""},token1:{address:null!==(g=null==q?void 0:null===(s=q.token1)||void 0===s?void 0:s.id)&&void 0!==g?g:"",name:null!==($=null==q?void 0:null===(u=q.token1)||void 0===u?void 0:u.name)&&void 0!==$?$:"",symbol:m&&null!==(A=null!==(P=y.VG[m])&&void 0!==P?P:null==q?void 0:null===(d=q.token1)||void 0===d?void 0:d.symbol)&&void 0!==A?A:""},timestamp:V,token0Price:q.token0Price,token1Price:q.token1Price,volumeUSD:O,volumeUSDChange:_,volumeUSDWeek:L,volumeUSDChangeWeek:I,totalFees24h:E,totalFees7d:W,lpFees24h:J,lpFees7d:j,lpApr7d:z,liquidityUSD:K,liquidityUSDChange:x,liquidityToken0:R,liquidityToken1:M,volumeOutUSD:Q,volumeOutUSDWeek:N}}}return e},{});return S},fetchAllPoolData=async(e,t)=>{let r=await fetchTopPoolAddresses(t);return fetchAllPoolDataWithAddress(e,t,r)},b=d.gql`
  query poolTransactions($address: ID!) {
    mints(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      to
      amount0
      amount1
      amountUSD
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
    }
    swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
    }
    burns(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      sender
      amount0
      amount1
      amountUSD
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
    }
  }
`,fetchPoolTransactions=async(e,t)=>{try{let r=await (0,y.rf)(e).request(b,{address:t}),a=r.mints.map(mapMints),o=r.burns.map(mapBurns),n=r.swaps.map(mapSwaps);return{data:[...a,...o,...n],error:!1}}catch(e){return console.error(`Failed to fetch transactions for pool ${t}`,e),{error:!0}}},S=d.gql`
  query overviewCharts($startTime: Int!, $skip: Int!) {
    pancakeDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {
      date
      dailyVolumeUSD
      totalLiquidityUSD
    }
  }
`,getOverviewChartData=async(e,t)=>{try{let{pancakeDayDatas:r}=await (0,y.rf)(e).request(S,{startTime:y.YM[e],skip:t}),a=r.map(mapDayData);return{data:a,error:!1}}catch(e){return console.error("Failed to fetch overview chart data",e),{error:!0}}},fetchGlobalChartData=async e=>{let{data:t}=await helpers_fetchChartData(e,getOverviewChartData);return t};var T=r(77744);let getOverviewData=async(e,t)=>{let r=(0,y.J5)()?"factories":"pancakeFactories";try{let a=d.gql`query overview {
      ${r}(
        ${t?`block: { number: ${t}}`:""}
        first: 5) {
        totalTransactions
        totalVolumeUSD
        totalLiquidityUSD
      }
    }`,o=await (0,y.rf)(e).request(a);return{data:o,error:!1}}catch(e){return console.error("Failed to fetch info overview",e),{data:void 0,error:!0}}},formatPancakeFactoryResponse=e=>e?e.reduce((e,t)=>(e.totalLiquidityUSD+=parseFloat(t.totalLiquidityUSD),e.totalTransactions+=parseFloat(t.totalTransactions),e.totalVolumeUSD+=parseFloat(t.totalVolumeUSD),e),{totalLiquidityUSD:0,totalTransactions:0,totalVolumeUSD:0}):null,fetchProtocolData=async(e,t,r)=>{var a,o;let[{data:n},{data:i},{data:l}]=await Promise.all([getOverviewData(e),getOverviewData(e,null!==(a=null==t?void 0:t.number)&&void 0!==a?a:void 0),getOverviewData(e,null!==(o=null==r?void 0:r.number)&&void 0!==o?o:void 0)]);(null==n?void 0:n.factories)&&n.factories.length>0&&(n.pancakeFactories=n.factories),(null==i?void 0:i.factories)&&i.factories.length>0&&(i.pancakeFactories=i.factories),(null==l?void 0:l.factories)&&l.factories.length>0&&(l.pancakeFactories=l.factories);let s=formatPancakeFactoryResponse(null==n?void 0:n.pancakeFactories),u=formatPancakeFactoryResponse(null==i?void 0:i.pancakeFactories),d=formatPancakeFactoryResponse(null==l?void 0:l.pancakeFactories),[c,m]=(0,h.T)(null==s?void 0:s.totalVolumeUSD,null==u?void 0:u.totalVolumeUSD,null==d?void 0:d.totalVolumeUSD),p=(0,f.Y)(null==s?void 0:s.totalLiquidityUSD,null==u?void 0:u.totalLiquidityUSD),[v,y]=(0,h.T)(null==s?void 0:s.totalTransactions,null==u?void 0:u.totalTransactions,null==d?void 0:d.totalTransactions),D={volumeUSD:c,volumeUSDChange:"number"==typeof m?m:0,liquidityUSD:(null==s?void 0:s.totalLiquidityUSD)||0,liquidityUSDChange:p,txCount:v,txCountChange:y};return D},w=d.gql`
  query overviewTransactions {
    mints: mints(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      to
      amount0
      amount1
      amountUSD
    }
    swaps: swaps(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
    burns: burns(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
    }
  }
`,fetchTopTransactions=async e=>{try{let t=await (0,y.rf)(e).request(w);if(!t)return;let r=t.mints.map(mapMints),a=t.burns.map(mapBurns),o=t.swaps.map(mapSwaps);return[...r,...a,...o].sort((e,t)=>parseInt(t.timestamp,10)-parseInt(e.timestamp,10))}catch{return}},getTokenChartData=async(e,t,r)=>{try{let a=d.gql`
      query tokenDayDatas($startTime: Int!, $skip: Int!, $address: String!) {
        tokenDayDatas(
          first: 1000
          skip: $skip
          where: { token: $address, date_gt: $startTime }
          orderBy: date
          orderDirection: asc
        ) {
          date
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
    `,{tokenDayDatas:o}=await (0,y.rf)(e).request(a,{startTime:y.YM[e],skip:t,address:r}),n=o.map(mapDayData);return{data:n,error:!1}}catch(e){return console.error("Failed to fetch token chart data",e),{error:!0}}},fetchTokenChartData=async(e,t)=>fetchChartDataWithAddress(e,getTokenChartData,t),POOLS_FOR_TOKEN=e=>{let t="ETH"===e?1:100;return d.gql`
  query poolsForToken($address: String!, $blacklist: [String!]) {
    asToken0: pairs(
      first: 15
      orderBy: trackedReserve${y.WR[e]}
      orderDirection: desc
      where: { totalTransactions_gt: ${t}, token0: $address, token1_not_in: $blacklist }
    ) {
      id
    }
    asToken1: pairs(
      first: 15
      orderBy: trackedReserve${y.WR[e]}
      orderDirection: desc
      where: { totalTransactions_gt: ${t}, token1: $address, token0_not_in: $blacklist }
    ) {
      id
    }
  }
`},fetchPoolsForToken=async(e,t)=>{try{let r=await (0,y.rf)(e).request(POOLS_FOR_TOKEN(e),{address:t,blacklist:c.tE.map(e=>e.toLocaleUpperCase())});return{error:!1,addresses:r.asToken0.concat(r.asToken1).map(e=>e.id).map(e=>e.toLowerCase())}}catch(e){return console.error(`Failed to fetch pools for token ${t}`,e),{error:!0}}};var g=r(40916),$=r.n(g),P=r(33800),A=r(66434);let getPriceSubqueries=(e,t,r)=>r.map(r=>`
      t${r.timestamp}:token(id:"${t}", block: { number: ${r.number} }) {
        derived${y.WR[e]}
      }
      b${r.timestamp}: bundle(id:"1", block: { number: ${r.number} }) {
        ${y.WR[e].toLowerCase()}Price
      }
    `),priceQueryConstructor=e=>d.gql`
    query tokenPriceData {
      ${e}
    }
  `,fetchTokenPriceData=async(e,t,r,a)=>{let n=o()().unix(),i=[],l=a;for(;l<=n;)i.push(l),l+=r;try{var s;let r=await (0,P.z)(i,"asc",500,e),a=null!==(s=null==r?void 0:r.length)&&void 0!==s?s:0;if(a>0&&"BSC"===e&&!(0,y.J5)()){let e=r[a-1];r[a-1]={timestamp:e.timestamp,number:e.number-32}}if(!r||0===a)return console.error("Error fetching blocks for timestamps",i),{error:!1};let o=await (0,A.L)(priceQueryConstructor,getPriceSubqueries(e,t,r),(0,y.rf)(e),200);if(console.warn("fetchTokenPriceData",{chainName:e,prices:o}),!o)return console.error("Price data failed to load"),{error:!1};let n=[],l=y.WR[e];Object.keys(o).forEach(e=>{let t=e.split("t")[1];if(t){var r;n.push({timestamp:t,derivedBNB:(null===(r=o[e])||void 0===r?void 0:r[`derived${l}`])?parseFloat(o[e][`derived${l}`]):0,priceUSD:0})}}),console.warn("pricesPart1",n),Object.keys(o).forEach(e=>{let t=e.split("b")[1];if(t){let i=n.findIndex(e=>e.timestamp===t);if(i>=0){var r,a;let{derivedBNB:t}=n[i];n[i].priceUSD=parseFloat(null!==(a=null===(r=o[e])||void 0===r?void 0:r[`${l.toLowerCase()}Price`])&&void 0!==a?a:0)*t}}});let u=$()(n,e=>parseInt(e.timestamp,10)),d=[];for(let e=0;e<u.length-1;e++)d.push({time:parseFloat(u[e].timestamp),open:u[e].priceUSD,close:u[e+1].priceUSD,high:u[e+1].priceUSD,low:u[e].priceUSD});return{data:d,error:!1}}catch(e){return console.error(`Failed to fetch price data for token ${t}`,e),{error:!0}}};var q=r(27767),U=r.n(q);let fetchTopTokens=async(e,t)=>{let r="ETH"===e?`where: { date_gt: ${t}, token_not_in: $blacklist, dailyVolumeUSD_gt:2000 }`:(0,y.J5)()?"":`where: { dailyTxns_gt: ${"BSC"===e?300:0}, id_not_in: $blacklist, date_gt: ${t}}`;try{let t=d.gql`
      query topTokens($blacklist: [ID!]) {
        tokenDayDatas(
          first: ${50}
          ${r}
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `,a=d.gql`
      query topTokens {
        tokens(
          first: ${50}
          ${r}
          orderBy: totalLiquidity
          orderDirection: desc
        ) {
          id
        }
      }
    `;if((0,y.J5)()){let t=await (0,y.rf)(e).request(a);return U()(t.tokens.map(e=>e.id),y.tO[e])}let o=await (0,y.rf)(e).request(t,{blacklist:y.z2[e]});return U()(o.tokenDayDatas.map(e=>e.id.split("-")[0]),y.tO[e])}catch(r){return console.warn("fetchTopTokens",{chainName:e,timestamp24hAgo:t}),console.error("Failed to fetch top tokens",r),[]}},fetchTokenAddresses=async e=>{let[t]=(0,k.z)(),r=await fetchTopTokens(e,t);return r},TOKEN_AT_BLOCK=(e,t,r)=>{let a=`["${r.join('","')}"]`,o=t?`block: {number: ${t}}`:"";return`tokens(
      where: {id_in: ${a}}
      ${o}
      orderBy: tradeVolumeUSD
      orderDirection: desc
    ) {
      id
      symbol
      name
      decimals
      derived${y.WR[e]}
      derivedUSD
      tradeVolumeUSD
      totalTransactions
      totalLiquidity
    }
  `},fetchTokenData=async(e,t,r,a,o,n)=>{let i=(0,y.J5)(),l=i?y.ai[e]:void 0;try{let i=d.gql`
      query tokens {
        now: ${TOKEN_AT_BLOCK(e,void 0,n)}
        oneDayAgo: ${TOKEN_AT_BLOCK(e,t,n)}
        ${(l&&l<=r||!l)&&r>0?`twoDaysAgo: ${TOKEN_AT_BLOCK(e,r,n)}`:""}
        ${(l&&l<=a||!l)&&a>0?`oneWeekAgo: ${TOKEN_AT_BLOCK(e,a,n)}`:""}
        ${(l&&l<=o||!l)&&o>0?`twoWeeksAgo: ${TOKEN_AT_BLOCK(e,o,n)}`:""}
      }
    `,s=await (0,y.rf)(e).request(i);return{data:s,error:!1}}catch(e){return console.error("Failed to fetch token data",e),{error:!0}}},parseTokenData=e=>e?e.reduce((e,t)=>{let{derivedBNB:r,derivedUSD:a,tradeVolumeUSD:o,totalTransactions:n,totalLiquidity:i,derivedETH:l,decimals:s}=t;return e[t.id.toLowerCase()]={...t,derivedBNB:r?0:parseFloat(r),derivedETH:l?0:parseFloat(l),derivedUSD:parseFloat(a),tradeVolumeUSD:parseFloat(o),totalTransactions:parseFloat(n),totalLiquidity:parseFloat(i),decimals:parseInt(s)},e},{}):{},fetchAllTokenDataByAddresses=async(e,t,r)=>{var a,o,n,i;let[l,s,u,d]=null!=t?t:[],{data:c}=await fetchTokenData(e,null!==(a=null==l?void 0:l.number)&&void 0!==a?a:0,null!==(o=null==s?void 0:s.number)&&void 0!==o?o:0,null!==(n=null==u?void 0:u.number)&&void 0!==n?n:0,null!==(i=null==d?void 0:d.number)&&void 0!==i?i:0,r),m=parseTokenData(null==c?void 0:c.now),p=parseTokenData(null==c?void 0:c.oneDayAgo),v=parseTokenData(null==c?void 0:c.twoDaysAgo),y=parseTokenData(null==c?void 0:c.oneWeekAgo),D=parseTokenData(null==c?void 0:c.twoWeeksAgo),k=r.reduce((e,t)=>{let r=m[t],a=p[t],o=v[t],n=y[t],i=D[t],[l,s]=(0,h.T)(null==r?void 0:r.tradeVolumeUSD,null==a?void 0:a.tradeVolumeUSD,null==o?void 0:o.tradeVolumeUSD),[u]=(0,h.T)(null==r?void 0:r.tradeVolumeUSD,null==n?void 0:n.tradeVolumeUSD,null==i?void 0:i.tradeVolumeUSD),d=r?r.totalLiquidity*r.derivedUSD:0,c=a?a.totalLiquidity*a.derivedUSD:0,k=(0,f.Y)(d,c),b=r?r.totalLiquidity:0,S=r?r.derivedUSD:0,T=r?r.decimals:0,w=a?a.derivedUSD:0,g=n?n.derivedUSD:0,$=(0,f.Y)(S,w),P=(0,f.Y)(S,g),A=(0,f.D)(null==r?void 0:r.totalTransactions,null==a?void 0:a.totalTransactions);return e[t]={data:{exists:!!r,address:t,name:r?r.name:"",symbol:r?r.symbol:"",volumeUSD:l,volumeUSDChange:s,volumeUSDWeek:u,txCount:A,liquidityUSD:d,liquidityUSDChange:k,liquidityToken:b,priceUSD:S,priceUSDChange:$,priceUSDChangeWeek:P,decimals:T}},e},{});return k},fetchAllTokenData=async(e,t)=>{let r=await fetchTokenAddresses(e),a=await fetchAllTokenDataByAddresses(e,t,r);return a},TOKEN_TRANSACTIONS=()=>{let e=(0,y.J5)(),t=e?"pair_: {token0: $address}":"token0: $address",r=e?"pair_: {token1: $address}":"token1: $address";return d.gql`
    query tokenTransactions($address: String!) {
      mintsAs0: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${t} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        to
        amount0
        amount1
        amountUSD
      }
      mintsAs1: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${r} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        to
        amount0
        amount1
        amountUSD
      }
      swapsAs0: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${t} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        from
        amount0In
        amount1In
        amount0Out
        amount1Out
        amountUSD
      }
      swapsAs1: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${r} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        from
        amount0In
        amount1In
        amount0Out
        amount1Out
        amountUSD
      }
      burnsAs0: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${t} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        sender
        amount0
        amount1
        amountUSD
      }
      burnsAs1: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { ${r} }) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        sender
        amount0
        amount1
        amountUSD
      }
    }
  `},fetchTokenTransactions=async(e,t)=>{try{let r=await (0,y.rf)(e).request(TOKEN_TRANSACTIONS(),{address:t}),a=r.mintsAs0.map(mapMints),o=r.mintsAs1.map(mapMints),n=r.burnsAs0.map(mapBurns),i=r.burnsAs1.map(mapBurns),l=r.swapsAs0.map(mapSwaps),s=r.swapsAs1.map(mapSwaps);return{data:[...a,...o,...n,...i,...l,...s],error:!1}}catch(e){return console.error(`Failed to fetch transactions for token ${t}`,e),{error:!0}}};var F=r(47439);o().extend(i());let B={refetchOnReconnect:!1,refetchOnMount:!1,refetchOnWindowFocus:!1},C={retry:3,retryDelay:3e3},O={refetchInterval:15e3,keepPreviousData:!0,...C},useProtocolDataQuery=()=>{let e=useChainNameByQuery(),[t,r]=(0,k.z)(),{blocks:a}=(0,T.I)([t,r]),[o,n]=null!=a?a:[],i=(0,y.J5)()?"stableSwap":"swap",{data:l}=(0,u.a)({queryKey:[`info/protocol/updateProtocolData/${i}`,e],queryFn:()=>fetchProtocolData(e,o,n),enabled:!!(e&&o&&n),...B,...C});return null!=l?l:void 0},useProtocolChartDataQuery=()=>{let e=useChainNameByQuery(),t=(0,y.J5)()?"stableSwap":"swap",{data:r}=(0,u.a)({queryKey:[`info/protocol/updateProtocolChartData/${t}`,e],queryFn:()=>fetchGlobalChartData(e),...B,...C});return null!=r?r:void 0},useProtocolTransactionsQuery=()=>{let e=useChainNameByQuery(),t=(0,y.J5)()?"stableSwap":"swap",{data:r}=(0,u.a)({queryKey:[`info/protocol/updateProtocolTransactionsData/${t}`,e],queryFn:()=>fetchTopTransactions(e),...B,...O});return null!=r?r:void 0},useAllPoolDataQuery=()=>{let e=useChainNameByQuery(),[t,r,a,o]=(0,k.z)(),{blocks:n}=(0,T.I)([t,r,a,o]),i=(0,y.J5)()?"stableSwap":"swap",{data:l}=(0,u.a)({queryKey:[`info/pools/data/${i}`,e],queryFn:()=>fetchAllPoolData(null!=n?n:[],e),enabled:!!(n&&e),...B,...C});return(0,s.useMemo)(()=>null!=l?l:{},[l])},usePoolDatasQuery=e=>{let t=e.join(""),r=useChainNameByQuery(),[a,o,n,i]=(0,k.z)(),{blocks:l}=(0,T.I)([a,o,n,i]),d=(0,y.J5)()?"stableSwap":"swap",{data:c}=(0,u.a)({queryKey:[`info/pool/data/${t}/${d}`,r],queryFn:()=>fetchAllPoolDataWithAddress(null!=l?l:[],r,e),enabled:!!(l&&r),...B,...O});return(0,s.useMemo)(()=>e.map(e=>{var t;return null==c?void 0:null===(t=c[e])||void 0===t?void 0:t.data}).filter(e=>e),[c,e])},usePoolChartDataQuery=e=>{var t;let r=useChainNameByQuery(),a=(0,y.J5)()?"stableSwap":"swap",{data:o}=(0,u.a)({queryKey:[`info/pool/chartData/${e}/${a}`,r],queryFn:()=>fetchPoolChartData(r,e),...B,...C});return null!==(t=null==o?void 0:o.data)&&void 0!==t?t:void 0},usePoolTransactionsQuery=e=>{var t;let r=useChainNameByQuery(),a=(0,y.J5)()?"stableSwap":"swap",{data:o}=(0,u.a)({queryKey:[`info/pool/transactionsData/${e}/${a}`,r],queryFn:()=>fetchPoolTransactions(r,e),...B,...C});return null!==(t=null==o?void 0:o.data)&&void 0!==t?t:void 0},useAllTokenHighLight=e=>{let{enable:t,targetChainName:r}=e,a=useChainNameByQuery(),o=null!=r?r:a,[n,i,l,d]=(0,k.z)(),{blocks:c}=(0,T.I)([n,i,l,d],void 0,void 0,o),m=(0,y.J5)()?"stableSwap":"swap",{data:p,isPending:v}=(0,u.a)({queryKey:[`info/token/data/${m}`,o],queryFn:()=>fetchAllTokenData(o,null!=c?c:[]),enabled:!!(t&&c&&o),...B,...C}),h=(0,s.useMemo)(()=>p?Object.keys(p).map(e=>{var t;return null==p?void 0:null===(t=p[e])||void 0===t?void 0:t.data}).filter(e=>e&&e.exists):[],[p]);return(0,s.useMemo)(()=>v?[]:null!=h?h:[],[v,h])},useAllTokenDataQuery=()=>{let e=useChainNameByQuery(),[t,r,a,o]=(0,k.z)(),{blocks:n}=(0,T.I)([t,r,a,o]),i=(0,y.J5)()?"stableSwap":"swap",{data:l}=(0,u.a)({queryKey:[`info/token/data/${i}`,e],queryFn:()=>fetchAllTokenData(e,null!=n?n:[]),enabled:!!(n&&e),...B,...C});return null!=l?l:{}},fetcher=(e,t,r)=>{let a=Math.ceil(e.length/50),o=[];for(let t=0;t<a;t++)o.push(e.slice(50*t,(t+1)*50));return Promise.all(o.map(e=>fetchAllTokenDataByAddresses(t,r,e)))},useTokenDatasQuery=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=null==e?void 0:e.join(""),a=useChainNameByQuery(),[o,n,i,l]=(0,k.z)(),{blocks:d}=(0,T.I)([o,n,i,l]),c=(0,y.J5)()?"stableSwap":"swap",{data:m,isPending:p}=(0,u.a)({queryKey:[`info/token/data/${r}/${c}`,a],queryFn:()=>fetcher(e||[],a,null!=d?d:[]),enabled:!!(d&&a),...B,...t?O:C}),v=(0,s.useMemo)(()=>m&&m.length>0?m.reduce((e,t)=>({...e,...t}),{}):{},[m]),h=(0,s.useMemo)(()=>{var t;if(e||!v)return null==e?void 0:null===(t=e.map(e=>{var t;return null==v?void 0:null===(t=v[e])||void 0===t?void 0:t.data}))||void 0===t?void 0:t.filter(e=>e&&e.exists)},[e,v]);return(0,s.useMemo)(()=>p?[]:null!=h?h:void 0,[p,h])},useTokenDataQuery=e=>{var t;let r=useTokenDatasQuery([null!=e?e:""]);return null!==(t=null==r?void 0:r.find(t=>t.address===e))&&void 0!==t?t:void 0},usePoolsForTokenQuery=e=>{var t;let r=useChainNameByQuery(),a=(0,y.J5)()?"stableSwap":"swap",{data:o}=(0,u.a)({queryKey:[`info/token/poolAddress/${e}/${a}`,r],queryFn:()=>fetchPoolsForToken(r,e),...B,...C});return null!==(t=null==o?void 0:o.addresses)&&void 0!==t?t:void 0},useTokenChartDataQuery=e=>{var t;let r=useChainNameByQuery(),a=(0,y.J5)()?"stableSwap":"swap",{data:o}=(0,u.a)({queryKey:[`info/token/chartData/${e}/${a}`,r],queryFn:()=>fetchTokenChartData(r,e),enabled:!!(e&&r),...B,...O});return null!==(t=null==o?void 0:o.data)&&void 0!==t?t:void 0},useTokenPriceDataQuery=(e,t,r)=>{var a;let n=o()().subtract(r).startOf("hours").unix(),i=useChainNameByQuery(),l=(0,y.J5)()?"stableSwap":"swap",{data:s}=(0,u.a)({queryKey:[`info/token/priceData/${e}/${l}`,i],queryFn:()=>fetchTokenPriceData(i,e,t,n),...B,...O});return null!==(a=null==s?void 0:s.data)&&void 0!==a?a:void 0},useTokenTransactionsQuery=e=>{var t;let r=useChainNameByQuery(),a=(0,y.J5)()?"stableSwap":"swap",{data:o}=(0,u.a)({queryKey:[`info/token/transactionsData/${e}/${a}`,r],queryFn:()=>fetchTokenTransactions(r,e),...B,...O});return null!==(t=null==o?void 0:o.data)&&void 0!==t?t:void 0},hooks_useGetChainName=()=>{let{pathname:e,query:t}=(0,l.useRouter)(),r=(0,s.useCallback)(()=>e.includes("eth")||"eth"===t.chain?"ETH":"BSC",[e,t]),[a,o]=(0,s.useState)(()=>r()),n=(0,s.useMemo)(()=>a,[a]);return(0,s.useEffect)(()=>{o(r())},[r]),n},useChainNameByQuery=()=>{let{query:e}=(0,l.useRouter)(),t=(0,s.useMemo)(()=>{switch(null==e?void 0:e.chainName){case"eth":return"ETH";case"polygon-zkevm":return"POLYGON_ZKEVM";case"zksync":return"ZKSYNC";case"arb":return"ARB";case"linea":return"LINEA";case"base":return"BASE";case"opbnb":return"OPBNB";default:return"BSC"}},[e]);return t},useChainIdByQuery=()=>{let e=useChainNameByQuery(),t=(0,s.useMemo)(()=>y.Pi[e],[e]);return t},stableSwapAPRWithAddressesFetcher=async e=>Promise.all(e.map(e=>(0,F.J)(e))),useStableSwapTopPoolsAPR=e=>{let t=(0,y.J5)(),r=useChainNameByQuery(),{data:a}=(0,u.a)({queryKey:["info/pool/stableAPRs/Addresses/",r],queryFn:()=>stableSwapAPRWithAddressesFetcher(e),enabled:!!(t&&(null==e?void 0:e.length)>0),...B,...C}),o=(0,s.useMemo)(()=>{let t={};return null==a||a.forEach((r,a)=>{t[e[a]]=null==r?void 0:r.toNumber()}),t},[e,a]);return(0,s.useMemo)(()=>t?o:{},[t,o])},useMultiChainPath=()=>{let e=(0,l.useRouter)(),{chainName:t}=e.query;return t?`/${t}`:""},useStableSwapPath=()=>(0,y.J5)()?"?type=stableSwap":""},4841:function(e,t,r){var a,o,n,i;r.d(t,{A:function(){return o},i:function(){return a}}),(n=a||(a={}))[n.SWAP=0]="SWAP",n[n.MINT=1]="MINT",n[n.BURN=2]="BURN",(i=o||(o={}))[i.V3=0]="V3",i[i.V2=1]="V2"},47439:function(e,t,r){r.d(t,{J:function(){return getAprsForStableFarm}});var a=r(97269),o=r(13138),n=r(69977),i=r.n(n),l=r(91529),s=r(33800),u=r(58833);let getAprsForStableFarm=async e=>{try{let[,,t]=(0,l.z)(),[r]=await (0,s.z)([t]),{virtualPriceAtLatestBlock:n,virtualPriceOneDayAgo:d}=await u.Wt.request(o.gql`
        query virtualPriceStableSwap($stableSwapAddress: String, $blockDayAgo: Int!) {
          virtualPriceAtLatestBlock: pair(id: $stableSwapAddress) {
            virtualPrice
          }
          virtualPriceOneDayAgo: pair(id: $stableSwapAddress, block: { number: $blockDayAgo }) {
            virtualPrice
          }
        }
      `,{stableSwapAddress:i()(e),blockDayAgo:r.number}),c=null==n?void 0:n.virtualPrice,m=null==d?void 0:d.virtualPrice,p=new a.Z(c),v=new a.Z(m),y=p.minus(v).div(p).plus(1).pow(52).minus(1).times(100);if(y.isFinite()&&y.isGreaterThan(0))return y;return new a.Z(0)}catch(e){console.error(e,"[LP APR Update] getAprsForStableFarm error")}return new a.Z("0")}},33800:function(e,t,r){r.d(t,{z:function(){return getBlocksFromTimestamps}});var a=r(13138),o=r(40916),n=r.n(o),i=r(6533),l=r(80332),s=r(66434);let getBlockSubqueries=e=>e.map(e=>`t${e}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${e}, timestamp_lt: ${e+600} }) {
      number
    }`),blocksQueryConstructor=e=>a.gql`query blocks {
    ${e}
  }`,getBlocksFromTimestamps=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"BSC";if((null==e?void 0:e.length)===0)return[];if("ZKSYNC"===a){var o;let r=null===(o=Object.entries(i.VQ).find(e=>{let[,t]=e;return t===a}))||void 0===o?void 0:o[0],s=r&&(0,l._X)(r),u=await e.reduce(async(e,t)=>{let r=await e;try{let e=await fetch(`https://coins.llama.fi/block/${s}/${t}`),a=await e.json().then(e=>e.height);a&&r.push({timestamp:t.toString(),number:parseInt(a,10)})}catch(e){console.error("Unable to fetch data:",e)}return r},Promise.resolve([]));return n()(u,e=>e.number,t)}let u=await (0,s.L)(blocksQueryConstructor,getBlockSubqueries(e),i.OO[a],r),d=[];if(u){for(let e of Object.keys(u))u[e].length>0&&d.push({timestamp:e.split("t")[1],number:parseInt(u[e][0].number,10)});return n()(d,e=>e.number,t)}return d}},92011:function(e,t,r){r.d(t,{T:function(){return getChangeForPeriod}});var a=r(18624);let getChangeForPeriod=(e,t,r)=>{let o=(0,a.D)(e,t),n=(0,a.D)(t,r),i=(0,a.Y)(o,n);return[o,i]}},91529:function(e,t,r){r.d(t,{z:function(){return getDeltaTimestamps}});var a=r(27860),o=r.n(a);let getDeltaTimestamps=()=>{let e=o()(),t=e.subtract(1,"days").startOf("minutes").unix(),r=e.subtract(2,"days").startOf("minutes").unix(),a=e.subtract(1,"weeks").startOf("minutes").unix(),n=e.subtract(2,"weeks").startOf("minutes").unix();return[t,r,a,n]}},97390:function(e,t,r){var a=r(67997),o=r.n(a),n=r(80332),i=r(37528),l=r(81824);let s={[n.a_.BSC]:"smartchain",[n.a_.ETHEREUM]:"ethereum",[n.a_.POLYGON_ZKEVM]:"polygonzkevm",[n.a_.ZKSYNC]:"zksync",[n.a_.ARBITRUM_ONE]:"arbitrum",[n.a_.LINEA]:"linea"},u=o()(e=>e&&s[e.chainId]&&(0,l.U)(e.address)?`https://assets-cdn.trustwallet.com/blockchains/${s[e.chainId]}/assets/${(0,i.xP)(e.address)}/logo.png`:null,e=>`${null==e?void 0:e.chainId}#${null==e?void 0:e.address}`);o()((e,t)=>e&&t&&s[t]&&(0,l.U)(e)?`https://assets-cdn.trustwallet.com/blockchains/${s[t]}/assets/${(0,i.xP)(e)}/logo.png`:null,(e,t)=>`${t}#${e}`),t.Z=u},77744:function(e,t,r){r.d(t,{I:function(){return useBlockFromTimeStampQuery}}),r(52983);var a=r(6533),o=r(33740),n=r(30989),i=r(33800);let useBlockFromTimeStampQuery=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,s=arguments.length>3?arguments[3]:void 0,u=(0,o.RE)(),d=null!=s?s:u,c=a.Pi[d],m=JSON.stringify(e),p=JSON.parse(m),{data:v}=(0,n.a)({queryKey:[`info/blocks/${m}/${c}`,null!==(t=a.VQ[c])&&void 0!==t?t:d],queryFn:()=>(0,i.z)(p,r,l,d),refetchOnReconnect:!1,refetchOnMount:!1,refetchOnWindowFocus:!1});return{blocks:v}}},18624:function(e,t,r){r.d(t,{D:function(){return getAmountChange},Y:function(){return getPercentChange}});let getAmountChange=(e,t)=>e&&t?e-t:e||0,getPercentChange=(e,t)=>e&&t?(e-t)/t*100:0},66434:function(e,t,r){r.d(t,{L:function(){return multiQuery}});var a=r(13138),o=r(58833),utils_requestWithTimeout=function(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([r?e.request(t,r):e.request(t),new Promise((e,t)=>{setTimeout(()=>{t(Error(`Request timed out after ${a} milliseconds`))},a)})])};let multiQuery=async function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3,i={},l=!1,s=0,u="string"==typeof r?new a.GraphQLClient(r,{headers:(0,o.vA)(r)}):r;try{for(;!l;){let r=t.length;s+n<t.length&&(r=s+n);let a=t.slice(s,r),o=await utils_requestWithTimeout(u,e(a));i={...i,...o},l=Object.keys(o).length<n||s+n>t.length,s+=n}return i}catch(e){return console.error("Failed to fetch info data",e),null}}},17884:function(e,t,r){var a=r(97458);r(52983);var o=r(91204);t.Z=e=>(0,a.jsx)(o.Z,{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"})})},98642:function(e,t,r){var a=r(97458);r(52983);var o=r(91204);t.Z=e=>(0,a.jsxs)(o.Z,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("g",{clipPath:"url(#clip0_2587_118570)",children:(0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5a3.997 3.997 0 011.17-2.83l1.24-1.26c.46-.44.68-1.1.55-1.8a1.99 1.99 0 00-1.39-1.53c-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88a4.008 4.008 0 013.23-2.83c1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_2587_118570",children:(0,a.jsx)("path",{fill:"#fff",d:"M0 0H24V24H0z"})})})]})},45900:function(e,t,r){var a=r(97458),o=r(52983),n=r(98642),i=r(3411);let l={};t.Z=e=>{let{srcs:t,useFilledIcon:r,alt:s,...u}=e,[,d]=(0,o.useState)(0),c=t.find(e=>!l[e]);return c?(0,a.jsx)("img",{...u,alt:s,src:c,onError:()=>{c&&(l[c]=!0),d(e=>e+1)}}):r?(0,a.jsx)(n.Z,{color:"textSubtle",...u}):(0,a.jsx)(i.Z,{...u})}},33360:function(e,t,r){r.d(t,{d:function(){return formatAmount}});let getFirstThreeNonZeroDecimals=e=>{var t;return null===(t=e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/))||void 0===t?void 0:t[0]},formatAmount=(e,t)=>{let{notation:r=e&&e>=1e4?"compact":"standard",displayThreshold:a,tokenPrecision:o,isInteger:n}=t||{notation:e&&e>=1e4?"compact":"standard"};if(0===e)return n?"0":"0.00";if(!e)return"-";if(!Number.isFinite(e))return"∞";if(a&&e<a)return`<${a}`;if(e<1&&!o)return getFirstThreeNonZeroDecimals(e);let i=2;o&&(i=e<1||"enhanced"===o?3:2);let l=parseFloat(null==e?void 0:e.toFixed(i));return Intl.NumberFormat("en-US",{notation:r,minimumFractionDigits:n&&e<1e3?0:i,maximumFractionDigits:n&&e<1e3?0:i,useGrouping:l<1e18}).format(l)}}}]);
//# sourceMappingURL=5705-1a492bc23c96fbff.js.map