import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li><Link href="/blog/posts">Blog</Link></li>
      </ul>
    </div>
  )
}

export default HomePage;