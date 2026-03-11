//src\content\config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		modDate: z.coerce.date(),
		draft: z.boolean().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		readingTime: z.string().optional(),
		tags: z.array(z.string()).default(["otros"]),
	}),
});

export const collections = { blog };
