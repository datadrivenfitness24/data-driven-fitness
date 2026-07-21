import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.datadrivenfitness.com.au"),
  title: {
    default: "Data Driven Fitness",
    template: "%s — Data Driven Fitness",
  },
  description:
    "Data Driven Fitness builds tools that turn your training into numbers you can act on. First up: LiftIQ.",
  openGraph: {
    title: "Data Driven Fitness",
    description:
      "Data Driven Fitness builds tools that turn your training into numbers you can act on.",
    url: "https://www.datadrivenfitness.com.au",
    siteName: "Data Driven Fitness",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
