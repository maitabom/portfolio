# 🌍 Arquivos de Tradução

Esta pasta contém os arquivos JSON de tradução para o portfólio.

## 📁 Estrutura

```
locales/
├── pt.json    # Português (Brasil)
├── en.json    # Inglês
├── es.json    # Espanhol
└── README.md  # Este arquivo
```

## 📝 Formato dos Arquivos

Cada arquivo JSON segue a mesma estrutura hierárquica:

```json
{
  "nav": {
    "home": "Texto",
    "about": "Texto",
    "portfolio": "Texto",
    "contact": "Texto"
  },
  "home": {
    "greeting": "Texto",
    "role": "Texto",
    "description": "Texto",
    "cta": "Texto",
    "contact": "Texto"
  },
  "about": {
    "title": "Texto",
    "experience": "Texto",
    "skills": "Texto",
    "description": "Texto"
  },
  "portfolio": {
    "title": "Texto",
    "viewProject": "Texto",
    "technologies": "Texto"
  },
  "contact": {
    "title": "Texto",
    "name": "Texto",
    "email": "Texto",
    "message": "Texto",
    "send": "Texto",
    "social": "Texto"
  }
}
```

## ✏️ Como Editar

1. Abra o arquivo JSON do idioma desejado
2. Modifique o texto mantendo a estrutura
3. Salve o arquivo
4. Recarregue a aplicação

**Exemplo:**

```json
{
  "home": {
    "greeting": "Seu novo texto aqui"
  }
}
```

## ➕ Como Adicionar Nova Tradução

### 1. Adicione nos 3 arquivos JSON

**pt.json:**
```json
{
  "secao": {
    "chave": "Texto em Português"
  }
}
```

**en.json:**
```json
{
  "secao": {
    "chave": "Text in English"
  }
}
```

**es.json:**
```json
{
  "secao": {
    "chave": "Texto en Español"
  }
}
```

### 2. Use no template HTML

```html
{{ t('secao.chave') }}
```

## 🌐 Adicionar Novo Idioma

### 1. Crie o arquivo JSON

Crie um novo arquivo seguindo o padrão: `codigo-idioma.json`

Exemplo: `fr.json` para Francês

### 2. Adicione o tipo no serviço

Edite `src/app/services/translation.service.ts`:

```typescript
export type Language = 'pt' | 'en' | 'es' | 'fr';
```

### 3. Carregue o novo idioma

No método `loadTranslations()`, adicione o novo idioma:

```typescript
const languages: Language[] = ['pt', 'en', 'es', 'fr'];
```

### 4. Adicione o botão no header

Edite `src/app/components/header/header.component.html`:

```html
<button 
  class="lang-btn" 
  [class.active]="translationService.currentLang() === 'fr'"
  (click)="changeLanguage('fr')"
  title="Français">
  FR
</button>
```

## 🔍 Estrutura das Chaves

As chaves seguem o padrão: `secao.item`

- **nav**: Menu de navegação
- **home**: Página inicial
- **about**: Página sobre
- **portfolio**: Página de projetos
- **contact**: Página de contato

## 💡 Dicas

1. **Mantenha a estrutura**: Todos os arquivos devem ter as mesmas chaves
2. **Seja consistente**: Use o mesmo tom em todas as traduções
3. **Teste**: Sempre teste após fazer alterações
4. **Backup**: Faça backup antes de grandes mudanças

## ⚠️ Importante

- Não remova chaves existentes sem atualizar o código
- Mantenha a codificação UTF-8
- Use aspas duplas no JSON
- Não use vírgula após o último item

---

✨ **Dica**: Use um editor JSON para validar a sintaxe antes de salvar!

