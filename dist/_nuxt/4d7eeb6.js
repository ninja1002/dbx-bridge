(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{530:function(e,t,n){var content=n(799);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(85).default)("1b7833da",content,!0,{sourceMap:!1})},576:function(e){e.exports=JSON.parse('{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"issuer","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"IssuerRights","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"TransferOwnership","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burnFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_issuer","type":"address"},{"internalType":"bool","name":"_value","type":"bool"}],"name":"setIssuerRights","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},577:function(e){e.exports=JSON.parse('{"abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"directionE","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"locked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_directionE","type":"bool"}],"name":"writeEntry","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"directionE","type":"bool"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"WriteEntry","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"_TKN","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"bool","name":"directionE","type":"bool"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Collect","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"bool","name":"directionE","type":"bool"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Dispense","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"TransferOwnership","type":"event"},{"inputs":[],"name":"TKN","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_directionE","type":"bool"}],"name":"collect","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_directionE","type":"bool"}],"name":"dispense","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},579:function(e,t){},591:function(e,t){},595:function(e,t){},638:function(e,t){},640:function(e,t){},662:function(e,t){},664:function(e,t){},676:function(e,t){},677:function(e,t){},695:function(e,t){},698:function(e,t){},700:function(e,t){},798:function(e,t,n){"use strict";n(530)},799:function(e,t,n){var r=n(84)(!1);r.push([e.i,".two_buttons{display:flex;justify-content:center;padding:10px}.two_buttons span{margin:10px}",""]),e.exports=r},896:function(e,t,n){"use strict";n.r(t);var r=n(20),o=n(15),c=n(21),l=(n(91),n(9),n(69),n(58),n(25),n(87),n(108),n(217),n(556),n(43),n(157),n(45),n(59),n(60),n(86),n(34),n(29),n(37),n(41),n(30),n(42),n(0)),d=n(892),m=n(388),h=n(898),v=n(557),_=n.n(v),f=n(576),y=n(577);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k="0xE562014651C191178CA2Be7f86910760Ce957C7f",T="0x3A893beAC002c85CB6D85865C66093F420483FE2",E="0x227996B1f17c5E8caB4Cc843124f0Cf6399d37D9",C="0xd274515b94fAb45639136a5BFF74F704509680c7",x="0x67dcAa9468c219ad81F5825EF0c8f58879c657dd",X="0x3cbc780d2934d55a06069e837fabd3e6fc23dab0",S=new d.a.JsonRpcProvider("https://bsc-dataseed.binance.org/"),N=new d.a.InfuraProvider(1,"976b8b2358be48468b36d8739e79414e"),I=new d.a.JsonRpcProvider("https://dbxnode.com"),M=new m.a(X,f.abi,N),D=new m.a(x,f.abi,S),O=new m.a("0x547e9337C88ADFe32C2A9e5273F281b813FB085D",y.abi,I),R={id:1,jsonrpc:"2.0",method:"wallet_addEthereumChain",params:[{chainName:"Binance Smart Chain Mainnet",chainId:"0x38",nativeCurrency:{name:"Binance Chain Native Token",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","wss://bsc-ws-node.nariox.org"],blockExplorerUrls:["https://bscscan.com"],iconUrls:["https://cryptologos.cc/logos/binance-coin-bnb-logo.svg","https://cryptologos.cc/logos/binance-coin-bnb-logo.png"]}]},A=["Ethereum (ERC-20)","Binance Smart Chain (BEP-20)","DBX Smart Network (DBX-20)"];function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e4;return new Promise((function(t){return setTimeout(t,e)}))}function P(e){return"0"===e?e:"0"===e.slice(-1)?P(e.substr(0,e.length-1)):"."===e.slice(-1)?e.substr(0,e.length-1):e}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return"0"===e?e:isNaN(Number(e))?"NaN":e.length<=18?P(("0."+"000000000000000000".substr(0,18-e.length)+e).substr(0,18-e.length+t+2)):[e.substr(0,e.length-18),e.slice(-18)].join(".").substr(0,e.length-18+t+1)}var H=l.a.extend({data:function(){return{Tokens:A,FromToken:"Ethereum (ERC-20)",ToToken:"Binance Smart Chain (BEP-20)",provider:null,signer:null,wallet:"",direction:"EB",approvedEB:"",approvedEX:"",approvedBE:"",approvedBX:"",approvedX:"",approvedX_dirE:!1,balanceE:"",balanceB:"",balanceX:"",inputAmount:"",controllerInfo:null,errorMessage_misc:"",warningMessage:"",successMessage:"",loading_swapping:!1,loading_approve:!1,loading_request:!1,loading_provider:!1,loading_controllerInfo:!0,loading_contractInfo:!1,loading_add:!1,paused_chainIdHandler:!1,inBetween:!1,hashes:null,hashes_url:null,hashes_names:null,dialog:!1,dialog_help:!1,chainId:null}},computed:{connectButtonLabel:function(){return this.wallet?this.wallet.substr(0,6)+"..."+this.wallet.substr(-4):"Connect"},loadingMessage:function(){return this.loading_controllerInfo?"Loading controller info...":this.loading_provider?"Connecting provider...":this.loading_contractInfo?"Loading contract info...":""},err_controllerInfo:function(){return!this.loading_controllerInfo&&!this.controllerInfo},err_shutDown:function(){return this.preShutDown},err_chainId:function(){return!!this.chainId&&this.chainId!=={EB:1,BE:56,EX:1,BX:56,XE:5348,XB:5348}[this.direction]},err_balanceLow:function(){return!!this.dirBalance[0]&&h.a.from(this.dirBalance[0]).lt(this.minBNStr)},errorMessage:function(){return this.err_controllerInfo?"Could not load info from controller. Usage is blocked. Try refreshing the page":this.err_shutDown?"Controller will soon shut down for maintenance. Usage is blocked. Please wait":this.err_chainId?"You selected wrong network for this direction. Select ".concat(this.dirChainName[0]," in your provider").concat("M"===this.providerType?"":" and refresh the page"):this.err_balanceLow?"Your balance is lower than minimum amount. Usage is blocked":this.errorMessage_misc},smAndUp:function(){return this.$vuetify.breakpoint.smAndUp},providerType:function(){return this.provider?this.provider.provider.isMetaMask?"M":"W":"N"},dirChainName:function(){return{EB:["Ethereum (ERC-20)","Binance Smart Chain (BEP-20)"],BE:["Binance Smart Chain (BEP-20)","Ethereum (ERC-20)"],EX:["Ethereum (ERC-20)","DBX Smart Network (DBX-20)"],BX:["Binance Smart Chain (BEP-20)","DBX Smart Network (DBX-20)"],XE:["DBX Smart Network (DBX-20)","Ethereum (ERC-20)"],XB:["DBX Smart Network (DBX-20)","Binance Smart Chain (BEP-20)"]}[this.direction]},dirChainNameShort:function(){return{EB:["ETH","BSC"],BE:["BSC","ETH"],EX:["ETH","DBX"],BX:["BSC","DBX"],XE:["DBX","ETH"],XB:["DBX","BSC"]}[this.direction]},dirChainExplorer:function(){return{EB:["https://etherscan.io","https://bscscan.com"],BE:["https://bscscan.com","https://etherscan.io"],EX:["https://etherscan.io","https://dbxscan.com"],BX:["https://bscscan.com","https://dbxscan.com/"],XE:["https://dbxscan.com/","https://etherscan.io"],XB:["https://dbxscan.com/","https://bscscan.com"]}[this.direction]},dirChainLogo:function(){return{EB:["/ethereumlogo.png","/binancelogo.png"],BE:["/binancelogo.png","/ethereumlogo.png"],EX:["/ethereumlogo.png","/dbxlogo.png"],BX:["/binancelogo.png","/dbxlogo.png"],XE:["/dbxlogo.png","/ethereumlogo.png"],XB:["/dbxlogo.png","/binancelogo.png"]}[this.direction]},dirBalance:function(){return{EB:[this.balanceE,this.balanceB],BE:[this.balanceB,this.balanceE],EX:[this.balanceE,this.balanceX],BX:[this.balanceB,this.balanceX],XE:[this.balanceX,this.balanceE],XB:[this.balanceX,this.balanceB]}[this.direction]},currentApproved:function(){return{EB:this.approvedEB,BE:this.approvedBE,EX:this.approvedEX,BX:this.approvedBX,XE:this.approvedX,XB:this.approvedX}[this.direction]},preShutDown:function(){var e;return!!(null===(e=this.controllerInfo)||void 0===e?void 0:e.PSD)},contractInfoOk:function(){return!!this.currentApproved&&!!this.dirBalance[0]},allSafe:function(){return!!this.wallet&&!!this.controllerInfo&&this.contractInfoOk&&!this.errorMessage&&!this.loading_controllerInfo&&!this.loading_provider&&!this.loading_contractInfo},approvedEqual:function(){return this.amountBN.eq(this.currentApproved)},amountValid:function(){return!!Number(this.inputAmount)},approvedNonZero:function(){return this.approvedBN.gt(0)},amountEnough:function(){return!!this.minBNStr&&this.amountBN.gte(this.minBNStr)},balanceEnough:function(){return this.amountBN.lte(this.dirBalance[0])},approvedEnough:function(){return!!this.controllerInfo&&this.approvedBN.gte(this.minBNStr)},requestDisabled:function(){return!(this.allSafe&&this.amountValid&&this.amountEnough&&this.balanceEnough)},canMaximizeAmount:function(){return!this.approvedNonZero&&this.amountBN.lt(this.dirBalance[0])},amountBN:function(){return this.amountValid?(input=this.inputAmount.trim(),(e=input.split("."))[1]&&(e[1]=e[1].substr(0,18)),h.a.from(e.join("")+"000000000000000000".substr(0,18-(e[1]||"").length))):h.a.from(0);var input,e},approvedBN:function(){return h.a.from(this.currentApproved||0)},feeBNStr:function(){return this.controllerInfo?this.controllerInfo[this.direction]:""},minBNStr:function(){return this.controllerInfo?this.controllerInfo["MIN_"+this.direction]:""}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.smAndUp||window.scrollTo(0,160),t.next=3,e.loadControllerInfo();case 3:case"end":return t.stop()}}),t)})))()},methods:{BNStrToNumstr:j,substractFee:function(e,t){return h.a.from(e).sub(t)},updateChainId:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=e.provider)||void 0===n?void 0:n.getNetwork();case 2:if(t.t2=r=t.sent,t.t1=null===t.t2,t.t1){t.next=6;break}t.t1=void 0===r;case 6:if(!t.t1){t.next=10;break}t.t3=void 0,t.next=11;break;case 10:t.t3=r.chainId;case 11:if(t.t0=t.t3,t.t0){t.next=14;break}t.t0=null;case 14:e.chainId=t.t0;case 15:case"end":return t.stop()}}),t)})))()},clickConnectWalletconnect:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dialog=!1,"M"===e.providerType&&(e.wallet=""),t.next=4,e.connectWalletconnect();case 4:if(!e.wallet){t.next=7;break}return t.next=7,e.loadContractInfo();case 7:e.contractInfoOk&&e.approvedNonZero&&e.restoreInputAmount();case 8:case"end":return t.stop()}}),t)})))()},connectWalletconnect:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_provider=!0,t.prev=1,r=n(875).default,o=new r("EB"===e.direction||"EX"===e.direction?{rpc:{1:"https://mainnet.infura.io/v3/f91771c75ee2409198e8ea8561bfaea8"},chainId:1,qrcode:!0}:"XB"===e.direction||"XE"===e.direction?{rpc:{5348:"https://dbxnode.com"},chainId:5348,qrcode:!0}:{rpc:{56:"https://bsc-dataseed.binance.org/"},chainId:56,qrcode:!0}),t.next=6,o.enable();case 6:return e.provider=new d.a.Web3Provider(o),e.signer=e.provider.getSigner(),t.next=10,e.signer.getAddress();case 10:return e.wallet=t.sent,t.next=13,e.updateChainId();case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),e.errorMessage_misc="Could not connect Walletconnect. Error: "+t.t0.message,console.error(t.t0);case 19:e.loading_provider=!1;case 20:case"end":return t.stop()}}),t,null,[[1,15]])})))()},clickConnectMetamask:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dialog=!1,"W"===e.providerType&&(e.wallet=""),t.next=4,e.connectMetamask();case 4:if(window.ethereum.on("chainChanged",function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log({chainId:n}),!e.loading_swapping){t.next=4;break}return e.paused_chainIdHandler=!0,t.abrupt("return");case 4:e.paused_chainIdHandler||(e.hashes=null),t.t0=n,t.next="0x1"===t.t0?8:"0x38"===t.t0?12:"0x14E4"===t.t0?16:20;break;case 8:return"Ethereum (ERC-20)"==e.ToToken&&(e.ToToken=e.FromToken,e.direction=e.direction[1]+e.direction[0]),e.direction="E"+e.direction[1],e.FromToken="Ethereum (ERC-20)",t.abrupt("break",21);case 12:return"Binance Smart Chain (BEP-20)"==e.ToToken&&(e.ToToken=e.FromToken,e.direction=e.direction[1]+e.direction[0]),e.direction="B"+e.direction[1],e.FromToken="Binance Smart Chain (BEP-20)",t.abrupt("break",21);case 16:return"DBX Smart Network (DBX-20)"==e.ToToken&&(e.ToToken=e.FromToken,e.direction=e.direction[1]+e.direction[0]),e.direction="X"+e.direction[1],e.FromToken="DBX Smart Network (DBX-20)",t.abrupt("break",21);case 20:return t.abrupt("return");case 21:return t.next=23,e.connectMetamask();case 23:e.contractInfoOk&&e.approvedNonZero&&e.restoreInputAmount();case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),!e.wallet){t.next=8;break}return t.next=8,e.loadContractInfo();case 8:e.contractInfoOk&&e.approvedNonZero&&e.restoreInputAmount();case 9:case"end":return t.stop()}}),t)})))()},connectMetamask:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading_provider=!0,t.prev=1,window.ethereum){t.next=4;break}throw new Error("Please set up MetaMask properly");case 4:return t.next=6,window.ethereum.enable();case 6:return e.provider=new d.a.Web3Provider(window.ethereum||window.web3),e.signer=e.provider.getSigner(),t.next=10,e.signer.getAddress();case 10:return e.wallet=t.sent,t.next=13,e.updateChainId();case 13:e.paused_chainIdHandler||(e.hashes=null),t.t0=e.chainId,t.next=1===t.t0?17:56===t.t0?21:5348===t.t0?25:29;break;case 17:return"Ethereum (ERC-20)"==e.ToToken&&(e.ToToken=e.FromToken,e.direction=e.direction[1]+e.direction[0]),e.direction="E"+e.direction[1],e.FromToken="Ethereum (ERC-20)",t.abrupt("break",30);case 21:return"Binance Smart Chain (BEP-20)"==e.ToToken&&(e.ToToken=e.FromToken,e.direction=e.direction[1]+e.direction[0]),e.direction="B"+e.direction[1],e.FromToken="Binance Smart Chain (BEP-20)",t.abrupt("break",30);case 25:return"DBX Smart Network (DBX-20)"==e.ToToken&&(e.ToToken=e.FromToken,e.direction=e.direction[1]+e.direction[0]),e.direction="X"+e.direction[1],e.FromToken="DBX Smart Network (DBX-20)",t.abrupt("break",30);case 29:return t.abrupt("return");case 30:t.next=36;break;case 32:t.prev=32,t.t1=t.catch(1),e.errorMessage_misc="Could not connect MetaMask. Error: "+t.t1.messagee,console.error(t.t1);case 36:e.loading_provider=!1;case 37:case"end":return t.stop()}}),t,null,[[1,32]])})))()},restoreInputAmount:function(){this.inputAmount=P(j(this.currentApproved,18))},handleClickAppend:function(){this.approvedEnough&&!this.approvedEqual?this.restoreInputAmount():this.canMaximizeAmount&&(this.inputAmount=P(j(this.dirBalance[0],18)))},handleClickAdd:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_add=!0,t.prev=1,t.next=4,null===(o=null===(n=e.provider)||void 0===n?void 0:(r=n.provider).request)||void 0===o?void 0:o.call(r,R);case 4:return c=t.sent,t.next=7,e.updateChainId();case 7:console.log({addedNetwork:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:e.loading_add=!1;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},selectFromOnChangeHandler:function(data){if(this.hashes=null,data==this.ToToken)this.direction=this.direction[1]+this.direction[0],this.ToToken=this.FromToken,this.FromToken=data;else switch(data){case"Ethereum (ERC-20)":this.direction="E"+this.direction[1],this.FromToken="Ethereum (ERC-20)";break;case"Binance Smart Chain (BEP-20)":this.direction="B"+this.direction[1],this.FromToken="Binance Smart Chain (BEP-20)";break;case"DBX Smart Network (DBX-20)":this.direction="X"+this.direction[1],this.FromToken="DBX Smart Network (DBX-20)"}},selectToOnChangeHandler:function(data){if(this.hashes=null,data==this.FromToken)this.direction=this.direction[1]+this.direction[0],this.FromToken=this.ToToken,this.ToToken=data;else switch(data){case"Ethereum (ERC-20)":this.direction=this.direction[0]+"E",this.ToToken="Ethereum (ERC-20)";break;case"Binance Smart Chain (BEP-20)":this.direction=this.direction[0]+"B",this.ToToken="Binance Smart Chain (BEP-20)";break;case"DBX Smart Network (DBX-20)":this.direction=this.direction[0]+"X",this.ToToken="DBX Smart Network (DBX-20)"}},loadControllerInfo:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_controllerInfo=!0,t.prev=1,t.next=4,_.a.get("https://dbxbridge.uc.r.appspot.com/info");case 4:if(e.controllerInfo=t.sent.data,e.controllerInfo){t.next=7;break}throw new Error("Received invalid data from controller");case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:e.loading_controllerInfo=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},loadContractInfo:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,d,m,h,v,_,f,y,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_contractInfo=!0,t.prev=1,n=e.wallet,t.next=5,Promise.all([D.balanceOf(n),M.balanceOf(n),I.getBalance(n),D.allowance(n,k),D.allowance(n,T),M.allowance(n,E),M.allowance(n,C),O.locked(n),O.directionE(n)]);case 5:r=t.sent.map((function(e){return e.toString()})),c=Object(o.a)(r,9),l=c[0],d=c[1],m=c[2],h=c[3],v=c[4],_=c[5],f=c[6],y=c[7],w=c[8],e.approvedBE=h,e.approvedBX=v,e.approvedEB=_,e.approvedEX=f,e.approvedX=y,e.approvedX_dirE="false"!==w,e.balanceB=l,e.balanceE=d,e.balanceX=m,t.next=30;break;case 27:t.prev=27,t.t0=t.catch(1),console.error(t.t0);case 30:e.loading_contractInfo=!1;case 31:case"end":return t.stop()}}),t,null,[[1,27]])})))()},handleClickRequest:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading_swapping=!0,e.hashes=null,e.hashes_url={C:e.dirChainExplorer[0],D:e.dirChainExplorer[1]},e.hashes_names={C:e.dirChainName[0],D:e.dirChainName[1]},t.prev=4,e.warningMessage="",e.approvedNonZero&&e.approvedEqual&&("XE"!==e.direction&&"XB"!==e.direction||e.approvedX_dirE===("XE"===e.direction))){t.next=10;break}return t.next=9,e.approve();case 9:e.inBetween=!0;case 10:return e.inputAmount="",t.next=13,e.requestSwap();case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(4),e.warningMessage=t.t0.message,console.error(t.t0);case 19:if(e.inBetween=!1,e.loading_swapping=!1,!e.paused_chainIdHandler){t.next=25;break}return t.next=24,e.clickConnectMetamask();case 24:e.paused_chainIdHandler=!1;case 25:case"end":return t.stop()}}),t,null,[[4,15]])})))()},approve:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading_approve=!0,"XE"!==e.direction&&"XB"!==e.direction){t.next=15;break}return t.next=4,O.populateTransaction.writeEntry("XE"===e.direction);case 4:return(n=t.sent).value=e.amountBN,console.log({amt:e.amountBN.toString(),bal:e.dirBalance[0]}),t.next=9,e.signer.sendTransaction(n);case 9:return r=t.sent,console.log({tx:r}),t.next=13,F();case 13:t.next=25;break;case 15:return o=new m.a({EB:X,BE:x,EX:X,BX:x}[e.direction],f.abi,e.signer),console.log({amt:e.amountBN.toString(),bal:e.dirBalance[0]}),t.next=19,o.approve({EB:E,BE:k,EX:C,BX:T}[e.direction],e.amountBN);case 19:return c=t.sent,console.log({tx:c}),t.next=23,c.wait();case 23:l=t.sent,console.log({receipt:l});case 25:return t.next=27,e.loadContractInfo();case 27:e.loading_approve=!1;case 28:case"end":return t.stop()}}),t)})))()},requestSwap:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading_request=!0,t.prev=1,t.next=4,_.a.get("https://dbxbridge.uc.r.appspot.com/process?direction=".concat(e.direction,"&address=").concat(e.wallet));case 4:e.hashes=t.sent.data,console.log(e.hashes),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(1),console.error(B({},t.t0)),new Error(t.t0.response.data);case 12:return t.next=14,e.loadContractInfo();case 14:e.loading_request=!1;case 15:case"end":return t.stop()}}),t,null,[[1,8]])})))()},stablehanler:function(){console.log("Go >>> Stable Token")}}}),W=H,V=(n(798),n(72)),L=n(159),U=n.n(L),J=n(894),Z=n(319),z=n(879),K=n(897),Y=n(364),$=n(893),G=n(877),component=Object(V.a)(W,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{staticClass:"wrapper"},[n("header",{staticClass:"header"},[n("div",{staticClass:"header__inner"},[n("div",{staticClass:"header__logo"},[n("a",{staticClass:"logo",attrs:{href:"#"}},[n("span",{staticClass:"logo__hover"},[n("img",{attrs:{src:"/images/general/logo-hover.svg",alt:""}})]),e._v(" "),n("span",{staticClass:"logo__img"},[n("img",{attrs:{src:"/images/general/logo.png",alt:""}})])])]),e._v(" "),n("v-dialog",{attrs:{"max-width":"300"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[!e.controllerInfo||e.controllerInfo.PSD?n("div",{staticClass:"header__btn",attrs:{disabled:""}},[n("span",{staticClass:"btn header__link"},[e._v(e._s(e.connectButtonLabel))])]):n("div",e._g(e._b({staticClass:"header__btn"},"div",o,!1),r),[n("span",{staticClass:"btn header__link"},[e._v(e._s(e.connectButtonLabel))]),e._v(" "),e.wallet?n("v-icon",{attrs:{right:""}},[e._v("mdi-check")]):e._e()],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("div",{staticClass:"connect-modal__content"},[n("div",{staticClass:"connect-modal__content-inner"},[n("div",{staticClass:"connect-modal__title"},[e._v("Connect using:")]),e._v(" "),n("div",{staticClass:"connect-modal__links"},[n("div",{staticClass:"connect-modal__link btn",attrs:{disabled:"M"===e.providerType},on:{click:e.clickConnectMetamask}},[e._v("\n                  METAMASK\n                ")]),e._v(" "),n("div",{staticClass:"connect-modal__link btn",attrs:{disabled:"W"===e.providerType},on:{click:e.clickConnectWalletconnect}},[e._v("\n                  CONNECTWALLET\n                ")])])])])])],1)]),e._v(" "),n("main",{staticClass:"main"},[n("div",{staticClass:"two_buttons"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"btn header__link",on:{click:e.stablehanler}},[e._v("\n            Native Token\n          ")])]),e._v(" "),n("router-link",{attrs:{to:"/stableToken"}},[n("span",{staticClass:"btn header__link"},[e._v("\n            Stable Token\n          ")])])],1),e._v(" "),n("div",{staticClass:"swapper"},[n("div",{staticClass:"swapper__inner"},[n("div",{staticClass:"swapper__row"},[n("div",{staticClass:"swapper__col"},[n("v-select",{attrs:{outlined:"",value:e.FromToken,items:e.Tokens,disabled:!!e.loading_swapping,label:"Select from",solo:""},on:{change:e.selectFromOnChangeHandler},scopedSlots:e._u([{key:"selection",fn:function(t){var r=t.item;return["DBX Smart Network (DBX-20)"===e.FromToken?n("img",{attrs:{src:"/dbx.svg"}}):e._e(),e._v(" "),"Ethereum (ERC-20)"===e.FromToken?n("img",{attrs:{src:"/Ethereum.svg"}}):e._e(),e._v(" "),"Binance Smart Chain (BEP-20)"===e.FromToken?n("img",{attrs:{src:"/Binance.svg"}}):e._e(),e._v(" "),n("span",{staticClass:"select-btn__output-txt"},[e._v(e._s(r))])]}},{key:"item",fn:function(t){var r=t.item;return["DBX Smart Network (DBX-20)"===r?n("img",{attrs:{src:"/dbx.svg"}}):e._e(),e._v(" "),"Ethereum (ERC-20)"===r?n("img",{attrs:{src:"/Ethereum.svg"}}):e._e(),e._v(" "),"Binance Smart Chain (BEP-20)"===r?n("img",{attrs:{src:"/Binance.svg"}}):e._e(),e._v("\n                  "+e._s(r)+"\n                ")]}}])},[n("v-icon",{attrs:{slot:"append",size:"12"},slot:"append"},[e._v("fa fa-chevron-down")])],1),e._v(" "),n("div",{staticClass:"swapper-quantity"},[n("div",{staticClass:"swapper-quantity__item"},[e._v("\n                  Balance:\n                  "),n("span",[e._v(e._s(e.BNStrToNumstr(e.dirBalance[0]))+" DBX")])]),e._v(" "),n("div",{staticClass:"swapper-quantity__item"},[e._v("\n                  Approved:\n                  "),n("span",[e._v(e._s(e.BNStrToNumstr(e.currentApproved))+" DBX")])]),e._v(" "),n("div",{staticClass:"swapper-quantity__item"},[e._v("\n                  Fee:\n                  "),n("span",[e._v("\n                    "+e._s(e.controllerInfo?e.BNStrToNumstr(e.feeBNStr):"...")+" DBX\n                  ")])]),e._v(" "),n("div",{staticClass:"swapper-quantity__item"},[e._v("\n                  Min:\n                  "),n("span",[e._v(e._s(e.BNStrToNumstr(e.minBNStr))+" DBX")])])])],1),e._v(" "),n("div",{staticClass:"swapper__col"},[n("v-select",{staticStyle:{height:"70px"},attrs:{outlined:"",value:e.ToToken,items:e.Tokens,disabled:!!e.loading_swapping,label:"Select to",solo:""},on:{change:e.selectToOnChangeHandler},scopedSlots:e._u([{key:"selection",fn:function(t){var r=t.item;return["DBX Smart Network (DBX-20)"===e.ToToken?n("img",{attrs:{src:"/dbx.svg"}}):e._e(),e._v(" "),"Ethereum (ERC-20)"===e.ToToken?n("img",{attrs:{src:"/Ethereum.svg"}}):e._e(),e._v(" "),"Binance Smart Chain (BEP-20)"===e.ToToken?n("img",{attrs:{src:"/Binance.svg"}}):e._e(),e._v(" "),n("span",{staticClass:"select-btn__output-txt"},[e._v(e._s(r))])]}},{key:"item",fn:function(t){var r=t.item;return["DBX Smart Network (DBX-20)"===r?n("img",{attrs:{src:"/dbx.svg"}}):e._e(),e._v(" "),"Ethereum (ERC-20)"===r?n("img",{attrs:{src:"/Ethereum.svg"}}):e._e(),e._v(" "),"Binance Smart Chain (BEP-20)"===r?n("img",{attrs:{src:"/Binance.svg"}}):e._e(),e._v("\n\n                  "+e._s(r)+"\n                ")]}}])},[n("v-icon",{attrs:{slot:"append",size:"12"},slot:"append"},[e._v("fa fa-chevron-down")])],1),e._v(" "),n("div",{staticClass:"swapper-quantity"},[n("div",{staticClass:"swapper-quantity__item"},[e._v("\n                  Balance:\n                  "),n("span",[e._v(e._s(e.BNStrToNumstr(e.dirBalance[1]))+" DBX")])]),e._v(" "),n("div",{staticClass:"swapper-quantity__item"},[e._v("\n                  Will receive:\n                  "),n("span",[e._v("\n                    "+e._s(e.amountEnough&&e.controllerInfo?"~"+e.BNStrToNumstr(e.substractFee(e.amountBN.toString(),e.feeBNStr).toString()):"...")+"\n                    DBX\n                  ")])])])],1)]),e._v(" "),n("div",{staticClass:"swapper__amount"},[n("div",{staticClass:"swapper-amount"},[n("div",{staticClass:"swapper-amount__title"},[e._v("Amount:")]),e._v(" "),n("div",{staticClass:"swapper-amount__field-wrapper"},[e.contractInfoOk?n("v-text-field",{attrs:{"append-icon":e.approvedEnough&&!e.approvedEqual?"mdi-restore":e.canMaximizeAmount?"mdi-arrow-collapse-up":"",rules:[function(){return e.amountValid||"Enter proper amount"},function(){return e.amountEnough||"Amount is too low"},function(){return e.balanceEnough||"Balance too low"}],label:"Choose the vacancy",placeholder:"123.456...",required:""},on:{"click:append":e.handleClickAppend},model:{value:e.inputAmount,callback:function(t){e.inputAmount=t},expression:"inputAmount"}}):n("v-text-field",{attrs:{outlined:"",label:"Choose the vacancy",disabled:""}})],1)])]),e._v(" "),e.requestDisabled?n("button",{staticClass:"swapper__controls",attrs:{loading:e.loading_swapping,disabled:""},on:{click:e.handleClickRequest}},[n("span",{staticClass:"btn swapper__link"},[e._v("\n              SWAP\n            ")])]):n("button",{staticClass:"swapper__controls",attrs:{loading:e.loading_swapping},on:{click:e.handleClickRequest}},[n("span",{staticClass:"btn swapper__link"},[e._v("\n              SWAP\n            ")])])]),e._v(" "),e.hashes&&e.hashes_url&&e.hashes_names?n("v-card-text",[e._v("\n          Transaction hashes:\n          "),n("br"),e._v("\n          Collect ("+e._s(e.hashes_names.C)+")\n          "),n("a",{attrs:{href:e.hashes_url.C+"/tx/"+e.hashes.txHashCollect,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n            "+e._s(e.hashes.txHashCollect)+"\n          ")]),e._v(" "),n("br"),e._v("\n          Dispense ("+e._s(e.hashes_names.D)+")\n          "),n("a",{attrs:{href:e.hashes_url.D+"/tx/"+e.hashes.txHashDispense,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n            "+e._s(e.hashes.txHashDispense)+"\n          ")])]):e._e()],1),e._v(" "),e.loadingMessage||e.errorMessage||e.warningMessage||e.inBetween||e.hashes?n("div",{staticClass:"message-container"},[e.loadingMessage?n("v-alert",{attrs:{outlined:"",type:"info"}},[e._v("\n          "+e._s(e.loadingMessage)+"\n        ")]):e._e(),e._v(" "),e.errorMessage?n("v-alert",{attrs:{dismissible:"",outlined:"",type:"error"}},[e._v("\n          "+e._s(e.errorMessage)+"\n        ")]):e._e(),e._v(" "),e.warningMessage?n("v-alert",{attrs:{dismissible:"",outlined:"",type:"warning"}},[e._v("\n          "+e._s(e.warningMessage)+"\n        ")]):e._e(),e._v(" "),e.inBetween?n("v-alert",{attrs:{outlined:"",type:"info"}},[e._v("\n          Value sent. Sending request to controller. It might take up to 5min,\n          please wait...\n        ")]):e._e(),e._v(" "),e.hashes?n("v-alert",{attrs:{outlined:"",type:"success"}},[e._v("\n          Success! Save transaction hashes below\n        ")]):e._e()],1):e._e()]),e._v(" "),n("div",{staticClass:"decor"},[n("div",{staticClass:"decor__img decor__img--1"},[n("picture",[n("source",{attrs:{srcset:"/images/general/decor-1.png",type:"image/webp"}}),e._v(" "),n("img",{attrs:{src:"/images/general/decor-1.png",width:"525",height:"561",alt:"img"}})])]),e._v(" "),n("div",{staticClass:"decor__img decor__img--2"},[n("picture",[n("source",{attrs:{srcset:"/images/general/decor-2.png",type:"image/webp"}}),e._v(" "),n("img",{attrs:{src:"/images/general/decor-2.png",width:"268",height:"268",alt:"img"}})])]),e._v(" "),n("div",{staticClass:"decor__img decor__img--3"},[n("picture",[n("source",{attrs:{srcset:"/images/general/decor-3.png",type:"image/webp"}}),e._v(" "),n("img",{attrs:{src:"/images/general/decor-3.png",width:"603",height:"312",alt:"img"}})])]),e._v(" "),n("div",{staticClass:"decor__img decor__img--4"},[n("picture",[n("source",{attrs:{srcset:"/images/general/decor-4.png",type:"image/webp"}}),e._v(" "),n("img",{attrs:{src:"/images/general/decor-4.png",width:"1188",height:"516",alt:"img"}})])]),e._v(" "),n("div",{staticClass:"decor__img decor__img--5"},[n("picture",[n("source",{attrs:{srcset:"/images/general/decor-5.png",type:"image/webp"}}),e._v(" "),n("img",{attrs:{src:"/images/general/decor-5.png",width:"637",height:"799",alt:"img"}})])]),e._v(" "),n("div",{staticClass:"decor__img decor__img--6"},[n("picture",[n("source",{attrs:{srcset:"/images/general/decor-6.png",type:"image/webp"}}),e._v(" "),n("img",{attrs:{src:"/images/general/decor-6.png",width:"408",height:"573",alt:"img"}})])])])])])}),[],!1,null,null,null);t.default=component.exports;U()(component,{VAlert:J.a,VApp:Z.a,VCardText:z.a,VDialog:K.a,VIcon:Y.a,VSelect:$.a,VTextField:G.a})}}]);