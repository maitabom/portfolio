# 📁 Estrutura do Projeto

## Visão Geral

```
Portfolio/
├── public/                      # Arquivos públicos estáticos
│   └── favicon.ico             # Ícone do site
├── src/                        # Código fonte
│   ├── app/                    # Aplicação Angular
│   │   ├── components/         # Componentes da aplicação
│   │   │   ├── header/        # Cabeçalho com navegação
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.ts
│   │   │   ├── home/          # Página inicial
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.component.ts
│   │   │   ├── about/         # Sobre mim
│   │   │   │   ├── about.component.html
│   │   │   │   ├── about.component.scss
│   │   │   │   └── about.component.ts
│   │   │   ├── portfolio/     # Portfólio de projetos
│   │   │   │   ├── portfolio.component.html
│   │   │   │   ├── portfolio.component.scss
│   │   │   │   └── portfolio.component.ts
│   │   │   └── contact/       # Página de contato
│   │   │       ├── contact.component.html
│   │   │       ├── contact.component.scss
│   │   │       └── contact.component.ts
│   │   ├── services/          # Serviços da aplicação
│   │   │   ├── theme.service.ts        # Gerenciamento de tema
│   │   │   └── translation.service.ts  # Sistema de tradução
│   │   ├── app.component.html # Template principal
│   │   ├── app.component.scss # Estilos principais
│   │   ├── app.component.ts   # Componente raiz
│   │   ├── app.config.ts      # Configuração da aplicação
│   │   └── app.routes.ts      # Rotas da aplicação
│   ├── index.html             # HTML principal
│   ├── main.ts                # Ponto de entrada
│   └── styles.scss            # Estilos globais
├── .editorconfig              # Configuração do editor
├── .gitignore                 # Arquivos ignorados pelo Git
├── angular.json               # Configuração do Angular
├── package.json               # Dependências do projeto
├── tsconfig.json              # Configuração do TypeScript
├── README.md                  # Documentação principal
├── QUICK_START.md             # Guia de início rápido
├── DEPLOY.md                  # Guia de deploy
├── CUSTOMIZATION.md           # Guia de personalização
└── PROJECT_STRUCTURE.md       # Este arquivo
```

## 📄 Descrição dos Arquivos Principais

### Configuração

#### `angular.json`
Configuração principal do projeto Angular. Define:
- Caminhos de build
- Configurações de desenvolvimento e produção
- Assets e estilos globais
- Budgets de tamanho

#### `package.json`
Gerenciamento de dependências e scripts:
- Dependências do projeto
- Scripts de build e desenvolvimento
- Metadados do projeto

#### `tsconfig.json`
Configuração do TypeScript:
- Opções do compilador
- Caminhos de módulos
- Strict mode

### Código Fonte

#### `src/main.ts`
Ponto de entrada da aplicação:
- Bootstrap do Angular
- Configuração inicial

#### `src/index.html`
HTML principal:
- Meta tags
- Links para fontes
- Tag `<app-root>`

#### `src/styles.scss`
Estilos globais:
- Variáveis CSS
- Temas (claro/escuro)
- Estilos base
- Animações globais

### Componentes

#### Header (`components/header/`)
**Responsabilidade**: Navegação e controles globais
- Menu de navegação
- Seletor de idioma
- Toggle de tema
- Menu mobile

**Principais recursos**:
- Navegação responsiva
- Animações de menu
- Estados ativos

#### Home (`components/home/`)
**Responsabilidade**: Página inicial
- Apresentação pessoal
- Call-to-actions
- Links sociais
- Imagem de perfil

**Principais recursos**:
- Animações de entrada
- Design atrativo
- Scroll indicator

#### About (`components/about/`)
**Responsabilidade**: Informações profissionais
- Timeline de experiências
- Habilidades técnicas
- Descrição pessoal

**Principais recursos**:
- Timeline animada
- Barras de progresso
- Cards de habilidades

#### Portfolio (`components/portfolio/`)
**Responsabilidade**: Showcase de projetos
- Grid de projetos
- Detalhes de tecnologias
- Links externos

**Principais recursos**:
- Cards interativos
- Overlay com links
- Grid responsivo

#### Contact (`components/contact/`)
**Responsabilidade**: Formulário e informações de contato
- Formulário de contato
- Informações de contato
- Links sociais

**Principais recursos**:
- Validação de formulário
- Feedback visual
- Cards de informação

