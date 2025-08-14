import { useEffect, useRef, useCallback, useMemo } from "react";

const GlobalEffects = () => {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Optimized cursor update using RAF with error handling
  const updateCursor = useCallback(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const { x, y } = mousePos.current;

    // Use CSS transform for better performance
    cursor.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`;
  }, []);

  // Optimized mouse move handler with better performance
  const handleMouseMove = useCallback(
    (e) => {
      // Update mouse position reference
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Cancel previous RAF if exists to prevent stacking
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Schedule cursor update for next frame
      rafRef.current = requestAnimationFrame(updateCursor);
    },
    [updateCursor]
  );

  // Memoized event listener options for better performance
  const eventOptions = useMemo(
    () => ({
      passive: true, // Improves scroll performance
    }),
    []
  );

  // Effect for cursor tracking with optimized cleanup
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        document.addEventListener("mousemove", handleMouseMove, eventOptions);
      } else {
        document.removeEventListener("mousemove", handleMouseMove, eventOptions);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    handleMediaChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      document.removeEventListener("mousemove", handleMouseMove, eventOptions);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [handleMouseMove, eventOptions]);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className="fixed w-5 h-5 bg-yellow-400 rounded-full pointer-events-none z-[999] mix-blend-difference transition-opacity duration-300 hidden md:block"
    />
  );
};

export default GlobalEffects;
