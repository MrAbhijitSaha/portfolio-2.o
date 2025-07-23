import { projectPageAllProjectData } from "@/lib/projectPageAllProjectData";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const ProjectPageProjectsCard = () => {
	return (
		<section className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-2 lg:py-24 xl:grid-cols-3">
			{projectPageAllProjectData.map((item) => {
				return (
					<div
						className="border-border rounded-lg border transition-all hover:shadow-md"
						key={item.id}>
						<div className="relative aspect-video w-full overflow-hidden">
							<Image
								src={`/${item.image}.png`}
								alt={`Project: ${item.alt}`}
								fill
								className="rounded-t-lg border-b object-cover"
							/>
						</div>
						<div className="relative space-y-3 p-4">
							<div className="absolute end-0 top-0 flex gap-2 px-4 pt-2">
								{/* <Link href={item.gitlink}>
									<SiGithub />
								</Link> */}
								<Link href={item.hostlink}>
									<FiExternalLink />{" "}
								</Link>
							</div>
							<div className="pt-3 text-lg font-semibold">
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
export default ProjectPageProjectsCard;
