import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  translationService = inject(TranslationService);
  isDropdownOpen = false;

  skills: Skill[] = [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'SQL', level: 85, category: 'Backend' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 75, category: 'Tools' }
  ];

  experiences: Experience[] = [
    {
      title: 'Desenvolvedor Full Stack Sênior',
      company: 'Empresa de Tecnologia',
      period: '2021 - Presente',
      description: 'Desenvolvimento de aplicações web escaláveis utilizando Angular, Node.js e tecnologias modernas. Liderança técnica e mentoria de desenvolvedores júnior.'
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Startup Inovadora',
      period: '2019 - 2021',
      description: 'Criação de interfaces responsivas e performáticas. Implementação de design systems e otimização de performance.'
    },
    {
      title: 'Desenvolvedor Web',
      company: 'Agência Digital',
      period: '2017 - 2019',
      description: 'Desenvolvimento de websites e aplicações web para diversos clientes. Trabalho com múltiplas tecnologias e frameworks.'
    }
  ];

  education: Education[] = [
    {
      degree: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade Federal',
      period: '2013 - 2017',
      description: 'Formação sólida em fundamentos de programação, estruturas de dados, algoritmos e engenharia de software.'
    },
    {
      degree: 'Pós-Graduação em Desenvolvimento Web',
      institution: 'Instituto de Tecnologia',
      period: '2018 - 2019',
      description: 'Especialização em tecnologias web modernas, arquitetura de software e boas práticas de desenvolvimento.'
    }
  ];

  t(key: string): string {
    return this.translationService.translate(key);
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.resume-dropdown-wrapper');
    
    if (!clickedInside && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  downloadResume(language: string): void {
    // Close dropdown after selection
    this.isDropdownOpen = false;

    // Map language codes to file names
    const resumeFiles: { [key: string]: string } = {
      'pt': 'curriculo-pt.pdf',
      'en': 'resume-en.pdf',
      'es': 'curriculum-es.pdf'
    };

    const fileName = resumeFiles[language];
    if (!fileName) {
      console.error('Invalid language code');
      return;
    }

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = `/resumes/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
