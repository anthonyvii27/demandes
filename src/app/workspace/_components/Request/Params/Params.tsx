import { Section } from "@/app/workspace/_components/Request/_components/Section";
import { InputField } from "@/app/workspace/_components/Request/Params/InputField";
import { UrlPreview } from "@/app/workspace/_components/Request/Params/UrlPreview";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReactElement } from "react";

const Params = (): ReactElement => (
    <Section>
        <UrlPreview>https://api.example.com/v1/api/users/1?name=John&age=30</UrlPreview>
        <div className="flex justify-between items-center">
            <SectionTitle>QUERY PARAMETERS</SectionTitle>

            <div className="flex items-center gap-[10px]">
                <button className="bg-none text-sm text-gray-20 font-medium hover:text-gray-10">
                    Add
                </button>
                <button className="bg-none text-sm text-gray-20 font-medium hover:text-gray-10">
                    Delete All
                </button>
            </div>
        </div>

        <InputField />
        <InputField />
        <InputField />
    </Section>
);

export { Params };
