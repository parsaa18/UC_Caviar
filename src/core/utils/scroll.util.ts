import { useCallback, useMemo, useRef, WheelEvent } from "react";

// export const handleWheel = (
//   e: WheelEvent,
//   left: number,
//   setLeft: (left: number) => void,
//   totalItems: number
// ) => {
//   e.preventDefault();
//   const scheduledRef = (handleWheel as any).scheduledRef || { current: false };
//   (handleWheel as any).scheduledRef = scheduledRef;

//   if (!scheduledRef.current) {
//     scheduledRef.current = true;
//     window.requestAnimationFrame(() => {
//       const size = window.innerWidth > 1024 ? 3 : 2;
//       const windowSize = window.innerWidth;
//       const newLeft = left + e.deltaY;
//       if (
//         newLeft >= 0 &&
//         newLeft <= (totalItems - size) * (windowSize / size + 32)
//       ) {
//         setLeft(newLeft);
//       }
//       scheduledRef.current = false;
//     });
//   }
// };

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const lastCall = useRef(0);

  return useCallback(
    (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        callback(...args);
      }
    },
    [callback, delay]
  );
}
