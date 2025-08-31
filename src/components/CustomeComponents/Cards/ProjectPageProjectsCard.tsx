import { ProjectCardDataType } from "@/lib/alltypes";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const ProjectPageProjectsCard = (item:ProjectCardDataType) => {
	return (
		<div className="border-border rounded-lg border transition-all
			hover:shadow-md">
		
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
						<FiExternalLink />
					</Link>
					<Link href={item.hostlink}>
						<FiExternalLink />
					</Link>
				</div>
				<div className="pt-3 text-lg font-semibold">{item.name}</div>

				<div className="flex flex-wrap gap-2">
					{item.skills.map((i) => (
						<span
							className="text-primary rounded-full bg-blue-700/20 px-3 py-1 text-sm uppercase"
							key={i.id}>
							{i.skill}
						</span>
					))}
				</div>

				<div className="text-muted-foreground text-sm">
					{item.description}
				</div>
			</div>
		</div>
	);
};
export default ProjectPageProjectsCard;
