import { HTTP_METHODS } from "@/app/constants";
import axios, { AxiosResponse } from "axios";
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
    HandleRequest: () => Promise<void>;
    GetResponseHeaders: () => { value: string; key: string }[] | null;
    response: (AxiosResponse & { duration: number }) | null;
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

    const [response, setResponse] = useState<(AxiosResponse & { duration: number }) | null>(null);

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

    const HandleRequest = async (): Promise<void> => {
        const startTime = performance.now();
        const queryParameters = request.queryParams
            .map(param => {
                if (param.checked) {
                    if (param.name !== "" && param.value !== "") {
                        return `${param.name}=${param.value}`;
                    }
                }

                return "";
            })
            .filter(Boolean)
            .join("&");

        try {
            const res = await axios.request({
                method: request.method,
                url: `${request.baseUrl}?${queryParameters}`,
            });
            const endTime = performance.now();
            const duration = endTime - startTime;
            setResponse({ ...res, duration });
        } catch (err) {
            const endTime = performance.now();
            const duration = endTime - startTime;
            // @ts-ignore
            setResponse({ ...err.response, duration });
        }
    };

    const GetResponseHeaders = (): { value: string; key: string }[] | null => {
        if (response?.headers) {
            return Object.entries(response?.headers).map(([key, value]) => {
                return { key, value };
            });
        }

        return null;
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
                HandleRequest,
                GetResponseHeaders,
                response,
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};

export { RequestProvider };
