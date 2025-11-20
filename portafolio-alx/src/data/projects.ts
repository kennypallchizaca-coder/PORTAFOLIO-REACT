import projImg1 from '../assets/font/img/project-img1.png';
import projImg2 from '../assets/font/img/project-img2.png';
import projImg3 from '../assets/font/img/project-img3.png';
import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Panel de analítica',
    description: 'SPA con React + TypeScript y dashboards en tiempo real.',
    imgUrl: projImg1,
    url: 'https://example.com/dashboard'
  },
  {
    title: 'Landing de producto',
    description: 'Sitio responsivo optimizado para conversión y SEO técnico.',
    imgUrl: projImg2,
    url: 'https://example.com/landing'
  },
  {
    title: 'Gestor de tareas',
    description: 'Aplicación fullstack con autenticación y modo offline.',
    imgUrl: projImg3,
    url: 'https://example.com/tasks'
  }
];
