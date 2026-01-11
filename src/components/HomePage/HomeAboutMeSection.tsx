import Image from "next/image";
import Link from "next/link";
import { CursorHighlight } from "../ui/cursor-highlight";

const HomeAboutMeSection = () => {
	return (
		<section className="py-5">
			<div className="pb-2.5 text-xl md:text-2xl lg:text-4xl">
				Who I Am
			</div>

			<div className="flex flex-col-reverse items-center justify-between gap-5 lg:flex-row">
				<div className="text-foreground/65 space-y-2">
					<p>
						I’m Abhijit Saha, a Kolkata based Frontend Developer
						driven to build responsive, visually stunning web
						applications. I specialize in React, Next.js, Tailwind
						CSS, and ShadCN UI to create seamless user experiences
						with clean, maintainable code.
					</p>

					<CursorHighlight gradient="from-red-500  to-red-500">
						<Link href={"/contact"}>
							Let’s build something amazing together!
						</Link>
					</CursorHighlight>
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
