"use client";
import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	// Initialize theme from localStorage on component mount
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		let shouldBeDark = false;

		if (savedTheme === "dark") {
			shouldBeDark = true;
		} else if (savedTheme === "light") {
			shouldBeDark = false;
		} else {
			// If no saved theme, use system preference
			shouldBeDark = prefersDark;
		}

		setIsDarkMode(shouldBeDark);

		if (shouldBeDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		setIsLoaded(true);
	}, []);

	const changeTheme = async () => {
		if (!buttonRef.current) return;

		const newTheme = !isDarkMode;

		// Check if browser supports View Transition API
		if (!document.startViewTransition) {
			// Fallback for browsers that don't support View Transition API
			setIsDarkMode(newTheme);
			document.documentElement.classList.toggle("dark", newTheme);
			localStorage.setItem("theme", newTheme ? "dark" : "light");
			return;
		}

		await document.startViewTransition(() => {
			flushSync(() => {
				const dark = document.documentElement.classList.toggle("dark");
				setIsDarkMode(dark);
				// Save theme preference to localStorage
				localStorage.setItem("theme", dark ? "dark" : "light");
				// Dispatch custom event to notify other components
				window.dispatchEvent(
					new CustomEvent("themechange", {
						detail: { isDark: dark },
					}),
				);
			});
		}).ready;

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect();
		const y = top + height / 2;
		const x = left + width / 2;
		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRad}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 700,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		);
	};

	return (
		<button
			ref={buttonRef}
			onClick={changeTheme}
			className={cn(
				"focus-visible:ring-ring ring-offset-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
				className,
			)}
			aria-label="Toggle theme"
			style={{ opacity: isLoaded ? 1 : 0 }} // Prevent flash of incorrect icon
		>
			{isDarkMode ? (
				<SunDim className="h-[1.2rem] w-[1.2rem] transition-all" />
			) : (
				<Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
			)}
		</button>
	);
};
