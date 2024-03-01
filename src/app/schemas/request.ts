import { RequestAuthSchema } from "@/app/schemas/request.authetication";
import { RequestBodySchema } from "@/app/schemas/request.body";
import { RequestHeaderSchema } from "@/app/schemas/request.headers";
import { RequestQueryParameterSchema } from "@/app/schemas/request.query";
import { z } from "zod";

export const RequestSchema = <B extends z.ZodTypeAny, A extends z.ZodTypeAny>(
    authContent: A,
    bodyContent: B
): z.ZodObject<any> =>
    z.object({
        baseUrl: z.string(),
        method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]),
        queryParams: z.array(RequestQueryParameterSchema).optional(),
        body: RequestBodySchema<B>(bodyContent).optional(),
        authentication: RequestAuthSchema<A>(authContent).optional(),
        headers: z.array(RequestHeaderSchema).optional(),
    });
