import { Button } from "@/components/ui/Button";
import { ReactNode } from "react";
import { LuSend } from "react-icons/lu";

import { HttpMethodSelector } from "./HTTPMethodSelector";
import { InputField } from "./InputField";

const HTTP = (): ReactNode => (
    <div className="w-full h-[40px] bg-gray-80 flex border-solid border-b-[1px] border-b-gray-40 items-center justify-between pr-[3px]">
        <HttpMethodSelector />
        <InputField />
        <Button>
            <LuSend size={13} />
            Send
        </Button>
    </div>
);

export { HTTP };
