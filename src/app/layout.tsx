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
			<body className="cursor-custom selection:bg-red-400 selection:text-white">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<header className="md:sticky top-6 z-30 md:border md:border-e-0 md:rounded-full md:ms-12 md:rounded-e-none border-gray-700 backdrop-blur-lg">
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
