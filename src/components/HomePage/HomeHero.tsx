import Link from "next/link";
import { FaFile } from "react-icons/fa";
import { TypewriterEffect } from "../ui/aceternityui/typewriter-effect";
import { AnimatedShinyText } from "../ui/magicui/animated-shiny-text";
import { InteractiveHoverButton } from "../ui/magicui/interactive-hover-button";

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
		<section className="space-y-2 py-20 md:space-y-4 md:py-40">
			<div className="text-blue-700 md:text-xl">{"Hey there!, I'm"}</div>
			<TypewriterEffect
				words={typeWritterEffectWords}
				className="font-bodonimoda text-start !text-3xl md:!text-7xl lg:!text-9xl"
			/>

			<div className="text-foreground/40">
				<AnimatedShinyText
					shimmerWidth={500}
					className="inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 md:text-xl hover:dark:text-neutral-400">
					A Full Stack Developer
				</AnimatedShinyText>
			</div>
			<Link
				href={
					"https://drive.google.com/file/d/1ZSd3RVf1GgB9TsaTpHg8bjSNlXZoewN7/view?usp=sharing"
				}
				target="_blank">
				<InteractiveHoverButton
					icon={<FaFile />}
					className="border-red-500 py-4">
					Resume
				</InteractiveHoverButton>
			</Link>
		</section>
	);
};

export default HomeHero;
