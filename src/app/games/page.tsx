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
            <div
                style={{
                    fontSize: "5rem",
                }}
            >
                🚧
            </div>

            <h1>
                <span className="highlight-text">Games</span> page still in
                construction
            </h1>

            <div
                style={{
                    marginTop: "1rem",
                }}
            >
                <Link href="/" className="text-primary-500 underline">
                    Go back home
                </Link>
            </div>
        </div>
    );
}
