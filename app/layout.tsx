import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import { CartProvider } from "./context/CartContext";
import CartServerProvider from "./CartServerProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: "E-Com Store — Fashion, Accessories, and Fast Checkout",
  description:
    "Shop curated men and women fashion collections with fast checkout, easy returns, and trusted service.",
  keywords: [
    "ecommerce",
    "fashion",
    "online shopping",
    "men's clothing",
    "women's clothing",
    "shopping cart",
    "fast delivery",
  ],
  authors: [{ name: "E-Com Store", url: "https://www.example.com" }],
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
  openGraph: {
    title: "E-Com Store — Fashion, Accessories, and Fast Checkout",
    description:
      "Shop curated men and women fashion collections with fast checkout, easy returns, and trusted service.",
    type: "website",
    siteName: "E-Com Store",
    images: [
      {
        url: "/image.webp",
        width: 1200,
        height: 630,
        alt: "E-Com Store homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Com Store — Fashion, Accessories, and Fast Checkout",
    description:
      "Shop curated men and women fashion collections with fast checkout, easy returns, and trusted service.",
    images: ["/image.webp"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#F8F8F8]`}
      >
            <CartServerProvider>
               {children}
            </CartServerProvider>
            
       
     
      </body>
    </html>
  );
}
