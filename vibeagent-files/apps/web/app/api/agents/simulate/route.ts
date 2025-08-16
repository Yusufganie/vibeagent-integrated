export async function POST(req: Request) {
  const spec = await req.json();
  const logs = (spec?.workflow || []).map((step: any) => `step:${step.step}`);
  return new Response(JSON.stringify({ ok: true, logs }), {
    headers: { 'content-type': 'application/json' },
  });
}
