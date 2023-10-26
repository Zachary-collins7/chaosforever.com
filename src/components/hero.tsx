import Link from "next/link";

export default function Hero() {
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, hsla(0, 14%, 4%, 1), hsla(0, 14%, 4%, 0.15), hsla(0, 14%, 4%, 0.15), hsla(0, 14%, 4%, 1)), url('/assets/images/bg-large.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "brightness",
            }}
            className="w-full h-screen supports-[height:100svh]:h-[100svh] flex flex-row justify-center items-end md:items-center"
        >
            <div className="container py-16">
                <div className="rounded-lg backdrop-blur-md p-4 inline-block">
                    <div className="font-bold mb-6 drop-shadow-md">
                        <h1 className="text-4xl sm:text-7xl mb-4">Chaos</h1>
                        <p className="opacity-75">
                            The top guild in every game we have played and we
                            are not about to stop
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="https://discord.gg/N6kS828sJ3"
                            className="px-4 py-2 rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors"
                        >
                            Join our Discord
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 rounded-md text-white bg-secondary-500 hover:bg-secondary-400 transition-colors"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
