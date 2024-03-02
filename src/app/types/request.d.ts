type QueryParameter = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
};

type Header = {
    id: string;
    header: string;
    value: string;
    checked: boolean;
};

type RequestSchema = {
    baseUrl: string;
    method: string;
    queryParams: QueryParameter[];
    body: any;
    authentication: any;
    headers: Header[];
};
