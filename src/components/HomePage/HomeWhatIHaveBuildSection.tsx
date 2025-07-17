import Link from "next/link";
import ProjectsCard from "../CustomeComponents/HomePageProjectsCard";

const HomeWhatIHaveBuildSection = () => {
	return (
		<section className="space-y-3 py-5">
			<div className="pb-2.5 text-xl md:text-2xl">
				Things I’ve Built 💪🏽
			</div>

			<ProjectsCard />
			<Link
				href={"/projects"}
				className="text-blue-700">
				Explore More What I’ve Created ✌🏽
			</Link>
		</section>
	);
};

export default HomeWhatIHaveBuildSection;
