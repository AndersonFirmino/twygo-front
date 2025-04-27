# Twygo

Este projeto é um setup base para aplicações React com TypeScript e Vite, incluindo configuração completa de ESLint, Prettier, arquitetura em camadas clara e escalável.

---

## ✨ Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) com regras opinativas
- [Prettier](https://prettier.io/) com padronização obrigatória

---

## 🚀 Scripts

```bash
pnpm dev           # roda a aplicação em modo desenvolvimento
pnpm build         # builda o projeto para produção
pnpm lint          # executa o lint com ESLint
```

---

## 🌎 Organização de Pastas

### `src/`

| Diretório               | Responsabilidade                                                                 |
|-------------------------|----------------------------------------------------------------------------------|
| `ui/`                   | Tudo relacionado a UI/React                                                      |
| `ui/app/`               | Bootstrap, iniciação do app                                                      |
| `ui/components/`        | Componentes reutilizáveis                                                        |
| `ui/hooks/`             | Hooks customizados de UI                                                         |
| `ui/pages/`             | Páginas completas por rota                                                       |
| `ui/router/`            | Configuração e renderização de rotas                                             |
| `ui/styles/`            | Reset global, tokens, variáveis                                                  |
| `ui/theme/`             | Contexto de tema, configurações de design system                                 |
| `data/`                 | Lógica de acesso a dados: repositórios, services                                 |
| `domain/`               | Regras de negócio e entidades de domínio                                         |
| `errors/`               | Mapas, mensagens e classes de erro                                               |
| `infra/`                | Integrações técnicas externas                                                    |
| `inversify/`            | Injeção de dependência                                                           |
| `shared/`               | Constantes, helpers, schemas reutilizáveis (global)                              |
| `utils/`                | Funções utilitárias de baixo nível                                               |

---

## 🧰 Padrões obrigatórios do projeto

### 📄 Nomenclatura

- Sempre usar `kebab-case` para arquivos e pastas.

### ✏️ React

- Sempre declarar componentes com `const` e tipagem `React.FC`:

```tsx
import React from 'react'

const MeuComponente: React.FC = () => {
  return <div />
}
```

- Sempre importar `React` explicitamente.
- Nunca usar `function` para declarar componentes.
- Nunca usar `any`, `as`, `!` ou qualquer tipo de assertion.

### 🔧 Layouts com CSS

- Sempre usar `display: flex` para alinhamento e disposição de elementos.
- Nunca usar `margin` para espaçamento. Sempre utilizar `gap`.

### 🔢 Tipagem e estrutura

- Todas as `interfaces` devem ser declaradas exclusivamente em `interfaces.ts`.
- Todos os `enums` devem ser declarados exclusivamente em `enums.ts`.
- Tipos auxiliares (`type`) devem seguir o mesmo padrão, separados em arquivos próprios.
- Nenhuma interface, enum ou tipo pode ser declarado inline em componentes ou arquivos `.tsx` e `.ts`.

---

## 🧾 Regras de Commit

Este projeto segue a [convenção GitMoji](https://gitmoji.dev/) com formatação obrigatória:

```
[EMOJI] [tipo](escopo): descrição em inglês no tempo presente
```

### Exemplos:

- ✨ feat(`router`): Add support for dynamic routing
- ✅ chore(`core`): Configure project settings
- ♻️ refactor(`ui/components`): Improve button structure
- 🔧 chore(`eslint.config.ts`): Adjust custom lint rules
- ✏️ docs(`README.md`): Update project instructions

### Regras:

- Sempre escrever em **inglês**.
- Sempre usar um **emoji GitMoji** no início.
- Sempre especificar o **escopo entre parênteses**.
- Utilizar **tempo verbal presente** e frases diretas.
- Não exceder **120 caracteres por linha**.
- Nunca usar emoji como texto (`:sparkles:` ❌, `✨` ✅).

---

## 📚 Licença

Este projeto foi desenvolvido exclusivamente para fins de avaliação em processo seletivo.
Não deve ser utilizado, redistribuído ou modificado para outros propósitos sem autorização explícita.
