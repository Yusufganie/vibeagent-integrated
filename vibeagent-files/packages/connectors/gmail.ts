export interface SendMailInput {
  to: string;
  subject: string;
  body: string;
}

export interface SendMailOutput {
  id: string;
  threadId: string;
}

export async function sendMail(input: SendMailInput, token: string): Promise<SendMailOutput> {
  const url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';
  const message = [
    'Content-Type: text/plain; charset="UTF-8"',
    `To: ${input.to}`,
    `Subject: ${input.subject}`,
    '',
    input.body,
  ].join('\n');
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  const body = JSON.stringify({ raw: encodedMessage });
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body,
  });
  if (!res.ok) {
    throw new Error(`Gmail API returned ${res.status}`);
  }
  return (await res.json()) as any;
}
