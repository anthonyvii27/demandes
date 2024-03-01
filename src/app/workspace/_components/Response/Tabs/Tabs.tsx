import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

const classNameBase =
    "w-max h-full px-3 text-sm text-gray-10 font-medium hover:text-white hover:bg-gray-60";
const Tabs = (): ReactNode => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tab = searchParams.get("responseTab") || "preview";

    const handleTabClick = (responseTab: string) => {
        setSearchParams({ responseTab });
    };

    return (
        <div className="w-full h-[40px] bg-gray-70 flex border-solid border-b-[1px] border-b-gray-40 items-center gap-[4px]">
            <button
                className={cn(
                    classNameBase,
                    tab === "preview" ? "bg-gray-80 text-white" : "bg-transparent"
                )}
                onClick={() => handleTabClick("preview")}
            >
                Preview
            </button>
            <button
                className={cn(
                    classNameBase,
                    tab === "headers" ? "bg-gray-80 text-white" : "bg-transparent"
                )}
                onClick={() => handleTabClick("headers")}
            >
                Headers
            </button>
            <button
                className={cn(
                    classNameBase,
                    tab === "cookies" ? "bg-gray-80 text-white" : "bg-transparent"
                )}
                onClick={() => handleTabClick("cookies")}
            >
                Cookies
            </button>
            <button
                className={cn(
                    classNameBase,
                    tab === "logs" ? "bg-gray-80 text-white" : "bg-transparent"
                )}
                onClick={() => handleTabClick("logs")}
            >
                Logs
            </button>
        </div>
    );
};

export { Tabs };
