import { ReactElement } from "react";

const Status = (): ReactElement => (
    <div className="w-full h-[40px] bg-gray-80 flex border-solid border-b-[1px] border-b-gray-40 items-center justify-end px-[4px] gap-[4px]">
        <div className="h-[32px] w-max px-2.5 flex items-center justify-center gap-1 bg-green-500 rounded-md">
            <span className="text-white font-bold text-sm">200</span>
            <span className="text-white font-normal text-sm">OK</span>
        </div>
        <div className="h-[32px] w-max px-2.5 flex items-center justify-center gap-1 bg-gray-40 rounded-md">
            <span className="text-white font-normal text-sm">1.61ms</span>
        </div>
    </div>
);

export { Status };
