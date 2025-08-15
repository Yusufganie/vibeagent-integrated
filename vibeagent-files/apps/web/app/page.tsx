// Home page for the VibeAgent platform.
//
// Instead of the raw builder UI, this page introduces the product and
// encourages users to start building their own agents. It leverages the
// Indigo Circuit theme by applying semantic colours via CSS variables.

export default function Home() {
  return (
    <div style={{ textAlign: 'center', maxWidth: 960, margin: '80px auto', padding: 16 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>Build any agent. Ship anywhere.</h1>
      <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6 }}>
        Describe your agent idea in plain language and watch VibeAgent assemble it in real time.
      </p>
      <a
        href="/builder"
        className="primary"
        style={{
          padding: '14px 20px',
          borderRadius: '10px',
          textDecoration: 'none',
          display: 'inline-block',
          marginTop: 24
        }}
      >
        Launch Builder
      </a>
      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 8 }}>How it works</h2>
        <ol style={{ listStyle: 'decimal', textAlign: 'left', margin: '0 auto', maxWidth: 600, lineHeight: 1.6 }}>
          <li>Type a natural-language prompt describing the agent you want to build.</li>
          <li>VibeAgent drafts a typed AgentSpec and lets you edit safely with schema checks.</li>
          <li>Validate, simulate a dry run, and deploy with one click to web, WhatsApp, email or Zendesk.</li>
        </ol>
      </section>
    </div>
  );
}