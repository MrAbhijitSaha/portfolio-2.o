import { projectPageAllProjectData } from "@/lib/projectPageAllProjectData";
import ProjectPageProjectsCard from "../ProjectPageProjectsCard";

const ProjectPageProjectCardMap = () => {
	return (
		<div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-2 lg:py-24 xl:grid-cols-3">
			{projectPageAllProjectData.map((item) => {
				return (
					<ProjectPageProjectsCard
						key={item.id}
						data={item}
					/>
				);
			})}
		</div>
	);
};

export default ProjectPageProjectCardMap;
