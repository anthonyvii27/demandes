import { Toolbar } from "@/app/projects/_components/Toolbar";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Projects = (): ReactNode => (
    <div className="w-full h-full flex flex-col items-center">
        <div className="w-[1200px] h-full border-l-[1px] border-l-gray-40 border-r-[1px] border-r-gray-40">
            <Toolbar />
            <Link to="/workspace">Click me</Link>
        </div>
    </div>
);

export { Projects };
