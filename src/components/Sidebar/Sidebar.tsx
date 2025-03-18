"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdFolder,
  MdSettings,
  MdPerson,
  MdNotifications,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store";

export default function SideBar() {
  const { isSidebarOpened, toggleSidebar } = useSidebarStore();

  const path = usePathname();

  const menuItemsTop = [
    { name: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
    { name: "Projects", link: "/projects", icon: <MdFolder /> },
    { name: "My Decks", link: "/my-decks", icon: <MdFolder /> }, //
  ];

  const menuItemsBottom = [
    { name: "Settings", link: "/settings", icon: <MdSettings /> },
    { name: "Profile", link: "/profile", icon: <MdPerson /> },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <MdNotifications />,
    },
  ];

  return (
    <div
      className={`h-screen w-64 bg-primary border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isSidebarOpened ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-8 py-6 mt-4 flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl font-semibold text-grey-dark">
              Studies Cards
            </h1>

            <ul className="mt-4">
              {menuItemsTop.map((item) => (
                <li key={item.name} className="mb-8">
                  <Link
                    href={item.link}
                    className={`flex items-center text-grey-medium hover:text-[#8869A5] ${
                      path === item.link ? "text-[#8869A5] font-semibold" : ""
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="mt-4">
              {menuItemsBottom.map((item) => (
                <li key={item.name} className="mb-8">
                  <Link
                    href={item.link}
                    className={`flex items-center text-grey-medium hover:text-[#8869A5] ${
                      path === item.link ? "text-[#8869A5] font-semibold" : ""
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={toggleSidebar}
        className={`${isSidebarOpened ? "rounded-l-lg right-0" : "right-[-40px] rounded-r-lg"} absolute top-12 p-2 w-10 h-10 bg-[#F7B1CB] shadow-md hover:cursor-pointer`}
      >
        <span className="text-gray-700">{isSidebarOpened ? "◄" : "►"}</span>
      </button>
    </div>
  );
}
