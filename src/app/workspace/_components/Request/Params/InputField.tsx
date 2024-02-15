import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { ReactNode } from "react";
import { MdDeleteForever } from "react-icons/md";

import type { FieldSchema } from "./Params";

type Props = FieldSchema & {
    handleDeleteField: (id: string) => void;
};

const InputField = ({ id, name, value, checked, handleDeleteField }: Props): ReactNode => (
    <div className="flex gap-[10px] items-center" key={id}>
        <Input type="text" placeholder="Name" defaultValue={name} />
        <Input type="text" placeholder="Value" defaultValue={value} />
        <Checkbox defaultChecked={checked} />
        <button
            className="h-[30px] rounded-md text-gray-10 hover:text-white"
            onClick={() => handleDeleteField(id)}
        >
            <MdDeleteForever size={17} />
        </button>
    </div>
);

export { InputField };
