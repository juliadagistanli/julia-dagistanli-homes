import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { agent, awards } from "@/lib/site";
import portrait from "@/assets/julia-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Julia Gulden Dagistanli · Rutherford NJ Realtor" },
      {
        name: "description",
        content:
          "Rutherford resident and real estate professional since 2002, with a background in interior design and a long record of NJAR Circle of Excellence awards.",
      },
      { property: "og:title", content: "About Julia Gulden Dagistanli" },
      {
        property: "og:description",
        content: "Two decades of North Jersey real estate, local knowledge and design expertise.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[5fr_7fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <img
            src={portrait}
            alt="Julia Gulden Dagistanli"
            width={1200}
            height={1200}
            className="aspect-[4/5] w-full object-cover shadow-soft"
          />
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Phone</dt>
              <dd>
                <a href={agent.phoneHref} className="hover:text-brass">
                  {agent.phone}
                </a>
              </dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">License</dt>
              <dd>{agent.license}</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Languages</dt>
              <dd>{agent.languages.join(", ")}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Brokerage</dt>
              <dd>{agent.brokerage}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="eyebrow text-brass">About</p>
          <h1 className="mt-4 text-6xl leading-[0.95] md:text-7xl">{agent.name}</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Rutherford NJ Real Estate · {agent.counties.join(" · ")} Counties · Listing Specialist
          </p>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Julia has lived in Rutherford and practiced real estate here since {agent.since}. Over more
              than twenty years she has guided homeowners, first-time buyers, landlords, tenants, relocating
              families and investors through every kind of residential move in North Jersey.
            </p>
            <p>
              Her work rests on a few steady principles: know the local market cold, price with strategy,
              market with care, negotiate with skill and keep clients informed at every step. Today, with{" "}
              {agent.brokerage}, she pairs that local depth with a brokerage known for its marketing and
              global reach.
            </p>
          </div>

          <h2 className="mt-20 text-4xl md:text-5xl">A designer’s perspective</h2>
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Interior design, architecture and home improvement have long been a passion — and they shape
              how Julia sees a property. How a home is laid out, finished and presented changes how buyers
              and renters feel about it, and what they’ll pay.
            </p>
            <p>
              She contributed to the creation of the 4A Collection US showroom in Cresskill, New Jersey,
              which received the NKBA Innovative Showroom Award at KBIS in Orlando in 2026. That work keeps
              her current on materials, finishes, layouts and trends she now brings to her clients.
            </p>
          </div>

          <h2 className="mt-20 text-4xl md:text-5xl">Recognition</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {awards.map((a) => (
              <li key={a.name} className="grid gap-1 py-5 md:grid-cols-[1fr_auto] md:gap-8">
                <span className="font-display text-xl">{a.name}</span>
                <span className="text-sm text-muted-foreground md:text-right">{a.years}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap gap-4">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact">Work with Julia</Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <Link to="/sell">How she sells</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
