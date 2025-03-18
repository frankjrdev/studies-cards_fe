import { create } from "zustand";

type SidebarStore = {
  isSidebarOpened: boolean;
  toggleSidebar: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpened: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpened: !state.isSidebarOpened })),
}));
