export const metadata = {
  title: "Terms of Use - Geometry Lite Game",
  description: "Read the terms of use for Geometry Lite Game, including acceptable use, third-party content, and disclaimers.",
  alternates: { canonical: "https://geometrylitegame.net/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 leading-8 text-slate-300">
        <h1 className="text-4xl font-black text-white">Terms of Use</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: May 9, 2026</p>
        <p className="mt-6">
          By using Geometry Lite Game, you agree to these terms. If you do not agree, please do not use this website.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Use of the Website</h2>
        <p className="mt-4">
          You may use this website for personal entertainment and informational purposes. You agree not to misuse the website, attempt to disrupt the service, or use it for unlawful activity.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Third-Party Content</h2>
        <p className="mt-4">
          Some game content may be embedded from third-party platforms. Geometry Lite Game does not own those third-party games and is not responsible for their availability, performance, advertising, or policies.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">No Warranty</h2>
        <p className="mt-4">
          The website is provided as is. We do not guarantee uninterrupted access, error-free gameplay, or compatibility with every device or browser.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Changes</h2>
        <p className="mt-4">
          We may update these terms from time to time. Continued use of the website after changes means you accept the updated terms.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Contact</h2>
        <p className="mt-4">
          For questions about these terms, contact us at <a className="text-cyan-300 hover:underline" href="mailto:support@geometrylitegame.net">support@geometrylitegame.net</a>.
        </p>
      </article>
    </main>
  );
}
