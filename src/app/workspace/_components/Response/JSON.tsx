import { JSONEditor } from "@/components/ui/JSONEditor";
import { tags as t } from "@lezer/highlight";
import { ReactNode } from "react";

const customDraculaTheme = {
    settings: {
        background: "#2B2F31",
        gutterBackground: "#202425",
        gutterForeground: "#9BA1A6",
        lineHighlight: "transparent",
        caret: "#2B2F31",
    },
    styles: [
        { tag: t.string, color: "#9BA1A6" },
        { tag: [t.function(t.propertyName), t.propertyName], color: "#FFF" },
        { tag: [t.keyword, t.operator, t.tagName], color: "#EE0979" },
    ],
};

const JSON = (): ReactNode => (
    <div className="w-full h-max overflow-hidden">
        <JSONEditor
            options={customDraculaTheme}
            initialValue={`{\n\t"id": "db6c6097-ef5b-4ad2-b2e6-e63b18c81804",\n\t"name": "Example",\n\t"description": "Lorem Ipsum",\n\t"imageURL": null\n}`}
            readonly
            height="calc(100vh - 160px)"
        />
    </div>
);

export { JSON };
