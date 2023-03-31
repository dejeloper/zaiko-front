import { FC } from "react"
import Image from "next/image";
import { IApiResponse } from "@/interfaces/api";
import { IUserResponse } from '../../interfaces/users/';
import { BadgeState } from "./";
import Image01 from '../../images/user-jhonatan.jpg';

interface Props {
  users: IApiResponse
}

export const CardsUser: FC<Props> = ({ users }) => {
  let rowClass = "bg-white";
  const { data: listUser, count = 0 } = users;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      {
        count > 0
          ? (
            listUser.map((user: IUserResponse) => {
              const { id, username, name, lastname, user_state, user_role, email, phone } = user;
              rowClass = (rowClass === 'bg-gray-100') ? 'bg-white' : 'bg-gray-100';

              return (
                <div key={id} className={`${rowClass} p-4 rounded-lg shadow`}>
                  <div className="flex flex-col items-center p-4 rounded-md shadow-sm transition ease-in-out duration-200 hover:shadow-lg">
                    <Image className="rounded-full mx-auto" width={64} height={64} src={Image01} alt={username} title={username} />
                    <div className="flex flex-col">
                      <h2 className="text-lg font-bold mb-1 mx-auto">{username}</h2>
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        <span className="text-gray-400 mr-2">Nombre:</span>
                        {name}  {lastname}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="text-gray-400 mr-2">Rol:</span>
                        {user_role}
                      </p>
                      <BadgeState state={user_state} />
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="text-gray-400 mr-2">Email:</span>
                        {email[0]}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="text-gray-400 mr-2">Teléfono:</span>
                        {phone[0]}
                      </p>
                    </div>
                    <div className="mt-auto flex justify-center w-full">
                      <button className="text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none mr-4">Editar</button>
                      <button className="text-sm font-medium text-red-600 hover:text-red-800 focus:outline-none">Eliminar</button>
                    </div>
                  </div>
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