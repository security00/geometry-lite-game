const features = [
  "Fast browser gameplay with no download required",
  "Simple one-button controls that are easy to learn",
  "Rhythm-based jumps, spikes, portals, and tight timing",
  "Lightweight page built for desktop and mobile players",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
          geometrylitegame.net
        </p>
        <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
          Play <span className="text-cyan-300">Geometry Lite</span> Online
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Jump through sharp obstacles, follow the beat, and keep your cube alive in a clean, lightweight geometry runner experience.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#play"
            className="rounded-full bg-cyan-300 px-8 py-3 text-base font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Play Now
          </a>
          <a
            href="#guide"
            className="rounded-full border border-white/20 px-8 py-3 text-base font-bold text-white transition hover:bg-white/10"
          >
            How to Play
          </a>
        </div>

        <div id="play" className="mt-14 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/40">
          <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 text-sm text-slate-400">Geometry Lite</span>
          </div>
          <div className="flex aspect-video flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-950 to-cyan-950 p-8">
            <div className="mb-6 grid h-20 w-20 rotate-45 place-items-center rounded-xl bg-cyan-300 shadow-lg shadow-cyan-400/40" />
            <p className="max-w-md text-slate-300">
              Game embed placeholder. The playable build can be connected here once the game source is ready.
            </p>
          </div>
        </div>
      </section>

      <section id="guide" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-bold">How to Play</h2>
            <p className="mt-4 text-slate-300">
              Press, tap, or click to jump. Time every move with the rhythm, avoid spikes, and learn each section by practice.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-bold">Why Play Here?</h2>
            <ul className="mt-4 space-y-3 text-left text-slate-300">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
