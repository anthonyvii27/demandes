import { RequestContext } from "@/context/request";
import { useToast } from "@/hooks/useToast";
import { ReactNode, useContext } from "react";
import { MdFileCopy } from "react-icons/md";

const UrlPreview = (): ReactNode => {
    const { toast } = useToast();

    const requestCtx = useContext(RequestContext);
    const queryParameters = requestCtx?.request.queryParams
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

    const copyToClipboard = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(
                `${requestCtx?.request.baseUrl}${queryParameters ? `?${queryParameters}` : ""}`
            );

            toast({
                title: "Copied to clipboard!",
                description: "The URL has been copied to your clipboard.",
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="px-2 py-3 w-full h-max bg-gray-60 rounded-md border border-solid border-gray-40 relative">
            <span className="block px-1 py-0.5 bg-gray-60 text-xs text-gray-10 font-medium absolute top-[-8px]">
                URL PREVIEW
            </span>
            <div className="flex justify-between overflow-hidden">
                <div className="flex flex-wrap overflow-hidden">
                    <p className="text-xs text-gray-20 select-none text-wrap break-all">
                        {requestCtx?.request.baseUrl}
                        {queryParameters ? `?${queryParameters}` : ""}
                    </p>
                </div>

                <button
                    className="text-gray-10 hover:text-white h-max pl-2.5 pr-1"
                    onClick={copyToClipboard}
                >
                    <MdFileCopy size={13} />
                </button>
            </div>
        </div>
    );
};

export { UrlPreview };
