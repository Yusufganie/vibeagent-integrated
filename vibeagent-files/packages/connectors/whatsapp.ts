export interface SendWhatsAppInput {
  to: string; // phone number with country code
  message: string;
}

export interface SendWhatsAppOutput {
  messages: any[];
}

export async function sendWhatsAppMessage(
  input: SendWhatsAppInput,
  token: string,
  fromPhoneNumberId: string,
): Promise<SendWhatsAppOutput> {
  const url = `https://graph.facebook.com/v18.0/${fromPhoneNumberId}/messages`;
  const body = JSON.stringify({
    messaging_product: 'whatsapp',
    to: input.to,
    type: 'text',
    text: { body: input.message },
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
    throw new Error(`WhatsApp API returned ${res.status}`);
  }
  return (await res.json()) as any;
}
