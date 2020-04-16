import {
  ComponentType,
  ComponentChildren,
  VNode,
  Props,
  createElementPropType,
  EventListenerDict,
  ComponentChild,
} from "./types";

import { EMPTY_OBJ, flattenArray, isListener } from "./util";

export function createElement<P>(
  type: ComponentType<P> | string,
  props?: createElementPropType<P> | null,
  ...children: ComponentChildren[]
): VNode<P> | null {
  if (type == null || typeof type === "boolean") return null;

  if (props == null) {
    (props as any) = EMPTY_OBJ;
  }
  const ref = props.ref;
  const key = props.key;
  const events: EventListenerDict = {};
  props = getPropsWithoutSpecialKeysAndInitializeEventsDict(props, events);
  if (children.length || (children = [props.children])) {
    (props as any).children = flattenArray(children);
  }
  return getVNode<P>(type, props, events, key, ref);
}

function getVNode<P>(
  type: ComponentType<P> | string,
  props: createElementPropType<P>,
  events?: EventListenerDict,
  key?: any,
  ref?: any
): VNode<P> {
  const VNode: VNode<P> = {
    type: typeof type === "string" ? type.toLowerCase() : type,
    props,
    events,
    key,
    ref,
    _dom: null,
    _children: null,
    _component: null,
    _nextSibDomVNode: null,
    _renders: null,
    _renderedBy: null,
    _prevSibDomVNode: null,
    _FragmentDomNodeChildren: null,
    _parentDom: null,
    _fragmentParent: null,
    _depth: 0,
    __self: null,
  };
  VNode.__self = VNode;
  return VNode;
}

export function Fragment<T>(props: Props<T>): VNode<T> {
  return props.children;
}
const skipProps = { key: 1, ref: 1 };
function getPropsWithoutSpecialKeysAndInitializeEventsDict<P>(
  props: createElementPropType<P>,
  events: {}
) {
  const obj = {};
  for (const i in props) {
    if (skipProps[i] == null) {
      obj[i] = props[i];
      if (isListener(i)) {
        events[i.substr(2).toLowerCase()] = props[i];
      }
    }
  }
  return obj as Props<P>;
}

export function convertToVNodeIfNeeded(VNode: ComponentChild | VNode): VNode {
  if (VNode == null || typeof VNode === "boolean") {
    return null;
  }
  if (typeof VNode === "string" || typeof VNode === "number") {
    return getVNode(null, String(VNode) as any);
  }
  if (Array.isArray(VNode)) {
    return createElement(Fragment, null, VNode);
  }

  if ((VNode as VNode)._dom != null) {
    const vn = getVNode(
      (VNode as VNode).type,
      (VNode as VNode).props,
      (VNode as VNode).events,
      (VNode as VNode).key,
      null
    );
    vn._dom = (VNode as VNode)._dom;
    return vn;
  }
  return VNode as VNode;
}

export function flattenVNodeChildren<P>(VNode: VNode<P>): VNode[] {
  return flattenArray<any>(
    VNode.props.children,
    convertToVNodeIfNeeded
  ) as VNode[];
}