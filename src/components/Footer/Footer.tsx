import { footerSocialLinksData } from "@/lib/footersociallinksdatas";
import Link from "next/link";
import { Fragment } from "react";

const Footer = () => {
	return (
		<section className="flex flex-col items-center gap-2 py-8 text-center text-sm md:text-base">
			<span>
				Designed & built with ❤️ by &nbsp;
				<span className="font-zeyada">Abhijit Saha.</span>
			</span>
			<div>
				{footerSocialLinksData.map((item, index) => (
					<Fragment key={item.id}>
						<Link
							target="_blank"
							key={item.id}
							href={item.link}
							className="duration-200 hover:text-gray-400">
							{item.name}
						</Link>
						{index !== footerSocialLinksData.length - 1 && (
							<span>&nbsp;|&nbsp;</span>
						)}
					</Fragment>
				))}
			</div>
		</section>
	);
};

export default Footer;
