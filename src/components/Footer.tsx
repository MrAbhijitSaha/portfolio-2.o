import Link from "next/link";

const Footer = () => {
	return (
		<section className="container mx-auto flex flex-col items-center px-6 py-8">
			Designed & built with ❤️ by Abhijit Saha.
			<div className="">
				<Link href={"https://github.com/abhijit-542"}>GitHub</Link>
				&nbsp;|&nbsp;
				<Link href={"https://www.linkedin.com/in/abhijit542/"}>
					LinkedIn
				</Link>
				&nbsp;|&nbsp;
				<Link
					href={
						"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvMZDBzcZQfZZlCDpxKpGWhpCNvgSjflNcdtbrSXZFCsJZkpWwPMrhRnCDHHnrxczlMXV"
					}>
					Email Me
				</Link>
			</div>
		</section>
	);
};

export default Footer;
