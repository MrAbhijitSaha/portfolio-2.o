import Link from "next/link";

const ContactPageDirectContactLinks = () => {
	return (
		<>
			<div className="mt-10 py-8 text-center">
				<p className="text-sm text-gray-400">Or reach me directly</p>
				<Link
					href={"mailto:work.abhijitsaha@gmail.com"}
					className="font-bodonimoda mt-2"
					target="_blank">
					work.abhijitsaha@gmail.com
				</Link>
			</div>
		</>
	);
};

export default ContactPageDirectContactLinks;
