(self.webpackChunkderi_fi_portal=self.webpackChunkderi_fi_portal||[]).push([[631],{61050:function(e,t,a){var n=a(34575).default,r=a(93913).default,s=a(87757),i=a(48926).default,o=a(36025),c=a(76276),h=[void 0,null,"<nil>"];e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.blockTracker;if(!t)throw new Error("createBlockCacheMiddleware - No BlockTracker specified");var a=new d,n={perma:a,block:a,fork:a};return c(function(){var e=i(s.mark((function e(r,i,c){var h,d,u,l,f,p;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.skipCache){e.next=2;break}return e.abrupt("return",c());case 2:if(h=o.cacheTypeForPayload(r),d=n[h]){e.next=6;break}return e.abrupt("return",c());case 6:if(d.canCacheRequest(r)){e.next=8;break}return e.abrupt("return",c());case 8:if((u=o.blockTagForPayload(r))||(u="latest"),"earliest"!==u){e.next=14;break}l="0x00",e.next=23;break;case 14:if("latest"!==u){e.next=22;break}return e.next=17,t.getLatestBlock();case 17:f=e.sent,a.clearBefore(f),l=f,e.next=23;break;case 22:l=u;case 23:return e.next=25,d.get(r,l);case 25:if(void 0!==(p=e.sent)){e.next=33;break}return e.next=29,c();case 29:return e.next=31,d.set(r,l,i.result);case 31:e.next=34;break;case 33:i.result=p;case 34:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}())};var d=function(){"use strict";function e(){n(this,e),this.cache={}}return r(e,[{key:"getBlockCacheForPayload",value:function(e,t){var a=Number.parseInt(t,16),n=this.cache[a];if(!n){var r={};this.cache[a]=r,n=r}return n}},{key:"get",value:function(){var e=i(s.mark((function e(t,a){var n,r,i;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.getBlockCacheForPayload(t,a)){e.next=3;break}return e.abrupt("return");case 3:return r=o.cacheIdentifierForPayload(t,!0),i=n[r],e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"set",value:function(){var e=i(s.mark((function e(t,a,n){var r,i;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.canCacheResult(t,n)){e.next=3;break}return e.abrupt("return");case 3:r=this.getBlockCacheForPayload(t,a),i=o.cacheIdentifierForPayload(t,!0),r[i]=n;case 6:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"canCacheRequest",value:function(e){return!!o.canCache(e)&&"pending"!==o.blockTagForPayload(e)}},{key:"canCacheResult",value:function(e,t){if(!h.includes(t))return!!(!["eth_getTransactionByHash","eth_getTransactionReceipt"].includes(e.method)||t&&t.blockHash&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==t.blockHash)}},{key:"clearBefore",value:function(e){var t=this,a=Number.parseInt(e,16);Object.keys(t.cache).map(Number).filter((function(e){return e<a})).forEach((function(e){return delete t.cache[e]}))}}]),e}()},36025:function(e,t,a){var n=a(35941);function r(e){return"never"!==o(e)}function s(e){var t=i(e);return t>=e.params.length?e.params:"eth_getBlockByNumber"===e.method?e.params.slice(1):e.params.slice(0,t)}function i(e){switch(e.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":return 1;case"eth_getBlockByNumber":return 0;default:return}}function o(e){switch(e.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":case"test_permaCache":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":case"test_forkCache":return"fork";case"eth_gasPrice":case"eth_blockNumber":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"test_blockCache":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":case"test_neverCache":return"never"}}e.exports={cacheIdentifierForPayload:function(e,t){var a=t?s(e):e.params;return r(e)?e.method+":"+n(a):null},canCache:r,blockTagForPayload:function(e){var t=i(e);if(t>=e.params.length)return null;return e.params[t]},paramsWithoutBlockTag:s,blockTagParamIndex:i,cacheTypeForPayload:o}},76276:function(e,t,a){var n=a(87757),r=a(48926).default;e.exports=function(e){return function(t,a,s,i){var o,c,h,d=new Promise((function(e){o=e})),u=function(){var e=r(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=!0,s((function(e){c=e,o()})),e.next=4,d;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(t,a,u).then(r(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=6;break}return e.next=3,d;case 3:c(null),e.next=7;break;case 6:i(null);case 7:case"end":return e.stop()}}),e)})))).catch((function(e){c?c(e):i(e)}))}}},56650:function(e,t,a){"use strict";var n=a(19778).Buffer;var r=a(13962),s=a(42696),i=r.BN,o=new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=t||{};var a=[{name:"nonce",length:32,allowLess:!0,default:new n([])},{name:"gasPrice",length:32,allowLess:!0,default:new n([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new n([])},{name:"to",allowZero:!0,length:20,default:new n([])},{name:"value",length:32,allowLess:!0,default:new n([])},{name:"data",alias:"input",allowZero:!0,default:new n([])},{name:"v",allowZero:!0,default:new n([28])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new n([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new n([])}];r.defineProperties(this,a,t),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)});var s=r.bufferToInt(this.v),i=Math.floor((s-35)/2);i<0&&(i=0),this._chainId=i||t.chainId||0,this._homestead=!0}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){void 0===e&&(e=!0);var t=void 0;if(e)t=this.raw;else if(this._chainId>0){var a=this.raw.slice();this.v=this._chainId,this.r=0,this.s=0,t=this.raw,this.raw=a}else t=this.raw.slice(0,6);return r.rlphash(t)},e.prototype.getChainId=function(){return this._chainId},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=r.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if((!this._senderPubKey||!this._senderPubKey.length)&&!this.verifySignature())throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._homestead&&1===new i(this.s).cmp(o))return!1;try{var t=r.bufferToInt(this.v);this._chainId>0&&(t-=2*this._chainId+8),this._senderPubKey=r.ecrecover(e,t,this.r,this.s)}catch(a){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){var t=this.hash(!1),a=r.ecsign(t,e);this._chainId>0&&(a.v+=2*this._chainId+8),Object.assign(this,a)},e.prototype.getDataFee=function(){for(var e=this.raw[5],t=new i(0),a=0;a<e.length;a++)0===e[a]?t.iaddn(s.txDataZeroGas.v):t.iaddn(s.txDataNonZeroGas.v);return t},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(s.txGas.v);return this._homestead&&this.toCreationAddress()&&e.iaddn(s.txCreation.v),e},e.prototype.getUpfrontCost=function(){return new i(this.gasLimit).imul(new i(this.gasPrice)).iadd(new i(this.value))},e.prototype.validate=function(e){var t=[];return this.verifySignature()||t.push("Invalid Signature"),this.getBaseFee().cmp(new i(this.gasLimit))>0&&t.push(["gas limit is too low. Need at least "+this.getBaseFee()]),void 0===e||!1===e?0===t.length:t.join(" ")},e}();e.exports=c},42696:function(e){"use strict";e.exports=JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')}}]);
//# sourceMappingURL=631.d0c04c9f.chunk.js.map