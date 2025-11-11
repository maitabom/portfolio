# 🎨 Guia de Personalização

Este guia mostra como personalizar seu portfólio de forma detalhada.

## 📝 Conteúdo

### 1. Informações Pessoais (Home)

**Arquivo**: `src/app/components/home/home.component.html`

```html
<!-- Altere o nome -->
<h1 class="name">
  <span class="highlight">Seu Nome Aqui</span>
</h1>
```

**Arquivo**: `src/app/services/translation.service.ts`

```typescript
// Altere a descrição em todos os idiomas
'home.description': { 
  pt: 'Sua descrição em português',
  en: 'Your description in English',
  es: 'Tu descripción en español'
}
```

### 2. Experiência Profissional (About)

**Arquivo**: `src/app/components/about/about.component.ts`

```typescript
experiences: Experience[] = [
  {
    title: 'Seu Cargo',
    company: 'Nome da Empresa',
    period: '2020 - Presente',
    description: 'Descrição do que você fez nesta posição...'
  },
  // Adicione mais experiências
];
```

### 3. Habilidades (About)

**Arquivo**: `src/app/components/about/about.component.ts`

```typescript
skills: Skill[] = [
  { name: 'Nome da Tecnologia', level: 90, category: 'Frontend' },
  // level: 0-100 (porcentagem)
  // category: 'Frontend', 'Backend' ou 'Tools'
];
```

### 4. Projetos (Portfolio)

**Arquivo**: `src/app/components/portfolio/portfolio.component.ts`

```typescript
projects: Project[] = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição breve do projeto',
    image: 'nome-imagem', // Não usado por enquanto
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    link: 'https://projeto.com',
    github: 'https://github.com/usuario/projeto'
  },
  // Adicione mais projetos
];
```

### 5. Informações de Contato

**Arquivo**: `src/app/components/contact/contact.component.html`

```html
<!-- Email -->
<p>seu-email&#64;exemplo.com</p>

<!-- Localização -->
<p>Sua Cidade, País</p>
```

### 6. Links de Redes Sociais

**Arquivos**: 
- `src/app/components/home/home.component.html`
- `src/app/components/contact/contact.component.html`

```html
<a href="https://github.com/seu-usuario" target="_blank">
<a href="https://linkedin.com/in/seu-usuario" target="_blank">
<a href="https://twitter.com/seu-usuario" target="_blank">
```

---

## 🎨 Estilo e Aparência

### 1. Cores

**Arquivo**: `src/styles.scss`

```scss
:root {
  --accent-color: #FFAB10; // Cor de destaque principal
}

/* Tema Claro */
body.light-theme {
  --bg-primary: #ffffff;      // Fundo principal
  --bg-secondary: #f5f5f5;    // Fundo secundário
  --text-primary: #1a1a1a;    // Texto principal
  --text-secondary: #666666;  // Texto secundário
}

/* Tema Escuro */
body.dark-theme {
  --bg-primary: #1a1a1a;      // Fundo principal
  --bg-secondary: #2a2a2a;    // Fundo secundário
  --text-primary: #ffffff;    // Texto principal
  --text-secondary: #b3b3b3;  // Texto secundário
}
```

### 2. Fontes

**Arquivo**: `src/index.html`

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Arquivo**: `src/styles.scss`

```scss
body {
  font-family: 'SuaFonte', sans-serif;
}
```

### 3. Logo

**Arquivo**: `src/app/components/header/header.component.html`

```html
<a routerLink="/" class="logo">
  <span class="logo-text">Seu Nome</span>
  <!-- Ou use uma imagem -->
  <!-- <img src="assets/logo.png" alt="Logo"> -->
</a>
```

---

## 🌍 Traduções

### Adicionar Novo Idioma

**Arquivo**: `src/app/services/translation.service.ts`

1. Adicione o idioma ao tipo:
```typescript
export type Language = 'pt' | 'en' | 'es' | 'fr'; // Adicione 'fr'
```

