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
  title: "Edusight",
  description:
    "EduSight revolutionizes student recruitment and engagement through AI-powered solutions. Our intelligent chatbot platform streamlines communication, automates routine tasks, and provides personalized support for educational institutions. Transform your student experience with cutting-edge technology.",
  icons: {
    icon: "/favicon.ico",
  },
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
