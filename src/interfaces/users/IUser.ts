export interface IUser {
  id?: number;
  username: string;
  password: string;
  name: string;
  lastname: string;
  number_document: string;
  type_document_id: number;
  state_id: number;
  rol_id: number;
  change_password?: boolean;
  enabled?: boolean;
  user_create?: string;
  date_create?: Date;
  user_update?: string;
  date_update?: Date;
  complements_user?: IUserComplement;
}

export interface IUserComplement {
  address?: string[];
  email?: string[];
  phone?: string[];
}