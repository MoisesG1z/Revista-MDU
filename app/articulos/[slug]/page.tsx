"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Eye,
  Bookmark,
  Share2,
  Heart,
  Check,
  MessageCircle,
  Copy,
  Sparkles,
  Sun,
  Moon,
  Coffee,
  Type,
} from "lucide-react";
import { ARTICLES, Article, formatNumber } from "@/data/articles";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import FooterModern from "@/components/FooterModern";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  // Unwrap params using React.use (Next.js 15+ / React 19)
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const article = ARTICLES.find((a) => a.slug === slug);

  const [readingTheme, setReadingTheme] = useState<"light" | "dark" | "sepia">("light");
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(142);
  const [hasLiked, setHasLiked] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark", "theme-sepia");
    document.body.classList.add(`theme-${readingTheme}`);
  }, [readingTheme]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-950 p-4 text-center">
        <Sparkles className="w-12 h-12 text-red-600 mb-4 animate-bounce" />
        <h1 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white mb-2">
          Artículo no encontrado
        </h1>
        <p className="text-neutral-500 mb-6 max-w-md">
          La nota que buscas no existe o ha sido movida a otra sección de la revista.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg"
        >
          Volver a la Portada MDU
        </Link>
      </div>
    );
  }

  // Recommended Articles (excluding current)
  const recommendedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  // FontSize Mapping
  const fontSizeClasses = {
    sm: "text-base leading-relaxed",
    base: "text-lg leading-relaxed",
    lg: "text-xl leading-relaxed",
    xl: "text-2xl leading-relaxed",
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Sticky Top Scroll Reading Progress Line */}
      <ReadingProgressBar />

      {/* Top Reading Bar & Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-3 px-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-red-600" />
            <span>Volver a la Portada</span>
          </Link>

          {/* Reading Customizer (Theme & Font Size) */}
          <div className="flex items-center space-x-3">
            {/* Font Size Adjuster */}
            <div className="hidden sm:flex items-center space-x-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs">
              <span className="text-[10px] font-bold text-neutral-400 pl-2 pr-1 flex items-center">
                <Type className="w-3 h-3" />
              </span>
              {(["sm", "base", "lg", "xl"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-2 py-0.5 rounded-full font-bold uppercase transition-all ${
                    fontSize === size
                      ? "bg-red-600 text-white shadow-sm"
                      : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Reading Theme Toggle */}
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setReadingTheme("light")}
                className={`p-1.5 rounded-full ${
                  readingTheme === "light" ? "bg-white text-red-600 shadow-sm" : "text-neutral-400"
                }`}
                title="Fondo Blanco"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReadingTheme("dark")}
                className={`p-1.5 rounded-full ${
                  readingTheme === "dark" ? "bg-neutral-900 text-red-500 shadow-sm" : "text-neutral-400"
                }`}
                title="Fondo Oscuro"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReadingTheme("sepia")}
                className={`p-1.5 rounded-full ${
                  readingTheme === "sepia" ? "bg-amber-200 text-amber-900 shadow-sm" : "text-neutral-400"
                }`}
                title="Fondo Sepia"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Reading Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Article Category & Title */}
        <div className="space-y-4 text-center sm:text-left mb-8">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <span className="bg-red-600 text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              {article.category}
            </span>
            {article.isBreaking && (
              <span className="bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 border border-red-300">
                <Sparkles className="w-3 h-3 text-red-600" />
                <span>ÚLTIMA HORA</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-black text-neutral-900 dark:text-white tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author & Meta Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-b border-neutral-200 dark:border-neutral-800 py-4">
            <div className="flex items-center space-x-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-red-600"
              />
              <div className="text-left">
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                  {article.author.name}
                </h4>
                <p className="text-xs text-neutral-500">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs text-neutral-500 font-medium">
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                <span>{article.readTime}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Eye className="w-3.5 h-3.5 text-red-600" />
                <span>{formatNumber(article.viewsCount)} vistas</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-10 bg-neutral-900 aspect-[16/9] border border-neutral-200 dark:border-neutral-800">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-xs text-neutral-300 italic text-right">
            Fotografía por Unsplash Editorial • Revista MDU
          </div>
        </div>

        {/* Featured Pull Quote Callout if provided */}
        {article.quote && (
          <div className="my-8 p-6 bg-red-50 dark:bg-red-950/40 border-l-4 border-red-600 rounded-r-2xl shadow-md">
            <p className="text-red-950 dark:text-red-200 font-serif italic text-xl leading-relaxed">
              &quot;{article.quote}&quot;
            </p>
            <span className="block mt-3 text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider">
              — Cita Clave Editorial
            </span>
          </div>
        )}

        {/* Article Body Content */}
        <div
          className={`font-sans text-neutral-800 dark:text-neutral-200 space-y-6 ${fontSizeClasses[fontSize]}`}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Interactive Floating / Bottom Social Share & Like Bar */}
        <div className="mt-12 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          {/* Like / Applause Counter */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 ${
                hasLiked
                  ? "bg-red-600 text-white shadow-red-600/40"
                  : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${hasLiked ? "fill-white" : "text-red-600"}`}
              />
              <span>{likesCount} Me gusta</span>
            </button>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2.5 rounded-full transition-colors ${
                isSaved
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 hover:text-red-600"
              }`}
              title="Guardar marcador"
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? "fill-white" : ""}`} />
            </button>
          </div>

          {/* Social Share Triggers */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-neutral-500 uppercase mr-2">
              Compartir:
            </span>
            <button
              onClick={handleCopyLink}
              className="p-2.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-red-600 transition-colors shadow-sm relative"
              title="Copiar Enlace"
            >
              {copiedToast ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                article.title
              )}&url=${encodeURIComponent("https://revistamdu.edu")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-red-600 transition-colors shadow-sm"
              title="Compartir en X / Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${article.title} - https://revistamdu.edu`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 transition-colors shadow-sm"
              title="Compartir en WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copy Toast Feedback */}
        {copiedToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 border border-neutral-700 animate-in fade-in slide-in-from-bottom-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>¡Enlace copiado al portapapeles!</span>
          </div>
        )}

        {/* Recommended Articles Section */}
        <section className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full" />
            <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
              Artículos recomendados para seguir leyendo
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedArticles.map((rec) => (
              <Link
                key={rec.id}
                href={`/articulos/${rec.slug}`}
                className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-900 relative">
                  <img
                    src={rec.coverImage}
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    {rec.category}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-serif font-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                    {rec.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <span>{rec.readTime}</span>
                    <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform">
                      Leer →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterModern />
    </div>
  );
}
