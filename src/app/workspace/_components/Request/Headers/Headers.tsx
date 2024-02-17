import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement, useState } from "react";
import shortID from "shortid";

import { InputField } from "./InputField";

export type FieldSchema = {
    id: string;
    header: string;
    value: string;
    checked: boolean;
};

const Headers = (): ReactElement => {
    const [fields, setFields] = useState<FieldSchema[] | []>([
        {
            id: shortID.generate(),
            header: "UserAgent",
            value: "demandes",
            checked: true,
        },
    ]);

    const handleAddField = (): void => {
        setFields(prevState => [
            ...prevState,
            {
                id: shortID.generate(),
                header: "",
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

            {fields?.map((field: FieldSchema) => (
                <InputField {...field} key={field.id} handleDeleteField={handleDeleteField} />
            ))}
        </Section>
    );
};

export { Headers };
