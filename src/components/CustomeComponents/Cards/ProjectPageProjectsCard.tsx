import { ProjectPageProjectsCardPropsType } from "@/lib/alltypes";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const ProjectPageProjectsCard = ({
	data,
}: ProjectPageProjectsCardPropsType) => {
	return (
		<div className="border-border rounded-lg border transition-all hover:shadow-md">
			<div className="relative aspect-video w-full overflow-hidden -z-10">
				<Image
					src={`/projects/${data.image}.png`}
					alt={`Project: ${data.alt}`}
					fill
					className="rounded-t-lg border-b object-cover"
				/>
			</div>
			<div className="relative space-y-3 p-4">
				<div className="absolute end-0 top-0 flex gap-3 px-4 pt-4">
					<Link href={data.gitlink}>
						<SiGithub />
					</Link>

					<Link href={data.hostlink}>
						<FiExternalLink />
					</Link>
				</div>
				<div className="pt-3 text-lg font-semibold">{data.name}</div>

				<div className="flex flex-wrap gap-2">
					{data.skills.map((i) => (
						<span
							className="text-primary rounded-full bg-blue-700/20 px-3 py-1 text-sm uppercase"
							key={i.id}>
							{i.skill}
						</span>
					))}
				</div>

				<div className="text-muted-foreground text-sm">
					{data.description}
				</div>
			</div>
		</div>
	);
};
export default ProjectPageProjectsCard;
