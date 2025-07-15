import Link from "next/link";

const HomeAboutMeSection = () => {
	return (
		<section>
			<div className="pb-2.5 text-xl md:text-2xl">Who I Am</div>
			<div className="text-foreground/65 space-y-2">
				<div className="">
					Hi, I’m Abhijit Saha, a passionate Frontend Developer based
					in Kolkata. I specialize in building modern, responsive, and
					visually appealing web applications that deliver seamless
					user experiences.
				</div>
				<div className="">
					I love working with
					<span className="text-blue-700"> React</span>,{" "}
					<span className="text-blue-700">Next.js</span>,{" "}
					<span className="text-blue-700">Tailwind CSS</span>, and{" "}
					<span className="text-blue-700"> ShadCN UI </span>
					to bring ideas to life with clean code and thoughtful
					design. Beyond just coding, I enjoy crafting interfaces that
					are intuitive and engaging, reflecting my eye for detail and
					dedication to quality.
				</div>
				<div className="">
					Always eager to learn and grow, I thrive on solving problems
					and collaborating with teams to create impactful digital
					products. When I’m not coding, I’m exploring new design
					trends or honing my skills through side projects and
					continuous learning.
				</div>
				<Link
					href={"/contact"}
					className="text-blue-700">
					Let’s build something amazing together!
				</Link>
			</div>
		</section>
	);
};

export default HomeAboutMeSection;
