export default function Home() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <img
                src="/abysse.jpeg"
                alt="Abyss image"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 className="text-5xl font-bold mb-4">
                    Bienvenue sur HUMANOCEAN
                </h1>
                <p className="text-xl mb-6">
                    Découvrez les similarités entre le corps humain et le monde des océans
                </p>
                <a
                    href="/choix"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md text-white">
                    Je souhaite !
                </a>
            </div>
            <div className="absolute inset-0 bg-black/60 z-0"></div>
        </div>
    );
}
