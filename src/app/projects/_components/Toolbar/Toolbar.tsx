import { Button } from "@/components/ui/Button";
import { ReactNode, useState } from "react";

import { InputField } from "./InputField";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const Toolbar = (): ReactNode => {
    const [filter, setFilter] = useState("last-modified");

    return (
        <div className="w-full h-[40px] bg-gray-70 flex border-solid border-b-[1px] border-b-gray-40 items-center justify-between pr-[4px]">
            <InputField />

            <div className="flex items-center gap-1">
                <Select value={filter} onValueChange={(value: string) => setFilter(value)}>
                    <SelectTrigger className="w-[155px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="last-modified" className="text-white">
                            Last Modified
                        </SelectItem>
                        <SelectItem value="name-ascending" className="text-white">
                            Name Ascending
                        </SelectItem>
                        <SelectItem value="name-descending" className="text-white">
                            Name Descending
                        </SelectItem>
                        <SelectItem value="oldest-first" className="text-white">
                            Oldest First
                        </SelectItem>
                        <SelectItem value="newest-first" className="text-white">
                            Newest First
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Button>Add New Project</Button>
            </div>
        </div>
    );
};

export { Toolbar };
