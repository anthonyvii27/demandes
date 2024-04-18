import { ReactNode } from "react";
import { IoMdClock } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectList = (): ReactNode => (
    <div className="w-full p-3 grid grid-cols-5 gap-3">
        <Link to="/workspace" className="w-full h-max">
            <div className="w-full rounded-md p-3 border border-gray-40 flex flex-col gap-2 overflow-hidden hover:bg-gray-50 hover:border hover:border-gray-20">
                <span className="text-lighter-gray text-md font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                    Lorem Ipsum API
                </span>
                <span className="text-gray-20 text-sm font-medium flex items-center gap-1">
                    <IoMdClock size={14} />
                    10 months ago
                </span>
            </div>
        </Link>
    </div>
);

export { ProjectList };
