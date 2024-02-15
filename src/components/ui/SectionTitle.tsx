import { PropsWithChildren, ReactNode } from "react";

const SectionTitle = ({ children }: PropsWithChildren): ReactNode => (
    <h2 className="font-bold text-xs text-gray-10">{children}</h2>
);

export { SectionTitle };
