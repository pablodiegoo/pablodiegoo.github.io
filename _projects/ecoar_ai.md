---
layout: page
title: "Ecoar AI — AI-Powered Qualitative Research & Interview Platform with Ent ORM & pgvector"
title_pt: "Ecoar AI — Plataforma Inteligente de Entrevistas Qualitativas e RAG com Ent ORM e pgvector"
page_id: "project_ecoar_ai"
description: "AI-powered qualitative research platform engineered in Go for conducting automated user interviews and thematic transcript analysis. Feature..."
description_pt: "Plataforma de inteligência qualitativa e condução automatizada de entrevistas de pesquisa de mercado desenvolvida em Go. Emprega Ent ORM com..."
img: assets/img/projects/ecoar_ai/thumbnail.png
og_image: /assets/img/projects/ecoar_ai/thumbnail.png
importance: 2
category: "Data Science"
confidentiality: "public"
institution: "Projeto Autônomo / Open Source"
period: "2025 - Present"
tech_stack: ['Go', 'Ent ORM', 'PostgreSQL', 'pgvector', 'Docker', 'TypeScript', 'React', 'Tailwind CSS', 'OpenAI API', 'Gemini API']
tags: [data-science, go, ent-orm, postgresql, pgvector, semantic-search, qualitative-research, nlp, llm, rag, docker]
github: "https://github.com/pablodiegoo/ecoar-ai"
redirect_from:
  - /projects/ecoar-ai/
related_publications: false
mermaid:
  enabled: true
  zoomable: true
---

{% if site.active_lang == 'pt-br' %}
**Contexto / Organização**: Projeto Autônomo / Open Source  
**Período**: 2025 - Presente  
**Categoria de Atuação**: Data Science  
**Tecnologias**: `Go`, `Ent ORM`, `PostgreSQL`, `pgvector`, `Docker`, `TypeScript`, `React`, `Tailwind CSS`, `OpenAI API`, `Gemini API`  

---

## Visão Geral Executiva

Plataforma de inteligência qualitativa e condução automatizada de entrevistas de pesquisa de mercado desenvolvida em Go. Emprega Ent ORM com isolamento multi-tenant rigoroso, busca vetorial semântica via PostgreSQL pgvector, suporte a múltiplos provedores LLM (BYOK) e esteira assíncrona de transcrição e mineração temática de depoimentos.

{% else %}
**Organization / Context**: Projeto Autônomo / Open Source  
**Timeline**: 2025 - Present  
**Domain Category**: Data Science  
**Technologies**: `Go`, `Ent ORM`, `PostgreSQL`, `pgvector`, `Docker`, `TypeScript`, `React`, `Tailwind CSS`, `OpenAI API`, `Gemini API`  

---

## Executive Overview

AI-powered qualitative research platform engineered in Go for conducting automated user interviews and thematic transcript analysis. Features multi-tenant isolation via Ent ORM and PostgreSQL RLS, semantic vector search using pgvector, flexible LLM provider management (BYOK), and asynchronous session transcription pipelines.

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
  A[Respondente / Pesquisador] --> B[Interface Web & Agente Interativo]
  B --> C[Backend Go / Ent ORM Privacy Layer]
  C --> D[Banco Relacional PostgreSQL + Row-Level Security]
  C --> E[Módulo de Embeddings & Busca Vetorial pgvector]
  C --> F[Conectores LLM / Provedores BYOK]
  F --> G[Agrupamento Temático & Síntese Qualitativa]
  G --> H[Relatórios Analíticos & Transcrições Indexadas]
```

{% if site.active_lang == 'pt-br' %}
## Destaques de Engenharia

- **Isolamento Multi-Tenant Rigoroso: Arquitetura em três camadas (Middleware HTTP, Ent Privacy e Row-Level Security no PostgreSQL) garantindo segregação total de workspaces entre agências.**
- **Busca Semântica com pgvector: Indexação de embeddings vetoriais de trechos de entrevistas para recuperação semântica imediata e agrupamento temático de respostas.**
- **Padrão BYOK e Presets de Provedores: Gerenciamento desacoplado de chaves de API com fallbacks e suporte configurável a múltiplos modelos de linguagem.**

{% else %}
## Key Engineering Highlights

- **Three-Layer Tenant Isolation: Strict multi-tenancy enforced across HTTP middleware, Ent Privacy policies, and PostgreSQL Row-Level Security.**
- **Semantic Search with pgvector: Vector embeddings indexing interview excerpt transcripts for instantaneous semantic retrieval and thematic clustering.**
- **BYOK Architecture: Secure agency-level API key management with automated fallback and pluggable LLM provider presets.**

{% endif %}

{% if site.active_lang == 'pt-br' %}
## Referências e Comprovações

- [Código-Fonte / Repositório Oficial no GitHub](https://github.com/pablodiegoo/ecoar-ai)

{% else %}
## References & Verification

- [Source Code / Official GitHub Repository](https://github.com/pablodiegoo/ecoar-ai)

{% endif %}
