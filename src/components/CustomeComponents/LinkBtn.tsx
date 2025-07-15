import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type LinkBtnPropsType = {
	href: string;
	icon?: ReactNode;
	children: string;
	className?: string;
};

const LinkBtn = ({ href, icon, children, className }: LinkBtnPropsType) => {
	return (
		<>
			<Link
				href={href}
				className={cn(
					`flex w-fit items-center gap-1.5 rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-600`,
					className,
				)}>
				{icon}
				{children}
			</Link>
		</>
	);
};

export default LinkBtn;
