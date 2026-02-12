import React, { useRef, type JSX } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Tooltip } from "react-tooltip";
import { dockApps, type DockApp } from "#constants/index";
import useWindowStore from "#store/window";

const Dock = (): JSX.Element => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcon = (mouseX: number): void => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon: Element): void => {
        const { left: l, width: w } = (
          icon as HTMLElement
        ).getBoundingClientRect();
        const center = l - left + w / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.5 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (event: MouseEvent): void => {
      const { left } = dock.getBoundingClientRect();

      animateIcon(event.clientX - left);
    };

    const resetIcons = (): void =>
      icons.forEach((icon) =>
        gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" }),
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return (): void => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleApp = (app: { id: string; canOpen: boolean }) => {
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (!window) return;

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }

  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }: DockApp) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
}

export default Dock;
