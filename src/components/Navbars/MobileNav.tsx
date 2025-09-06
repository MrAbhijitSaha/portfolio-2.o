import Link from "next/link";
import {
	ToggleVault,
	ToggleVaultClose,
	ToggleVaultContent,
	ToggleVaultTrigger,
} from "../ui/toggle-vault";
import NavLogoAndThemeBtnContainer from "./NavLogoAndThemeBtnContainer";

const MobileNav = () => {
	return (
		<div className="">
			<NavLogoAndThemeBtnContainer />

			<ToggleVault className="h-0 !min-h-0 py-3 !w-2 ">
				<ToggleVaultTrigger className="h-8 w-20 text-sm">
					MENU
				</ToggleVaultTrigger>
				<ToggleVaultClose className="h-8 w-20 text-sm">
					CLOSE
				</ToggleVaultClose>
				<ToggleVaultContent className="flex w-[250px] flex-col gap-4 p-8 text-xl ">
					<Link href={"/"}>HOME</Link>
					<Link href={"/about"}>ABOUT</Link>
					<Link href={"/projects"}>PROJECTS</Link>
					<Link href={"/contact"}>CONTACT</Link>
				</ToggleVaultContent>
			</ToggleVault>
		</div>
	);
};

export default MobileNav;
