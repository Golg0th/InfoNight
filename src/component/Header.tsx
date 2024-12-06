import Link from "next/link";
import localFont from "next/font/local";

const humanoceanFont = localFont({
    src: "../public/fonts/HumanoceanFont.woff2",
    display: "swap",
});

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
            {/* Titre du site */}
            <h1
                className={`${humanoceanFont.className} text-3xl font-bold tracking-wide`}
            >
                Humanocean
            </h1>

            {/* Boutons de navigation */}
            <div className="flex space-x-4">
                <Link href="/">
                    <a className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md shadow text-white">
                        Accueil
                    </a>
                </Link>
                <Link href="/jeu">
                    <a className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md shadow text-white">
                        Jeu
                    </a>
                </Link>
            </div>
        </header>
    );
}
