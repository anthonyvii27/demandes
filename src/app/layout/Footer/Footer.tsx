import { ReactNode } from "react";
import { MdInfo } from "react-icons/md";

const Footer = (): ReactNode => (
    <footer className="w-full h-[35px] bg-gray-70 px-3 border-solid border-t-[1px] border-t-gray-40 flex items-center justify-between">
        <a
            href="https://github.com/anthonyvii27/demandes"
            target="_blank"
            className="text-md text-gray-10 text-sm font-medium flex items-center gap-1 hover:text-white "
        >
            <MdInfo />
            Documentation
        </a>
        <span className="text-gray-10 font-medium text-sm">Made by @anthonyvii27</span>
    </footer>
);

export { Footer };
