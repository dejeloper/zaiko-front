
export const FullScreenLoading = () => {
  return (
    <div className="flex justify-center items-center bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
      <div className="flex flex-col md:flex-row justify-center items-center" style={{ height: 'calc(100vh - 128px)' }}>
        <span className=" text-3xl">Cargando...</span>
      </div>
    </div>
  )
}
