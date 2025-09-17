import Link from "next/link";

const Footer = () => {
	return (
		<section className="flex flex-col items-center gap-2 py-8 text-center text-sm md:text-base">
			<span>
				Designed & built with ❤️ by &nbsp;
				<span className="font-zeyada">Abhijit Saha.</span>
			</span>
			<div>
				<Link
					href={"https://github.com/abhijit-542"}
					className="duration-200 hover:text-gray-400">
					GitHub
				</Link>
				&nbsp;|&nbsp;
				<Link
					href={"https://www.linkedin.com/in/abhijit542/"}
					className="duration-200 hover:text-gray-400">
					LinkedIn
				</Link>
				&nbsp;|&nbsp;
				<Link
					href={
						"https://.google.com/mail/u/0/#inbox?compose=CllgCJNvMZDBzcZQfZZlCDpxKpGWhpCNvgSjflNcdtbrSXZFCsJZkpWwPMrhRnCDHHnrxczlMXV"
					}
					target="_blank"
					className="duration-200 hover:text-gray-400">
					Email Me
				</Link>
			</div>
		</section>
	);
};

export default Footer;
