import { LinkPreview } from "@/components/ui/link-preview";
import { MySkillesStackSkillsCapsulePropsType } from "@/lib/alltypes";

const MySkillesStackSkillsMap = ({
	skills,
	title,
}: MySkillesStackSkillsCapsulePropsType) => {
	return (
		<div>
			<div className="space-y-2">
				<div className="text-2xl text-blue-700">{title}</div>
				<div className="flex flex-wrap items-center gap-2 py-2">
					{skills.map((item) => {
						// const [categoryName, skills] = Object.entries(item)[0];

						return (
							<LinkPreview
								key={item.id}
								url={item.link}>
								<div className="text-primary flex items-center gap-2 rounded-full bg-blue-700/20 px-3 py-1">
									<item.logo />
									{item.name}
								</div>
							</LinkPreview>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MySkillesStackSkillsMap;
