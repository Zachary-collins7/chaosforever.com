import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                sm: "0.750rem",
                base: "1rem",
                xl: "1.333rem",
                "2xl": "1.777rem",
                "3xl": "2.369rem",
                "4xl": "3.158rem",
                "5xl": "4.210rem",
            },
            fontFamily: {
                heading: "Poppins",
                body: "Poppins",
            },
            fontWeight: {
                normal: "400",
                bold: "700",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    100: "var(--primary-4)",
                    200: "var(--primary-4)",
                    300: "var(--primary-4)",
                    400: "var(--primary-4)",
                    500: "var(--primary-5)",
                    600: "var(--primary-6)",
                    700: "var(--primary-6)",
                    800: "var(--primary-6)",
                    900: "var(--primary-6)",
                },
                secondary: {
                    100: "var(--secondary-4)",
                    200: "var(--secondary-4)",
                    300: "var(--secondary-4)",
                    400: "var(--secondary-4)",
                    500: "var(--secondary-5)",
                    600: "var(--secondary-6)",
                    700: "var(--secondary-6)",
                    800: "var(--secondary-6)",
                    900: "var(--secondary-6)",
                },
                accent: {
                    100: "var(--accent-4)",
                    200: "var(--accent-4)",
                    300: "var(--accent-4)",
                    400: "var(--accent-4)",
                    500: "var(--accent-5)",
                    600: "var(--accent-6)",
                    700: "var(--accent-6)",
                    800: "var(--accent-6)",
                    900: "var(--accent-6)",
                },
                text: {
                    100: "var(--text-4)",
                    200: "var(--text-4)",
                    300: "var(--text-4)",
                    400: "var(--text-4)",
                    500: "var(--text-5)",
                    600: "var(--text-6)",
                    700: "var(--text-6)",
                    800: "var(--text-6)",
                    900: "var(--text-6)",
                },
                background: {
                    100: "var(--background-4)",
                    200: "var(--background-4)",
                    300: "var(--background-4)",
                    400: "var(--background-4)",
                    500: "var(--background-5)",
                    600: "var(--background-6)",
                    700: "var(--background-6)",
                    800: "var(--background-6)",
                    900: "var(--background-6)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
