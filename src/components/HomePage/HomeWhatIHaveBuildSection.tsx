import Link from "next/link";
import HomePageProjectsCard from "../CustomeComponents/Cards/HomePageProjectsCard";
import { CursorHighlight } from "../ui/scrollxui/cursor-highlight";

const HomeWhatIHaveBuildSection = () => {
	return (
		<section className="space-y-3 py-5">
			<div className="pb-2.5 text-xl md:text-2xl">
				Things I’ve Built 💪🏽
			</div>

			<HomePageProjectsCard />

			<Link href={"/projects"}>
				<CursorHighlight gradient="from-red-500  to-red-500">
					Explore More What I’ve Created
				</CursorHighlight>
				✌🏽
			</Link>
		</section>
	);
};

export default HomeWhatIHaveBuildSection;
