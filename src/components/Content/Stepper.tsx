import { FC, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  steps: string[];
  currentStep: number;
}

interface IStep {
  description?: string;
  completed?: boolean;
  highlighted?: boolean;
  selected?: boolean;
}

export const Stepper: FC<Props> = ({ steps, currentStep }) => {

  const [newStep, setNewStep] = useState<IStep[]>([]);
  //const stepRef = useRef();
  const stepRef = useRef<(IStep[]) | null>(null);

  const updateStep = useCallback((stepNumber: number, steps: IStep[]): IStep[] => {
    const newSteps = [...steps];
    let count: number = 0;

    while (count < newStep.length) {
      if (count == stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlighted: true,
          selected: true
        }
        count++;
      }
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlighted: false,
          selected: true
        }
        count++;
      }
      else {
        newSteps[count] = {
          ...newSteps[count],
          completed: false,
          highlighted: false,
          selected: false
        }
        count++;
      }
    }

    return newSteps;
  }, [newStep.length]);

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      ) as IStep
    );

    stepRef.current = stepsState;

    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep, updateStep]);


  const displaySteps = newStep.map((step, index) => {
    return (
      <div key={index} className={index !== newStep.length - 1 ? " w-full flex items-center" : "flex items-center"}>
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "bg-green-600 text-white font-bold border border-green-600" : ""}`}>
              {step.completed ? (<span className="text-white font-bold text-xl">&#10003;</span>) : (index + 1)}
            </div>
            <div className={`absolute top-0 text-center mt-16 w-24 text-xs font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
              {step.description}
            </div>
          </div>
          <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"}`}>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  )
}
