"use client";

import React, { useState, useEffect } from "react";
import TickerBar from "@/components/TickerBar";
import HeaderEditorial from "@/components/HeaderEditorial";
import HeroAsymmetric from "@/components/HeroAsymmetric";
import CategoryFilterGrid from "@/components/CategoryFilterGrid";
import NewsletterModule from "@/components/NewsletterModule";
import FooterModern from "@/components/FooterModern";
import SavedArticlesModal from "@/components/SavedArticlesModal";
import { ARTICLES } from "@/data/articles";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");
  const [readingTheme, setReadingTheme] = useState<"light" | "dark" | "sepia">("light");
  const [savedArticles, setSavedArticles] = useState<string[]>(["1"]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync theme changes to body class
  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark", "theme-sepia");
    document.body.classList.add(`theme-${readingTheme}`);
  }, [readingTheme]);

  // Handle bookmark toggle
  const handleToggleBookmark = (id: string) => {
    setSavedArticles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Main featured article (e.g. Feynman technique or breaking news)
  const mainArticle = ARTICLES.find((a) => a.isBreaking) || ARTICLES[0];
  const trendingArticles = ARTICLES.filter((a) => a.isTrending);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Top Bar Ticker */}
      <TickerBar />

      {/* Editorial Header */}
      <HeaderEditorial
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery("");
        }}
        readingTheme={readingTheme}
        onChangeTheme={(t) => setReadingTheme(t)}
        savedCount={savedArticles.length}
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Asymmetric Hero Section */}
        {!searchQuery && activeCategory === "Todas" && (
          <HeroAsymmetric
            mainArticle={mainArticle}
            trendingArticles={trendingArticles}
            savedArticles={savedArticles}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {/* Interactive Pill Category Filter & Article Grid */}
        <CategoryFilterGrid
          articles={ARTICLES}
          selectedCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          savedArticles={savedArticles}
          onToggleBookmark={handleToggleBookmark}
          searchQuery={searchQuery}
        />

        {/* Newsletter Subscription Banner */}
        <NewsletterModule />
      </main>

      {/* Modern Footer */}
      <FooterModern
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          window.scrollTo({ top: 400, behavior: "smooth" });
        }}
      />

      {/* Saved Articles Modal */}
      <SavedArticlesModal
        savedIds={savedArticles}
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        onRemoveBookmark={handleToggleBookmark}
      />
    </div>
  );
}
