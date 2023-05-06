import { IApiResponse } from "@/interfaces/api";
import { IUser } from "@/interfaces/users";

export const createNewUser = async (dataUser: IUser): Promise<IApiResponse> => {
  const API = '/api/users';
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify(dataUser);

  try {
    const response = await fetch(API, { method, headers, body });
    const { states, code, message, count, data } = await response.json();
    const apiResponse: IApiResponse = {
      data,
      states,
      message,
      code,
      count,
    };
    return apiResponse;
  } catch (error) {
    const apiResponse: IApiResponse = {
      data: [],
      states: true,
      message: "",
      code: 0,
      count: 0,
    };
    console.error('Error creating user:', error);
    return apiResponse;
  }
}