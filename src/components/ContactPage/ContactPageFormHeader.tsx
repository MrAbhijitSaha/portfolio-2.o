import { AnimatedShinyText } from "../ui/animated-shiny-text";

const ContactPageFormHeader = () => {
	return (
		<section className="mx-auto max-w-4xl px-6 py-12">
			<div className="space-y-6 text-center">
				<div className="text-3xl font-bold">{"Let's Connect"}</div>
				<AnimatedShinyText
					className=""
					shimmerWidth={500}>
					{`I'm open to freelance, full-time roles, or just chatting
					about cool tech. Drop a message!`}
				</AnimatedShinyText>
			</div>
		</section>
	);
};

export default ContactPageFormHeader;
