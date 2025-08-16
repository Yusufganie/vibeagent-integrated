import Ajv from 'ajv';
import schema from './agent.schema.json';

export async function POST(req: Request) {
  const spec = await req.json();
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema as any);
  const ok = validate(spec);
  return new Response(
    JSON.stringify({ ok, errors: validate.errors || [] }),
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}
