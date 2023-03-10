'use client';

import { useEffect } from 'react';

export default function Script() {
  useEffect(() => {
    typeof document !== 'undefined' && [
      require('bootstrap/dist/js/bootstrap.bundle.min'),
    ];
  }, []);
  return null;
}
