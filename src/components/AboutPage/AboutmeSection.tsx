import { BoxReveal } from "../ui/box-reveal";

const AboutmeSection = () => {
	return (
		<section className="space-y-4 py-24">
			<BoxReveal
				boxColor="#F87171"
				duration={1}>
				<div className="relative -z-10 pb-2.5 text-xl md:text-2xl">
					Meet Abhijit,
				</div>
			</BoxReveal>

			<BoxReveal
				boxColor=""
				duration={1}>
				<>
					A passionate{" "}
					<span className="text-blue-700"> Frontend Developer </span>{" "}
					from Kolkata who loves turning ideas into beautiful,
					functional web experiences.
				</>
			</BoxReveal>

			<BoxReveal
				boxColor=""
				duration={1}>
				<>
					<div className="pb-4 text-xl text-blue-700">
						Why I love coding
					</div>
					<div className="">
						I fell in love with{" "}
						<span className="text-blue-700">coding</span> because it
						lets me transform any
						<span className="text-blue-700">design</span> into a
						living, interactive product. For me, it’s not just about
						writing code — it’s about{" "}
						<span className="text-blue-700"> creating</span> new
						things,
						<span className="text-blue-700"> exploring</span>{" "}
						possibilities, and bringing visions to life.
					</div>
				</>
			</BoxReveal>

			<BoxReveal
				boxColor=""
				duration={1}>
				<>
					<div className="pb-4 text-xl text-blue-700">
						My motivation & goals
					</div>
					<div className="">
						My dream is to work at a big company one day, earn{" "}
						<span className="text-blue-700">success</span>
						through <span className="text-blue-700">hard work</span>
						, and create meaningful, impactful products. But beyond
						that, my ultimate{" "}
						<span className="text-blue-700">dream</span> is to
						travel the world, explore new places, and collect
						unforgettable experiences.
					</div>
				</>
			</BoxReveal>

			<BoxReveal
				boxColor=""
				duration={1}>
				<>
					<div className="pb-4 text-xl text-blue-700">
						Outside of work
					</div>
					<div className="">
						When I&#39;m not coding,{" "}
						<span className="text-blue-700">I love</span> traveling,
						exploring new places, collecting books, trying different
						foods, planting, and sitting quietly watching the sky
						with music. These{" "}
						<span className="text-blue-700">hobbies</span> inspire
						me and keep me grounded.
					</div>
				</>
			</BoxReveal>

			<BoxReveal
				boxColor=""
				duration={1}>
				<>
					<div className="pb-4 text-xl text-blue-700">
						My values in work
					</div>
					<div className="">
						User experience is everything.{" "}
						<span className="text-blue-700">I value</span> creating
						smooth, intuitive, and accessible interfaces that people
						truly enjoy using. Performance and design go hand in
						hand with UX — they’re equally important pillars of a
						great product.
					</div>
				</>
			</BoxReveal>

			<BoxReveal
				boxColor=""
				duration={1}>
				<>
					<div className="pb-4 text-xl text-blue-700">
						Closing line
					</div>
					<div className="">
						I&#39;m always eager to{" "}
						<span className="text-blue-700">learn</span>, take on
						new
						<span className="text-blue-700"> challenges</span>, and
						collaborate on meaningful digital experiences.
					</div>
				</>
			</BoxReveal>
		</section>
	);
};

export default AboutmeSection;
