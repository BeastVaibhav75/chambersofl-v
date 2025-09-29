import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { ensureSchema, getBlog, updateBlog, deleteBlog } from '@/lib/db'

export async function GET(_: NextRequest, { params }: { params: { slug: string } }) {
  await ensureSchema()
  const post = await getBlog(params.slug)
  if (!post) return new Response('Not Found', { status: 404 })
  return new Response(JSON.stringify(post), { status: 200 })
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  const isAdmin = cookies().get('admin_session')?.value === 'ok'
  if (!isAdmin) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  await ensureSchema()
  const update = await req.json()
  const post = await updateBlog(params.slug, update)
  if (!post) return new Response('Not Found', { status: 404 })
  return new Response(JSON.stringify(post), { status: 200 })
}

export async function DELETE(_: NextRequest, { params }: { params: { slug: string } }) {
  const isAdmin = cookies().get('admin_session')?.value === 'ok'
  if (!isAdmin) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  await ensureSchema()
  await deleteBlog(params.slug)
  return new Response(null, { status: 204 })
}


