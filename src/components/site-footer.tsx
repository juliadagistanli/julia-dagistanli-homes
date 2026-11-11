import { Link } from "@tanstack/react-router";
import { agent, socials } from "@/lib/site";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.98 11.98 0 0 0 12 0 11.99 11.99 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

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
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brass"
                >
                  {"icon" in s && s.icon === "google" && <GoogleIcon />}
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
