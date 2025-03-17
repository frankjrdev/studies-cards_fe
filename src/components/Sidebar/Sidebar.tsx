"use client";

import Link from "next/link";
import SideBarButtonTogle from "./SidebarButtonTogle";
import { useState } from "react";

export default function SideBar() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpened((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpened ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full px-8 py-6 mt-4 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold text-grey-dark">
              Studies Cards
            </h1>

            <ul className="mt-4 flex flex-col">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/my-decks">My Decks</Link>
              <Link href="/settings">Settings</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/notifications">Notifications</Link>
            </ul>
          </div>
        </div>
      </div>
      <SideBarButtonTogle
        onClick={toggleSidebar}
        isSidebarOpened={isSidebarOpened}
      />
    </div>
  );
}
