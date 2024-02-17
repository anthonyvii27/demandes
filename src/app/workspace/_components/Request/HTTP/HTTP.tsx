import { Button } from "@/components/ui/Button";
import { ReactNode } from "react";
import { LuSend } from "react-icons/lu";

import { InputField } from "./InputField";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const HTTP = (): ReactNode => (
    <div className="w-full h-[40px] bg-gray-80 flex border-solid border-b-[1px] border-b-gray-40 items-center justify-between pr-[4px]">
        <Select defaultValue="GET">
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="GET" className="text-white">
                    GET
                </SelectItem>
                <SelectItem value="POST" className="text-green-500">
                    POST
                </SelectItem>
                <SelectItem value="PUT" className="text-orange-400">
                    PUT
                </SelectItem>
                <SelectItem value="PATCH" className="text-yellow-300">
                    PATCH
                </SelectItem>
                <SelectItem value="DELETE" className="text-red-500">
                    DELETE
                </SelectItem>
                <SelectItem value="OPTIONS" className="text-cyan-500">
                    OPTIONS
                </SelectItem>
                <SelectItem value="HEAD" className="text-cyan-500">
                    HEAD
                </SelectItem>
            </SelectContent>
        </Select>

        <InputField />

        <Button>
            <LuSend size={13} />
            Send
        </Button>
    </div>
);

export { HTTP };
