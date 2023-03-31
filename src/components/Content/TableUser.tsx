import { FC } from "react";
import { IApiResponse } from "@/interfaces/api";
import { IUserResponse } from '../../interfaces/users/';
import { BadgeState } from "./";

interface Props {
  users: IApiResponse
}

export const TableUser: FC<Props> = ({ users }) => {
  let rowClass = "bg-white";
  const { data: listUser, count = 0 } = users;

  return (
    <div className="overflow-x-auto rounded-lg shadow hidden md:block">
      <table className="w-full">
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
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
                  rowClass = (rowClass === 'bg-gray-100') ? 'bg-white' : 'bg-gray-100';

                  return (
                    <tr key={id} className={rowClass}>
                      <td className='p-3 text-sm text-gray-700'>
                        <span>{username}</span>
                      </td>
                      <td className='p-3 text-sm text-gray-700'>
                        <span>{name}  {lastname}</span>
                      </td>
                      <td className='p-3 text-sm text-gray-700'>
                        <span className='p-1.5 text-xs font-medium uppercase tracking-wider'>{user_role}</span>
                      </td>
                      <td className='p-3 text-sm'>
                        <BadgeState state={user_state} />
                      </td>
                      <td className='p-3 text-sm text-gray-700'>
                        <span className='p-1.5 text-xs font-medium uppercase tracking-wider'>{phone[0]}</span>
                      </td>
                      <td className='p-3 text-sm text-gray-700'>
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
