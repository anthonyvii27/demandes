import { ReactElement } from "react";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./Select";

const TypeSelector = (): ReactElement => (
    <Select defaultValue="basic-auth">
        <SelectTrigger>
            <SelectValue />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="basic-auth">Basic Auth</SelectItem>
            <SelectItem value="bearer-token">Bearer Token</SelectItem>
            <SelectItem value="no-authentication">No Authentication</SelectItem>
        </SelectContent>
    </Select>
);

export { TypeSelector };
