import { toast, Slide } from "react-toastify";

export const showSuccessToast = (
	message: string = "Thank you! I’ll get back to you soon.",
) => {
	toast.success(message, {
		position: "bottom-right",
		autoClose: 1000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: "colored",
		transition: Slide,
	});
};

export const showErrorToast = (
	message: string = "Oops! Something went wrong. Please try again.",
) => {
	toast.error(message, {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: "colored",
		transition: Slide,
	});
};
