import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/Table";
import { ReactElement } from "react";

const Cookies = (): ReactElement => (
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
                    <TableCell className="font-semibold">--</TableCell>
                    <TableCell className="text-lighter-gray">--</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export { Cookies };
