import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { JSON } from "@/app/workspace/_components/Request/Body/JSON";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const Body = (): ReactElement => (
    <Section>
        <div className="w-full flex justify-between">
            <SectionTitle>BODY</SectionTitle>
            <Select defaultValue="json">
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="multipart-form">Multipart Form</SelectItem>
                    <SelectItem value="xml">XML</SelectItem>
                    <SelectItem value="yaml">YAML</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="no-body">No Body</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <JSON />
    </Section>
);

export { Body };
