import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Project {
  title: string;
  description: string;
  participation: string;
  technologies: string[];
  repoUrl: string;
  demoUrl: string;
  category: string;
}

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly hero = {
    title: 'Hola, soy Alex',
    subtitle: 'Desarrollador fullstack',
    description:
      'Migro este portafolio a Angular para mostrar proyectos, experiencia y un flujo de contacto listo para producción.',
    cta: 'Descargar CV'
  };

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Tailwind', 'Bootstrap']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Cloud & Ops',
      skills: ['Firebase', 'Vercel', 'Docker', 'CI/CD', 'Linux']
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'Portal multiusuario',
      description:
        'Autenticación con Google, panel de administrador y portafolios por programador para equipos remotos.',
      participation: 'Fullstack',
      technologies: ['Angular', 'Firebase Auth', 'Firestore'],
      repoUrl: 'https://github.com/example/multiusuario',
      demoUrl: 'https://multiusuario.web.app',
      category: 'Laboral'
    },
    {
      title: 'Agendador de asesorías',
      description: 'Flujo de selección de programador, horario y aprobación con notificaciones.',
      participation: 'Backend',
      technologies: ['Express', 'MongoDB', 'Cloud Functions'],
      repoUrl: 'https://github.com/example/asesorias',
      demoUrl: 'https://asesorias.web.app',
      category: 'Académico'
    },
    {
      title: 'SEO landing programadores',
      description: 'Página pública de portafolios individuales con buenas prácticas de SEO.',
      participation: 'Frontend',
      technologies: ['Angular', 'SCSS', 'Vercel'],
      repoUrl: 'https://github.com/example/seo-portafolios',
      demoUrl: 'https://portafolios-seo.vercel.app',
      category: 'Laboral'
    }
  ];

  readonly highlights = [
    'Componentes standalone y enrutador configurado desde main.ts',
    'Estructura lista para estilos globales y assets',
    'Copiloto perfecto para migrar cada sección del antiguo React'
  ];

  contact = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  isSubmitting = false;

  private readonly contactEndpoint = 'http://localhost:5000/contact';

  async submitContact(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      const response = await fetch(this.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contact)
      });

      if (!response.ok) {
        throw new Error('Error al enviar formulario');
      }

      this.submitStatus = 'success';
      form.resetForm();
    } catch (error) {
      console.error(error);
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }
}
