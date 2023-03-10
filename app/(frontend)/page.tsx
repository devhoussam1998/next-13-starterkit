import { Hero, Features } from './components/Home';

export const metadata = {
  title: 'Home',
  description: 'The homepage for NextPilot',
};

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Features /> */}
      <div className="py-5 container">
        <div className="mb-4">
          <button type="button" className="btn btn-lg btn-primary me-3">
            Primary
          </button>
          <button type="button" className="btn btn-lg btn-primary active me-3">
            Primary
          </button>
          <button type="button" className="btn btn-lg btn-primary disabled">
            Primary
          </button>
        </div>
        <div className="mb-4">
          <button type="button" className="btn btn-lg btn-outline-primary me-3">
            Primary
          </button>
          <button
            type="button"
            className="btn btn-lg btn-outline-primary active me-3"
          >
            Primary
          </button>
          <button
            type="button"
            className="btn btn-lg btn-outline-primary disabled"
          >
            Primary
          </button>
          <button type="button" className="btn btn-lg btn-link">
            Primary
          </button>
          <button type="button" className="btn btn-lg btn-link active">
            Primary
          </button>
          <button type="button" className="btn btn-lg btn-link disabled">
            Primary
          </button>
        </div>
      </div>
    </>
  );
}
