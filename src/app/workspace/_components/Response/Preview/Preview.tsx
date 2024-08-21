import { CUSTOM_DRACULA_THEME, JSONEditor } from "@/components/ui/JSONEditor";
import { RequestContext } from "@/context/request";
import { ReactNode, useContext } from "react";

const Preview = (): ReactNode => {
    const requestCtx = useContext(RequestContext);

    return (
        <div className="w-full h-max overflow-hidden">
            <JSONEditor
                options={{
                    ...CUSTOM_DRACULA_THEME,
                    settings: { ...CUSTOM_DRACULA_THEME.settings, lineHighlight: "transparent" },
                }}
                initialValue={JSON.stringify(requestCtx?.response?.data, null, 2) || "{}"}
                readonly
                height="calc(100vh - 160px)"
            />
        </div>
    );
};

export { Preview };
