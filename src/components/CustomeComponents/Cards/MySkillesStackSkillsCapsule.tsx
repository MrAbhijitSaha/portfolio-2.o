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
				title="Languages"
			/>
			<MySkillesStackSkillsMap
				skills={Styling}
				title="Languages"
			/>
			<MySkillesStackSkillsMap
				skills={ToolsAndPlatforms}
				title="Languages"
			/>
		</>
	);
};

export default MySkillesStackSkillsCapsule;
