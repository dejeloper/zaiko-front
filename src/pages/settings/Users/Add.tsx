import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster } from 'react-hot-toast';

import { AppLayout } from "@/components/Layouts"
import { createNewUser } from "@/services/index";
import { IUser } from "@/interfaces/users";

import { toastError, toastSuccess } from "@/utils/toast";

type PropsAddUser = {
  username: string;
  name: string;
  lastname: string;
  type_document_id: number;
  number_document: string;
  state_id: number;
  rol_id: number;
};

async function fetcher(url: string): Promise<IUser[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data as IUser[];
}

const Add = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PropsAddUser>();
  const [dataUser, setDataUser] = useState<IUser>();

  const onSubmit: SubmitHandler<PropsAddUser> = async ({ username, name, lastname, number_document, type_document_id, state_id, rol_id }) => {
    setDataUser({
      username,
      password: "",
      name,
      lastname,
      number_document,
      type_document_id,
      state_id,
      rol_id,
      contacts: {
        address: [],
        email: [],
        phone: []
      },
      enabled: true,
      user_create: 'Admin',
      date_create: new Date()
    });

    if (dataUser) {
      const { message, states } = await createNewUser(dataUser);

      if (states) {
        toastSuccess(message);
      } else {
        toastError(message);
      }
    }
  };

  return (
    <AppLayout title="Zaiko - Agregar Usuarios" titlePage="Crear Usuario">
      <div className="p-3">
        <div className="container mx-auto text-sm w-4/5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full p-4 px-5 py-2">
              <div className="sm:grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <div className="mb-1">
                    <label className="labelFormBase">
                      Usuario
                      <input className="inputFormBase" type="text" {...register("username", { required: 'El Usuario es obligatorio', minLength: { value: 4, message: 'El Usuario debe tener mínimo 4 caracteres' }, maxLength: { value: 20, message: 'El Usuario debe tener máximo 20 caracteres' } })} placeholder="Usuario" />
                      <p>{errors.username?.message}</p>
                    </label>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <label className="hidden">Separate</label>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <div className="mb-1">
                    <label className="labelFormBase">
                      Nombre
                      <input className="inputFormBase" type="text" {...register("name", { required: 'El Nombre es obligatorio', minLength: { value: 4, message: 'El Nombre debe tener mínimo 4 caracteres' }, maxLength: { value: 20, message: 'El Nombre debe tener máximo 20 caracteres' } })} placeholder="Nombre" />
                      <p>{errors.name?.message}</p>
                    </label>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <div className="mb-1">
                    <label className="labelFormBase">
                      Apellido
                      <input className="inputFormBase" type="text" {...register("lastname", { required: 'El Apellido es obligatorio', minLength: { value: 4, message: 'El Apellido debe tener mínimo 4 caracteres' }, maxLength: { value: 20, message: 'El Apellido debe tener máximo 20 caracteres' } })} placeholder="Apellido" />
                      <p>{errors.lastname?.message}</p>
                    </label>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <div className="mb-1">
                    <label className="labelFormBase">
                      Tipo de Documento
                      <select className="inputFormBase" {...register("type_document_id", { required: 'El Tipo de Documento es obligatorio' })}>
                        <option hidden value="">Tipo de Documento</option>
                        <option value="1">Cédula de Ciudadanía</option>
                        <option value="2">Cédula de Extranjería</option>
                        <option value="3">Pasaporte</option>
                        <option value="4">Tajeta de Identidad</option>
                        <option value="5">Registro Civil</option>
                      </select>
                      <p>{errors.type_document_id?.message}</p>
                    </label>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <div className="mb-1">
                    <label className="labelFormBase">
                      Número de Documento
                      <input className="inputFormBase" type="text" {...register("number_document", { required: 'El Número de Documento es obligatorio', minLength: { value: 6, message: 'El Nombre debe tener mínimo 6 caracteres' }, maxLength: { value: 15, message: 'El Nombre debe tener máximo 15 caracteres' } })} placeholder="Número de Documento" />
                      <p>{errors.number_document?.message}</p>
                    </label>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <div className="mb-1">
                    <label className="labelFormBase">
                      Estado
                      <select className="inputFormBase" {...register("state_id", { required: 'El Estado es obligatorio' })}>
                        <option hidden value="">Estado</option>
                        <option value="2">Activo</option>
                        <option value="3">Inactivo</option>
                        <option value="4">Bloqueado</option>
                      </select>
                      <p>{errors.state_id?.message}</p>
                    </label>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <div className="mb-1">
                    <label className="labelFormBase">
                      Perfil
                      <select className="inputFormBase" {...register("rol_id", { required: 'El Perfil es obligatorio' })}>
                        <option hidden value="">Perfil</option>
                        <option value="2">Administrador</option>
                        <option value="3">Gestor</option>
                        <option value="4">Empleado</option>
                        <option value="5">Temporal</option>
                      </select>
                      <p>{errors.rol_id?.message}</p>
                    </label>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-2 flex justify-end items-center gap-4">
                  <input type="submit" className="inline-flex items-center bg-successHard text-primaryText hover:bg-success font-bold py-2 px-4 rounded" value="Guardar" />
                  <input type="reset" className="inline-flex items-center bg-secondaryHard hover:bg-secondary text-primaryText   font-bold py-2 px-4 rounded" value="Limpiar" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  )
}

export default Add