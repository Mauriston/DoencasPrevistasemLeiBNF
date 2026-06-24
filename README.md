# Doenças Previstas em Lei — BNF

Aplicação web progressiva (PWA, mobile-first) para a **Junta Regular de Saúde (JRS) do Hospital Naval de Recife (HNRe)**, focada na consulta a doenças previstas em lei, normativas, avaliações e material de estudo.

Este projeto é uma **versão reduzida** do [Guia Médico Naval — JRS/HNRe](https://github.com/Mauriston/DoencasEPareceresJRS). Em relação ao app completo, **não inclui**:

- **Menu Documentos** e suas páginas/funções (Pareceres, Perícia Menor, Mensagens) — e, com isso, as integrações de backend (Google Apps Script, Gemini/IA, Firebase) que as alimentavam.
- Item **HNRe** do menu Normas e suas páginas (Regimento Interno, Ordem Interna da JRS).
- Item **Roteiro JRS** do menu Extras e suas páginas.

> O item **Templates**, que no app original ficava no menu Documentos, foi **movido para o menu Normas**.

---

## 🚀 Funcionalidades

A navegação ocorre via *Single Page Application* (hook `currentView` em `App.tsx`), com barra inferior de 4 blocos:

1. **Benefícios** (*estetoscópio*): `Doenças de Lei` (com Calculadora de CDR), `Finalidades` da perícia e `Portaria`.
2. **Avaliações** (*prancheta*): critérios eliminatórios para `Concursos` e `Exames` obrigatórios.
3. **Normas** (*martelo*): `DGPM-406`, `Legislação` e `Templates`.
4. **Extras** (*widgets*): `Casos` interativos, `Estudo`, `Infográficos` e `Resumos`.

---

## 💻 Tecnologias

- **Framework:** React 19 + TypeScript + Vite
- **Estilização:** Tailwind CSS (via CDN) com a identidade visual da Marinha do Brasil (Azul `#050F41`, Dourado `#FAB932`, Verde `#079551`)
- **Ícones:** Lucide React e Google Material Symbols
- **Exportação:** `jspdf`

---

## ▶️ Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento (porta 3000)
npm run build    # build de produção em /dist
npm run preview  # pré-visualizar o build
```

## 🚀 Deploy

O workflow `.github/workflows/deploy.yml` publica automaticamente no GitHub Pages a cada push na branch `main` (base configurada em `vite.config.ts` como `/DoencasPrevistasemLeiBNF/`).
