import { ErrorLayout } from '../components/Layouts';

const Custom404 = () => {
  return (
    <ErrorLayout title='Página no Encontrada' pageDescription='No hay nada que mostrar en esta página'>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center" style={{ height: 'calc(100vh - 128px)' }}>
          <span className="text-slate-500 hover:text-slate-600 dark:text-slate-300 text-3xl">Error 404</span>
          <span className="hidden md:block text-slate-500 hover:text-slate-600 dark:text-slate-300 text-3xl mx-1">|</span>
          <span className="text-slate-500 hover:text-slate-600 dark:text-slate-300">No se encontró la página</span>
        </div>
      </div>
    </ErrorLayout>
  )
}

export default Custom404;