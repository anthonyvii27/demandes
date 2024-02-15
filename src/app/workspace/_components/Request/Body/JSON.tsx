import { JSONEditor } from "@/components/ui/JSONEditor";
import { tags as t } from "@lezer/highlight";
import { ReactNode } from "react";

const customDraculaTheme = {
    settings: {
        background: "#26292B",
        gutterBackground: "#202425",
        gutterForeground: "#9BA1A6",
        lineHighlight: "rgba(238, 9, 121, 0.3)",
    },
    styles: [
        { tag: t.string, color: "#9BA1A6" },
        { tag: [t.function(t.propertyName), t.propertyName], color: "#FFF" },
        { tag: [t.keyword, t.operator, t.tagName], color: "#EE0979" },
    ],
};

const JSON = (): ReactNode => (
    <div className="w-full h-max rounded-md border border-gray-40 overflow-hidden">
        <JSONEditor options={customDraculaTheme} initialValue={"\n\n"} />
    </div>
);

export { JSON };
