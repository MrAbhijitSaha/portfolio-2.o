import { HomePageProjectsSectionmapData } from "@/lib/homepageprojectsSectionmapData";
import Link from "next/link";
import HomePageProjectsCard from "../CustomeComponents/Cards/HomePageProjectsCard";
import { CursorHighlight } from "../ui/scrollxui/cursor-highlight";

const HomeWhatIHaveBuildSection = () => {
	return (
		<section className="space-y-3 py-5">
			<div className="pb-2.5 text-xl md:text-2xl lg:text-4xl">
				Things I’ve Built
			</div>
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{HomePageProjectsSectionmapData.map((item) => (
					<HomePageProjectsCard
						key={item.id}
						data={item}
					/>
				))}
			</div>

			<Link href={"/projects"}>
				<CursorHighlight gradient="from-red-500  to-red-500">
					Explore More What I’ve Created
				</CursorHighlight>
			</Link>
		</section>
	);
};

export default HomeWhatIHaveBuildSection;
