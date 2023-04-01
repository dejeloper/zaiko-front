import { FC, useState } from 'react';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {

  const [searchModalOpen, setSearchModalOpen] = useState(false)
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <button className="text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-400 lg:hidden" aria-controls="sidebar" aria-expanded={sidebarOpen} onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}>
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

  )
}
