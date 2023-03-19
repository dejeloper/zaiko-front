import { useState } from 'react';
import Head from 'next/head';

import { Sidebar } from './App/sidebar';
import { Header } from './App/header';

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  pageDescription?: string;
  imageFullUrl?: string;
}

export const AppLayout = ({ children, title = 'Zaiko', pageDescription = 'Proyecto Zaiko', imageFullUrl }: AppLayoutProps) => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {
          imageFullUrl && (
            <meta name="og:image" content={imageFullUrl} />
          )
        }

      </Head>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
} 