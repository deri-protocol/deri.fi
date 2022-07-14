"use strict";(self.webpackChunkderi_fi_portal=self.webpackChunkderi_fi_portal||[]).push([[344],{16110:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(68041),o=n(45238);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){this.emit(o._.Update,e)},i.emitError=function(e){this.emit(o._.Error,e)},i.emitDeactivate=function(){this.emit(o._.Deactivate)},r}(r.EventEmitter)},4344:function(e,t,n){n.r(t),n.d(t,{URI_AVAILABLE:function(){return l},UserRejectedRequestError:function(){return d},WalletConnectConnector:function(){return p}});var r=n(16110);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return u=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o},u.apply(null,arguments)}function s(e){var t="function"===typeof Map?new Map:void 0;return s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,i(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)},s(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l="URI_AVAILABLE",d=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return o(t,e),t}(s(Error));function f(e){var t=e.supportedChainIds,n=e.rpc;return t||(n?Object.keys(n).map((function(e){return Number(e)})):void 0)}var p=function(e){function t(t){var n;return(n=e.call(this,{supportedChainIds:f(t)})||this).config=t,n.handleChainChanged=n.handleChainChanged.bind(h(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(h(n)),n.handleDisconnect=n.handleDisconnect.bind(h(n)),n}o(t,e);var r=t.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate(),this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider=void 0),this.emitDeactivate()},r.activate=function(){try{var e=this,t=function(){function t(){return Promise.resolve(e.walletConnectProvider.enable().then((function(e){return e[0]})).catch((function(e){if("User closed modal"===e.message)throw new d;throw e}))).then((function(t){return e.walletConnectProvider.on("disconnect",e.handleDisconnect),e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),{provider:e.walletConnectProvider,account:t}}))}var n=function(){if(!e.walletConnectProvider.wc.connected)return Promise.resolve(e.walletConnectProvider.wc.createSession({chainId:e.supportedChainIds&&e.supportedChainIds.length>0?e.supportedChainIds[0]:1})).then((function(){e.emit(l,e.walletConnectProvider.wc.uri)}))}();return n&&n.then?n.then(t):t()},r=function(){if(!e.walletConnectProvider)return Promise.resolve(Promise.all([n.e(782),n.e(763),n.e(563)]).then(n.bind(n,19763)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(t){e.walletConnectProvider=new t(e.config)}))}();return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},r.getProvider=function(){try{return Promise.resolve(this.walletConnectProvider)}catch(e){return Promise.reject(e)}},r.getChainId=function(){try{return Promise.resolve(this.walletConnectProvider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},r.getAccount=function(){try{return Promise.resolve(this.walletConnectProvider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged))},r.close=function(){try{var e;return Promise.resolve(null==(e=this.walletConnectProvider)?void 0:e.close()).then((function(){}))}catch(t){return Promise.reject(t)}},t}(r.Q)}}]);