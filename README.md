
# API Express con MySQL utilizando Docker y Docker Compose

Este proyecto es una API desarrollada en Express que utiliza MySQL como base de datos. La configuración del entorno de desarrollo y producción se realiza mediante Docker y Docker Compose.

## Integrantes

- Kevin Duran Martinez
- Dylan Gonzales

## Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Kevinduran09/api-express-docker.git
   cd api-express-docker
   ```

2. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
   ```env
   MYSQL_DATABASE=nombre_de_tu_base_de_datos
   MYSQL_USER=tu_usuario
   MYSQL_PASSWORD=tu_contraseña
   MYSQL_ROOT_PASSWORD=tu_contraseña_root
   MYSQL_PORT=3306
   ```

3. Construye y levanta los contenedores de Docker:
   ```sh
   docker-compose up --build
   ```

4. La API estará disponible en `http://localhost:3000`.

## Endpoints

### GET /

Devuelve un mensaje de bienvenida.

### POST /

Crea un nuevo cliente. Requiere validación de esquema.

### PUT /

Actualiza un cliente existente. Requiere validación de esquema.

### DELETE /

Elimina un cliente existente. Requiere validación de esquema.

### GET /:cedula

Obtiene un cliente por su cédula. Requiere validación de esquema.

## Estructura del Proyecto

Este proyecto esta desarrollado con una arquitectura modular, lo cual lo hace mas escalable y flexible ante cambios.
```
/src
  /clients
    client.controller.js
    client.schema.js
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
