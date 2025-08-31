type SkillType = {
	id: string;
	skill: string;
};

export type ProjectCardDataType = {
	id: string;
	image: string;
	alt: string;
	name: string;
	gitlink: string;
	hostlink: string;
	skills: SkillType[];
	description: string;
};

export type ProjectPageProjectsCardPropsType = {
	data: ProjectCardDataType;
};
