import { Headers } from "@/app/workspace/_components/Response/Headers";
import { Status } from "@/app/workspace/_components/Response/Status";
import { Tabs } from "@/app/workspace/_components/Response/Tabs";
import { ReactNode } from "react";

const Response = (): ReactNode => (
    <section className="min-w-[400px] max-w-[450px]">
        <Status />
        <Tabs />
        {/* <Preview /> */}
        <Headers />
    </section>
);

export { Response };
