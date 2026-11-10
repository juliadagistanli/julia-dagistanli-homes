import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { agent, socials } from "@/lib/site";
import hero from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Julia Dagistanli · Rutherford NJ Real Estate" },
      {
        name: "description",
        content:
          "Call, message or request a confidential home value and selling consultation with Julia Gulden Dagistanli.",
      },
      { property: "og:title", content: "Contact Julia Dagistanli" },
      {
        property: "og:description",
        content: "Request a confidential home value & selling consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="grid min-h-[80vh] lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img
          src={hero}
          alt="Colonial home at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-24 lg:px-20">
        <p className="eyebrow text-brass">Contact</p>
        <h1 className="mt-4 text-6xl leading-[0.95] md:text-7xl">
          Let’s talk about <span className="italic">your next move.</span>
        </h1>
        <p className="mt-8 max-w-md text-lg text-foreground/80">
          Selling, buying, renting or investing — reach out directly. Julia speaks{" "}
          {agent.languages.join(", ")}.
        </p>

        <div className="mt-12 space-y-8">
          <div>
            <p className="eyebrow text-muted-foreground">Call or text</p>
            <a href={agent.phoneHref} className="mt-2 block font-display text-5xl hover:text-brass">
              {agent.phone}
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="ink" size="xl">
              <a href={agent.consultationForm} target="_blank" rel="noreferrer">
                Request a home valuation
              </a>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href={agent.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-transparent hover:border-brass"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            {agent.license} · {agent.brokerage}
          </p>
        </div>
      </div>
    </section>
  );
}
