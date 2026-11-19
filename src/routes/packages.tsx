import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { packages } from "@/lib/park";

export const Route = createFileRoute("/packages")({ component: PackagesPage });

function PackagesPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl text-cedar md:text-5xl">Party packages</h1>
        <p className="mt-3 max-w-xl text-muted">
          Themes are yours to bring — the park supplies the setting, the train and the water. Music stays off, inside and in the car park.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {packages.map((p) => (
            <article key={p.id} className="flex flex-col rounded-[1.75rem] border border-line bg-paper p-6 shadow-sm">
              <p className="text-sm font-semibold text-gold-deep">{p.price}</p>
              <h2 className="mt-1 text-3xl text-cedar">{p.name}</h2>
              <p className="mt-3 text-muted">{p.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="rounded-xl bg-sand px-3 py-2">{pt}</li>
                ))}
              </ul>
              <Link to="/book" className="mt-6 inline-flex w-fit rounded-full bg-cedar px-5 py-3 text-sm font-semibold text-sand">
                Start this booking
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}
