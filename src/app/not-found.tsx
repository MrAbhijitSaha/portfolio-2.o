import NotFoundPageContent from "@/components/ui/not-found";

const NotFound = () => {
	return (
		<div className="relative left-[calc(-50vw+50%)] w-[99vw] overflow-x-hidden">
			<NotFoundPageContent
				particleCount={10000}
				particleSize={4}
				animate={true}
				buttonText="Go Back"
				buttonHref="/"
				className="custom-shadow w-full"
			/>
		</div>
	);
};

export default NotFound;
