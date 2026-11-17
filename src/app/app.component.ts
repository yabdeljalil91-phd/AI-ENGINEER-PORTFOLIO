import { Component, signal } from '@angular/core';

type ProjectCategory = 'All' | 'Generative AI' | 'Software Engineering' | 'Model-Driven Engineering';

interface Project {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  tags: string[];
  codeUrl: string;
  demoUrl?: string;
  featured?: boolean;
  number: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly menuOpen = signal(false);
  readonly activeFilter = signal<ProjectCategory>('All');

  readonly filters: ProjectCategory[] = [
    'All', 'Generative AI', 'Software Engineering', 'Model-Driven Engineering'
  ];

  readonly projects: Project[] = [
    {
      number: '01',
      title: 'GraphRAG for Design Pattern Detection',
      category: 'Generative AI',
      description: 'An experimental retrieval pipeline combining vector search and knowledge-graph context to support GoF design-pattern detection from UML models.',
      tags: ['Python', 'GraphRAG', 'Neo4j', 'LLMs', 'UML'],
      codeUrl: 'https://github.com/your-username',
      featured: true
    },
    {
      number: '02',
      title: 'RAG Knowledge Assistant',
      category: 'Generative AI',
      description: 'A document question-answering application exploring chunking, embeddings, vector retrieval and grounded LLM responses.',
      tags: ['Python', 'RAG', 'Embeddings', 'LLMs'],
      codeUrl: 'https://github.com/your-username'
    },
    {
      number: '03',
      title: 'Model Completion with LLMs',
      category: 'Model-Driven Engineering',
      description: 'Research prototype exploring how textual requirements and partial UML models can guide model completion with language models.',
      tags: ['UML', 'MDE', 'LLMs', 'Model Completion'],
      codeUrl: 'https://github.com/your-username'
    },
    {
      number: '04',
      title: 'Spring Boot Microservices',
      category: 'Software Engineering',
      description: 'A reference application for exploring service boundaries, REST APIs, containerization and maintainable backend architecture.',
      tags: ['Java', 'Spring Boot', 'Docker', 'REST'],
      codeUrl: 'https://github.com/your-username'
    },
    {
      number: '05',
      title: 'Developer Productivity Experiments',
      category: 'Software Engineering',
      description: 'Small engineering experiments, reusable utilities and practical implementations built while learning and exploring new technologies.',
      tags: ['TypeScript', 'Angular', 'Python'],
      codeUrl: 'https://github.com/your-username'
    }
  ];

  readonly skills = [
    { group: 'Software engineering', items: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST APIs', 'Microservices'] },
    { group: 'AI & data', items: ['Python', 'LLMs', 'RAG', 'GraphRAG', 'Embeddings', 'Knowledge Graphs'] },
    { group: 'Model-driven engineering', items: ['UML', 'PlantUML', 'Model Transformation', 'Design Patterns', 'Neo4j'] },
    { group: 'Tools & practices', items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Agile', 'Clean Architecture'] }
  ];

  readonly experience = [
    {
      period: 'Professional experience',
      title: 'Software Engineer',
      organization: 'Java / Spring & Web Development',
      description: '7 years of experience designing and developing software applications, backend services and web solutions.'
    },
    {
      period: 'Research — ongoing',
      title: 'PhD Researcher in Artificial Intelligence',
      organization: 'LLMs and Model-Driven Engineering',
      description: 'Researching the integration of LLM-generated artifacts into software modeling workflows, including model completion and design-pattern reasoning.'
    }
  ];

  get filteredProjects(): Project[] {
    const filter = this.activeFilter();
    return filter === 'All' ? this.projects : this.projects.filter(project => project.category === filter);
  }

  setFilter(filter: ProjectCategory): void {
    this.activeFilter.set(filter);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