2. Adicione traduções:
```typescript
'nav.home': { 
  pt: 'Início', 
  en: 'Home', 
  es: 'Inicio',
  fr: 'Accueil' // Novo idioma
}
```

3. Adicione botão no header:
```html
<button 
  class="lang-btn" 
  [class.active]="translationService.currentLang() === 'fr'"
  (click)="changeLanguage('fr')"
  title="Français">
  FR
</button>
```

### Adicionar Nova Tradução

**Arquivo**: `src/app/services/translation.service.ts`

```typescript
private translations: Translations = {
  'sua.chave': {
    pt: 'Texto em Português',
    en: 'Text in English',
    es: 'Texto en Español'
  }
};
```

**Uso no template:**
```html
{{ t('sua.chave') }}
```

---

## 🖼️ Imagens

### Adicionar Imagens

1. Coloque imagens na pasta `public/`
2. Use no HTML:

```html
<img src="sua-imagem.jpg" alt="Descrição">
```

### Foto de Perfil

**Arquivo**: `src/app/components/home/home.component.html`

Substitua o placeholder:
```html
<div class="profile-image">
  <img src="sua-foto.jpg" alt="Seu Nome">
</div>
```

### Imagens de Projetos

**Arquivo**: `src/app/components/portfolio/portfolio.component.html`

Substitua o placeholder:
```html
<div class="project-image">
  <img [src]="project.image" [alt]="project.title">
</div>
```

---

## ➕ Adicionar Nova Seção

### 1. Criar Componente

```bash
ng generate component components/nova-secao --skip-tests
```

### 2. Adicionar Rota

**Arquivo**: `src/app/app.routes.ts`

```typescript
import { NovaSecaoComponent } from './components/nova-secao/nova-secao.component';

export const routes: Routes = [
  // ... rotas existentes
  { path: 'nova-secao', component: NovaSecaoComponent },
];
```

### 3. Adicionar ao Menu

**Arquivo**: `src/app/components/header/header.component.html`

```html
<a routerLink="/nova-secao" routerLinkActive="active">
  Nova Seção
</a>
```

### 4. Adicionar Traduções

**Arquivo**: `src/app/services/translation.service.ts`

```typescript
'nav.nova-secao': { 
  pt: 'Nova Seção', 
  en: 'New Section', 
  es: 'Nueva Sección' 
}
```

---

## 📱 Responsividade

### Breakpoints Padrão

```scss
// Mobile
@media (max-width: 768px) {
  // Estilos mobile
}

// Tablet
@media (min-width: 769px) and (max-width: 1024px) {
  // Estilos tablet
}

// Desktop
@media (min-width: 1025px) {
  // Estilos desktop
}
```

---

## 🎭 Animações

### Adicionar Animação

**Arquivo**: `src/styles.scss`

```scss
@keyframes minhaAnimacao {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.elemento {
  animation: minhaAnimacao 0.5s ease;
}
```

---

## 📊 Analytics (Opcional)

### Google Analytics

**Arquivo**: `src/index.html`

```html
<head>
  <!-- ... -->
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

---

## 💡 Dicas Avançadas

### 1. Adicionar Blog

Crie um componente de blog e use um CMS headless como:
- Contentful
- Strapi
- Sanity

### 2. Formulário de Contato Funcional

Integre com:
- EmailJS (gratuito)
- Formspree
- SendGrid

### 3. Modo de Manutenção

Crie um componente de manutenção e redirecione todas as rotas.

### 4. Loading Screen

Adicione um loading screen no `index.html`:

```html
<body>
  <app-root>
    <div class="loading">Carregando...</div>
  </app-root>
</body>
```

---

## 🔍 SEO

### Meta Tags

**Arquivo**: `src/index.html`

```html
<meta name="description" content="Sua descrição aqui">
<meta name="keywords" content="palavras, chave, aqui">
<meta property="og:title" content="Seu Portfolio">
<meta property="og:description" content="Descrição">
<meta property="og:image" content="url-da-imagem">
<meta name="twitter:card" content="summary_large_image">
```

---

✨ **Dica**: Faça alterações pequenas e teste frequentemente com `npm start`!

