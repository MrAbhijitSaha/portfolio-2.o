import Footer from "@/components/Footer/Footer";
import MainNavBar from "@/components/NavBar/MainNavBar";
import { ThemeProvider } from "@/components/ui/shadcnui/ThemeProvider";
import { allFontVariables } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
	children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutPropsType) {
	return (
		<html
			className={allFontVariables}
			lang="en"
			suppressHydrationWarning>
			<body className="cursor-custom selection:bg-red-400 selection:text-white">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					<header>
						<MainNavBar />
					</header>
					<main className="font-robotoslab container mx-auto px-8 md:px-32">
						{children}
					</main>
					<footer className="container mx-auto px-6">
						<Footer />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
