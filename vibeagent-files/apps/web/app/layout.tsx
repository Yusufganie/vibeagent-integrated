import './indigo-circuit.css';
import type { ReactNode } from 'react';

// Root layout applies the Indigo Circuit theme, header, and footer across all pages.
export const metadata = {
  title: 'VibeAgent',
  description: 'Build any agent. Ship anywhere.'
};

/**
 * The root layout wraps every page in a consistent shell. It imports the
 * Indigo Circuit CSS tokens, renders a header with the VibeAgent by VibeSense
 * lockup and navigation links, and a muted footer. The `children` prop
 * contains the page content.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Note: inline styles are used here for simplicity. You could refactor
          these to CSS classes or utility functions. */}
      <body style={{ margin: 0 }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 20px',
            background: 'var(--surface)'
          }}
        >
          <img
            src="/wordmark_lockup.svg"
            alt="VibeAgent by VibeSense"
            height={40}
          />
          <nav style={{ display: 'flex', gap: 10 }}>
            {/* Primary and secondary button styles are defined in indigo-circuit.css */}
            <a href="/" className="secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              Home
            </a>
            <a
              href="/builder"
              className="primary"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              Launch Builder
            </a>
          </nav>
        </header>
        {/* The main region holds the page content. It uses a minimum height to
            push the footer to the bottom on short pages. */}
        <main style={{ minHeight: 'calc(100vh - 160px)', padding: '0 20px' }}>{children}</main>
        <footer
          style={{ color: 'var(--muted)', fontSize: 12, padding: '24px 28px', textAlign: 'center' }}
        >
          © 2025 VibeSense. All rights reserved.
        </footer>
      </body>
    </html>
  );
}