"use client";

import { contactSchema, ContactSchemaType } from "@/lib/schema";
import { showErrorToast, showSuccessToast } from "@/lib/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiLoader } from "react-icons/bi";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const ContactForm = () => {
	const contactForm = useForm<ContactSchemaType>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		mode: "all",
	});

	async function handleSubmit(value: ContactSchemaType) {
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: "b333bf5b-8758-4aff-a972-89bc09943e0b",
					name: value.name,
					email: value.email,
					message: value.message,
				}),
			});

			const result = await response.json();
			if (result.success) {
				console.log(result);
				return new Promise<void>((resolve) => {
					setTimeout(() => {
						resolve();
						console.log(value);
						contactForm.reset();
						showSuccessToast();
					}, 2000);
				});
			} else {
				showErrorToast(
					"Network Error. Try later or email me directly.",
				);
			}
		} catch (error) {
			console.error("Submit failed:", error);
			showErrorToast();
		}
	}

	return (
		<>
			<Form {...contactForm}>
				<form
					onSubmit={contactForm.handleSubmit(handleSubmit)}
					className="space-y-8">
					{/* name */}
					<FormField
						control={contactForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder="Please Enter Your Name"
										autoComplete="off"
										className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 !bg-transparent !text-lg shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* email */}
					<FormField
						control={contactForm.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder="Please Enter Your Email"
										autoComplete="off"
										className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 !bg-transparent !text-lg shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* message */}
					<FormField
						control={contactForm.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder="Write your message here..."
										autoComplete="off"
										className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 !bg-transparent !text-lg shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="bg-blue-700 px-12 py-6 text-white hover:bg-blue-900"
						disabled={contactForm.formState.isSubmitting}>
						{contactForm.formState.isSubmitting ? (
							<>
								<BiLoader className="animate-spin" /> Loging....
							</>
						) : (
							<>SEND</>
						)}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default ContactForm;
