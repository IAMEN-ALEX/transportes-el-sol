import { ReactNode, useState, useEffect } from 'react';
import '../lib/i18n';

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="invisible" aria-hidden="true">{children}</div>;
  }

  return <>{children}</>;
}
