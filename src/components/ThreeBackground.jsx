import { useEffect, useRef, useCallback, useMemo } from "react";

export default function DotNetwork() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const dotsRef = useRef([]);

  // Memoized configuration - reduced for better performance
  const config = useMemo(
    () => ({
      dotCount: 30, // Optimized for balance
      dotRadius: 1.2, // Optimized for balance
      maxSpeed: 0.25, // Optimized for balance
      color: "#ffd700",
      opacity: 0.6, // Optimized for balance
    }),
    []
  );

  // Initialize dots
  const initializeDots = useCallback(
    (width, height) => {
      const dots = [];

      for (let i = 0; i < config.dotCount; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * config.maxSpeed,
          vy: (Math.random() - 0.5) * config.maxSpeed,
          radius: config.dotRadius,
        });
      }

      dotsRef.current = dots;
    },
    [config]
  );

  // Update dot positions
  const updateDots = useCallback((width, height) => {
    dotsRef.current.forEach((dot) => {
      // Update position
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Bounce off edges
      if (dot.x <= 0 || dot.x >= width) {
        dot.vx *= -1;
        dot.x = Math.max(0, Math.min(width, dot.x));
      }
      if (dot.y <= 0 || dot.y >= height) {
        dot.vy *= -1;
        dot.y = Math.max(0, Math.min(height, dot.y));
      }
    });
  }, []);

  // Render dots
  const renderDots = useCallback(
    (ctx) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Set dot style
      ctx.fillStyle = config.color;
      ctx.globalAlpha = config.opacity;

      // Draw each dot
      dotsRef.current.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    },
    [config]
  );

  // Animation loop with throttling for better performance
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip animation if page is not visible
    if (document.hidden) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    updateDots(width, height);
    renderDots(ctx);

    animationRef.current = requestAnimationFrame(animate);
  }, [updateDots, renderDots]);

  // Handle canvas resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    // Reinitialize dots for new dimensions
    initializeDots(innerWidth, innerHeight);
  }, [initializeDots]);

  // Setup canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial setup
    handleResize();

    // Start animation
    animate();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleResize, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
}
