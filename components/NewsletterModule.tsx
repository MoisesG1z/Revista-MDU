"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ShieldCheck, Sparkles, Send } from "lucide-react";

export default function NewsletterModule() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-700 to-red-950 p-8 sm:p-12 md:p-16 text-white shadow-2xl red-glow border border-red-500/30">
          {/* Glowing Background Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-900/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-500/40 text-red-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>BOLETÍN SEMANAL DEL UNIVERSITARIO</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
              Mantente un Paso Adelante en Tu Carrera Universitaria
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-red-100 font-sans leading-relaxed max-w-2xl mx-auto">
              Únete a más de <strong>25,000 estudiantes</strong> que reciben cada semana nuestros mejores métodos de estudio, alertas de becas, herramientas de IA y guías de salud mental sin spam.
            </p>

            {/* Interactive Form */}
            {status === "success" ? (
              <div className="p-6 bg-red-950/90 border border-red-400/50 rounded-2xl animate-in zoom-in-95 duration-300 flex items-center justify-center space-x-3 text-red-100">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-white text-base">
                    ¡Suscripción confirmada!
                  </h4>
                  <p className="text-xs text-red-200">
                    Hemos enviado un correo de bienvenida a <strong>{email}</strong>. Revisa tu bandeja de entrada.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto pt-2"
              >
                <div className="relative w-full sm:flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo institucional (.edu) o personal..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md text-white placeholder-red-200/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:bg-black/40 text-sm transition-all"
                  />
                  <Mail className="w-5 h-5 text-red-300 absolute left-4 top-3.5" />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-red-800 hover:bg-red-50 font-extrabold text-sm rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shrink-0 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <span>Suscribirme Gratis</span>
                      <Send className="w-4 h-4 text-red-700" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Guarantee */}
            <div className="flex items-center justify-center space-x-6 text-[11px] text-red-200/80 pt-2">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-red-300" />
                <span>100% Libre de Spam</span>
              </span>
              <span>•</span>
              <span>Cancela cuando quieras con 1 clic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
