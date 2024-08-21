import { RequestContext } from "@/context/request";
import { ReactElement, useContext } from "react";

const Status = (): ReactElement => {
    const requestCtx = useContext(RequestContext);

    const getStatusStyles = () => {
        const statusCode = requestCtx?.response?.status as number;

        const statusMessages = {
            200: { bgColor: "bg-green-500", text: "OK", color: "text-white" },
            201: { bgColor: "bg-green-500", text: "Created", color: "text-white" },
            204: { bgColor: "bg-green-500", text: "No Content", color: "text-white" },
            300: { bgColor: "bg-yellow-500", text: "Multiple Choices", color: "text-black" },
            301: { bgColor: "bg-yellow-500", text: "Moved Permanently", color: "text-black" },
            302: { bgColor: "bg-yellow-500", text: "Found", color: "text-black" },
            400: { bgColor: "bg-red-500", text: "Bad Request", color: "text-white" },
            401: { bgColor: "bg-red-500", text: "Unauthorized", color: "text-white" },
            403: { bgColor: "bg-red-500", text: "Forbidden", color: "text-white" },
            404: { bgColor: "bg-red-500", text: "Not Found", color: "text-white" },
            422: { bgColor: "bg-red-500", text: "Unprocessable Entity", color: "text-white" },
            500: { bgColor: "bg-red-700", text: "Internal Server Error", color: "text-white" },
            502: { bgColor: "bg-red-700", text: "Bad Gateway", color: "text-white" },
            503: { bgColor: "bg-red-700", text: "Service Unavailable", color: "text-white" },
            504: { bgColor: "bg-red-700", text: "Gateway Timeout", color: "text-white" },
        };

        return (
            statusMessages[statusCode as keyof typeof statusMessages] || {
                bgColor: "bg-gray-500",
                text: "Unknown",
                color: "text-white",
            }
        );
    };

    const { bgColor, text, color } = getStatusStyles();

    return (
        <div className="w-full h-[40px] bg-gray-80 flex border-solid border-b-[1px] border-b-gray-40 items-center justify-end px-[4px] gap-[4px]">
            <div
                className={`h-[32px] w-max px-2.5 flex items-center justify-center gap-1 rounded-md ${bgColor}`}
            >
                <span className={`font-bold text-sm ${color}`}>{requestCtx?.response?.status}</span>
                <span className={`font-normal text-sm ${color}`}>{text}</span>
            </div>
            <div className="h-[32px] w-max px-2.5 flex items-center justify-center gap-1 bg-gray-40 rounded-md">
                <span className="text-white font-normal text-sm">
                    {requestCtx?.response?.duration?.toFixed(2)}ms
                </span>
            </div>
        </div>
    );
};

export { Status };
