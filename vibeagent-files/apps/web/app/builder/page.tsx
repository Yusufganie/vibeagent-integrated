// This page provides the agent builder interface. It mirrors the default
// interface on the home page but lives at /builder, which allows the
// navigation link in the header to point somewhere meaningful.
"use client";

import { useState } from 'react';
import YAML from 'yaml';

export default function BuilderPage() {
  const [prompt, setPrompt] = useState(
    'Any agent to split orders by region and notify on WhatsApp'
  );
  const [yaml, setYaml] = useState('');
  const [validation, setValidation] = useState('');
  const [logs, setLogs] = useState('');

  async function generate() {
    const res = await fetch('/api/agents/generate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setYaml(YAML.stringify(data.spec));
  }

  async function validate() {
    const res = await fetch('/api/agents/validate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ spec: YAML.parse(yaml) })
    });
    setValidation(JSON.stringify(await res.json(), null, 2));
  }

  async function simulate() {
    const res = await fetch('/api/agents/simulate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ spec: YAML.parse(yaml) })
    });
    const data = await res.json();
    setLogs((data.logs || []).join('\n'));
  }

  return (
    <div style={{ maxWidth: 1100, margin: '32px auto', padding: 16 }}>
      <h1>Agent Builder</h1>
      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        rows={4}
        style={{ width: '100%' }}
      />
      <div style={{ display: 'flex', gap: 8, margin: '8px 0' }}>
        <button onClick={generate} className="primary">
          Generate
        </button>
        <button onClick={validate} className="secondary" disabled={!yaml}>
          Validate
        </button>
        <button onClick={simulate} className="secondary" disabled={!yaml}>
          Simulate
        </button>
      </div>
      {yaml && (
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <h3>YAML</h3>
            <textarea
              value={yaml}
              onChange={e => setYaml(e.target.value)}
              rows={20}
              style={{ width: '100%', fontFamily: 'monospace' }}
            />
          </div>
          <div>
            <h3>Validation</h3>
            <pre
              style={{ background: 'var(--code)', padding: 12, whiteSpace: 'pre-wrap' }}
            >
              {validation || 'Run validate'}
            </pre>
            <h3>Logs</h3>
            <pre
              style={{ background: 'var(--code)', padding: 12, whiteSpace: 'pre-wrap' }}
            >
              {logs}
            </pre>
          </div>
        </section>
      )}
    </div>
  );
}