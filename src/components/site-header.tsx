import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { agent } from "@/lib/site";

const nav = [
  { to: "/about", label: "About" },
  { to: "/sell", label: "Sell" },
  { to: "/properties", label: "Properties" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-foreground">Julia Dagistanli</span>
          <span className="eyebrow mt-1 text-[0.6rem] text-muted-foreground">Real Estate · Rutherford NJ</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="eyebrow text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "eyebrow text-foreground border-b border-brass pb-1" }}
            >
              {n.label}
            </Link>
          ))}
          <a href={agent.phoneHref} className="eyebrow text-brass hover:text-foreground">
            {agent.phone}
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="font-display text-3xl">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={agent.phoneHref} className="eyebrow text-brass">
                {agent.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
