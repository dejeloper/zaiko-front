import { AppLayout } from "@/components/Layouts";
import { Table, Cards } from '@/components/Content';
import { useUsers } from '@/hooks';
import { FullScreenLoading } from "@/components/ui";

const Users = () => {
  const { data, isLoading, error } = useUsers('/users');
  return (
    <AppLayout title="Zaiko - Usuarios">
      <div className="col-span-full xl:col-span-6 bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 shadow-xl rounded-sm border border-none">
        <header className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
          <h1 className="font-semibold text-2xl">Usuarios</h1>
        </header>
        <div className="p-3">
          {
            isLoading
              ? (
                <FullScreenLoading />
              )
              : !data
                ? (
                  <p className="w-full first-letter:p-2 text-center text-white text-bold">
                    No hay información
                  </p>
                )
                : (
                  <>
                    <Table users={data} />
                    <Cards users={data} />
                  </>
                )
          }
        </div>
      </div >
    </AppLayout >
  )
}

export default Users;