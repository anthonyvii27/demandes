import { z } from "zod";

export const RequestQueryParameterSchema = z.object({
    name: z.string(),
    value: z.string(),
});
