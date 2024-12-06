export default function Home() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <img
                src="/abysse.jpeg"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 className="text-5xl font-bold mb-4">
                    Choisissez votre role
                </h1>
                <a
                    href="/devine"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md text-white mb-2"
                >
                    Je devine !
                </a>
                <a
                    href="/jeu"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md text-white"
                >
                    Je donne les réponses !
                </a>
            </div>
            <div className="absolute inset-0 bg-black/60 z-0"></div>
        </div>
    );
}
