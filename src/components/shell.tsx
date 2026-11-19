import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, TrainFront, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/activities", label: "Activities" },
  { to: "/venues", label: "Lapas" },
  { to: "/packages", label: "Parties" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-cedar">
            <span className="grid size-9 place-items-center rounded-xl bg-cedar text-sand">
              <TrainFront className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="display block text-lg">Cedar Junction</span>
              <span className="block text-[11px] font-medium tracking-wide text-muted uppercase">Pretoria East</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-3 py-2 text-sm font-medium ${path === l.to ? "bg-mist text-cedar" : "text-ink/80 hover:bg-mist"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/book" className="ml-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink">
              Book a day
            </Link>
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-line bg-paper px-4 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium">
                  {l.label}
                </Link>
              ))}
              <Link to="/book" onClick={() => setOpen(false)} className="mt-1 rounded-xl bg-gold px-3 py-3 text-center font-semibold">
                Book a day
              </Link>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-line bg-cedar text-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <p className="display text-2xl">Cedar Junction</p>
            <p className="mt-2 text-sm text-sand/80">Plot 404, Graham Road, Zwavelpoort. 8 km east of Solomon Mahlangu on Lynnwood Road.</p>
          </div>
          <div className="text-sm text-sand/85">
            <p className="font-semibold text-sand">Hours</p>
            <p className="mt-2">Mon–Fri 10:00–17:00</p>
            <p>Sat, Sun & holidays 09:00–17:00</p>
            <p className="mt-2">Closed through July. Slides close from 1 June.</p>
          </div>
          <div className="text-sm text-sand/85">
            <p className="font-semibold text-sand">Bookings</p>
            <p className="mt-2">082 766 2748 · 065 826 8384</p>
            <p>info@cedarjunction.co.za</p>
            <p className="mt-2">Card only. Book before you drive out.</p>
          </div>
        </div>
      </footer>
      <Link
        to="/book"
        className="fixed right-4 bottom-4 z-30 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-lg md:hidden"
      >
        Book now
      </Link>
    </div>
  );
}
