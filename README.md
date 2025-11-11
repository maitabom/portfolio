# Portfolio de Desenvolvedor

Um site portfólio moderno e responsivo desenvolvido em Angular, com suporte a múltiplos idiomas e tema claro/escuro.

## 🚀 Características

- ✨ Design moderno e responsivo
- 🌓 Modo claro e escuro com cor de destaque #FFAB10
- 🌍 Suporte multilíngue (Português, Inglês e Espanhol)
- 📱 Totalmente responsivo para todos os dispositivos
- 🎨 Animações suaves e transições elegantes
- ⚡ Performance otimizada
- ♿ Acessível (WCAG)

## 📋 Seções

- **Home**: Página inicial com apresentação e links sociais
- **Sobre**: Histórico profissional resumido e habilidades técnicas
- **Portfólio**: Galeria de projetos desenvolvidos
- **Contato**: Formulário de contato e informações de redes sociais

## 🛠️ Tecnologias Utilizadas

- Angular 19+
- TypeScript
- SCSS
- Signals (Angular)
- Standalone Components

## 📦 Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## 🚀 Executando o Projeto

### Modo de Desenvolvimento

```bash
ng serve
```

Acesse `http://localhost:4200/` no navegador. A aplicação será recarregada automaticamente quando você modificar os arquivos.

### Build de Produção

```bash
ng build
```

Os arquivos de build serão gerados na pasta `dist/`.

## 🎨 Personalização

### Cores

A cor de destaque (#FFAB10) pode ser alterada no arquivo `src/styles.scss`:

```scss
:root {
  --accent-color: #FFAB10; // Altere aqui
}
```

### Conteúdo

- **Experiência Profissional**: Edite `src/app/components/about/about.component.ts`
- **Projetos**: Edite `src/app/components/portfolio/portfolio.component.ts`
- **Informações de Contato**: Edite `src/app/components/contact/contact.component.html`

### Traduções

As traduções estão em arquivos JSON separados na pasta `locales/`:

- `locales/pt.json` - Português
- `locales/en.json` - Inglês
- `locales/es.json` - Espanhol

Para editar uma tradução, basta modificar o arquivo JSON correspondente:

```json
{
  "home": {
    "greeting": "Seu novo texto aqui"
  }
}
```

Para mais detalhes, consulte `locales/README.md`.

## 🌐 Idiomas Suportados

- 🇧🇷 Português (PT)
- 🇺🇸 Inglês (EN)
- 🇪🇸 Espanhol (ES)

O idioma é salvo automaticamente no localStorage e persiste entre sessões.

## 🎨 Temas

O site suporta dois temas:

- **Tema Claro**: Fundo branco com texto escuro
- **Tema Escuro**: Fundo escuro com texto claro

O tema é detectado automaticamente com base na preferência do sistema e pode ser alternado manualmente. A preferência é salva no localStorage.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Dispositivos móveis (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktops (> 1024px)

## 🔧 Scripts Disponíveis

- `ng serve` - Inicia o servidor de desenvolvimento
- `ng build` - Compila o projeto para produção
- `ng test` - Executa os testes unitários
- `ng lint` - Verifica o código com o linter

## 📄 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── header/         # Cabeçalho com navegação
│   │   ├── home/           # Página inicial
│   │   ├── about/          # Sobre mim
│   │   ├── portfolio/      # Portfólio de projetos
│   │   └── contact/        # Página de contato
│   ├── services/
│   │   ├── theme.service.ts        # Gerenciamento de tema
│   │   └── translation.service.ts  # Sistema de tradução
│   ├── app.component.*     # Componente raiz
│   ├── app.config.ts       # Configuração da aplicação
│   └── app.routes.ts       # Rotas da aplicação
├── styles.scss             # Estilos globais
└── index.html              # HTML principal
```

## 🤝 Contribuindo

Sinta-se à vontade para fazer fork do projeto e enviar pull requests com melhorias!

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 📧 Contato

Para mais informações, entre em contato através do formulário no site ou pelas redes sociais.

---

Desenvolvido com ❤️ usando Angular
