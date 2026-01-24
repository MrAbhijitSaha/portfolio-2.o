import AboutmeSection from "@/components/AboutPage/AboutmeSection";
import MyDeveloperStackSection from "@/components/AboutPage/MyDeveloperStackSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Abhijit Saha",
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
};

const page = () => {
	return (
		<section className="font-dosis">
			<AboutmeSection />

			<MyDeveloperStackSection />
		</section>
	);
};

export default page;
