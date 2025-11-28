# Proyecto integrador: Portafolio multiusuario con asesorías

## Objetivo
Desarrollar una aplicación web administrable y multiusuario que permita a un administrador crear cuentas de programadores y que cada programador gestione su propio portafolio con proyectos y secciones diferenciadas. El sistema integrará, además, la gestión de asesorías para que usuarios externos puedan solicitar reuniones con los programadores.

## Instrucciones del curso
1. Revisar el contenido teórico y presentaciones disponibles en el AVAC.
2. Profundizar con los libros guía, enlaces de los objetos de aprendizaje y fuentes académicas en línea.
3. Responder al enunciado en parejas.
4. Presentar un video de exposición (10 minutos) explicando la arquitectura, roles, funcionalidades y decisiones técnicas.

## Aporte de asignaturas
| Asignatura | Contenido | Aporte al proyecto |
| --- | --- | --- |
| Programación | Lógica de programación | 15% |
| Programación orientada a objetos | Lógica de programación | 15% |
| Programación aplicada | Patrones de desarrollo | 10% |
| Fundamentos de base de datos | Base de datos no relacionales | 10% |
| Programación y plataformas web | Desarrollo de aplicaciones web interactiva | 50% |

## Actividades por desarrollar
- Diseñar e implementar el portafolio administrable usando **Angular** como framework base.
- Integrar **Firebase** para autenticación (Google) y despliegue (Hosting).
- Publicar el frontend en Firebase Hosting con URL pública.

## Especificaciones funcionales
### 1. Autenticación y roles
- Inicio de sesión con cuenta de Google mediante Firebase Authentication.
- Roles:
  - **Administrador**: crear, editar o eliminar cuentas de programadores.
  - **Programador**: accede a su portafolio individual y gestiona sus proyectos.
  - **Usuario normal (externo)**: explora portafolios y solicita asesorías.

### 2. Gestión de usuarios
- El administrador registra y gestiona usuarios programadores.
- Cada programador incluye nombre, especialidad, descripción breve, foto de perfil, enlaces de contacto y redes sociales.

### 3. Gestión de portafolios y proyectos
- Cada programador tiene un portafolio propio.
- Secciones de proyectos:
  - **Proyectos académicos** (actividades de clase).
  - **Proyectos laborales** (profesionales o simulados).
- Cada proyecto debe incluir: nombre y descripción, tipo de participación (Frontend/Backend/Base de Datos), tecnologías, enlaces a repositorios y despliegues (Firebase, Vercel u otros).

### 4. Gestión de asesorías
- El administrador registra horarios de disponibilidad por programador.
- La página principal incluye un botón de **Agendar asesoría**.
- El usuario normal selecciona programador disponible, fecha, hora y comentario opcional.
- Cada programador tiene una sección de **Asesorías** para revisar solicitudes, aprobar o rechazar y dejar mensajes de confirmación o justificación.

### 5. Diseño de interfaz y prototipo
- Prototipo navegable validado con principios UX/UI.
- Interfaz responsive para escritorio y móviles.
- Diferenciación visual entre panel de administrador, portafolio del programador y vista del usuario externo.

### 6. Notificaciones
- Flujo simulado para asesorías:
  - Al enviar solicitud, el programador recibe notificación en su panel.
  - Al aprobar o rechazar, el solicitante recibe confirmación o mensaje de rechazo.
- Diseñar flujos de comunicación interna y simulación de envío externo (correo/WhatsApp).

### 7. Despliegue
- Publicación del frontend en Firebase Hosting con URL pública.
- Acceso al portafolio principal y a los portafolios individuales.

## Entregables
1. **Código fuente** en un repositorio GitHub.
2. **Prototipo funcional** con todas las vistas y flujos principales.
3. **Demo** desplegada en Firebase Hosting.
4. **Informe** con proceso de desarrollo, decisiones de diseño, desafíos, configuración y despliegue; guía de usuario para administrador y usuarios finales.
5. **Video** de presentación del proyecto.

## Rúbrica de evaluación (20 puntos sobre 60 ponderados)
- **Exposición y descripción del proyecto**: claridad de objetivos y funcionamiento (5/3/2/0).
- **Dominio del tema**: conocimiento de tecnologías (Firebase, Google Auth, etc.) y respuestas (5/3/2/0).
- **Prototipo e interfaz**: diseño intuitivo y usabilidad (5/3/2/0).
- **Funcionalidades del sistema**: autenticación, roles, gestión de usuarios, proyectos y asesorías (30/20/10/0).
- **Publicación y accesibilidad**: despliegue en Firebase Hosting y buenas prácticas de SEO inicial (5/3/2/0).
- **Calidad del código y documentación**: estructura, comentarios y buenas prácticas (5/3/2/0).
- **Informe y presentación**: claridad del informe y presentación profesional (5/3/2/0).

## Resultados esperados
Comprender el proceso de diseñar una aplicación web centrada en el usuario.

## Conclusiones
Los estudiantes diseñan y desarrollan una aplicación web interactiva con principios de usabilidad y centrada en el usuario.

## Recomendaciones
- Revisar la información proporcionada por el docente antes de la práctica.
- Asistir a las sesiones de clase.
- Consultar al docente las dudas que surjan durante la práctica.
