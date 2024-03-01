import { z } from "zod";

export const RequestBodySchema = z.object({
    type: z.enum(["json", "xml", "yaml", "other", "no-body"]),
    content: z.string(),
});

export type BodySchema = z.infer<typeof RequestBodySchema>;
