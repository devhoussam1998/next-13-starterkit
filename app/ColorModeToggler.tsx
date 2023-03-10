'use client';

import React, { useEffect, useState } from 'react';
import {
  BsCheckCircleFill,
  BsCircleHalf,
  BsSun,
  BsMoonStars,
  BsChevronDown,
} from 'react-icons/bs';

interface Props {}

type ThemeType = 'light' | 'dark' | 'auto';

const themes: Array<ThemeType> = ['light', 'dark', 'auto'];

const ColorModeToggler: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(() => {
    const prefersDarkMode =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const prefersLightMode =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: light)').matches;

    if (prefersDarkMode) {
      return 'dark';
    } else if (prefersLightMode) {
      return 'light';
    } else {
      return 'auto';
    }
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setSelectedTheme('dark');
      } else {
        setSelectedTheme('light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeSelect = (theme: ThemeType) => {
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme') as ThemeType | null;
    if (theme && themes.includes(theme)) {
      setSelectedTheme(theme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', selectedTheme);
  }, [selectedTheme]);

  return (
    <>
      <button
        type="button"
        className="btn btn-link nav-link d-inline-flex align-items-center gap-2"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
      >
        {selectedTheme === 'light' && <BsSun size="1.25rem" />}
        {selectedTheme === 'dark' && <BsMoonStars size="1.25rem" />}
        {selectedTheme === 'auto' && <BsCircleHalf size="1.25rem" />}
        <span className="text-capitalize">{selectedTheme}</span>
        <BsChevronDown size="0.6875rem" />
      </button>
      <ul className="dropdown-menu">
        {themes.map((theme) => (
          <li key={theme}>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center justify-content-between ${
                selectedTheme === theme ? 'active' : ''
              }`}
              data-bs-theme-value={theme}
              onClick={() => handleThemeSelect(theme)}
            >
              <div className="d-flex align-items-center gap-2">
                {theme === 'light' && <BsSun size="1.25rem" />}
                {theme === 'dark' && <BsMoonStars size="1.25rem" />}
                {theme === 'auto' && <BsCircleHalf size="1.25rem" />}
                <span className="text-capitalize">{theme}</span>
              </div>
              {selectedTheme === theme && <BsCheckCircleFill size="1.25rem" />}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ColorModeToggler;
