"use client";
import { useSidebarStore } from "@/store";

export default function Header() {
  const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);

  return (
    <div
      className={`flex items-center justify-between h-16 px-4 bg-primary transition-all duration-300 ease-in-out ${
        isSidebarOpened ? "ml-64" : "ml-0"
      }`}
    >
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        <span className="text-white text-2xl font-bold">Studies Cards</span>
      </div>
      <div className="flex items-center">
        <button className="bg-white text-primary rounded-full px-4 py-2 text-sm">
          Log In
        </button>
        <button className="bg-primary text-white rounded-full px-4 py-2 text-sm ml-4">
          Sign Up
        </button>
      </div>
    </div>
  );
}
