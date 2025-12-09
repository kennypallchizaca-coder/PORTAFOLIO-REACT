# Portafolio React

Este repositorio contiene un portafolio personal construido con React y TypeScript. El frontend vive en `portafolio-alx/` y el archivo `server.ts` incluye un ejemplo sencillo de endpoint para el formulario de contacto.

## Estructura
- `portafolio-alx/`: aplicación React con secciones de banner, habilidades, proyectos y formulario de contacto.
- `portfolio-angular/`: versión Angular 17 con componentes standalone, ruteo básico y una primera maqueta del portafolio lista para continuar la migración.
- `server.ts`: boceto de servidor Express para enrutar envíos del formulario mediante Nodemailer.

## Cómo ejecutar el frontend (React)
1. Instala dependencias: `cd portafolio-alx && npm install`.
2. Levanta el proyecto: `npm start`.
3. Ejecuta las pruebas de CRA cuando las necesites: `npm test -- --watch=false`.

## Cómo ejecutar el frontend (Angular)
1. Instala dependencias: `cd portfolio-angular && npm install`.
2. Inicia el servidor de desarrollo: `npm start`.
3. Genera una build de producción: `npm run build` (salida en `dist/portfolio-angular`).

El formulario de contacto Angular envía la información a `http://localhost:5000/contact`, por lo que es conveniente tener el servidor Express en marcha mientras desarrollas.

## Notas sobre el backend
El archivo `server.ts` no se ejecuta automáticamente; requiere un transporte SMTP configurado mediante las variables `EMAIL_USER` y `EMAIL_PASS` antes de enviarse correos. Si deseas usarlo, instala las dependencias en la raíz y compílalo o ejecútalo con tu herramienta preferida de TypeScript (por ejemplo, `ts-node`).

Para probar el flujo completo con el frontend Angular o React:

1. Instala dependencias backend en la raíz: `npm install`.
2. Define `EMAIL_USER` y `EMAIL_PASS` (por ejemplo mediante un archivo `.env` o exportando variables en tu shell).
3. Ejecuta `npx ts-node server.ts` y verifica en consola el mensaje `Ready to Send`.

## Lineamientos del proyecto integrador
La documentación del proyecto integrador solicitado por la asignatura está detallada en [PROYECTO_INTEGRADOR.md](./PROYECTO_INTEGRADOR.md), incluyendo el objetivo, roles, funcionalidades requeridas (autenticación Google/Firebase, gestión de usuarios, portafolios, asesorías), entregables y rúbrica de evaluación. El frontend ahora incluye:

- Cambiador de rol (Administrador, Programador, Usuario) para validar flujos.
- Panel de administrador para registrar programadores y disponibilidad de asesorías.
- Formularios para añadir proyectos por sección y flujo completo de solicitudes/aprobaciones de asesorías.
