import { FaFile, FaGithub } from "react-icons/fa";
import LinkBtn from "../CustomeComponents/LinkBtn";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const HomeHeroAllLinks = () => {
	return (
		<section className="flex flex-wrap gap-5">
			<LinkBtn
				href="/"
				icon={<FaFile />}
				className="">
				Resume
			</LinkBtn>
			{/* <LinkBtn
				href="/"
				icon={<FaGithub />}
				className="bg-foreground/30 text-foreground">
				Github
			</LinkBtn>
			<LinkBtn
				href="/"
				icon={<FaGithub />}
				className="">
				Github
			</LinkBtn>
			<LinkBtn
				href="/"
				icon={<FaGithub />}
				className="">
				Github
			</LinkBtn> */}
		
		</section>
	);
};

export default HomeHeroAllLinks;
