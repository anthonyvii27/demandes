import { FileTree } from "@/app/demandes/_components/FileTree";
import { Request } from "@/app/demandes/_components/Request";
import { Response } from "@/app/demandes/_components/Response";
import { ReactNode } from "react";

const Demandes = (): ReactNode => (
    <div className="w-full h-full flex flex-grow">
        <FileTree />
        <Request />
        <Response />
    </div>
);

export { Demandes };
