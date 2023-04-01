import { FC } from "react"
import { IApiResponse } from "@/interfaces/api";
import { IUserResponse } from "@/interfaces/users";
import { Card } from '@/components/Content';

interface Props {
  users: IApiResponse
}

export const Cards: FC<Props> = ({ users }) => {
  let rowClass = "bg-white dark:bg-gray-500 dark:text-slate-700";
  const { data: listUser, count = 0 } = users;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
      {
        count > 0
          ? (
            listUser.map((user: IUserResponse) => {
              const { id } = user;
              rowClass = (rowClass === 'bg-gray-100 dark:bg-gray-700') ? 'bg-white dark:bg-gray-500 dark:text-slate-700' : 'bg-gray-100 dark:bg-gray-700';

              return (
                <div key={id} className={`${rowClass} p-4 rounded-lg shadow`}>
                  <Card user={user} />
                </div>
              )
            })
          )
          : (
            <span className="w-full bg-dark p-2 text-center text-white text-bold">
              No hay Información
            </span>
          )
      }
    </div>
  )
} 