# Doenças Previstas em Lei — BNF

Aplicação web progressiva (PWA, mobile-first) que funciona como um **"Livro de Bolso"** de acesso instantâneo ao rol de doenças previstas nas legislações que garantem isenções ou amparam reformas na esfera civil-militar.

Este projeto é a versão **standalone** do módulo *Doenças de Lei*, originalmente parte do [Guia Médico Naval — JRS/HNRe](https://github.com/Mauriston/DoencasEPareceresJRS).

---

## 🚀 Funcionalidades

- **Consulta rápida:** lista expansível de patologias com pesquisa livre em tempo real por **doença, diagnóstico ou critério**.
- **Detalhamento pericial:** para cada doença, exibe a **Definição**, os **Critérios de Gravidade** (por diagnóstico) e a **Documentação exigida** para reconhecimento.
- **Calculadora de CDR:** *Clinical Dementia Rating* validada em português, integrada ao diagnóstico de Demência (Alienação Mental). Calcula o Escore Global e o CDR-SB.
- **Exportação:** copiar o conteúdo para a área de transferência ou **baixar em PDF** (`jspdf`).

### Doenças cobertas

Alienação Mental · Cardiopatia Grave · Cegueira · Contaminação por Radiação · Doença de Parkinson · Esclerose Múltipla · Espondilite Anquilosante · Doença de Paget · Fibrose Cística · Hanseníase · Hepatopatia Grave · Nefropatia Grave · Neoplasia Maligna · Paralisia Irreversível e Incapacitante · Pênfigo · SIDA/AIDS · Tuberculose Ativa.

---

## 💻 Tecnologias

- **Framework:** React 19 + TypeScript + Vite
- **Estilização:** Tailwind CSS (via CDN) com a identidade visual da Marinha do Brasil (Azul `#050F41`, Dourado `#FAB932`, Verde `#079551`)
- **Ícones:** Lucide React e Google Material Symbols
- **Exportação:** `jspdf`

---

## 📁 Estrutura

- `index.html` — index da PWA (config Tailwind, fontes, importmap)
- `index.tsx` — entry point React
- `App.tsx` — monta o `DiseaseGuide`
- `types.ts` — tipos `Disease` e `Diagnosis`
- `constants.ts` — banco de dados estático das doenças
- `components/DiseaseGuide.tsx` — guia de doenças + calculadora CDR
- `components/Header.tsx` — cabeçalho institucional

---

## ▶️ Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento (porta 3000)
npm run build    # build de produção em /dist
npm run preview  # pré-visualizar o build
```
