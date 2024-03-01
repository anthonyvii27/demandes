import { z } from "zod";

export const RequestBodyJSONSchema = z.object({ content: z.string() });

export const RequestBodyXMLSchema = z.object({ content: z.string() });

export const RequestBodyYAMLSchema = z.object({ content: z.string() });

export const RequestBodyOtherSchema = z.object({ content: z.string() });

export const RequestBodySchema = <T extends z.ZodTypeAny>(contentSchema: T): z.ZodObject<any> =>
    z.object({
        type: z.enum(["json", "xml", "yaml", "other", "no-body"]),
        content: contentSchema,
    });
