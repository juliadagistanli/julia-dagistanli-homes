import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { agent, currentListings } from "@/lib/site";
import hero from "@/assets/hero-home.jpg";
import portrait from "@/assets/julia-portrait.jpg";
import kitchen from "@/assets/design-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://juliadagistanli.com/" }],
    meta: [
      { title: "Rutherford NJ Real Estate Agent | Julia Gulden Dagistanli" },
      {
        name: "description",
        content: "Looking to sell a home in Rutherford, NJ or North Jersey? Julia Gulden Dagistanli offers strategic pricing, thoughtful preparation and expert real estate guidance across Bergen, Essex, Hudson and Passaic Counties.",
      },
      { property: "og:url", content: "https://juliadagistanli.com/" },
      { property: "og:title", content: "Julia Dagistanli · Rutherford NJ Real Estate" },
      {
        property: "og:description",
        content: "Strategic pricing, design-minded preparation and skilled negotiation since 2002.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "20+", label: "Years in North Jersey real estate" },
  { value: "Top 1.5%", label: "RealTrends Verified, 2026" },
  { value: "13×", label: "NJ Monthly Five Star Award" },
  { value: "3", label: "Languages: English, French, Turkish" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={hero}
          alt="Classic colonial home on a tree-lined street at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-veil" />
        <div className="mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10">
          <p className="eyebrow animate-rise text-brass">Rutherford · Bergen County · North Jersey</p>
          <h1 className="mt-6 max-w-3xl animate-rise text-6xl leading-[0.95] text-ink-foreground md:text-8xl">
            Homes, presented
            <br />
            <span className="italic">as they deserve.</span>
          </h1>
          <p className="mt-8 max-w-xl animate-rise text-lg text-ink-foreground/85">
            Julia Gulden Dagistanli pairs two decades of local market knowledge with a designer’s eye — so
            your property is priced, prepared and positioned to sell well.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="brass" size="xl">
              <Link to="/contact">Request a home valuation</Link>
            </Button>
            <Button asChild variant="lineLight" size="xl">
              <Link to="/properties">View properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-12 lg:px-10 ${i > 0 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border lg:border-t-0" : ""}`}
            >
              <p className="font-display text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-[5fr_7fr] lg:px-10">
        <div className="relative">
          <img
            src={portrait}
            alt="Julia Gulden Dagistanli"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-brass lg:block" />
        </div>
        <div>
          <span className="rule-brass" />
          <p className="eyebrow mt-6 text-muted-foreground">Meet Julia</p>
          <h2 className="mt-4 text-5xl leading-tight md:text-6xl">
            A Rutherford neighbor and listing specialist since {agent.since}.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Julia helps homeowners, buyers, landlords, tenants and investors make confident moves across
            Bergen, Essex, Hudson and Passaic Counties. Every engagement starts with a clear plan: honest
            pricing, considered preparation, smart marketing and steady negotiation through closing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="ink" size="xl">
              <Link to="/about">Her story</Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href={agent.phoneHref}>Call {agent.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Design approach */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
          <div className="order-2 lg:order-1">
            <p className="eyebrow text-brass">Where real estate meets design</p>
            <h2 className="mt-4 text-5xl leading-tight md:text-6xl">
              Know which improvements pay — <span className="italic">and which don’t.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              With a deep background in interior design and architecture — including work on the 4A
              Collection US showroom in Cresskill, honored with the NKBA Innovative Showroom Award at KBIS
              2026 — Julia helps you invest only where it strengthens appeal and value.
            </p>
            <Button asChild variant="ink" size="xl" className="mt-10">
              <Link to="/sell">The selling approach</Link>
            </Button>
          </div>
          <img
            src={kitchen}
            alt="Warm oak and marble kitchen, styled for sale"
            width={1200}
            height={1504}
            loading="lazy"
            className="order-1 aspect-[4/5] w-full object-cover lg:order-2"
          />
        </div>
      </section>

      {/* Listings */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-muted-foreground">Now available</p>
            <h2 className="mt-3 text-5xl md:text-6xl">Current listings</h2>
          </div>
          <Button asChild variant="line" size="xl">
            <Link to="/properties">All properties</Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentListings.slice(0, 3).map((p) => (
            <PropertyCard key={p.address} p={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-24 lg:flex-row lg:items-center lg:px-10">
          <h2 className="max-w-2xl text-5xl leading-tight md:text-6xl">
            Thinking of selling? Start with a confidential valuation.
          </h2>
          <Button asChild variant="brass" size="xl">
            <Link to="/contact">Book a consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
