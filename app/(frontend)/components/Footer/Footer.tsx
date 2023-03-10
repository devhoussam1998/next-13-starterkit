import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-light-subtle border-top">
      <div className="container">
        <p className="text-center mb-0">
          Copyright © 2023{' '}
          <Link href="/" className="fw-medium">
            NextPilot
          </Link>{' '}
          - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
