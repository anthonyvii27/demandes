import {
    RequestAuthSchema,
    RequestAuthBasic,
    RequestAuthBearer,
} from "@/app/schemas/request.authetication";
import { RequestBodySchema, BodySchema } from "@/app/schemas/request.body";
import { HeaderSchema, RequestHeaderSchema } from "@/app/schemas/request.headers";
import { QueryParameterSchema, RequestQueryParameterSchema } from "@/app/schemas/request.query";
import { z } from "zod";

export enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    HEAD = "HEAD",
}

export const RequestSchema = <T extends z.ZodTypeAny>(authenticationSchema: T): any =>
    z.object({
        baseUrl: z.string(),
        method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]),
        queryParams: z.array(RequestQueryParameterSchema).optional(),
        body: RequestBodySchema,
        authentication: RequestAuthSchema<T>(authenticationSchema).optional(),
        headers: z.array(RequestHeaderSchema).optional(),
    });

export type RequestSchemaType = {
    baseUrl: string;
    method: string;
    queryParams: QueryParameterSchema[];
    body: BodySchema | null;
    authentication: z.infer<typeof RequestAuthBasic> | z.infer<typeof RequestAuthBearer> | null;
    headers: HeaderSchema[];
};
