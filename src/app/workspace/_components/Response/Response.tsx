import { Cookies } from "@/app/workspace/_components/Response/Cookies";
import { Preview } from "@/app/workspace/_components/Response/Preview";
import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

import { Headers } from "./Headers";
import { Status } from "./Status";
import { Tabs } from "./Tabs";

const VIEWS = {
    preview: <Preview />,
    headers: <Headers />,
    cookies: <Cookies />,
};

const Response = (): ReactNode => {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("responseTab") || "preview";

    return (
        <section className="w-[400px] overflow-hidden">
            <Status />
            <Tabs />
            {VIEWS[tab as keyof typeof VIEWS]}
        </section>
    );
};

export { Response };
