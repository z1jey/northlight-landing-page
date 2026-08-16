import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[#E4E8EF] first:border-t", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          // Layout
          "group/accordion-trigger relative flex flex-1",
          "items-center justify-between gap-6",
          "py-6",

          // Typography
          "text-left",
          "font-instrument-semibold",
          "text-[18px]",
          "leading-[1.2]",
          "tracking-[-0.02em]",
          "text-[#0A1024]",

          // Interaction
          "outline-none",
          "transition-colors duration-200",
          "hover:no-underline",

          // Accessibility
          "aria-disabled:pointer-events-none",
          "aria-disabled:opacity-50",

          // Chevron
          "[&>svg]:size-4",
          "[&>svg]:shrink-0",
          "[&>svg]:text-[#6A707F]",
          "[&>svg]:transition-colors",
          "[&>svg]:duration-200",

          // Open state
          "data-[panel-open]:[&>svg]:text-[#2B59FF]",

          className,
        )}
        {...props}
      >
        {children}

        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="
            pointer-events-none
            group-aria-expanded/accordion-trigger:hidden
          "
        />

        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className="
            pointer-events-none
            hidden
            group-aria-expanded/accordion-trigger:inline
          "
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="
        overflow-hidden
        data-open:animate-accordion-down
        data-closed:animate-accordion-up
      "
      {...props}
    >
      <div
        className={cn(
          // Answer spacing
          "pb-6",

          // Answer typography
          "font-inter-regular",
          "text-[16px]",
          "leading-[1.65]",
          "text-[#525F72]",

          // Base UI animation
          "h-(--accordion-panel-height)",
          "data-ending-style:h-0",
          "data-starting-style:h-0",

          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
