import { ReactNode } from "react";
import { IoChevronBack } from "react-icons/io5";
import { MdAdd, MdEdit, MdWorkspaces } from "react-icons/md";
import { Link } from "react-router-dom";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const Header = (): ReactNode => (
    <div className="w-full h-max border-solid border-b-[1px] border-gray-40 py-[10px] px-[10px] flex flex-col gap-2">
        <Link to="/" className="flex items-center gap-2 text-gray-10 hover:text-white">
            <IoChevronBack size={14} />
            <span className="font-bold text-sm">Spaces-API</span>
        </Link>
        <div className="flex flex-col gap-[10px] pl-[5px] border-t border-gray-40 pt-[10px]">
            <span className="font-medium text-sm text-gray-10 flex items-center gap-[6px]">
                <MdWorkspaces />
                Environment
            </span>
            <div className="flex items-center justify-between gap-[10px]">
                <Select defaultValue="dev">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="dev">Development</SelectItem>
                        <SelectItem value="prod">Production</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex gap-[10px]">
                    <button className="w-[25px] h-[25px] rounded-md bg-neon-pink text-white flex items-center justify-center pb-[2px] hover:bg-neon-pink/80">
                        <MdEdit size={12} />
                    </button>
                    <button className="w-[25px] h-[25px] rounded-md bg-neon-pink text-white flex items-center justify-center pb-[2px] hover:bg-neon-pink/80">
                        <MdAdd size={12} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export { Header };
