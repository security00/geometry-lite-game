export const metadata = {
  title: "Privacy Policy - Geometry Lite Game",
  description: "Read the Geometry Lite Game privacy policy, including basic information about cookies, third-party embeds, and analytics.",
  alternates: { canonical: "https://geometrylitegame.net/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 leading-8 text-slate-300">
        <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: May 9, 2026</p>
        <p className="mt-6">
          Geometry Lite Game respects your privacy. This website is designed to provide browser game access and informational content with minimal data collection.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Information We May Collect</h2>
        <p className="mt-4">
          We may collect basic technical information such as browser type, device type, pages visited, and approximate usage data through standard hosting logs or analytics tools. We do not ask you to create an account or submit personal information to play the game.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Third-Party Game Embed</h2>
        <p className="mt-4">
          The game may be embedded from a third-party provider. That provider may use its own cookies, storage, analytics, advertising, or gameplay-related technologies. Please review the third-party provider&apos;s policies for more details.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Cookies</h2>
        <p className="mt-4">
          This site or embedded third-party content may use cookies or local storage to improve functionality, remember preferences, measure performance, or support game features.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Contact</h2>
        <p className="mt-4">
          If you have privacy questions about this website, please contact us at <a className="text-cyan-300 hover:underline" href="mailto:support@geometrylitegame.net">support@geometrylitegame.net</a>.
        </p>
      </article>
    </main>
  );
}
