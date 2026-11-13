import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { agent, designFocus } from "@/lib/site";
import kitchen from "@/assets/design-kitchen.jpg";

export const Route = createFileRoute("/sell")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://juliadagistanli.com/sell" }],
    meta: [
      { title: "Sell Your Home in Rutherford NJ & North Jersey | Julia Dagistanli" },
      {
        name: "description",
        content: "Selling a home in Rutherford or North Jersey? Get a personalized valuation, strategic pricing, pre-sale improvement advice, thoughtful marketing and skilled negotiation.",
      },
      { property: "og:url", content: "https://juliadagistanli.com/sell" },
      { property: "og:title", content: "Selling with Julia Dagistanli" },
      {
        property: "og:description",
        content: "Design with intention. Invest with strategy. Sell with confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sell,
});

const steps = [
  { n: "01", t: "Valuation & pricing", d: "A clear read on location, condition, competition and today’s market — and a price strategy built around your goals." },
  { n: "02", t: "Preparation", d: "Targeted advice on what to refresh, repair or stage so the home shows at its best without overspending." },
  { n: "03", t: "Marketing & showings", d: "Polished presentation and outreach designed to reach qualified buyers quickly." },
  { n: "04", t: "Offers & negotiation", d: "Careful evaluation of every offer and firm, informed negotiation for the strongest outcome." },
  { n: "05", t: "Through to closing", d: "Proactive coordination and clear communication until the keys change hands." },
];

function Sell() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10">
        <p className="eyebrow text-brass">For sellers</p>
        <h1 className="mt-4 max-w-4xl text-6xl leading-[0.95] md:text-8xl">
          A strategy for your home, <span className="italic">not a template.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/80">
          Whether you’re in Rutherford, elsewhere in Bergen County or across North Jersey, Julia shapes
          each plan around the property and what you want from the sale.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <ol className="grid border-t border-border md:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`border-b border-border py-10 md:border-b-0 md:px-6 ${i > 0 ? "md:border-l" : "md:pl-0"}`}
            >
              <span className="font-display text-5xl text-brass">{s.n}</span>
              <h3 className="mt-6 text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
          <img
            src={kitchen}
            alt="Kitchen with oak cabinetry and marble island"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div>
            <p className="eyebrow text-brass">Pre-sale design & value strategy</p>
            <h2 className="mt-4 text-5xl leading-tight md:text-6xl">
              Improve with purpose. <span className="italic">Skip the rest.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-foreground/80">
              Before listing or renting, Julia helps you weigh which updates will genuinely lift appeal —
              and where spending won’t return. For investment properties, the same lens helps improve
              marketability, tenant demand and long-term value.
            </p>
            <ul className="mt-10 flex flex-wrap gap-2">
              {designFocus.map((f) => (
                <li key={f} className="border border-ink-foreground/25 px-4 py-2 text-sm">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-10">
        <p className="font-display text-4xl leading-snug md:text-5xl">
          Design with intention. Invest with strategy.
          <br />
          <span className="italic text-brass">Sell with confidence.</span>
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild variant="ink" size="xl">
            <a href={agent.consultationForm} target="_blank" rel="noreferrer">
              Request a confidential valuation
            </a>
          </Button>
          <Button asChild variant="line" size="xl">
            <Link to="/contact">Contact Julia</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
