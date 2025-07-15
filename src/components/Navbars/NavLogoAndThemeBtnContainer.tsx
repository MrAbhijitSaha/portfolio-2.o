"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import ThemeChangeBtn from "../ThemeChangeBtn";
import Link from "next/link";
import { useEffect, useState } from "react";
const NavLogoAndThemeBtnContainer = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<search>
			<div className="flex items-center gap-5">
				<Link href={"/"}>
					<Image
						src={theme === "dark" ? "/logowhite.png" : "/logo.png"}
						alt="logo"
						height={100}
						width={100}
						className="h-[24px] w-[24px]"
					/>
				</Link>
				<ThemeChangeBtn />
			</div>
		</search>
	);
};

export default NavLogoAndThemeBtnContainer;
