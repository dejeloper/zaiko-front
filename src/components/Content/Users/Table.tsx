import { FC } from "react";
import { IApiResponse } from "@/interfaces/api";
import { IUserResponse } from '@/interfaces/users/';
import { BadgeState } from '@/components/Content';

interface Props {
  users: IApiResponse
}

export const Table: FC<Props> = ({ users }) => {
  let rowClass = "bg-white dark:bg-gray-400 dark:text-slate-700";
  const { data: listUser, count = 0 } = users;

  return (
    <div className="overflow-x-auto rounded-lg shadow hidden md:block bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
      <table className="w-full">
        <thead className='border-b border-gray-200'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>Usuario</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>Nombre</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>Rol</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>Estado</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>Contacto</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>Opciones</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {
            count > 0
              ? (
                listUser.map((user: IUserResponse) => {
                  const { id, username, name, lastname, user_state, user_role, phone } = user;
                  rowClass = (rowClass === 'bg-gray-100 dark:bg-gray-700') ? 'bg-white dark:bg-gray-400 dark:text-slate-700' : 'bg-gray-100 dark:bg-gray-700';

                  return (
                    <tr key={id} className={rowClass}>
                      <td className='p-3 text-sm'>
                        <span className='p-1.5 text-xs font-medium tracking-wider'>{username}</span>
                      </td>
                      <td className='p-3 text-sm'>
                        <span className='p-1.5 text-xs font-medium tracking-wider'>{name}  {lastname}</span>
                      </td>
                      <td className='p-3 text-sm'>
                        <span className='p-1.5 text-xs font-medium tracking-wider'>{user_role}</span>
                      </td>
                      <td className='p-3 text-sm'>
                        <BadgeState state={user_state} />
                      </td>
                      <td className='p-3 text-sm'>
                        <span className='p-1.5 text-xs font-medium tracking-wider'>{phone[0]}</span>
                      </td>
                      <td className='p-3 text-sm'>
                        <div>Opciones</div>
                      </td>
                    </tr>
                  )
                })
              )
              : (
                <tr>
                  <td colSpan={6} className="w-full bg-dark p-2 text-center text-white text-bold">
                    No hay Información
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  );
}
