import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manual del Universitario | Edición Digital",
  description:
    "La publicación digital de referencia para la comunidad universitaria: técnicas de estudio, vida en el campus, salud mental, tecnología y finanzas estudiantiles.",
  keywords: [
    "Manual del Universitario",
    "MDU",
    "Universidad",
    "Estudiantes",
    "Técnicas de estudio",
    "Salud mental universitaria",
  ],
  authors: [{ name: "Redacción Manual del Universitario" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
