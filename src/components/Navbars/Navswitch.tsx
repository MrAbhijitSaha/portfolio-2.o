import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navswitch = () => {
	return (
		<>
			<header className="container mx-auto px-6 py-3">
				<section className="block md:hidden">
					<MobileNav />
				</section>
				<section className="hidden md:block">
					<DesktopNav />
				</section>
			</header>
		</>
	);
};

export default Navswitch;
