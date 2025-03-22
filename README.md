# Proyecto en Angular 18 para el sistema "SAPIENS"

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.1.4.

## Requerimientos

Para ejecutar este proyecto, asegúrate de tener instaladas las siguientes versiones:

- Node.js: 20.16.0
- Angular: 18.1.0

## Instalación

- Clonar el repositorio:
   `git clone https://apoteca.udenar.edu.co:82/jvela/proyecto_angular_18.git`
   
- Instalar las dependencias del proyecto:
   `cd proyecto_angular_18` y `npm install`

## Edición

### Modificar los archivos
- Elimina el archivo `.git`
- En el archivo `.gitignore` descomenta la ruta del archivo `config.ts`.

## Configuración

### Configurar rutas en el archivo `config.ts`
- Asigna la ruta del servidor.
- Define el `modulo_id` del proyecto.

### Asignar permisos en la base de datos
- Crea los módulos y submódulos en la tabla `segur_nivel`.
- Asigna los módulos al usuario correspondiente.

### Agregar rutas en los archivos de routing
- En `app-routing.module.ts`, agrega las rutas del proyecto.
- En `j-layout.routing.ts`, agrega las rutas adicionales si es necesario.