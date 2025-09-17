"use client";

import { useTheme } from "next-themes";
import { Lamphome } from "../ui/scrollxui/lamphome";

const MainNavBar = () => {
	const { theme } = useTheme();

	return (
		<Lamphome
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
			className=""
		/>
	);
};

export default MainNavBar;
