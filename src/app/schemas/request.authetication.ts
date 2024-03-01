import { z } from "zod";

export const RequestAuthBasic = z.object({
    username: z.string(),
    password: z.string(),
});

export const RequestAuthBearer = z.object({
    prefix: z.string(),
    token: z.string(),
});

export const RequestAuthSchema = <T extends z.ZodTypeAny>(
    authenticationSchema: T
): z.ZodObject<any> =>
    z.object({
        type: z.enum(["basic", "bearer", "no-auth"]),
        content: authenticationSchema,
    });
