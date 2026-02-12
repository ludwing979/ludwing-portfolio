import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component: React.ComponentType, windowKey: string) => {
  const Wrapped = (props: any) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey] || {};
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      const element = ref.current;
      if (!element || !isOpen) return;

      element.style.display = "block";
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return;

      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowKey),
      });

      return () => {
        if (instance) instance.kill();
      };
    }, []);

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;

      element.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }}>
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default WindowWrapper;
