import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import '@/styles/globals.css'

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

  return <Component {...pageProps} />
}

export default App;