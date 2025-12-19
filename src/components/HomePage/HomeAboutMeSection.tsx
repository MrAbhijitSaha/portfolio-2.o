import Image from "next/image";
import Link from "next/link";
import { AnimatedTextGenerate } from "../ui/scrollxui/animated-textgenerate";
import { CursorHighlight } from "../ui/scrollxui/cursor-highlight";

const HomeAboutMeSection = () => {
	return (
		<section className="py-5">
			<div className="pb-2.5 text-xl md:text-2xl lg:text-4xl">
				Who I Am
			</div>

			<div className="flex flex-col-reverse items-center justify-center gap-5 lg:flex-row">
				<div className="text-foreground/65 space-y-2">
					<AnimatedTextGenerate
						text="I’m Abhijit Saha, a Kolkata based Frontend Developer driven to build responsive, visually stunning web applications. I specialize in React, Next.js, Tailwind CSS, and ShadCN UI to create seamless user experiences with clean, maintainable code."
						className="my-10 text-center"
						textClassName="text-base text-gray-800 dark:text-white"
						blurEffect={true}
						speed={0.0}
						highlightWords={[
							"Frontend Developer",
							"Tailwind CSS",
							"ShadCN UI",
							"Next.js",
							"React",
							"career",
							"web development",
							"I enjoy",
						]}
						highlightClassName="text-red-500 dark:text-red-400 font-bold"
						linkWords={["Kolkata"]}
						linkHrefs={[
							"https://www.google.com/search?q=kolkata&ie=UTF-8",
						]}
						linkClassNames={[
							"underline decoration-pink-500 dark:decoration-pink-400 hover:decoration-pink-400 dark:hover:decoration-pink-300 transition",
						]}
					/>

					<Link href={"/contact"}>
						<CursorHighlight gradient="from-red-500  to-red-500">
							Let’s build something amazing together!
						</CursorHighlight>
					</Link>
				</div>
				<Image
					src={"/image.jpg"}
					alt="My image"
					width={250}
					height={200}
					className="rounded-xl"
				/>
			</div>
		</section>
	);
};

export default HomeAboutMeSection;
