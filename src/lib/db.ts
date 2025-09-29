import { sql } from '@vercel/postgres'

export async function ensureSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      slug text PRIMARY KEY,
      title text NOT NULL,
      excerpt text NOT NULL,
      content text NOT NULL,
      category text,
      read_time text,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `
}

export async function listBlogs() {
  const { rows } = await sql`SELECT slug, title, excerpt, category, read_time as "readTime", created_at as "createdAt" FROM blogs ORDER BY created_at DESC`
  return rows
}

export async function getBlog(slug: string) {
  const { rows } = await sql`SELECT slug, title, excerpt, content, category, read_time as "readTime", created_at as "createdAt", updated_at as "updatedAt" FROM blogs WHERE slug = ${slug} LIMIT 1`
  return rows[0] || null
}

export async function upsertBlog({ title, excerpt, content, category }: { title: string; excerpt: string; content: string; category?: string }) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
  const readTime = `${Math.max(1, Math.ceil((content?.split(/\s+/).length || 0) / 200))} min read`
  await sql`INSERT INTO blogs (slug, title, excerpt, content, category, read_time) VALUES (${slug}, ${title}, ${excerpt}, ${content}, ${category || null}, ${readTime}) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content = EXCLUDED.content, category = EXCLUDED.category, read_time = EXCLUDED.read_time, updated_at = now()`
  return await getBlog(slug)
}

export async function updateBlog(slug: string, update: Partial<{ title: string; excerpt: string; content: string; category: string }>) {
  const existing = await getBlog(slug)
  if (!existing) return null
  const next = { ...existing, ...update }
  const newSlug = next.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
  const readTime = `${Math.max(1, Math.ceil((next.content?.split(/\s+/).length || 0) / 200))} min read`
  await sql`UPDATE blogs SET slug = ${newSlug}, title = ${next.title}, excerpt = ${next.excerpt}, content = ${next.content}, category = ${next.category || null}, read_time = ${readTime}, updated_at = now() WHERE slug = ${slug}`
  return await getBlog(newSlug)
}

export async function deleteBlog(slug: string) {
  await sql`DELETE FROM blogs WHERE slug = ${slug}`
}


