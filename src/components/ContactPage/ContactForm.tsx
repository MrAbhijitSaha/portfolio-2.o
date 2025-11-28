"use client";

import { Web3FormsResponse } from "@/lib/alltypes";
import { triggerConfetti } from "@/lib/confettiAnimationonFormSubmit";
import { contactSchema, ContactSchemaType } from "@/lib/schema";
import { showErrorToast, showSuccessToast } from "@/lib/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { useForm } from "react-hook-form";
import { Button } from "../ui/shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/shadcnui/form";
import { Input } from "../ui/shadcnui/input";

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
			const result = await ky
				.post("https://api.web3forms.com/submit", {
					headers: {
						Accept: "application/json",
					},
					json: {
						access_key: "b333bf5b-8758-4aff-a972-89bc09943e0b",
						name: value.name,
						email: value.email,
						message: value.message,
					},
				})
				.json<Web3FormsResponse>();

			if (result.success) {
				console.log(value);
				contactForm.reset();
				showSuccessToast();
				triggerConfetti();
			} else {
				showErrorToast("Oops! Something went wrong. Please try again.");
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
					className="font-bodonimoda space-y-8">
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
										className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 bg-transparent! text-sm! shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg!"
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
										className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 bg-transparent! text-sm! shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg!"
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
										className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 bg-transparent! text-sm! shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg!"
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
							<>Sending your message...</>
						) : (
							<>SEND MESSAGE</>
						)}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default ContactForm;
