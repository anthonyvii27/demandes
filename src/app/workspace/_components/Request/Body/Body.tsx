import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { JSON } from "@/app/workspace/_components/Request/Body/JSON";
import { TypeSelector } from "@/app/workspace/_components/Request/Body/TypeSelector";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement } from "react";

const Body = (): ReactElement => (
    <Section>
        <div className="w-full flex justify-between">
            <SectionTitle>BODY</SectionTitle>
            <TypeSelector />
        </div>
        <JSON />
    </Section>
);

export { Body };
