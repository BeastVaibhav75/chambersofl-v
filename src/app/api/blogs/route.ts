import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { ensureSchema, listBlogs, upsertBlog } from '@/lib/db'

export async function GET() {
  await ensureSchema()
  const items = await listBlogs()
  return new Response(JSON.stringify({ items }), { status: 200 })
}

export async function POST(req: NextRequest) {
  const isAdmin = cookies().get('admin_session')?.value === 'ok'
  if (!isAdmin) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  await ensureSchema()
  const { title, excerpt, content, category } = await req.json()
  const post = await upsertBlog({ title, excerpt, content, category })
  return new Response(JSON.stringify(post), { status: 201 })
}


