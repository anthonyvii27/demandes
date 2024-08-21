import { ReactNode } from "react";

import { Request } from "./_components/Request";
import { Response } from "./_components/Response";
import { Sidebar } from "./_components/Sidebar";

const Workspace = (): ReactNode => (
    <div className="w-full h-full grid grid-cols-[300px_auto_400px]">
        <Sidebar />
        <Request />
        <Response />
    </div>
);

export { Workspace };
