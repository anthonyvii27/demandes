import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { InputField } from "@/app/workspace/_components/Request/Params/InputField";
import { UrlPreview } from "@/app/workspace/_components/Request/Params/UrlPreview";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement, useState } from "react";
import shortID from "shortid";

export type FieldSchema = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
};

const Params = (): ReactElement => {
    const [fields, setFields] = useState<FieldSchema[] | []>([]);

    const handleAddField = (): void => {
        setFields(prevState => [
            ...prevState,
            {
                id: shortID.generate(),
                name: "",
                value: "",
                checked: true,
            },
        ]);
    };

    const handleDeleteField = (id: string): void => {
        setFields(prevState => prevState.filter((field: FieldSchema) => field.id !== id));
    };

    const handleDeleteAllFields = (): void => setFields([]);

    return (
        <Section>
            <UrlPreview>https://api.example.com/v1/api/users/1?name=John&age=30</UrlPreview>
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

            {fields?.map((field: FieldSchema) => (
                <InputField {...field} key={field.id} handleDeleteField={handleDeleteField} />
            ))}
        </Section>
    );
};

export { Params };
