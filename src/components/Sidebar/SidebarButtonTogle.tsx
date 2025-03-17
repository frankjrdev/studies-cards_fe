"use client";

import React from "react";

interface SideBarButtonTogleProps {
  onClick: () => void;
  isSidebarOpened: boolean;
}

export default function SideBarButtonTogle({
  onClick,
  isSidebarOpened,
}: SideBarButtonTogleProps) {
  console.log(isSidebarOpened);

  return (
    <>
      {isSidebarOpened ? (
        <button
          className="absolute -right-0 top-4 p-2 bg-titles rounded-l-lg shadow-md hover:cursor-pointer"
          onClick={onClick}
        >
          <span className="text-gray-700">◄</span>
        </button>
      ) : (
        <button
          className="absolute -right-8 top-4 p-2 bg-titles rounded-r-lg shadow-md hover:cursor-pointer"
          onClick={onClick}
        >
          <span className="text-gray-700">►</span>
        </button>
      )}
    </>
  );
}
