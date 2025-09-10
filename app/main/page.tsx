// app/main/page.tsx
"use client";

import Sidebar from "@/components/ui/sidebar";

export default function MainPage() {
  return (
    <div className="relative flex h-screen w-screen bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex-1 relative z-10 flex flex-col items-center justify-center p-4">
        {/* Tarjeta central */}
        <div className="flex flex-col w-full max-w-4xl h-[80%] bg-gray-800/90 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex-1 flex items-center justify-center text-gray-300 text-xl font-semibold">
            Contenido central / placeholder
          </div>
        </div>
      </div>

      {/* Fondos con gradientes y luces sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-2xl blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}
