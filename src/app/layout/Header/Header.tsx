import { Input } from "@/components/ui/Input";
import { ReactNode, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { MdDeviceHub } from "react-icons/md";

import { SettingsModal } from "./SettingsModal";

const Header = (): ReactNode => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useHotkeys("mod+K", () => inputRef.current?.focus());

    return (
        <header className="w-full h-[45px] bg-gray-70 border-solid border-b-2 border-b-neon-pink flex items-center justify-between px-[15px]">
            <span className="text-md text-white font-semibold flex items-center gap-2">
                <MdDeviceHub />
                Demandes
            </span>
            {/* TODO - Modal of suggestions */}
            <div className="w-[300px]">
                <Input placeholder="Search... [⌘+K]" ref={inputRef} />
            </div>
            <div className="flex items-center justify-end w-[105px]">
                <SettingsModal />
            </div>
        </header>
    );
};

export { Header };
