import { FC, useEffect, useState } from 'react';
import { SidebarMenuItems } from '.';

interface MenuItem {
  pathname: string;
  name: string;
  icon: string;
  url?: string;
  items: {
    name: string;
    url: string;
  }[];
}

interface SidebarMenuProps {
  menuItems: MenuItem;
  handleClick: () => void;
  open: boolean;
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ menuItems, handleClick, open }) => {
  const { pathname, name, icon, items } = menuItems;

  const useSidebar = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
    const [location, setLocation] = useState('');

    useEffect(() => {
      const storedSidebarExpanded = typeof window !== 'undefined' && localStorage.getItem('sidebar-expanded') === null ? "true" : localStorage.getItem('sidebar-expanded');
      setSidebarExpanded(storedSidebarExpanded === null ? true : storedSidebarExpanded === 'true');

      const currentLocation = typeof window !== 'undefined' && window.location.pathname === '/' ? 'dashboard/home' : window.location.pathname;
      setLocation(currentLocation);
    }, []);

    return [sidebarExpanded, location];
  }
  const [sidebarExpanded, location] = useSidebar();
  const [storedSidebarExpanded, setStoredSidebarExpanded] = useState(sidebarExpanded);

  return (
    <>
      <a
        href="#0"
        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes(name) ? 'hover:text-slate-200' : 'hover:text-white'
          }`}
        onClick={(e) => {
          if (sidebarExpanded === null) localStorage.setItem('sidebar-expanded', 'true');
          e.preventDefault();
          sidebarExpanded ? handleClick() : setStoredSidebarExpanded(true);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i className={`${icon} ri-xl`} />
            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {name}
            </span>
          </div>
          <div className="flex shrink-0 ml-2">
            <svg
              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open ? 'rotate-180' : 'rotate-0'
                }`}
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </a>
      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-9 mt-1 ${!open && 'hidden' || 'block'}`}>
          {items &&
            items.map((item) => {
              const menuIsActive = (typeof location === "string") && location.includes(item.url);

              return (
                <SidebarMenuItems key={item.name} name={item.name} url={item.url} isActive={menuIsActive} />
              );
            })}
        </ul>
      </div>
    </>
  );
};