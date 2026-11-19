import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { rules } from "@/lib/park";

export const Route = createFileRoute("/visit")({ component: VisitPage });

function VisitPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-4xl text-cedar md:text-5xl">Plan the drive</h1>
        <p className="mt-3 text-muted">
          Cedar Junction sits on Graham Road, Zwavelpoort — about 8 km east of the Solomon Mahlangu intersection along Lynnwood Road.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-paper p-5">
            <h2 className="text-xl text-cedar">Gate fees 2025/26 season</h2>
            <p className="mt-2">Adults R150</p>
            <p>Children 2–12 R130</p>
            <p className="mt-2 text-sm text-muted">16, 25 & 26 Dec 2026 and 1 Jan 2027: adults R200, children R150.</p>
          </div>
          <div className="rounded-2xl bg-paper p-5">
            <h2 className="text-xl text-cedar">Season</h2>
            <p className="mt-2 text-sm text-muted">Slides close from 1 June. The whole park is closed 1–31 July. Winter days are picnic, train and play — no water.</p>
          </div>
        </div>
        <h2 className="mt-10 text-2xl text-cedar">House rules</h2>
        <ul className="mt-4 space-y-2">
          {rules.map((r) => (
            <li key={r} className="rounded-xl bg-paper px-4 py-3 text-sm">{r}</li>
          ))}
        </ul>
        <Link to="/book" className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-semibold">Request a booking</Link>
      </section>
    </Shell>
  );
}
