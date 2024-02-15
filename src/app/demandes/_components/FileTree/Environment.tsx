import { ReactNode } from "react";

const Environment = (): ReactNode => (
    <div className="w-full h-max border-solid border-b-[1px] border-gray-40">
        <div className="h-[70px]">
            Current project and <br />
            environment variables
        </div>
    </div>
);

export { Environment };
