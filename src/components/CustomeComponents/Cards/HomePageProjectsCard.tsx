import { HomePageProjectsSectionmapData } from "@/lib/homepageprojectsSectionmapData";
import Image from "next/image";

const HomePageProjectsCard = () => {
	return (
		<section className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
			{HomePageProjectsSectionmapData.map((item) => {
				return (
					<div
						className="border-border rounded-lg border transition-all hover:shadow-md"
						key={item.id}>
						<div className="relative aspect-video w-full overflow-hidden">
							<Image
								src={`/${item.image}.png`}
								alt={item.alt}
								fill
								className="rounded-t-lg border-b object-cover"
							/>
						</div>
						<div className="space-y-3 p-4">
							<div className="text-lg font-semibold">
								{item.name}
							</div>

							<div className="flex flex-wrap gap-2">
								{item.skill.map((i) => (
									<span
										className="text-primary rounded-full bg-blue-700/20 px-3 py-1 text-sm uppercase"
										key={i.id}>
										{i.one}
									</span>
								))}
							</div>

							<div className="text-muted-foreground text-sm">
								{item.description}
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};
export default HomePageProjectsCard;
