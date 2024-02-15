import { ReactElement } from "react";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./Select";

const TypeSelector = (): ReactElement => (
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
);

export { TypeSelector };
