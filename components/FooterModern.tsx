"use client";

import React from "react";
import { Heart, Globe, Award, Share2 } from "lucide-react";
import { CATEGORIES } from "@/data/articles";

interface FooterModernProps {
  onSelectCategory?: (category: string) => void;
}

export default function FooterModern({ onSelectCategory }: FooterModernProps) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t-4 border-red-600 font-sans pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Col (2 cols lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="inline-block">
              <span className="text-2xl font-black font-serif tracking-tight text-white uppercase">
                MANUAL DEL <span className="text-red-500">UNIVERSITARIO</span>
              </span>
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              La plataforma editorial independiente diseñada para inspirar, orientar y equipar a la comunidad universitaria con periodismo riguroso y recursos de alto valor académico.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              {/* TikTok */}
              <a
                href="#"
                className="p-2.5 rounded-full bg-neutral-800 hover:bg-red-600 hover:text-white transition-all duration-200 text-neutral-400"
                title="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525 2.25c.094.757.433 1.83 1.25 2.646.817.817 1.89 1.156 2.647 1.25V9.4a6.7 6.7 0 0 1-3.897-1.25V14.85a5.85 5.85 0 1 1-5.85-5.85c.348 0 .686.035 1.013.1v3.298a2.55 2.55 0 1 0 1.587 2.373V2.25h3.25z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="p-2.5 rounded-full bg-neutral-800 hover:bg-red-600 hover:text-white transition-all duration-200 text-neutral-400"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="p-2.5 rounded-full bg-neutral-800 hover:bg-red-600 hover:text-white transition-all duration-200 text-neutral-400"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Categories Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-red-600 pl-2">
              Secciones
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter((c) => c !== "Todas").map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(cat)}
                    className="hover:text-red-400 transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-red-600 pl-2">
              Recursos
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#explorar" className="hover:text-red-400 transition-colors">
                  Calculadora de Promedio
                </a>
              </li>
              <li>
                <a href="#explorar" className="hover:text-red-400 transition-colors">
                  Guía de Becas 2026
                </a>
              </li>
              <li>
                <a href="#explorar" className="hover:text-red-400 transition-colors">
                  Plantillas de Notion & Anki
                </a>
              </li>
              <li>
                <a href="#explorar" className="hover:text-red-400 transition-colors">
                  Directorio de Investigaciones
                </a>
              </li>
              <li>
                <a href="#explorar" className="hover:text-red-400 transition-colors">
                  Portal de Pasantías
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-red-600 pl-2">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Código de Ética Editorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Escribe para la Revista
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Contacto & Prensa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Políticas de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Manual del Universitario. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center space-x-2">
            <span>Creado 100% de Corazon por la UES</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
