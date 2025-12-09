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

## Plan de arquitectura y guía paso a paso (Angular + Firebase)

### 1. Arquitectura de módulos, rutas y colecciones
- **Front-end (Angular 17+ standalone con lazy loading)**
  - `app` (shell): layout, top bar, loading states; rutas públicas y secciones protegidas.
  - `auth` (módulo perezoso): Google Sign-In, guardas, callback de roles.
  - `admin` (perezoso): panel de administración para CRUD de programadores y horarios.
  - `programmer` (perezoso): panel personal con gestión de portafolio y solicitudes de asesoría.
  - `public` (perezoso): home, listados de programadores, detalle de portafolio y flujo de agendamiento.
  - Guards: `authGuard` (requiere login), `roleGuard` (valida `admin` o `programmer`).
  - Servicios clave: `AuthService`, `UserService`, `PortfolioService`, `ProjectService`, `ScheduleService`, `ConsultingService`, `NotificationService` (simulada en Firestore), `StorageService` (para fotos y assets opcionales).

- **Firestore (colecciones)**
  - `users` (docId = uid): { displayName, email, photoURL, role: 'admin'|'programmer'|'user', createdAt }.
  - `programmers` (docId autogenerado o uid): { name, specialty, bio, avatarUrl, links: { email, phone, github, linkedin, website }, socials: { twitter, youtube, instagram }, ownerUid (referencia a usuario auth), status }.
  - Subcolección `programmers/{id}/projects`: { name, description, category: 'academic'|'work', participation: ['frontend','backend','db'], tech: string[], repoUrl, demoUrl, featured:boolean }.
  - Subcolección `programmers/{id}/schedules`: { dayOfWeek, startTime, endTime, timezone, active }.
  - Colección `consultations`: { userUid?, userName?, programmerId, scheduleId?, requestedAt, date, time, reason, status: 'pending'|'approved'|'rejected', responseMessage?, respondedAt }.
  - Colección `notifications` (simulada): { toUid, type: 'consultationStatus'|'newConsultation', payload, read:boolean, createdAt }.
  - (Opcional) `media` en Storage: avatars y capturas de proyectos.

### 2. Estructura de carpetas propuesta (Angular)
```
src/
  app/
    core/ (servicios singleton, guards, interceptors, models)
    shared/ (componentes reutilizables, directivas, pipes)
    auth/ (módulo perezoso)
    admin/ (módulo perezoso)
    programmer/ (módulo perezoso)
    public/ (módulo perezoso)
    layouts/ (shell, sidebars, headers)
    app.config.ts (providers: router, firebase, tailwind base)
  assets/
  environments/
```

### 3. Modelo de datos (interfaces)
```ts
// src/app/core/models/user.model.ts
export type UserRole = 'admin' | 'programmer' | 'user';
export interface AppUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  role: UserRole;
  createdAt: number;
}

// src/app/core/models/programmer.model.ts
export interface ProgrammerProfile {
  id: string;
  ownerUid: string;
  name: string;
  specialty: string;
  bio: string;
  avatarUrl?: string;
  links?: { email?: string; phone?: string; github?: string; linkedin?: string; website?: string };
  socials?: { twitter?: string; youtube?: string; instagram?: string };
  status?: 'active' | 'inactive';
}

// src/app/core/models/project.model.ts
export type ProjectCategory = 'academic' | 'work';
export interface Project {
  id: string;
  programmerId: string;
  name: string;
  description: string;
  category: ProjectCategory;
  participation: Array<'frontend' | 'backend' | 'db'>;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

// src/app/core/models/consultation.model.ts
export type ConsultationStatus = 'pending' | 'approved' | 'rejected';
export interface ConsultationRequest {
  id: string;
  programmerId: string;
  userUid?: string;
  userName?: string;
  date: string; // ISO yyyy-mm-dd
  time: string; // HH:mm
  reason: string;
  status: ConsultationStatus;
  scheduleId?: string;
  requestedAt: number;
  respondedAt?: number;
  responseMessage?: string;
}
```

