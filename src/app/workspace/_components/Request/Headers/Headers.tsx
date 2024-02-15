import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { InputField } from "@/app/workspace/_components/Request/Headers/InputField";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement, useState } from "react";
import shortid from "shortid";

export type FieldSchema = {
    id: string;
    header: string;
    value: string;
    checked: boolean;
};

const Headers = (): ReactElement => {
    const [fields, setFields] = useState<FieldSchema[] | []>([
        {
            id: shortid.generate(),
            header: "UserAgent",
            value: "demandes",
            checked: true,
        },
    ]);

    const handleAddField = (): void => {
        setFields(prevState => [
            ...prevState,
            {
                id: shortid.generate(),
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
