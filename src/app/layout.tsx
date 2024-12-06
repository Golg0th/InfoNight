import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Humanocean",
    description: "Explorez et découvrez Humanocean",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
        <body className="min-h-screen bg-gray-100 m-0 p-0 overflow-x-hidden">
        {/* Header */}
        <header className="fixed z-20 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
            {/* Titre du site */}
            <h1 className="text-3xl font-bold tracking-wide">Humanocean</h1>

            {/* Boutons de navigation */}
            <div className="flex space-x-4">
                <a
                    href="/"
                    className="px-4 py-2 hover:bg-gray-900 rounded-md shadow text-white"
                >
                    Accueil
                </a>
                <a
                    href="/choix"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md shadow text-white"
                >
                    Jeu
                </a>
            </div>
        </header>

        <main className="pt-20 px-4">{children}</main>
        </body>
        </html>
    );
}
