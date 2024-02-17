import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/Table";
import { ReactNode } from "react";

const Headers = (): ReactNode => (
    <div className="w-full h-[calc(100vh-160px)] overflow-x-hidden overflow-y-scroll">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-30">NAME</TableHead>
                    <TableHead>VALUE</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-semibold">date</TableCell>
                    <TableCell className="text-lighter-gray">
                        Sun, 14 Nov 2021 13:06:52 GMT
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-semibold">content-type</TableCell>
                    <TableCell className="text-lighter-gray">
                        application/json; charset=utf-8
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-semibold">content-length</TableCell>
                    <TableCell className="text-lighter-gray">247</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-semibold">cf-cache-status</TableCell>
                    <TableCell className="text-lighter-gray">DYNAMIC</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export { Headers };
