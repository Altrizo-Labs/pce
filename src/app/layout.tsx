import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TanStackProvider } from "@/providers/TanStackProvider";

const lato = localFont({
  src: [
    {
      path: "./fonts/lato/lato-v24-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/lato/lato-v24-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/lato/lato-v24-latin-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-lato", // Corrected variable name
});

const ibm = localFont({
  src: [
    {
      path: "./fonts/ibm/IBMPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm/IBMPlexSans-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ibm/IBMPlexSans-Bold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Projects Cost Engineering (PCE) | Expert Quantity Surveying & Cost Management",
  description:
    "Projects Cost Engineering (PCE) offers expert quantity surveying, cost engineering, and project management services in Sri Lanka and Oman. Benefit from over 25 years of industry experience and adherence to international standards.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
    // other: [ // Example for Safari pinned tab, if you have an SVG icon
    //   {
    //     rel: 'mask-icon',
    //     url: '/safari-pinned-tab.svg',
    //     color: '#1E3A8A', // Your primary color
    //   },
    // ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${ibm.variable} antialiased max-w-[1600px] mx-auto overflow-x-hidden min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100`}
      >
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
