import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <Link className="brand" href="/">Media</Link>
        <div className="links">
          <Link href="/songs">Songs</Link>
          <Link href="/photos">Photos</Link>
          <Link href="/videos">Videos</Link>
        </div>
      </div>
    </nav>
  );
}
