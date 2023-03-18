import { AppLayout } from "@/components/Layouts"
import { WelcomeBanner } from "@/components/dashboard";

const Home = () => {
  return (
    <AppLayout title="Zaiko - Inicio">
      <WelcomeBanner title="Bienvenido a Zaiko" subtitle="La plataforma que necesitaba para digitalizar su negocio" />
      <h1 className="text-3xl font-bold underline">
        Home
      </h1>
    </AppLayout>
  )
}

export default Home;