import { Header, Footer } from './components';
import './styles/scss/app.scss';

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
    </>
  );
}
