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
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const ContactForm = () => {
	const contactForm = useForm<ContactSchemaType>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
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
					"Unable to send message. Try later or email me directly.",
				);
			}
		} catch (error) {
			console.error("Submit failed:", error);
			showErrorToast();
		}
	}

	return (
		<section>
			<Form {...contactForm}>
				<form onSubmit={contactForm.handleSubmit(handleSubmit)}>
					{/* name */}
					<FormField
						control={contactForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter Your Name</FormLabel>
								<FormControl>
									<Input {...field} />
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
								<FormLabel>Enter Your Email</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">
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
		</section>
	);
};

export default ContactForm;
