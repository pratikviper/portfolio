import type { Metadata } from "next";
import Script from "next/script";
import "@/index.css";

const siteUrl = "https://pratikyawalkar-portfolio.netlify.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pratik | Portfolio",
  description:
    "Explore the professional portfolio of Pratik Yawalkar – a skilled web developer with expertise in React, Next.js, and building modern full-stack applications.",
  keywords: [
    "Pratik Yawalkar",
    "web developer",
    "React developer",
    "frontend portfolio",
    "personal website",
    "Netlify portfolio",
    "JavaScript",
    "Next.js",
    "FastAPI",
  ],
  authors: [{ name: "Pratik Yawalkar" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "ghFEDgFgSywyllNvA7RPSZbZbeQCvHC0HURrOPQH30s",
  },
  openGraph: {
    title: "Pratik | Portfolio",
    description:
      "Full-stack developer with expertise in React, Next.js, FastAPI. View my projects, skills, and resume.",
    url: siteUrl,
    type: "website",
    images: ["/images/optimized-room.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-76V57DDTTV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-76V57DDTTV');
          `}
        </Script>
      </body>
    </html>
  );
}
