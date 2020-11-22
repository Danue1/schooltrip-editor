import { DependencyList, useEffect } from "react";
import { noop } from "utils/noop";

export type IsMounted = () => boolean;
export type OnCancel = () => void | Promise<void>;
export type CancelHandler = (onCancel: OnCancel) => void;
export type OnMounted = (isMounted: IsMounted, onCancel: CancelHandler, signal: AbortSignal) => Promise<void>;
export type OnUnmounted = () => void | Promise<void>;

export function useAsyncEffect(onMounted: OnMounted, dependencies: DependencyList): void;
export function useAsyncEffect(onMounted: OnMounted, onUnmounted: OnUnmounted, dependencies: DependencyList): void;
export function useAsyncEffect(
  onMounted: OnMounted,
  onUnmounted: OnUnmounted | DependencyList,
  dependencies = onUnmounted as DependencyList
): void {
  const run = () => {
    let isMounted = true;
    let onCancel: OnCancel = noop;
    const abortController = new window.AbortController();

    const checkToBeMounted: IsMounted = () => isMounted;
    const cancelHandler: CancelHandler = nextCancelHandler => {
      onCancel = nextCancelHandler;
    };
    onMounted(checkToBeMounted, cancelHandler, abortController.signal);

    const cleanup = () => {
      isMounted = false;
      abortController.abort();
      Promise.resolve(onCancel()).finally(() => {
        if (typeof onUnmounted === "function") {
          onUnmounted();
        }
      });
    };

    return cleanup;
  };
  useEffect(run, dependencies);
}
