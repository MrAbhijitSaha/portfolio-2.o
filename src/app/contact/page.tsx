import ContactForm from "@/components/ContactPage/ContactForm";
import ContactPageFormHeader from "@/components/ContactPage/ContactPageFormHeader";
import ContactPageDirectContactLinks from "@/components/ContactPage/ContactPageDirectContactLinks";
import { ToastContainer } from "react-toastify";

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
