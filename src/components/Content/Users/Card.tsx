import { FC } from 'react';
import Image from 'next/image'
import { IUserResponse } from '@/interfaces/users';
import Image01 from '@/images/user-jhonatan.jpg';
import { BadgeState } from '@/components/Content';

interface Props {
  user: IUserResponse;
}

export const Card: FC<Props> = ({ user }) => {
  const { username, name, lastname, user_state, user_role, email, phone } = user;

  return (
    <div className="flex flex-col items-center p-4 rounded-md shadow-sm transition ease-in-out duration-200 hover:shadow-lg">
      <Image className="rounded-full mx-auto" width={64} height={64} src={Image01} alt={username} title={username} />
      <div className="flex flex-col">
        <h2 className="text-lg font-bold mb-1 mx-auto p-1.5 uppercase tracking-wider">{username}</h2>
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-2 p-1.5 uppercase tracking-wider">
          <span className="text-gray-400 dark:text-gray-100 mr-2">Nombre:</span>
          {name}  {lastname}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-2 p-1.5 uppercase tracking-wider">
          <span className="text-gray-400 dark:text-gray-100 mr-2">Rol:</span>
          {user_role}
        </p>
        <BadgeState state={user_state} />
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-2 p-1.5 uppercase tracking-wider">
          <span className="text-gray-400 dark:text-gray-100 mr-2">Email:</span>
          {email[0]}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-2 p-1.5 uppercase tracking-wider">
          <span className="text-gray-400 dark:text-gray-100 mr-2">Teléfono:</span>
          {phone[0]}
        </p>
      </div>
      <div className="mt-auto flex justify-center w-full">

      </div>
    </div>
  )
}
