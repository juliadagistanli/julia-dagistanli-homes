import { Link } from "@tanstack/react-router";
import { agent, socials } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-display text-4xl leading-tight">
            Design with intention.
            <br />
            <span className="italic text-brass">Sell with confidence.</span>
          </p>
          <p className="mt-6 max-w-sm text-sm text-ink-foreground/70">
            {agent.name} · {agent.title}
            <br />
            Serving {agent.counties.join(", ")} Counties since {agent.since}.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="eyebrow text-brass">Reach Julia</p>
          <a href={agent.phoneHref} className="block font-display text-2xl hover:text-brass">
            {agent.phone}
          </a>
          <a href={agent.whatsapp} target="_blank" rel="noreferrer" className="block hover:text-brass">
            Message on WhatsApp
          </a>
          <Link to="/contact" className="block hover:text-brass">
            Request a home value consultation
          </Link>
          <p className="pt-2 text-ink-foreground/60">Speaks {agent.languages.join(", ")}</p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="eyebrow text-brass">Follow</p>
          <ul className="grid grid-cols-2 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-brass">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-ink-foreground/55 md:flex-row md:justify-between lg:px-10">
          <p>
            {agent.name}, licensed real estate salesperson ({agent.license}), affiliated with{" "}
            {agent.brokerage}.
          </p>
          <p>Equal Housing Opportunity · © {new Date().getFullYear()} juliadagistanli.com</p>
        </div>
      </div>
    </footer>
  );
}
