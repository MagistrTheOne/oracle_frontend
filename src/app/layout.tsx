import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oracle850B-MoE: Sovereign AI for Advanced Reasoning",
  description: "Oracle850B-MoE is a Russian language AI model with 850B parameters and custom MoE architecture, bridging the gap in Russian-language AI for complex reasoning tasks.",
  keywords: ["AI", "Russian AI", "MoE", "Artificial Intelligence", "Machine Learning", "Oracle850B", "Sovereign AI", "Russian Language Model"],
  authors: [{ name: "MagistrTheOne" }],
  creator: "MagistrTheOne",
  publisher: "Oracle850B-MoE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oracle850b-moe.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "ru": "/ru",
    },
  },
  openGraph: {
    title: "Oracle850B-MoE: Sovereign AI Presentation",
    description: "Advanced Russian language AI model with 850B parameters and custom MoE architecture for complex reasoning tasks",
    url: "https://oracle850b-moe.com",
    siteName: "Oracle850B-MoE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oracle850B-MoE AI Model Presentation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle850B-MoE: Sovereign AI Presentation",
    description: "Advanced Russian language AI model with 850B parameters and custom MoE architecture for complex reasoning tasks",
    images: ["/og-image.jpg"],
    creator: "@MagistrTheOne",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <Navigation />
            <main className="relative">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
