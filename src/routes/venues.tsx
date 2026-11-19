import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/shell";
import { venues, type VenueKind, type Zone } from "@/lib/park";

export const Route = createFileRoute("/venues")({ component: VenuesPage });

const kinds: Array<VenueKind | "All"> = ["All", "Lapa", "Private venue", "Shed"];
const zones: Array<Zone | "All"> = ["All", "Lakeside", "Water world", "Play lawn", "Station"];

function VenuesPage() {
  const [kind, setKind] = useState<(typeof kinds)[number]>("All");
  const [zone, setZone] = useState<(typeof zones)[number]>("All");
  const [cap, setCap] = useState<"any" | "15" | "20" | "25">("any");
  const [picked, setPicked] = useState<string | null>(null);

  const list = useMemo(() => {
    return venues.filter((v) => {
      if (kind !== "All" && v.kind !== kind) return false;
      if (zone !== "All" && v.zone !== zone) return false;
      if (cap === "15" && v.capacity < 15) return false;
      if (cap === "20" && v.capacity < 20) return false;
      if (cap === "25" && v.capacity < 25) return false;
      return true;
    });
  }, [kind, zone, cap]);

  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl text-cedar md:text-5xl">Lapas & venues</h1>
        <p className="mt-3 max-w-xl text-muted">
          From R300 for a small lapa to R600 for Whistle Stop or the big lakeside shelter. Each comes with benches and a braai. No power points.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {kinds.map((k) => (
            <button key={k} type="button" onClick={() => setKind(k)} className={`rounded-full px-4 py-2 text-sm font-medium ${kind === k ? "bg-cedar text-sand" : "bg-paper text-ink border border-line"}`}>
              {k}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {zones.map((z) => (
            <button key={z} type="button" onClick={() => setZone(z)} className={`rounded-full px-4 py-2 text-sm ${zone === z ? "bg-water text-paper" : "bg-paper border border-line"}`}>
              {z}
            </button>
          ))}
          {(["any", "15", "20", "25"] as const).map((c) => (
            <button key={c} type="button" onClick={() => setCap(c)} className={`rounded-full px-4 py-2 text-sm ${cap === c ? "bg-gold text-ink" : "bg-paper border border-line"}`}>
              {c === "any" ? "Any size" : `${c}+ people`}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {list.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setPicked(v.id)}
                className={`rounded-card border bg-paper p-5 text-left shadow-sm transition hover:-translate-y-0.5 ${picked === v.id ? "border-gold ring-2 ring-gold/40" : "border-line"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-2xl text-cedar">{v.name}</h2>
                  <span className="rounded-full bg-mist px-2 py-1 text-xs font-semibold text-cedar">{v.kind}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{v.note}</p>
                <p className="mt-4 flex justify-between text-sm font-semibold">
                  <span>{v.zone} · {v.capacity} people</span>
                  <span className="text-gold-deep">R{v.price}</span>
                </p>
              </button>
            ))}
            {list.length === 0 && <p className="text-muted">Nothing in that mix. Widen the filters.</p>}
          </div>
          <aside className="h-fit rounded-[1.5rem] bg-cedar p-5 text-sand lg:sticky lg:top-24">
            <p className="text-sm text-sand/70">Park sketch</p>
            <div className="relative mt-3 h-64 overflow-hidden rounded-2xl bg-leaf">
              <div className="absolute top-6 right-4 h-24 w-28 rounded-full bg-water/90" />
              {venues.slice(0, 12).map((v, i) => (
                <span
                  key={v.id}
                  title={v.name}
                  className={`absolute size-3 rounded-full ${picked === v.id ? "bg-gold scale-125" : "bg-sand"}`}
                  style={{ left: `${12 + (i % 4) * 22}%`, top: `${18 + Math.floor(i / 4) * 24}%` }}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-sand/80">Pins are a guide, not a survey. Ask for the printed map when you book.</p>
            <Link
              to="/book"
              search={{ venue: picked ?? undefined }}
              className="mt-4 block rounded-full bg-gold py-3 text-center font-semibold text-ink"
            >
              {picked ? "Book this venue" : "Continue to booking"}
            </Link>
          </aside>
        </div>
      </section>
    </Shell>
  );
}
