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

    function handleBaseURL(baseUrl: string) {
        setRequest((prevState: RequestSchema) => ({ ...prevState, baseUrl }));
    }

    function handleHTTPMethod(method: HTTP_METHODS): void {
        setRequest((prevState: RequestSchema) => ({ ...prevState, method }));
    }

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
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};

export { RequestProvider };
