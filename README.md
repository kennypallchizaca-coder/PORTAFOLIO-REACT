# Portafolio React

Este repositorio contiene un portafolio personal construido con React y TypeScript. El frontend vive en `portafolio-alx/` y el archivo `server.ts` incluye un ejemplo sencillo de endpoint para el formulario de contacto.

## Estructura
- `portafolio-alx/`: aplicación React con secciones de banner, habilidades, proyectos y formulario de contacto.
- `server.ts`: boceto de servidor Express para enrutar envíos del formulario mediante Nodemailer.

## Cómo ejecutar el frontend
1. Instala dependencias: `cd portafolio-alx && npm install`.
2. Levanta el proyecto: `npm start`.
3. Ejecuta las pruebas de CRA cuando las necesites: `npm test -- --watch=false`.

## Notas sobre el backend
El archivo `server.ts` no se ejecuta automáticamente; requiere un transporte SMTP configurado mediante las variables `EMAIL_USER` y `EMAIL_PASS` antes de enviarse correos. Si deseas usarlo, instala las dependencias en la raíz y compílalo o ejecútalo con tu herramienta preferida de TypeScript (por ejemplo, `ts-node`).

## Lineamientos del proyecto integrador
La documentación del proyecto integrador solicitado por la asignatura está detallada en [PROYECTO_INTEGRADOR.md](./PROYECTO_INTEGRADOR.md), incluyendo el objetivo, roles, funcionalidades requeridas (autenticación Google/Firebase, gestión de usuarios, portafolios, asesorías), entregables y rúbrica de evaluación. El frontend ahora incluye:

- Cambiador de rol (Administrador, Programador, Usuario) para validar flujos.
- Panel de administrador para registrar programadores y disponibilidad de asesorías.
- Formularios para añadir proyectos por sección y flujo completo de solicitudes/aprobaciones de asesorías.
