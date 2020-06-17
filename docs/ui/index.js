const t={},n=[],e=/^aria[\-A-Z]/,o={};function r(t,n){return function t(n,e,o){if(!n)return e;for(let r=0;r<n.length;r++){const s=n[r];Array.isArray(s)?t(s,e,o):e.push(o?o(s):s)}return e}(t,[],n)}const s=t.hasOwnProperty,i=t.constructor.assign||function(t){for(let n=1;n<arguments.length;n++){const e=arguments[n];for(const n in e)s.call(e,n)&&(t[n]=e[n])}return t},c=function(){};function u(e,o){if(null==e||"boolean"==typeof e)return null;let s;null==o&&(o=t);const i=o.ref,c=o.key;let u;return null!=(o=a(o)).children?u=r([o.children]):(s=n.slice.call(arguments,2)).length&&(u=r(s)),o.children=u,f(e,o,c,i)}const l={key:1,ref:1};function a(t){const n={};for(const e in t)l[e]||(n[e]=t[e]);return n}function p(t){return null==t||"boolean"==typeof t?u(o):"string"==typeof t||"number"==typeof t?f(null,String(t)):Array.isArray(t)?u(c,null,t):null!=t._dom?f(t.type,t.props,t.key):t}function f(t,n,e,o){return{type:t,props:n,key:e,ref:o,_dom:null,_children:null,_component:null,_renders:null,_renderedBy:null,_parentDom:null,_depth:0,constructor:void 0}}const d="undefined"!=typeof Promise,h=d?Promise.prototype.then.bind(Promise.resolve()):t=>setTimeout(t),m="function"==typeof requestAnimationFrame,_={hookSetup:c,diffed:c};function y(t,n){let e=_[t];e===c&&(e=null),_[t]=function(){e&&e.apply(0,arguments),n.apply(0,arguments)}}const g={scheduleRender:m?requestAnimationFrame:h,eagerlyHydrate:!0,RAF_TIMEOUT:100},b={value:1,checked:1},v={key:1,ref:1,children:1};function S(t,n,e){e=e||"";const o=t.style;if("string"==typeof(n=n||""))return void(o.cssText=n);const r="string"==typeof e;if(r)o.cssText="";else for(const t in e)null==n[t]&&(o[t]="");for(const t in n){const s=n[t];(r||s!==e[t])&&(o[t]=s)}}const k=t=>t.trim();function x(t,n,e,o){const r=Array.isArray;r(n)&&(n=k(n.join(" "))),r(e)&&(e=k(e.join(" "))),n!==e&&o.batch.push({node:t,action:1,attr:"className",value:n})}function C(t,n,o){if("o"===n[0]&&"n"===n[1])return function(t,n,e){n=n.substr(2).toLowerCase(),null==e&&(t.removeEventListener(n,D),delete t._events[n]),t.addEventListener(n,D),t._events[n]=e}(t,n,o);const r=null==o||!1===o&&!e.test(n);return n in t?t[n]=r?"":o:r?t.removeAttribute(n):t.setAttribute(n,o)}function D(t){return this._events[t.type].call(this,t)}function U(t){if(null==t)return;const n=t.parentNode;n&&n.removeChild(t)}const P=[],w=[];function A(t){let n;for(;n=t.pop();)V(n)}function N(t){const n=t.name;return"componentDidMount"===n?P.push(t):"componentDidUpdate"===n?w.push(t):void V(t)}function V(t){const n=t.name,e=t.bind,o=e[n];if(e._lastLifeCycleMethod=n,!o)return;const r=t.args,s="function"==typeof e.componentDidCatch,i=()=>o.apply(e,r);if(d)h(i).catch(t=>{if(!s)throw t;e.componentDidCatch(t)});else try{i()}catch(t){if(s)return e.componentDidCatch(t);throw t}}function E(t){!function(t){const n=t.length;for(let e=0;e<n;e++){const n=t[e],o=n.node,r=n.refDom,s=n.value;switch(n.action){case 4:r.appendChild(o);break;case 5:s.insertBefore(o,r);break;case 1:C(o,n.attr,s);break;case 3:S(o,s.newValue,s.oldValue);break;case 2:U(o)}}}(t),_.diffed(),A(P),A(w)}const T=[];class L{constructor(t){this.state={},this.props=t}render(t,n){return null}setState(t){if(this._oldState=i({},this.state),this._nextState=i({},this._nextState||this.state),"function"==typeof t){const n=t(this._nextState,this.props);if(null==n)return;i(this._nextState,n)}else i(this._nextState,t);var n;(n=this)._dirty=!0,1===T.push(n)&&g.scheduleRender(R)}forceUpdate(t){if(null==this._VNode)return;const n=[],e=!1!==t;j(this._VNode,i({},this._VNode),this._VNode._parentDom,e,{depth:this._depth,batch:n}),"function"==typeof t&&t(),E(n)}}function R(){let t;for(T.sort((t,n)=>t._depth-n._depth);t=T.pop();)t._dirty&&(t._dirty=!1,t.forceUpdate(!1))}function F(t,n){t&&("function"==typeof t?t(n):t.current=n)}function M(n,e,o){const r=n.ref,s=(e||t).ref;r&&r!==s&&(F(r,o),s&&F(e.ref,null))}function q(){return{current:null}}const H=t=>"function"==typeof t&&t!==c;function O(t){return this.constructor(t)}function B(e,r,s,l){if(e.type===o)return;const a=e._children||n,p=(r||t)._children||n;return a!==p?function(n,e,r,s,l){const a=n.type===c,p=e.length,f=r.length,d=Math.max(p,f),h=a?((r[f-1]||t)._dom||t).nextSibling:null;for(let n=0;n<d;n++){const c=e[n]||(n<p?u(o):null);let f=(r[n+1]||t)._dom;null==f&&a&&(f=l.next||h),j(c,r[n]||t,s,!1,i({},l,{next:f}))}}(e,a,p,s,l):void 0}function I(n,e){if(null==n||n===t)return;F(n.ref,null),I(n._renders,e);const o=n._component;let r;null!=o&&(o.setState=c,o.forceUpdate=c,o._VNode=null,N({name:"componentWillUnmount",bind:o}));const s=n._children;if(s)for(;s.length;)r=s.pop(),I(r,e);!function(t,n){if("function"!=typeof t.type){const e=t._dom;null!=e&&(function(t){K(W,t)}(e),n.batch.push({node:e,action:2}))}!function(t){null!=t&&K($,t)}(t)}(n,e)}const W={_VNode:1,_events:1},$={_children:1,_component:1,_depth:1,_dom:1,_renderedBy:1,_renders:1,_parentDom:1,key:1,ref:1};function K(t,n){if(null!=n)for(const e in t)n[e]=null}function j(n,e,s,u,l){if(null==n||"boolean"==typeof n)return void I(e,l);if(!((a=n)&&void 0===a.constructor||(console.warn("component not of expected type =>",a),0)))return null;var a;if(e===n)return n._dom;let f=(e=e||t).type,d=n.type,h=H(d);d===f&&h&&(n._component=e._component),n._parentDom=s,d!==f&&(I(e,l),e=t);const m=n;if("string"!=typeof n.props&&d!==o&&(n=function(n,e,o,r){let s;if(null!=n&&H(s=n.type)){let c;return e=e||t,c=function(t){const n=t.prototype;return!(!n||!n.render)}(s)?function(n,e,o,r){let s;const c=n.type;let u=n._component;const l=null!=u;if(l){if(s="componentDidUpdate",null!=u.shouldComponentUpdate&&!o&&!1===u.shouldComponentUpdate(n.props,u._nextState||u.state))return t}else s="componentDidMount",u=new c(n.props),n._component=u,u._depth=++r.depth;u._VNode=n;const a=u._oldState,f=e.props;N({bind:u,name:l?"componentWillUpdate":"componentWillMount",args:l?[n.props,u._nextState]:null}),u.state=function(n,e,o){const r=i({},n.state||t,n._nextState||t),s=function(t,n,e){const o=t.getDerivedStateFromProps;return null!=o?i({},o(n,e)):null}(e,o.props,r);return s&&i(r,s),r}(u,c,n),u._oldState=null,u._nextState=null,u.props=n.props;const d=p(u.render(u.props,u.state));return N({bind:u,name:s,args:"componentDidUpdate"===s?[f,a]:[]}),M(n,e,u),d}(n,e,o,r):function(t,n){let e;const o=t.type;let r;return t._component?r=t._component:(r=new L(t.props),t._component=r,r.render=O,r.constructor=o,r.props=t.props,r._depth=++n.depth),r._VNode=t,_.hookSetup(r),e=p(r.render(t.props)),_.hookSetup(null),e}(n,r),n._renders=c,c._renderedBy=n,c}return n}(n,e,u,l)),H(e.type)&&(e=e._renders),n!==m){if(n===t)return;return j(n,e,s,u,l)}let y;return n._children=function(t){let n=t.props.children;if(t.type!==c){if(null==n)return[]}else n&&!n.length&&(n=null);return r([n],p)}(n),f=e.type,d=n.type,d===c?B(n,e,s,l):(f!==d&&(e=null),function(n,e,r,s){const i=(e=e||t)===t;let c;const u=e._dom;c=n.type!==e.type||null==u?function(t){if("string"==typeof t.props)return document.createTextNode("");{const n=t.type;if(n===o)return document.createComment("$");const e=document.createElement(n);return e._events={},e}}(n):u,c._VNode=n,function(t,n,e){let o=t;for(;o;)o._dom=e,o=o._renderedBy}(n,0,c),function(n,e,r,s){if(e.type===o)return;if(r=r||t,"string"==typeof e.props)return function(t,n,e){return n===e||(t.nodeValue=n)}(n,e.props,r.props);const i=r.props,c=e.props;null!=i&&function(t,n,e,o){for(const r in n)null==e[r]&&null!=n[r]&&o.batch.push({node:t,action:1,attr:r})}(n,i,c,s),function(t,n,e,o){for(let r in e){if(r in v)continue;let s=e[r],i=b[r]?t[r]:n[r];s!==i&&(r="class"===r?"className":r,"className"!==r?o.batch.push("style"!==r?{node:t,action:1,attr:r,value:s}:{node:t,action:3,value:{newValue:s,oldValue:i}}):x(t,s,i,o))}}(n,i||t,c,s)}(c,n,i?null:e,s),function t(n,e){n&&(null!=n._component?n._component.base=e:t(n._renderedBy,e))}(n,c),i&&function(t,n,e){const o=t._dom;if(!o)return;const r=e.next;let s,i=!0;r&&r!==o&&(i=!1,s=r),e.batch.push(!i&&s?{node:o,action:5,refDom:s,value:n,VNode:t}:{node:o,action:4,refDom:n,VNode:t})}(n,r,s)}(n,e,s,l),y=n._dom,B(n,e,y,l),M(n,e,y)),y}function Z(t,n){const e=u(c,void 0,[t]);n.hasChildNodes()&&function(t){let n;for(;n=t.firstChild;)t.removeChild(n)}(n);const o=[];j(e,void 0,n,!1,{depth:0,batch:o}),E(o)}const z=["boolean","string","number"];function G(t,n){return null==t||z.indexOf(typeof t)>-1||void 0===t.constructor?t:u(t,n)}class J extends L{componentDidMount(){this._init()}componentDidUpdate(t){(t&&(t.promise||t.componentPromise))!==(this.props.promise||this.props.componentPromise)&&this._init()}_init(){this.setState({inProgress:!0}),(this.props.promise||this.props.componentPromise)().then(t=>{this.setState({render:t,inProgress:!1})}).catch(t=>this.setState({error:!0,inProgress:!1}))}render(t,n){return n.inProgress?G(t.fallback||t.fallbackComponent)||"Loading":n.error?G(t.errorComponent)||"An Error Occured":G(n.render,function(t,n){n=r([n]);const e={};for(const o in t)-1===n.indexOf(o)&&(e[o]=t[o]);return e}(t,["fallback","fallbackComponent","promise","componentPromise"]))}}const Q=/\/+$/;function X(t){return 1===t.length?t:t.replace(Q,"")}const Y=[],tt={subscribe(t){Y.includes(t)||Y.push(t)},unsubscribe(t){for(let n=0;n<Y.length;n++)if(Y[n]===t)return Y.splice(n,1)},emit(t,n){for(const e of Y)e(t,n)},unsubscribeAll(){Y.length=0}};function nt(t){window.history.pushState(null,"",t),tt.emit(t,{type:"load",native:!1})}function et(t){window.history.replaceState(null,"",t),tt.emit(t,{type:"redirect",native:!1})}class ot extends L{constructor(t){super(t),this.state={},this._routeChangeHandler=this._routeChangeHandler.bind(this)}static __emitter(){tt.emit(ot.path+ot.qs,{type:"popstate",native:!0})}static get path(){return location.pathname}static get qs(){return location.search}static get searchParams(){return new URLSearchParams(ot.qs)}static _getParams(t,n){const e={};for(const o in t)e[t[o]]=decodeURIComponent(n[o]);return e}static getCurrentParams(t){const n=(t=rt(t)).params,e=t.regex.exec(ot.path);return e?ot._getParams(n,e):{}}componentDidMount(){tt.subscribe(this._routeChangeHandler),window.addEventListener("popstate",ot.__emitter),this._routeChangeHandler(null)}componentWillUnmount(){window.removeEventListener("popstate",ot.__emitter),tt.unsubscribe(this._routeChangeHandler)}_notFoundComponent(){return u("div",null,`The Requested URL "${ot.path}" was not found`)}_routeChangeHandler(t){const n=X(ot.path);let e=[];this.props.children.forEach(t=>{const o=rt(t.props.match),r=o.regex.exec(n);if(r){const n=t.props,s=ot._getParams(o.params,r);e.push(G(n.component,i({},t.props,{params:s})))}}),e.length||(e=u(this.props.fallbackComponent||this._notFoundComponent)),this.setState({child:e})}render(t,n){return u(c,null,n.child)}}function rt(t){if(null!=t.regex)return t;t=X(t);const n={};let e=0;return{regex:(o=t.split("/").map(t=>":"===t[0]?(n[++e]=t.substr(1),"([^?\\/]+)"):t).join("/"),RegExp(`^${o}(/?)$`)),params:n};var o}function st(t){if(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return;t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault();const n=new URL(this.href,location.href);nt(n.pathname+n.search+n.hash)}function it(t){return null!=t.href&&(t.onClick=st),u("a",t)}const ct={};function ut(t,n){return!t||n.some((n,e)=>n!==t[e])}function lt(t,n,e){return t[n]||(t[n]=at(0,e))}function at(t,n){return"function"==typeof n?n(t):n}let pt=0,ft=null;const dt=[];function ht(t){const n=t.cleanUp;"function"==typeof n&&(n(),t.cleanUp=null)}function mt(t){let n=t.cb;n&&"function"==typeof(n=n())&&(t.cleanUp=n),t.cb=null}function _t(){dt.forEach(t=>{for(const e in t)(n=t[e]).resolved||ht(n),mt(n);var n}),dt.length=0}const yt=m?function(t){const n=()=>{cancelAnimationFrame(e),clearTimeout(o),t()};let e,o;o=setTimeout(n,g.RAF_TIMEOUT),e=requestAnimationFrame(n)}:h;function gt(){return[ft,pt++]}function bt(t,n){const e=gt(),o=e[1],r=e[0]._hooksData;let s=r[o]||{};return ut(s.args,n)?(r[o]=null,s=lt(r,o,()=>({hookState:t()})),s.args=n,s.hookState):s.hookState}function vt(t,n){return bt(()=>t,n)}function St(t){return bt(()=>({current:t}),[])}function kt(){const n=this._pendingEffects;for(const e in n||t)ht(n[e]);this._pendingEffects=null}function xt(t,n){const e=gt(),o=e[0],r=e[1],s=o._hooksData,i={};let c=s[r]||i;const u=o._pendingEffects=o._pendingEffects||i,l=u[r];if(!ut(c.args,n))return void(l&&(l.resolved=!0));c=lt(s,r,i),c.args=n;const a=l?mt(l)||l.cleanUp:null;var p;u[r]={cb:t,cleanUp:a},-1===dt.indexOf(p=u)&&dt.push(p),o.componentWillUnmount=kt}function Ct(t,n,e){const o=gt(),r=o[0],s=lt(r._hooksData,o[1],()=>({hookState:e?e(n):at(void 0,n)}));return s.args=t,[s.hookState,t=>{const n=s.args(s.hookState,t);s.hookState=n,r.setState({})}]}function Dt(t){return Ct(at,t)}y("hookSetup",function(t){ft=t,pt=0,t&&(t._hooksData||(t._hooksData=[]))}),y("diffed",function(){yt(_t)});export default L;export{it as A,J as AsyncComponent,L as Component,c as Fragment,ct as Path,ot as Router,tt as RouterSubscription,g as config,u as createElement,q as createRef,rt as createRoutePath,u as h,nt as loadURL,et as redirect,Z as render,vt as useCallback,xt as useEffect,bt as useMemo,Ct as useReducer,St as useRef,Dt as useState};
//# sourceMappingURL=ui-lib.modern.js.map
