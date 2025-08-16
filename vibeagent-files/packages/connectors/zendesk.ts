export interface CreateTicketInput {
  subject: string;
  body: string;
  requester: {
    name: string;
    email: string;
  };
}

export interface CreateTicketOutput {
  ticket: any;
}

export async function createTicket(
  input: CreateTicketInput,
  subdomain: string,
  email: string,
  apiToken: string,
): Promise<CreateTicketOutput> {
  const url = `https://${subdomain}.zendesk.com/api/v2/tickets.json`;
  const body = JSON.stringify({
    ticket: {
      subject: input.subject,
      comment: { body: input.body },
      requester: input.requester,
    },
  });
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + Buffer.from(`${email}/token:${apiToken}`).toString('base64'),
    },
    body,
  });
  if (!res.ok) {
    throw new Error(`Zendesk API returned ${res.status}`);
  }
  return (await res.json()) as any;
}
