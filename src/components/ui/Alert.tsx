import { FC } from "react";

interface Props {
  message: string;
  type: string;
}

export const Alert: FC<Props> = ({ message, type = 'success' }) => {
  if (type === 'success') {
    return (
      <div className="bg-successSoft text-successHard py-2 px-3 w-full border-success border">
        <span className="font-semibold">{message}</span>
      </div>
    )
  } else if (type === 'danger') {
    return (
      <div className="bg-dangerSoft text-dangerHard py-2 px-3 w-full border-danger border">
        <span className="font-semibold">{message}</span>
      </div>
    )
  } else {
    return (
      <div className="bg-successSoft text-successHard py-2 px-3 w-full border-success border">
        <span className="font-semibold">{message}</span>
      </div>
    )
  }
}