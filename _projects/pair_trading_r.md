---
layout: page
title: "Algorithmic Statistical Arbitrage System in R (Meta & Actio)"
description: "Systematic algorithm coded in R for daily universe-wide Engle-Granger cointegration and Augmented Dickey-Fuller (ADF) screening on B3 equiti..."
img: assets/img/7.jpg
importance: 8
category: "Quantitative Finance"
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

> [!NOTE]
> **Sanitized Technical Specification (`proprietary_sanitized`)**: This technical sheet is an authorized public specification adhering to the repository's data governance standards. Source code, production database instances, and API credentials remain strictly confidential and proprietary to the sponsoring organization.

**Organization / Context**: Meta & Actio Investimentos  
**Timeline**: 2017 - 2020  
**Domain Category**: Quantitative Finance  
**Technologies**: `R`, `Tseries`, `Urca`, `Dplyr`, `Ggplot2`  

---

## Executive Overview

Systematic algorithm coded in R for daily universe-wide Engle-Granger cointegration and Augmented Dickey-Fuller (ADF) screening on B3 equities. Scanned 100+ statistical arbitrage candidates monthly with automated half-life and z-score calculations.

*Algoritmo desenvolvido em linguagem R para varredura sistemática diária de testes de raiz unitária (ADF) e cointegração de Engle-Granger sobre todo o universo de ações da B3. Monitorava mais de 100 oportunidades mensais de arbitragem estatística com cálculo automatizado de meias-vidas (half-life) e z-scores.*

## Architecture & Data Flow

The diagram below illustrates the sanitized high-level component topology and data processing pipeline:

```mermaid
flowchart LR
  A[Dados de Cotações Históricas B3] --> B[Testes de Raiz Unitária ADF]
  B --> C[Regressão e Cointegração Engle-Granger]
  C --> D[Cálculo de Meia-Vida e Z-Scores]
  D --> E[Geração de Sinais de Arbitragem]
  E --> F[Painel Analítico de Pares Elegíveis]
```
