import { VNode, ComponentType, DiffMeta } from "../types";
import { EMPTY_OBJ, copyVNodePointers, isValidVNode } from "../util";
import { unmountVNodeAndDestroyDom } from "./updater";
import { Fragment, flattenVNodeChildren, PlaceHolder } from "../create_element";
import { diffChildren } from "./children";
import { diffDomNodes, updateParentDomPointers } from "./dom";
import { toSimpleVNode, isFn } from "../toSimpleVNode";
// import { processUpdatesQueue } from "../lifeCycleCallbacks";

/**
 *
 * @param newVNode current state of dom represented as virtual nodes
 * @param oldVNode last state of dom represented as virtual nodes
 * @param parentDom parent dom element to append child on
 * @param force true if Component#forceUpdate()  was called
 * @param meta random data useful for tagging vnodes
 */
export function diff(
  newVNode: VNode,
  oldVNode: VNode,
  parentDom: Node,
  force: boolean,
  meta: DiffMeta
): Element | Text | void {
  if (typeof newVNode === "boolean") newVNode = null;

  const oldVNodeISNULL = oldVNode == null;
  if (oldVNodeISNULL) {
    oldVNode = EMPTY_OBJ;
  }
  if (newVNode == null) {
    unmountVNodeAndDestroyDom(oldVNode);
    return;
  }
  if (newVNode === EMPTY_OBJ) return null;
  if (!isValidVNode(newVNode)) {
    return null;
  }
  /** SCU returned False */
  if (oldVNode === newVNode) {
    return newVNode._dom;
  }
  copyVNodePointers(newVNode, oldVNode);
  let oldType: string | ComponentType = oldVNode.type;
  let newType: string | ComponentType = newVNode.type;
  let isComplex = isFn(newType);

  if (newType === oldType && isComplex) {
    newVNode._component = oldVNode._component;
  }

  if (newType !== oldType) {
    // type differs, either different dom nodes or different function/class components
    unmountVNodeAndDestroyDom(oldVNode);
    oldVNode = EMPTY_OBJ;
  }
  const tmp = newVNode;
  if (typeof newVNode.props !== "string" && newType !== PlaceHolder) {
    /** if we have a function/class Component, get the next rendered VNode */
    newVNode = toSimpleVNode(newVNode, oldVNode, force, meta);
  }
  if (isFn(oldVNode.type)) {
    // also get the next rendered VNode from the old VNode
    oldVNode = oldVNode._renders;
  }
  if (newVNode !== tmp) {
    // we received a new VNode from calling Component.render, start a new diff
    return diff(newVNode, oldVNode, parentDom, force, meta);
  }
  /** normalize VNode.props.children */
  newVNode._children = flattenVNodeChildren(newVNode);

  oldType = oldVNode.type;
  newType = newVNode.type;

  updateParentDomPointers(newVNode, parentDom);

  if (newType === Fragment) {
    diffChildren(newVNode, oldVNode, parentDom, meta);
  } else {
    if (oldType !== newType) {
      oldVNode = null;
    }
    diffDomNodes(newVNode, oldVNode, parentDom);
    diffChildren(newVNode, oldVNode, newVNode._dom, meta);
  }

  return newVNode._dom;
}
