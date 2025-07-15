import { Michroma, Dosis } from "next/font/google";

export const michroma = Michroma({
	subsets: ["latin"],
	style: "normal",
	display: "swap",
	weight: ["400"],
	variable: "--font-michroma",
});

export const dosis = Dosis({
	subsets: ["latin"],
	style: "normal",
	display: "swap",
	variable: "--font-dosis",
});
