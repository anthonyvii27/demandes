import { HTTP_METHODS } from "@/app/constants";
import { createContext, ReactNode, useState } from "react";

type RequestProviderType = {
    request: RequestSchema;
    handleBaseURL: (baseUrl: string) => void;
    handleHTTPMethod: (method: HTTP_METHODS) => void;
    AddQueryParameter: (queryParam: QueryParameter) => void;
    UpdateQueryParameter: (id: string, queryParam: QueryParameter) => void;
    RemoveQueryParameter: (id: string) => void;
    RemoveAllQueryParameters: () => void;
    HandleAuthentication: (auth: any) => void;
    AddHeader: (header: Header) => void;
    UpdateHeader: (id: string, header: Header) => void;
    RemoveHeader: (id: string) => void;
    RemoveAllHeaders: () => void;
};

export const RequestContext = createContext<RequestProviderType | null>(null);

const RequestProvider = ({ children }: { children: ReactNode }): ReactNode => {
    const [request, setRequest] = useState<RequestSchema>({
        baseUrl: "",
        method: HTTP_METHODS.GET,
        queryParams: [],
        body: null,
        authentication: null,
        headers: [],
    });

    const handleBaseURL = (baseUrl: string): void =>
        setRequest((prevState: RequestSchema) => ({ ...prevState, baseUrl }));

    const handleHTTPMethod = (method: HTTP_METHODS): void =>
        setRequest((prevState: RequestSchema) => ({ ...prevState, method }));

    const AddQueryParameter = (queryParam: QueryParameter): void => {
        setRequest((prevState: RequestSchema) => ({
            ...prevState,
            queryParams: [...prevState.queryParams, queryParam],
        }));
    };

    const UpdateQueryParameter = (id: string, queryParam: QueryParameter): void => {
        setRequest((prevState: RequestSchema) => ({
            ...prevState,
            queryParams: prevState.queryParams.map((param: QueryParameter) =>
                param.id === id ? queryParam : param
            ),
        }));
    };

    const RemoveQueryParameter = (id: string): void => {
        setRequest((prevState: RequestSchema) => ({
            ...prevState,
            queryParams: prevState.queryParams.filter((param: QueryParameter) => param.id !== id),
        }));
    };

    const RemoveAllQueryParameters = (): void => {
        setRequest((prevState: RequestSchema) => ({ ...prevState, queryParams: [] }));
    };

    const HandleAuthentication = (auth: any): void => {
        setRequest((prevState: RequestSchema) => ({
            ...prevState,
            authentication: auth,
        }));
    };

    const AddHeader = (header: Header): void => {
        setRequest((prevState: RequestSchema) => ({
            ...prevState,
            headers: [...prevState.headers, header],
        }));
    };

    const UpdateHeader = (id: string, header: Header): void => {
        setRequest((prevState: RequestSchema) => ({
            ...prevState,
            headers: prevState.headers.map((h: Header) => (h.id === id ? header : h)),
        }));
    };

    const RemoveHeader = (id: string): void => {
        setRequest((prevState: RequestSchema) => ({
            ...prevState,
            headers: prevState.headers.filter((h: Header) => h.id !== id),
        }));
    };

    const RemoveAllHeaders = (): void => {
        setRequest((prevState: RequestSchema) => ({ ...prevState, headers: [] }));
    };

    return (
        <RequestContext.Provider
            value={{
                request,
                handleBaseURL,
                handleHTTPMethod,
                AddQueryParameter,
                UpdateQueryParameter,
                RemoveQueryParameter,
                RemoveAllQueryParameters,
                HandleAuthentication,
                AddHeader,
                UpdateHeader,
                RemoveHeader,
                RemoveAllHeaders,
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};

export { RequestProvider };
