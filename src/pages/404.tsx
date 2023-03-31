import { ErrorLayout } from '../components/Layouts';

const Custom404 = () => {
  return (
    <ErrorLayout title='Página no Encontrada' pageDescription='No hay nada que mostrar en esta página'>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center" style={{ height: 'calc(100vh - 128px)' }}>
          <span className="text-light text-3xl">Error 404</span>
          <span className="hidden md:block text-light text-3xl mx-1">|</span>
          <span className="text-light">No se encontró la página</span>
        </div>
      </div>
    </ErrorLayout>
  )
}

export default Custom404;