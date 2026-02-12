import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowConfig {
  [key: string]: {
    isOpen: boolean;
    zIndex: number;
    data: any;
  };
}

interface WindowStore {
  windows: WindowConfig;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: any) => void;
  closeWindow: (windowKey: string, data?: any) => void;
  focusWindow: (windowKey: string, data?: any) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: string, data = null): void =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;