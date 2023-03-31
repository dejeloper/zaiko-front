import Link from "next/link"

interface Props {
  name: string;
  url: string;
  isActive?: boolean;
}

export const SidebarMenuItems: React.FC<Props> = ({ name, url, isActive = false }) => {
  return (
    <li className="mb-1 last:mb-0">
      <Link href={url} passHref className={'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')}>
        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
          {name}
        </span>
      </Link>
    </li>
  )
}