### 4. Comandos iniciales (puedes copiar/pegar)
```bash
# 1) Crear proyecto Angular 17 con routing standalone
global ng version # (verifica que sea 17+)
ng new integrador-portfolio --routing --style=css --standalone
cd integrador-portfolio

# 2) Instalar TailwindCSS + DaisyUI
target=node
npm install -D tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p

# 3) Instalar Firebase y AngularFire
npm install firebase @angular/fire

# 4) Crear ambientes
touch src/environments/environment.ts src/environments/environment.development.ts

# 5) Agregar librerías de formularios y iconos opcionales
npm install @angular/forms
npm install @angular/cdk
```

### 5. Configuración de Tailwind + DaisyUI
```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
```
```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

### 6. Configuración Firebase modular (copiar/pegar)
```ts
// src/environments/environment.ts (producción)
export const environment = {
  production: true,
  firebase: {
    apiKey: 'TU_API_KEY',
    authDomain: 'TU_DOMINIO.firebaseapp.com',
    projectId: 'TU_PROJECT_ID',
    storageBucket: 'TU_BUCKET.appspot.com',
    messagingSenderId: 'TU_SENDER_ID',
    appId: 'TU_APP_ID',
  },
};

// src/environments/environment.development.ts
export const environment = {
  production: false,
  firebase: { /* mismos valores o proyecto de desarrollo */ },
};
```
```ts
// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
```

### 7. Rutas base con lazy loading
```ts
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.routes').then(m => m.PUBLIC_ROUTES) },
  { path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard('admin')],
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
  {
    path: 'programmer',
    canActivate: [authGuard, roleGuard('programmer')],
    loadChildren: () => import('./programmer/programmer.routes').then(m => m.PROGRAMMER_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
```

### 8. Guards y servicios base (copiar/pegar)
```ts
// src/app/core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { user } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  return user(auth).pipe(
    map(u => {
      if (!u) {
        router.navigate(['/auth/login']);
        return false;
      }
      return true;
    })
  );
};
```
```ts
// src/app/core/guards/role.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

export const roleGuard = (allowed: 'admin' | 'programmer'): CanActivateFn => () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.userRole$.pipe(
    map(role => {
      if (role !== allowed) {
        router.navigate(['/']);
        return false;
      }
      return true;
    })
  );
};
```
```ts
// src/app/core/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { docData } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  user$ = user(this.auth);
  userRole$ = this.user$.pipe(
    switchMap(u => {
      if (!u) return of(undefined);
      const ref = doc(this.firestore, `users/${u.uid}`);
      return docData(ref).pipe(map(data => (data as AppUser | undefined)?.role));
    })
  );

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth, provider);
    const { user } = credential;
    const ref = doc(this.firestore, `users/${user.uid}`);
    await setDoc(ref, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      role: 'user',
      createdAt: Date.now(),
    }, { merge: true });
    return user;
  }

  logout() {
    return signOut(this.auth);
  }
}
```

### 9. Seguridad Firestore (reglas iniciales)
```js
// firebase firestore.rules (básico, ajustar en proyecto real)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() { return request.auth != null; }
    function isAdmin() { return isSignedIn() && request.auth.token.role == 'admin'; }
    function isProgrammer(ownerUid) { return isSignedIn() && (request.auth.token.role == 'programmer' && request.auth.uid == ownerUid); }

    match /users/{uid} {
      allow read: if isSignedIn();
      allow write: if isAdmin() || (isSignedIn() && request.auth.uid == uid);
    }

    match /programmers/{pid} {
      allow read: if true;
      allow create, update, delete: if isAdmin() || isProgrammer(resource.data.ownerUid);
      match /projects/{projId} {
        allow read: if true;
        allow write: if isAdmin() || isProgrammer(resource.data.programmerId);
      }
      match /schedules/{sid} {
        allow read: if true;
        allow write: if isAdmin() || isProgrammer(resource.data.ownerUid);
      }
    }

    match /consultations/{cid} {
      allow create: if true;
      allow read, update: if isAdmin() || (isSignedIn() && (request.auth.uid == resource.data.userUid || request.auth.uid == resource.data.programmerUid));
    }

    match /notifications/{nid} {
      allow read, update: if isSignedIn() && request.auth.uid == resource.data.toUid;
      allow create: if isSignedIn();
    }
  }
}
```

### 10. Flujo UI (Tailwind + DaisyUI) rápido para login y layout
```html
<!-- src/app/auth/login.component.html -->
<div class="min-h-screen flex items-center justify-center bg-base-200">
  <div class="card w-full max-w-md shadow-xl bg-base-100">
    <div class="card-body space-y-4">
      <h1 class="text-2xl font-bold text-center">Ingresa con Google</h1>
      <p class="text-center text-sm text-base-content/70">Accede para gestionar portafolios y asesorías.</p>
      <button class="btn btn-primary w-full" (click)="login()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1H12v2.8h5.35c-.25 1.4-1.05 2.6-2.25 3.4v2.8h3.6c2.1-1.95 3.3-4.85 3.3-8.5 0-.65-.05-1.3-.15-1.9z"/><path d="M12 22c2.7 0 5-0.9 6.7-2.4l-3.6-2.8c-1 0.7-2.3 1.1-3.6 1.1-2.75 0-5.1-1.85-5.95-4.35H1.8v2.8C3.55 19.85 7.45 22 12 22z"/><path d="M6.05 13.55a5.98 5.98 0 0 1 0-3.1V7.65H1.8a10 10 0 0 0 0 8.7l4.25-2.8z"/><path d="M12 5.5c1.5 0 2.85.5 3.9 1.45l2.9-2.9C17 2.35 14.7 1.5 12 1.5 7.45 1.5 3.55 3.65 1.8 7.2l4.25 2.8C6.9 7.35 9.25 5.5 12 5.5z"/></svg>
        Continuar con Google
      </button>
    </div>
  </div>
