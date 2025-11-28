import projImg1 from '../assets/font/img/project-img1.png';
import projImg2 from '../assets/font/img/project-img2.png';
import projImg3 from '../assets/font/img/project-img3.png';
import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Portal multiusuario',
    description: 'Autenticación con Google, panel de administrador y portafolios por programador.',
    participation: 'Fullstack',
    technologies: ['Angular', 'Firebase Auth', 'Firestore'],
    imgUrl: projImg1,
    repoUrl: 'https://github.com/example/multiusuario',
    demoUrl: 'https://multiusuario.web.app',
    url: 'https://multiusuario.web.app',
    category: 'Laboral'
  },
  {
    title: 'Agendador de asesorías',
    description: 'Flujo de selección de programador, horario y aprobación con notificaciones.',
    participation: 'Backend',
    technologies: ['Express', 'MongoDB', 'Cloud Functions'],
    imgUrl: projImg2,
    repoUrl: 'https://github.com/example/asesorias',
    demoUrl: 'https://asesorias.web.app',
    url: 'https://asesorias.web.app',
    category: 'Académico'
  },
  {
    title: 'SEO landing programadores',
    description: 'Página pública de portafolios individuales con buenas prácticas de SEO.',
    participation: 'Frontend',
    technologies: ['Angular', 'SCSS', 'Vercel'],
    imgUrl: projImg3,
    repoUrl: 'https://github.com/example/seo-portafolios',
    demoUrl: 'https://portafolios-seo.vercel.app',
    url: 'https://portafolios-seo.vercel.app',
    category: 'Laboral'
  }
];
