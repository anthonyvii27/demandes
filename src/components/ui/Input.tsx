import { cn } from "@/lib/utils";
import * as React from "react";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-[30px] w-full rounded-md border border-gray-40 bg-transparent px-3 py-2 text-sm placeholder:text-gray-20 focus:outline-none focus:border-gray-10 text-white disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
