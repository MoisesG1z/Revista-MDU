"use client";

import React from "react";
import Link from "next/link";
import { Bookmark, X, ArrowRight, Trash2 } from "lucide-react";
import { ARTICLES } from "@/data/articles";

interface SavedArticlesModalProps {
  savedIds: string[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveBookmark: (id: string) => void;
}

export default function SavedArticlesModal({
  savedIds,
  isOpen,
  onClose,
  onRemoveBookmark,
}: SavedArticlesModalProps) {
  if (!isOpen) return null;

  const savedArticles = ARTICLES.filter((a) => savedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-red-100 dark:bg-red-950 text-red-600 rounded-full">
              <Bookmark className="w-5 h-5 fill-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-white">
                Tus Marcadores Guardados
              </h3>
              <p className="text-xs text-neutral-500">
                {savedArticles.length}{" "}
                {savedArticles.length === 1 ? "artículo" : "artículos"} guardados para leer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <Bookmark className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
              <p className="text-sm font-semibold">No tienes artículos guardados aún</p>
              <p className="text-xs mt-1">
                Haz clic en el icono del marcador en cualquier tarjeta para guardarla.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.id}
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 group"
              >
                <div className="flex items-center space-x-3 min-w-0 flex-1 pr-2">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase font-mono">
                      {article.category}
                    </span>
                    <Link
                      href={`/articulos/${article.slug}`}
                      onClick={onClose}
                      className="block text-xs font-bold text-neutral-900 dark:text-neutral-100 hover:text-red-600 truncate"
                    >
                      {article.title}
                    </Link>
                    <span className="text-[10px] text-neutral-500">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 shrink-0">
                  <Link
                    href={`/articulos/${article.slug}`}
                    onClick={onClose}
                    className="p-2 text-xs text-red-600 font-bold hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg flex items-center space-x-1"
                  >
                    <span>Leer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onRemoveBookmark(article.id)}
                    className="p-2 text-neutral-400 hover:text-red-600 rounded-lg"
                    title="Eliminar de guardados"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
