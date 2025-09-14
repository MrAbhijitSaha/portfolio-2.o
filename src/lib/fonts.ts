import { Bodoni_Moda, Dosis, Michroma, Roboto_Slab, Source_Serif_4 } from "next/font/google";

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

export const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sourceserif",
});

export const RobotoSlab = Roboto_Slab({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-robotoslab",
});

export const BodoniModa = Bodoni_Moda({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bodonimoda",
});
