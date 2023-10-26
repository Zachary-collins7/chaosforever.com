"use client";
import { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className={`${styles.nav} ${expanded ? styles.expanded : ""}`}>
            <div className={styles.logo}>Chaos</div>

            <div className={styles.content}>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <details className={styles.linkGroup}>
                        <summary>
                            <Link href="/games">Games We Play</Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/games/ir">Immortal Rising</Link>
                            </li>
                            <li>
                                <Link href="/games/d4">Diablo IV</Link>
                            </li>
                        </ul>
                    </details>
                    <Link href="/about">About</Link>
                </div>
                <div className={styles.mobileExtra}>
                    <div className={styles.socials}>
                        <Link
                            className={styles.iconLink}
                            href="https://discord.gg/N6kS828sJ3"
                        >
                            <Image
                                src={
                                    "/assets/external/logo/discord-mark-white.svg"
                                }
                                width={16}
                                height={16}
                                alt="Discord Icon"
                            />
                            Join Our Discord
                        </Link>
                    </div>
                </div>
            </div>

            <button
                className={styles.burger}
                onClick={() => setExpanded(!expanded)}
            >
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
            </button>
        </nav>
    );
}
