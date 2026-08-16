import { testimonial } from "@/mock/testimonial";

export function Testimonial() {
  return (
    <section
      id="testimonial"
      aria-labelledby="testimonial-heading"
      className="bg-[#F6F7FB]"
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
        <figure className="mx-auto max-w-[780px] text-center">
          {/* Testimonial quote */}
          <blockquote
            id="testimonial-heading"
            className="
              font-instrument-semibold
              text-[clamp(20px,14.4px+1.4vw,28px)]
              leading-[1.42]
              tracking-[-0.02em]
              text-[#0A1024]
            "
          >
            “{testimonial.quote}”
          </blockquote>

          {/* Attribution */}
          <figcaption
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <img
              src={testimonial.avatar}
              alt=""
              aria-hidden="true"
              className="
                h-12
                w-12
                shrink-0
                rounded-full
                object-cover
              "
            />

            <div className="text-left">
              <p
                className="
                  font-inter-semibold
                  text-[14px]
                  leading-[1.65]
                  text-[#0A1024]
                "
              >
                {testimonial.name}
              </p>

              <p
                className="
                  font-inter-regular
                  text-[14px]
                  leading-[1.65]
                  text-[#6A707F]
                "
              >
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
