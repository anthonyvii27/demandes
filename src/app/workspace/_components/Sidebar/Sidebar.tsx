import { ReactNode } from "react";

import { Header } from "./Header";
import { Tree } from "./Tree";

const Sidebar = (): ReactNode => (
    <section className="min-w-[300px] max-w-[350px]">
        <Header />
        <Tree />
    </section>
);

export { Sidebar };
