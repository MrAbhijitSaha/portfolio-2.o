import { ComponentType } from "react";

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

export type MySkillesStackSkillsCapsuleDataType = {
	id: string;
	name: string;
	logo: ComponentType;
	link: string;
};

export type MySkillesStackSkillsCapsulePropsType = {
	title: string;
	skills: MySkillesStackSkillsCapsuleDataType[];
};
