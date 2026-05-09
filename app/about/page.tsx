export const metadata = {
  title: "About Us - Geometry Lite Game",
  description: "Learn about Geometry Lite Game, a simple browser destination for playing Geometry Dash Lite inspired rhythm platformer games online.",
  alternates: { canonical: "https://geometrylitegame.net/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 leading-8 text-slate-300">
        <h1 className="text-4xl font-black text-white">About Us</h1>
        <p className="mt-6">
          Geometry Lite Game is a small browser gaming site focused on fast, accessible rhythm platformer gameplay. Our goal is to make it easy for players to enjoy Geometry Dash Lite inspired gameplay directly in the browser without downloads.
        </p>
        <p className="mt-4">
          We publish simple game pages, play guides, tips, and related information for players searching for Geometry Dash, Geometry Dash Lite, and similar rhythm jumping games.
        </p>
        <p className="mt-4">
          Geometry Lite Game is an independent fan-oriented website. All game names, trademarks, and third-party content belong to their respective owners.
        </p>
      </article>
    </main>
  );
}
