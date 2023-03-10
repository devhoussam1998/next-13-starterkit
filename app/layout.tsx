import Script from './script';

export const metadata = {
  title: {
    default: 'NextPilot',
    template: '%s | NextPilot',
  },
  description: 'The Software as a Service Starter Kit built on Next.js 13',
  generator: 'NextPilot',
  applicationName: 'NextPilot',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Jhon Doe', url: 'https://link.com' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: [
      { url: '/favicons/favicon-16x16.png' },
      { url: '/favicons/favicon-32x32.png' },
      { url: '/favicons/favicon.ico' },
    ],
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/favicons/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-100">
      <body className="d-flex flex-column h-100">
        {children}
        <Script />
      </body>
    </html>
  );
}
