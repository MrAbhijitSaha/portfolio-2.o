import {
	Bodoni_Moda,
	Dosis,
	Michroma,
	Roboto,
	Roboto_Slab,
	Source_Serif_4,
	Ubuntu,
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
	variable: "--font-source-serif",
});

export const robotoslab = Roboto_Slab({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-slab",
});

export const bodonimoda = Bodoni_Moda({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bodoni-moda",
});

export const zeyada = Zeyada({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-zeyada",
});

export const ubuntu = Ubuntu({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-ubuntu",
	weight: ["300", "400", "500", "700"],
});

export const allFontVariables = [
	michroma.variable,
	dosis.variable,
	roboto.variable,
	sourceserif.variable,
	robotoslab.variable,
	bodonimoda.variable,
	zeyada.variable,
	ubuntu.variable
].join(" ");
