export type ProjectCardDataType = {
	id: string;
	image: string;
	alt: string;
	name: string;
	gitlink: string;
	hostlink: string;
	skills: [{ id: string; skill: string }];
	description: string;
};
