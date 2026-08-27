"use client";

import React, { useState, useEffect } from "react";
import { Flame, Calendar, Sparkles, MapPin } from "lucide-react";
import { ARTICLES } from "@/data/articles";

export default function TickerBar() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatted = now.toLocaleDateString("es-ES", options);
    // Capitalize first letter
    setCurrentDate(formatted.charAt(0).toUpperCase() + formatted.slice(1));
  }, []);

  const breakingArticles = ARTICLES.filter((a) => a.isBreaking);

  return (
    <div className="bg-gradient-to-r from-red-800 via-red-600 to-red-900 text-white text-xs sm:text-sm font-medium border-b border-red-500/30 overflow-hidden shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left: Ticker Label & Marquee Content */}
        <div className="flex items-center space-x-3 overflow-hidden flex-1">
          <div className="flex items-center space-x-1.5 bg-white text-red-700 font-extrabold px-2.5 py-0.5 rounded-full text-xs tracking-wider uppercase shadow-inner shrink-0 animate-pulse">
            <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
            <span>ÚLTIMA HORA</span>
          </div>

          <div className="relative overflow-hidden w-full h-5 flex items-center">
            <div className="animate-ticker flex space-x-8 items-center text-red-100 font-normal">
              {breakingArticles.map((article, idx) => (
                <span key={idx} className="flex items-center space-x-2">
                  <Sparkles className="w-3 h-3 text-red-300 shrink-0" />
                  <a
                    href={`/articulos/${article.slug}`}
                    className="hover:underline hover:text-white transition-colors"
                  >
                    <strong className="font-semibold text-white">
                      [{article.category}]
                    </strong>{" "}
                    {article.title}
                  </a>
                </span>
              ))}
              {/* Duplicate for seamless looping marquee */}
              {breakingArticles.map((article, idx) => (
                <span key={`dup-${idx}`} className="flex items-center space-x-2">
                  <Sparkles className="w-3 h-3 text-red-300 shrink-0" />
                  <a
                    href={`/articulos/${article.slug}`}
                    className="hover:underline hover:text-white transition-colors"
                  >
                    <strong className="font-semibold text-white">
                      [{article.category}]
                    </strong>{" "}
                    {article.title}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Date & Location Info */}
        <div className="hidden lg:flex items-center space-x-4 shrink-0 pl-4 border-l border-red-500/40 text-red-100 text-xs">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 text-red-300" />
            <span>{currentDate || "Cargando fecha..."}</span>
          </div>
          <div className="flex items-center space-x-1 text-red-200">
            <MapPin className="w-3.5 h-3.5 text-red-300" />
            <span>Campus Central • 22°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
