-- Estructura

CREATE TABLE public.roles (
	"id" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"name" varchar NOT NULL,
	"enabled" bool NOT NULL DEFAULT true,
	"user_create" varchar NULL DEFAULT 'Admin'::text,
	"date_create" timestamp NULL DEFAULT now(),
	"user_update" varchar NULL,
	"date_update" timestamp NULL,
	CONSTRAINT roles_name_key UNIQUE ("name"),
	CONSTRAINT roles_pkey PRIMARY KEY ("id")
); 

CREATE TABLE public.user_states (
	"id" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"name" varchar NOT NULL,
	"enabled" bool NOT NULL DEFAULT true,
	"user_create" varchar NULL DEFAULT 'Admin'::text,
	"date_create" timestamp NULL DEFAULT now(),
	"user_update" varchar NULL,
	"date_update" timestamp NULL,
	CONSTRAINT user_states_name_key UNIQUE ("name"),
	CONSTRAINT user_states_pkey PRIMARY KEY ("id")
); 

CREATE TABLE public.identification_types (
	"id" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"name" varchar NOT NULL,
	"code" varchar NOT NULL,
	"enabled" bool NOT NULL DEFAULT true,
	"user_create" varchar NULL DEFAULT 'Admin'::text,
	"date_create" timestamp NULL DEFAULT now(),
	"user_update" varchar NULL,
	"date_update" timestamp NULL,
	CONSTRAINT identification_types_name_key UNIQUE ("name"),
	CONSTRAINT identification_types_code_key UNIQUE ("code"),
	CONSTRAINT identification_types_pkey PRIMARY KEY ("id")
); 

CREATE TABLE public.users (
	"id" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	"name" varchar NOT NULL,
	"lastname" varchar NOT NULL,
	"number_document" varchar NOT NULL,
	"type_document_id" int8 NOT NULL,
	"state_id" int8 NOT NULL,
	"rol_id" int8 NOT NULL,
	"change_password" bool NOT NULL DEFAULT true,
	"enabled" bool NOT NULL DEFAULT true,
	"user_create" varchar NULL DEFAULT 'Admin'::text,
	"date_create" timestamp NULL DEFAULT now(),
	"user_update" varchar NULL,
	"date_update" timestamp NULL,
	CONSTRAINT users_pkey PRIMARY KEY ("id"),
	CONSTRAINT users_username_key UNIQUE ("username"),
	CONSTRAINT users_number_document_key UNIQUE ("number_document"),
	CONSTRAINT users_rol_id_fkey FOREIGN KEY ("rol_id") 
	REFERENCES public.roles("id"),
	CONSTRAINT users_state_id_fkey FOREIGN KEY ("state_id") 
	REFERENCES public.user_states("id"),
	CONSTRAINT users_type_document_id_fkey FOREIGN KEY ("type_document_id") 
	REFERENCES public.identification_types("id")
); 




--Datos

INSERT INTO public.roles ("name") values
('Desarrollador'),
('Administrador'),
('Gestor'),
('Empleado'),
('Temporal');

INSERT INTO public.user_states ("name") values
('Invisible'),
('Activo'),
('Inactivo'),
('Bloqueado');

INSERT INTO public.identification_types ("name", "code") values
('Cédula de Ciudadanía', 'CC'),
('Cédula de Extranjería', 'CE'),
('Pasaporte', 'PA'),
('Tajeta de Identidad', 'TI'),
('Registro Civil', 'RC'); 

TRUNCATE TABLE public.users RESTART IDENTITY;

INSERT INTO public.users ("username", "password", "name", "lastname", "number_document", "type_document_id", "state_id", "rol_id") VALUES
('Admin1', '11111111', 'Jhonatan', 'Guerrero', '11111111', 1, 1, 1),
('Admin2', '22222222', 'Camilo', 'Murcia', '22222222', 1, 1, 1),
('Admin3', '33333333', 'Anny', 'Sanchez', '33333333', 1, 1, 1);

--Vistas

CREATE VIEW v_users_all AS 
select u."id", u."username", u."password", u."name", u."lastname", u."type_document_id", it."name" as "user_identification_type", it."code" as "code_identification_type", u."number_document", u."state_id", us."name" as "user_state", u."rol_id", r."name" as "user_role", u."change_password", (case when u."enabled" = true then 'Activo' else 'Inactivo' end) as "enabled", u."user_create", u."date_create", u."user_update", u."date_update" FROM users u 
inner join identification_types it on it.id = u.type_document_id
inner join user_states us on us.id = u.state_id 
inner join roles r on r.id = u.rol_id



