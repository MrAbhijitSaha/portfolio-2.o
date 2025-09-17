import { BsGit } from "react-icons/bs";
import { IoLogoFigma, IoLogoReact } from "react-icons/io5";
import {
	SiAdobephotoshop,
	SiBootstrap,
	SiCss3,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiNetlify,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "react-icons/si";

const MyDeveloperStackSection = () => {
	return (
		<>
			<div className="pb-2.5 text-xl md:text-2xl">
				My Developer Stack 💻
			</div>

			<div className="space-y-5">
				<div className="space-y-2">
					<div className="text-2xl text-blue-700">Languages 🌐 </div>
					<div className="flex flex-wrap items-center gap-2 py-2">
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiJavascript /> JavaScript
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							{" "}
							<SiTypescript /> TypeScript
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiHtml5 /> HTML
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							{" "}
							<SiCss3 /> CSS
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiPython /> Python
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<div className="text-2xl text-blue-700">
						Frameworks & Libraries 🧩{" "}
					</div>
					<div className="flex flex-wrap items-center gap-2 py-2">
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<IoLogoReact /> React
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiNextdotjs /> Next.js
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiNodedotjs /> Node.js
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiShadcnui /> ShadCN UI
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<div className="text-2xl text-blue-700">Styling 🎨 </div>
					<div className="flex flex-wrap items-center gap-2 py-2">
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiTailwindcss /> Tailwind CSS
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiBootstrap /> Bootstrap
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<div className="text-2xl text-blue-700">
						Tools & Platforms 🛠️{" "}
					</div>
					<div className="flex flex-wrap items-center gap-2 py-2">
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<BsGit />
							Git
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiGithub /> GitHub
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiVercel /> Vercel
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiNetlify /> Netlify
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<IoLogoFigma /> Figma
						</div>
						<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
							<SiAdobephotoshop /> Photoshop
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyDeveloperStackSection;
