import { useState } from "react";

import northlightMark from "@/assets/logo/northlight-mark.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerLinkGroups } from "@/mock/footer";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage("Enter your email address to subscribe.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setMessage("That doesn't look like a valid email address.");
      return;
    }

    setMessage("Thanks — check your inbox to confirm.");
    setEmail("");
  };

  return (
    <footer
      aria-label="Site footer"
      className="
        border-t
        border-[#E4E8EF]
        bg-[#F6F7FB]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          py-14
          min-[641px]:px-6
          min-[641px]:py-[72px]
          min-[901px]:py-20
        "
      >
        {/* Main footer content */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-12

            min-[641px]:grid-cols-4
            min-[641px]:gap-x-8
            min-[641px]:gap-y-10

            min-[901px]:grid-cols-[1.6fr_repeat(4,1fr)]
            min-[901px]:gap-10
        "
        >
          {/* Brand + Newsletter */}
          <section
            aria-labelledby="footer-brand-heading"
            className="
                col-span-2
  min-[641px]:col-span-4
  min-[901px]:col-span-1
  min-[901px]:row-span-1
            "
          >
            {/* Logo */}
            <a
              href="/"
              aria-label="Northlight home"
              className="
                inline-flex
                items-center
                gap-2
              "
            >
              <img
                src={northlightMark}
                alt=""
                aria-hidden="true"
                className="
                  h-7
                  w-7
                  shrink-0
                  object-contain
                "
              />

              <span
                id="footer-brand-heading"
                className="
                  font-instrument-semibold
                  text-[18px]
                  leading-none
                  tracking-[-0.02em]
                  text-[#0A1024]
                "
              >
                Northlight
              </span>
            </a>

            {/* Tagline */}
            <p
              className="
                mt-7
                max-w-[300px]
                font-inter-regular
                text-[15px]
                leading-[1.65]
                text-[#6A707F]
              "
            >
              Product analytics for teams who ship.
            </p>

            {/* Newsletter */}
            <section aria-labelledby="newsletter-heading" className="mt-8">
              <h2
                id="newsletter-heading"
                className="
                  font-inter-semibold
                  text-[14px]
                  leading-[1.65]
                  text-[#0A1024]
                "
              >
                Product updates, once a month.
              </h2>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="
                    mt-3
                    flex
                    w-full
                    flex-col
                    gap-2
                    min-[641px]:max-w-[405px]
                    min-[641px]:flex-row
                    min-[641px]:items-center
                "
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  aria-describedby="newsletter-message"
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="default"
                  className="
                    w-full
                    shrink-0

                    min-[641px]:w-auto
                  "
                >
                  Subscribe
                </Button>
              </form>

              {/* Validation / success message */}
              <p
                id="newsletter-message"
                aria-live="polite"
                className={`
                  mt-2
                  min-h-[20px]
                  font-inter-regular
                  text-[13px]
                  leading-[1.5]
                  ${
                    message.startsWith("Thanks")
                      ? "text-[#16805B]"
                      : "text-[#B93A17]"
                  }
                `}
              >
                {message}
              </p>
            </section>
          </section>

          {/* Footer navigation */}
          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="min-w-0">
              <h2
                className="
                  font-inter-semibold
                  text-[13px]
                  uppercase
                  leading-[1.65]
                  tracking-[0.08em]
                  text-[#6A707F]
                "
              >
                {group.title}
              </h2>

              <ul className="mt-5 space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        rounded-sm
                        font-inter-regular
                        text-[15px]
                        leading-[1.65]
                        text-[#6A707F]
                        transition-colors
                        duration-200
                        hover:text-[#0A1024]
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#2B59FF]
                        focus-visible:ring-offset-2
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="
            mt-14
            border-t
            border-[#E4E8EF]
            pt-6
            min-[641px]:mt-16
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-3
              text-center
              font-inter-regular
              text-[13px]
              leading-[1.65]
              text-[#6A707F]

              min-[641px]:flex-row
              min-[641px]:gap-6

              min-[901px]:justify-between
              min-[901px]:text-left
            "
          >
            <p>© 2026 Northlight Labs, Inc.</p>

            <p className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#1FA774]
                "
              />

              <span>All systems operational</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
