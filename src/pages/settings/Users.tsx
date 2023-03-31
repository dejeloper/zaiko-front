import { AppLayout } from "@/components/Layouts";
import { TableUser, CardsUser } from '@/components/Content';
import { useUsers } from '../../hooks';

const Users = () => {
  const { data, isLoading, error } = useUsers('/users');
  return (
    <AppLayout title="Zaiko - Usuarios">
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h1 className="font-semibold text-slate-800 text-2xl">Usuarios</h1>
        </header>
        <div className="p-3">
          {
            isLoading
              ? (
                <p className="w-full bg-dark p-2 text-center text-white text-bold">
                  Cargando información...
                </p>
              )
              : !data
                ? (
                  <p className="w-full bg-dark p-2 text-center text-white text-bold">
                    No hay Información
                  </p>
                )
                : (
                  <>
                    <TableUser users={data} />
                    <CardsUser users={data} />
                  </>
                )
          }
        </div>
      </div >
    </AppLayout >
  )
}

export default Users;