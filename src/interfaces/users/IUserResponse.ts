export interface IUserResponse {
  "id": number;
  "username": string;
  "password": string;
  "name": string;
  "lastname": string;
  "type_document_id": string;
  "user_identification_type": string;
  "code_identification_type": string;
  "number_document": string;
  "state_id": number;
  "user_state": string;
  "rol_id": number;
  "user_role": string;
  "contacts_id": number;
  "address": string[];
  "email": string[];
  "phone": string[];
  "change_password": string;
  "enabled": string;
  "user_create": string;
  "date_create": string;
  "user_update": string;
  "date_update": string;
}

type UserStatus = "invisible" | "activo" | "inactivo" | "bloqueado";