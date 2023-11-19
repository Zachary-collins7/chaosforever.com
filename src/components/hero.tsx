"use client";
import { useEffect } from "react";
import styles from "./hero.module.scss";
import Link from "next/link";

export default function Hero() {
    useEffect(() => {
        // on load
        console.log("Hero loaded");
    }, []);

    return (
        <>
            <svg width="0" height="0">
                <filter id="svg_filter" x="0" y="0" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency=".537" />
                    <feColorMatrix type="saturate" values="0" />
                    <feBlend in="SourceGraphic" mode="multiply" />
                </filter>
            </svg>
            <div className={styles.wrapper}>
                <div className={styles.background} />
                <div className={styles.inner}>
                    <div className={styles.name}>
                        <span className={styles.start}>C</span>
                        <span className={styles.blackHole}>
                            <span className={styles.disk}>
                                <span className={styles.arc0}></span>
                                <span className={styles.arc1}></span>
                                <span className={styles.arc2}></span>
                                <span className={styles.arc3}></span>
                                <span className={styles.arc4}></span>
                                <span className={styles.arc5}></span>
                                <span className={styles.arc6}></span>
                                <span className={styles.arc7}></span>
                                <span className={styles.arc8}></span>
                                <span className={styles.arc9}></span>
                            </span>
                            <span className={styles.orb}></span>
                        </span>
                        <span className={styles.end}>haos</span>
                    </div>
                </div>
            </div>
        </>
    );
}
