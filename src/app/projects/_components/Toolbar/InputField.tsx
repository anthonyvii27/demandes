import { cn } from "@/lib/utils";
import * as React from "react";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputField = React.forwardRef<HTMLInputElement, IInputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                type="text"
                className={cn(
                    "flex h-full w-full bg-gray-70 px-3 py-2 text-sm text-gray-10 placeholder:text-gray-10 focus:outline-none",
                    className
                )}
                placeholder="Filter"
                ref={ref}
                {...props}
            />
        );
    }
);
InputField.displayName = "InputField";

export { InputField };
