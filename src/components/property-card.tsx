import type { Property } from "@/lib/site";

export function PropertyCard({ p, sold }: { p: Property; sold?: boolean }) {
  return (
    <article className="group flex h-full flex-col justify-between border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass hover:shadow-soft">
      <div>
        <div className="flex items-center justify-between">
          <span className="eyebrow text-muted-foreground">{p.type}</span>
          <span className={sold ? "eyebrow text-brass" : "eyebrow text-primary"}>
            {sold ? "Sold" : p.status}
          </span>
        </div>
        <h3 className="mt-6 text-3xl leading-tight">{p.address}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.town}, NJ</p>
      </div>
      <div className="mt-10 flex items-end justify-between border-t border-border pt-5">
        <p className="font-display text-2xl">{p.price}</p>
        {p.details && <p className="text-xs text-muted-foreground">{p.details}</p>}
      </div>
    </article>
  );
}
