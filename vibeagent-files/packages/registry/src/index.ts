export const ToolsRegistry = {
  http: { type: 'http', title: 'HTTP Request', auth: 'none', categories: ['http'] },
  gmail: { type: 'gmail', title: 'Gmail', auth: 'oauth', categories: ['communication'] },
  calendar: { type: 'calendar', title: 'Calendar', auth: 'oauth', categories: ['scheduling'] },
  whatsapp: { type: 'whatsapp', title: 'WhatsApp', auth: 'token', categories: ['communication'] },
  zendesk: { type: 'zendesk', title: 'Zendesk', auth: 'token', categories: ['support'] },
};
