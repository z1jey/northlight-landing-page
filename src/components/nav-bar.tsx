import { useEffect, useState, type MouseEvent } from "react";

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
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active navigation section
  useEffect(() => {
    const handleActiveSection = () => {
      const isDesktop = window.innerWidth >= 901;

      // Sticky header + breathing room
      const headerOffset = isDesktop ? 88 : 80;

      const scrollPosition = window.scrollY + headerOffset;

      // Programmatic navigation
      if (scrollTarget) {
        const target = document.getElementById(scrollTarget);

        if (target) {
          const targetTop =
            target.getBoundingClientRect().top + window.scrollY - headerOffset;

          const distance = Math.abs(window.scrollY - targetTop);

          // Still scrolling toward the clicked section.
          if (distance > 12) {
            return;
          }

          // We reached the destination.
          setScrollTarget(null);
          setActiveSection(scrollTarget);
          return;
        }
      }

      /*
       * -------------------------------------------------------
       * Get navigation sections
       * -------------------------------------------------------
       */
      const sections = NAV_ITEMS.map(({ href }) => {
        const element = document.querySelector<HTMLElement>(href);

        if (!element) {
          return null;
        }

        return {
          id: element.id,
          top: element.getBoundingClientRect().top + window.scrollY,
        };
      }).filter(
        (
          section,
        ): section is {
          id: string;
          top: number;
        } => section !== null,
      );

      if (sections.length === 0) {
        setActiveSection(null);
        return;
      }

      /*
       * -------------------------------------------------------
       * HERO
       *
       * Before Features begins, nothing is active.
       * -------------------------------------------------------
       */
      const firstSection = sections[0];

      if (scrollPosition < firstSection.top) {
        setActiveSection(null);
        return;
      }

      /*
       * -------------------------------------------------------
       * FOOTER
       *
       * Once footer begins, hide the navigation indicator.
       * -------------------------------------------------------
       */
      const footer = document.querySelector<HTMLElement>("footer");

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= footerTop) {
          setActiveSection(null);
          return;
        }
      }

      /*
       * -------------------------------------------------------
       * NORMAL SCROLLING
       *
       * The last section whose top has been reached becomes
       * active.
       * -------------------------------------------------------
       */
      let currentSection: string | null = null;

      for (const section of sections) {
        if (scrollPosition >= section.top) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);

      window.removeEventListener("resize", handleActiveSection);
    };
  }, [scrollTarget]);

  /*
   * ---------------------------------------------------------
   * Navigation click
   * ---------------------------------------------------------
   */
  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    /*
     * Move indicator immediately.
     */
    setActiveSection(sectionId);

    /*
     * Tell the scroll listener to temporarily keep
     * this section active.
     */
    setScrollTarget(sectionId);

    /*
     * Close mobile drawer.
     */
    setIsMenuOpen(false);

    /*
     * Respect reduced-motion preference.
     */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  /*
   * ---------------------------------------------------------
   * Close mobile menu
   * ---------------------------------------------------------
   */
  const closeMenu = () => {
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
        {/* LOGO */}
        <a
          href="/"
          aria-label="Northlight home"
          onClick={closeMenu}
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

        {/* Desktop Navigation */}
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
                    onClick={(event) => handleNavClick(event, sectionId)}
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
                        ? "font-inter-bold text-[#0A1024]"
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
                        "ease-[cubic-bezier(0.4,0,0.2,1)]",

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

        {/* Mobile Navigation */}
        <div className="min-[901px]:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            {/* Menu button */}
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

            {/* Mobile drawer */}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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

              {/* Mobile navigation links */}
              <nav aria-label="Mobile primary navigation" className="mt-8">
                <ul>
                  {NAV_ITEMS.map((item) => {
                    const sectionId = item.href.replace("#", "");

                    const isActive = activeSection === sectionId;

                    return (
                      <li
                        key={item.href}
                        className="
                          border-b
                          border-[#EEF0F5]
                        "
                      >
                        <a
                          href={item.href}
                          onClick={(event) => handleNavClick(event, sectionId)}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
