import { NextApiRequest, NextApiResponse } from 'next';
import { IApiResponse } from '@/interfaces/api';
import { IUser } from '@/interfaces/users';
import { conn } from '@/database/database';

let responseError: IApiResponse = {
  states: false,
  code: 403,
  message: "Error: La petición es incorrecta. (Bad Request)",
  count: 0,
  data: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<IApiResponse>) => {

  const { body, method } = req;

  switch (method) {
    case 'GET':
      try {
        const response = await getAllUsers();
        return res.status(response.code).json(response)

      } catch (error: any) {
        responseError.code = 500;
        responseError.message = `Error al consultar todos los usuario. ${error.message}`;
        return responseError;
      }

    case 'POST':
      try {
        const response = await insertOne(body);
        return res.status(response.code).json(response);
      } catch (error: any) {
        responseError.code = 500;
        responseError.message = `Error al crear el usuario nuevo. ${error.message}`;
        return responseError;
      }

    default:
      {
        responseError.code = 403;
        responseError.message = "Error: La petición es incorrecta. (Bad Request)";

        return res.status(responseError.code).json(responseError)
      }
  }
}

const getAllUsers = async (): Promise<IApiResponse> => {

  const query = `SELECT * FROM v_users_all ORDER BY id`;

  try {
    const { rows } = await conn.query(query);

    const response: IApiResponse = {
      states: true,
      code: 200,
      message: 'Búsqueda Exitosa',
      count: rows.length,
      data: rows,
    };

    return response;

  } catch (error: any) {
    const response: IApiResponse = {
      states: false,
      code: 403,
      message: `Error: ${error.detail}`,
      count: 0,
      data: [],
    }

    return response;
  }
}

const insertOne = async (body: IUser): Promise<IApiResponse> => {
  const { username, password, name, lastname, number_document, type_document_id, state_id, rol_id, contacts } = body;
  const { address, email, phone } = contacts || {};

  const queryContacts = `INSERT INTO public.user_contacts ("address", "email", "phone") values ($1, $2, $3) RETURNING id`;
  const valuesContacts = [JSON.stringify(address), JSON.stringify(email), JSON.stringify(phone)];

  try {
    const { rows } = await conn.query(queryContacts, valuesContacts);

    if (rows.length !== 1) {
      return {
        states: false,
        code: 403,
        message: 'Error: No se pudo guardar los datos de contacto del usuario, intentelo nuevamente',
        count: 0,
        data: [],
      };
    }

    const user_contacts = rows[0].id;

    const query = `INSERT INTO public.users ("username", "password", "name", "lastname", "number_document", "type_document_id", "state_id", "rol_id", "contacts_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    const values = [username, password, name, lastname, number_document, type_document_id, state_id, rol_id, user_contacts];

    try {
      const { rows } = await conn.query(query, values);

      if (rows.length <= 0) {
        return {
          states: false,
          code: 403,
          message: `Error: No se guardó el usuario, intentelo nuevamente`,
          count: 0,
          data: [],
        }
      }

      return {
        states: true,
        code: 201,
        message: 'Creación Exitosa',
        count: rows.length,
        data: rows,
      };
    } catch (error: any) {
      return {
        states: false,
        code: 403,
        message: `Error: ${error.detail}`,
        count: 0,
        data: [],
      }
    }

  } catch (error: any) {
    return {
      states: false,
      code: 403,
      message: `Error: ${error.detail}`,
      count: 0,
      data: [],
    }
  }
}