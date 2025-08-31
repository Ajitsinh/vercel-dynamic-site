import { photos } from '@/data/photos';

export const dynamic = 'force-dynamic';

export default function PhotosPage() {
  return (
    <section>
      <h1>Photos</h1>
      <div className="grid">
        {photos.map(p => (
          <figure key={p.id} className="card">
            <img src={p.src} alt={p.alt ?? p.title} />
            <figcaption>{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
