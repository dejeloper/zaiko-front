export interface IApiResponse {
  states: boolean;
  message: string;
  code: number;
  count?: number;
  data: [];
}