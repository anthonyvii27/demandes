import { ProjectList } from "@/app/projects/_components/ProjectList";
import { Toolbar } from "@/app/projects/_components/Toolbar";
import { ReactNode } from "react";

const Projects = (): ReactNode => (
    <div className="w-full h-full flex flex-col items-center">
        <div className="w-[1200px] h-full border-l-[1px] border-l-gray-40 border-r-[1px] border-r-gray-40">
            <Toolbar />
            <ProjectList />
        </div>
    </div>
);

export { Projects };
