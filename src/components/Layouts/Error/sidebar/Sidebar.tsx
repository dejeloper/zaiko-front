import { useState, useEffect, useRef, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SidebarLinkGroup, SidebarMenu } from '.';
import 'remixicon/fonts/remixicon.css'
import { SidebarMenuIndividual } from '../../App/sidebar/SidebarMenuIndividual';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const router = useRouter();
  const { pathname } = router;
  const sidebar = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  useEffect(() => {
    const storedSidebarExpanded = (localStorage.getItem('sidebar-expanded') !== "true" || localStorage.getItem('sidebar-expanded') !== "false") ? true : localStorage.getItem('sidebar-expanded') === "true" ? true : false;

    setSidebarExpanded(storedSidebarExpanded);
  }, [])

  const menuItems = [
    {
      'pathname': 'dashboard',
      'name': 'Inicio',
      'icon': 'ri-dashboard-line',
      'url': '/dashboard/Home/',
      'numberNotification': 0
    },
    {
      'pathname': '404',
      'name': 'Error 404',
      'icon': 'ri-error-warning-line',
      'url': '404/',
      'numberNotification': 0
    }
  ];

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const { target } = event;
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.body.classList.add("sidebar-expanded");
    } else {
      document.body.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          <Link href="/" className="block">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Módulos</span>
            </h3>
            <ul className="mt-3">
              {
                menuItems.map((item, index) => {
                  const path = pathname === "/" ? 'dashboard/home' : pathname.toLowerCase();

                  return (
                    <SidebarLinkGroup key={item.name} activecondition={path.includes(item.pathname)}>
                      {(handleClick, open) => {
                        return (
                          <>
                            <SidebarMenuIndividual key={item.name} pathname={item.pathname} name={item.name} url={item.url} icon={item.icon} numberNotification={item.numberNotification} open={open} />
                          </>
                        );
                      }}
                    </SidebarLinkGroup>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => { //toggleSidebarExpanded(!sidebarExpanded)
              setSidebarExpanded(!sidebarExpanded)
            }}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}