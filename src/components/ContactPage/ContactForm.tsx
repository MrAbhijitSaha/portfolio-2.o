"use client";

import { Web3FormsResponse } from "@/lib/alltypes";
import { triggerConfetti } from "@/lib/confettiAnimationonFormSubmit";
import { contactSchema, ContactSchemaType } from "@/lib/schema";
import { showErrorToast, showSuccessToast } from "@/lib/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";

const ContactForm = () => {
	const {
		handleSubmit,
		reset,
		control,
		formState: { isSubmitting },
	} = useForm<ContactSchemaType>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		mode: "all",
	});

	const handleFormSubmit = async (value: ContactSchemaType) => {
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
				reset();
				showSuccessToast();
				triggerConfetti();
			} else {
				showErrorToast("Oops! Something went wrong. Please try again.");
			}
		} catch (error) {
			console.error("Submit failed:", error);
			showErrorToast();
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(handleFormSubmit)}
				noValidate
				className="font-bodonimoda space-y-8">
				{/* name */}
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								placeholder="Please Enter Your Name"
								autoComplete="off"
								className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 bg-transparent! text-sm! shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg!"
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				/>
				{/* email */}
				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								placeholder="Please Enter Your Email"
								autoComplete="off"
								className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 bg-transparent! text-sm! shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg!"
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				/>
				{/* message */}
				<Controller
					name="message"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								placeholder="Write your message here..."
								autoComplete="off"
								className="focus-visible:border-primary rounded-none border-0 border-b border-b-blue-700 bg-transparent! text-sm! shadow-none focus-visible:border-b-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-lg!"
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				/>
				{/* submit button */}
				<Button
					type="submit"
					className="bg-blue-700 px-12 py-6 text-white hover:bg-blue-900"
					disabled={isSubmitting}>
					{isSubmitting ? (
						<>Sending your message...</>
					) : (
						<>SEND MESSAGE</>
					)}
				</Button>
			</form>
		</>
	);
};

export default ContactForm;
