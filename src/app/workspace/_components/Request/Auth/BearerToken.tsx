import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { ReactNode } from "react";

type Props = {
    enabled: true;
    token: string;
    prefix: string;
};

const BearerToken = ({ enabled, token, prefix }: Props): ReactNode => (
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-[10px]">
            <span className="font-medium text-xs text-gray-10">ENABLED</span>
            <Checkbox defaultChecked={enabled} />
        </div>
        <div className="flex gap-[10px] items-center">
            <Input type="text" placeholder="Prefix" defaultValue={token} />
            <Input type="text" placeholder="Token" defaultValue={prefix} />
        </div>
    </div>
);

export { BearerToken };
