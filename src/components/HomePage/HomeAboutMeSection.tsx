import Image from "next/image";
import Link from "next/link";
import { AnimatedTextGenerate } from "../ui/animated-textgenerate";
import { CursorHighlight } from "../ui/cursor-highlight";

const HomeAboutMeSection = () => {
	return (
		<section className="py-5">
			<div className="pb-2.5 text-xl md:text-2xl">Who I Am 👀</div>
			<div className="flex flex-col-reverse items-center justify-center gap-5 lg:flex-row">
				<div className="text-foreground/65 space-y-2">
					<AnimatedTextGenerate
						text="Hello,
I'm
Abhijit
Saha,
a
motivated
Frontend Developer
from
Kolkata.
I
am
driven
to
build
fresh and dynamic
web
applications
that
are
responsive,
visually appealing, and
most importantly
provide a seamless
user
experience.
As
a
developer,
I always
enjoyed
working with
tools
such as React
,
Next.js
,
Tailwind CSS
,
and
ShadCN UI
to
bring
ideas to live on the web
because of their
beautiful
flexibility and
potential,
allowing me to create
with clean code and mindful design to make the best use of the technology
I genuinely
enjoy
building and designing
interfaces and more
than simply writing
code, I enjoy building
interfaces that incorporate
cognitive and emotional intent
to create delightful interactions that delve into my identity and
concept of who
I am.
I am constantly striving to learn
new
tools, systems and workflows
and getting the opportunity to work and collaborate with a team
to devise solutions to problems while striving to build impactful
digital
products and to build a career in web development. 
When I am not programming or coding,
I am usually researching design approaches or looking for personal side projects to educate myself and
improve my knowledge to stay current in the space."
						className="my-10 text-center"
						textClassName="text-base text-gray-800 dark:text-white"
						blurEffect={true}
						speed={0.5}
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
					<Link href={"/contact"}>
						<CursorHighlight gradient="from-red-500  to-red-500">
							Let’s build something amazing together!
						</CursorHighlight>
						🔥
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
