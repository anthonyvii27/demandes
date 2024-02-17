import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { ReactNode } from "react";

type Props = {
    enabled: true;
    username: string;
    password: string;
};

const BasicAuth = ({ enabled, username, password }: Props): ReactNode => (
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-[10px]">
            <span className="font-medium text-xs text-gray-10">ENABLED</span>
            <Checkbox defaultChecked={enabled} />
        </div>
        <div className="flex gap-[10px] items-center">
            <Input type="text" placeholder="Username" defaultValue={username} />
            <Input type="text" placeholder="Password" defaultValue={password} />
        </div>
    </div>
);

export { BasicAuth };
