import { Environment } from "@/app/demandes/_components/FileTree/Environment";
import { Tree } from "@/app/demandes/_components/FileTree/Tree";
import { ReactNode } from "react";

const FileTree = (): ReactNode => (
    <section className="min-w-[300px] max-w-[350px]">
        <Environment />
        <Tree />
    </section>
);

export { FileTree };
