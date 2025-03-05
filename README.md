# API Express con MySQL utilizando Docker y Docker Compose

Este proyecto es una API desarrollada en Express que utiliza MySQL como base de datos. La configuración del entorno de desarrollo y producción se realiza mediante Docker y Docker Compose.

## Integrantes

- Kevin Duran Martinez
- Dylan Gonzalez Perez

## Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Kevinduran09/api-express-docker.git
   cd api-express-docker
   ```

2. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
   ```env
   PORT=3000
   MYSQL_HOST=localhost
   MYSQL_DATABASE=api-express
   MYSQL_USER=apiexpress
   MYSQL_PASSWORD=apiexpress
   MYSQL_ROOT_PASSWORD=root
   MYSQL_PORT=3306
   DATABASE_URL="mysql://apiexpress:apiexpress@localhost:3306/api-express"
   ```

3. Construye y levanta los contenedores de Docker:
   ```sh
   npm run doup
   ```
4. Instala las dependencias del proyecto:
   ```sh
   npm install
   ```

5. Ejecuta las migraciones de Prisma para configurar la base de datos:
   ```sh
   npm run migrate
   ```

7. La API estará disponible en `http://localhost:3000`.

## Scripts Personalizados

- `npm run start`: Inicia el servidor.
- `npm run dev`: Inicia el servidor con `--watch` para recargar automáticamente los cambios.
- `npm run doup`: Construye y levanta los contenedores de Docker.
- `npm run down`: Detiene y elimina los contenedores de Docker.
- `npm run migrate`: Ejecuta las migraciones de Prisma.

## Endpoints

### Clientes

#### GET ``api/clients/``

Obtiene todos los clientes.

#### POST ``api/clients/``

Crea un nuevo cliente. Requiere validación de esquema.

**Ejemplo del cuerpo de la solicitud**
````
{
  "name":"kevin",
  "lastname":"duran",
  "email":"kevin@gmail.com",
  "cedula":"504400330"
}
````

#### PUT ``api/clients/``

Actualiza un cliente existente. Requiere validación de esquema.

**Ejemplo del cuerpo de la solicitud**
````
{
  "name":"kevin Andrey",
  "cedula":"504400330"
}
````
#### DELETE ``api/clients/:cedula``

Elimina un cliente existente. Requiere validación de esquema.

**Ejemplo del endpoint**

````
api/clients/504400330
````

#### GET ``api/clients/:cedula``

Obtiene un cliente por su cédula. Requiere validación de esquema.

**Ejemplo del endpoint**

````
api/clients/504400330
````

### Actividades

#### GET ``api/activities/``

Obtiene todas las actividades.

#### POST ``api/activities/``

Crea una nueva actividad. Requiere validación de esquema.

**Ejemplo del cuerpo de la solicitud**
````
{
  "name":"canopy",
  "clientCed":"504400330",
  "date":"2025-03-20T10:10:00Z",
  "coste":15000,
  "description":"altura 100 metros"
}
````

#### PUT ``api/activities/``

Actualiza una actividad existente. Requiere validación de esquema.

**Ejemplo del cuerpo de la solicitud**
````
{
  "code":"codigo de la actividad"
  "name":"canopy in the rive",
}
````

#### DELETE ``api/activities/:code``

Elimina una actividad existente. Requiere validación de esquema.

**Ejemplo del endpoint**

````
api/activities/codigo_de_actividad
````

#### GET ``api/activities/:code``

Obtiene una actividad por su codigo. Requiere validación de esquema.

**Ejemplo del endpoint**

````
api/activities/codigo_de_actividsd
````

## Estructura del Proyecto

Este proyecto está desarrollado con una arquitectura modular, lo cual lo hace más escalable y flexible ante cambios, implementa Prisma como ORM para agilizar el proceso de la conexión a la base de datos y los métodos CRUD.

La validación de los datos recibidos en cada solicitud se realiza implementando un middleware en cada endpoint, se utiliza [Zod](https://zod.dev/) la cual es una librería que facilita la validación de los datos por medio de modelos. 

```
/src
  /clients
    client.controller.js
    client.schema.js
  /activities
    activity.controller.js
    activity.schema.js
  /middlewares
    validate.js
docker-compose.yml
.env
README.md
```


