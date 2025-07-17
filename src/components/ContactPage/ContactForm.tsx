"use client";

import { contactSchema, ContactSchemaType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ContactForm = () => {
	async function handleSubmit(value: ContactSchemaType) {
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
		}
	}

	const contactForm = useForm<ContactSchemaType>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
		},
		mode: "all",
	});

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
					<Button type="submit">SEND</Button>
				</form>
			</Form>
		</section>
	);
};

export default ContactForm;
