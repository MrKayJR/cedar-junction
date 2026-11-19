export type VenueKind = "Lapa" | "Private venue" | "Shed";
export type Zone = "Lakeside" | "Water world" | "Play lawn" | "Station";

export type Venue = {
  id: string;
  name: string;
  kind: VenueKind;
  zone: Zone;
  capacity: number;
  price: number;
  note: string;
};

export const venues: Venue[] = [
  { id: "lapa-3", name: "Lapa 3", kind: "Lapa", zone: "Play lawn", capacity: 10, price: 300, note: "Intimate shade with braai and two benches." },
  { id: "lapa-4", name: "Lapa 4", kind: "Lapa", zone: "Play lawn", capacity: 10, price: 300, note: "Quiet corner close to the jungle gyms." },
  { id: "lapa-5", name: "Lapa 5", kind: "Lapa", zone: "Station", capacity: 10, price: 300, note: "Short walk from Gum Tree Station." },
  { id: "takeaway", name: "Take-away deck", kind: "Lapa", zone: "Water world", capacity: 20, price: 300, note: "Open deck facing the front pools." },
  { id: "lapa-9", name: "Lapa 9", kind: "Lapa", zone: "Lakeside", capacity: 20, price: 400, note: "Views over the lake and train bridge." },
  { id: "lapa-10a", name: "Lapa 10A", kind: "Lapa", zone: "Lakeside", capacity: 20, price: 400, note: "Shaded lapa with a wide grass apron." },
  { id: "lapa-10b", name: "Lapa 10B", kind: "Lapa", zone: "Lakeside", capacity: 20, price: 400, note: "Sister lapa beside 10A." },
  { id: "lapa-14", name: "Lapa 14", kind: "Lapa", zone: "Water world", capacity: 15, price: 400, note: "Near the middle children’s slides." },
  { id: "lapa-16", name: "Lapa 16", kind: "Lapa", zone: "Play lawn", capacity: 20, price: 400, note: "Between carousel and flying swings." },
  { id: "lapa-23", name: "Lapa 23", kind: "Lapa", zone: "Station", capacity: 15, price: 400, note: "Handy for families arriving by the gate." },
  { id: "lapa-2", name: "Lapa 2", kind: "Lapa", zone: "Lakeside", capacity: 25, price: 500, note: "Bigger braai circle with lake air." },
  { id: "lapa-6", name: "Lapa 6", kind: "Lapa", zone: "Water world", capacity: 20, price: 500, note: "Close to the lazy river." },
  { id: "lapa-11", name: "Lapa 11", kind: "Lapa", zone: "Water world", capacity: 20, price: 500, note: "Shade plus a clear path to the slides." },
  { id: "lapa-21", name: "Lapa 21", kind: "Lapa", zone: "Play lawn", capacity: 25, price: 500, note: "Room for a longer table and extra bench." },
  { id: "venue-1", name: "Venue 1", kind: "Private venue", zone: "Station", capacity: 20, price: 500, note: "Enclosed kids’ party room feel, still outdoors." },
  { id: "venue-2", name: "Venue 2", kind: "Private venue", zone: "Play lawn", capacity: 20, price: 500, note: "Private shell for cake, gifts and shade." },
  { id: "venue-3", name: "Venue 3", kind: "Private venue", zone: "Water world", capacity: 20, price: 500, note: "Private venue a short walk from the pools." },
  { id: "venue-4", name: "Venue 4", kind: "Private venue", zone: "Lakeside", capacity: 20, price: 500, note: "Quieter private space facing the water." },
  { id: "whistle", name: "Whistle Stop", kind: "Private venue", zone: "Station", capacity: 30, price: 600, note: "Deluxe venue beside the miniature station." },
  { id: "lapa-1", name: "Lapa 1", kind: "Lapa", zone: "Lakeside", capacity: 50, price: 600, note: "The big lakeside lapa — extra bench included." },
  { id: "shed-3", name: "Shed 3", kind: "Shed", zone: "Play lawn", capacity: 15, price: 400, note: "Hard roof if the Highveld clouds roll in." },
  { id: "shed-6", name: "Shed 6", kind: "Shed", zone: "Station", capacity: 15, price: 400, note: "Covered shed with braai and benches." },
  { id: "shed-9", name: "Shed 9", kind: "Shed", zone: "Water world", capacity: 15, price: 400, note: "Covered option near the slides." },
];

export const packages = [
  {
    id: "day",
    name: "Day on the lawn",
    price: "Entrance only",
    blurb: "Train, slides and play included in the gate fee. Bring a cooler and claim a lapa if you want shade.",
    points: ["Adults R150 · children 2–12 R130", "Public holiday rates apply on peak days", "Card payments only"],
  },
  {
    id: "spark",
    name: "Spark party",
    price: "From R1 800",
    blurb: "A reserved lapa, a reserved window, and space for cake. You bring food, décor and the playlist stays off — park rule.",
    points: ["Lapa up to 20 guests", "Entrance billed per person", "Two-hour core celebration window"],
  },
  {
    id: "whistle",
    name: "Whistle Stop celebration",
    price: "From R3 200",
    blurb: "The deluxe venue by Gum Tree Station. Best when the train ride is part of the birthday story.",
    points: ["Whistle Stop or Lapa 1", "Up to 50 guests on the big lapa", "Priority confirmation on weekends"],
  },
  {
    id: "school",
    name: "School & year-end",
    price: "Quoted",
    blurb: "Outings and year-end functions. Weekdays need at least 50 people on site before the park opens.",
    points: ["Lapas grouped by zone", "Weekday 10:00–17:00", "We’ll confirm by phone or email"],
  },
];

export const attractions = [
  { name: "Miniature railway", detail: "1.2 km, two replica trains, about 7 minutes from Gum Tree Station. Included with entrance." },
  { name: "Water world", detail: "Pools, a lazy river and waterslides with age and weight limits. Closed from 1 June; the whole water park rests in July." },
  { name: "Play lawn", detail: "Jungle gyms, flying swings, cup-and-saucer, horse carousel, volleyball and basketball (bring your own ball)." },
  { name: "Lake & mountain", detail: "8.5 hectares of grass at the foot of the Bronberg, looking over a 2-hectare lake." },
];

export const gallery = [
  { id: "g1", title: "Gum Tree Station", tag: "Train", tone: "from-cedar to-leaf" },
  { id: "g2", title: "Bridge over the lake", tag: "Train", tone: "from-water to-sky" },
  { id: "g3", title: "Lazy river", tag: "Water", tone: "from-sky to-water" },
  { id: "g4", title: "Speed slides", tag: "Water", tone: "from-gold to-gold-deep" },
  { id: "g5", title: "Children’s pool", tag: "Water", tone: "from-leaf to-sky" },
  { id: "g6", title: "Horse carousel", tag: "Play", tone: "from-gold to-cedar" },
  { id: "g7", title: "Flying swings", tag: "Play", tone: "from-cedar to-sky" },
  { id: "g8", title: "Lakeside lapa", tag: "Lapas", tone: "from-leaf to-gold" },
  { id: "g9", title: "Whistle Stop", tag: "Parties", tone: "from-cedar to-gold" },
];

export const rules = [
  "Book every visit — lapas and day guests — including weekdays.",
  "Weekdays do not open for fewer than 50 people on site.",
  "No cash. Card payments only.",
  "No music in the park or the parking area.",
  "No firearms, no pets, no wood fires (charcoal only).",
  "Children stay with an adult. No professional photographers without prior permission.",
  "Waterslides, carousel and some rides stop in rain or load-shedding.",
  "Activities wind down at 16:30. The park must be clear by 17:00.",
];
