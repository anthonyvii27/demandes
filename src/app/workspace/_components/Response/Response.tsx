import { Status } from "@/app/workspace/_components/Response/Status";
import { ReactNode } from "react";

const Response = (): ReactNode => (
    <section className="min-w-[400px] max-w-[450px]">
        <Status />
    </section>
);

export { Response };
