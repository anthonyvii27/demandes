import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { CheckedState } from "@radix-ui/react-checkbox";
import { ChangeEvent, ReactNode } from "react";
import { MdDeleteForever } from "react-icons/md";

import type { FieldSchema } from "./Params";

type Props = FieldSchema & {
    handleDeleteField: (id: string) => void;
    handleUpdateField: (id: string, newValue: QueryParameter) => void;
};

const InputField = ({
    id,
    name,
    value,
    checked,
    handleUpdateField,
    handleDeleteField,
}: Props): ReactNode => {
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void =>
        handleUpdateField(id, { id, name: e.target.value, value, checked });

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>): void =>
        handleUpdateField(id, { id, name, value: e.target.value, checked });

    const handleCheckedChange = (state: CheckedState): void =>
        handleUpdateField(id, { id, name, value, checked: Boolean(state) });

    return (
        <div className="flex gap-[10px] items-center" key={id}>
            <Input
                type="text"
                placeholder="Name"
                defaultValue={name}
                spellCheck={false}
                onChange={handleTextChange}
            />
            <Input
                type="text"
                placeholder="Value"
                defaultValue={value}
                spellCheck={false}
                onChange={handleValueChange}
            />
            <Checkbox defaultChecked={checked} onCheckedChange={handleCheckedChange} />
            <button
                className="h-[30px] rounded-md text-gray-10 hover:text-white"
                onClick={() => handleDeleteField(id)}
            >
                <MdDeleteForever size={17} />
            </button>
        </div>
    );
};

export { InputField };
