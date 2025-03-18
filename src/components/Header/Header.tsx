"use client";
import { useSidebarStore } from "@/store";
import { Bell, Grid, Image, Search } from "lucide-react";
import { useState } from "react";

export default function Header({ title }: { title: string }) {
  const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);

  const [search, setSearch] = useState("");

  return (
    <header
      className={`flex items-center justify-between w-full shadow-md h-16 px-4 bg-primary transition-all duration-300 ease-in-out ${
        isSidebarOpened ? "ml-0" : "-ml-64"
      }`}
    >
      {/* Izquierda: Nombre de la página */}
      <h1 className="text-lg font-bold">{title}</h1>

      {/* Centro: Barra de búsqueda */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full py-2 pl-10 pr-4 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
      </div>

      {/* Derecha: Iconos y perfil */}
      <div className="flex items-center gap-4">
        <Grid
          size={24}
          className="text-gray-500 cursor-pointer hover:text-gray-700"
        />
        <Bell
          size={24}
          className="text-gray-500 cursor-pointer hover:text-gray-700"
        />

        {/* Perfil */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/profile.jpg" // Cambia por la URL real del usuario
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          |<span className="text-gray-700 font-medium">Sadi Bajio</span>
        </div>
      </div>
    </header>
  );
}
