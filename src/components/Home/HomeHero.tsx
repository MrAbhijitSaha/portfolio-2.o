import { FaFile } from "react-icons/fa";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";

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
			<Link
				href={
					"https://drive.google.com/file/d/1nsUXJ29tUW33f87OuPeyIBUcBDyVPDYe/view?usp=sharing"
				}
				target="_blank">
				<InteractiveHoverButton icon={<FaFile />}>
					Resume
				</InteractiveHoverButton>
			</Link>
		</section>
	);
};

export default HomeHero;
