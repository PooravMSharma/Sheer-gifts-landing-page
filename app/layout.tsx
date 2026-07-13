import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0].trim();
  const host = forwardedHost || requestHeaders.get("host") || "localhost:3000";
  const forwardedProto = requestHeaders.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProto || (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og-simple.png", metadataBase).toString();

  return {
    metadataBase,
    title: "Sheer Gifts Jaipur | Bespoke Hampers & Personalised Gifts",
    description:
      "Sheer Gifts Jaipur creates custom hampers and personalised gifts for birthdays, friendships, weddings and meaningful celebrations.",
    icons: {
      icon: "/brand/sheer-gifts-logo.jpg",
      shortcut: "/brand/sheer-gifts-logo.jpg",
      apple: "/brand/sheer-gifts-logo.jpg",
    },
    openGraph: {
      title: "Sheer Gifts Jaipur",
      description: "Custom hampers and personalised gifts, thoughtfully curated in Jaipur.",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: socialImage,
          width: 1730,
          height: 909,
          alt: "Sheer Gifts Jaipur — thoughtful gifting, reimagined",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sheer Gifts Jaipur",
      description: "Custom hampers and personalised gifts, thoughtfully curated in Jaipur.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f5ebe5",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
