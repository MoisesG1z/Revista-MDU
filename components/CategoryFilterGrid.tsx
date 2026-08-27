"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Eye, Bookmark, ArrowRight, Sparkles, Filter } from "lucide-react";
import { Article, CATEGORIES, formatNumber } from "@/data/articles";

interface CategoryFilterGridProps {
  articles: Article[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  savedArticles: string[];
  onToggleBookmark: (id: string) => void;
  searchQuery: string;
}

export default function CategoryFilterGrid({
  articles,
  selectedCategory,
  onSelectCategory,
  savedArticles,
  onToggleBookmark,
  searchQuery,
}: CategoryFilterGridProps) {
  // Filter logic
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Todas" || article.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-neutral-50/50 dark:bg-neutral-950/50" id="explorar">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header & Category Pills Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-red-600" />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
                Explorar Revista
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Filtra por área académica y encuentra contenidos redactados por expertos.
            </p>
          </div>

          {/* Interactive Pill Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "Todas"
                  ? articles.length
                  : articles.filter((a) => a.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap shadow-sm ${
                    isSelected
                      ? "bg-red-600 text-white shadow-red-600/30 shadow-md scale-105"
                      : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-red-800 text-white"
                        : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info if search or filter active */}
        {searchQuery && (
          <div className="mb-6 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-xl text-xs text-red-800 dark:text-red-300 flex items-center justify-between">
            <span>
              Mostrando resultados para: <strong>&quot;{searchQuery}&quot;</strong> (
              {filteredArticles.length} encontrados)
            </span>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-inner">
            <Sparkles className="w-10 h-10 text-red-500 mx-auto mb-3 animate-bounce" />
            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              No se encontraron artículos en esta categoría
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Prueba seleccionando otra categoría o borrando tu búsqueda.
            </p>
            <button
              onClick={() => onSelectCategory("Todas")}
              className="mt-4 px-5 py-2 bg-red-600 text-white text-xs font-bold rounded-full hover:bg-red-700 transition-colors shadow-md"
            >
              Ver todos los artículos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const isSaved = savedArticles.includes(article.id);
              return (
                <article
                  key={article.id}
                  className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    {/* Category Pill Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {article.category}
                      </span>
                    </div>

                    {/* Bookmark Toggle Button */}
                    <button
                      onClick={() => onToggleBookmark(article.id)}
                      className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
                        isSaved
                          ? "bg-red-600 text-white"
                          : "bg-black/40 text-white hover:bg-red-600"
                      }`}
                      title={isSaved ? "Quitar marcador" : "Guardar nota"}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${isSaved ? "fill-white" : ""}`}
                      />
                    </button>

                    {/* Read Time & Views Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-medium">
                      <span className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        <Clock className="w-3 h-3 text-red-400" />
                        <span>{article.readTime}</span>
                      </span>
                      <span className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        <Eye className="w-3 h-3 text-red-400" />
                        <span>{formatNumber(article.viewsCount)}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/articulos/${article.slug}`}>
                        <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug mb-3">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-6 font-sans">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Author & CTA Button */}
                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-8 h-8 rounded-full object-cover ring-2 ring-red-600/40"
                        />
                        <div>
                          <p className="text-xs font-bold text-neutral-900 dark:text-neutral-200">
                            {article.author.name}
                          </p>
                          <p className="text-[10px] text-neutral-500 truncate max-w-[110px]">
                            {article.date}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/articulos/${article.slug}`}
                        className="inline-flex items-center space-x-1 text-xs font-bold text-red-600 dark:text-red-500 group-hover:text-red-700 dark:group-hover:text-red-400 group-hover:translate-x-1 transition-all"
                      >
                        <span>Leer más</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
