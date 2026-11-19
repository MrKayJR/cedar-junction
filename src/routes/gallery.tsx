import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { gallery } from "@/lib/park";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

const tags = ["All", "Train", "Water", "Play", "Lapas", "Parties"] as const;

function GalleryPage() {
  const [tag, setTag] = useState<(typeof tags)[number]>("All");
  const items = gallery.filter((g) => tag === "All" || g.tag === tag);
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl text-cedar md:text-5xl">The grounds</h1>
        <p className="mt-3 max-w-xl text-muted">A colour study of the park while the photo library is being reshot for the new site. Filters match how families actually look for pictures.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button key={t} type="button" onClick={() => setTag(t)} className={`rounded-full px-4 py-2 text-sm font-medium ${tag === t ? "bg-cedar text-sand" : "bg-paper border border-line"}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g) => (
            <figure key={g.id} className={`flex h-56 flex-col justify-end rounded-[1.5rem] bg-gradient-to-br ${g.tone} p-5 text-sand`}>
              <figcaption>
                <p className="text-xs uppercase tracking-wide text-sand/80">{g.tag}</p>
                <p className="display text-2xl">{g.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Shell>
  );
}
