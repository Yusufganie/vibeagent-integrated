export interface CreateEventInput {
  summary: string;
  description?: string;
  start: string; // ISO datetime
  end: string;
}

export interface CreateEventOutput {
  id: string;
  htmlLink: string;
}

export async function createEvent(input: CreateEventInput, token: string): Promise<CreateEventOutput> {
  const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events';
  const body = JSON.stringify({
    summary: input.summary,
    description: input.description,
    start: { dateTime: input.start },
    end: { dateTime: input.end },
  });
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body,
  });
  if (!res.ok) {
    throw new Error(`Google Calendar API returned ${res.status}`);
  }
  return (await res.json()) as any;
}
