import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import northlightMark from "@/assets/logo/northlight-mark.svg";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Header scroll state based on specs
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active navigation section, Updates the active navigation item based on the section
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) =>
      document.querySelector(href),
    ).filter((section): section is Element => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        /*
         * Creates a smaller "active area" around the
         * upper-middle portion of the viewport.
         */
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "bg-white/82 backdrop-blur-[12px]",
        "supports-[backdrop-filter]:bg-white/70",
        "transition-[box-shadow,border-color] duration-200",
        isScrolled
          ? "border-b border-[#E4E8EF] shadow-[0_1px_2px_rgba(10,16,36,0.06)]"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-[1200px]
          items-center
          justify-between
          px-5
          min-[901px]:h-[72px]
          min-[901px]:px-6
        "
      >
        {/* logo */}
        <a
          href="/"
          aria-label="Northlight home"
          className="
            flex
            items-center
            gap-2
            rounded-lg
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#2B59FF]
            focus-visible:ring-offset-3
          "
        >
          <img
            src={northlightMark}
            alt=""
            aria-hidden="true"
            className="h-8 w-8"
          />

          <span
            className="
              font-instrument-bold
              text-[18px]
              font-semibold
              tracking-[-0.02em]
              text-[#0A1024]
            "
          >
            Northlight
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden min-[901px]:block"
        >
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "group relative inline-flex h-[72px] items-center",
                      "font-inter-regular text-[14px]",
                      "transition-colors duration-200",
                      "focus-visible:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-[#2B59FF]",
                      "focus-visible:ring-offset-3",
                      isActive
                        ? "text-[#0A1024] font-inter-bold"
                        : "text-[#525F72] hover:text-[#0A1024]",
                    ].join(" ")}
                  >
                    {item.label}

                    {/* Active / hover indicator */}
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute bottom-0 left-1/2",
                        "h-[2px]",
                        "-translate-x-1/2",
                        "rounded-full",
                        "bg-[#2B59FF]",
                        "transition-[width,opacity]",
                        "duration-200",
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100",
                      ].join(" ")}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 min-[901px]:flex">
          <a
            href="#sign-in"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "default",
              }),
              "h-auto px-2 py-2 text-[14px]",
            )}
          >
            Sign in
          </a>

          <a
            href="#start-free-trial"
            className={cn(
              buttonVariants({
                variant: "primary",
                size: "default",
              }),
            )}
          >
            Start free trial
          </a>
        </div>

        {/* Mobile navigation */}
        <div className="min-[901px]:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon-lg",
                    }),
                    "min-[901px]:hidden",
                  )}
                />
              }
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
    flex
    w-[min(360px,86vw)]
    flex-col
    border-l-0
    bg-white
    p-5
  "
            >
              {/* Mobile drawer header */}
              <div className="flex items-center justify-between">
                {/* Logo */}
                <a
                  href="/"
                  onClick={handleNavClick}
                  aria-label="Northlight home"
                  className="
        flex
        items-center
        gap-2
        rounded-lg
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#2B59FF]
        focus-visible:ring-offset-3
      "
                >
                  <img
                    src={northlightMark}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8"
                  />

                  <span
                    className="
          font-instrument-bold
          text-[18px]
          font-semibold
          tracking-[-0.02em]
          text-[#0A1024]
        "
                  >
                    Northlight
                  </span>
                </a>

                {/* Close button */}
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        bg-transparent
        text-[#0A1024]
        transition-colors
        duration-200
        hover:bg-[#F6F7FB]
        hover:text-[#0A1024]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#2B59FF]
        focus-visible:ring-offset-3
      "
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              {/* Accessible Sheet title */}
              <SheetHeader className="sr-only">
                <SheetTitle>Northlight navigation</SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation Links */}
              <nav aria-label="Mobile primary navigation" className="mt-8">
                <ul>
                  {NAV_ITEMS.map((item) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <li key={item.href} className="border-b border-[#EEF0F5]">
                        <a
                          href={item.href}
                          onClick={handleNavClick}
                          aria-current={isActive ? "location" : undefined}
                          className={[
                            "flex min-h-[56px] items-center",
                            "font-instrument-semibold",
                            "text-[20px]",
                            "transition-colors duration-200",
                            "focus-visible:outline-none",
                            "focus-visible:ring-2",
                            "focus-visible:ring-[#2B59FF]",
                            "focus-visible:ring-inset",
                            isActive
                              ? "text-[#2B59FF]"
                              : "text-[#0A1024] hover:text-[#2B59FF]",
                          ].join(" ")}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile Actions */}
              <div
                className="
      mt-auto
      flex
      flex-col
      gap-3
      pt-6
    "
              >
                <a
                  href="#sign-in"
                  onClick={handleNavClick}
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      size: "default",
                    }),
                    "w-full",
                  )}
                >
                  Sign in
                </a>

                <a
                  href="#start-free-trial"
                  onClick={handleNavClick}
                  className={cn(
                    buttonVariants({
                      variant: "primary",
                      size: "default",
                    }),
                    "w-full",
                  )}
                >
                  Start free trial
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
