import Hero from "@components/hero";
import { ApiError } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
// https://www.realtimecolors.com/?colors=f3f2f2-0d0c0c-e4401b-181a1b-be604b&fonts=Poppins-Poppins
// " Our goal is to be a place for competitive gamers to come together in" +
//                 " a friendly environment and play the games we love.",

export default function Home() {
    return (
        <main
            style={{
                zIndex: 1,
            }}
            className="relative bg-background-500 flex min-h-screen flex-col items-center justify-between"
        >
            <Hero />
            <WhatAreWe />
            <WhatWeArePlaying />
            <OurMission />
        </main>
    );
}

function WhatAreWe() {
    const details = [
        {
            title: "Gamers",
            description:
                "Starting as a group in Idle Berserker, we have grown to be a" +
                " community of gamers who play a variety of games together.",
            imageUrl: "/assets/images/gaming-controller2.svg",
            imageAlt: "Gaming Controller",
            className: "",
        },
        {
            title: "Competitive",
            description:
                "Consistently the top guild in every game we take on. We are" +
                " always looking for new games to play.",
            imageUrl: "/assets/images/trophy.svg",
            imageAlt: "Player in Pain",
            // className: "py-7",
        },
        {
            title: "Community",
            description:
                "Gamenights, giveaways, and more. We have a lot of fun together and" +
                " are always looking for new people to join us.",
            imageUrl: "/assets/images/community.svg",
            imageAlt: "Community",
        },
    ];
    return (
        <div
            id="about"
            className="container px-4 py-6 sm:py-20 flex flex-col items-center justify-center"
        >
            <h2 className="text-4xl font-bold mb-4">What Are We?</h2>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                {details.map(
                    (
                        { title, description, imageUrl, imageAlt, className },
                        i
                    ) => (
                        <div
                            key={i}
                            className="p-6 max-w-md rounded-xl bg-secondary-500 border-2 border-secondary-400 flex flex-col"
                        >
                            {imageUrl && (
                                <div className="bg-accent-500 mx-auto mb-auto p-3">
                                    <Image
                                        src={imageUrl}
                                        width={200}
                                        height={200}
                                        alt={imageAlt!}
                                        className={`invert ${
                                            className ? className : ""
                                        }`}
                                    />
                                </div>
                            )}
                            <h4 className="text-3xl font-medium mx-auto mb-3 mt-5 leading-none">
                                {title}
                            </h4>
                            <p className="sm:text-lg">{description}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

function WhatWeArePlaying() {
    const games = [
        {
            name: "Immortal Rising",
            description: "#1 since server launch.",
            image: "/assets/images/immortal-rising.png",
            link: "/games/ir",
            communityLink: "https://discord.gg/immortalrising",
            downloadLinks: [
                {
                    type: "apple",
                    url: "https://apps.apple.com/us/app/immortal-rising/id1588863558",
                },
                {
                    type: "google",
                    url: "https://play.google.com/store/apps/details?id=com.badbeans.DarkIdle&hl=en_US&gl=US",
                },
            ],
        },
        {
            name: "Diablo IV",
            description: "Just for fun.",
            image: "/assets/images/diablo-4.jpeg",
            link: "",
            downloadLinks: [
                {
                    type: "pc",
                    url: "https://diablo4.blizzard.com",
                },
            ],
        },
        {
            name: "T3 Arena",
            description: "Newly started.",
            image: "/assets/images/t3-arena.webp",
            link: "",
            downloadLinks: [
                {
                    type: "apple",
                    url: "https://apps.apple.com/us/app/t3-arena/id1602814337",
                },
                {
                    type: "google",
                    url: "https://play.google.com/store/apps/details?id=com.xd.t3.global&hl=en&gl=US",
                },
            ],
        },
    ];
    return (
        <div
            id="playing"
            className="container px-4 py-6 sm:py-20 flex flex-col justify-center items-center"
        >
            <h2 className="text-4xl font-bold mb-4">We&apos;re Playing</h2>
            <div className="flex flex-col gap-4 w-full items-center">
                {games.map(
                    (
                        {
                            name,
                            description,
                            downloadLinks,
                            image,
                            link,
                            communityLink,
                        },
                        i
                    ) => (
                        <div
                            key={i}
                            className={`relative aspect-video flex rounded-xl overflow-clip w-full max-w-screen-md gap-2 ${
                                i % 2 !== 0
                                    ? "flex-row-reverse lg:-translate-x-[10%]"
                                    : "lg:translate-x-[10%]"
                            }  bg-secondary-500 border-2 border-secondary-400`}
                        >
                            <span
                                id={name.split(" ").join("-").toLowerCase()}
                                className="absolute -top-[20vh] -left-0"
                            />
                            <div
                                className="aspect-square bg-accent-500 h-full"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            <div
                                className={`flex flex-1 flex-col p-1 md:p-2 lg:p-4 ${
                                    i % 2 !== 0 ? "mr-auto" : ""
                                }`}
                            >
                                <h4 className="text-md md:text-2xl lg:text-3xl font-medium mb-3 leading-none">
                                    {name}
                                </h4>
                                <p className="text-md lg:text-lg">
                                    {description}{" "}
                                    {link && (
                                        <Link
                                            href={link}
                                            className="text-accent-500 underline"
                                        >
                                            Learn More
                                        </Link>
                                    )}
                                </p>
                                <div className="mt-auto flex flex-col gap-2 text-sm">
                                    <div className="flex gap-2 flex-col md:flex-row">
                                        <Link
                                            href="https://discord.gg/N6kS828sJ3"
                                            className="bg-accent-500 rounded-md px-2 py-1 flex-1 text-center"
                                            target="_blank"
                                        >
                                            Join Us on Discord
                                        </Link>
                                        {communityLink && (
                                            <Link
                                                href="https://discord.gg/immortalrising"
                                                className="border border-accent-500 rounded-md px-2 py-1 flex-1 text-center"
                                                target="_blank"
                                            >
                                                Community Discord
                                            </Link>
                                        )}
                                    </div>

                                    <div className="hidden md:flex gap-2 opacity-50">
                                        download:
                                        {downloadLinks.map(
                                            ({ type, url }, j) => (
                                                <Link
                                                    href={url}
                                                    className="flex items-center gap-1 underline"
                                                    target="_blank"
                                                    key={`${i}-${j}`}
                                                >
                                                    <Image
                                                        src={`/assets/external/logo/${type}-logo.svg`}
                                                        width={16}
                                                        height={16}
                                                        alt={`${type} logo`}
                                                        style={{
                                                            filter: "invert(1)",
                                                        }}
                                                    />
                                                    <span>{type}</span>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

function OurMission() {
    return (
        <div className="container px-4 py-6 sm:py-20 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg max-w-3xl bg-secondary-500 p-4 rounded-xl border-2 border-secondary-400">
                Our goal is to be a place for{" "}
                <span className="text-accent-500">competitive</span> gamers to
                come together in a friendly environment and play the games we{" "}
                <span className="text-accent-500">love</span>. We strive to be
                the best in every game we play, even if it means{" "}
                <span className="text-accent-500">breaking</span> the game. From
                programming and game cracking, to game theory and strategy, to
                just having <span className="text-accent-500">fun</span>,
                everyone will find a place in{" "}
                <span className="text-primary-500 font-bold">Chaos</span>
            </p>
        </div>
    );
}
