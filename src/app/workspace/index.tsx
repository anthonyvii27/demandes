import { ReactNode } from "react";

import { Request } from "./_components/Request";
import { Response } from "./_components/Response";
import { Sidebar } from "./_components/Sidebar";

const Workspace = (): ReactNode => (
    <div className="w-full h-full flex flex-grow">
        <Sidebar />
        <Request />
        <Response />
    </div>
);

export { Workspace };
