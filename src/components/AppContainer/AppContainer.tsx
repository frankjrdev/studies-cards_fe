"use client"; // Marca este componente como un Client Component

import { useSidebarStore } from "@/store";
import SideBar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);

  const title = usePathname().split("/")[1];

  return (
    <div className="flex h-screen">
      <SideBar /> {/* Sidebar fijo a la izquierda */}
      <div className="flex flex-col flex-1">
        <Header title={title} /> {/* Header fijo arriba */}
        <main
          className={`flex-1 p-6 overflow-auto transition-all duration-300 ease-in-out ${
            isSidebarOpened ? "ml-64" : "ml-0"
          }`}
        >
          {children}
        </main>{" "}
        {/* Contenido dinámico */}
      </div>
    </div>
  );
}
