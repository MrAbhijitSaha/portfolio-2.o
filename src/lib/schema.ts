import z from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name must be at least 2 characters long" })
		.max(50, { message: "Name can't be longer than 50 characters" }),
	email: z.string().email({ message: "Please enter a valid email address" }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
