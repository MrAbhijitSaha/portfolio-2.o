import z from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.min(2, { error: "Name must be at least 2 characters long" })
		.max(50, { error: "Name can't be longer than 50 characters" }),
	email: z.email({ error: "Please enter a valid email address" }),
	message: z.string().min(1, { error: "Please enter your message" }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
