this.wp=this.wp||{},this.wp.plugins=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=405)}({0:function(t,e){!function(){t.exports=this.wp.element}()},13:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},15:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},18:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},19:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},2:function(t,e){!function(){t.exports=this.lodash}()},21:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(40),o=n(13);function u(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(o.a)(t):e}},32:function(t,e){!function(){t.exports=this.wp.hooks}()},361:function(t,e,n){"use strict";var r=n(0),o=n(7),u=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(o.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}));e.a=u},40:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},405:function(t,e,n){"use strict";n.r(e),n.d(e,"PluginArea",(function(){return C})),n.d(e,"withPluginContext",(function(){return O})),n.d(e,"registerPlugin",(function(){return w})),n.d(e,"unregisterPlugin",(function(){return x})),n.d(e,"getPlugin",(function(){return S})),n.d(e,"getPlugins",(function(){return _}));var r=n(19),o=n(18),u=n(13),i=n(23),c=n(15),l=n(21),s=n(0),a=n(2),f=n(32),p=n(8),g=n(9),b=Object(s.createContext)({name:null,icon:null}),d=b.Consumer,y=b.Provider,O=function(t){return Object(g.createHigherOrderComponent)((function(e){return function(n){return Object(s.createElement)(d,null,(function(r){return Object(s.createElement)(e,Object(p.a)({},n,t(r,n)))}))}}),"withPluginContext")},j=n(5),v=n(40),m=n(361);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var P={};function w(t,e){return"object"!==Object(v.a)(e)?(console.error("No settings object provided!"),null):"string"!=typeof t?(console.error("Plugin names must be strings."),null):/^[a-z][a-z0-9-]*$/.test(t)?(P[t]&&console.error('Plugin "'.concat(t,'" is already registered.')),e=Object(f.applyFilters)("plugins.registerPlugin",e,t),Object(a.isFunction)(e.render)?(P[t]=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(j.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:t,icon:m.a},e),Object(f.doAction)("plugins.pluginRegistered",e,t),e):(console.error('The "render" property must be specified and must be a valid function.'),null)):(console.error('Plugin names must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".'),null)}function x(t){if(P[t]){var e=P[t];return delete P[t],Object(f.doAction)("plugins.pluginUnregistered",e,t),e}console.error('Plugin "'+t+'" is not registered.')}function S(t){return P[t]}function _(){return Object.values(P)}function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var C=function(t){Object(l.a)(p,t);var e,n=(e=p,function(){var t,n=Object(c.a)(e);if(E()){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function p(){var t;return Object(r.a)(this,p),(t=n.apply(this,arguments)).setPlugins=t.setPlugins.bind(Object(u.a)(t)),t.state=t.getCurrentPluginsState(),t}return Object(o.a)(p,[{key:"getCurrentPluginsState",value:function(){return{plugins:Object(a.map)(_(),(function(t){var e=t.icon,n=t.name;return{Plugin:t.render,context:{name:n,icon:e}}}))}}},{key:"componentDidMount",value:function(){Object(f.addAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered",this.setPlugins),Object(f.addAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered",this.setPlugins)}},{key:"componentWillUnmount",value:function(){Object(f.removeAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered"),Object(f.removeAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered")}},{key:"setPlugins",value:function(){this.setState(this.getCurrentPluginsState)}},{key:"render",value:function(){return Object(s.createElement)("div",{style:{display:"none"}},Object(a.map)(this.state.plugins,(function(t){var e=t.context,n=t.Plugin;return Object(s.createElement)(y,{key:e.name,value:e},Object(s.createElement)(n,null))})))}}]),p}(s.Component)},5:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},7:function(t,e){!function(){t.exports=this.wp.primitives}()},8:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},9:function(t,e){!function(){t.exports=this.wp.compose}()}});