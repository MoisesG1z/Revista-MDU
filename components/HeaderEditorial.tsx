"use client";

import React, { useState } from "react";
import {
  Sun,
  Moon,
  Coffee,
  Search,
  Menu,
  X,
  Bookmark,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { CATEGORIES } from "@/data/articles";

interface HeaderEditorialProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  readingTheme: "light" | "dark" | "sepia";
  onChangeTheme: (theme: "light" | "dark" | "sepia") => void;
  savedCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function HeaderEditorial({
  activeCategory,
  onSelectCategory,
  readingTheme,
  onChangeTheme,
  savedCount,
  searchQuery,
  onSearchChange,
}: HeaderEditorialProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors duration-300">
      {/* Upper Main Editorial Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Left: Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-200 hover:text-red-600 focus:outline-none"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Center: Editorial Logo Header Image */}
        <div className="text-center cursor-pointer flex items-center justify-center py-1">
          <a href="/" className="inline-flex items-center justify-center space-x-3 group" title="Manual del Universitario - Hijos de la Minerva">
            <div className="relative overflow-hidden rounded-full border-2 border-red-600 shadow-lg group-hover:scale-105 group-hover:shadow-red-600/40 transition-all duration-300">
              <img
                src="/logo-minerva.jpg"
                alt="Manual del Universitario - Hijos de la Minerva"
                className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 object-cover rounded-full"
              />
            </div>
          </a>
        </div>

        {/* Right: Actions (Social Media, Search, Theme Selector, UES Button, Bookmarks) */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Social Media Buttons (TikTok, YouTube, Instagram) */}
          <div className="flex items-center space-x-0.5 sm:space-x-1 mr-1">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              title="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525 2.25c.094.757.433 1.83 1.25 2.646.817.817 1.89 1.156 2.647 1.25V9.4a6.7 6.7 0 0 1-3.897-1.25V14.85a5.85 5.85 0 1 1-5.85-5.85c.348 0 .686.035 1.013.1v3.298a2.55 2.55 0 1 0 1.587 2.373V2.25h3.25z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Search Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 transition-colors"
              title="Buscar artículos"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Search Dropdown / Input Overlay */}
            {isSearchOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar notas, temas, autores..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    autoFocus
                    className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-neutral-900 dark:text-neutral-100"
                  />
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                </div>
                {searchQuery && (
                  <p className="text-xs text-neutral-500 mt-2 px-1">
                    Filtrando por: &quot;{searchQuery}&quot;
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Reading Mode / Theme Selector */}
          <div className="hidden sm:flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full border border-neutral-200 dark:border-neutral-700">
            <button
              onClick={() => onChangeTheme("light")}
              className={`p-1.5 rounded-full transition-all ${
                readingTheme === "light"
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400"
              }`}
              title="Modo Día"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => onChangeTheme("dark")}
              className={`p-1.5 rounded-full transition-all ${
                readingTheme === "dark"
                  ? "bg-neutral-900 text-red-500 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400"
              }`}
              title="Modo Noche"
            >
              <Moon className="w-4 h-4" />
            </button>
            <button
              onClick={() => onChangeTheme("sepia")}
              className={`p-1.5 rounded-full transition-all ${
                readingTheme === "sepia"
                  ? "bg-amber-200/80 text-amber-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400"
              }`}
              title="Modo Lectura Sepia"
            >
              <Coffee className="w-4 h-4" />
            </button>
          </div>

          {/* Botón Circular Rojo UES */}
          <a
            href="https://www.ues.edu.sv/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black text-xs flex items-center justify-center shadow-md hover:shadow-red-600/40 transition-all border border-red-500 shrink-0"
            title="Sitio Oficial UES (Universidad de El Salvador)"
          >
            UES
          </a>

          {/* Bookmark Badge Counter */}
          <div className="relative">
            <a
              href="#saved-articles"
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-red-50 dark:hover:bg-red-950/40 text-neutral-800 dark:text-neutral-200 hover:text-red-600 rounded-full transition-colors text-xs font-semibold"
              title="Artículos Guardados"
            >
              <Bookmark className="w-4 h-4 text-red-600 fill-red-600/20" />
              <span className="hidden sm:inline">Guardados</span>
              <span className="bg-red-600 text-white rounded-full px-1.5 py-0.2 text-[10px] font-bold">
                {savedCount}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Categories Navigation Bar */}
      <nav className="hidden md:block border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-1 lg:space-x-4 overflow-x-auto py-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`relative px-3.5 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-all uppercase whitespace-nowrap rounded-md ${
                  isActive
                    ? "text-red-600 dark:text-red-500 font-bold"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-neutral-800/50"
                }`}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-600 dark:bg-red-500 rounded-full animate-in fade-in duration-200" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2 px-2">
              Categorías Editorial
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-red-600 text-white font-bold"
                    : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500">
              Modo de lectura:
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => onChangeTheme("light")}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  readingTheme === "light"
                    ? "bg-red-600 text-white"
                    : "bg-neutral-100 text-neutral-700"
                }`}
              >
                Claro
              </button>
              <button
                onClick={() => onChangeTheme("dark")}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  readingTheme === "dark"
                    ? "bg-red-600 text-white"
                    : "bg-neutral-800 text-neutral-200"
                }`}
              >
                Oscuro
              </button>
              <button
                onClick={() => onChangeTheme("sepia")}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  readingTheme === "sepia"
                    ? "bg-amber-700 text-white"
                    : "bg-amber-100 text-amber-900"
                }`}
              >
                Sepia
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
