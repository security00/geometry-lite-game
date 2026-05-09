import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geometrylitegame.net"),
  title: "Geometry Dash Lite - Play Geometry Dash Online Free",
  description:
    "Play Geometry Dash Lite online for free. Jump through spikes, follow the rhythm, and enjoy a fast Geometry Dash browser platformer.",
  alternates: {
    canonical: "https://geometrylitegame.net/",
  },
  keywords: [
    "geometry dash",
    "geometry dash lite",
    "geometry dash online",
    "geometry lite game",
    "geometry game",
  ],
  openGraph: {
    title: "Geometry Dash Lite - Play Geometry Dash Online Free",
    description:
      "Play Geometry Dash Lite online for free in your browser. Jump, dodge spikes, follow the rhythm, and practice each level.",
    url: "https://geometrylitegame.net/",
    siteName: "Geometry Lite Game",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Geometry Dash Lite - Play Geometry Dash Online Free",
    description:
      "Play Geometry Dash Lite online for free. A fast rhythm platformer inspired by Geometry Dash.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R6H2JTE56V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R6H2JTE56V');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "woisdbbddb");
          `}
        </Script>
      </body>
    </html>
  );
}
