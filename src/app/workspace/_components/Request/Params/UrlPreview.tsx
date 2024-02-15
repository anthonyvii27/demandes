import { PropsWithChildren, ReactNode } from "react";
import { MdFileCopy } from "react-icons/md";

const UrlPreview = ({ children }: PropsWithChildren): ReactNode => (
    <div className="px-2 py-3 w-full h-max bg-gray-60 rounded-md border border-solid border-gray-40 relative">
        <span className="block px-1 py-0.5 bg-gray-60 text-xs text-gray-10 font-medium absolute top-[-8px]">
            URL PREVIEW
        </span>
        <div className="flex justify-between">
            <p className="text-xs text-gray-20 select-none">{children}</p>
            <button className="text-gray-10 hover:text-white h-max pl-2.5 pr-1">
                <MdFileCopy size={13} />
            </button>
        </div>
    </div>
);

export { UrlPreview };
