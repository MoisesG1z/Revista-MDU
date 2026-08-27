"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, TrendingUp, Sparkles, Bookmark, ArrowUpRight } from "lucide-react";
import { Article, formatNumber } from "@/data/articles";

interface HeroAsymmetricProps {
  mainArticle: Article;
  trendingArticles: Article[];
  savedArticles: string[];
  onToggleBookmark: (id: string) => void;
}

export default function HeroAsymmetric({
  mainArticle,
  trendingArticles,
  savedArticles,
  onToggleBookmark,
}: HeroAsymmetricProps) {
  const isMainSaved = savedArticles.includes(mainArticle.id);

  return (
    <section className="py-8 md:py-12 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header Tagline */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 dark:text-red-500">
            Edición Destacada
          </span>
          <div className="h-px bg-neutral-200 dark:bg-neutral-800 flex-1 ml-4" />
        </div>

        {/* Grid 2 Column: Left Hero (2 cols desktop) + Right Ranking (1 col desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Article (Left - 8 cols) */}
          <div className="lg:col-span-8 group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl">
            {/* Image Container with Zoom Effect */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] overflow-hidden bg-neutral-900">
              {/* Cover Image */}
              <img
                src={mainArticle.coverImage}
                alt={mainArticle.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Badges Top Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex items-center space-x-2">
                  <span className="bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-full tracking-wider uppercase shadow-md flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>DESTACADO DE HOY</span>
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    {mainArticle.category}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleBookmark(mainArticle.id);
                  }}
                  className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                    isMainSaved
                      ? "bg-red-600 text-white"
                      : "bg-black/50 text-white hover:bg-red-600"
                  }`}
                  title={isMainSaved ? "Guardado" : "Guardar para después"}
                >
                  <Bookmark
                    className={`w-4 h-4 ${isMainSaved ? "fill-white" : ""}`}
                  />
                </button>
              </div>

              {/* Bottom Overlaid Metadata inside Hero Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                <div className="flex items-center space-x-4 text-xs font-medium text-neutral-300 mb-3">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>{mainArticle.readTime}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Eye className="w-3.5 h-3.5 text-red-400" />
                    <span>{formatNumber(mainArticle.viewsCount)} lecturas</span>
                  </span>
                </div>

                <Link href={`/articulos/${mainArticle.slug}`}>
                  <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white group-hover:text-red-300 transition-colors leading-tight mb-3">
                    {mainArticle.title}
                  </h1>
                </Link>

                <p className="text-sm sm:text-base text-neutral-200 line-clamp-2 sm:line-clamp-3 mb-4 font-sans leading-relaxed">
                  {mainArticle.excerpt}
                </p>

                {/* Author row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <div className="flex items-center space-x-3">
                    <img
                      src={mainArticle.author.avatar}
                      alt={mainArticle.author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-red-600"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {mainArticle.author.name}
                      </h4>
                      <p className="text-[11px] text-neutral-300">
                        {mainArticle.author.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/articulos/${mainArticle.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition-all shadow-md hover:shadow-red-600/50"
                  >
                    <span>Leer Artículo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: LO MÁS LEÍDO HOY (4 cols) */}
          <div className="lg:col-span-4 bg-neutral-100 dark:bg-neutral-900/80 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-red-600 text-white rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
                  Lo Más Leído Hoy
                </h3>
              </div>
              <span className="text-[10px] font-bold text-red-600 dark:text-red-500 bg-red-100 dark:bg-red-950/60 px-2 py-0.5 rounded-full uppercase font-mono">
                TOP RANKING
              </span>
            </div>

            <div className="space-y-6">
              {trendingArticles.slice(0, 3).map((article, index) => {
                const isSaved = savedArticles.includes(article.id);
                return (
                  <div
                    key={article.id}
                    className="group/item relative flex items-start space-x-4 p-3 rounded-xl hover:bg-white dark:hover:bg-neutral-800/80 transition-all duration-200 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 shadow-none hover:shadow-md"
                  >
                    {/* Big Bold Ranking Number */}
                    <span className="text-4xl sm:text-5xl font-serif font-black text-red-600/30 dark:text-red-500/30 group-hover/item:text-red-600 transition-colors leading-none w-8 text-center shrink-0">
                      {index + 1}
                    </span>

                    {/* Article Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
                        <span className="text-red-600 dark:text-red-400 uppercase font-mono">
                          {article.category}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <Link href={`/articulos/${article.slug}`}>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover/item:text-red-600 dark:group-hover/item:text-red-400 transition-colors line-clamp-2 leading-snug mb-1">
                          {article.title}
                        </h4>
                      </Link>

                      <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
                        <span className="flex items-center space-x-1">
                          <Eye className="w-3 h-3 text-neutral-400" />
                          <span>{formatNumber(article.viewsCount)}</span>
                        </span>

                        <button
                          onClick={() => onToggleBookmark(article.id)}
                          className="text-neutral-400 hover:text-red-600 p-1"
                          title="Guardar"
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              isSaved ? "fill-red-600 text-red-600" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Small Thumbnail */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-neutral-200">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
