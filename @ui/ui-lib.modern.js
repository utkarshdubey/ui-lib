var e="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,n={},t=[],o=n.constructor,r=n.hasOwnProperty,i="assign"in o?o.assign:function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)r.call(t,o)&&(e[o]=t[o])}return e};function l(e,n,t,o){void 0===o&&(o=!1);var r=[];return function e(n,i){var l=n,a=Array.isArray(l),u=0;for(l=a?l:l[Symbol.iterator]();;){var s;if(a){if(u>=l.length)break;s=l[u++]}else{if((u=l.next()).done)break;s=u.value}var p=s;Array.isArray(p)&&i>0?e(p,i-1):o&&null==p||r.push(t?t(p):p)}}(e,~~n||1),r}var a=function(e,n,t){return n in e?e[n]=null==t?"":t:null==t?e.removeAttribute(n):e.setAttribute(n,t)},u=function(e){return"o"===e[0]&&"n"===e[1]};function s(e,n){if(null!=n){var t,o,r;(o=null!=(t=n._vNode))&&(r=n._vNode._nextDomNode),(n.parentNode!==e||t._reorder)&&(null!=r?e.insertBefore(n,r):t._reorder||e.appendChild(n));var i=n.previousSibling,l=n.nextSibling;if(i!=l){if(null!=i){var a=i._vNode;null!=a&&a._nextDomNode!==n&&p(a,n,"_nextDomNode")}if(null!=l){var u=l._vNode;null!=u&&u._nextDomNode!==n&&p(u,n,"_prevDomNode")}o&&(t._prevDomNode=i,t._nextDomNode=l)}}}function p(e,n,t){null!=e&&(e[t]=n,p(e._prevVnode,n,t))}function c(e,n){for(var t=arguments.length,o=new Array(t>2?t-2:0),r=2;r<t;r++)o[r-2]=arguments[r];if(null==e||"boolean"==typeof e)return null;n=null==n?{}:i({},n),o.length&&(o=l(o,Infinity),n.children=o);var a=n.ref;a&&delete n.ref;var s=n.key;s&&delete n.key;var p={};for(var c in n)u(c)&&(p[c.substr(2).toLowerCase()]=n[c]);return d(e,n,p,s,a)}function f(){}function d(e,n,t,o,r){var i={type:"string"==typeof e?e.toLowerCase():e,props:n,events:t,key:o,_reorder:!1,ref:r,_children:null,_dom:null,_component:null,__uAttr:null,_nextDomNode:null,_prevDomNode:null,_prevVnode:null};return i.__uAttr=i}function m(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return d(null,String(e));if(Array.isArray(e))return c(f,null,e);if(null!=e._dom){var n=d(e.type,e.props,e.events,e.key,null);return n._dom=e._dom,n}return e}function v(e,n){for(var t=arguments.length,o=new Array(t>2?t-2:0),r=2;r<t;r++)o[r-2]=arguments[r];if(e&&(e.__currentLifeCycle=n,null!=e[n])){var i=function(){e[n].apply(e,o)};if("undefined"!=typeof Promise)return Promise.resolve(i()).catch((function(n){return e.componentDidCatch&&e.componentDidCatch(n)}));try{i()}catch(n){e.componentDidCatch&&e.componentDidCatch(n)}}}function _(e){if(e!==n&&null!=e){e._prevVnode&&_(e._prevVnode);var o=e._dom,r=e._component;if(v(r,"componentWillUnmount",!0),null!=r&&(r.base=r._vnode=null),o){null!=e._nextDomNode&&p(e._nextDomNode._vNode,null,"_prevDomNode"),null!=e._prevDomNode&&p(e._prevDomNode._vNode,null,"_nextDomNode");var i=e._children||t,l=Array.isArray(i),a=0;for(i=l?i:i[Symbol.iterator]();;){var u;if(l){if(a>=i.length)break;u=i[a++]}else{if((a=i.next()).done)break;u=a.value}_(u)}if(e._prevVnode=e._component=e._dom=e._prevDomNode=e._nextDomNode=null,Array.isArray(o))for(var s;s=t.pop.call(o||t);)h(s);else h(o);o.onclick=o._component=o._listeners=o._prevVnode=o._vNode=o._currentProps=null}}}function h(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e){for(var n;n=e.pop();)v(n,"componentDidMount"),n._didMount=!0}function b(e,t,o,r){var i,l=e.type;if(r)"string"==typeof e.props?i=document.createTextNode(e.props):x(i=document.createElement(l),e,n);else{if(l!==t.type)return b(e,null,null,!0);if(i=o,o instanceof Text){var a=e.props;o.nodeValue!==a&&(o.nodeValue=a)}else x(i,e,t)}return null!=e._prevVnode&&(e._prevVnode._dom=i),i}var g=function(e){return"key"!==e&&"children"!==e};function x(e,t,o){if(!(e instanceof Text)){var r=t.props,i=e._currentProps||n;e._currentProps=r;var l=t.events,s=null!=o?o.events:n;for(var p in i)p in r||a(e,p,null);for(var c in r)if(!u(c)&&g(c)){var d=r[c],m=i[c];d!==m&&("className"!==(c="class"===c?"className":c)?"style"!==c?a(e,c,d):N(e,d,m):C(e,d,m))}!function(e,t,o){if(e!=t){for(var r in null==t&&(t=n),null==e?e=n:(o.onclick=f,o._listeners={}),e){var i=e[r];t[r]!==i&&null!=i&&(o.addEventListener(r,A),o._listeners[r]=i)}for(var l in t)null==e[l]&&(delete o._listeners[l],o.removeEventListener(l,A))}}(l,s,e)}}function C(e,n,t){var o=Array.isArray;o(n)&&(n=n.join(" ").trim()),o(t)&&(t=t.join(" ").trim()),n!==t&&a(e,"className",n)}function N(e,n,t){t=t||"";var o=e.style;if("string"!=typeof n){var r="string"==typeof t;if(r)o.cssText="";else for(var i in t)i in n||(o[i]="");for(var l in n){var a=n[l];(r||a!==t[l])&&(o[l]=a)}}else o.cssText=n}function A(e){return this._listeners[e.type].call(this,e)}function S(e,t,o,r,i,l,a){for(var u=e._children,p=u.length,c=t.length,f=[],d=0;d<Math.max(p,c);d++){var m=u[d],v=t[d]||n,h=void 0;if(null!=m){var y=m._nextDomNode||v._nextDomNode;if(v===n&&null!=(h=k(t,c,d))){var b=h._dom;y=Array.isArray(b)?b[0]:b,m._reorder=!0}m._nextDomNode=y;var g=U(o,m,v,r,i,l,a);Array.isArray(g)||(s(o,g),f.push(g))}else null!=v&&_(v)}return f}function k(e,n,t){for(var o;t<n&&!(o=e[t]);t++);return o}var D=[],P=function(){function t(e,n){this.props=e,this.context=n,this.state={}}var o=t.prototype;return o.render=function(e,n){},o.setState=function(t){this._nextState=i({},this.state||n),this._oldState=i({},this._nextState);var o,r="function"==typeof t?t=t(this._nextState,this.props):t;null!=r&&(i(this._nextState,r),i(this.state,this._nextState),(o=this)._dirty=!0,1===D.push(o)&&(null!=window.requestAnimationFrame?window.requestAnimationFrame(w):e(w)))},o.forceUpdate=function(e){var n=this.parentDom,t=[];if(n){var o=this._vnode;this.base=U(n,o,o,this.context,t,this,!1!==e),this.base instanceof Node&&!this.base.parentNode&&s(n,this.base)}e&&e(),y(t)},t}();function w(){var e;for(D.sort((function(e,n){return e._depth-n._depth}));e=D.pop();)e._dirty&&(e._nextState=null,e._dirty=!1,e.forceUpdate(!1))}function V(e,n,t){return this.constructor(e,t)}function U(e,o,r,l,a,u,s){if("boolean"==typeof o&&(o=null),null==r||null==o||r.type!==o.type){if(null!=r&&r!==n&&_(r),null==o)return null;r=n}var p=r===n;if(o.__uAttr!==o)return console.warn("component not of expected type =>",o),null;o._children=L(o);var c=o.type;if(c===f||r.type===f)return S(o,p?t:r._children||t,e,l,a,u,s);if("function"==typeof c){var d,h=function(e,t,o,r,l,a,u){var s,p,c,f=e.type;if(t._component){if((s=e._component=t._component).base=e._dom=t._dom,s.props=e.props,s.context=l,c=!1,!a)if(null!=s.shouldComponentUpdate&&!1!==s.shouldComponentUpdate(e.props,s.state));else if(null!=s.shouldComponentUpdate)return{node:n,shouldUpdate:!1}}else c=!0,f.prototype&&f.prototype.render?(s=e._component=new f(e.props,l),r.push(s)):(s=new P(e.props,l),e._component=null,s.constructor=f,s.render=V);return s.parentDom=o,null==s.state&&(s.state={}),s._nextState=i({},s.state),null!=f.getDerivedStateFromProps&&(i(s._nextState,f.getDerivedStateFromProps(e.props,s._nextState)||n),i(s._oldState||(s._oldState={}),s._nextState)),c?v(s,"componentWillMount"):v(s,"componentWillUpdate",e.props,s._nextState,l),s.state=s._nextState,(p=s._prevVnode=m(s.render(e.props,s.state)))&&(p._dom=e._dom,p._reorder=e._reorder),s._depth=u?1+~~u._depth:0,{node:p,shouldUpdate:!c}}(o,r,e,a,l,s,u);d=h.node;var y=h.shouldUpdate;if(null!=o._component&&(o._component._vnode=o),d===n)return null;var g=o._dom=U(e,d,"_prevVnode"in r?r._prevVnode:r,l,a,o._component,s);if(null==d)return;return d._dom=g,null!=o._component&&(o._component.base=g),y&&v(o._component,"componentDidUpdate",r.props,(r._component||n)._oldState),null!=r._component&&delete r._component._oldState,d!==o._prevVnode&&(o._prevVnode=d),null==g||Array.isArray(g)||(g._vNode=o),g}o._dom=p?b(o,null,null,!0):b(o,r,r._dom,!1),null!=u&&(u.base=o._dom);var x=o._dom;return x._vNode=o,S(o,p?t:r._children||t,x,l,a,o._component,s),x}function L(e){return l(e.props&&e.props.children||t,Infinity,m)}function O(e,n){var t=c(f,null,e);if(n.hasChildNodes())return j(n,t);var o=[];U(n,t,null,{},o,null,!1),y(o)}function T(e){if("#comment"!==e.nodeName){if(e instanceof Text)return e.nodeValue;var n=c(e.tagName,null,Array.from(e.childNodes).map(T));return n._children=L(n),n._dom=e,e._vNode=n,n}}function j(e,n){var t=Array.from(e.childNodes),o=c(f,null,t.map(T));o._dom=t,o._children=L(o);var r=[];U(e,n,o,{},r,null,!1),y(r)}function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function F(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}function M(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n.indexOf(t=i[o])>=0||(r[t]=e[t]);return r}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var W=function(e){function n(n,t){var o,r=n.componentPromise,i=n.fallbackComponent,l=M(n,["componentPromise","fallbackComponent"]);return(o=e.call(this,l,t)||this).state={ready:!1,componentPromise:r,finalComponent:null,fallbackComponent:i},o}F(n,e),n.getDerivedStateFromProps=function(e,n){var t=n||{};return t.componentPromise===e.componentPromise||null!=e.componentPromise&&(t.componentPromise=e.componentPromise,t.ready=!1,t.finalComponent=null),t};var t=n.prototype;return t.render=function(e,n){var t=e.eager,o=void 0===t||t,r=e.loadComponent,i=void 0!==r&&r,l=M(e,["eager","loadComponent"]),a=n.ready,u=n.finalComponent;if(!o&&!i||a||this.loadComponent(),a)return c(u,l);var s=M(l,["children"]);return null!=this.state.fallbackComponent?c(this.state.fallbackComponent,s):H},t.loadComponent=function(){var e=this;return this.state.componentPromise().then((function(n){e.setState({ready:!0,finalComponent:n})}))},n}(P),H=c("div",null,"Loading.."),I=[],K={subscribe:function(e){I.includes(e)||I.push(e)},unsubscribe:function(e){for(var n=0;n<I.length;n++)if(I[n]===e)return I.splice(n,1)},emit:function(e,n){var t=I,o=Array.isArray(t),r=0;for(t=o?t:t[Symbol.iterator]();;){var i;if(o){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}i(e,n)}},unsubscribeAll:function(){I.length=0}};function q(e){window.history.pushState(n,document.title,e),K.emit(e,{type:"load",native:!1})}function Q(e){window.history.replaceState(n,document.title,e),K.emit(e,{type:"redirect",native:!1})}var B=function(e){F(o,e),o.__emitter=function(){K.emit(o.getPath+o.getQs,{type:"popstate",native:!0})};var n,t=o.prototype;function o(n,t){var o,r=n.children,i=n.fallbackComponent,l=M(n,["children","fallbackComponent"]);o=e.call(this,l,t)||this,i=i||o._notFoundComponent.bind(R(o)),o.state={routes:o.initComponents(r),fallbackComponent:i};var a=o.getCurrentComponent(),u=a[1];return o.state.component=a[0],o.state.match=u,o._routeChangeHandler=o._routeChangeHandler.bind(R(o)),o}return t.componentWillMount=function(){K.subscribe(this._routeChangeHandler),window.addEventListener("popstate",o.__emitter)},t.componentWillUnmount=function(){window.removeEventListener("popstate",o.__emitter),this.props.destroySubscriptionOnUnmount&&K.unsubscribeAll()},t.absolute=function(e){return new URL(e||"",location.protocol+"//"+location.host).toString()},t.getCurrentComponent=function(){return this.getPathComponent(o.getPath)||[]},t._routeChangeHandler=function(){var e=this.getCurrentComponent();this.setState({component:e[0],match:e[1]})},t._notFoundComponent=function(){return c("div",null,'The Requested URL "'+this.absolute(o.getPath)+'" was not found')},t.getPathComponent=function(e){var n=this.state.routes,t=Array.isArray(n),o=0;for(n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if((o=n.next()).done)break;r=o.value}var i=r.component,l=r.regex.exec(e);if(l)return[i,l]}return[]},t.initComponents=function(e){var n=[],t=e,o=Array.isArray(t),r=0;for(t=o?t:t[Symbol.iterator]();;){var i;if(o){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}null!=i.props&&null!=i.props.path&&n.push({regex:i.props.path,component:i})}return n},(n=[{key:"getPath",get:function(){return location.pathname}},{key:"getQs",get:function(){return location.search}}])&&function(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(o,n),t.componentDidMount=function(){},t.render=function(){var e,n=M(this.props,["children"]),t=E({match:this.state.match},n);return null!=this.state.component&&null!=this.state.match?i((e=this.state.component).props,t):e=c(this.state.fallbackComponent,t),e.__uAttr||(e=c(e,t)),c(f,null,e)},o}(P);function $(e){var n=e.native,t=e.href,o=e.onClick,r=M(e,["native","href","onClick"]);return r.href=t,n||null==t||(r.onClick=function(n){return function(e,n,t){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),q(n),null!=t&&t(e,n))}(n,e.href,o)}),c("a",r)}function z(e){return RegExp("^"+e+"(/?)$")}export default P;export{$ as A,W as AsyncComponent,P as Component,f as Fragment,B as Router,K as RouterSubscription,z as absolutePath,c as createElement,c as h,j as hydrate,q as loadURL,Q as redirect,O as render};
//# sourceMappingURL=ui-lib.modern.js.map