### Serviços

#### `theme.service.ts`
**Responsabilidade**: Gerenciamento de tema
- Toggle entre claro/escuro
- Persistência no localStorage
- Detecção de preferência do sistema
- Aplicação de classes CSS

**Principais métodos**:
- `toggleTheme()`: Alterna o tema
- `loadTheme()`: Carrega tema salvo
- `applyTheme()`: Aplica classes CSS

#### `translation.service.ts`
**Responsabilidade**: Sistema de tradução
- Gerenciamento de idiomas
- Traduções centralizadas
- Persistência no localStorage

**Principais métodos**:
- `setLanguage(lang)`: Define idioma
- `translate(key)`: Retorna tradução
- `t(key)`: Atalho para translate

**Idiomas suportados**:
- Português (pt)
- Inglês (en)
- Espanhol (es)

### Rotas

#### `app.routes.ts`
Define as rotas da aplicação:

```typescript
[
  { path: '', component: HomeComponent },           // /
  { path: 'about', component: AboutComponent },     // /about
  { path: 'portfolio', component: PortfolioComponent }, // /portfolio
  { path: 'contact', component: ContactComponent }, // /contact
  { path: '**', redirectTo: '' }                   // Fallback
]
```

## 🎨 Sistema de Estilos

### Variáveis CSS

Definidas em `src/styles.scss`:

```scss
:root {
  --accent-color: #FFAB10;  // Cor de destaque
}

// Tema Claro
--bg-primary: #ffffff;      // Fundo principal
--bg-secondary: #f5f5f5;    // Fundo secundário
--text-primary: #1a1a1a;    // Texto principal
--text-secondary: #666666;  // Texto secundário

// Tema Escuro
--bg-primary: #1a1a1a;      // Fundo principal
--bg-secondary: #2a2a2a;    // Fundo secundário
--text-primary: #ffffff;    // Texto principal
--text-secondary: #b3b3b3;  // Texto secundário
```

### Arquitetura de Estilos

1. **Estilos Globais** (`styles.scss`)
   - Reset CSS
   - Variáveis
   - Temas
   - Utilitários

2. **Estilos de Componente** (`.component.scss`)
   - Específicos do componente
   - Encapsulados
   - Responsivos

### Responsividade

Breakpoints padrão:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔄 Fluxo de Dados

```
User Action
    ↓
Component (Template)
    ↓
Component (TypeScript)
    ↓
Service (se necessário)
    ↓
Update View
```

### Exemplo: Mudança de Tema

```
1. User clica no botão de tema (header.component.html)
2. Chama toggleTheme() (header.component.ts)
3. Chama themeService.toggleTheme()
4. Service atualiza signal isDarkMode
5. Service aplica classes CSS no body
6. View é atualizada automaticamente (signals)
```

## 📦 Build

### Desenvolvimento
```bash
ng serve
```
- Hot reload
- Source maps
- Não otimizado

### Produção
```bash
ng build --configuration production
```
- Minificado
- Tree-shaking
- AOT compilation
- Otimizado

**Output**: `dist/portfolio/browser/`

## 🧩 Padrões Utilizados

### Standalone Components
Todos os componentes são standalone (não usam NgModule)

### Signals
Usado para reatividade:
- `themeService.isDarkMode`
- `translationService.currentLang`

### Dependency Injection
Serviços injetados com `inject()`:
```typescript
themeService = inject(ThemeService);
```

### Routing
Navegação declarativa:
```html
<a routerLink="/about">Sobre</a>
```

## 🔍 Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (`HeaderComponent`)
- **Serviços**: PascalCase + Service (`ThemeService`)
- **Arquivos**: kebab-case (`header.component.ts`)
- **Variáveis**: camelCase (`isDarkMode`)
- **Constantes**: UPPER_SNAKE_CASE (`THEME_KEY`)

### Estrutura de Componente
```typescript
@Component({
  selector: 'app-nome',
  imports: [...],
  templateUrl: './nome.component.html',
  styleUrl: './nome.component.scss'
})
export class NomeComponent {
  // Injeções
  service = inject(Service);
  
  // Propriedades
  property = 'value';
  
  // Métodos
  method(): void {
    // ...
  }
}
```

## 📚 Recursos Adicionais

- [Angular Docs](https://angular.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [SCSS Guide](https://sass-lang.com/guide)

---

✨ Esta estrutura foi projetada para ser simples, escalável e fácil de manter!

