'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BsTranslate,
  BsChevronDown,
  BsGlobe,
  BsCheckCircleFill,
  BsEyeFill,
  BsFunnel,
} from 'react-icons/bs';
import Nav from './Nav';
import ColorModeToggler from '../../../ColorModeToggler';

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="navbar navbar-expand-lg sticky-top">
      <nav
        className="container-lg flex-wrap flex-lg-nowrap"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="navbar-brand text-capitalize fw-semibold"
          aria-label="NextPilot"
        >
          NextPilot
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvas"
          aria-controls="navbarOffcanvas"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="navbarOffcanvas"
          className="offcanvas-lg offcanvas-end flex-grow-1"
          data-bs-scroll="true"
          tabIndex={-1}
        >
          <div className="offcanvas-header border-bottom">
            <ul className="list-inline hstack gap-3 mb-0">
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="btn btn-link nav-link d-inline-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  <BsTranslate size="1.25rem" />
                  <span className="text-capitalize">Languages</span>
                  <BsChevronDown size="0.6875rem" />
                </button>
                <ul className="dropdown-menu py-0 rounded-3 w-280px">
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center justify-content-between active"
                      href="/"
                    >
                      <div className="d-inline-flex align-items-center gap-2">
                        <span className="fi fi-us fis"></span>
                        <span className="text-capitalize">English</span>
                      </div>
                      <BsCheckCircleFill />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center gap-2"
                      href="/"
                    >
                      <span className="fi fi-fr fis"></span>
                      <span className="text-capitalize">French</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center gap-2"
                      href="/"
                    >
                      <span className="fi fi-sa fis"></span>
                      <span className="text-capitalize">العربية</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-flex align-items-center">
                <div className="vr h-100"></div>
              </li>
              <li className="nav-item dropdown">
                <>{isClient && <ColorModeToggler />}</>
              </li>
            </ul>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#navbarOffcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Nav />
            <ul className="navbar-nav hstack d-lg-flex d-none gap-3 mb-0">
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="btn btn-link nav-link d-inline-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  <BsTranslate size="1.25rem" />
                  <span className="text-capitalize">Languages</span>
                  <BsChevronDown size="0.6875rem" />
                </button>
                <div className="dropdown-menu py-0 rounded-3 w-280px">
                  <div className="dropdown-header border-bottom rounded-top fs-6 d-flex align-items-center justify-content-center gap-2">
                    <BsGlobe size="1.25rem" />
                    <span className="text-capitalize">
                      Select your language
                    </span>
                  </div>
                  <form className="px-3 py-2 border-bottom">
                    <div className="input-group">
                      <span
                        id="search-addon"
                        className="input-group-text bg-transparent"
                      >
                        <BsFunnel size="1.25rem" />
                      </span>
                      <div className="form-floating">
                        <input
                          type="search"
                          id="search-input"
                          className="form-control"
                          autoComplete="false"
                          placeholder="Type to filter..."
                          aria-describedby="search-addon"
                        />
                        <label htmlFor="search-input">Type to filter...</label>
                      </div>
                    </div>
                  </form>
                  <ul className="list-unstyled scrollable">
                    <li>
                      <Link
                        className="dropdown-item py-2 d-flex align-items-center justify-content-between active"
                        href="/"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <span className="fi fi-us fis fs-5"></span>
                          <span className="text-capitalize">English</span>
                        </div>
                        <BsCheckCircleFill size="1.25rem" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2 d-inline-flex align-items-center gap-2"
                        href="/"
                      >
                        <span className="fi fi-fr fis fs-5"></span>
                        <span className="text-capitalize">French</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2 d-inline-flex align-items-center gap-2"
                        href="/"
                      >
                        <span className="fi fi-es fis fs-5"></span>
                        <span className="text-capitalize">Spanish</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2 d-flex align-items-center gap-2"
                        href="/"
                      >
                        <span className="fi fi-cn fis fs-5"></span>
                        <span className="text-capitalize">
                          Mandarin Chinese
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2 d-flex align-items-center gap-2"
                        href="/"
                      >
                        <span className="fi fi-ru fis fs-5"></span>
                        <span className="text-capitalize">Russian</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2 d-inline-flex align-items-center gap-2"
                        href="/"
                      >
                        <span className="fi fi-sa fis fs-5"></span>
                        <span className="text-capitalize">العربية</span>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    className="dropdown-item py-2 border-top rounded-bottom d-flex align-items-center justify-content-center gap-2"
                    href="/"
                  >
                    <BsEyeFill size="1.25rem" />
                    <span className="text-capitalize">View all languages</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item d-flex align-items-center">
                <div className="vr h-100"></div>
              </li>
              <li className="nav-item dropdown">
                <>{isClient && <ColorModeToggler />}</>
              </li>
            </ul>
          </div>
          <div className="offcanvas-header border-top"></div>
        </div>
      </nav>
    </header>
  );
}
