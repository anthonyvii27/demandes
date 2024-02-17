import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { BearerToken } from "@/app/workspace/_components/Request/Auth/BearerToken";
import { TypeSelector } from "@/app/workspace/_components/Request/Auth/TypeSelector";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement } from "react";

export type FieldSchema = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
};

const Auth = (): ReactElement => (
    <Section>
        <div className="w-full flex justify-between">
            <SectionTitle>AUTHENTICATION</SectionTitle>
            <TypeSelector />
        </div>

        {/* <BasicAuth enabled username="" password="" /> */}
        <BearerToken enabled token="" prefix="" />
    </Section>
);

export { Auth };
