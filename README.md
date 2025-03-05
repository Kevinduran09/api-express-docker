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

6. Genera el cliente de Prisma:
   ```sh
   npx prisma generate
   ```

7. La API estará disponible en `http://localhost:3000`.

## Scripts Personalizados

- `npm run start`: Inicia el servidor.
- `npm run dev`: Inicia el servidor con `--watch` para recargar automáticamente los cambios.
- `npm run doup`: Construye y levanta los contenedores de Docker.
- `npm run down`: Detiene y elimina los contenedores de Docker.
- `npm run migrate`: Ejecuta las migraciones de Prisma.
- `npm run generate`: Genera el cliente de Prisma.

## Endpoints

### Clientes

#### GET /

Devuelve un mensaje de bienvenida.

#### POST /

Crea un nuevo cliente. Requiere validación de esquema.

#### PUT /

Actualiza un cliente existente. Requiere validación de esquema.

#### DELETE /:cedula

Elimina un cliente existente. Requiere validación de esquema.

#### GET /:cedula

Obtiene un cliente por su cédula. Requiere validación de esquema.

### Actividades

#### GET /activities

Obtiene todas las actividades.

#### POST /activities

Crea una nueva actividad. Requiere validación de esquema.

#### PUT /activities/:id

Actualiza una actividad existente. Requiere validación de esquema.

#### DELETE /activities/:id

Elimina una actividad existente. Requiere validación de esquema.

## Estructura del Proyecto

Este proyecto está desarrollado con una arquitectura modular, lo cual lo hace más escalable y flexible ante cambios.

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
.env.example
README.md
```

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
