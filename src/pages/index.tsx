import { AppLayout } from "@/components/Layouts";
import { WelcomeBanner } from "@/components/dashboard";

const Index = () => {
  return (
    <AppLayout>
      <WelcomeBanner title="Bienvenido a Zaiko" subtitle="La plataforma que necesitaba para digitalizar su negocio" />
      <h1 className="text-3xl font-bold underline">
        Inicio
      </h1>
    </AppLayout>
  );
}

export default Index;