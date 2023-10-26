import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chaos Gaming Guild - Home",
    description:
        "The top guild in every game we have played and we are not about to stop",
    themeColor: "#0c0909",
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    appleWebApp: {
        capable: true,
        title: "Chaos Gaming Guild",
    },
    keywords: [
        "Chaos Gaming Guild",
        "Chaos Gmaes",
        "Chaos Immortal Rising",
        "Chaos Diablo IV",
    ],
    // icons: [
    //     {
    //         rel: "apple-touch-icon",
    //         sizes: "180x180",
    //         url: "/apple-touch-icon.png",
    //     },
    //     {
    //         rel: "icon",
    //         sizes: "32x32",
    //         url: "/favicon-32x32.png",
    //     },
    //     {
    //         rel: "icon",
    //         sizes: "16x16",
    //         url: "/favicon-16x16.png",
    //     },
    //     {
    //         rel: "icon",
    //         sizes: "192x192",
    //         url: "/android-chrome-192x192.png",
    //     },
    //     {
    //         rel: "icon",
    //         sizes: "512x512",
    //         url: "/android-chrome-512x512.png",
    //     },
    // ],
    // manifest: "/site.webmanifest",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `chaosforever.com`,
        siteName: "Chaos Gaming Guild",
        title: "Chaos Gaming Guild - Home",
        description:
            "The top guild in every game we have played and we are not about to stop",
        images: [
            {
                url: "/public/assets/images/bg-large.webp",
                type: "image/webp",
                width: 1920,
                height: 1080,
                alt: "Chaos Logo",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

function Footer() {
    return (
        <footer
            style={{
                zIndex: 0,
            }}
            className="flex justify-center flex-wrap bg-primary-500 py-8 items-center"
        >
            <div className="container max-w-screen-md">
                <div className="flex flex-row justify-around">
                    <div className="flex flex-col gap-2">
                        <Link className="font-bold text-lg" href="/">
                            Home
                        </Link>
                        <Link href="/about">About</Link>
                        <Link href="/games">Games</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-lg">Social</span>
                        <Link
                            href="https://discord.gg/N6kS828sJ3"
                            target="_blank"
                        >
                            Discord
                        </Link>
                        <Link
                            href="
                            https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                            YouTube
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
