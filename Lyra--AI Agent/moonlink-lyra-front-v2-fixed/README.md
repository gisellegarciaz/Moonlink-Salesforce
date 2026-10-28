# Moonlink · Lyra

Front-end experimental do portal de atendimento da Moonlink.

## Stack

- React
- Vite
- CSS
- Lucide React
- GSAP (já incluído para as próximas animações)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite no terminal.

## Próximas etapas

1. Refinar a identidade visual e microinterações.
2. Criar a API/backend da Lyra.
3. Adicionar RAG com a base de conhecimento Moonlink.
4. Integrar consultas e ações ao Salesforce.
5. Transformar o chat simulado em atendimento real.

## Assets da Lyra

As expressões foram separadas do concept board e ficam em `public/assets/lyra/`: feliz, falando, pensando, surpresa, concordando, processando, apontando, explicando, celebrando, triste, confusa e dormindo. O componente `LyraAvatar` seleciona a expressão por `mood`.
