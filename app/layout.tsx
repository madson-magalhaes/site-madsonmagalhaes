import type { Metadata } from "next";
import { PixelInitializer } from "@/components/PixelInitializer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madson Magalhães - Inteligência Artificial para negócios",
  description: "Implante agentes de IA para atendimento 24/7. Clínicas, Engenharia e mais. ROI em 2-4 meses.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF6700" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-gradient-dark text-brand-text-primary antialiased">
        <PixelInitializer pixelId={pixelId} />
        {children}
      </body>
    </html>
  );
}
