import Link from "next/link";
import { FaFile } from "react-icons/fa";
import { TypewriterEffect } from "../ui/aceternityui/typewriter-effect";
import { AnimatedGradientText } from "../ui/magicui/animated-gradient-text";
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
				className="font-bodonimoda text-start text-3xl! md:text-7xl! lg:text-9xl!"
			/>

			<div className="text-foreground/40">
				<AnimatedGradientText className="inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 md:text-xl hover:dark:text-neutral-400">
					A Full Stack Developer
				</AnimatedGradientText>
			</div>
			<Link
				href={
					"https://drive.google.com/file/d/1g8-JnC3-eMQc4dN06q98Px64qfmuNoTq/view?usp=sharing"
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
