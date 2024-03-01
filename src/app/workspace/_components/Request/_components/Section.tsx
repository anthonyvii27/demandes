import { PropsWithChildren, ReactNode } from "react";

const Section = ({ children }: PropsWithChildren): ReactNode => (
    <section className="w-full h-max border-solid border-b-[1px] border-gray-40 p-3 flex flex-col gap-[10px]">
        {children}
    </section>
);

export { Section };
