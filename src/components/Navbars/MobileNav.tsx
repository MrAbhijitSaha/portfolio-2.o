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

const MobileNav = () => {
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
									src={"/logo.png"}
									alt="logo"
									height={100}
									width={100}
									className="h-[24px] w-[24px]"
								/>
							</Link>
						</SheetTitle>
						<div className="grid place-items-center gap-3 py-10">
							<SheetClose asChild>
								<Link href={"/"}>Home</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href={"/about"}>About</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href={"/projects"}>Projects</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href={"/contact"}>Contact</Link>
							</SheetClose>
						</div>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
