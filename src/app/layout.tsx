import Footer from "@/components/Footer";
import Navswitch from "@/components/Navbars/Navswitch";
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
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<header className="sticky top-0 z-30 border-b border-gray-700 backdrop-blur-lg">
						<Navswitch />
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
