import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button",
    "inline-flex",
    "shrink-0",
    "items-center",
    "justify-center",
    "rounded-[12px]",
    "border",
    "border-transparent",
    "bg-clip-padding",
    "font-inter-regular",
    "text-[15px]",
    "font-medium",
    "whitespace-nowrap",
    "transition-[background-color,border-color,color,transform,box-shadow]",
    "duration-200",
    "ease-[cubic-bezier(0.4,0,0.2,1)]",
    "outline-none",
    "select-none",

    // Accessibility
    "focus-visible:border-[#2B59FF]",
    "focus-visible:ring-2",
    "focus-visible:ring-[#2B59FF]",
    "focus-visible:ring-offset-3",

    // Interaction
    "active:translate-y-px",

    // Disabled
    "disabled:pointer-events-none",
    "disabled:opacity-50",

    // Icons
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[#2B59FF]",
          "text-white",
          "shadow-[0_1px_2px_rgba(10,16,36,0.06)]",

          "hover:bg-[#1E3FCC]",
          "hover:-translate-y-px",
        ],

        secondary: [
          "border-[#E4E8EF]",
          "bg-white",
          "text-[#0A1024]",
          "shadow-[0_1px_2px_rgba(10,16,36,0.06)]",

          "hover:border-[#6A707F]",
          "hover:bg-[#F6F7FB]",
          "hover:-translate-y-px",
          "hover:shadow-[0_2px_6px_rgba(10,16,36,0.08)]",
        ],

        ghost: [
          "bg-transparent",
          "text-[#525F72]",

          "hover:bg-[#F6F7FB]",
          "hover:text-[#0A1024]",
        ],

        destructive: [
          "bg-destructive/10",
          "text-destructive",
          "hover:bg-destructive/20",
        ],

        link: ["text-[#2B59FF]", "underline-offset-4", "hover:underline"],

        // CTA: white button on dark CTA section
        cta: [
          "border-[#E4E8EF]",
          "bg-white",
          "text-[#0A1024]",
          "shadow-[0_1px_2px_rgba(10,16,36,0.08)]",

          "hover:bg-[#F6F7FB]",
          "hover:-translate-y-px",
          "hover:shadow-[0_3px_8px_rgba(0,0,0,0.14)]",
        ],

        // CTA secondary: dark button on dark CTA section
        "cta-secondary": [
          "border-[#525F72]",
          "bg-transparent",
          "text-white",

          "hover:border-[#8A94A8]",
          "hover:bg-white/5",
          "hover:-translate-y-px",
          "hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]",
        ],
      },

      size: {
        default: ["h-[42px]", "gap-2", "px-[18px]"],
        xs: ["h-6", "gap-1", "px-2.5", "text-xs"],
        sm: ["h-8", "gap-1", "px-3"],
        lg: ["h-[46px]", "gap-2", "px-6", "text-[16px]"],
        icon: "size-9",
        "icon-xs": ["size-6", "[&_svg:not([class*='size-'])]:size-3"],
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
