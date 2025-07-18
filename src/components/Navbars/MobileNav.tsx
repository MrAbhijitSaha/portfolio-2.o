"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NavLogoAndThemeBtnContainer from "./NavLogoAndThemeBtnContainer";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navLinkOptions";

const MobileNav = () => {
	const pathname = usePathname();



	return (
		<section className="flex justify-between">
			<NavLogoAndThemeBtnContainer />
			<Sheet>
				<SheetTrigger className="border-foreground rounded-full border-2 px-4 py-2">
					Menu
				</SheetTrigger>
				<SheetContent
					side="left"
					className="w-full">
					<SheetHeader>
						<SheetTitle>
							<Link href={"/"}>
								<Image
									src={"/logogray.png"}
									alt="logo"
									height={100}
									width={100}
									className="h-[24px] w-[24px]"
								/>
							</Link>
						</SheetTitle>
						<div className="grid place-items-center gap-4 py-10 text-lg font-medium">
							{navLinks.map((link) => {
								const isActive = pathname === link.href;

								return (
									<SheetClose
										asChild
										key={link.href}>
										<Link
											href={link.href}
											className={`transition-colors duration-200 ${
												isActive
													? "text-blue-700 underline underline-offset-8"
													: "text-foreground hover:text-blue-700"
											}`}>
											{link.label}
										</Link>
									</SheetClose>
								);
							})}
						</div>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
