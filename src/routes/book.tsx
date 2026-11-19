import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/shell";
import { venues } from "@/lib/park";

type Search = { venue?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    venue: typeof s.venue === "string" ? s.venue : undefined,
  }),
  component: BookPage,
});

const steps = ["Visit", "People", "Place", "Send"] as const;

function BookPage() {
  const { venue: preset } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [kind, setKind] = useState<"Day visit" | "Party or lapa">("Party or lapa");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(4);
  const [children, setChildren] = useState(6);
  const [venueId, setVenueId] = useState(preset ?? "lapa-6");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [ref, setRef] = useState<string | null>(null);

  const venue = useMemo(() => venues.find((v) => v.id === venueId) ?? venues[0], [venueId]);
  const guests = adults + children;
  const entrance = adults * 150 + children * 130;
  const hire = kind === "Party or lapa" ? venue.price : 0;

  function submit() {
    const code = `CJ-${Date.now().toString().slice(-6)}`;
    const record = { code, kind, date, adults, children, venue: venue.name, name, phone, note, entrance, hire };
    const prev = JSON.parse(localStorage.getItem("cj-bookings") ?? "[]");
    localStorage.setItem("cj-bookings", JSON.stringify([record, ...prev].slice(0, 12)));
    setRef(code);
  }

  if (ref) {
    return (
      <Shell>
        <section className="mx-auto max-w-lg px-4 py-16 text-center">
          <p className="text-sm font-semibold text-gold-deep">Request received</p>
          <h1 className="mt-2 text-4xl text-cedar">We’ll confirm {ref}</h1>
          <p className="mt-3 text-muted">
            This is a request, not a paid ticket. Call 082 766 2748 if your date is inside 48 hours. Keep your reference for the gate.
          </p>
        </section>
      </Shell>
    );
  }

  return (
    <Shell>
      <section className="mx-auto max-w-xl px-4 py-10">
        <h1 className="text-4xl text-cedar">Book</h1>
        <ol className="mt-4 flex gap-2 text-sm">
          {steps.map((s, i) => (
            <li key={s} className={`rounded-full px-3 py-1 ${i === step ? "bg-cedar text-sand" : "bg-paper text-muted"}`}>{s}</li>
          ))}
        </ol>

        {step === 0 && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {(["Day visit", "Party or lapa"] as const).map((k) => (
                <button key={k} type="button" onClick={() => setKind(k)} className={`rounded-2xl border p-4 text-left ${kind === k ? "border-gold bg-paper" : "border-line bg-paper"}`}>
                  <span className="font-semibold">{k}</span>
                </button>
              ))}
            </div>
            <label className="block text-sm font-medium">Date
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3" />
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Count label="Adults" value={adults} set={setAdults} />
            <Count label="Children 2–12" value={children} set={setChildren} />
            <p className="col-span-2 text-sm text-muted">Entrance estimate R{entrance}. Public-holiday rates are higher and confirmed with your booking.</p>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6">
            {kind === "Day visit" ? (
              <p className="rounded-2xl bg-paper p-4 text-sm">No lapa hire. Arrive early on busy days — a day booking does not guarantee a spot if the park is full.</p>
            ) : (
              <label className="block text-sm font-medium">Venue for {guests} people
                <select value={venueId} onChange={(e) => setVenueId(e.target.value)} className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3">
                  {venues.filter((v) => v.capacity >= Math.min(guests, 10) || guests <= v.capacity + 5).map((v) => (
                    <option key={v.id} value={v.id}>{v.name} · {v.capacity} · R{v.price}</option>
                  ))}
                </select>
              </label>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="mt-6 space-y-3">
            <Field label="Your name" value={name} onChange={setName} />
            <Field label="Mobile" value={phone} onChange={setPhone} />
            <label className="block text-sm font-medium">Note
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3" />
            </label>
            <div className="rounded-2xl bg-cedar p-4 text-sand text-sm">
              <p>{kind} · {date || "date TBC"} · {adults} adults, {children} children</p>
              {kind === "Party or lapa" && <p>{venue.name} hire R{hire}</p>}
              <p>Entrance estimate R{entrance}</p>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          <button type="button" disabled={step === 0} onClick={() => setStep((s) => s - 1)} className="rounded-full px-4 py-3 text-sm font-semibold disabled:opacity-40">Back</button>
          {step < 3 ? (
            <button type="button" onClick={() => setStep((s) => s + 1)} className="rounded-full bg-gold px-5 py-3 font-semibold">Next</button>
          ) : (
            <button type="button" disabled={!name || !phone} onClick={submit} className="rounded-full bg-cedar px-5 py-3 font-semibold text-sand disabled:opacity-40">Send request</button>
          )}
        </div>
      </section>
    </Shell>
  );
}

function Count({ label, value, set }: { label: string; value: number; set: (n: number) => void }) {
  return (
    <div className="rounded-2xl bg-paper p-4">
      <p className="text-sm text-muted">{label}</p>
      <div className="mt-2 flex items-center justify-between">
        <button type="button" className="size-11 rounded-full bg-mist text-lg" onClick={() => set(Math.max(0, value - 1))}>−</button>
        <span className="display text-3xl text-cedar">{value}</span>
        <button type="button" className="size-11 rounded-full bg-mist text-lg" onClick={() => set(value + 1)}>+</button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block text-sm font-medium">{label}
      <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3" />
    </label>
  );
}
