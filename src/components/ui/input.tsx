import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        `
          h-[42px]
          w-full
          min-w-0
          rounded-[12px]
          border
          border-[#E4E8EF]
          bg-white
          px-4
          py-0
          font-inter-regular
          text-[14px]
          text-[#0A1024]
          outline-none
          transition-[color,box-shadow,border-color]
          duration-200

          placeholder:text-[#8A91A0]

          focus-visible:border-[#2B59FF]
          focus-visible:ring-1
          focus-visible:ring-[#2B59FF]/20

          disabled:pointer-events-none
          disabled:cursor-not-allowed
          disabled:opacity-50

          aria-invalid:border-[#B93A17]
          aria-invalid:ring-2
          aria-invalid:ring-[#B93A17]/20

          file:inline-flex
          file:h-7
          file:border-0
          file:bg-transparent
          file:text-sm
          file:font-medium
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
