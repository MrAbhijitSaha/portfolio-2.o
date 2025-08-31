import Image from "next/image";
import Link from "next/link";
import { AnimatedTextGenerate } from "../ui/animated-textgenerate";

const HomeAboutMeSection = () => {
	return (
		<section className="py-5">
			<div className="pb-2.5 text-xl md:text-2xl">Who I Am 👀</div>
			<div className="flex flex-col-reverse items-center gap-5 lg:flex-row">
				<div className="text-foreground/65 space-y-2">
					<AnimatedTextGenerate
						text="Hi, I’m Abhijit Saha, a passionate Frontend Developer based in Kolkata. I specialize in building modern, responsive, and visually appealing web applications that deliver seamless user experiences.
I love working with  share  Next.js,Tailwind CSS, and ShadCN UI to bring ideas to life with clean code and thoughtful design. Beyond just coding, I enjoy crafting interfaces that are intuitive and engaging, reflecting my eye for detail and dedication to quality.
Always eager to learn and grow, I thrive on solving problems and collaborating with teams to create impactful digital products. When I’m not coding, I’m exploring new design trends or honing my skills through side projects and continuous learning."
						className="my-10 text-center"
						textClassName="text-base text-gray-800 dark:text-white"
						blurEffect={true}
						speed={0.5}
						highlightWords={["Pressure", "focus"]}
						highlightClassName="text-blue-500"
						linkWords={["everything"]}
						linkHrefs={["/about"]}
						linkClassNames={["underline text-red-500"]}
					/>

					{/* <div className="">
						Hi, I’m Abhijit Saha, a passionate Frontend Developer
						based in Kolkata. I specialize in building modern,
						responsive, and visually appealing web applications that
						deliver seamless user experiences.
					</div>
					<div className="">
						I love working with
						<TextHighlighter
							type="zigzag"
							highlightColor="#00ffb7ff">
							&nbsp; share &nbsp;
						</TextHighlighter>
						<span className="text-blue-700">Next.js</span>,
						<span className="text-blue-700">Tailwind CSS</span>, and
						<span className="text-blue-700"> ShadCN UI </span>
						to bring ideas to life with clean code and thoughtful
						design. Beyond just coding, I enjoy crafting interfaces
						that are intuitive and engaging, reflecting my eye for
						detail and dedication to quality.
					</div>
					<div className="">
						Always eager to learn and grow, I thrive on solving
						problems and collaborating with teams to create
						impactful digital products. When I’m not coding, I’m
						exploring new design trends or honing my skills through
						side projects and continuous learning.
					</div> */}
					<Link
						href={"/contact"}
						className="text-blue-700">
						Let’s build something amazing together!🔥
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
