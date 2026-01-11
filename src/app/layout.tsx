import Footer from "@/components/Footer/Footer";
import MainNavBar from "@/components/NavBar/MainNavBar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
	children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
	return (
		<html
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

					<Separator orientation="vertical" />

					<main className="font-robotoslab container mx-auto px-8 md:px-32">
						{children}
					</main>

					<Separator />

					<footer className="container mx-auto px-6">
						<Footer />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
