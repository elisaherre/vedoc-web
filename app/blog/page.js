import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href="/blog/blog-post">Blog Post</Link>
    </div>
  )
}
