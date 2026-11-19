import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { attractions } from "@/lib/park";
import { ArrowRight, ShieldCheck, Star, Sun } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1 text-sm font-medium text-cedar">
            <Sun className="size-4" aria-hidden /> Summer season · slides open
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] text-cedar md:text-6xl">A country day, with a real little railway.</h1>
          <p className="mt-4 max-w-md text-lg text-muted">
            Miniature trains around a lake, waterslides, jungle gyms and thatched lapas — at the foot of the Bronberg in Pretoria East.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/book" className="rounded-full bg-gold px-5 py-3 font-semibold text-ink">
              Plan your visit
            </Link>
            <Link to="/venues" className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-3 font-semibold text-cedar">
              Choose a lapa <ArrowRight className="size-4" />
            </Link>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl bg-paper p-3">
              <dt className="text-muted">Adults</dt>
              <dd className="display text-2xl text-cedar">R150</dd>
            </div>
            <div className="rounded-2xl bg-paper p-3">
              <dt className="text-muted">Ages 2–12</dt>
              <dd className="display text-2xl text-cedar">R130</dd>
            </div>
            <div className="rounded-2xl bg-paper p-3">
              <dt className="flex items-center gap-1 text-muted"><Star className="size-3.5 fill-gold text-gold" /> Google</dt>
              <dd className="display text-2xl text-cedar">4.3</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-80 overflow-hidden rounded-[2rem] bg-cedar shadow-xl md:h-[28rem]" aria-hidden>
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-leaf" />
          <div className="absolute right-[-10%] bottom-[28%] h-40 w-[120%] -rotate-6 rounded-full bg-water" />
          <div className="absolute top-8 left-8 h-24 w-40 rounded-t-full bg-sky/40" />
          <div className="absolute bottom-16 left-10 flex items-end gap-1">
            <span className="h-10 w-16 rounded-md bg-gold" />
            <span className="mb-1 h-6 w-10 rounded-sm bg-sand" />
            <span className="mb-1 h-6 w-10 rounded-sm bg-sand" />
            <span className="mb-1 h-6 w-10 rounded-sm bg-sand" />
          </div>
          <div className="absolute right-8 bottom-24 h-28 w-36 rounded-t-[2rem] bg-gold-deep/90" />
          <p className="absolute bottom-5 left-5 text-sm font-medium text-sand">Lake, train, thatch — Zwavelpoort</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="grid gap-4 md:grid-cols-4">
          {attractions.map((a) => (
            <article key={a.name} className="rounded-card border border-line bg-paper p-5 shadow-sm">
              <h2 className="text-xl text-cedar">{a.name}</h2>
              <p className="mt-2 text-sm text-muted">{a.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[2rem] bg-paper p-8">
          <h2 className="text-3xl text-cedar">Parties without the brochure wall.</h2>
          <p className="mt-3 text-muted">Filter lapas by size and price, then send a clear booking — date, guests, venue — instead of a blank enquiry form.</p>
          <Link to="/packages" className="mt-5 inline-flex items-center gap-2 font-semibold text-gold-deep">
            See party packages <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="rounded-[2rem] bg-cedar p-8 text-sand">
          <ShieldCheck className="size-6" aria-hidden />
          <h2 className="mt-3 text-2xl">Before you leave home</h2>
          <ul className="mt-3 space-y-2 text-sm text-sand/85">
            <li>Bookings are essential, even for a walk-in day.</li>
            <li>No music, no pets, no cash.</li>
            <li>Weekdays need 50+ people before the gates open.</li>
          </ul>
          <Link to="/visit" className="mt-4 inline-block text-sm font-semibold text-gold">Full visit notes</Link>
        </div>
      </section>
    </Shell>
  );
}
