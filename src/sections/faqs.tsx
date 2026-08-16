import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqCta } from "./FaqCta";
import { faqItems } from "@/mock/faq";
import AnimatedContent from "@/components/animations/AnimatedContent";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-[50px] bg-white min-[901px]:scroll-mt-[50px]"
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          py-14
          min-[641px]:py-[72px]
          min-[901px]:px-6
          min-[901px]:py-24
        "
      >
        <AnimatedContent delay={0.5}>
          <header className="mx-auto max-w-[780px] text-center">
            <p
              className="
              font-inter-semibold
              text-[13px]
              uppercase
              leading-[1.65]
              tracking-[0.08em]
              text-[#2B59FF]
            "
            >
              FAQ
            </p>

            <h2
              id="faq-heading"
              className="
              mt-3
              font-instrument-semibold
              text-[clamp(28px,20px+2.1vw,40px)]
              leading-[1.2]
              tracking-[-0.02em]
              text-[#0A1024]
            "
            >
              Questions we get asked
            </h2>
          </header>

          <div className="mx-auto mt-10 max-w-[780px] min-[901px]:mt-16">
            <Accordion multiple className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>

                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-16 min-[901px]:mt-24">
            <FaqCta />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
