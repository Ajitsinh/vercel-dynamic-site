import { videos } from '@/data/videos';

export const dynamic = 'force-dynamic';

export default function VideosPage() {
  return (
    <section>
      <h1>Videos</h1>
      <div className="grid">
        {videos.map(v => (
          <article key={v.id} className="card">
            <h3>{v.title}</h3>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src={v.embedUrl}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
