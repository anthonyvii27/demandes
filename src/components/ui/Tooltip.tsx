"use client";

import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import { ComponentProps, ReactNode } from "react";

const Tooltip = ({
    children,
    ...props
}: ComponentProps<typeof TooltipPrimitive.Root>): ReactNode => (
    <TooltipPrimitive.Provider>
        <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
);

const TooltipTrigger = TooltipPrimitive.Trigger;
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;
Tooltip.Trigger = TooltipTrigger;

const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
            "z-50 overflow-hidden rounded-md border border-lighter-gray bg-white px-3 py-1.5 text-sm text-gray-70 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
        )}
        {...props}
    />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
Tooltip.Content = TooltipContent;

export { Tooltip };
