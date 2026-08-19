"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark";
export type AdaptiveState = "AHEAD" | "ON_TRACK" | "AT_RISK" | "BLOCKED";

export interface UIState {
  sidebarOpen: boolean;
  darkMode: boolean;
  mobileNavOpen: boolean;
  adaptiveState: AdaptiveState;
  setSidebarOpen: (open: boolean) => void;
  setDarkMode: (dark: boolean) => void;
  setMobileNavOpen: (open: boolean) => void;
  setAdaptiveState: (state: AdaptiveState) => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      darkMode: false,
      mobileNavOpen: false,
      adaptiveState: "ON_TRACK",
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setDarkMode: (dark) => set({ darkMode: dark }),
      setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
      setAdaptiveState: (state) => set({ adaptiveState: state }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    }),
    { name: "titan-ui-storage" }
  )
);
