import { $, EMPTY_OBJ, isListener } from "../util.js";
import { Fragment } from "../create-element.js";

/**
 *
 * @param {import("../ui").vNode} newVnode
 * @param {import("../ui").vNode} oldVnode
 * @param {import("../ui").UiNode} previousDom
 * @param {boolean} _DisableDiff
 
 
 */
export function diffDom(newVnode, oldVnode, previousDom, _DisableDiff) {
  /**
   * @type {import("../ui").UiNode}
   */
  let el;
  const type = newVnode.type;
  // should be called when there is a type mismatch  or we are in a brand new vnode (nothing to diff againts)
  if (_DisableDiff) {
    if (typeof newVnode.props === "string") {
      el = document.createTextNode(newVnode.props);
    } else {
      el = document.createElement(type);
      diffAttributes(el, newVnode, EMPTY_OBJ);
    }
  } else {
    const oldType = oldVnode.type;
    if (type !== oldType) {
      return diffDom(newVnode, null, null, true);
    } else {
      el = previousDom;
      if (previousDom instanceof Text) {
        const newVal = newVnode.props;
        if (previousDom.nodeValue !== newVal) {
          previousDom.nodeValue = newVal;
        }
      } else {
        diffAttributes(el, newVnode, oldVnode);
      }
    }
  }
  if (newVnode._prevVnode != null) {
    newVnode._prevVnode._dom = el;
  }
  return el;
}
const isSafeAttr = attr =>
  attr !== "key" &&
  attr !== "children" &&
  attr !== "class" &&
  attr !== "className";

/**
 *
 * @param {import("../ui").UiElement} currentDom
 * @param {import("../ui").vNode} currVnode
 * @param {boolean} hasOldReferenceDom
 * @param {import("../ui").vNode} prevVnode
 */
function diffAttributes(currentDom, currVnode, prevVnode) {
  if (currentDom instanceof Text) return;
  const newAttributes = currVnode.props;
  const prevAttributes = currentDom.attributes;
  const currEvents = currVnode.events;
  const prevEvents = prevVnode ? prevVnode.events : EMPTY_OBJ;
  diffEventListeners(currEvents, prevEvents, currentDom);
  for (const attr in newAttributes) {
    if (isListener(attr)) continue;
    const newValue = newAttributes[attr];
    const oldValue = prevAttributes[attr];
    if (attr === "style") {
      const st = currentDom.style;
      if (typeof newValue === "string") {
        st.cssText = newValue;
      } else {
        if (typeof oldValue === "string") {
          st.cssText = "";
        } else {
          for (const i in oldValue) {
            if (!newValue || !(i in newValue)) {
              st[i] = "";
            }
          }
        }
        for (const i in newValue) {
          const prop = newValue[i];
          if (!oldValue || prop !== oldValue[i]) {
            st[i] = prop;
          }
        }
      }
      continue;
    }
    if (
      isSafeAttr(attr) &&
      (!(attr in prevAttributes) || oldValue !== newValue)
    ) {
      $.setAttribute(currentDom, attr, newValue);
    }
  }
  for (const attr in prevAttributes) {
    if (isSafeAttr(attr) && !(attr in newAttributes)) {
      $.setAttribute(currentDom, attr, null);
    }
  }

  let clsattr = newAttributes.class || newAttributes.className || [];
  const oldClass = currentDom.className;
  if (oldClass && (!clsattr || !clsattr.length)) {
    return void currentDom.removeAttribute("class");
  }
  if (typeof clsattr !== "string") {
    clsattr = clsattr.join(" ");
  }
  if (clsattr) $.setAttribute(currentDom, "class", clsattr.trim());
}

/**
 *
 * @param {Event} e
 * @this {import("../ui").UiElement}
 */
export function eventListenerProxy(e) {
  return this._listeners[e.type](e);
}

/**
 *
 * @param {import("../ui").vNode['events']} newListeners
 * @param {import("../ui").vNode['events']} oldListeners
 * @param {import("../ui").UiElement} dom
 */
export function diffEventListeners(newListeners, oldListeners, dom) {
  if (newListeners == oldListeners) return;
  if (dom._listeners == null) {
    dom._listeners = {};
    dom.onclick = Fragment;
  }
  if (oldListeners == null) {
    oldListeners = EMPTY_OBJ;
  }
  if (newListeners == null) {
    newListeners = EMPTY_OBJ;
  }
  for (const event in newListeners) {
    const listener = newListeners[event];
    const oldListener = oldListeners[event];
    if (oldListener !== listener && listener != null) {
      dom.addEventListener(event, eventListenerProxy);
      dom._listeners[event] = listener;
    }
  }
  for (const evt in oldListeners) {
    if (newListeners[evt] == null) {
      delete dom._listeners[evt];
      dom.removeEventListener(evt, eventListenerProxy);
    }
  }
}