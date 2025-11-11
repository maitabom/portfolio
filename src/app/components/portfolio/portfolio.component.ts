import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translationService = inject(TranslationService);

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.',
      image: 'ecommerce',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de arrastar e soltar, colaboração em tempo real.',
      image: 'task',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard analítico para gerenciamento de múltiplas redes sociais com visualização de métricas em tempo real.',
      image: 'dashboard',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Aplicativo de previsão do tempo com geolocalização, gráficos interativos e notificações push.',
      image: 'weather',
      technologies: ['Angular', 'RxJS', 'OpenWeather API', 'PWA'],
      link: '#',
      github: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blog com editor Markdown, sistema de comentários e SEO otimizado.',
      image: 'blog',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'Aplicativo de rastreamento de exercícios e nutrição com gráficos de progresso e metas personalizadas.',
      image: 'fitness',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
      link: '#',
      github: '#'
    }
  ];

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
