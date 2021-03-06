import {
  getHookStateAtCurrentRender,
  runEffectCleanup,
  runHookEffectAndAssignCleanup,
  $push,
} from "./manage";

import {
  argsChanged,
  getCurrentHookValueOrSetDefault,
  HookDefault,
} from "./util";

import { Component } from "../../component";
import { EMPTY_OBJ } from "../../constants";

function unmount() {
  const pending = (this as Component)._pendingEffects;
  for (const effect in pending || EMPTY_OBJ) {
    runEffectCleanup(pending[effect]);
  }
  (this as Component)._pendingEffects = null;
}

export function useEffect(callback: () => void, dependencies: any[]): void {
  const state = getHookStateAtCurrentRender();

  const candidate = state[0];
  const hookIndex = state[1];

  const hookData = candidate._hooksData;

  const tmp = <any>{};

  let currentHook: HookDefault = hookData[hookIndex] || tmp;

  const pending: Component["_pendingEffects"] = (candidate._pendingEffects =
    candidate._pendingEffects || tmp);
  const oldEffect = pending[hookIndex];
  if (!argsChanged(currentHook.args, dependencies)) {
    // mark the effect as resolved
    // no cleanup will be performed (except on unmount)
    if (oldEffect) oldEffect.resolved = true;
    return;
  }
  currentHook = getCurrentHookValueOrSetDefault(hookData, hookIndex, tmp);
  currentHook.args = dependencies;

  // TODO
  // in case we have an unused effect (callback not called yet)
  // attempt to defer the old effect as well, maybe wrap them together in a separate effect
  // as in this case we could end up blocking the render iff -
  // - previous callback hasn't been called yet
  // - previous callback is an expensive function
  // the cleanup does not matter as we will call it right before we call the new effect
  // however it is important that we call the effect right here for now as in the rare event
  // where the callback hasn't been called, we could end up with no cleanup either
  // another approach could be to leave the uncalled function and it's cleanup and start with
  // what we have as the new effect.

  const cleanUp = oldEffect
    ? ((runHookEffectAndAssignCleanup(oldEffect) as any) as false) ||
      oldEffect.cleanUp
    : null;

  pending[hookIndex] = {
    cb: callback,
    cleanUp,
  };
  // only push effect if we haven't already added it to the queue
  $push(pending);

  candidate.componentWillUnmount = unmount;
}
