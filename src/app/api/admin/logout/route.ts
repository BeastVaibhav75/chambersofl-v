export async function POST() {
  const cookie = `admin_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Set-Cookie': cookie } })
}



