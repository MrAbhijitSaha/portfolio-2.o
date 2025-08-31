"use client";

import React, {
	useState,
	createContext,
	useContext,
	ReactNode,
	useEffect,
	useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface VaultContextType {
	open: boolean;
	toggleOpen: () => void;
	closeVault: () => void;
}
const VaultContext = createContext<VaultContextType | undefined>(undefined);

export interface ToggleVaultProps {
	children: ReactNode;
	className?: string;
}

export const ToggleVault: React.FC<ToggleVaultProps> = ({
	children,
	className = "",
}) => {
	const [open, setOpen] = useState(false);
	const vaultRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const toggleOpen = () => setOpen((prev) => !prev);
	const closeVault = () => setOpen(false);

	// Close vault when pathname changes (page navigation)
	useEffect(() => {
		closeVault();
	}, [pathname]);

	// Close vault when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				open &&
				vaultRef.current &&
				!vaultRef.current.contains(event.target as Node)
			) {
				closeVault();
			}
		};

		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
			// Also listen for escape key
			const handleEscape = (event: KeyboardEvent) => {
				if (event.key === "Escape") {
					closeVault();
				}
			};
			document.addEventListener("keydown", handleEscape);

			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
				document.removeEventListener("keydown", handleEscape);
			};
		}
	}, [open]);

	return (
		<VaultContext.Provider value={{ open, toggleOpen, closeVault }}>
			<div
				ref={vaultRef}
				className={` h-full min-h-[350px] w-full ${className}`}>
				{children}
			</div>
		</VaultContext.Provider>
	);
};

interface TriggerProps {
	children: ReactNode;
	className?: string;
}
export const ToggleVaultTrigger: React.FC<TriggerProps> = ({
	children,
	className = "",
}) => {
	const context = useContext(VaultContext);
	if (!context)
		throw new Error("ToggleVaultTrigger must be inside ToggleVault");
	const { open, toggleOpen } = context;

	if (open) return null;

	return (
		<motion.div
			onClick={toggleOpen}
			aria-expanded={open}
			className={`absolute top-4 right-4 z-50 flex h-[40px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-white dark:text-black ${className} `}>
			<motion.span
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 10, opacity: 0 }}
				className="font-bold">
				{children}
			</motion.span>
		</motion.div>
	);
};

interface CloseProps {
	children: ReactNode;
	className?: string;
}
export const ToggleVaultClose: React.FC<CloseProps> = ({
	children,
	className = "",
}) => {
	const context = useContext(VaultContext);
	if (!context)
		throw new Error("ToggleVaultClose must be inside ToggleVault");
	const { open, closeVault } = context;
	if (!open) return null;

	return (
		<motion.div
			onClick={closeVault}
			key="close"
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			className={`absolute top-4 right-4 z-50 flex h-[40px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-white font-bold text-black shadow-lg transition-all duration-300 hover:scale-105 dark:bg-black dark:text-white ${className} `}>
			{children}
		</motion.div>
	);
};

interface ContentProps {
	children: ReactNode;
	className?: string;
}
export const ToggleVaultContent: React.FC<ContentProps> = ({
	children,
	className = "",
}) => {
	const context = useContext(VaultContext);
	if (!context)
		throw new Error("ToggleVaultContent must be inside ToggleVault");
	const { open } = context;

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					key="panel"
					initial={{
						scaleX: 0.2,
						scaleY: 0.066,
						top: "1rem",
						right: "1rem",
						opacity: 0,
					}}
					animate={{
						scaleX: 1,
						scaleY: 1,
						top: "0.6rem",
						right: "0.6rem",
						opacity: 1,
						transition: { duration: 0.7, ease: [0.2, 0.9, 0.3, 1] },
					}}
					exit={{
						scaleX: 0.2,
						scaleY: 0.066,
						top: "1rem",
						right: "1rem",
						opacity: 0,
						transition: { duration: 0.6, ease: [0.2, 0.9, 0.3, 1] },
					}}
					className={`absolute z-40 overflow-hidden rounded-2xl bg-black text-white shadow-lg dark:bg-white dark:text-black ${className} `}
					style={{ transformOrigin: "top right" }}
					aria-hidden={!open}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.4 } }}
						exit={{ opacity: 0 }}
						className="font-bricolage flex flex-col gap-3 p-1 font-bold">
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
