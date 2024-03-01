import { HTTPMethod, RequestSchemaType } from "@/app/schemas/request";
import { BodySchema } from "@/app/schemas/request.body";
import { HeaderSchema } from "@/app/schemas/request.headers";
import { QueryParameterSchema } from "@/app/schemas/request.query";
import { createContext, ReactNode, useState } from "react";

type RequestProviderType = {
    request: RequestSchemaType;
    handleBaseURL: (baseUrl: string) => void;
    handleHTTPMethod: (method: HTTPMethod) => void;
    handleQueryParameters: (queryParams: QueryParameterSchema[]) => void;
    handleBody: (body: BodySchema) => void;
    // handleAuthentication: any;
    handleHeadersParameters: (headers: HeaderSchema[]) => void;
};

type RequestType = RequestSchemaType;

export const RequestContext = createContext<RequestProviderType | null>(null);

const RequestProvider = ({ children }: { children: ReactNode }): ReactNode => {
    const [request, setRequest] = useState<RequestType>({
        baseUrl: "",
        method: HTTPMethod.GET,
        queryParams: [],
        body: null,
        authentication: null,
        headers: [],
    });

    function handleBaseURL(baseUrl: string) {
        setRequest((prevState: RequestType) => ({ ...prevState, baseUrl }));
    }

    function handleHTTPMethod(method: HTTPMethod): void {
        setRequest(prevState => ({ ...prevState, method }));
    }

    function handleQueryParameters(queryParams: QueryParameterSchema[]): void {
        setRequest(prevState => ({ ...prevState, queryParams }));
    }

    // OK
    function handleBody(body: BodySchema): void {
        setRequest(prevState => ({ ...prevState, body }));
    }

    // function handleAuthentication<A>(authentication: AuthenticationSchema<A>): void {
    //     setRequest((prevState: any) => ({ ...prevState, authentication }));
    // }

    function handleHeadersParameters(headers: HeaderSchema[]): void {
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
                // handleAuthentication,
                handleHeadersParameters,
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};

export { RequestProvider };
