// Add this hook to any component that needs to react to theme changes
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";

export default function MyComponent() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Set initial state
		setIsDark(document.documentElement.classList.contains("dark"));

		// Listen for theme changes
		// const handleThemeChange = (e: any) => setIsDark(e.detail.isDark);
		const handleThemeChange = (e: Event) =>
			setIsDark((e as CustomEvent<{ isDark: boolean }>).detail.isDark);

		window.addEventListener("themechange", handleThemeChange);

		return () =>
			window.removeEventListener("themechange", handleThemeChange);
	}, []);

	return (
		<div className="flex  items-center gap-3">
			<Image
				src={isDark ? "/logo/logowhite.png" : "/logo/logo.png"}
				alt="logo"
				height={100}
				width={100}
				className="h-[24px] w-[24px]"
			/>
			<AnimatedThemeToggler />
		</div>
	);
}
