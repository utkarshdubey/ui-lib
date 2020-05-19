function e(e,t,o){if(!(null==e||e instanceof Text||t===o)){null==e._listeners&&(e._listeners={}),null==t&&(t=d),null==o&&(o=d);for(const r in o)null==t[r]&&(delete e._listeners[r],e.removeEventListener(r,n));for(const r in t){const i=t[r],s=o[r];null!=i&&s!==i&&(null==s&&e.addEventListener(r,n),e._listeners[r]=i)}}}function n(e){return this._listeners[e.type].call(this,e)}const t={key:1,ref:1,children:1},o={value:1,checked:1};function r(e,n,t){t=t||"";const o=e.style;if("string"==typeof n)return void(o.cssText=n);const r="string"==typeof t;if(r)o.cssText="";else for(const e in t)null==n[e]&&(o[e]="");for(const e in n){const i=n[e];(r||i!==t[e])&&(o[e]=i)}}function i(e,n,t){const o=Array.isArray;o(n)&&(n=n.join(" ").trim()),o(t)&&(t=t.join(" ").trim()),n!==t&&u(e,"className",n)}function s(e,n,t){c(e,n,t,"_renders"),c(e,n,t,"_renderedBy")}const l={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"};function c(e,n,t,o){let r=e;const i=l[n];for(;r;)i&&(r[i]=null),r[n]=t,r=r[o]}function u(e,n,t){return n in e?e[n]=null==t?"":t:null==t?e.removeAttribute(n):e.setAttribute(n,t)}function p(e,n){null!=n&&c(e,"_parentDom",n,"_renderedBy")}const d={},a=[];function f(e,n,t){return function e(n,t,o,r){if(!n)return t;for(let i=0;i<n.length;i++){const s=n[i];Array.isArray(s)?e(s,t,o,r):r&&null==s||t.push(o?o(s):s)}return t}(e,[],n,t)}function m(e){return"o"===e[0]&&"n"===e[1]}const _=d.hasOwnProperty,h="assign"in Object?d.constructor.assign:function(e){for(let n=1;n<arguments.length;n++){const t=arguments[n];for(const n in t)_.call(t,n)&&(e[n]=t[n])}return e},y=Object.freeze({});function b(e,n,...t){if(null==e||"boolean"==typeof e)return null;null==n&&(n=d);const o=n.ref,r=n.key,i="string"==typeof e?{}:null;let s;return n=function(e,n){const t={},o=null!=n;for(const r in e)null==D[r]&&(t[r]=e[r],o&&m(r)&&(n[r.substr(2).toLowerCase()]=e[r]));return t}(n,i),t.length&&null==n.children&&(s=f(t)),null!=n.children&&(s=f([n.children])),n.children=s,g(e,n,i,r,o)}function g(e,n,t,o,r){const i={type:"string"==typeof e?e.toLowerCase():e,props:n,events:t,key:o,ref:r,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return i.__self=i,i}const S=function(){},D={key:1,ref:1};function N(e){return null==e||"boolean"==typeof e?b(y):"string"==typeof e||"number"==typeof e?g(null,String(e)):Array.isArray(e)?b(S,null,e):null!=e._dom?g(e.type,e.props,e.events,e.key,null):e}const v="undefined"!=typeof Promise,x="undefined"!=typeof requestAnimationFrame,V=setTimeout,C=v?Promise.prototype.then.bind(Promise.resolve()):V,P={deferImplementation:C,scheduleRender:x?function(e){return requestAnimationFrame(e)}:C,eagerlyHydrate:!0,beforeHookRender:null},w=[],U=[];function A(){k(w)}function F(){k(U)}function k(e){let n;for(;n=e.pop();)L(n)}function B(e){const n=e.name;return"componentDidMount"===n?w.push(e):"componentDidUpdate"===n?U.push(e):void L(e)}function L(e){const n=e.args,t=e.bind,o=e.name;t._lastLifeCycleMethod=o;const r=t[o],i=!!t.componentDidCatch;if(v)Promise.resolve().then(()=>r&&r.apply(t,n)).catch(e=>{if(i)return t.componentDidCatch(e);throw e});else try{r.apply(t,n)}catch(e){if(i)return t.componentDidCatch(e);throw e}}function R(n,t){if(null==n||n===d)return;R(n._renders,t);const o=n._component;let r;t||null==o||(o.setState=S,o._VNode=null,B({name:"componentWillUnmount",bind:o}));const i=n._children;if(i)for(;i.length;)r=i.pop(),R(r,t);!function(n,t){if(!t&&"function"!=typeof n.type){const t=n._dom;null!=t&&(!(n.type===y)&&e(t,null,n.events),function(e){j(E,e)}(t),function(e){if(null==e)return;const n=e.parentNode;n&&n.removeChild(e)}(t))}!function(e,n){if(null!=e){if(!n){var t=e._nextSibDomVNode;if(null!=t){const e=t._dom,n=e&&e.previousSibling;s(t,"_prevSibDomVNode",n&&n._VNode)}const n=e._prevSibDomVNode;if(null!=n){const e=n._dom,t=e&&e.nextSibling;s(n,"_nextSibDomVNode",t&&t._VNode)}}j(H,e)}}(n,t)}(n,t)}const E={_VNode:1,_listeners:1,onclick:1},H={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1};function j(e,n){if(null!=n)for(const t in e)n[t]=null}function q(e,n,t,o){return function(e,n,t,o,r){const i=e.type===S,s=n.length,l=Math.max(s,t.length);for(let u=0;u<l;u++){const l=n[u]||(u<s?b(y):null),p=t[u]||d;if(null==p._nextSibDomVNode){const n=i?e._nextSibDomVNode:null;null!=n&&c(l,"_nextSibDomVNode",n,"_renderedBy")}G(l,p,o,null,r),i&&null!=l&&M(e,l,u)}if(i&&s){const n=e._children;c(e,"_nextSibDomVNode",n[s-1]._nextSibDomVNode,"_renderedBy"),c(e,"_prevSibDomVNode",n[0]._prevSibDomVNode,"_renderedBy")}}(e,e._children||a,(n||d)._children||a,t,o)}function M(e,n,t){const o=n&&(n._dom||n._FragmentDomNodeChildren);let r=e._FragmentDomNodeChildren;null==r&&(r=[],c(e,"_FragmentDomNodeChildren",r,"_renderedBy")),r[t]=o}const O=[];class T{constructor(e){this.state={},this.props=e}render(e,n){return null}setState(e){if(this._oldState=h({},this.state),this._nextState=h({},this.state),"function"==typeof e){const n=e(this._nextState,this.props);if(null==n)return;h(this._nextState,n)}else h(this._nextState,e);var n;this.state=this._nextState,(n=this)._dirty=!0,1===O.push(n)&&P.scheduleRender(W)}forceUpdate(e){const n=!1!==e;this.base=G(this._VNode,h({},this._VNode),this._VNode._parentDom,n,{depth:this._depth}),"function"==typeof e&&e(),A(),F()}}function W(){let e;for(O.sort((e,n)=>e._depth-n._depth);e=O.pop();)e._dirty&&(e._dirty=!1,e.forceUpdate(!1))}const K=e=>"function"==typeof e&&e!==S,$={_nextSibDomVNode:1,_prevSibDomVNode:1};function I(e,n){if(n._renders=e,e){e._renderedBy=n;for(const t in $)e[t]=n[t]}}function z(e){return this.constructor(e)}function Q(e,n,t){const o=h({},e.state||d,e._nextState||d),r=function(e,n,t){const o=e.getDerivedStateFromProps;return null!=o?h({},o(n,t)):null}(n,t.props,o);r&&h(o,r),e._nextState=o}function G(n,l,c,a,_){if("boolean"==typeof n&&(n=null),null==l&&(l=d),null==n)return void R(l);if(n===d)return null;if(!((h=n)&&h.__self===h||(console.warn("component not of expected type =>",h),0)))return null;var h;if(l===n)return n._dom;!function(e,n){if(n===d||null==e||null==n)return;const t=n._prevSibDomVNode;null==e._prevSibDomVNode&&null!=t&&(s(e,"_prevSibDomVNode",t),s(t,"_nextSibDomVNode",e));const o=n._nextSibDomVNode;null==e._nextSibDomVNode&&null!=o&&(s(e,"_nextSibDomVNode",o),s(o,"_prevSibDomVNode",e))}(n,l);let b=l.type,g=n.type,D=K(g);g===b&&D&&(n._component=l._component),g!==b&&(R(l),l=d);const v=n;return"string"!=typeof n.props&&g!==y&&(n=function(e,n,t,o){let r;return null!=e&&K(r=e.type)?(n=n||d,function(e){const n=e.prototype;return!(!n||!n.render)}(r)?function(e,n,t,o){let r;const i=e.type;let s=e._component;if(null!=s){if(null!=s.shouldComponentUpdate&&!t&&!1===s.shouldComponentUpdate(e.props,s._nextState||s.state))return d;Q(s,i,e),B({bind:s,name:"componentWillUpdate",args:[e.props,s._nextState]}),r="componentDidUpdate"}else r="componentDidMount",s=new i(e.props),e._component=s,Q(s,i,e),B({bind:s,name:"componentWillMount"}),s._depth=++o.depth;s._VNode=e;const l=s._oldState,c=n.props;s.state=s._nextState,s._oldState=null,s._nextState=null,s.props=e.props;const u=N(s.render(s.props,s.state));return B({bind:s,name:r,args:"componentDidUpdate"===r?[c,l]:[]}),I(u,e),u}(e,n,t,o):function(e,n){let t;const o=e.type;let r;return e._component?r=e._component:(r=new T(e.props),e._component=r,r.render=z,r.constructor=o,r.props=e.props),t=N(r.render(e.props)),r._depth=++n.depth,I(t,e),t}(e,o)):e}(n,l,a,_)),K(l.type)&&(l=l._renders),n!==v?G(n,l,c,a,_):(n._children=function(e){const n=e.props.children;return null==n&&e.type!==S?[]:f([n],N)}(n),b=l.type,g=n.type,p(n,c),g===S?q(n,l,c,_):(b!==g&&(l=null),function(n,l,c){const a=(l=l||d)===d;let f;const _=l._dom;f=n.type!==l.type||null==_?function(e){if("string"==typeof e.props)return document.createTextNode("");{const n=e.type;return n===y?document.createComment(""):document.createElement(n)}}(n):_,f._VNode=n,function(n,s,l){if(s.type===y)return;if(l=l||d,"string"==typeof s.props)return function(e,n,t){return n===t||(e.nodeValue=n)}(n,s.props,l.props);const c=l.props||d,p=s.props;null!=c&&function(e,n,o){for(const r in n)m(r)||r in t||null==o[r]&&u(e,r,null)}(n,c,p),function(e,n,s){for(let l in s){if(m(l)||l in t)continue;let c=s[l],p=o[l]?e[l]:n[l];c!==p&&(l="class"===l?"className":l,"className"!==l?"style"!==l?u(e,l,c):r(e,c,p):i(e,c,p))}}(n,c,p),e(n,s.events,l.events)}(f,n,a?null:l),s(n,"_dom",f),function e(n,t){n&&(null!=n._component?n._component.base=t:e(n._renderedBy,t))}(n,f),a&&function(e,n,t){const o=function(e){if(!e)return;const n=e._dom;if(n)return n;const t=e._FragmentDomNodeChildren;return t?function e(n){for(let t=0;t<n.length;t++){const o=n[t];if(Array.isArray(o)){const n=e(o);if(n)return n}else if(o)return o}}(t):void 0}(e._nextSibDomVNode),r=e._dom;r&&(function(e,n,t){let o,r=!0;n&&n!==e&&(r=!1,o=n),!r&&o?t.insertBefore(e,o):t.appendChild(e)}(r,o,n),function(e){const n=e._dom;null==e._parentDom&&p(e,n.parentNode);let t=e._nextSibDomVNode;if(null==t){const e=n.nextSibling;null!=e&&(t=e._VNode)}s(t,"_prevSibDomVNode",e),s(e,"_nextSibDomVNode",t);let o=e._prevSibDomVNode;if(null==o){const e=n.previousSibling;null!=e&&(o=e._VNode)}s(o,"_nextSibDomVNode",e),s(e,"_prevSibDomVNode",o)}(e))}(n,c)}(n,l,c),q(n,l,n._dom,_)),n._dom)}function J(e,n){const t=b(S,null,e);n.hasChildNodes()&&function(e){let n;for(;n=e.firstChild;)e.removeChild(n)}(n),G(t,null,n,!1,{depth:0}),A(),F()}function X(e,n){return null==e||e.__self?e:b(e,n)}class Y extends T{componentDidMount(){this._init()}componentDidUpdate(e){(e&&(e.promise||e.componentPromise))!==(this.props.promise||this.props.componentPromise)&&this._init()}_init(){this.setState({inProgress:!0}),(this.props.promise||this.props.componentPromise)().then(e=>{e=X(e),this.setState({render:e,inProgress:!1})}).catch(e=>this.setState({error:!0,inProgress:!1}))}render(e,n){return n.inProgress?X(e.fallback||e.fallbackComponent)||"Loading":n.error?X(e.errorComponent)||"An Error Occured":n.render}}function Z(e,n,t){const o=Object.getOwnPropertyDescriptor(e,t).get.bind(e);Object.defineProperty(e,n,{get:()=>(ee(n," has been deprecated."+(t?" Use '"+t+"' instead":"")),o())})}function ee(){const e=["[DeprecationWarning]"].concat(a.slice.call(arguments));console.warn.apply(console,e)}const ne=/\/+$/;function te(e){return 1===e.length?e:e.replace(ne,"")}const oe=[],re={subscribe(e){oe.includes(e)||oe.push(e)},unsubscribe(e){for(let n=0;n<oe.length;n++)if(oe[n]===e)return oe.splice(n,1)},emit(e,n){for(const t of oe)t(e,n)},unsubscribeAll(){oe.length=0}};function ie(e){window.history.pushState(null,"",e),re.emit(e,{type:"load",native:!1})}function se(e){window.history.replaceState(null,"",e),re.emit(e,{type:"redirect",native:!1})}class le extends T{constructor(e){super(e),this.state={},this._routeChangeHandler=this._routeChangeHandler.bind(this)}static __emitter(){re.emit(le.path+le.qs,{type:"popstate",native:!0})}static get path(){return location.pathname}static get qs(){return location.search}static get searchParams(){return new URLSearchParams(le.qs)}componentDidMount(){re.subscribe(this._routeChangeHandler),window.addEventListener("popstate",le.__emitter),this._routeChangeHandler(null)}componentWillUnmount(){window.removeEventListener("popstate",le.__emitter),re.unsubscribe(this._routeChangeHandler)}_notFoundComponent(){return b("div",null,`The Requested URL "${le.path}" was not found`)}_routeChangeHandler(e){const n=te(le.path);let t=[];this.props.children.forEach(e=>{const o=ce(e.props.match),r=o.regex.exec(n);if(r){const n=e.props,i={};for(const e in o.params)i[o.params[e]]=r[e];t.push(X(n.component,h({},e.props,i)))}}),t.length||(t=b(this.props.fallbackComponent||this._notFoundComponent)),this.setState({child:t})}render(e,n){return b(S,null,n.child)}}function ce(e){if(null!=e.regex)return e;e=te(e);const n={};let t=0;return{regex:(o=e.split("/").map(e=>":"===e[0]?(n[++t]=e.substr(1),"(\\S*?)"):e).join("/"),RegExp(`^${o}(/?)$`)),params:n};var o}Z(le,"getPath","path"),Z(le,"getQs","qs");const ue=(pe=ce,function(){return ee("absolutePath","()' has been deprecated Use 'createRoutePath()' instead"),pe.apply(void 0,a.slice.call(arguments))});var pe;function de(e){if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault();const n=new URL(this.href,location.href);ie(n.pathname+n.search+n.hash)}function ae(e){return null!=e.href&&(e.onClick=de),b("a",e)}const fe={};export default T;export{ae as A,Y as AsyncComponent,T as Component,S as Fragment,fe as Path,le as Router,re as RouterSubscription,ue as absolutePath,P as config,b as createElement,ce as createRoutePath,b as h,ie as loadURL,se as redirect,J as render};
//# sourceMappingURL=ui-lib.modern.js.map
