import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        [
          "peer",
          "group/switch",
          "relative",
          "inline-flex",
          "shrink-0",
          "items-center",
          "rounded-full",
          "border",
          "outline-none",
          "transition-colors",
          "duration-200",
          "ease-[cubic-bezier(0.4,0,0.2,1)]",

          // Default size — Northlight spec
          "data-[size=default]:h-[30px]",
          "data-[size=default]:w-[52px]",

          // Small size
          "data-[size=sm]:h-5",
          "data-[size=sm]:w-9",

          // Unchecked
          "data-unchecked:border-[#E4E8EF]",
          "data-unchecked:bg-[#E4E8EF]",

          // Checked
          "data-checked:border-[#2B59FF]",
          "data-checked:bg-[#2B59FF]",

          // Focus
          "focus-visible:border-[#2B59FF]",
          "focus-visible:ring-2",
          "focus-visible:ring-[#2B59FF]",
          "focus-visible:ring-offset-3",

          // Disabled
          "data-disabled:cursor-not-allowed",
          "data-disabled:opacity-50",

          // Accessibility hit area
          "after:absolute",
          "after:-inset-x-3",
          "after:-inset-y-2",
        ],
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="
          pointer-events-none
          block
          h-[24px]
          w-[24px]
          shrink-0
          translate-x-[2px]
          rounded-full
          bg-white
          shadow-[0_1px_2px_rgba(10,16,36,0.06)]
          transition-transform
          duration-200
          ease-[cubic-bezier(0.4,0,0.2,1)]
          data-checked:translate-x-[24px]
          data-unchecked:translate-x-[2px]
        "
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
