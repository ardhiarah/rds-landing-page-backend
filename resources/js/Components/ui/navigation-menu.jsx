"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "../../lib/utils";

const NavigationMenu = React.forwardRef(
    ({ className, viewport, ...props }, ref) => (
        <NavigationMenuPrimitive.Root
            ref={ref}
            className={cn("relative z-50 flex w-full items-center", className)}
            {...props}
        >
            <NavigationMenuPrimitive.List
                className={cn(
                    "flex items-center gap-1",
                    viewport ? "data-[state=open]:shadow-lg" : undefined
                )}
            >
                {props.children}
            </NavigationMenuPrimitive.List>
        </NavigationMenuPrimitive.Root>
    )
);
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = ({ className, ...props }) => (
    <NavigationMenuPrimitive.List
        className={cn("flex items-center gap-1", className)}
        {...props}
    />
);

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef(
    ({ className, ...props }, ref) => (
        <NavigationMenuPrimitive.Trigger
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                className
            )}
            {...props}
        />
    )
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef(
    ({ className, ...props }, ref) => (
        <NavigationMenuPrimitive.Content
            ref={ref}
            className={cn(
                "absolute left-0 top-full w-[var(--radix-navigation-menu-viewport-width)] md:w-auto",
                className
            )}
            {...props}
        />
    )
);
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuLink = NavigationMenuPrimitive.Link;

function navigationMenuTriggerStyle() {
    return "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground";
}

export {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
};
