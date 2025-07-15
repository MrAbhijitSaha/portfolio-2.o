import HomeAboutMeSection from "@/components/HomePage/HomeAboutMeSection";
import HomeHero from "@/components/HomePage/HomeHero";
import HomeWhatIHaveBuildSection from "@/components/HomePage/HomeWhatIHaveBuildSection";

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
