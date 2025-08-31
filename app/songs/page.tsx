import { songs } from '@/data/songs';

export const dynamic = 'force-dynamic';

export default function SongsPage() {
  return (
    <section>
      <h1>Songs</h1>
      <div className="grid">
        {songs.map(s => (
          <article key={s.id} className="card">
            <figure>
              <img src={s.cover} alt={`${s.title} cover`} />
            </figure>
            <h3>{s.title}</h3>
            <div className="badge">{s.artist}</div>
            <audio controls preload="none" src={s.audio} style={{ width: '100%', marginTop: '0.5rem' }} />
          </article>
        ))}
      </div>
    </section>
  );
}
