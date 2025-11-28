# Portafolio multiusuario (React)

Aplicación React en español con secciones listas para el proyecto integrador: autenticación por rol (mock), portafolios individuales para programadores, flujos de asesoría y portafolio público con categorías Académico/Laboral.

## Tecnologías y enfoque
- Create React App con TypeScript
- Componentes funcionales con estado local y hooks
- Estilos personalizados en `App.css` y uso de SVG/PNG alojados en `src/assets`
- Datos simulados para programadores, disponibilidad y proyectos (ver `src/data/`)

## Ejecutar en desarrollo
```bash
cd portafolio-alx
npm install
npm start
```
La app abre en [http://localhost:3000](http://localhost:3000) con recarga en caliente.

## Pruebas y build
- `npm test -- --watch=false`: ejecuta las pruebas de Create React App una sola vez.
- `npm run build`: genera los assets optimizados en `build/`.

## Funcionalidades destacadas
- **Roles:** selector de rol activo (Administrador/Programador/Usuario) para validar permisos y flujos.
- **Panel Admin:** alta de programadores con enlaces y disponibilidad; métricas de proyectos y asesorías.
- **Portafolios:** selector de programador con proyectos separados por secciones Académico y Laboral; formulario para registrar nuevos proyectos según el rol.
- **Asesorías:** formulario para solicitar asesoría, horarios por programador y panel para aprobar/rechazar solicitudes (estado global en contexto).
- **Proyectos:** tarjetas con participación, tecnologías, repositorio y demo, agrupadas por categoría.
- **Contacto:** formulario listo para conectarse a un backend; puedes usar `../server.ts` con Nodemailer configurando `EMAIL_USER` y `EMAIL_PASS`.
