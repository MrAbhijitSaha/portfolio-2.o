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

export type ProjectCardPropsType = {
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

export type FooterSocialLinksDataType = {
	id: string;
	name: string;
	link: string;
};

interface Web3FormsSuccess {
	success: true;
	message: string;
}

interface Web3FormsFailure {
	success: false;
	message: string;
	errors?: {
		[key: string]: string | string[];
	};
}

export type Web3FormsResponse = Web3FormsSuccess | Web3FormsFailure;
