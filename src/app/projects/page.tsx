import ProjectPageProjectCardMap from "@/components/CustomeComponents/Cards/CardMap/ProjectPageProjectCardMap";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Abhijit Saha",
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
};
const page = () => {
	return <>
	<ProjectPageProjectCardMap/>
	</>;
};

export default page;
