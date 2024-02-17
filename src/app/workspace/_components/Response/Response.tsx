import { ReactNode } from "react";

import { Preview } from "./Preview";
import { Status } from "./Status";
import { Tabs } from "./Tabs";

const Response = (): ReactNode => (
    <section className="min-w-[400px] max-w-[450px]">
        <Status />
        <Tabs />
        <Preview />
        {/* <Headers /> */}
        {/* <Cookies /> */}
    </section>
);

export { Response };
