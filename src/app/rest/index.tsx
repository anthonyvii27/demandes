import { FileTree } from "@/app/rest/_components/FileTree";
import { Request } from "@/app/rest/_components/Request";
import { Response } from "@/app/rest/_components/Response";
import { ReactNode } from "react";

const Rest = (): ReactNode => (
    <div className="w-full h-full flex flex-grow">
        <FileTree />
        <Request />
        <Response />
    </div>
);

export { Rest };
