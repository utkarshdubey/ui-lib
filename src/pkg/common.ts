import { createElement } from "../create_element";
import { VNode } from "../types";

const ignore = ["boolean", "string", "number"];
export function createElementIfNeeded(x: any, props?: any): VNode {
  if (x == null || ignore.indexOf(typeof x) > -1) return x;
  if ((x as VNode).__self) return x;
  return createElement(x, props);
}