import { JSON } from "@/app/workspace/_components/Response/JSON";
import { Status } from "@/app/workspace/_components/Response/Status";
import { Tabs } from "@/app/workspace/_components/Response/Tabs";
import { ReactNode } from "react";

const Response = (): ReactNode => (
    <section className="min-w-[400px] max-w-[450px]">
        <Status />
        <Tabs />
        <JSON />
    </section>
);

export { Response };
