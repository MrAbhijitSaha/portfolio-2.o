import { toast, Slide } from "react-toastify";

export const showSuccessToast = (
	message: string = "Thank you! I’ll get back to you soon.",
) => {
	toast.success(message, {
		position: "bottom-right",
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		theme: "colored",
		transition: Slide,
	});
};

export const showErrorToast = (
	message: string = "Network Error. Try later or email me directly.",
) => {
	toast.error(message, {
		position: "bottom-right",
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		theme: "colored",
		transition: Slide,
	});
};
