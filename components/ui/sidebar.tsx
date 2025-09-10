// components/ui/sidebar.tsx
"use client";

import { useState } from "react";
import { User, MessageCircle } from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isAuthenticated = false; // temporal, para mostrar diseño de no autenticado

  return (
    <div
      className={`flex flex-col bg-gray-900 text-gray-100 shadow-lg transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } h-screen`}
    >
      {/* HEADER: logo y título */}
      <div className="flex items-center justify-center h-16 border-b border-gray-700 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            {/* Logo placeholder */}
            <span className="font-bold text-white text-sm">L</span>
          </div>
          {!isCollapsed && (
            <span className="font-semibold text-lg">MiPrograma</span>
          )}
        </div>
      </div>

      {/* HISTORY: historiales o mensaje de inicio de sesión */}
      <div className="flex-1 overflow-y-auto p-4">
        {isAuthenticated ? (
          <ul className="space-y-2">
            {/* Ejemplos de historiales */}
            {["Chat 1", "Chat 2", "Chat 3"].map((chat, i) => (
              <li
                key={i}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                {!isCollapsed && <span>{chat}</span>}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-full text-center px-2 text-gray-400">
            {!isCollapsed &&
              "Para poder conservar tus conversaciones es importante iniciar sesión."}
            {isCollapsed && (
              <User className="w-5 h-5 text-gray-400" />
            )}
          </div>
        )}
      </div>

      {/* FOOTER: botón login o ver perfil */}
      <div className="flex items-center justify-center h-16 border-t border-gray-700 px-4">
        {!isCollapsed ? (
          isAuthenticated ? (
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
              Ver perfil
            </button>
          ) : (
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
              Iniciar sesión
            </button>
          )
        ) : (
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700">
            <User className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Botón colapsar/expandir */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute bottom-4 left-full -translate-x-full p-2 bg-gray-800 hover:bg-gray-700 rounded-r-lg shadow"
      >
        {isCollapsed ? ">" : "<"}
      </button>
    </div>
  );
}
