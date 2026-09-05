---
layout: page
title: "agp-media — Unified Media Transcription, OCR & Qualitative NLP Toolkit"
title_pt: "agp-media — Toolkit Unificado de Transcrição, OCR e NLP para Pesquisas de Campo"
page_id: "project_agp_media"
description: "Modular command-line toolkit (CLI) engineered to streamline field research workflows. Handles media conversion, audio transcription with mul..."
description_pt: "Toolkit modular em linha de comando (CLI) desenvolvido para acelerar o ciclo de pesquisas qualitativas e quantitativas de campo. Executa con..."
img: assets/img/projects/agp_media/thumbnail.png
og_image: /assets/img/projects/agp_media/thumbnail.png
importance: 2
category: "Data Engineering"
confidentiality: "proprietary_sanitized"
institution: "Instituto de Pesquisas Aplicadas & Inteligência de Campo"
period: "2025 - 2026"
tech_stack: ['Python', 'OpenAI Whisper', 'Google STT', 'Gemini API', 'PaddleOCR', 'Mistral', 'Pydantic', 'FFmpeg', 'CLI / Typer']
tags: [data-engineering, python, whisper, nlp, ocr, gemini, ffmpeg, speech-to-text, cli]
redirect_from:
  - /projects/agp-media/
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
> *Ficha técnica pública autorizada sob diretriz proprietary_sanitized. Arquivos de áudio originais de entrevistas e formulários de pesquisa de campo permanecem protegidos sob estrito sigilo.*

{% if site.active_lang == 'pt-br' %}
**Contexto / Organização**: Instituto de Pesquisas Aplicadas & Inteligência de Campo  
**Período**: 2025 - 2026  
**Categoria de Atuação**: Data Engineering  
**Tecnologias**: `Python`, `OpenAI Whisper`, `Google STT`, `Gemini API`, `PaddleOCR`, `Mistral`, `Pydantic`, `FFmpeg`, `CLI / Typer`  

---

## Visão Geral Executiva

Toolkit modular em linha de comando (CLI) desenvolvido para acelerar o ciclo de pesquisas qualitativas e quantitativas de campo. Executa conversão e compressão de mídia, transcrição de áudio com diarização de interlocutores (Whisper, Gemini, Google STT), OCR de formulários e análise semântica estruturada em JSON canônico.

{% else %}
**Organization / Context**: Instituto de Pesquisas Aplicadas & Inteligência de Campo  
**Timeline**: 2025 - 2026  
**Domain Category**: Data Engineering  
**Technologies**: `Python`, `OpenAI Whisper`, `Google STT`, `Gemini API`, `PaddleOCR`, `Mistral`, `Pydantic`, `FFmpeg`, `CLI / Typer`  

---

## Executive Overview

Modular command-line toolkit (CLI) engineered to streamline field research workflows. Handles media conversion, audio transcription with multi-speaker diarization (Whisper, Gemini, Google STT), document OCR, and qualitative AI sentiment profiling into structured canonical JSON.

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
  A[Áudios & Vídeos Brutos de Campo] --> B[agp-media convert / compress / split]
  B --> C[agp-media transcribe: Whisper / Google STT / Gemini]
  D[Formulários Físicos / PDFs] --> E[agp-media ocr: PaddleOCR]
  C --> F[agp-media unify: JSON Canônico Estruturado]
  E --> F
  F --> G[agp-media analyze: Profiling Qualitativo & Sentimento]
  G --> H[agp-media export: Relatórios Executivos DOCX/MD]
```

{% if site.active_lang == 'pt-br' %}
## Destaques de Engenharia

- **Pipeline Multimodelo: Suporte configurável a múltiplos provedores de speech-to-text e LLMs para diarização e análise de sentimento.**
- **Engenharia Multimodal: OCR avançado de formulários físicos e unificação estruturada de transcrições em JSON canônico.**
- **Alta Produtividade Operacional: Empacotamento via pipx com interface de linha de comando padronizada para analistas de campo.**

{% else %}
## Key Engineering Highlights

- **Multi-Engine Pipeline: Pluggable speech-to-text and LLM support for diarization, transcription, and sentiment analysis.**
- **Multimodal Engineering: High-accuracy OCR for physical field survey sheets and unified structured JSON exports.**
- **Operational Productivity: Packaged via pipx providing standardized command-line tooling for non-technical research analysts.**

{% endif %}
