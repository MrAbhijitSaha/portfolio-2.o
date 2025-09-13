import Footer from "@/components/Footer";
import MainNavBar from "@/components/NavBar/MainNavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
	children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutPropsType) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="cursor-custom selection:bg-red-400 selection:text-white">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<header>
						<MainNavBar />
					</header>
					<main className="container mx-auto px-8 md:px-32">
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
