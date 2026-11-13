import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { currentListings, pastSales } from "@/lib/site";

export const Route = createFileRoute("/properties")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://juliadagistanli.com/properties" }],
    meta: [
      { title: "North Jersey Real Estate Listings & Recent Sales | Julia Dagistanli" },
      {
        name: "description",
        content: "Explore current residential, multi-family, rental and commercial listings, plus selected recent sales represented by Julia Gulden Dagistanli across North Jersey.",
      },
      { property: "og:url", content: "https://juliadagistanli.com/properties" },
      { property: "og:title", content: "Properties by Julia Dagistanli" },
      {
        property: "og:description",
        content: "Multi-family, single-family, rentals and commercial properties across North Jersey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Properties,
});

function Properties() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-24 lg:px-10">
        <p className="eyebrow text-brass">Portfolio</p>
        <h1 className="mt-4 text-6xl leading-[0.95] md:text-8xl">Properties</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <h2 className="border-b border-border pb-4 text-4xl">Current listings</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentListings.map((p) => (
            <PropertyCard key={p.address} p={p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
            <h2 className="text-4xl">Selected sales</h2>
            <p className="text-sm text-muted-foreground">A sample of 230+ closed transactions</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastSales.map((p) => (
              <PropertyCard key={p.address} p={p} sold />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact">Ask about a property</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
