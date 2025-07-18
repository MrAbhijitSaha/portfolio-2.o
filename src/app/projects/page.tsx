import ProjectPageProjectsCard from "@/components/CustomeComponents/Cards/ProjectPageProjectsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Abhijit Saha",
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
};
const page = () => {
	return (
		<>
			<ProjectPageProjectsCard />
		</>
	);
};

export default page;
