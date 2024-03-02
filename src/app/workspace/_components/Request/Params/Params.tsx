import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { InputField } from "@/app/workspace/_components/Request/Params/InputField";
import { UrlPreview } from "@/app/workspace/_components/Request/Params/UrlPreview";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RequestContext } from "@/context/request";
import { ReactElement, useContext } from "react";
import shortID from "shortid";

export type FieldSchema = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
};

const Params = (): ReactElement => {
    const requestCtx = useContext(RequestContext);

    const handleAddField = (): void => {
        requestCtx?.AddQueryParameter({
            id: shortID.generate(),
            name: "",
            value: "",
            checked: true,
        });
    };

    const handleUpdateField = (id: string, value: QueryParameter): void =>
        requestCtx?.UpdateQueryParameter(id, value);

    const handleDeleteField = (id: string): void => requestCtx?.RemoveQueryParameter(id);

    const handleDeleteAllFields = (): void => requestCtx?.RemoveAllQueryParameters();

    return (
        <Section>
            <UrlPreview />

            <div className="flex justify-between items-center">
                <SectionTitle>QUERY PARAMETERS</SectionTitle>

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

            {requestCtx?.request.queryParams?.map(field => (
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

export { Params };
