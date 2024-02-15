import { Auth } from "@/app/demandes/_components/Request/Auth";
import { Body } from "@/app/demandes/_components/Request/Body";
import { Headers } from "@/app/demandes/_components/Request/Headers";
import { Params } from "@/app/demandes/_components/Request/Params";
import { ReactNode } from "react";

import { HTTP } from "./HTTP";

const Request = (): ReactNode => (
    <section className="grow border-solid border-l-[1px] border-r-[1px] border-gray-40">
        <HTTP />
        <Params />
        <Body />
        <Auth />
        <Headers />
    </section>
);

export { Request };
