import { NextApiRequest, NextApiResponse } from 'next';
import { IApiResponse } from '@/interfaces/api';
import { conn } from '@/database/database';
import { IUser } from '@/interfaces/users';

let responseError: IApiResponse = {
  states: false,
  code: 403,
  message: "Error: La petición es incorrecta. (Bad Request)",
  count: 0,
  data: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<IApiResponse>) => {

  const { body, method, query } = req;
  const id: string = query.id as string;

  switch (method) {
    case 'GET':
      {
        const response = await getUsersById(id);
        return res.status(response.code).json(response)
      }
    case 'PUT':
      {
        const response = await updateOne(id, body);
        return res.status(response.code).json(response);
      }
    case 'DELETE':
      {
        const response = await getUsersById(id);
        return res.status(response.code).json(response)
      }

    default:
      return res.status(responseError.code).json(responseError)
  }
}

const getUsersById = async (id: string): Promise<IApiResponse> => {
  const query = `SELECT * FROM v_users_all WHERE id = $1`;
  const values = [id];

  try {
    const { rows } = await conn.query(query, values);

    if (rows.length === 0) {
      responseError.message = "No se encontró el usuario";
      responseError.code = 404;

      return responseError;
    }

    const response: IApiResponse = {
      states: true,
      code: 200,
      message: 'Búsqueda Exitosa',
      count: rows.length,
      data: rows,
    };

    return response;

  } catch (error: any) {
    responseError.code = 500;
    responseError.message = `Error: ${error.detail}`;

    return responseError;
  }
}

const updateOne = async (id: string, body: IUser) => {
  const { name, lastname, state_id, rol_id, change_password, enabled, user_update } = body;
  const query = `UPDATE users SET name = $1, lastname = $2, state_id = $3, rol_id = $4, change_password = $5, enabled = $6, user_update = $7, date_update = NOW() WHERE id = $8 RETURNING *`;
  const values = [name, lastname, state_id, rol_id, change_password, enabled, user_update, id];

  try {
    const { rows, rowCount } = await conn.query(query, values);

    if (rowCount === 0) {
      responseError.message = "No se encontró el usuario";
      responseError.code = 404;

      return responseError;
    }

    const response: IApiResponse = {
      states: true,
      code: 200,
      message: 'Update Exitosa',
      count: rows.length,
      data: rows,
    };

    return response;

  } catch (error: any) {
    responseError.code = 500;
    responseError.message = `Error: ${error.detail}`;

    return responseError;
  }

}


const deleteById = async (id: string): Promise<IApiResponse> => {

  const query = `DELETE * FROM users WHERE id = $1 RETURNING *`;
  const values = [id];

  try {
    const { rows, rowCount } = await conn.query(query, values);

    if (rowCount === 0) {
      responseError.code = 404;
      responseError.message = "No se encontró el usuario";

      return responseError;
    }

    const response: IApiResponse = {
      states: true,
      code: 200,
      message: 'Eliminación Exitosa',
      count: rows.length,
      data: rows,
    };

    return response;

  } catch (error: any) {
    responseError.code = 500;
    responseError.message = `Error: ${error.detail}`;

    return responseError;
  }
}