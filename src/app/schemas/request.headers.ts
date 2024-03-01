import { z } from "zod";

export const RequestHeaderSchema = z.object({
    header: z.string(),
    value: z.string(),
});
