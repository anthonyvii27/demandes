import { ReactNode } from "react";

import { Auth } from "./Auth";
import { Body } from "./Body";
import { Headers } from "./Headers";
import { HTTP } from "./HTTP";
import { Params } from "./Params";

const Request = (): ReactNode => (
    <section className="w-full border-solid border-l-[1px] border-r-[1px] border-gray-40 overflow-hidden">
        <HTTP />
        <Params />
        <Body />
        <Auth />
        <Headers />
    </section>
);

export { Request };
