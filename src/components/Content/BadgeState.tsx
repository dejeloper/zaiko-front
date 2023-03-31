import { FC } from 'react';

interface Props {
  state: string;
}

export const BadgeState: FC<Props> = ({ state }) => {
  return (
    <>
      {
        state === 'Activo'
          ? <span className={`badge bg-success text-successText`}>{state}</span>
          : state === 'Bloqueado'
            ? <span className={`badge bg-danger text-dangerText`}>{state}</span>
            : state === 'Inactivo'
              ? <span className={`badge bg-warning text-warningText`}>{state}</span>
              : <span className={`badge bg-light text-lightText`}>{state}</span>
      }
    </>
  )
}