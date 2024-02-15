import { FileTree } from "@/app/workspace/_components/FileTree";
import { Request } from "@/app/workspace/_components/Request";
import { Response } from "@/app/workspace/_components/Response";
import { ReactNode } from "react";

const Workspace = (): ReactNode => (
    <div className="w-full h-full flex flex-grow">
        <FileTree />
        <Request />
        <Response />
    </div>
);

export { Workspace };
