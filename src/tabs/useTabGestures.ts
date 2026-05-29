import {
  useRef,
  type PointerEvent,
  type TouchEvent,
  type WheelEvent,
} from "react";
import { TAB_ENTRIES, type Tab } from ".";

type SetTab<T extends string> = (value: T | ((current: T) => T)) => void;

type TabGestureHandlers = {
  onTouchStart: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: (event: TouchEvent<HTMLDivElement>) => void;
  onPointerDown: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerCancel: () => void;
  onWheel: (event: WheelEvent<HTMLDivElement>) => void;
};

/**
 * Custom hook to handle touch, mouse, and wheel gestures for tab navigation.
 * Supports swipe gestures on touch devices, mouse drag gestures on desktop, and wheel scrolling for tab switching.
 * @param tabEntries Array of tab entries to determine the number of tabs and their order.
 * @param setActiveTab Function to update the active tab based on user gestures.
 * @returns An object containing event handlers to be attached to the tab content container.
 */
export function useTabGestures(setActiveTab: SetTab<Tab>): TabGestureHandlers {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const mouseStartY = useRef<number | null>(null);
  const mousePointerId = useRef<number | null>(null);
  const wheelLockUntil = useRef<number>(0);
  const tabCount = TAB_ENTRIES.length;

  const stepTab = (direction: -1 | 1) => {
    setActiveTab((currentTab) => {
      const currentIndex = TAB_ENTRIES.findIndex(([key]) => key === currentTab);
      const nextIndex = Math.max(
        0,
        Math.min(tabCount - 1, currentIndex + direction),
      );
      return TAB_ENTRIES[nextIndex][0];
    });
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      stepTab(1);
    }

    if (deltaX > 0) {
      stepTab(-1);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    mouseStartX.current = event.clientX;
    mouseStartY.current = event.clientY;
    mousePointerId.current = event.pointerId;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    if (
      mouseStartX.current === null ||
      mouseStartY.current === null ||
      mousePointerId.current !== event.pointerId
    ) {
      return;
    }

    const deltaX = event.clientX - mouseStartX.current;
    const deltaY = event.clientY - mouseStartY.current;

    mouseStartX.current = null;
    mouseStartY.current = null;
    mousePointerId.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      stepTab(1);
    }

    if (deltaX > 0) {
      stepTab(-1);
    }
  };

  const onPointerCancel = () => {
    mouseStartX.current = null;
    mouseStartY.current = null;
    mousePointerId.current = null;
  };

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    const horizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    const shiftedVerticalIntent = event.shiftKey && Math.abs(event.deltaY) > 20;

    if (!horizontalIntent && !shiftedVerticalIntent) {
      return;
    }

    const now = Date.now();
    if (now < wheelLockUntil.current) {
      return;
    }

    const delta = horizontalIntent ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 30) {
      return;
    }

    event.preventDefault();
    wheelLockUntil.current = now + 250;

    if (delta > 0) {
      stepTab(1);
    }

    if (delta < 0) {
      stepTab(-1);
    }
  };

  return {
    onTouchStart,
    onTouchEnd,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    onWheel,
  };
}
