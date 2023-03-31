import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr'
import '@/styles/globals.css'

import "reflect-metadata"

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (localStorage.getItem('sidebar-expanded') == 'true') {
      document.body.classList.add("sidebar-expanded");
    } else {
      document.body.classList.remove("sidebar-expanded");
    }
  });

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.scrollBehavior = 'auto';
      window.scroll({ top: 0 })
      htmlElement.style.scrollBehavior = '';
    }
  }, [pathname]);

  return (
    <SWRConfig value={{ fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App;