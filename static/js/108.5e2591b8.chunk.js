"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[108],{16110:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(68041),i=n(45238);var o=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.emitUpdate=function(e){this.emit(i._.Update,e)},o.emitError=function(e){this.emit(i._.Error,e)},o.emitDeactivate=function(){this.emit(i._.Deactivate)},r}(r.EventEmitter)},91533:function(e,t,n){n.r(t),n.d(t,{FortmaticConnector:function(){return s}});var r=n(16110),i=n(38618);var o={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan"},s=function(e){var t,r;function s(t){var n,r=t.apiKey,s=t.chainId;return Object.keys(o).includes(s.toString())||(0,i.Z)(!1),(n=e.call(this,{supportedChainIds:[s]})||this).apiKey=r,n.chainId=s,n}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var u=s.prototype;return u.activate=function(){try{var e=function(){return Promise.resolve(t.fortmatic.getProvider().enable().then((function(e){return e[0]}))).then((function(e){return{provider:t.fortmatic.getProvider(),chainId:t.chainId,account:e}}))},t=this,r=function(){if(!t.fortmatic)return Promise.resolve(n.e(897).then(n.t.bind(n,18897,23)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(e){t.fortmatic=new e(t.apiKey,1===t.chainId||4===t.chainId?void 0:o[t.chainId])}))}();return Promise.resolve(r&&r.then?r.then(e):e())}catch(i){return Promise.reject(i)}},u.getProvider=function(){try{return Promise.resolve(this.fortmatic.getProvider())}catch(e){return Promise.reject(e)}},u.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(e){return Promise.reject(e)}},u.getAccount=function(){try{return Promise.resolve(this.fortmatic.getProvider().send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},u.deactivate=function(){},u.close=function(){try{var e=this;return Promise.resolve(e.fortmatic.user.logout()).then((function(){e.emitDeactivate()}))}catch(t){return Promise.reject(t)}},s}(r.Q)},68041:function(e){var t,n="object"===typeof Reflect?Reflect:null,r=n&&"function"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!==e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"===typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}d(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&d(e,"error",t,n)}(e,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,s,f;if(u(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"===typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=c(e))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,f=a,console&&console.warn&&console.warn(f)}return e}function a(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=a.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):l(i,i.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function l(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function d(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=o[e];if(void 0===c)return!1;if("function"===typeof c)r(c,this,t);else{var f=c.length,a=l(c,f);for(n=0;n<f;++n)r(a[n],this,t)}return!0},o.prototype.addListener=function(e,t){return f(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return f(this,e,t,!0)},o.prototype.once=function(e,t){return u(t),this.on(e,v(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,v(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return h(this,e,!0)},o.prototype.rawListeners=function(e){return h(this,e,!1)},o.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}}]);