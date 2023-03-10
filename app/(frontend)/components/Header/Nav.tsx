import Link from 'next/link'

export default function Nav() {
  return (
    <ul className="navbar-nav mx-lg-auto">
      <li className="nav-item">
        <Link href="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/" className="nav-link">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/" className="nav-link disabled">
          Pricing
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/" className="nav-link">
          Blog
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          href="/"
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          More
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link href="/" className="dropdown-item active">
              Link
            </Link>
          </li>
          <li>
            <Link href="/" className="dropdown-item">
              Link
            </Link>
          </li>
          <li>
            <Link href="/" className="dropdown-item disabled">
              Link
            </Link>
          </li>
          <li>
            <Link href="/" className="dropdown-item">
              Link
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link href="/" className="dropdown-item">
              Link
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
