import ContactForm from "@/components/ContactPage/ContactForm";
import ContactPageFormHeader from "@/components/ContactPage/ContactPageFormHeader";
import ContactPageDirectContactLinks from "@/components/ContactPage/ContactPageDirectContactLinks";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Abhijit Saha",
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
};

const page = () => {
	return (
		<section className="mx-auto max-w-4xl px-6 py-12">
			<ContactPageFormHeader />
			<ContactForm />
			<ContactPageDirectContactLinks />
			<ToastContainer />
		</section>
	);
};

export default page;
