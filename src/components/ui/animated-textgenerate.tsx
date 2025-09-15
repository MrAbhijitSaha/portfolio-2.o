"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AnimatedTextGenerateProps {
	text: string;
	className?: string;
	textClassName?: string;
	blurEffect?: boolean;
	speed?: number;
	highlightWords?: string[];
	highlightClassName?: string;
	linkWords?: string[];
	linkHrefs?: string[];
	linkClassNames?: string[];
}

export const AnimatedTextGenerate = ({
	text,
	className,
	textClassName,
	blurEffect = true,
	speed = 0.5,
	highlightWords = [],
	highlightClassName,
	linkWords = [],
	linkHrefs = [],
	linkClassNames = [],
}: AnimatedTextGenerateProps) => {
	const [visibleCount, setVisibleCount] = useState(0);

	// Create tokens that preserve multi-word highlights
	const createTokens = () => {
		// const processedText = text;
		const tokens: Array<{
			text: string;
			isHighlight: boolean;
			isLink: boolean;
			linkIndex: number;
			originalIndex: number;
		}> = [];

		// Sort highlight words by length (longest first) to avoid partial matches
		const sortedHighlights = [...highlightWords].sort(
			(a, b) => b.length - a.length,
		);

		// Track highlighted ranges to avoid overlapping
		const highlightedRanges: Array<{ start: number; end: number }> = [];

		// Find and mark highlight phrases
		sortedHighlights.forEach((highlight) => {
			const regex = new RegExp(
				`\\b${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
				"gi",
			);
			let match;

			while ((match = regex.exec(text)) !== null) {
				const start = match.index;
				const end = start + match[0].length;

				// Check if this range overlaps with existing highlights
				const overlaps = highlightedRanges.some(
					(range) =>
						(start >= range.start && start < range.end) ||
						(end > range.start && end <= range.end) ||
						(start <= range.start && end >= range.end),
				);

				if (!overlaps) {
					highlightedRanges.push({ start, end });
				}
			}
		});

		// Sort ranges by start position
		highlightedRanges.sort((a, b) => a.start - b.start);

		// Split text into tokens based on highlighted ranges
		let lastIndex = 0;
		let tokenIndex = 0;

		highlightedRanges.forEach((range) => {
			// Add text before highlight
			if (lastIndex < range.start) {
				const beforeText = text.slice(lastIndex, range.start);
				beforeText.split(" ").forEach((word) => {
					if (word.trim()) {
						tokens.push({
							text: word,
							isHighlight: false,
							isLink: false,
							linkIndex: -1,
							originalIndex: tokenIndex++,
						});
					}
				});
			}

			// Add highlighted text
			const highlightText = text.slice(range.start, range.end);
			tokens.push({
				text: highlightText,
				isHighlight: true,
				isLink: false,
				linkIndex: -1,
				originalIndex: tokenIndex++,
			});

			lastIndex = range.end;
		});

		// Add remaining text
		if (lastIndex < text.length) {
			const remainingText = text.slice(lastIndex);
			remainingText.split(" ").forEach((word) => {
				if (word.trim()) {
					tokens.push({
						text: word,
						isHighlight: false,
						isLink: false,
						linkIndex: -1,
						originalIndex: tokenIndex++,
					});
				}
			});
		}

		// Check for link words
		tokens.forEach((token) => {
			if (!token.isHighlight) {
				const linkIndex = linkWords.findIndex((lw) =>
					token.text.toLowerCase().includes(lw.toLowerCase()),
				);
				if (linkIndex !== -1) {
					token.isLink = true;
					token.linkIndex = linkIndex;
				}
			}
		});

		// console.log("Generated tokens:", tokens);
		return tokens;
	};

	const tokens = createTokens();

	useEffect(() => {
		setVisibleCount(0);
		const intervalId = setInterval(
			() => {
				setVisibleCount((prev) => {
					if (prev >= tokens.length) {
						clearInterval(intervalId);
						return prev;
					}
					return prev + 1;
				});
			},
			Math.max(speed * 200, 100),
		);
		return () => clearInterval(intervalId);
	}, [text, speed, tokens.length]);

	const generateWords = () => {
		// console.log("highlightWords array:", highlightWords);

		return (
			<div className="flex flex-wrap items-center gap-1">
				{tokens.map((token, idx) => {
					const isVisible = idx < visibleCount;
					const remaining = tokens.length - visibleCount;
					let capsuleCount = 4;
					if (remaining <= 2) capsuleCount = remaining;
					else if (remaining <= 4)
						capsuleCount = Math.min(3, remaining);
					else if (visibleCount === 0) capsuleCount = 2;
					else if (visibleCount < 3) capsuleCount = 3;

					const isUpcoming =
						idx >= visibleCount &&
						idx < visibleCount + capsuleCount;

					if (isVisible) {
						const wordElement = (
							<motion.span
								key={`${token.text}-${idx}`}
								initial={{
									opacity: 0,
									filter: blurEffect ? "blur(10px)" : "none",
								}}
								animate={{
									opacity: 1,
									filter: blurEffect ? "blur(0px)" : "none",
								}}
								transition={{
									duration: speed * 0.3,
									ease: "easeOut",
								}}
								className={cn(
									"text-black dark:text-white",
									token.isHighlight && highlightClassName,
								)}>
								{token.text}
							</motion.span>
						);

						if (token.isLink && linkHrefs[token.linkIndex]) {
							return (
								<Link
									target="_blank"
									href={linkHrefs[token.linkIndex]}
									key={`link-${idx}`}
									className={cn(
										linkClassNames[token.linkIndex],
									)}>
									{wordElement}
								</Link>
							);
						}
						return wordElement;
					}

					if (isUpcoming) {
						return (
							<motion.div
								key={`placeholder-${idx}`}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 0.4, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.2 }}
								className="rounded-full bg-black dark:bg-gray-600"
								style={{
									width: `${Math.max(token.text.length * 0.7, 2.5)}em`,
									height: "0.9em",
									display: "inline-block",
								}}
							/>
						);
					}

					return null;
				})}
			</div>
		);
	};

	return (
		<div className={cn("", className)}>
			<div className="mt-4">
				<div
					className={cn(
						"text-2xl leading-snug tracking-wide text-black dark:text-white",
						textClassName,
					)}>
					{generateWords()}
				</div>
			</div>
		</div>
	);
};
