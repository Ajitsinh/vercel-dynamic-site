export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <section className="hero">
      <h1>Welcome</h1>
      <p className="badge">
        Explore songs, photos, and videos. Add your media in the public/ folder and update the data files.
      </p>
      <ul>
        <li><kbd>/songs</kbd> — audio cards with covers and players</li>
        <li><kbd>/photos</kbd> — responsive photo grid</li>
        <li><kbd>/videos</kbd> — embedded video gallery</li>
      </ul>
    </section>
  );
}
