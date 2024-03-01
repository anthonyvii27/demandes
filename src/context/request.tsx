import {
    AuthenticationBasic,
    AuthenticationBearer,
    AuthenticationSchema,
    BodyJSONSchema,
    BodyOtherSchema,
    BodySchema,
    BodyXMLSchema,
    BodyYAMLSchema,
    HeaderParameter,
    HTTPMethod,
    QueryParameter,
    RequestSchemaType,
} from "@/app/types/request";
import { createContext, ReactNode, useState } from "react";

type RequestProviderType = {
    request: RequestSchemaType<any, any>;
    handleBaseURL: (baseUrl: string) => void;
    handleHTTPMethod: (method: HTTPMethod) => void;
    handleQueryParameters: (queryParams: QueryParameter[]) => void;
    handleBody: <B>(body: BodySchema<B>) => void;
    handleAuthentication: <A>(authentication: AuthenticationSchema<A>) => void;
    handleHeadersParameters: (headers: HeaderParameter[]) => void;
};

export const RequestContext = createContext<RequestProviderType | null>(null);

type RequestType = RequestSchemaType<
    BodyJSONSchema | BodyXMLSchema | BodyYAMLSchema | BodyOtherSchema,
    AuthenticationBasic | AuthenticationBearer
>;

const RequestProvider = ({ children }: { children: ReactNode }): ReactNode => {
    const [request, setRequest] = useState<RequestType>({
        method: "GET",
        baseUrl: "",
        queryParams: [],
    });

    function handleBaseURL(baseUrl: string) {
        setRequest((prevState: RequestType) => ({ ...prevState, baseUrl }));
    }

    function handleHTTPMethod(method: HTTPMethod): void {
        setRequest(prevState => ({ ...prevState, method }));
    }

    function handleQueryParameters(queryParams: QueryParameter[]): void {
        setRequest(prevState => ({ ...prevState, queryParams }));
    }

    function handleBody<B>(body: BodySchema<B>): void {
        setRequest(prevState => ({ ...prevState, body }));
    }

    function handleAuthentication<A>(authentication: AuthenticationSchema<A>): void {
        setRequest(prevState => ({ ...prevState, authentication }));
    }

    function handleHeadersParameters(headers: HeaderParameter[]): void {
        setRequest(prevState => ({ ...prevState, headers }));
    }

    return (
        <RequestContext.Provider
            value={{
                request,
                handleBaseURL,
                handleHTTPMethod,
                handleQueryParameters,
                handleBody,
                handleAuthentication,
                handleHeadersParameters,
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};

export { RequestProvider };
