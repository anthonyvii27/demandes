import { CUSTOM_DRACULA_THEME, JSONEditor } from "@/components/ui/JSONEditor";
import { ReactNode } from "react";

const Preview = (): ReactNode => (
    <div className="w-full h-max overflow-hidden">
        <JSONEditor
            options={CUSTOM_DRACULA_THEME}
            initialValue={`{\n\t"id": "db6c6097-ef5b-4ad2-b2e6-e63b18c81804",\n\t"name": "Example",\n\t"description": "Lorem Ipsum",\n\t"imageURL": null\n}`}
            readonly
            height="calc(100vh - 160px)"
        />
    </div>
);

export { Preview };
