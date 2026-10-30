---
layout: page
title: "DataProfile: Notebook-Normalized Portfolio Telemetry Engine in Go"
title_pt: "DataProfile: Telemetria de Portfólio com Desinflação de Notebooks em Go"
page_id: "project_dataprofile"
description: "Portfolio telemetry and statistical visualization engine built in Go 1.23+ (standard library only, zero external dependencies) for data scie..."
description_pt: "Motor de telemetria e visualização estatística de portfólio escrito em Go 1.23+ (biblioteca padrão, zero dependências externas) para cientis..."
img: assets/img/projects/dataprofile/thumbnail.png
og_image: /assets/img/projects/dataprofile/thumbnail.png
importance: 1
featured: true
category: "Data Engineering"
confidentiality: "public"
institution: "Projeto Autônomo / Open Source"
period: "2026 - Present"
tech_stack: ['Go 1.23+', 'GitHub GraphQL v4', 'GitHub REST v3', 'Chrome DevTools Protocol (CDP)', 'Kaggle API v1', 'Hugging Face Hub API', 'SVG / SMIL', 'GitHub Actions']
tags: [data-engineering, go, data-visualization, edward-tufte, stephen-few, jupyter-notebook, github-actions, kaggle, huggingface, svg]
status: "active"
github: "https://github.com/pablodiegoo/dataprofile"
redirect_from:
  - /projects/DataProfile/
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

{% if site.active_lang == 'pt-br' %}
**Contexto / Organização**: Projeto Autônomo / Open Source  
**Período**: 2026 - Presente  
**Categoria de Atuação**: Data Engineering  
**Tecnologias**: `Go 1.23+`, `GitHub GraphQL v4`, `GitHub REST v3`, `Chrome DevTools Protocol (CDP)`, `Kaggle API v1`, `Hugging Face Hub API`, `SVG / SMIL`, `GitHub Actions`  

---

## Visão Geral Executiva

Motor de telemetria e visualização estatística de portfólio escrito em Go 1.23+ (biblioteca padrão, zero dependências externas) para cientistas de dados, engenheiros de machine learning e pesquisadores quantitativos. Desinfla imagens base64 e saídas de células embutidas em arquivos Jupyter Notebook (.ipynb) antes do cômputo de bytes, varre manifestos de dependências e agrega métricas do GitHub, Kaggle e Hugging Face Hub em 36 painéis SVG paramétricos nas escolas de Edward Tufte, Stephen Few, Alberto Cairo e Nigel Holmes.

{% else %}
**Organization / Context**: Projeto Autônomo / Open Source  
**Timeline**: 2026 - Present  
**Domain Category**: Data Engineering  
**Technologies**: `Go 1.23+`, `GitHub GraphQL v4`, `GitHub REST v3`, `Chrome DevTools Protocol (CDP)`, `Kaggle API v1`, `Hugging Face Hub API`, `SVG / SMIL`, `GitHub Actions`  

---

## Executive Overview

Portfolio telemetry and statistical visualization engine built in Go 1.23+ (standard library only, zero external dependencies) for data scientists, machine learning engineers, and quantitative researchers. Strips embedded base64 chart images and cell output payloads from Jupyter Notebooks (.ipynb) before byte counting, scans dependency manifests across the data stack, and aggregates metrics from GitHub, Kaggle, and Hugging Face Hub into 36 parameterized SVG panels across the visualization schools of Edward Tufte, Stephen Few, Alberto Cairo, and Nigel Holmes.

{% endif %}

{% if site.active_lang == 'pt-br' %}
## Painéis Summary nas Quatro Escolas de Visualização

O motor renderiza cada dimensão analítica e o painel consolidado (`summary.svg`) nas quatro gramáticas clássicas de visualização estatística:

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">I. Escola Edward Tufte (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-tufte.svg" alt="I. Escola Edward Tufte (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">Gramática de razão tinta-dados máxima, sem grades externas, com dot-dash plot de código normalizado, supertabelas e sparkline com faixa interquartil.</p>
  </div>
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">II. Escola Stephen Few (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-few.svg" alt="II. Escola Stephen Few (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">Painel executivo para leitura em três segundos com faixa superior de KPIs, bullet graphs com bandas qualitativas e marcador vertical de meta.</p>
  </div>
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">III. Escola Alberto Cairo (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-cairo.svg" alt="III. Escola Alberto Cairo (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">Abordagem editorial de jornalismo de dados com régua carmesim, gráficos lollipop com linha tracejada de referência e nota analítica contextual (↳).</p>
  </div>
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">IV. Escola Nigel Holmes & ISOTYPE (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-holmes.svg" alt="IV. Escola Nigel Holmes & ISOTYPE (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">Gramática pictórica com faixa de cabeçalho, blocos unitários de 10% do código, pódio em degraus de progressão no Kaggle e selos visuais da stack.</p>
  </div>
</div>

{% else %}
## Summary Panels Across the Four Visualization Schools

