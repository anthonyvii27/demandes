import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { CheckedState } from "@radix-ui/react-checkbox";
import { ChangeEvent, ReactNode } from "react";
import { MdDeleteForever } from "react-icons/md";

import { FieldSchema } from "./Headers";

type Props = FieldSchema & {
    handleDeleteField: (id: string) => void;
    handleUpdateField: (id: string, newValue: Header) => void;
};

const InputField = ({
    id,
    header,
    value,
    checked,
    handleDeleteField,
    handleUpdateField,
}: Props): ReactNode => {
    const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>): void =>
        handleUpdateField(id, { id, header: e.target.value, value, checked });

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>): void =>
        handleUpdateField(id, { id, header, value: e.target.value, checked });

    const handleCheckedChange = (state: CheckedState): void =>
        handleUpdateField(id, { id, header, value, checked: Boolean(state) });

    return (
        <div className="flex gap-[10px] items-center" key={id}>
            <Input
                type="text"
                placeholder="Header"
                defaultValue={header}
                onChange={handleHeaderChange}
            />
            <Input
                type="text"
                placeholder="Value"
                defaultValue={value}
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
