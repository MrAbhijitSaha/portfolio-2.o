"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

interface NavItem {
	href: string;
	label: string;
}

interface LamphomeProps {
	title?: string;
	description?: string;
	logoSrc?: string;
	logoAlt?: string;
	navItems?: NavItem[];
	children?: React.ReactNode;
	className?: string;
}

export function Lamphome({
	title,
	description,
	logoSrc,
	logoAlt,
	navItems = [],
	children,
	className = "",
}: LamphomeProps) {
	const [chainPulled, setChainPulled] = useState(false);
	const [chainLength, setChainLength] = useState(48);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [dragY, setDragY] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [showGlow, setShowGlow] = useState(false);
	const [glowPosition, setGlowPosition] = useState<"above" | "below">(
		"below",
	);
	const [isLoaded, setIsLoaded] = useState(false);

	const titleRef = useRef<HTMLHeadingElement>(null);
	const navBarRef = useRef<HTMLDivElement>(null);
	const chainToggleRef = useRef<HTMLDivElement>(null);

	const { theme, setTheme, resolvedTheme } = useTheme();
	const isDarkMode = resolvedTheme === "dark";
	const pathname = usePathname();

	// Initialize theme state and handle loading
	useEffect(() => {
		if (resolvedTheme === "dark") {
			setChainPulled(true);
			setShowGlow(true);
			setGlowPosition("above");
			setChainLength(72);
		} else {
			setChainPulled(false);
			setShowGlow(false);
			setGlowPosition("below");
			setChainLength(48);
		}
		setIsLoaded(true);
	}, [resolvedTheme]);

	const calculateGlowPosition = (currentDragY: number) => {
		if (!titleRef.current || !navBarRef.current) return "below";
		const navBarRect = navBarRef.current.getBoundingClientRect();
		const titleRect = titleRef.current.getBoundingClientRect();
		const chainEndY = navBarRect.bottom + chainLength + currentDragY;
		const titleCenterY = titleRect.top + titleRect.height / 2;
		return chainEndY < titleCenterY ? "above" : "below";
	};

	const animatedThemeChange = async (newTheme: "light" | "dark") => {
		if (!chainToggleRef.current) return;

		// Check if browser supports View Transition API
		if (!document.startViewTransition) {
			// Fallback for browsers that don't support View Transition API
			setTheme(newTheme);
			setChainPulled(newTheme === "dark");
			setChainLength(newTheme === "dark" ? 72 : 48);
			setShowGlow(newTheme === "dark");
			return;
		}

		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(newTheme);
				setChainPulled(newTheme === "dark");
				setChainLength(newTheme === "dark" ? 72 : 48);
				setShowGlow(newTheme === "dark");
				if (newTheme === "dark") {
					setGlowPosition("above");
				} else {
					setGlowPosition("below");
				}

				// Dispatch custom event to notify other components
				window.dispatchEvent(
					new CustomEvent("themechange", {
						detail: { isDark: newTheme === "dark" },
					}),
				);
			});
		}).ready;

		// Get the position of the chain toggle for the animation
		const { top, left, width, height } =
			chainToggleRef.current.getBoundingClientRect();
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

	const handleDragStart = () => {
		setIsDragging(true);
	};

	const handleDragEnd = async (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		setIsDragging(false);
		const finalDragY = Math.max(0, info.offset.y);
		if (finalDragY > 8) {
			const newTheme = theme === "dark" ? "light" : "dark";
			await animatedThemeChange(newTheme);
		}
		setTimeout(() => {
			setDragY(0);
		}, 100);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	if (!isLoaded) {
		return null; // Prevent flash of incorrect theme state
	}

	return (
		<div
			className={`flex min-h-full w-full flex-col items-center justify-start pt-2 text-gray-900 transition-all duration-500 dark:text-white [@media(min-width:1024px)]:pt-8 [@media(min-width:480px)]:pt-4 [@media(min-width:768px)]:pt-6 ${className}`}>
			{/* Fixed navbar container with highest z-index */}
			<div className="relative z-[9999] w-full max-w-4xl">
				<motion.div
					ref={navBarRef}
					initial={{ width: "95%" }}
					animate={{ width: "95%" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative mx-auto flex h-auto w-[95%] items-center justify-between rounded-2xl border border-gray-200 bg-white/80 px-3 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-neutral-950 [@media(min-width:768px)]:px-6">
					{logoSrc && (
						<div className="flex-shrink-0">
							<Link href={"/"}>
								<Image
									src={logoSrc}
									alt={logoAlt || "Logo"}
									width={28}
									height={28}
									className="cursor-pointer transition-transform duration-200 hover:scale-110"
								/>
							</Link>
						</div>
					)}

					{/* Updated Desktop Navigation with Active States */}
					<nav className="hidden items-center space-x-4 [@media(min-width:640px)]:flex [@media(min-width:768px)]:space-x-6">
						{navItems.map((item, index) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={index}
									href={item.href}
									className={`group relative text-sm font-medium transition-colors duration-200 [@media(min-width:768px)]:text-base ${
										isActive
											? "text-blue-600 dark:text-blue-400"
											: "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
									}`}>
									{item.label}
									<span
										className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${"w-0 group-hover:w-full"}`}></span>
								</Link>
							);
						})}
					</nav>

					<div className="flex items-center space-x-2">
						<button
							onClick={toggleMobileMenu}
							className="flex items-center justify-center rounded-lg bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-slate-600 [@media(min-width:640px)]:hidden">
							<motion.svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
								transition={{ duration: 0.2 }}>
								{mobileMenuOpen ? (
									<MdClose size={24} />
								) : (
									<IoReorderThreeOutline size={24} />
								)}
							</motion.svg>
						</button>
					</div>

					{/* Enhanced Chain Toggle with Animation Support */}
					<div className="group absolute top-full right-3 z-10 mt-2 flex flex-col items-center">
						<motion.div
							className="relative w-1 rounded-full bg-gradient-to-b from-gray-400 to-gray-600 shadow-sm dark:from-gray-500 dark:to-gray-300"
							animate={{
								height: chainLength + dragY,
								scaleY: 1,
							}}
							transition={{
								duration: isDragging ? 0.05 : 0.6,
								ease: isDragging ? "linear" : "easeOut",
								type: isDragging ? "tween" : "spring",
								stiffness: isDragging ? undefined : 200,
								damping: isDragging ? undefined : 20,
							}}
							style={{
								height: `${chainLength + dragY}px`,
								transformOrigin: "top center",
							}}>
							{dragY > 4 && (
								<div className="absolute inset-0 flex flex-col justify-evenly">
									{Array.from({
										length: Math.floor(
											(chainLength + dragY) / 8,
										),
									}).map((_, i) => (
										<div
											key={i}
											className="h-0.5 w-full rounded-full bg-gray-500 opacity-40 dark:bg-gray-400"
										/>
									))}
								</div>
							)}
						</motion.div>
						<motion.div
							ref={chainToggleRef}
							drag="y"
							dragConstraints={{ top: 0, bottom: 12 }}
							dragElastic={0}
							onDragStart={handleDragStart}
							onDragEnd={handleDragEnd}
							onDrag={(
								event: MouseEvent | TouchEvent | PointerEvent,
								info: PanInfo,
							) => {
								const newDragY = Math.max(0, info.offset.y);
								setDragY(newDragY);
								if (newDragY > 4) {
									const position =
										calculateGlowPosition(newDragY);
									setGlowPosition(position);
								}
							}}
							whileHover={{ scale: 1.05 }}
							whileDrag={{
								scale: 1.12,
								boxShadow: `0 ${6 + dragY * 0.3}px ${14 + dragY * 0.3}px rgba(0,0,0,0.3)`,
							}}
							className="relative h-6 w-6 cursor-grab overflow-hidden rounded-full border-2 border-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg transition-shadow duration-200 active:cursor-grabbing dark:border-yellow-400 dark:from-yellow-300 dark:to-yellow-500"
							animate={{
								rotateZ: chainPulled ? 180 : 0,
							}}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
							style={{ position: "relative", top: -20, y: 0 }}>
							<div className="h-full w-full rounded-full bg-gradient-to-br from-yellow-300 to-transparent opacity-60"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="flex flex-col space-y-0.5">
									<TbMoonFilled />
								</div>
							</div>
							{isDarkMode && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="absolute inset-0 flex items-center justify-center rounded-full bg-yellow-500/90 backdrop-blur-sm dark:bg-yellow-400/90">
									<TbSunFilled color="black" />
								</motion.div>
							)}
							{!isDragging && !chainPulled && (
								<motion.div
									className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 transform rounded-full bg-white/80 px-2 py-1 text-xs whitespace-nowrap text-gray-500 dark:bg-slate-800/80 dark:text-gray-400"
									initial={{ opacity: 0, y: -5 }}
									animate={{
										opacity: [0, 1, 1, 0],
										y: [0, -2, -2, 0],
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										repeatDelay: 2,
										ease: "easeInOut",
									}}>
									Pull to toggle theme!
								</motion.div>
							)}
							{isDragging && dragY > 4 && (
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{
										opacity: dragY > 8 ? 1 : 0.7,
										scale: dragY > 8 ? 1.1 : 1,
									}}
									className={`pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 transform rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white transition-all duration-200 ${
										glowPosition === "above"
											? "bg-purple-600"
											: "bg-amber-600"
									}`}>
									{dragY > 8
										? `🌟 Release for ${glowPosition === "above" ? "Dark" : "Light"} Mode!`
										: `Pull ${Math.round(8 - dragY)}px more`}
								</motion.div>
							)}
							{!isDragging && dragY > 0 && (
								<motion.div
									className="absolute inset-0 rounded-full bg-yellow-300 opacity-30"
									initial={{ scale: 1.2, opacity: 0.5 }}
									animate={{ scale: 1, opacity: 0 }}
									transition={{
										duration: 0.3,
										ease: "easeOut",
									}}
								/>
							)}
						</motion.div>
					</div>

					{/* Updated Mobile Menu with Fixed Z-Index - now positioned relative to the fixed navbar container */}
					<AnimatePresence>
						{mobileMenuOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className="absolute top-full right-0 left-0 z-[9999] mt-2 rounded-xl border border-gray-200 bg-white shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-neutral-950 [@media(min-width:640px)]:hidden"
								style={{
									// Ensure it's truly above everything
									position: "absolute",
									zIndex: 9999,
								}}>
								<nav className="flex flex-col py-2">
									{navItems.map((item, index) => {
										const isActive = pathname === item.href;
										return (
											<Link
												key={index}
												href={item.href}
												onClick={() =>
													setMobileMenuOpen(false)
												}
												className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
													isActive
														? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
														: "text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-slate-700 dark:hover:text-white"
												}`}>
												{item.label}
											</Link>
										);
									})}
								</nav>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>

			{isDarkMode && (
				<motion.div
					initial={{ width: 0, opacity: 0 }}
					animate={{
						width: showGlow ? "80%" : 0,
						opacity: showGlow ? 1 : 0,
					}}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative -z-10 mt-6 h-0.5 max-w-3xl bg-gradient-to-r from-transparent via-red-400 to-transparent">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: showGlow ? 1 : 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="pointer-events-none absolute top-full left-1/2 h-20 w-full -translate-x-1/2 transform"
					/>
				</motion.div>
			)}
			{title && (
				<motion.h1
					ref={titleRef}
					className="mt-6 max-w-4xl bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text px-4 text-center text-xl font-bold text-transparent dark:from-white dark:via-gray-200 dark:to-white [@media(min-width:1024px)]:text-5xl [@media(min-width:1280px)]:text-6xl [@media(min-width:480px)]:mt-8 [@media(min-width:480px)]:text-2xl [@media(min-width:640px)]:text-3xl [@media(min-width:768px)]:text-4xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}>
					{title}
				</motion.h1>
			)}
			{!isDarkMode && (
				<motion.div
					initial={{ width: 0, opacity: 0 }}
					animate={{
						width: !showGlow ? "80%" : 0,
						opacity: !showGlow ? 1 : 0,
					}}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative mt-6 h-0.5 max-w-3xl bg-gradient-to-r from-transparent via-red-400 to-transparent">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: !showGlow ? 1 : 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="pointer-events-none absolute top-full left-1/2 h-20 w-full -translate-x-1/2 transform"
					/>
				</motion.div>
			)}
			{description && (
				<motion.p
					className="mt-4 max-w-xs px-4 text-center text-xs leading-relaxed text-gray-600 dark:text-gray-300 [@media(min-width:480px)]:mt-6 [@media(min-width:480px)]:max-w-md [@media(min-width:480px)]:text-sm [@media(min-width:640px)]:text-base [@media(min-width:768px)]:max-w-2xl [@media(min-width:768px)]:text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}>
					{description}
				</motion.p>
			)}
			{children && (
				<motion.div
					className="mt-6 flex w-full justify-center [@media(min-width:480px)]:mt-8"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}>
					{children}
				</motion.div>
			)}
		</div>
	);
}