The engine renders each analytical dimension and the consolidated overview (`summary.svg`) across four classic statistical visualization grammars:

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">I. Edward Tufte School (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-tufte.svg" alt="I. Edward Tufte School (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">High data-ink ratio grammar with zero outer cages, dot-dash plot for normalized code share, supertables, and inline sparkline with interquartile band.</p>
  </div>
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">II. Stephen Few School (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-few.svg" alt="II. Stephen Few School (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">Three-second scanning dashboard with top KPI strip, bullet graphs featuring qualitative bands, and vertical target threshold markers.</p>
  </div>
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">III. Alberto Cairo School (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-cairo.svg" alt="III. Alberto Cairo School (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">Data-journalism editorial layout with crimson top rule, lollipop charts with dashed benchmark lines, and contextual annotation layer (↳).</p>
  </div>
  <div class="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 shadow-sm">
    <div class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">IV. Nigel Holmes & ISOTYPE School (summary.svg)</div>
    <img src="/assets/img/projects/dataprofile/summary-holmes.svg" alt="IV. Nigel Holmes & ISOTYPE School (summary.svg)" class="w-full h-auto rounded" />
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 mb-0">Pictorial ISOTYPE grammar with header ribbon, 10% unit blocks for code share, stepped Kaggle progression podium, and visual ecosystem badges.</p>
  </div>
</div>
{% endif %}

{% if site.active_lang == 'pt-br' %}
## Arquitetura & Fluxo de Dados

O diagrama abaixo ilustra a topologia e esteira de processamento dos componentes técnicos sanitizados:
{% else %}
## Architecture & Data Flow

The diagram below illustrates the sanitized high-level component topology and data processing pipeline:
{% endif %}

```mermaid
flowchart TD
  A[Manifesto profile.yaml + Overrides .env] --> B[Carregador & Normalizador Go 1.23+]
  B --> C1[Coletor GitHub GraphQL v4 & REST v3]
  B --> C2[Coletor Híbrido Kaggle CDP + API v1]
  B --> C3[Coletor Hugging Face Hub REST]
  C1 --> D[Desinflador AST JSON de Notebooks .ipynb]
  C1 --> E[Scanner de Stack pyproject.toml / DESCRIPTION / SQL]
  D --> F[Agregador de Domínio PortfolioData]
  E --> F
  C2 --> F
  C3 --> F
  F --> G[Motor Paramétrico SVG Dual-Surface]
  G --> H1[Escola Tufte]
  G --> H2[Escola Few]
  G --> H3[Escola Cairo]
  G --> H4[Escola Holmes]
```

{% if site.active_lang == 'pt-br' %}
## Destaques de Engenharia

- **Desinflação de Notebooks (.ipynb): Remoção de imagens base64 e metadados JSON de saída antes da contagem de código-fonte para separar notebooks exploratórios (EDA) de módulos de produção.**
- **Coleta Concorrente Multi-Plataforma: Extração paralela via GitHub GraphQL v4/REST v3, Kaggle (headless Chrome CDP combinado à REST API v1) e Hugging Face Hub.**
- **Motor SVG Paramétrico Dual-Surface: Renderização determinística de 9 painéis em 4 escolas clássicas (Tufte, Few, Cairo e Holmes), com refluxo tipográfico nativo, animações SMIL e contraste WCAG AA em temas claros (#ffffff) e escuros (#0d1117).**

{% else %}
## Key Engineering Highlights

- **Notebook Deflation (.ipynb): Strips embedded base64 chart payloads and JSON cell output metadata before counting source bytes to separate exploratory notebooks (EDA) from production modules.**
- **Concurrent Multi-Source Collection: Parallel ingestion across GitHub GraphQL v4/REST v3, Kaggle (headless Chrome CDP paired with REST API v1), and Hugging Face Hub.**
- **Dual-Surface Parameterized SVG Engine: Deterministic rendering of 9 panels across 4 visualization schools (Tufte, Few, Cairo, and Holmes), with native text reflow, SMIL animations, and WCAG AA contrast on light (#ffffff) and dark (#0d1117) themes.**

{% endif %}

{% if site.active_lang == 'pt-br' %}
## Referências e Comprovações

- [Código-Fonte / Repositório Oficial no GitHub](https://github.com/pablodiegoo/dataprofile)
- [Artigo de Apresentação / Documentação no Portfólio](/blog/2026/dataprofile-telemetria-portfolio/)
- [Discussão e Apresentação na Comunidade Kaggle](https://www.kaggle.com/discussions/general/754125)

{% else %}
## References & Verification

- [Source Code / Official GitHub Repository](https://github.com/pablodiegoo/dataprofile)
- [Launch Article / Portfolio Documentation](/blog/2026/dataprofile-telemetria-portfolio/)
- [Community Discussion & Writeup on Kaggle](https://www.kaggle.com/discussions/general/754125)

{% endif %}
