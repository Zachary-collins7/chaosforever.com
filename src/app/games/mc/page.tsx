// /files/mc/chaos.mrpack
import Link from "next/link";

export default function Page() {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                paddingTop: "3rem",
            }}
        >
            <h1 className="text-3xl font-bold">Minecraft Download Links</h1>

            <div className="inline-block text-left mt-3">
                <ol className="list-inside">
                    <li>
                        <Link
                            href="https://prismlauncher.org/"
                            className="text-primary-500 underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download Prism Launcher
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-primary-500 underline"
                            download={true}
                            href="/files/mc/chaos.mrpack"
                        >
                            Download Chaos MrPack
                        </Link>
                    </li>
                </ol>
            </div>

            {/* <div
                style={{
                    marginTop: "1rem",
                }}
            >
                <Link href="/" className="text-primary-500 underline">
                    Go back home
                </Link>
            </div> */}
        </div>
    );
}
