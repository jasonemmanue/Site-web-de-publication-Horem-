import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Horem+ | Petites annonces immobilieres au Cameroun",
  description:
    "Trouvez votre logement ideal au Cameroun. Chambres, studios, appartements, villas, restaurants, ecoles et pharmacies. Paiement Mobile Money securise.",
  keywords: [
    "immobilier",
    "Cameroun",
    "logement",
    "Yaounde",
    "Douala",
    "location",
    "annonces",
    "Mobile Money",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Horem+ | Petites annonces immobilieres au Cameroun",
    description:
      "Trouvez votre logement ideal au Cameroun. Chambres, studios, appartements, villas.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
