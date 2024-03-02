import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RequestContext } from "@/context/request";
import { ReactElement, useContext } from "react";
import shortID from "shortid";

import { InputField } from "./InputField";

export type FieldSchema = {
    id: string;
    header: string;
    value: string;
    checked: boolean;
};

const Headers = (): ReactElement => {
    const requestCtx = useContext(RequestContext);

    const handleAddField = (): void => {
        requestCtx?.AddHeader({
            id: shortID.generate(),
            header: "",
            value: "",
            checked: true,
        });
    };

    const handleUpdateField = (id: string, value: Header): void =>
        requestCtx?.UpdateHeader(id, value);

    const handleDeleteField = (id: string): void => {
        requestCtx?.RemoveHeader(id);
    };

    const handleDeleteAllFields = (): void => {
        requestCtx?.RemoveAllHeaders();
    };

    return (
        <Section>
            <div className="flex justify-between items-center">
                <SectionTitle>HEADERS</SectionTitle>

                <div className="flex items-center gap-[10px]">
                    <button
                        className="bg-none text-sm text-gray-20 font-medium hover:text-gray-10"
                        onClick={handleAddField}
                    >
                        Add
                    </button>
                    <button
                        className="bg-none text-sm text-gray-20 font-medium hover:text-gray-10"
                        onClick={handleDeleteAllFields}
                    >
                        Delete All
                    </button>
                </div>
            </div>

            {requestCtx?.request.headers?.map((field: Header) => (
                <InputField
                    {...field}
                    key={field.id}
                    handleUpdateField={handleUpdateField}
                    handleDeleteField={handleDeleteField}
                />
            ))}
        </Section>
    );
};

export { Headers };
