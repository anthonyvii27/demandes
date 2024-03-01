import { RequestSchema } from "@/app/schemas/request";
import {
    RequestAuthBasic,
    RequestAuthBearer,
    RequestAuthSchema,
} from "@/app/schemas/request.authetication";
import {
    RequestBodyJSONSchema,
    RequestBodyOtherSchema,
    RequestBodySchema,
    RequestBodyXMLSchema,
    RequestBodyYAMLSchema,
} from "@/app/schemas/request.body";
import { RequestHeaderSchema } from "@/app/schemas/request.headers";
import { RequestQueryParameterSchema } from "@/app/schemas/request.query";
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

type QueryParameter = z.infer<typeof RequestQueryParameterSchema>;

type BodySchema<B> = z.infer<typeof RequestBodySchema<B>>;
type BodyJSONSchema = z.infer<typeof RequestBodyJSONSchema>;
type BodyXMLSchema = z.infer<typeof RequestBodyXMLSchema>;
type BodyYAMLSchema = z.infer<typeof RequestBodyYAMLSchema>;
type BodyOtherSchema = z.infer<typeof RequestBodyOtherSchema>;

type AuthenticationSchema<A> = z.infer<typeof RequestAuthSchema<A>>;
type AuthenticationBasic = z.infer<typeof RequestAuthBasic>;
type AuthenticationBearer = z.infer<typeof RequestAuthBearer>;

type HeaderParameter = z.infer<typeof RequestHeaderSchema>;

type RequestSchemaType<B, A> = z.infer<typeof RequestSchema<B, A>>;
