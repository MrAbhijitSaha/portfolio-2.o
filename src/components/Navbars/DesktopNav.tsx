import Link from "next/link";
import NavLogoAndThemeBtnContainer from "./NavLogoAndThemeBtnContainer";

const DesktopNav = () => {
	return (
		<section className="flex justify-between">
			<NavLogoAndThemeBtnContainer />

			<div className="space-x-5">
				<Link href={"/"}>Home</Link>
				<Link href={"/about"}>About</Link>
				<Link href={"/projects"}>Projects</Link>
				<Link href={"/contact"}>Contacts</Link>
			</div>
		</section>
	);
};

export default DesktopNav;
