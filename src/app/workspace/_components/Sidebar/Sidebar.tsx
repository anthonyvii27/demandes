import { ReactNode } from "react";

import { Header } from "./Header";
import { Tree } from "./Tree";

const Sidebar = (): ReactNode => (
    <section className="w-full">
        <Header />
        <Tree />
    </section>
);

export { Sidebar };
