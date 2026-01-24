"use client";

import { useTheme } from "next-themes";
import LamphomeAndAnimatedThemeTogglerMerged from "../CustomeComponents/LamphomeAndAnimatedThemeTogglerMerged";

const MainNavBar = () => {
	const { theme } = useTheme();

	return (
		<LamphomeAndAnimatedThemeTogglerMerged
			logoSrc={
				theme === "dark" ? "/logo/logowhite.png" : "/logo/logo.png"
			}
			logoAlt="My Logo"
			navItems={[
				{ href: "/", label: "Home" },
				{ href: "/about", label: "About" },
				{ href: "/projects", label: "Projects" },
				{ href: "/contact", label: "Contact" },
			]}
			className="font-ubuntu"
		/>
	);
};

export default MainNavBar;
