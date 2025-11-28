import { ProjectCardPropsType } from "@/lib/alltypes";
import Image from "next/image";

const HomePageProjectsCard = ({ data }: ProjectCardPropsType) => {
	return (
		<>
		
			<div
				className="border-border rounded-lg border transition-all hover:shadow-md relative"
				key={data.id}>
				<div className="relative aspect-video w-full overflow-hidden">
					<Image
						src={`/projects/${data.image}.png`}
						alt={data.alt}
						fill
						className="rounded-t-lg border-b object-cover"
					/>
				</div>
				<div className="space-y-3 p-4">
					<div className="text-lg font-semibold">{data.name}</div>

					<div className="flex flex-wrap gap-2">
						{data.skills.map((i) => (
							<span
								className="text-primary rounded-full bg-blue-700/20 px-3 py-1 text-sm uppercase"
								key={i.id}>
								{i.skill}
							</span>
						))}
					</div>

					<div className="text-muted-foreground text-sm absolute bottom-0">
						{data.description}
					</div>
				</div>
			</div>
			
		
		</>
	);
};
export default HomePageProjectsCard;
