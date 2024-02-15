import { ReactNode } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const HttpMethodSelector = (): ReactNode => (
    <Select defaultValue="GET">
        <SelectTrigger>
            <SelectValue />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="GET" className="text-white">
                GET
            </SelectItem>
            <SelectItem value="POST" className="text-green-500">
                POST
            </SelectItem>
            <SelectItem value="PUT" className="text-orange-400">
                PUT
            </SelectItem>
            <SelectItem value="PATCH" className="text-yellow-300">
                PATCH
            </SelectItem>
            <SelectItem value="DELETE" className="text-red-500">
                DELETE
            </SelectItem>
            <SelectItem value="OPTIONS" className="text-cyan-500">
                OPTIONS
            </SelectItem>
            <SelectItem value="HEAD" className="text-cyan-500">
                HEAD
            </SelectItem>
        </SelectContent>
    </Select>
);

export { HttpMethodSelector };
