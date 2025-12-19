import {
	FrameworksAndLibraries,
	Languages,
	Styling,
	ToolsAndPlatforms,
} from "@/lib/aboutpageskillsdata";
import MySkillesStackSkillsMap from "./CardMap/MySkillesStackSkillsMap";

const MySkillesStackSkillsCapsule = () => {
	return (
		<>
			<MySkillesStackSkillsMap
				skills={Languages}
				title="Languages"
			/>
			<MySkillesStackSkillsMap
				skills={FrameworksAndLibraries}
				title="Frameworks & Libraries"
			/>
			<MySkillesStackSkillsMap
				skills={Styling}
				title="Styling"
			/>
			<MySkillesStackSkillsMap
				skills={ToolsAndPlatforms}
				title="Tools & Platforms"
			/>
		</>
	);
};

export default MySkillesStackSkillsCapsule;
