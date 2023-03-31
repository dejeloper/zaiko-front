import Link from "next/link"

interface Props {
  pathname: string;
  name: string;
  url: string;
  icon: string;
  open?: boolean;
  numberNotification?: number;
  colorNotification?: string;
}

export const SidebarMenuIndividual: React.FC<Props> = ({ pathname, name, url, icon, open = false, numberNotification = 0, colorNotification = 'bg-indigo-500' }) => {
  return (
    <Link href={url} passHref className={`block text-slate-200 truncate transition duration-150 ${pathname.includes(name) ? 'hover:text-slate-200' : 'hover:text-white'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className={icon + ' ri-xl'}></i>
          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
            {name}
          </span>
        </div>
        < div className="flex flex-shrink-0 ml-2">
          {
            (numberNotification != null && numberNotification != undefined && numberNotification > 0) &&
            (
              <span className={`inline-flex items-center justify-center h-5 text-xs font-medium text-white ${colorNotification} px-2 rounded`}>{numberNotification}</span>
            )
          }
        </div>
      </div>
    </Link>
  )
}
