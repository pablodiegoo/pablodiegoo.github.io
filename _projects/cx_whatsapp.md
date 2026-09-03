---
layout: page
title: "Automated CX Data Ingestion Pipeline via Meta API (WhatsApp)"
title_pt: "Pipeline Automatizado de Engenharia de Dados via Meta API (WhatsApp)"
page_id: "project_cx_whatsapp"
description: "Automated data engineering pipeline ingesting and validating conversational survey responses via Meta WhatsApp Business API for real-time NP..."
description_pt: "Pipeline automatizado de coleta, validação e tabulação de dados conversacionais via WhatsApp Business API para apuração contínua e em tempo ..."
img: assets/img/4.jpg
importance: 4
category: "Data Engineering"
tags: [data-engineering, python, meta-api, whatsapp, fastapi, webhooks, postgresql, power-bi]
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

> [!NOTE]
> **Sanitized Technical Specification (`proprietary_sanitized`)**: This technical sheet is an authorized public specification adhering to strict intellectual property compliance and Brazilian LGPD (Lei Geral de Proteção de Dados) compliance. Proprietary source code, production database instances, raw databases, confidential credentials, and client Personally Identifiable Information (PII) remain strictly protected and are not exposed.
>
> *Especificação Técnica Sanitizada (`proprietary_sanitized`): Ficha técnica pública autorizada em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD) e diretrizes de propriedade intelectual. Código-fonte, instâncias de produção, credenciais confidenciais e dados pessoais identificáveis (PII) protegidos.*
>
> *Ficha técnica pública autorizada sob diretriz proprietary_sanitized. Tokens da Meta API, dados de contato e mensagens privadas permanecem protegidos sob estrita confidencialidade.*

{% if site.active_lang == 'pt-br' %}
**Contexto / Organização**: Ágora Pesquisa  
**Período**: 2025 - 2026  
**Categoria de Atuação**: Data Engineering  
**Tecnologias**: `Python`, `Meta Graph API`, `Webhooks`, `FastAPI`, `SQL`, `PostgreSQL`, `Power BI`  

---

## Visão Geral Executiva

Pipeline automatizado de coleta, validação e tabulação de dados conversacionais via WhatsApp Business API para apuração contínua e em tempo real de métricas de Customer Experience (NPS/CSAT), reduzindo em 90% a necessidade de intervenção humana.

{% else %}
**Organization / Context**: Ágora Pesquisa  
**Timeline**: 2025 - 2026  
**Domain Category**: Data Engineering  
**Technologies**: `Python`, `Meta Graph API`, `Webhooks`, `FastAPI`, `SQL`, `PostgreSQL`, `Power BI`  

---

## Executive Overview

Automated data engineering pipeline ingesting and validating conversational survey responses via Meta WhatsApp Business API for real-time NPS and CSAT calculation, achieving a 90% reduction in manual data processing overhead.

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
  A[Usuário WhatsApp] <--> B[Meta Graph API Cloud]
  B --> C[Servidor Webhooks FastAPI]
  C --> D[Parser & Validador de Respostas]
  D --> E[Banco Relacional PostgreSQL]
  E --> F[Painel Gerencial Power BI / Relatórios CX]
```

{% if site.active_lang == 'pt-br' %}
## Destaques de Engenharia

- **Automação Extrema: 90% de redução na intervenção manual de processamento e tabulação de dados de pesquisa.**
- **Tratamento de Eventos em Tempo Real: Arquitetura orientada a eventos com webhooks para confirmação de entrega, leitura e resposta.**
- **Governança e Integridade: Validação estrita de respostas com parser de integridade antes da persistência no banco de dados.**

{% else %}
## Key Engineering Highlights

- **Operational Efficiency: 90% reduction in manual data processing and survey tabulation overhead.**
- **Real-Time Event Architecture: Event-driven webhooks tracking delivery, read receipts, and user responses asynchronously.**
- **Data Integrity: Strict response parsing and schema validation prior to database persistence.**

{% endif %}
