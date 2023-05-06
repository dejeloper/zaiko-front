import toast from "react-hot-toast";

export const toastSuccess = (message: string) => {
  toast.success(message, {
    style: {
      border: '1px solid #1abc9c',
      padding: '16px',
      color: '#088f74',
      background: '#92e9d8'
    },
  });
}

export const toastError = (message: string) => {
  toast.error(message, {
    style: {
      border: '1px solid #dc3545',
      padding: '16px',
      color: '#dc3545',
      background: '#ff97a0'
    },
  });
}