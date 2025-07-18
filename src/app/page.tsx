import HomeAboutMeSection from "@/components/HomePage/HomeAboutMeSection";
import HomeHero from "@/components/HomePage/HomeHero";
import HomeWhatIHaveBuildSection from "@/components/HomePage/HomeWhatIHaveBuildSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Abhijit Saha",
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
};

const page = () => {
	return (
		<>
			<HomeHero />
			<HomeAboutMeSection />
			<HomeWhatIHaveBuildSection />
		</>
	);
};

export default page;
