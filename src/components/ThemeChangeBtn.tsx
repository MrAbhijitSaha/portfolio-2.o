"use client";

import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { PiMoonStarsFill } from "react-icons/pi";
import { Button } from "./ui/button";

const ThemeChangeBtn = () => {
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Button
				variant="default"
				className="bg-transparent text-blue-700 hover:bg-transparent"
				size="icon"
				onClick={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}>
				<IoMdSunny className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
				<PiMoonStarsFill className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			</Button>
		</>
	);
};

export default ThemeChangeBtn;
