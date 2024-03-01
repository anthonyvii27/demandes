import { ReactNode } from "react";
import { IoChevronBack } from "react-icons/io5";
import { MdWorkspaces } from "react-icons/md";
import { Link } from "react-router-dom";

import { CreateNewEnvironmentModal } from "./CreateNewEnvironmentModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";
import { UpdateEnvironmentModal } from "./UpdateEnvironmentModal";

const Header = (): ReactNode => (
    <div className="w-full h-max border-solid border-b-[1px] border-gray-40 p-3 flex flex-col gap-3">
        <Link to="/" className="flex items-center gap-2 text-gray-10 hover:text-white">
            <IoChevronBack size={14} />
            <span className="font-bold text-sm">Spaces-API</span>
        </Link>
        <div className="flex flex-col gap-3 border-t border-gray-40 pt-3">
            <span className="font-medium text-sm text-gray-10 flex items-center gap-[6px]">
                <MdWorkspaces />
                Environment
            </span>
            <div className="flex items-center justify-between gap-3">
                <Select defaultValue="dev">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="dev">Development</SelectItem>
                        <SelectItem value="prod">Production</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex gap-3">
                    <UpdateEnvironmentModal
                        name="Production"
                        envs={`{\n\t"example": "value",\n\t"example2": "value2"\n}`}
                    />
                    <CreateNewEnvironmentModal />
                </div>
            </div>
        </div>
    </div>
);

export { Header };
