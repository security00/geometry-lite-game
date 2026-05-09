const gameUrl =
  "https://games.crazygames.com/en_US/geometry-dash-online/index.html?czyExpNexx360UserSync_CZY_18427=ineligible&isNewUser=true&skipPrerollFirstSession=true&v=1.356";

const tips = [
  "Use Practice Mode to break difficult sections into smaller patterns.",
  "Listen to the music because many jumps line up with the beat.",
  "Watch portals, pads, and orbs carefully because they change speed, gravity, and movement mode.",
  "Stay patient. Geometry games are built around quick restarts and pattern memorization.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
            Play instantly in your browser
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Geometry Dash Lite
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Play Geometry Dash Lite online for free. This browser version brings the fast jumps, spike dodging, rhythm timing, and instant restarts that make Geometry Dash so addictive.
          </p>
        </div>

        <div id="play" className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-cyan-950/40">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-sm text-slate-400">Geometry Dash Lite</span>
          </div>
          <div className="relative aspect-[16/9] min-h-[420px] w-full bg-black">
            <iframe
              id="game-iframe"
              src={gameUrl}
              title="Geometry Dash Lite Game"
              scrolling="no"
              allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope;"
              allowFullScreen
              sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox"
              loading="eager"
              className="absolute left-0 top-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 leading-8 text-slate-300 sm:p-8">
          <h2 className="text-3xl font-bold text-white">How to Play Geometry Dash Lite</h2>
          <p className="mt-4">
            Geometry Dash Lite is a side-scrolling rhythm platformer where your cube moves forward automatically. Your job is to jump at the right time, avoid spikes and walls, and survive each music-synced section.
          </p>
          <p className="mt-4">
            The challenge comes from timing. A single mistake sends you back to the start, but every attempt teaches you more about the level. The more you play Geometry Dash, the more you memorize each jump, portal, and obstacle pattern.
          </p>
          <h3 className="mt-8 text-2xl font-bold text-white">Follow the Rhythm</h3>
          <p className="mt-4">
            Keep the sound on if possible. Many jumps and movements are synced to the background music, so listening to the beat can help you predict when to jump.
          </p>
          <h3 className="mt-8 text-2xl font-bold text-white">Watch the Obstacles</h3>
          <p className="mt-4">
            Portals, pads, and orbs can change how your character moves. Some flip gravity, some launch you forward, and others change the pace of the run. Learn what each object does before trying to rush through the level.
          </p>
          <h3 className="mt-8 text-2xl font-bold text-white">Geometry Dash vs Geometry Dash Lite</h3>
          <p className="mt-4">
            Geometry Dash is the main rhythm platformer series, while Geometry Dash Lite is the free version many players use to practice the core gameplay. This page focuses on quick browser play for players searching for Geometry Dash and Geometry Dash Lite.
          </p>
        </article>

        <aside className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-white">Tips & Tricks</h2>
          <ul className="mt-6 space-y-4 text-slate-200">
            {tips.map((tip) => (
              <li key={tip} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-black/20 p-5 text-sm leading-7 text-slate-300">
            <strong className="text-white">Goal:</strong> survive as long as possible, learn the rhythm, and clear the level without crashing.
          </div>
        </aside>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
        <nav className="flex flex-wrap justify-center gap-4">
          <a className="hover:text-white" href="/about">About Us</a>
          <a className="hover:text-white" href="/privacy-policy">Privacy Policy</a>
          <a className="hover:text-white" href="/terms-of-use">Terms of Use</a>
        </nav>
        <p className="mt-4">Contact: <a className="hover:text-white" href="mailto:support@geometrylitegame.net">support@geometrylitegame.net</a></p>
        <p className="mt-2">© 2026 Geometry Lite Game. All rights reserved.</p>
      </footer>
    </main>
  );
}
