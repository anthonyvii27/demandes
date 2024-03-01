import { z } from "zod";

export const RequestHeaderSchema = z.object({
    header: z.string(),
    value: z.string(),
});

export type HeaderSchema = z.infer<typeof RequestHeaderSchema>;
