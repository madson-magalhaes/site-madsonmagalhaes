import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consultoria em IA - Agentes e Treinamento",
  description: "Agentes de IA personalizados, treinamentos avançados e consultoria estratégica. Trabalhamos com múltiplos setores.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF6700" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
