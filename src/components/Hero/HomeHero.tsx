import { FaGithub } from "react-icons/fa";
import LinkBtn from "../CustomeComponents/LinkBtn";
import { TypewriterEffect } from "../ui/typewriter-effect";

const HomeHero = () => {
	const typeWritterEffectWords = [
		{
			text: "Abhijit",
		},
		{
			text: "saha",
		},
	];

	return (
		<section className="space-y-2 py-16 md:space-y-2.5 md:py-32">
			<div className="text-blue-700">{"Hey there!, I'm"}</div>
			<TypewriterEffect
				words={typeWritterEffectWords}
				className="text-start !text-3xl md:!text-7xl"
			/>
			<div className="">Frontend Developer.</div>
			<div className="text-foreground/40">
				Fresher passionate about Full Stack Development.
			</div>
			<div className="">
				<LinkBtn
					href="/"
					icon={<FaGithub />}
					className="">
					Github
				</LinkBtn>
			</div>
		</section>
	);
};

export default HomeHero;
