import useSWR, { SWRConfiguration } from 'swr';
import { IApiResponse } from '@/interfaces/api';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUsers = (url: string, config: SWRConfiguration = {}) => {
  // const { data, error, isLoading } = useSWR<IApiResponse>(`/api${url}`, fetcher, config);
  const { data, error, isLoading } = useSWR<IApiResponse>(`/api${url}`, config);

  return {
    data,
    isLoading,
    error
  }

}



