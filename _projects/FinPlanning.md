---
layout: page
title: "Financial Planning & Wealth Optimization Client Engine"
title_pt: "Ferramenta de Planejamento Patrimonial e Eficiência Tributária"
page_id: "project_FinPlanning"
description: "Financial lifecycle modeling tool featuring cash flow simulations and tax drag optimization models across Brazilian investment funds and tax..."
description_pt: "Ferramenta de modelagem de ciclo de vida financeiro, projeção de fluxo de caixa pessoal e alocação tributária eficiente (otimização de come-..."
img: assets/img/FinPlanning_Cover.jpg
importance: 7
category: "Data Analytics"
confidentiality: "public"
institution: "Portfólio Pessoal / Meta Investimentos"
period: "2017 - Present"
tags: [data-analytics, wealth-management, financial-planning, vba, python, looker-studio]
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

{% if site.active_lang == 'pt-br' %}
**Contexto / Organização**: Portfólio Pessoal / Meta Investimentos  
**Período**: 2017 - Presente  
**Categoria de Atuação**: Data Analytics  
**Tecnologias**: `Excel Avançado`, `VBA`, `Python`, `Google Looker Studio`  

---

## Visão Geral Executiva

Ferramenta de modelagem de ciclo de vida financeiro, projeção de fluxo de caixa pessoal e alocação tributária eficiente (otimização de come-cotas em fundos de investimento vs renda fixa/isenções).

{% else %}
**Organization / Context**: Portfólio Pessoal / Meta Investimentos  
**Timeline**: 2017 - Present  
**Domain Category**: Data Analytics  
**Technologies**: `Excel Avançado`, `VBA`, `Python`, `Google Looker Studio`  

---

## Executive Overview

Financial lifecycle modeling tool featuring cash flow simulations and tax drag optimization models across Brazilian investment funds and tax-exempt fixed income vehicles.

{% endif %}

{% if site.active_lang == 'pt-br' %}
## Arquitetura & Fluxo de Dados

O diagrama abaixo ilustra a topologia e esteira de processamento dos componentes técnicos sanitizados:
{% else %}
## Architecture & Data Flow

The diagram below illustrates the sanitized high-level component topology and data processing pipeline:
{% endif %}

```mermaid
flowchart LR
  A[Perfil do Investidor & Fluxo de Caixa] --> B[Motor de Simulação de Ciclo de Vida]
  B --> C[Otimizador Tributário: Come-Cotas vs Isenções]
  C --> D[Módulo de Alocação de Classes de Ativos]
  D --> E[Relatório Executivo & Dashboard Looker Studio]
```

{% if site.active_lang == 'pt-br' %}
## Destaques de Engenharia

- **Simulação de Ciclo de Vida: Projeção dinâmica de fluxo de caixa e acumulação patrimonial com premissas macroeconômicas parametrizadas.**
- **Eficiência Tributária: Otimização sistemática de perdas com come-cotas em fundos versus ativos isentos e previdência complementar.**
- **Escalabilidade Comercial: Diagnóstico patrimonial padronizado para acelerar o processo de onboarding de clientes.**

{% else %}
## Key Engineering Highlights

- **Lifecycle Wealth Simulation: Dynamic cash flow and wealth accumulation projections with parameterized macroeconomic scenarios.**
- **Tax Efficiency Optimization: Systematic minimization of tax drag across mutual funds, tax-exempt fixed income, and pension plans.**
- **Commercial Scalability: Standardized client wealth diagnostic workflows accelerating customer onboarding.**

{% endif %}

{% if site.active_lang == 'pt-br' %}
## Referências e Comprovações

- [Documentação do Projeto / Interface Online](https://pablodiegoo.github.io/projects/FinPlanning/)

{% else %}
## References & Verification

- [Project Documentation / Live Interface](https://pablodiegoo.github.io/projects/FinPlanning/)

{% endif %}
