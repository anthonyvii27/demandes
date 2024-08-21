import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/Table";
import { RequestContext } from "@/context/request";
import { ReactNode, useContext } from "react";

const Headers = (): ReactNode => {
    const requestCtx = useContext(RequestContext);
    const headers = requestCtx?.GetResponseHeaders();

    return (
        <div className="w-full h-[calc(100vh-160px)] overflow-x-hidden overflow-y-scroll">
            <Table className="h-[calc(100vh-165px)]">
                <TableHeader>
                    <TableRow>
                        <TableHead className="pr-[100px]">NAME</TableHead>
                        <TableHead>VALUE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {headers?.map(header => (
                        <TableRow>
                            <TableCell className="font-semibold">{header.key}</TableCell>
                            <TableCell className="text-lighter-gray text-wrap">
                                {header.value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export { Headers };
