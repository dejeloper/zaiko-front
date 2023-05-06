import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { AppLayout } from "@/components/Layouts"

import { Stepper } from "@/components/Content/Stepper"
import StepperControl from "@/components/Content/StepperControl"

const StepperUser = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Información Básica",
    "Información de Contacto",
    "Información de Contraseña",
    "Finalizar"
  ];

  const handleClick = (direction: string) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return (<><h2>Basic</h2></>)
      case 2:
        return (<><h2>Contact</h2></>)
      case 3:
        return (<><h2>Pass</h2></>)
      case 4:
        return (<><h2>Save</h2></>)
      default:
    }
  }

  return (
    <AppLayout title="Zaiko - Stepper Usuarios">
      <div className="col-span-full xl:col-span-6 bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 shadow-xl rounded-sm border border-none">
        <header className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
          <h1 className="font-semibold text-2xl">Crear Usuario</h1>
        </header>
        <Toaster position="top-center" />
        <div className="py-3 px-5 ">
          <div className="container mx-auto text-sm shadow-xl rounded-2xl pb-2 bg-slate-100 dark:bg-slate-600">
            <div className="container horizontal mt-5 p-3">
              <Stepper steps={steps} currentStep={currentStep} />
            </div>
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default StepperUser;