# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para este projeto! Este guia ajudará você a começar.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Desenvolvimento](#desenvolvimento)
- [Padrões de Código](#padrões-de-código)
- [Commits](#commits)
- [Pull Requests](#pull-requests)
- [Melhorias Futuras](#melhorias-futuras)

## 🚀 Como Contribuir

### 1. Fork o Projeto
```bash
# Clone seu fork
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

### 2. Crie uma Branch
```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
```

### 3. Faça suas Alterações
- Siga os padrões de código
- Adicione comentários quando necessário
- Teste suas alterações

### 4. Commit suas Alterações
```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

### 5. Push para o GitHub
```bash
git push origin feature/nova-funcionalidade
```

### 6. Abra um Pull Request
- Descreva suas alterações
- Referencie issues relacionadas
- Aguarde review

## 💻 Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm 9+
- Angular CLI 19+

### Setup
```bash
npm install
npm start
```

### Testes
```bash
# Executar testes
npm test

# Testes com coverage
npm run test:coverage

# Testes e2e
npm run e2e
```

### Build
```bash
# Development
npm run build

# Production
npm run build:prod
```

## 📝 Padrões de Código

### TypeScript

#### Nomenclatura
```typescript
// Classes e Interfaces: PascalCase
class UserService { }
interface User { }

// Variáveis e Funções: camelCase
const userName = 'John';
function getUserName() { }

// Constantes: UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';

// Arquivos: kebab-case
user-profile.component.ts
```

#### Tipos
```typescript
// Sempre use tipos explícitos
function calculate(a: number, b: number): number {
  return a + b;
}

// Use interfaces para objetos
interface Project {
  title: string;
  description: string;
  technologies: string[];
}
```

#### Imports
```typescript
// Organize imports
// 1. Angular
import { Component } from '@angular/core';

// 2. RxJS
import { Observable } from 'rxjs';

// 3. Internos
import { UserService } from './services/user.service';
```

### HTML

#### Estrutura
```html
<!-- Use indentação consistente (2 espaços) -->
<div class="container">
  <h1>Título</h1>
  <p>Parágrafo</p>
</div>

<!-- Atributos em ordem -->
<button
  type="button"
  class="btn"
  [disabled]="isDisabled"
  (click)="onClick()">
  Clique
</button>
```

#### Acessibilidade
```html
<!-- Sempre use atributos de acessibilidade -->
<button aria-label="Fechar menu" (click)="close()">
  <svg aria-hidden="true">...</svg>
</button>

<img src="foto.jpg" alt="Descrição da foto">
```

### SCSS

#### Estrutura
```scss
// Use BEM ou nomenclatura consistente
.component {
  // Propriedades do elemento
  display: flex;
  
  // Elementos filhos
  &__element {
    color: var(--text-primary);
  }
  
  // Modificadores
  &--modifier {
    background: var(--accent-color);
  }
  
  // Estados
  &:hover {
    transform: scale(1.05);
  }
  
  // Media queries no final
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
```

#### Variáveis
```scss
// Use variáveis CSS para temas
.element {
  color: var(--text-primary);
  background: var(--bg-secondary);
}

// Não use valores hardcoded
// ❌ Errado
color: #1a1a1a;

// ✅ Correto
color: var(--text-primary);
```

## 📝 Commits

### Formato
Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (não afeta código)
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Manutenção

### Exemplos
```bash
# Nova funcionalidade
git commit -m "feat(portfolio): adiciona filtro de projetos"

# Correção de bug
git commit -m "fix(header): corrige menu mobile"

# Documentação
git commit -m "docs: atualiza README com instruções"

# Estilo
git commit -m "style(home): ajusta espaçamento"

# Refatoração
git commit -m "refactor(services): simplifica theme service"

# Testes
git commit -m "test(about): adiciona testes unitários"

# Manutenção
git commit -m "chore: atualiza dependências"
```

## 🔄 Pull Requests

### Checklist
Antes de abrir um PR, verifique:

- [ ] Código segue os padrões
- [ ] Testes passam
- [ ] Build funciona
- [ ] Documentação atualizada
- [ ] Sem erros de lint
- [ ] Commits seguem padrão

### Template
```markdown
## Descrição
Breve descrição das alterações

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## Como Testar
1. Passo 1
2. Passo 2
3. Passo 3

## Screenshots (se aplicável)
[Adicione screenshots]

## Checklist
- [ ] Código testado
- [ ] Documentação atualizada
- [ ] Sem warnings
```

## 🎯 Melhorias Futuras

### Funcionalidades Planejadas

#### Curto Prazo (1-2 semanas)
- [ ] **Blog**: Seção de blog com posts
- [ ] **Filtros**: Filtrar projetos por tecnologia
- [ ] **Busca**: Busca de projetos
- [ ] **Animações**: Mais animações ao scroll
- [ ] **Loading**: Skeleton screens

#### Médio Prazo (1-2 meses)
- [ ] **CMS**: Integração com Headless CMS
- [ ] **Email**: Formulário de contato funcional
- [ ] **Analytics**: Google Analytics integrado
- [ ] **SEO**: Melhorias de SEO
- [ ] **PWA**: Progressive Web App
- [ ] **i18n**: Mais idiomas
- [ ] **Testes**: Cobertura de testes

#### Longo Prazo (3+ meses)
- [ ] **Admin**: Painel administrativo
- [ ] **API**: Backend próprio
- [ ] **Auth**: Sistema de autenticação
- [ ] **Comments**: Sistema de comentários
- [ ] **Newsletter**: Sistema de newsletter
- [ ] **Dark Mode Auto**: Baseado em horário

### Melhorias Técnicas

#### Performance
- [ ] Lazy loading de imagens
- [ ] Code splitting avançado
- [ ] Service Worker
- [ ] Preload de rotas
- [ ] Otimização de bundle

#### Acessibilidade
- [ ] ARIA labels completos
- [ ] Navegação por teclado
- [ ] Screen reader friendly
- [ ] Contraste adequado
- [ ] Focus management

#### SEO
- [ ] Meta tags dinâmicas
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Schema.org markup
- [ ] Open Graph tags

#### Testes
- [ ] Testes unitários (80%+ coverage)
- [ ] Testes de integração
- [ ] Testes e2e
- [ ] Testes de acessibilidade
- [ ] Performance tests

### Novas Funcionalidades

#### Blog
```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  date: Date;
  tags: string[];
  coverImage: string;
}
```

#### Filtros de Projetos
```typescript
interface ProjectFilter {
  technology?: string;
  category?: string;
  year?: number;
}
```

#### Sistema de Busca
```typescript
interface SearchResult {
  type: 'project' | 'post' | 'skill';
  title: string;
  description: string;
  url: string;
}
```

## 🐛 Reportar Bugs

### Template de Issue
```markdown
## Descrição do Bug
Descrição clara do que aconteceu

## Como Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## Comportamento Esperado
O que deveria acontecer

## Screenshots
Se aplicável, adicione screenshots

## Ambiente
- OS: [e.g. Windows 10]
- Navegador: [e.g. Chrome 120]
- Versão: [e.g. 1.0.0]

## Informações Adicionais
Qualquer outra informação relevante
```

## 💡 Sugerir Funcionalidades

### Template de Issue
```markdown
## Descrição da Funcionalidade
Descrição clara da funcionalidade

## Problema que Resolve
Qual problema esta funcionalidade resolve?

## Solução Proposta
Como você imagina que funcione?

## Alternativas Consideradas
Outras formas de resolver o problema

## Informações Adicionais
Mockups, exemplos, referências
```

## 📚 Recursos

### Documentação
- [Angular Style Guide](https://angular.dev/style-guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Guide](https://sass-lang.com/guide)

### Ferramentas
- [Angular DevTools](https://angular.dev/tools/devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)

## 🙏 Agradecimentos

Obrigado por contribuir! Toda ajuda é bem-vinda, seja:
- 🐛 Reportando bugs
- 💡 Sugerindo funcionalidades
- 📝 Melhorando documentação
- 💻 Contribuindo com código
- ⭐ Dando uma estrela no projeto

---

**Dúvidas?** Abra uma issue ou entre em contato!

