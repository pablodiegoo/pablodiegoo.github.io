---
layout: page
title: "LongandShortR — Statistical Arbitrage & Cointegration Engine on B3 in R"
title_pt: "LongandShortR — Algoritmo de Arbitragem Estatística e Cointegração na B3 em R"
page_id: "project_LongandShortR"
description: "Systematic quantitative algorithm coded in R for daily universe-wide Engle-Granger cointegration and Augmented Dickey-Fuller (ADF) screening..."
description_pt: "Algoritmo desenvolvido em linguagem R para varredura sistemática diária de testes de raiz unitária (ADF) e cointegração de Engle-Granger sob..."
img: assets/img/projects/LongandShortR/thumbnail.png
og_image: /assets/img/projects/LongandShortR/thumbnail.png
importance: 3
category: "Quantitative Finance"
confidentiality: "public"
institution: "Meta & Actio Investimentos"
period: "2017 - 2020"
tech_stack: ['R', 'Tseries', 'Urca', 'Dplyr', 'Ggplot2', 'B3 Market Data']
tags: [quantitative-finance, r, statistical-arbitrage, cointegration, time-series, b3, pair-trading]
github: "https://github.com/pablodiegoo/LongandShortR"
redirect_from:
  - /projects/longandshortr/
  - /projects/pair_trading_r/
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

{% if site.active_lang == 'pt-br' %}
**Contexto / Organização**: Meta & Actio Investimentos  
**Período**: 2017 - 2020  
**Categoria de Atuação**: Quantitative Finance  
**Tecnologias**: `R`, `Tseries`, `Urca`, `Dplyr`, `Ggplot2`, `B3 Market Data`  

---

## Visão Geral Executiva

Algoritmo desenvolvido em linguagem R para varredura sistemática diária de testes de raiz unitária (ADF) e cointegração de Engle-Granger sobre todo o universo de ações da B3. Monitorava mais de 100 oportunidades mensais de arbitragem estatística com cálculo automatizado de meias-vidas (half-life) e z-scores.

{% else %}
**Organization / Context**: Meta & Actio Investimentos  
**Timeline**: 2017 - 2020  
**Domain Category**: Quantitative Finance  
**Technologies**: `R`, `Tseries`, `Urca`, `Dplyr`, `Ggplot2`, `B3 Market Data`  

---

## Executive Overview

Systematic quantitative algorithm coded in R for daily universe-wide Engle-Granger cointegration and Augmented Dickey-Fuller (ADF) screening on B3 equities. Scanned 100+ statistical arbitrage candidates monthly with automated half-life and z-score calculations.

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
  A[Dados de Cotações Históricas B3] --> B[Testes de Raiz Unitária ADF]
  B --> C[Regressão e Cointegração Engle-Granger]
  C --> D[Cálculo de Meia-Vida e Z-Scores]
  D --> E[Geração de Sinais de Arbitragem]
  E --> F[Painel Analítico de Pares Elegíveis]
```

{% if site.active_lang == 'pt-br' %}
## Destaques de Engenharia

- **Varredura Sistemática B3: Testes diários automatizados de estacionariedade (ADF) e cointegração de Engle-Granger em todos os pares de ações líquidos.**
- **Geração de Sinais Quantitativos: Modelagem de resíduos com cálculo de meia-vida de reversão à média e normalização por Z-score.**
- **Análise de Risco de Execução: Dimensionamento de bandas de entrada e saída considerando custos operacionais e limites estatísticos.**

{% else %}
## Key Engineering Highlights

- **Systematic B3 Screening: Automated daily Augmented Dickey-Fuller (ADF) and Engle-Granger cointegration testing across liquid equity pairs.**
- **Quantitative Signal Generation: Residual spread modeling featuring mean-reversion half-life calculation and Z-score standardization.**
- **Execution Risk Framework: Optimal entry/exit band sizing accounting for market friction and statistical confidence intervals.**

{% endif %}

{% if site.active_lang == 'pt-br' %}
## Referências e Comprovações

- [Código-Fonte / Repositório Oficial no GitHub](https://github.com/pablodiegoo/LongandShortR)

{% else %}
## References & Verification

- [Source Code / Official GitHub Repository](https://github.com/pablodiegoo/LongandShortR)

{% endif %}
