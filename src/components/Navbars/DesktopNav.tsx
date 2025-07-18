"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLogoAndThemeBtnContainer from "./NavLogoAndThemeBtnContainer";
import { navLinks } from "@/lib/navLinkOptions";

const DesktopNav = () => {
	const pathname = usePathname();

	return (
		<section className="flex items-center justify-between">
			<NavLogoAndThemeBtnContainer />

			<div className="space-x-6 text-sm font-medium">
				{navLinks.map((link) => {
					const isActive = pathname === link.href;
					return (
						<Link
							key={link.href}
							href={link.href}
							className={`transition-colors ${
								isActive
									? "text-blue-700 underline underline-offset-8"
									: "hover:text-blue-700"
							}`}>
							{link.label}
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default DesktopNav;
