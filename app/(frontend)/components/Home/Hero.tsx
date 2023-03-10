import Link from 'next/link';
import { BsArrowRightCircleFill, BsDownload } from 'react-icons/bs';

export default function Hero() {
  return (
    <section className="border-bottom py-5">
      <div className="px-4 py-5 text-center">
        <h1 className="display-5 text-capitalize fw-bold mb-3">
          Welcome to <span className="text-primary fw-bold">NextPilot</span>{' '}
          starter kit.
        </h1>
        <div className="col-md-6 mx-auto">
          <p className="lead mb-4">
            <span className="text-primary text-capitalize fw-semibold">
              NextPilot
            </span>{' '}
            is the newest version, released by Vercel at the Next. js conference
            in October 2022. It brings a slew of new features, including a
            bundler called Turbopack and support for several React-incubated
            optimizations like React Server Components and streaming rendering.
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <Link
              href="https://beta.nextjs.org/docs"
              className="btn btn-primary btn-lg px-4 d-inline-flex align-items-center"
            >
              <span className="text-capitalize me-2">Discover More</span>
              <BsArrowRightCircleFill />
            </Link>
            <Link
              href="/"
              className="btn btn-dark btn-lg px-4 d-inline-flex align-items-center"
            >
              <span className="text-capitalize me-2">Download Repository</span>
              <BsDownload />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
