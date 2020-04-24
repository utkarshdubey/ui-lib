function e(e,t,o){if(!(null==e||e instanceof Text||t===o)){for(var r in null==e._listeners&&(e._listeners=P),null!=t?e._listeners==P&&(e.onclick=j):t=P,null==o&&(o=P),o)r in t||(delete e._listeners[r],e.removeEventListener(r,n));for(var i in t){var l=t[i],a=o[i];a!==l&&(null==a&&e.addEventListener(i,n),e._listeners[i]=l)}}}function n(e){return this._listeners[e.type].call(this,e)}var t="undefined"!=typeof Promise,o="undefined"!=typeof requestAnimationFrame,r=setTimeout,i=t?Promise.prototype.then.bind(Promise.resolve()):r,l={deferImplementation:i,scheduleRender:o?function(e){return requestAnimationFrame(e)}:i,eagerlyHydrate:!0,beforeHookRender:null},a=[],u=[];function s(){d(a)}function p(){d(u)}function d(e){for(var n;n=e.pop();)m(n)}function c(e){var n=e.name;return"componentDidMount"===n?a.push(e):"componentDidUpdate"===n?u.push(e):void m(e)}function m(e){var n=e.args,o=e.bind,r=e.name;o._lastLifeCycleMethod=r;var i=o[r],l=!!o.componentDidCatch;if(t)Promise.resolve().then(()=>i&&i.apply(o,n)).catch(e=>{if(l)return o.componentDidCatch(e);throw e});else try{i.apply(o,n)}catch(e){if(l)return o.componentDidCatch(e);throw e}}var f={key:1,ref:1,children:1};function h(e){return e in f}function _(e,n,t){t=t||"";var o=e.style;if("string"!=typeof n){var r="string"==typeof t;if(r)o.cssText="";else for(var i in t)i in n||(o[i]="");for(var l in n){var a=n[l];(r||a!==t[l])&&(o[l]=a)}}else o.cssText=n}function v(e,n,t){var o=Array.isArray;o(n)&&(n=n.join(" ").trim()),o(t)&&(t=t.join(" ").trim()),n!==t&&S(e,"className",n)}function y(e,n,t){g(e,n,t,"_renders"),g(e,n,t,"_renderedBy")}var b={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"};function g(e,n,t,o){var r=e;if(r){var i=b[n];return i&&(r[i]=null),r[n]=t,g(r[o],n,t,o)}}function S(e,n,t){return n in e?e[n]=null==t?"":t:null==t?e.removeAttribute(n):e.setAttribute(n,t)}function C(e,n){null!=n&&g(e,"_parentDom",n,"_renderedBy")}function N(n,t){if(null!=n&&n!==P){N(n._renders,t);var o=n._component;t||null==o||(o.setState=j,o._VNode=null,c({name:"componentWillUnmount",bind:o}));var r=n._children;if(r)for(;r.length;)N(r.pop(),t);!function(n,t){var o=n._dom;t||null==o||(!(n.type===B)&&e(o,null,n.events),function(e){V(D,e)}(o),function(e){if(null!=e){var n=e.parentNode;n&&n.removeChild(e)}}(o)),function(e,n){if(!n&&null!=e){var t=e._nextSibDomVNode;if(null!=t){var o=t._dom,r=o&&o.previousSibling;y(t,"_prevSibDomVNode",r&&r._VNode)}var i=e._prevSibDomVNode;if(null!=i){var l=i._dom,a=l&&l.nextSibling;y(i,"_nextSibDomVNode",a&&a._VNode),V(x,e)}}}(n,t)}(n,t)}}var D={_VNode:1,_listeners:1,onclick:1},x={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1};function V(e,n){if(null!=n)for(var t in e)n[t]=null}var P={},k=[];function w(e,n,t){return function e(n,t,o,r){if(!n)return t;for(var i=0;i<n.length;i++){var l=n[i];Array.isArray(l)?e(l,t,o,r):r&&null==l||t.push(o?o(l):l)}return t}(e,[],n,t)}function A(e){return"o"===e[0]&&"n"===e[1]}var F=P.hasOwnProperty,U="assign"in Object?P.constructor.assign:function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)F.call(t,o)&&(e[o]=t[o])}return e},B=Object.freeze({});function L(e,n){if(null==e||"boolean"==typeof e)return null;null==n&&(n=P);var t,o=n.ref,r=n.key,i="string"==typeof e?{}:null;n=R(n,i);for(var l=arguments.length,a=new Array(l>2?l-2:0),u=2;u<l;u++)a[u-2]=arguments[u];return a.length&&null==n.children&&(t=w(a)),null!=n.children&&(t=w([n.children])),n.children=t,O(e,n,i,r,o)}function O(e,n,t,o,r){var i={type:"string"==typeof e?e.toLowerCase():e,props:n,events:t,key:o,ref:r,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return i.__self=i,i}var j=function(){},M={key:1,ref:1};function R(e,n){var t={},o=null!=n;for(var r in e)null==M[r]&&(t[r]=e[r],o&&A(r)&&(n[r.substr(2).toLowerCase()]=e[r]));return t}function E(e){return null==e||"boolean"==typeof e?L(B):"string"==typeof e||"number"==typeof e?O(null,String(e)):Array.isArray(e)?L(j,null,e):null!=e._dom?O(e.type,e.props,e.events,e.key,null):e}function H(e,n,t,o){return function(e,n,t,o,r){for(var i=e.type===j,l=n.length,a=Math.max(l,t.length),u=0;u<a;u++){var s=n[u]||(u<l?L(B):null),p=t[u]||P;if(null==p._nextSibDomVNode){var d=i?e._nextSibDomVNode:null;null!=d&&g(s,"_nextSibDomVNode",d,"_renderedBy")}J(s,p,o,null,r),i&&T(e,s,u)}}(e,e._children||k,(n||P)._children||k,t,o)}function T(e,n,t){null!=n&&null!=n._nextSibDomVNode&&g(e,"_nextSibDomVNode",n._nextSibDomVNode,"_renderedBy");var o=n&&(n._dom||n._FragmentDomNodeChildren),r=e._FragmentDomNodeChildren;null==r&&g(e,"_FragmentDomNodeChildren",r=[],"_renderedBy"),r[t]=o}var W=[];class K{constructor(e){this.state={},this.props=e}render(e,n){return null}setState(e){if(this._oldState=U({},this.state),this._nextState=U({},this.state),"function"==typeof e){var n=e(this._nextState,this.props);if(null==n)return;U(this._nextState,n)}else U(this._nextState,e);var t;this.state=this._nextState,(t=this)._dirty=!0,1===W.push(t)&&l.scheduleRender(q)}forceUpdate(e){var n=!1!==e;this.base=J(this._VNode,U({},this._VNode),this._VNode._parentDom,n,{depth:this._depth}),"function"==typeof e&&e(),s(),p()}}function q(){var e;for(W.sort((e,n)=>e._depth-n._depth);e=W.pop();)e._dirty&&(e._dirty=!1,e.forceUpdate(!1))}var I=e=>"function"==typeof e&&e!==j,Q={_nextSibDomVNode:1,_prevSibDomVNode:1};function z(e,n){if(n._renders=e,e)for(var t in e._renderedBy=n,Q)e[t]=n[t]}function $(e){return this.constructor(e)}function G(e,n,t){var o,r=U({},e.state||P,e._nextState||P),i=null!=(o=n.getDerivedStateFromProps)?U({},o(t.props,r)):null;i&&U(r,i),e._nextState=r}function J(n,t,o,r,i){if("boolean"==typeof n&&(n=null),null==t&&(t=P),null!=n){if(n===P)return null;if(!((l=n)&&l.__self===l||(console.warn("component not of expected type =>",l),0)))return null;var l;if(t===n)return n._dom;!function(e,n){if(n!==P&&null!=e&&null!=n){var t=n._prevSibDomVNode;null==e._prevSibDomVNode&&null!=t&&(y(e,"_prevSibDomVNode",t),y(t,"_nextSibDomVNode",e));var o=n._nextSibDomVNode;null==e._nextSibDomVNode&&null!=o&&(y(e,"_nextSibDomVNode",o),y(o,"_prevSibDomVNode",e))}}(n,t);var a=t.type,u=n.type,s=I(u);u===a&&s&&(n._component=t._component),u!==a&&(N(t),t=P);var p,d=n;if("string"!=typeof n.props&&u!==B&&(n._children=null==(p=n.props.children)?[]:w([p],E),n=function(e,n,t,o){var r;return null!=e&&I(r=e.type)?(n=n||P,function(e){var n=e.prototype;return!(!n||!n.render)}(r)?function(e,n,t,o){var r,i=e.type,l=e._component;if(null!=l){if(null!=l.shouldComponentUpdate&&!t&&!1===l.shouldComponentUpdate(e.props,l._nextState||l.state))return P;G(l,i,e),c({bind:l,name:"componentWillUpdate",args:[e.props,l._nextState]}),r="componentDidUpdate"}else r="componentDidMount",l=new i(e.props),e._component=l,G(l,i,e),c({bind:l,name:"componentWillMount"}),l._depth=++o.depth;l._VNode=e;var a=l._oldState,u=n.props;l.state=l._nextState,l._oldState=null,l._nextState=null,l.props=e.props;var s=E(l.render(l.props,l.state));return c({bind:l,name:r,args:"componentDidUpdate"===r?[u,a]:[]}),z(s,e),s}(e,n,t,o):function(e,n){var t,o,r=e.type;return e._component?o=e._component:(o=new K(e.props),e._component=o,o.render=$,o.constructor=r,o.props=e.props),t=E(o.render(e.props)),o._depth=++n.depth,z(t,e),t}(e,o)):e}(n,t,r,i)),I(t.type)&&(t=t._renders),n!==d)return J(n,t,o,r,i);if(a=t.type,u=n.type,C(n,o),u===j)return H(n,t,o,i);var m=t;return a!==u&&(t=null),function(n,t,o){var r,i=(t=t||P)===P,l=t._dom;(r=n.type!==t.type||null==l?function(e){if("string"==typeof e.props)return document.createTextNode("");var n=e.type;return n===B?document.createComment(""):document.createElement(n)}(n):l)._VNode=n,function(n,t,o){if(t.type!==B){if(o=o||P,"string"==typeof t.props)return function(e,n,t){return n===t||(e.nodeValue=n)}(n,t.props,o.props);var r=o.props||P,i=t.props;null!=r&&function(e,n,t){for(var o in n)o in t||S(e,o,null)}(n,r,i),function(e,n,t){for(var o in t)if(!A(o)&&!h(o)){var r=t[o],i=n[o];r!==i&&("className"!==(o="class"===o?"className":o)?"style"!==o?S(e,o,r):_(e,r,i):v(e,r,i))}}(n,r,i),e(n,t.events,o.events)}}(r,n,i?null:t),y(n,"_dom",r),function e(n,t){n&&(null!=n._component?n._component.base=t:e(n._renderedBy,t))}(n,r),i&&function(e,n,t){var o=function(e){if(e){var n=e._dom;if(n)return n;var t=e._FragmentDomNodeChildren;return t?function e(n){for(var t=0;t<n.length;t++){var o=n[t];if(Array.isArray(o)){var r=e(o);if(r)return r}else if(o)return o}}(t):void 0}}(e._nextSibDomVNode),r=e._dom;r&&(function(e,n,t){var o,r=!0;n&&n!==e&&(r=!1,o=n),!r&&o?t.insertBefore(e,o):t.appendChild(e)}(r,o,n),function(e){var n=e._dom;null==e._parentDom&&C(e,n.parentNode);var t=e._nextSibDomVNode;if(null==t){var o=n.nextSibling;null!=o&&(t=o._VNode)}y(t,"_prevSibDomVNode",e),y(e,"_nextSibDomVNode",t);var r=e._prevSibDomVNode;if(null==r){var i=n.previousSibling;null!=i&&(r=i._VNode)}y(r,"_nextSibDomVNode",e),y(e,"_prevSibDomVNode",r)}(e))}(n,o)}(n,t,o),H(n,t,n._dom,i),N(m,!0),n._dom}N(t)}function X(e,n){var t=L(j,null,e);n.hasChildNodes()&&function(e,n){for(var t;t=e.firstChild;)e.removeChild(t)}(n),J(t,null,n,!1,{depth:0}),s(),p()}function Y(){return(Y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n.indexOf(t=i[o])>=0||(r[t]=e[t]);return r}class ee extends K{constructor(e,n){var{componentPromise:t,fallbackComponent:o}=e;super(e,n),this.state={ready:!1,componentPromise:t,finalComponent:null,fallbackComponent:o}}static getDerivedStateFromProps(e,n){var t=n||{};return t.componentPromise===e.componentPromise||null!=e.componentPromise&&(t.componentPromise=e.componentPromise,t.ready=!1,t.finalComponent=null),t}render(e,n){var{eager:t=!0,loadComponent:o=!1}=e,r=Z(e,["eager","loadComponent","componentPromise","fallbackComponent"]),{ready:i,finalComponent:l}=n;if(!t&&!o||i||this.loadComponent(),i)return L(l,r);var a=Z(r,["children"]);return null!=this.state.fallbackComponent?L(this.state.fallbackComponent,a):ne}loadComponent(){return this.state.componentPromise().then(e=>{this.setState({ready:!0,finalComponent:e})})}}var ne=L("div",null,"Loading.."),te=[],oe={subscribe(e){te.includes(e)||te.push(e)},unsubscribe(e){for(var n=0;n<te.length;n++)if(te[n]===e)return te.splice(n,1)},emit(e,n){for(var t of te)t(e,n)},unsubscribeAll(){te.length=0}};function re(e){window.history.pushState(P,document.title,e),oe.emit(e,{type:"load",native:!1})}function ie(e){window.history.replaceState(P,document.title,e),oe.emit(e,{type:"redirect",native:!1})}class le extends K{static __emitter(){oe.emit(le.getPath+le.getQs,{type:"popstate",native:!0})}componentWillMount(){oe.subscribe(this._routeChangeHandler),window.addEventListener("popstate",le.__emitter)}componentWillUnmount(){window.removeEventListener("popstate",le.__emitter),this.props.destroySubscriptionOnUnmount&&oe.unsubscribeAll()}absolute(e){return new URL(e||"",location.protocol+"//"+location.host).toString()}getCurrentComponent(){return this.getPathComponent(le.getPath)||[]}_routeChangeHandler(){var[e,n]=this.getCurrentComponent();this.setState({component:e,match:n})}_notFoundComponent(){return L("div",null,'The Requested URL "'+this.absolute(le.getPath)+'" was not found')}static get getPath(){return location.pathname}static get getQs(){return location.search}getPathComponent(e){for(var n of this.state.routes){var{regex:t,component:o}=n,r=t.exec(e);if(r)return[o,r]}return[]}initComponents(e){var n=[];for(var t of e)null!=t.props&&null!=t.props.path&&n.push({regex:t.props.path,component:t});return n}constructor(e,n){var{children:t,fallbackComponent:o}=e;super(Z(e,["children","fallbackComponent"]),n),o=o||this._notFoundComponent.bind(this),this.state={routes:this.initComponents(t),fallbackComponent:o};var[r,i]=this.getCurrentComponent();this.state.component=r,this.state.match=i,this._routeChangeHandler=this._routeChangeHandler.bind(this)}componentDidMount(){}render(){var e,n=Z(this.props,["children"]),t=Y({match:this.state.match},n);return null!=this.state.component&&null!=this.state.match?U((e=this.state.component).props,t):e=L(this.state.fallbackComponent,t),e.__self||(e=L(e,t)),L(j,null,e)}}function ae(e){var{native:n,href:t,onClick:o}=e,r=Z(e,["native","href","onClick"]);return r.href=t,n||null==t||(r.onClick=n=>function(e,n,t){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),re(n),null!=t&&t(e,n))}(n,e.href,o)),L("a",r)}function ue(e){return RegExp("^"+e+"(/?)$")}export default K;export{ae as A,ee as AsyncComponent,K as Component,j as Fragment,le as Router,oe as RouterSubscription,ue as absolutePath,l as config,L as createElement,L as h,re as loadURL,ie as redirect,X as render};
//# sourceMappingURL=ui-lib.modern.js.map
