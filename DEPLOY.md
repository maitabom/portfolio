# 🚀 Guia de Deploy

Este guia mostra como fazer deploy do seu portfólio em diferentes plataformas.

## 📦 Preparação

Antes de fazer deploy, compile o projeto:

```bash
npm run build
```

Os arquivos compilados estarão em `dist/portfolio/browser/`.

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

**Mais fácil e rápido!**

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Para produção:
```bash
vercel --prod
```

**Ou use a interface web:**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure:
   - Build Command: `npm run build`
   - Output Directory: `dist/portfolio/browser`
4. Deploy!

---

### 2. Netlify

1. Instale o Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Faça login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist/portfolio/browser
```

**Ou use a interface web:**
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/portfolio/browser` para o site
3. Pronto!

**Configuração do netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist/portfolio/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

1. Instale o angular-cli-ghpages:
```bash
npm install -g angular-cli-ghpages
```

2. Build para GitHub Pages:
```bash
ng build --configuration production --base-href "https://SEU-USUARIO.github.io/SEU-REPOSITORIO/"
```

3. Deploy:
```bash
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

---

### 4. Firebase Hosting

1. Instale o Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Faça login:
```bash
firebase login
```

3. Inicialize o projeto:
```bash
firebase init hosting
```

Configurações:
- Public directory: `dist/portfolio/browser`
- Single-page app: `Yes`
- Overwrite index.html: `No`

4. Deploy:
```bash
firebase deploy
```

**firebase.json:**
```json
{
  "hosting": {
    "public": "dist/portfolio/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

### 5. Servidor Próprio (Apache/Nginx)

#### Apache

Crie um arquivo `.htaccess` na pasta `dist/portfolio/browser`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx

Adicione ao seu `nginx.conf`:

```nginx
server {
  listen 80;
  server_name seu-dominio.com;
  root /caminho/para/dist/portfolio/browser;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## 🔧 Configurações Importantes

### Base Href

Se o site não estiver na raiz do domínio, configure o `base-href`:

```bash
ng build --base-href "/subpasta/"
```

### Variáveis de Ambiente

Para diferentes ambientes, crie arquivos:
- `src/environments/environment.ts` (desenvolvimento)
- `src/environments/environment.prod.ts` (produção)

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.seusite.com'
};
```

---

## ✅ Checklist Pré-Deploy

- [ ] Teste o build localmente
- [ ] Verifique todas as rotas
- [ ] Teste em diferentes navegadores
- [ ] Teste responsividade
- [ ] Verifique links externos
- [ ] Atualize informações de contato
- [ ] Configure domínio personalizado (opcional)
- [ ] Configure SSL/HTTPS
- [ ] Configure analytics (opcional)

---

## 🌟 Dicas

1. **Performance**: Use `ng build --configuration production` para otimização
2. **SEO**: Configure meta tags no `index.html`
3. **Analytics**: Adicione Google Analytics se necessário
4. **Domínio**: Configure um domínio personalizado para profissionalismo
5. **SSL**: Sempre use HTTPS (gratuito na maioria das plataformas)

---

## 🆘 Problemas Comuns

### Página em branco após deploy
- Verifique o `base-href`
- Verifique se os arquivos foram copiados corretamente

### Erro 404 ao recarregar página
- Configure redirecionamento para `index.html`
- Veja configurações específicas da plataforma acima

### Estilos não carregam
- Verifique caminhos dos assets
- Verifique configuração do `angular.json`

---

✨ **Recomendação**: Para iniciantes, use **Vercel** ou **Netlify** - são gratuitos e muito fáceis!

