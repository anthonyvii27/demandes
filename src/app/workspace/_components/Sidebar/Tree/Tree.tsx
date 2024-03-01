import { Select } from "@/app/layout/Header/Select";
import { Input } from "@/components/ui/Input";
import { ReactElement, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { MdSettings } from "react-icons/md";

const Tree = (): ReactElement => {
    const filterInputRef = useRef<HTMLInputElement | null>(null);
    useHotkeys("mod+p", () => filterInputRef.current?.focus());

    return (
        <section className="w-full h-full flex flex-col gap-2 p-2">
            <div className="w-full flex items-center gap-2">
                <Input placeholder="Filter [⌘+P]" ref={filterInputRef} />
                <Select defaultValue="ascending">
                    <Select.Trigger asChild>
                        <button className="w-[30px] h-[30px] rounded-md bg-transparent text-gray-10 flex items-center justify-center pb-[2px] hover:text-white">
                            <MdSettings size={18} />
                        </button>
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Item value="ascending">Name Ascending (A-Z)</Select.Item>
                        <Select.Item value="descending">Name Descending (A-Z)</Select.Item>
                        <Select.Item value="newest">Newest First</Select.Item>
                        <Select.Item value="oldest">Oldest First</Select.Item>
                    </Select.Content>
                </Select>
            </div>

            <p>Tree</p>
        </section>
    );
};

export { Tree };
