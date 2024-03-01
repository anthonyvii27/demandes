"use client";

import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { ReactNode } from "react";

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(
    ({ className, ...props }, ref): ReactNode => (
        <SwitchPrimitives.Root
            className={cn(
                "peer inline-flex h-3 w-6 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-pink focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neon-pink data-[state=unchecked]:bg-gray-10",
                className
            )}
            {...props}
            ref={ref}
        >
            <SwitchPrimitives.Thumb
                className={cn(
                    "pointer-events-none block h-2 w-2 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0"
                )}
            />
        </SwitchPrimitives.Root>
    )
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
