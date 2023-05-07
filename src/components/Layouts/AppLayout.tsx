import { useState } from 'react';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import { Sidebar } from './App/sidebar';
import { Header } from './App/header';
import { Breadcrumb } from '../ui';

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  pageDescription?: string;
  imageFullUrl?: string;
  titlePage?: string;
}

export const AppLayout = ({ children, title = 'Zaiko', pageDescription = 'Proyecto Zaiko', imageFullUrl, titlePage }: AppLayoutProps) => {

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
              <div className="col-span-full xl:col-span-6 bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 shadow-xl rounded-sm border border-none">
                <header className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between">
                  <h1 className="font-semibold text-2xl">{titlePage}</h1>
                  <Breadcrumb />
                </header>
                <Toaster position="top-center" />
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
} 