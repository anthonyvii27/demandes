import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { ReactNode } from "react";
import { MdDeleteForever } from "react-icons/md";

const InputField = (): ReactNode => (
    <div className="flex gap-[10px] items-center">
        <Input type="text" placeholder="Key" />
        <Input type="text" placeholder="Value" />
        <Checkbox />
        <button className="h-[30px] rounded-md text-gray-10 hover:text-white">
            <MdDeleteForever size={17} />
        </button>
    </div>
);

export { InputField };
