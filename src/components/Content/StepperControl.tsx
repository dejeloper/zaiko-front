import { FC } from "react";

interface Props {
  handleClick: (step: string) => void;
  steps: string[];
  currentStep: number;
}

const StepperControl: FC<Props> = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-around mt-14 mb-6'>
      <button
        onClick={() => handleClick("back")}
        className={`bg-white text-slate-500 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
        Atrás
      </button>
      <button
        onClick={() => handleClick("next")}
        className={`bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === steps.length ? "opacity-50 cursor-not-allowed" : ""}`}>
        {currentStep >= steps.length - 1 ? "Confirmar" : "Siguiente"}
      </button>
    </div>
  )
}

export default StepperControl