import { ProgrammerProfile } from '../types';

export const programmers: ProgrammerProfile[] = [
  {
    id: 'andrea-ux',
    name: 'Andrea Torres',
    specialty: 'Front-end / UX',
    bio: 'Crea interfaces accesibles y prototipos navegables validados con usuarios.',
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Andrea',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/andreatorres' },
      { label: 'Portafolio', url: 'https://andrea.dev' }
    ],
    availability: [
      { day: 'Lunes', times: ['09:00', '11:00', '15:00'] },
      { day: 'Miércoles', times: ['10:00', '14:00'] }
    ],
    projects: [
      {
        section: 'Académico',
        title: 'Design System para dashboards',
        description: 'Biblioteca de componentes en Angular con tokens de diseño.',
        participation: 'Frontend / UX',
        technologies: ['Angular', 'Storybook', 'SCSS'],
        imgUrl: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=60',
        repoUrl: 'https://github.com/andrea/design-system',
        demoUrl: 'https://design-system.web.app',
        url: 'https://design-system.web.app',
        category: 'Académico'
      },
      {
        section: 'Laboral',
        title: 'Portal de onboarding',
        description: 'Flujo de registro multirol con autenticación Firebase y guardado de perfil.',
        participation: 'Frontend',
        technologies: ['Angular', 'Firebase Auth', 'Tailwind'],
        imgUrl: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=60',
        repoUrl: 'https://github.com/andrea/onboarding',
        demoUrl: 'https://onboarding-app.web.app',
        url: 'https://onboarding-app.web.app',
        category: 'Laboral'
      }
    ]
  },
  {
    id: 'luis-api',
    name: 'Luis Serrano',
    specialty: 'Back-end / Integraciones',
    bio: 'Diseña APIs seguras con Node.js y despliegues automatizados.',
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Luis',
    links: [
      { label: 'GitHub', url: 'https://github.com/luis' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/luis' }
    ],
    availability: [
      { day: 'Martes', times: ['09:30', '12:30'] },
      { day: 'Jueves', times: ['16:00', '18:00'] }
    ],
    projects: [
      {
        section: 'Académico',
        title: 'API de asesorías',
        description: 'Endpoints REST para solicitar, aprobar o rechazar asesorías.',
        participation: 'Backend',
        technologies: ['Express', 'MongoDB', 'JWT'],
        imgUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60',
        repoUrl: 'https://github.com/luis/mentoring-api',
        demoUrl: 'https://mentor-api.web.app',
        url: 'https://mentor-api.web.app',
        category: 'Académico'
      },
      {
        section: 'Laboral',
        title: 'Orquestador de despliegues',
        description: 'Pipelines CI/CD para hospedar portafolios en Firebase Hosting.',
        participation: 'Backend / DevOps',
        technologies: ['GitHub Actions', 'Firebase', 'Docker'],
        imgUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60',
        repoUrl: 'https://github.com/luis/deploy',
        demoUrl: 'https://deployments.web.app',
        url: 'https://deployments.web.app',
        category: 'Laboral'
      }
    ]
  },
  {
    id: 'vale-data',
    name: 'Valeria Arias',
    specialty: 'Fullstack / Datos',
    bio: 'Integra dashboards con analítica y trazabilidad de usuarios.',
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Valeria',
    links: [
      { label: 'Portafolio', url: 'https://valeria.dev' },
      { label: 'Behance', url: 'https://www.behance.net/valeria' }
    ],
    availability: [
      { day: 'Viernes', times: ['10:00', '11:00', '17:00'] }
    ],
    projects: [
      {
        section: 'Académico',
        title: 'Panel de métricas estudiantiles',
        description: 'Consumo de Firestore con tablas filtrables y permisos por rol.',
        participation: 'Fullstack',
        technologies: ['Angular', 'Firebase', 'Chart.js'],
        imgUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=60',
        repoUrl: 'https://github.com/valeria/panel-metricas',
        demoUrl: 'https://metricas-estudiantes.web.app',
        url: 'https://metricas-estudiantes.web.app',
        category: 'Académico'
      },
      {
        section: 'Laboral',
        title: 'Catálogo multi-tenant',
        description: 'Gestión de portafolios independientes para múltiples programadores.',
        participation: 'Fullstack',
        technologies: ['Angular', 'Supabase', 'PostgreSQL'],
        imgUrl: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=800&q=60',
        repoUrl: 'https://github.com/valeria/catalogo',
        demoUrl: 'https://catalogo-programadores.vercel.app',
        url: 'https://catalogo-programadores.vercel.app',
        category: 'Laboral'
      }
    ]
  }
];
