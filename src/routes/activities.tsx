import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { attractions } from "@/lib/park";

export const Route = createFileRoute("/activities")({ component: ActivitiesPage });

function ActivitiesPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl text-cedar md:text-5xl">What the day holds</h1>
        <p className="mt-3 max-w-xl text-muted">Rides are included with entrance. Slides have age and weight limits posted at each one.</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {attractions.map((a, i) => (
            <li key={a.name} className="rounded-[1.75rem] bg-paper p-6 shadow-sm">
              <span className="display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-2xl text-cedar">{a.name}</h2>
              <p className="mt-2 text-muted">{a.detail}</p>
            </li>
          ))}
        </ol>
        <Link to="/book" className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-semibold">Book the day</Link>
      </section>
    </Shell>
  );
}
