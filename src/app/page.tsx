import HomeAboutMeSection from "@/components/Home/HomeAboutMeSection";
import HomeHero from "@/components/Home/HomeHero";
import HomeWhatIHaveBuildSection from "@/components/Home/HomeWhatIHaveBuildSection";

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
