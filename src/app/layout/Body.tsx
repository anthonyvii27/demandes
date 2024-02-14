import { PropsWithChildren, ReactNode } from "react";

const Body = ({ children }: PropsWithChildren): ReactNode => (
    <main className="w-full grow bg-gray-60">{children}</main>
);

export { Body };
