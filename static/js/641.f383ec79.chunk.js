(self.webpackChunkderi_fi_portal=self.webpackChunkderi_fi_portal||[]).push([[641],{16525:function(e,t,r){var n=r(58331);function o(){return"undefined"!==typeof Reflect&&Reflect.get?(e.exports=o=Reflect.get,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var o=n(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(this,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},58331:function(e,t,r){var n=r(29754);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},10090:function(e,t,r){var n=r(87757),o=r(48926).default,i=r(34575).default,s=r(93913).default,c=r(81506).default,a=r(16525).default,u=r(29754).default,l=r(2205).default,p=r(99842).default,h=(r(78630),r(7301),r(38985)),f=function(e,t){return e+t},y=["sync","latest"],_=function(e){"use strict";l(r,e);var t=p(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,r),(e=t.call(this))._blockResetDuration=n.blockResetDuration||2e4,e._blockResetTimeout,e._currentBlock=null,e._isRunning=!1,e._onNewListener=e._onNewListener.bind(c(e)),e._onRemoveListener=e._onRemoveListener.bind(c(e)),e._resetCurrentBlock=e._resetCurrentBlock.bind(c(e)),e._setupInternalEvents(),e}return s(r,[{key:"isRunning",value:function(){return this._isRunning}},{key:"getCurrentBlock",value:function(){return this._currentBlock}},{key:"getLatestBlock",value:function(){var e=o(n.mark((function e(){var t,r=this;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._currentBlock){e.next=2;break}return e.abrupt("return",this._currentBlock);case 2:return e.next=4,new Promise((function(e){return r.once("latest",e)}));case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeAllListeners",value:function(e){e?a(u(r.prototype),"removeAllListeners",this).call(this,e):a(u(r.prototype),"removeAllListeners",this).call(this),this._setupInternalEvents(),this._onRemoveListener()}},{key:"_start",value:function(){}},{key:"_end",value:function(){}},{key:"_setupInternalEvents",value:function(){this.removeListener("newListener",this._onNewListener),this.removeListener("removeListener",this._onRemoveListener),this.on("newListener",this._onNewListener),this.on("removeListener",this._onRemoveListener)}},{key:"_onNewListener",value:function(e,t){y.includes(e)&&this._maybeStart()}},{key:"_onRemoveListener",value:function(e,t){this._getBlockTrackerEventCount()>0||this._maybeEnd()}},{key:"_maybeStart",value:function(){this._isRunning||(this._isRunning=!0,this._cancelBlockResetTimeout(),this._start())}},{key:"_maybeEnd",value:function(){this._isRunning&&(this._isRunning=!1,this._setupBlockResetTimeout(),this._end())}},{key:"_getBlockTrackerEventCount",value:function(){var e=this;return y.map((function(t){return e.listenerCount(t)})).reduce(f)}},{key:"_newPotentialLatest",value:function(e){var t=this._currentBlock;t&&k(e)<=k(t)||this._setCurrentBlock(e)}},{key:"_setCurrentBlock",value:function(e){var t=this._currentBlock;this._currentBlock=e,this.emit("latest",e),this.emit("sync",{oldBlock:t,newBlock:e})}},{key:"_setupBlockResetTimeout",value:function(){this._cancelBlockResetTimeout(),this._blockResetTimeout=setTimeout(this._resetCurrentBlock,this._blockResetDuration),this._blockResetTimeout.unref&&this._blockResetTimeout.unref()}},{key:"_cancelBlockResetTimeout",value:function(){clearTimeout(this._blockResetTimeout)}},{key:"_resetCurrentBlock",value:function(){this._currentBlock=null}}]),r}(h);function k(e){return Number.parseInt(e,16)}e.exports=_},89641:function(e,t,r){var n=r(87757),o=r(48926).default,i=r(34575).default,s=r(93913).default,c=r(2205).default,a=r(99842).default,u=r(7301),l=r(10090),p=function(e){"use strict";c(r,e);var t=a(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(i(this,r),!n.provider)throw new Error("PollingBlockTracker - no provider specified.");var o=n.pollingInterval||2e4,s=n.retryTimeout||o/10,c=void 0===n.keepEventLoopActive||n.keepEventLoopActive,a=n.setSkipCacheFlag||!1;return(e=t.call(this,Object.assign({blockResetDuration:o},n)))._provider=n.provider,e._pollingInterval=o,e._retryTimeout=s,e._keepEventLoopActive=c,e._setSkipCacheFlag=a,e}return s(r,[{key:"checkForLatestBlock",value:function(){var e=o(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateLatestBlock();case 2:return e.next=4,this.getLatestBlock();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_start",value:function(){var e=this;this._performSync().catch((function(t){return e.emit("error",t)}))}},{key:"_performSync",value:function(){var e=o(n.mark((function e(){var t;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._isRunning){e.next=16;break}return e.prev=1,e.next=4,this._updateLatestBlock();case 4:return e.next=6,h(this._pollingInterval,!this._keepEventLoopActive);case 6:e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),t=new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n".concat(e.t0.stack));try{this.emit("error",t)}catch(r){console.error(t)}return e.next=14,h(this._retryTimeout,!this._keepEventLoopActive);case 14:e.next=0;break;case 16:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"_updateLatestBlock",value:function(){var e=o(n.mark((function e(){var t;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchLatestBlock();case 2:t=e.sent,this._newPotentialLatest(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchLatestBlock",value:function(){var e=o(n.mark((function e(){var t,r,o=this;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]},this._setSkipCacheFlag&&(t.skipCache=!0),e.next=4,u((function(e){return o._provider.sendAsync(t,e)}))();case 4:if(!(r=e.sent).error){e.next=7;break}throw new Error("PollingBlockTracker - encountered error fetching block:\n".concat(r.error));case 7:return e.abrupt("return",r.result);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(l);function h(e,t){return new Promise((function(r){var n=setTimeout(r,e);n.unref&&t&&n.unref()}))}e.exports=p},78630:function(e,t,r){var n=r(25307),o=r(39702)();function i(e){this.currentProvider=e}function s(e){return function(){var t=this,r=[].slice.call(arguments),n=r.pop();t.sendAsync({method:e,params:r},n)}}function c(e,t){return function(){var r=this,n=[].slice.call(arguments),o=n.pop();n.length<e&&n.push("latest"),r.sendAsync({method:t,params:n},o)}}e.exports=i,i.prototype.getBalance=c(2,"eth_getBalance"),i.prototype.getCode=c(2,"eth_getCode"),i.prototype.getTransactionCount=c(2,"eth_getTransactionCount"),i.prototype.getStorageAt=c(3,"eth_getStorageAt"),i.prototype.call=c(2,"eth_call"),i.prototype.protocolVersion=s("eth_protocolVersion"),i.prototype.syncing=s("eth_syncing"),i.prototype.coinbase=s("eth_coinbase"),i.prototype.mining=s("eth_mining"),i.prototype.hashrate=s("eth_hashrate"),i.prototype.gasPrice=s("eth_gasPrice"),i.prototype.accounts=s("eth_accounts"),i.prototype.blockNumber=s("eth_blockNumber"),i.prototype.getBlockTransactionCountByHash=s("eth_getBlockTransactionCountByHash"),i.prototype.getBlockTransactionCountByNumber=s("eth_getBlockTransactionCountByNumber"),i.prototype.getUncleCountByBlockHash=s("eth_getUncleCountByBlockHash"),i.prototype.getUncleCountByBlockNumber=s("eth_getUncleCountByBlockNumber"),i.prototype.sign=s("eth_sign"),i.prototype.sendTransaction=s("eth_sendTransaction"),i.prototype.sendRawTransaction=s("eth_sendRawTransaction"),i.prototype.estimateGas=s("eth_estimateGas"),i.prototype.getBlockByHash=s("eth_getBlockByHash"),i.prototype.getBlockByNumber=s("eth_getBlockByNumber"),i.prototype.getTransactionByHash=s("eth_getTransactionByHash"),i.prototype.getTransactionByBlockHashAndIndex=s("eth_getTransactionByBlockHashAndIndex"),i.prototype.getTransactionByBlockNumberAndIndex=s("eth_getTransactionByBlockNumberAndIndex"),i.prototype.getTransactionReceipt=s("eth_getTransactionReceipt"),i.prototype.getUncleByBlockHashAndIndex=s("eth_getUncleByBlockHashAndIndex"),i.prototype.getUncleByBlockNumberAndIndex=s("eth_getUncleByBlockNumberAndIndex"),i.prototype.getCompilers=s("eth_getCompilers"),i.prototype.compileLLL=s("eth_compileLLL"),i.prototype.compileSolidity=s("eth_compileSolidity"),i.prototype.compileSerpent=s("eth_compileSerpent"),i.prototype.newFilter=s("eth_newFilter"),i.prototype.newBlockFilter=s("eth_newBlockFilter"),i.prototype.newPendingTransactionFilter=s("eth_newPendingTransactionFilter"),i.prototype.uninstallFilter=s("eth_uninstallFilter"),i.prototype.getFilterChanges=s("eth_getFilterChanges"),i.prototype.getFilterLogs=s("eth_getFilterLogs"),i.prototype.getLogs=s("eth_getLogs"),i.prototype.getWork=s("eth_getWork"),i.prototype.submitWork=s("eth_submitWork"),i.prototype.submitHashrate=s("eth_submitHashrate"),i.prototype.sendAsync=function(e,t){var r;this.currentProvider.sendAsync((r=e,n({id:o(),jsonrpc:"2.0",params:[]},r)),(function(e,r){if(!e&&r.error&&(e=new Error("EthQuery - RPC Error - "+r.error.message)),e)return t(e);t(null,r.result)}))}},39702:function(e){e.exports=function(e){var t=(e=e||{}).max||Number.MAX_SAFE_INTEGER,r="undefined"!==typeof e.start?e.start:Math.floor(Math.random()*t);return function(){return r%=t,r++}}},7301:function(e){"use strict";var t=function(e,t){return function(){for(var r=this,n=t.promiseModule,o=new Array(arguments.length),i=0;i<arguments.length;i++)o[i]=arguments[i];return new n((function(n,i){t.errorFirst?o.push((function(e,r){if(t.multiArgs){for(var o=new Array(arguments.length-1),s=1;s<arguments.length;s++)o[s-1]=arguments[s];e?(o.unshift(e),i(o)):n(o)}else e?i(e):n(r)})):o.push((function(e){if(t.multiArgs){for(var r=new Array(arguments.length-1),o=0;o<arguments.length;o++)r[o]=arguments[o];n(r)}else n(e)})),e.apply(r,o)}))}};e.exports=function(e,r){r=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:!0,promiseModule:Promise},r);var n,o=function(e){var t=function(t){return"string"===typeof t?e===t:t.test(e)};return r.include?r.include.some(t):!r.exclude.some(t)};for(var i in n="function"===typeof e?function(){return r.excludeMain?e.apply(this,arguments):t(e,r).apply(this,arguments)}:Object.create(Object.getPrototypeOf(e)),e){var s=e[i];n[i]="function"===typeof s&&o(i)?t(s,r):s}return n}},38985:function(e,t,r){var n=r(97736),o=r(68041),i="object"===typeof Reflect?Reflect:null,s=i&&"function"===typeof i.apply?i.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};function c(){o.call(this)}function a(e,t,r){try{s(e,t,r)}catch(n){setTimeout((function(){throw n}))}}function u(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}e.exports=c,n.inherits(c,o),c.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var c=o[e];if(void 0===c)return!1;if("function"===typeof c)a(c,this,t);else{var l=c.length,p=u(c,l);for(r=0;r<l;++r)a(p[r],this,t)}return!0}}}]);