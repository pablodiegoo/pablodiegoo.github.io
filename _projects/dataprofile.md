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

{% else %}
## References & Verification

- [Source Code / Official GitHub Repository](https://github.com/pablodiegoo/dataprofile)

{% endif %}
