export interface IUserContacts {
  id?: number;
  address: string[];
  email: string[];
  phone: string[];
  user_create?: string;
  date_create?: Date;
  user_update?: string;
  date_update?: Date;
}