# 🚀 Início Rápido

## Executar o Projeto

```bash
npm start
```

ou

```bash
ng serve
```

Acesse: `http://localhost:4200`

## Build de Produção

```bash
npm run build
```

ou

```bash
ng build --configuration production
```

## 🎨 Personalizar

### 1. Informações Pessoais

Edite os seguintes arquivos para adicionar suas informações:

- `src/app/components/home/home.component.html` - Nome e descrição
- `src/app/components/about/about.component.ts` - Experiência e habilidades
- `src/app/components/portfolio/portfolio.component.ts` - Projetos
- `src/app/components/contact/contact.component.html` - Informações de contato

### 2. Links de Redes Sociais

Atualize os links em:
- `src/app/components/home/home.component.html`
- `src/app/components/contact/contact.component.html`

### 3. Cor de Destaque

Altere a cor #FFAB10 em `src/styles.scss`:

```scss
:root {
  --accent-color: #FFAB10; // Sua cor aqui
}
```

## 📱 Funcionalidades

- ✅ Tema claro/escuro (botão no header)
- ✅ Multilíngue PT/EN/ES (botões no header)
- ✅ Navegação responsiva
- ✅ Animações suaves
- ✅ Formulário de contato

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm start

# Build
npm run build

# Testes
npm test

# Lint
ng lint
```

## 📂 Estrutura Principal

```
src/app/
├── components/
│   ├── header/     → Navegação
│   ├── home/       → Página inicial
│   ├── about/      → Sobre mim
│   ├── portfolio/  → Projetos
│   └── contact/    → Contato
└── services/
    ├── theme.service.ts        → Gerencia tema
    └── translation.service.ts  → Gerencia idiomas
```

## 💡 Dicas

1. **Adicionar novo idioma**: Edite `translation.service.ts`
2. **Adicionar nova página**: Use `ng generate component components/nome`
3. **Adicionar nova rota**: Edite `app.routes.ts`

---

✨ Pronto para começar! Execute `npm start` e comece a personalizar seu portfólio.