</div>
```
```ts
// src/app/auth/login.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  async login() {
    await this.authService.loginWithGoogle();
    this.router.navigate(['/']);
  }
}
```

### 11. Checklist de siguientes pasos de desarrollo
1) Generar módulos perezosos y rutas: `ng g m public --route '' --module app` (repetir para auth, admin, programmer).
2) Crear componentes clave (shell, navbar, cards de programadores, formulario de proyecto, tabla de asesorías).
3) Implementar servicios `ProgrammerService`, `ProjectService`, `ConsultationService` consumiendo Firestore.
4) Construir formularios reactivos (Tailwind + DaisyUI) para CRUD de programadores y proyectos.
5) Panel de asesorías: tabla filtrable, acciones aprobar/rechazar con `NotificationService` (documento en `notifications`).
6) Simulación de notificaciones: listener en panel de programador filtrando por `toUid`.
7) Pulir UX/UI responsive: layouts diferenciados y temas DaisyUI.
8) Despliegue: `firebase init hosting`, `ng build --configuration=production`, `firebase deploy`.

### 12. README resumido (puedes copiar en README.md)
- Clonar: `git clone <repo>` y `cd integrador-portfolio`.
- Instalar: `npm install`.
- Configurar Firebase: crear proyecto, habilitar Auth (Google), crear Firestore y Storage, copiar credenciales a `src/environments/*`.
- Ejecutar dev: `npm run start`.
- Desplegar: `npm run build` y `firebase deploy`.

### 13. Guion para video (10 minutos)
1. **Introducción (1 min)**: objetivo del proyecto y roles.
2. **Arquitectura (2 min)**: módulos Angular, lazy loading, servicios y guards; colecciones Firestore.
3. **Autenticación y roles (1 min)**: Google Auth, claims de rol y rutas protegidas.
4. **CRUD de programadores (1.5 min)**: demo de alta/edición, subida de foto (Storage), estado activo/inactivo.
5. **Portafolios y proyectos (1.5 min)**: categorías, filtros y links a demo/repositorio.
6. **Asesorías y notificaciones (1.5 min)**: solicitud desde público, aprobación/rechazo y mensajes internos.
7. **UI/UX (0.5 min)**: Tailwind + DaisyUI, responsivo y diferenciación visual de roles.
8. **Despliegue (1 min)**: build, reglas y deploy en Firebase Hosting.
9. **Cierre (0.5 min)**: aprendizajes y futuros pasos.
