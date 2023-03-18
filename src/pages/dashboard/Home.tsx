import { AppLayout } from "@/components/Layouts"
import { WelcomeBanner } from "@/components/dashboard";

const Home = () => {
  return (
    <AppLayout>
      <WelcomeBanner title="Bienvenido" subtitle="Este es Saiko" />
      <h1 className="text-3xl font-bold underline">
        Home
      </h1>
    </AppLayout>
  )
}

export default Home;