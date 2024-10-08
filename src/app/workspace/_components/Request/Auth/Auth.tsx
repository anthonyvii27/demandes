import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const Auth = (): ReactElement => (
    <Section>
        <div className="w-full flex justify-between">
            <SectionTitle>AUTHENTICATION</SectionTitle>
            <Select defaultValue="no-authentication">
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="basic-auth" disabled>
                        Basic Auth
                    </SelectItem>
                    <SelectItem value="bearer-token" disabled>
                        Bearer Token
                    </SelectItem>
                    <SelectItem value="no-authentication">No Authentication</SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* <BearerToken enabled token="" prefix="" /> */}
        {/* <BasicAuth enabled username="" password="" /> */}
    </Section>
);

export { Auth };
