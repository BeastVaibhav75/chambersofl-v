import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return new Response(JSON.stringify({ error: 'Admin password not set' }), { status: 500 })
  }
  if (password !== adminPassword) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
  }
  const cookie = `admin_session=ok; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24}`
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Set-Cookie': cookie } })
}



