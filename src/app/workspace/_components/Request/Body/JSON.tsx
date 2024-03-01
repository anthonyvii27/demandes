import { CUSTOM_DRACULA_THEME, JSONEditor } from "@/components/ui/JSONEditor";
import { ReactNode } from "react";

const JSON = (): ReactNode => (
    <div className="w-full h-max rounded-md border border-gray-40 overflow-hidden">
        <JSONEditor options={CUSTOM_DRACULA_THEME} initialValue={"\n\n"} />
    </div>
);

export { JSON };
