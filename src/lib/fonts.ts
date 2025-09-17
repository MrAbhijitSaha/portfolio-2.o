import {
	Bodoni_Moda,
	Dosis,
	Michroma,
	Roboto,
	Roboto_Slab,
	Source_Serif_4,
	Zeyada,
} from "next/font/google";

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

export const roboto = Roboto({
	subsets: ["latin"],
	style: "normal",
	display: "swap",
	variable: "--font-roboto",
});

export const sourceserif = Source_Serif_4({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sourceserif",
});

export const robotoslab = Roboto_Slab({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-robotoslab",
});

export const bodonimoda = Bodoni_Moda({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bodonimoda",
});

export const zeyada = Zeyada({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-zeyada",
});
