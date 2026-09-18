---
layout: page
title: Diagnóstico de Eficiência Patrimonial
title_pt: Diagnóstico de Resiliência Patrimonial & Eficiência Fiscal
title_en: Wealth Resilience & Fiscal Drag Diagnostic
page_id: diagnostico
permalink: /investimentos/diagnostico/
description: Simulador quantitativo e diagnóstico analítico de alocação de ativos, mensuração de arrasto fiscal e score de resiliência sob a Resolução CVM 178.
description_pt: Simulador quantitativo e diagnóstico analítico de alocação de ativos, mensuração de arrasto fiscal e score de resiliência sob a Resolução CVM 178.
description_en: Quantitative simulator and asset allocation diagnostic, tax drag measurement, and wealth resilience score under CVM Resolution 178.
nav: false
---

{% if site.active_lang == "pt-br" %}

<!-- ======================================================================= -->
<!-- INTRODUÇÃO EDITORIAL & FUNDAMENTAÇÃO TEÓRICA (PT-BR)                    -->
<!-- ======================================================================= -->

<section class="mb-8">
  <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
    <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">MODELAGEM QUANTITATIVA:</span>
        Ciclo de Vida · Custo de Oportunidade · Teoria de Markowitz
      </div>
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">REGULAÇÃO:</span>
        Resolução CVM 178 · ANCORD
      </div>
    </div>
  </div>

  <h1 class="font-serif text-3xl font-bold text-slate-950 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
    Diagnóstico de Resiliência Patrimonial & Eficiência Fiscal
  </h1>

  <p class="lead text-slate-800 dark:text-slate-200 text-justify leading-relaxed mb-4">
    A preservação do patrimônio familiar e corporativo no Brasil enfrenta dois destruidores silenciosos: a <strong>inflação estrutural</strong> e o <strong>arrasto tributário</strong> (a incidência semestral do come-cotas sobre fundos de investimento abertos). Carteiras construídas de forma intuitiva frequentemente acumulam redundâncias, carregam ativos tributariamente ineficientes e assumem riscos de cauda que só se revelam em choques de liquidez.
  </p>

  <p class="text-slate-700 dark:text-slate-300 text-justify leading-relaxed mb-6">
    Este utilitário analítico foi concebido com base em princípios da <strong>Pesquisa Operacional</strong> e da <strong>Teoria Moderna de Portfólios</strong>. Ele avalia em menos de 2 minutos a adequação da sua estrutura atual de investimentos aos seus horizontes de ciclo de vida, mensura o capital destruído anualmente pela tributação ineficiente e projeta o seu <strong>Score de Resiliência Patrimonial (0 a 100)</strong>. Caso já tenha realizado o diagnóstico anteriormente, acesse o <a href="/investimentos/painel/" class="text-blue-600 dark:text-blue-400 underline font-medium">Painel do Cliente</a> para consultar seu histórico ou gerenciar seus dados.
  </p>
</section>

<!-- ======================================================================= -->
<!-- SIMULADOR INTERATIVO (REATIVO JAVASCRIPT / TAILWIND) (PT-BR)            -->
<!-- ======================================================================= -->

<section id="diagnostic-simulator" class="mb-12 p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
    <div>
      <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
        Simulador Quantitativo
      </span>
      <h2 class="font-serif text-xl font-bold text-slate-900 dark:text-slate-100 m-0 mt-1">
        Calibre os Parâmetros da sua Alocação
      </h2>
    </div>
    <span class="text-xs font-mono text-slate-500">Etapa 1 de 2</span>
  </div>

  <form id="diagnostic-form" class="space-y-6" onsubmit="event.preventDefault(); runDiagnostic();">
    <!-- Pergunta 1: Horizonte de Tempo -->
    <div>
      <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
        1. Qual o horizonte temporal predominante para a maior parte do seu capital?
      </label>
      <p class="text-xs text-slate-500 mb-2">Define a capacidade da carteira de absorver oscilações de curto prazo em troca de prêmio de liquidez.</p>
      <select id="param-horizonte" class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100" onchange="runDiagnostic()">
        <option value="1">Curto Prazo (Até 2 anos - Necessidade iminente de liquidez)</option>
        <option value="2">Médio Prazo (2 a 5 anos - Projetos específicos ou expansão)</option>
        <option value="3" selected>Longo Prazo (5 a 10 anos - Formação patrimonial e independência)</option>
        <option value="4">Perpetuidade (Mais de 10 anos - Planejamento sucessório / aposentadoria)</option>
      </select>
    </div>

    <!-- Pergunta 2: Patrimônio Alocado -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          2. Faixa Estimada de Patrimônio Financeiro:
        </label>
        <select id="param-patrimonio" class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100" onchange="runDiagnostic()">
          <option value="100000">Até R$ 200.000</option>
          <option value="500000">R$ 200.000 a R$ 1.000.000</option>
          <option value="1500000" selected>R$ 1.000.000 a R$ 3.000.000</option>
          <option value="5000000">Acima de R$ 3.000.000 (Private / Multi-Family)</option>
        </select>
      </div>

      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          3. Parcela em Fundos Abertos (com Come-Cotas):
        </label>
        <div class="flex items-center gap-3">
          <input type="range" id="param-fundos" min="0" max="100" step="5" value="50" class="w-full" oninput="document.getElementById('fundos-val').innerText = this.value + '%'; runDiagnostic();">
          <span id="fundos-val" class="font-mono text-sm font-bold text-slate-800 dark:text-slate-200 min-w-[45px]">50%</span>
        </div>
        <p class="text-[11px] text-slate-500 mt-1">Fundos DI, Renda Fixa ou Multimercados não estruturados.</p>
      </div>
    </div>

    <!-- Pergunta 3: Proteção Inflacionária e Reserva de Emergência -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          4. Parcela do Patrimônio Indexada à Inflação (IPCA+):
        </label>
        <div class="flex items-center gap-3">
          <input type="range" id="param-ipca" min="0" max="100" step="5" value="20" class="w-full" oninput="document.getElementById('ipca-val').innerText = this.value + '%'; runDiagnostic();">
          <span id="ipca-val" class="font-mono text-sm font-bold text-slate-800 dark:text-slate-200 min-w-[45px]">20%</span>
        </div>
        <p class="text-[11px] text-slate-500 mt-1">Tesouro IPCA+, NTN-B, debêntures ou CRIs/CRAs atrelados ao IPCA.</p>
      </div>

      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          5. Reserva de Emergência (Meses de Custo Fixo):
        </label>
        <select id="param-reserva" class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100" onchange="runDiagnostic()">
          <option value="0">Menos de 3 meses (Vulnerabilidade elevada)</option>
          <option value="6" selected>3 a 6 meses (Reserva padrão)</option>
          <option value="12">6 a 12 meses (Reserva confortável)</option>
          <option value="18">Mais de 12 meses (Excesso de liquidez em CDI)</option>
        </select>
      </div>
    </div>
  </form>

  <!-- ===================================================================== -->
  <!-- PAINEL DE RESULTADOS PRELIMINARES (FREEMIUM / VISÍVEL IMEDIATAMENTE)    -->
  <!-- ===================================================================== -->
  <div id="results-panel" class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Coluna 1: Score de Resiliência -->
      <div class="p-5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center flex flex-col justify-between">
        <div>
          <span class="text-xs font-mono uppercase font-semibold text-slate-500">Score de Resiliência</span>
          <div class="my-3 flex items-center justify-center">
            <div class="relative flex items-center justify-center w-28 h-28 rounded-full border-4 border-slate-200 dark:border-slate-800" id="score-circle">
              <span id="score-number" class="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100">65</span>
              <span class="text-xs text-slate-500 absolute bottom-3">/100</span>
            </div>
          </div>
          <div id="score-classification" class="font-serif font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">
            Resiliência Moderada
          </div>
        </div>
        <p id="score-comment" class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 m-0">
          Equilíbrio intermediário com oportunidades claras de blindagem contra come-cotas e maior indexação ao IPCA.
        </p>
      </div>

      <!-- Coluna 2: Estimativa de Arrasto Tributário (Come-Cotas) -->
      <div class="p-5 rounded-lg bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs font-mono font-semibold text-rose-700 dark:text-rose-400">
            <span>ARRASTO FISCAL ESTIMADO</span>
            <i class="fa-solid fa-calculator"></i>
          </div>
          <div class="mt-3">
            <div class="text-2xl font-bold font-mono text-rose-900 dark:text-rose-200" id="tax-drag-val">
              R$ 13.035
            </div>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-medium">
              Erosão em 5 anos decorrente do come-cotas
            </span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
            O come-cotas antecipa IRPF semestralmente (maio e novembro). Esses recursos deixam de render juros compostos. Veículos isentos (LCI/LCA/CRI/CRA) e previdência tributariamente eficiente recuperam essa perda estrutural.
          </p>
        </div>
        <div class="text-[11px] font-mono text-slate-500 pt-2 border-t border-rose-200/60 dark:border-rose-900/60">
          Premissa base: Taxa média de 10% a.a. líquida de inflação.
        </div>
      </div>

      <!-- Coluna 3: Trade-Off Teórico de Alocação -->
      <div class="p-5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
        <div>
          <span class="text-xs font-mono uppercase font-semibold text-slate-500">Direcionamento Estrutural</span>
          <div class="space-y-2 mt-3 text-xs">
            <div class="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800">
              <span class="text-slate-600 dark:text-slate-400">Reserva de Liquidez (Pós-Fixado)</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-liquidez">15%</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800">
              <span class="text-slate-600 dark:text-slate-400">Proteção Real (IPCA+ & Isentos)</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-ipca">55%</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800">
              <span class="text-slate-600 dark:text-slate-400">Estratégias Macro & Descorrelação</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-macro">20%</span>
            </div>
            <div class="flex justify-between items-center py-1">
              <span class="text-slate-600 dark:text-slate-400">Renda Variável & Ativos Globais</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-global">10%</span>
            </div>
          </div>
        </div>
        <div class="pt-3">
          <span class="text-[11px] text-slate-500 italic block">
            Alocação conceitual de classes sem recomendação de papéis específicos.
          </span>
        </div>
      </div>

    </div>

    <!-- =================================================================== -->
    <!-- CTA DE DESBLOQUEIO DO RELATÓRIO EXECUTIVO & WHATSAPP                -->
    <!-- =================================================================== -->
    <div class="mt-8 p-6 rounded-lg bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
      <h3 class="font-serif text-xl font-bold mb-2">
        Desbloqueie o Relatório Executivo Completo & Agende a Avaliação
      </h3>
      <p class="text-xs text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
        Receba a memória de cálculo formal em PDF com a matriz de eficiência fiscal personalizada e converse diretamente com o economista e assessor credenciado para uma análise de carteira sem compromisso.
      </p>

      <div class="max-w-md mx-auto space-y-3 mb-4 text-left">
        <div>
          <label class="block text-xs font-mono text-slate-300 mb-1">Seu Nome Completo:</label>
          <input type="text" id="lead-name" placeholder="Ex: Roberto Silveira" class="w-full p-2 text-sm rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-mono text-slate-300 mb-1">WhatsApp:</label>
            <input type="tel" id="lead-whatsapp" placeholder="(21) 99999-9999" class="w-full p-2 text-sm rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-mono text-slate-300 mb-1">E-mail Corporativo/Pessoal:</label>
            <input type="email" id="lead-email" placeholder="seu@email.com" class="w-full p-2 text-sm rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <!-- Honeypot anti-spam invisível -->
        <input type="text" id="lead-honey" style="display:none" tabindex="-1" autocomplete="off">

        <div class="flex items-start gap-2 pt-2">
          <input type="checkbox" id="lead-consent" class="mt-1">
          <label for="lead-consent" class="text-[11px] text-slate-400 leading-tight">
            Concordo com o tratamento dos dados fornecidos para elaboração do diagnóstico e contato institucional de assessoria da Meta Investimentos, nos termos da LGPD.
          </label>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onclick="submitAndDownloadReport()"
          class="cta-whatsapp-btn shadow-md"
        >
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>Gerar Relatório PDF & Conversar no WhatsApp</span>
        </button>

        <button
          type="button"
          onclick="downloadPdfDirect()"
          class="py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-xs font-sans font-medium transition-colors inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 shadow-sm"
        >
          <i class="fa-solid fa-file-pdf"></i>
          <span>Apenas Baixar PDF</span>
        </button>
      </div>

      <div id="status-msg" class="text-xs font-mono text-emerald-400 mt-3 hidden"></div>
    </div>
  </div>
</section>

<!-- ======================================================================= -->
<!-- DISCLAIMER REGULATÓRIO ESTRITO SOB RESOLUÇÃO CVM 178 (PT-BR)            -->
<!-- ======================================================================= -->

<footer class="regulatory-disclaimer-box mt-12">
  <div class="font-bold font-mono text-xs text-slate-900 dark:text-slate-200 mb-2 uppercase">
    Informações Regulatórias e Aviso Legal Obrigatório (Resolução CVM 178)
  </div>
  <p class="mb-2">
    <strong>Credenciamento e Enquadramento:</strong> Pablo Diego de Albuquerque Pereira é Assessor de Investimentos devidamente credenciado pela ANCORD e registrado perante a Comissão de Valores Mobiliários (CVM), atuando sob estrita conformidade com a <strong>Resolução CVM 178</strong> como sócio da Meta Investimentos, sociedade credenciada e vinculada à XP Investimentos CCTVM S/A.
  </p>
  <p class="mb-2">
    <strong>Caráter Educacional e Isenção de Recomendações:</strong> As projeções, scores e estimativas gerados por esta ferramenta possuem natureza exclusivamente hipotética, matemática e educacional, baseando-se em premissas financeiras padronizadas. Esta ferramenta <strong>não</strong> constitui:
    (i) recomendação direcionada de compra ou venda de ações ou valores mobiliários individuais (atribuição privativa de <strong>Analista CNPI</strong> sob a <strong>Resolução CVM 20</strong>);
    (ii) <strong>consultoria de investimentos</strong> personalizada remunerada (privativa sob a <strong>Resolução CVM 19</strong>); nem
    (iii) <strong>gestão discricionária de carteiras</strong> (privativa sob a <strong>Resolução CVM 21</strong>).
  </p>
  <p class="mb-2">
    <strong>Aviso de Risco de Mercado:</strong> Rendimentos passados e simulações matemáticas não representam garantia de rentabilidade futura. A contratação efetiva de produtos de investimento deve observar o preenchimento prévio do questionário formal de Análise de Perfil do Investidor (API / Suitability) perante a instituição distribuidora autorizada.
  </p>
  <div class="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
    Aplicação Web registrada sob o grafo Schema.org: <a href="https://pablodiegoo.github.io/#financial-service" class="text-blue-700 dark:text-blue-400 underline">FinancialService (#financial-service)</a>
  </div>
</footer>

{% else %}

<!-- ======================================================================= -->
<!-- EDITORIAL INTRODUCTION & THEORETICAL FOUNDATION (EN)                    -->
<!-- ======================================================================= -->

<section class="mb-8">
  <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
    <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">QUANTITATIVE MODELING:</span>
        Lifecycle Analysis · Opportunity Cost · Markowitz Modern Portfolio Theory
      </div>
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">REGULATION:</span>
        CVM Resolution 178 · ANCORD
      </div>
    </div>
  </div>

  <h1 class="font-serif text-3xl font-bold text-slate-950 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
    Wealth Resilience & Fiscal Drag Diagnostic
  </h1>

  <p class="lead text-slate-800 dark:text-slate-200 text-justify leading-relaxed mb-4">
    Long-term capital preservation in Brazilian financial markets contends with two structural frictions: <strong>chronic inflation</strong> and <strong>systematic tax drag</strong> (the semi-annual advance withholding tax known as <em>come-cotas</em> levied on open-ended mutual funds). Intuitively constructed portfolios frequently suffer from redundant fee layers and unhedged downside tail risk that surfaces only during macro liquidity shocks.
  </p>

  <p class="text-slate-700 dark:text-slate-300 text-justify leading-relaxed mb-6">
    This quantitative utility leverages principles from <strong>Operations Research</strong> and <strong>Modern Portfolio Theory</strong> to stress-test your portfolio's temporal resilience, compute the compound erosion caused by fund tax drag over 5 years, and benchmark your <strong>Wealth Resilience Score (0 to 100)</strong>. If you have already completed a diagnostic, visit the <a href="/investimentos/painel/" class="text-blue-600 dark:text-blue-400 underline font-medium">Client Portal</a> to review your history and manage your data sovereignty.
  </p>
</section>

<!-- ======================================================================= -->
<!-- INTERACTIVE SIMULATOR (REACTIVE JS / TAILWIND) (EN)                     -->
<!-- ======================================================================= -->

<section id="diagnostic-simulator" class="mb-12 p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
    <div>
      <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
        Quantitative Simulator
      </span>
      <h2 class="font-serif text-xl font-bold text-slate-900 dark:text-slate-100 m-0 mt-1">
        Calibrate Your Portfolio Parameters
      </h2>
    </div>
    <span class="text-xs font-mono text-slate-500">Step 1 of 2</span>
  </div>

  <form id="diagnostic-form" class="space-y-6" onsubmit="event.preventDefault(); runDiagnostic();">
    <!-- Question 1: Time Horizon -->
    <div>
      <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
        1. What is the predominant time horizon for the majority of your capital?
      </label>
      <p class="text-xs text-slate-500 mb-2">Defines portfolio capacity to absorb short-term volatility in exchange for illiquidity premiums.</p>
      <select id="param-horizonte" class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100" onchange="runDiagnostic()">
        <option value="1">Short Term (Up to 2 years - Imminent liquidity demand)</option>
        <option value="2">Medium Term (2 to 5 years - Specific targets or business expansion)</option>
        <option value="3" selected>Long Term (5 to 10 years - Wealth accumulation & financial independence)</option>
        <option value="4">Perpetuity (Over 10 years - Intergenerational estate planning & retirement)</option>
      </select>
    </div>

    <!-- Question 2: Portfolio Wealth & Mutual Funds -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          2. Estimated Investable Financial Wealth Range:
        </label>
        <select id="param-patrimonio" class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100" onchange="runDiagnostic()">
          <option value="100000">Up to R$ 200,000</option>
          <option value="500000">R$ 200,000 to R$ 1,000,000</option>
          <option value="1500000" selected>R$ 1,000,000 to R$ 3,000,000</option>
          <option value="5000000">Above R$ 3,000,000 (Private / Multi-Family)</option>
        </select>
      </div>

      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          3. Share Allocated to Open-Ended Funds (Come-Cotas Drag):
        </label>
        <div class="flex items-center gap-3">
          <input type="range" id="param-fundos" min="0" max="100" step="5" value="50" class="w-full" oninput="document.getElementById('fundos-val').innerText = this.value + '%'; runDiagnostic();">
          <span id="fundos-val" class="font-mono text-sm font-bold text-slate-800 dark:text-slate-200 min-w-[45px]">50%</span>
        </div>
        <p class="text-[11px] text-slate-500 mt-1">Open-ended fixed income or macro funds subject to semi-annual advance tax.</p>
      </div>
    </div>

    <!-- Question 3: Inflation Protection & Emergency Reserve -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          4. Share of Portfolio Indexed to Inflation (IPCA+ / Real Rates):
        </label>
        <div class="flex items-center gap-3">
          <input type="range" id="param-ipca" min="0" max="100" step="5" value="20" class="w-full" oninput="document.getElementById('ipca-val').innerText = this.value + '%'; runDiagnostic();">
          <span id="ipca-val" class="font-mono text-sm font-bold text-slate-800 dark:text-slate-200 min-w-[45px]">20%</span>
        </div>
        <p class="text-[11px] text-slate-500 mt-1">Tesouro IPCA+, NTN-B, debentures or tax-exempt CRIs/CRAs linked to IPCA.</p>
      </div>

      <div>
        <label class="block font-medium text-sm text-slate-900 dark:text-slate-200 mb-1">
          5. Liquidity / Emergency Reserve (Months of Fixed Outflows):
        </label>
        <select id="param-reserva" class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100" onchange="runDiagnostic()">
          <option value="0">Less than 3 months (Elevated vulnerability)</option>
          <option value="6" selected>3 to 6 months (Standard reserve)</option>
          <option value="12">6 to 12 months (Comfortable buffer)</option>
          <option value="18">Over 12 months (Cash drag / excess CDI liquidity)</option>
        </select>
      </div>
    </div>
  </form>

  <!-- ===================================================================== -->
  <!-- RESULTS PANEL (FREEMIUM / VISIBLE IMMEDIATELY) (EN)                   -->
  <!-- ===================================================================== -->
  <div id="results-panel" class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Column 1: Resilience Score -->
      <div class="p-5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center flex flex-col justify-between">
        <div>
          <span class="text-xs font-mono uppercase font-semibold text-slate-500">Resilience Score</span>
          <div class="my-3 flex items-center justify-center">
            <div class="relative flex items-center justify-center w-28 h-28 rounded-full border-4 border-slate-200 dark:border-slate-800" id="score-circle">
              <span id="score-number" class="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100">65</span>
              <span class="text-xs text-slate-500 absolute bottom-3">/100</span>
            </div>
          </div>
          <div id="score-classification" class="font-serif font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">
            Moderate Resilience
          </div>
        </div>
        <p id="score-comment" class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 m-0">
          Balanced profile with clear opportunities to shield against fund tax drag and increase IPCA-linked indexing.
        </p>
      </div>

      <!-- Column 2: Estimated Fiscal Drag -->
      <div class="p-5 rounded-lg bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs font-mono font-semibold text-rose-700 dark:text-rose-400">
            <span>ESTIMATED FISCAL DRAG</span>
            <i class="fa-solid fa-calculator"></i>
          </div>
          <div class="mt-3">
            <div class="text-2xl font-bold font-mono text-rose-900 dark:text-rose-200" id="tax-drag-val">
              R$ 13.035
            </div>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-medium">
              5-year compound erosion from come-cotas
            </span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
            Come-cotas forces advance semi-annual taxation (May and November), interrupting compound interest on withheld capital. Tax-exempt instruments (LCI/LCA/CRI/CRA) and specialized structures eliminate this systematic drag.
          </p>
        </div>
        <div class="text-[11px] font-mono text-slate-500 pt-2 border-t border-rose-200/60 dark:border-rose-900/60">
          Base assumption: 10% annual gross yield over 5-year investment period.
        </div>
      </div>

      <!-- Column 3: Theoretical Asset Class Allocation -->
      <div class="p-5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
        <div>
          <span class="text-xs font-mono uppercase font-semibold text-slate-500">Structural Allocation</span>
          <div class="space-y-2 mt-3 text-xs">
            <div class="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800">
              <span class="text-slate-600 dark:text-slate-400">Sovereign Liquidity (Floating CDI)</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-liquidez">15%</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800">
              <span class="text-slate-600 dark:text-slate-400">Real Protection (IPCA+ & Exempt)</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-ipca">55%</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800">
              <span class="text-slate-600 dark:text-slate-400">Macro Strategies & Decorrelation</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-macro">20%</span>
            </div>
            <div class="flex justify-between items-center py-1">
              <span class="text-slate-600 dark:text-slate-400">Equities & Global Assets</span>
              <span class="font-mono font-bold text-slate-900 dark:text-slate-100" id="alloc-global">10%</span>
            </div>
          </div>
        </div>
        <div class="pt-3">
          <span class="text-[11px] text-slate-500 italic block">
            Conceptual allocation breakdown without individual securities recommendations.
          </span>
        </div>
      </div>

    </div>

    <!-- =================================================================== -->
    <!-- EXECUTIVE REPORT UNLOCK & CONSULTATION (EN)                         -->
    <!-- =================================================================== -->
    <div class="mt-8 p-6 rounded-lg bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
      <h3 class="font-serif text-xl font-bold mb-2">
        Unlock the Executive Report & Schedule an Advisory Review
      </h3>
      <p class="text-xs text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
        Obtain a formal PDF calculation brief featuring your tailored fiscal efficiency matrix and connect directly with the accredited advisor for an objective portfolio review.
      </p>

      <div class="max-w-md mx-auto space-y-3 mb-4 text-left">
        <div>
          <label class="block text-xs font-mono text-slate-300 mb-1">Full Name:</label>
          <input type="text" id="lead-name" placeholder="e.g. John Doe" class="w-full p-2 text-sm rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-mono text-slate-300 mb-1">WhatsApp / Phone:</label>
            <input type="tel" id="lead-whatsapp" placeholder="+55 (21) 99999-9999" class="w-full p-2 text-sm rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-mono text-slate-300 mb-1">Corporate / Personal Email:</label>
            <input type="email" id="lead-email" placeholder="your@email.com" class="w-full p-2 text-sm rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <!-- Anti-spam honeypot -->
        <input type="text" id="lead-honey" style="display:none" tabindex="-1" autocomplete="off">

        <div class="flex items-start gap-2 pt-2">
          <input type="checkbox" id="lead-consent" class="mt-1">
          <label for="lead-consent" class="text-[11px] text-slate-400 leading-tight">
            I agree to the processing of the provided information for generating the diagnostic report and institutional advisory contact by Meta Investimentos, in accordance with the Brazilian General Data Protection Law (LGPD).
          </label>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onclick="submitAndDownloadReport()"
          class="cta-whatsapp-btn shadow-md"
        >
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>Generate PDF Report & Connect on WhatsApp</span>
        </button>

        <button
          type="button"
          onclick="downloadPdfDirect()"
          class="py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-xs font-sans font-medium transition-colors inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 shadow-sm"
        >
          <i class="fa-solid fa-file-pdf"></i>
          <span>Download PDF Only</span>
        </button>
      </div>

      <div id="status-msg" class="text-xs font-mono text-emerald-400 mt-3 hidden"></div>
    </div>
  </div>
</section>

<!-- ======================================================================= -->
<!-- REGULATORY DISCLAIMER UNDER CVM RESOLUTION 178 (EN)                     -->
<!-- ======================================================================= -->

<footer class="regulatory-disclaimer-box mt-12">
  <div class="font-bold font-mono text-xs text-slate-900 dark:text-slate-200 mb-2 uppercase">
    Regulatory Compliance Notice (CVM Resolution 178)
  </div>
  <p class="mb-2">
    <strong>Accreditation and Regulatory Status:</strong> Pablo Diego de Albuquerque Pereira is an accredited Investment Advisor certified by ANCORD and registered with the Brazilian Securities and Exchange Commission (CVM), operating under strict compliance with <strong>CVM Resolution 178</strong> as a partner at Meta Investimentos, affiliated with XP Investimentos CCTVM S/A.
  </p>
  <p class="mb-2">
    <strong>Educational Purpose & Scope of Prohibitions:</strong> All projections, scores, and tax drag estimates generated by this simulator are purely mathematical, hypothetical, and educational. This utility does not constitute:
    (i) direct buy/sell ratings or individual securities analysis (reserved for <strong>Securities Analysts / CNPI</strong> under <strong>CVM Resolution 20</strong>);
    (ii) fee-based independent investment consultancy (governed by <strong>CVM Resolution 19</strong>); or
    (iii) <strong>discretionary portfolio management</strong> (reserved for <strong>Securities Portfolio Managers</strong> under <strong>CVM Resolution 21</strong>).
  </p>
  <p class="mb-2">
    <strong>Market Risk Disclosure:</strong> Past returns and mathematical projections provide no guarantee of future yield. Execution of financial instruments requires completion of the formal Investor Profile Analysis (Suitability / API) with the licensed distributing institution.
  </p>
  <div class="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
    Web application entity registered under Schema.org graph: <a href="https://pablodiegoo.github.io/#financial-service" class="text-blue-700 dark:text-blue-400 underline">FinancialService (#financial-service)</a>
  </div>
</footer>

{% endif %}

<!-- ======================================================================= -->
<!-- SCRIPT CLIENT-SIDE DO DIAGNÓSTICO (ESTÁTICO / REATIVO)                  -->
<!-- ======================================================================= -->

<script>
  const activeLang = "{{ site.active_lang }}";

  function runDiagnostic() {
    const horizonteEl = document.getElementById('param-horizonte');
    const patrimonioEl = document.getElementById('param-patrimonio');
    const fundosEl = document.getElementById('param-fundos');
    const ipcaEl = document.getElementById('param-ipca');
    const reservaEl = document.getElementById('param-reserva');

    if (!horizonteEl || !patrimonioEl || !fundosEl || !ipcaEl || !reservaEl) return;

    const horizonte = parseInt(horizonteEl.value);
    const patrimonio = parseFloat(patrimonioEl.value);
    const fundosPct = parseFloat(fundosEl.value) / 100;
    const ipcaPct = parseFloat(ipcaEl.value) / 100;
    const reservaMeses = parseInt(reservaEl.value);

    // 1. Cálculo de Arrasto Tributário em 5 anos (Come-Cotas)
    // Premissa: Taxa bruta 10% a.a. O come-cotas drena 15% semestral sobre o ganho antecipadamente
    const taxaAnual = 0.10;
    const taxaSemestral = Math.pow(1 + taxaAnual, 0.5) - 1;
    const anos = 5;
    const capitalFundos = patrimonio * fundosPct;

    let valorComComeCotas = capitalFundos;
    let valorSemComeCotas = capitalFundos;

    for (let sem = 1; sem <= anos * 2; sem++) {
      const ganhoComeCotas = valorComComeCotas * taxaSemestral;
      const imposto = ganhoComeCotas * 0.15;
      valorComComeCotas = valorComComeCotas + ganhoComeCotas - imposto;

      const ganhoSem = valorSemComeCotas * taxaSemestral;
      valorSemComeCotas = valorSemComeCotas + ganhoSem;
    }
    // No final, desconta 15% de imposto único no resgate para comparar com ativo tributado no vencimento vs come-cotas
    const valorResgateFinal = capitalFundos + (valorSemComeCotas - capitalFundos) * 0.85;
    const arrastoFiscal = Math.max(0, valorResgateFinal - valorComComeCotas);

    // 2. Cálculo do Score de Resiliência (0 a 100)
    let score = 50;

    // Fator Horizonte vs Inflação
    if (horizonte >= 3 && ipcaPct >= 0.40) score += 20;
    else if (horizonte >= 3 && ipcaPct < 0.20) score -= 15;
    else if (horizonte <= 2 && ipcaPct > 0.50) score -= 10; // excesso de duration em curto prazo

    // Fator Arrasto Fiscal
    if (fundosPct > 0.60) score -= 15;
    else if (fundosPct < 0.30) score += 15;

    // Fator Reserva
    if (reservaMeses >= 6 && reservaMeses <= 12) score += 15;
    else if (reservaMeses < 3) score -= 20;
    else if (reservaMeses > 12) score -= 5; // excesso de caixa parado em CDI

    // Escala completa de 0 a 100
    score = Math.min(100, Math.max(0, Math.round(score)));

    // Atualização da UI
    const scoreNumEl = document.getElementById('score-number');
    const taxDragEl = document.getElementById('tax-drag-val');
    if (scoreNumEl) scoreNumEl.innerText = score;
    if (taxDragEl) taxDragEl.innerText = 'R$ ' + Math.round(arrastoFiscal).toLocaleString('pt-BR');

    let classificacao = activeLang === 'en' ? 'Moderate Resilience' : 'Resiliência Moderada';
    let comentario = activeLang === 'en'
      ? 'Balanced profile with clear opportunities to shield against fund tax drag and increase IPCA-linked indexing.'
      : 'Equilíbrio intermediário com oportunidades claras de blindagem contra come-cotas e maior indexação ao IPCA.';
    let corBorder = 'var(--global-theme-color, #2563eb)';

    if (score >= 75) {
      classificacao = activeLang === 'en' ? 'High Resilience & Efficiency' : 'Alta Resiliência & Eficiência';
      comentario = activeLang === 'en'
        ? 'Portfolio demonstrates strong temporal adherence, sound inflation hedging, and minimal tax drag.'
        : 'Portfólio com excelente aderência temporal, boa proteção inflacionária e baixa ineficiência fiscal.';
      corBorder = '#10b981';
    } else if (score < 50) {
      classificacao = activeLang === 'en' ? 'Structural Vulnerability' : 'Vulnerabilidade Estrutural';
      comentario = activeLang === 'en'
        ? 'High vulnerability to fund tax drag and insufficient long-term inflation immunization.'
        : 'Elevada exposição ao arrasto tributário e subalocação contra inflação de longo prazo.';
      corBorder = '#ef4444';
    }

    const classEl = document.getElementById('score-classification');
    const commentEl = document.getElementById('score-comment');
    const circleEl = document.getElementById('score-circle');

    if (classEl) classEl.innerText = classificacao;
    if (commentEl) commentEl.innerText = comentario;
    if (circleEl) circleEl.style.borderColor = corBorder;

    // Ajuste de classes teóricas
    const allocLiq = document.getElementById('alloc-liquidez');
    const allocIpca = document.getElementById('alloc-ipca');
    const allocMacro = document.getElementById('alloc-macro');
    const allocGlobal = document.getElementById('alloc-global');

    if (allocLiq && allocIpca && allocMacro && allocGlobal) {
      if (horizonte === 1) {
        allocLiq.innerText = '45%';
        allocIpca.innerText = '30%';
        allocMacro.innerText = '15%';
        allocGlobal.innerText = '10%';
      } else if (horizonte === 2) {
        allocLiq.innerText = '25%';
        allocIpca.innerText = '45%';
        allocMacro.innerText = '20%';
        allocGlobal.innerText = '10%';
      } else if (horizonte === 3) {
        allocLiq.innerText = '15%';
        allocIpca.innerText = '55%';
        allocMacro.innerText = '20%';
        allocGlobal.innerText = '10%';
      } else {
        allocLiq.innerText = '10%';
        allocIpca.innerText = '50%';
        allocMacro.innerText = '20%';
        allocGlobal.innerText = '20%';
      }
    }
  }

  function getDiagnosticPayload() {
    const nameEl = document.getElementById('lead-name');
    const waEl = document.getElementById('lead-whatsapp');
    const emailEl = document.getElementById('lead-email');
    const honeyEl = document.getElementById('lead-honey');
    const consentEl = document.getElementById('lead-consent');
    const scoreEl = document.getElementById('score-number');
    const classEl = document.getElementById('score-classification');
    const taxDragEl = document.getElementById('tax-drag-val');
    const horizEl = document.getElementById('param-horizonte');
    const patriEl = document.getElementById('param-patrimonio');
    const fundosEl = document.getElementById('param-fundos');
    const ipcaEl = document.getElementById('param-ipca');

    const allocLiq = document.getElementById('alloc-liquidez');
    const allocIpca = document.getElementById('alloc-ipca');
    const allocMacro = document.getElementById('alloc-macro');
    const allocGlobal = document.getElementById('alloc-global');

    return {
      nome: nameEl ? nameEl.value.trim() : '',
      whatsapp: waEl ? waEl.value.trim() : '',
      email: emailEl ? emailEl.value.trim() : '',
      honeypot: honeyEl ? honeyEl.value : '',
      consentimento: consentEl ? consentEl.checked : false,
      score: scoreEl ? parseInt(scoreEl.innerText, 10) || 65 : 65,
      classificacao: classEl ? classEl.innerText : (activeLang === 'en' ? 'Moderate Resilience' : 'Resiliência Moderada'),
      arrasto_fiscal: taxDragEl ? taxDragEl.innerText : 'R$ 13.035',
      horizonte: (horizEl && horizEl.selectedIndex >= 0) ? horizEl.options[horizEl.selectedIndex].text : '',
      patrimonio: (patriEl && patriEl.selectedIndex >= 0) ? patriEl.options[patriEl.selectedIndex].text : '',
      fundos_pct: fundosEl ? fundosEl.value + '%' : '50%',
      ipca_pct: ipcaEl ? ipcaEl.value + '%' : '20%',
      alloc_liquidez: allocLiq ? allocLiq.innerText : '15%',
      alloc_ipca: allocIpca ? allocIpca.innerText : '55%',
      alloc_macro: allocMacro ? allocMacro.innerText : '20%',
      alloc_global: allocGlobal ? allocGlobal.innerText : '10%'
    };
  }

  function sendToLaravelBackend(payload) {
    const apiUrl = window.API_BASE_URL || '';
    if (!apiUrl) return; // Se a API ainda não estiver configurada, não interrompe o fluxo do usuário

    fetch(apiUrl + '/api/v1/diagnostico/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(err => {
      console.warn('Backend silencioso indisponível no momento:', err);
    });
  }

  function submitAndDownloadReport() {
    const payload = getDiagnosticPayload();

    if (!payload.consentimento) {
      alert(activeLang === 'en'
        ? 'Please consent to the processing of your data under LGPD to proceed.'
        : 'Por favor, assinale o consentimento nos termos da LGPD para prosseguir.');
      return;
    }

    if (payload.honeypot) {
      // Bot detectado, descarta silenciosamente
      return;
    }

    // 1. Envio silencioso para backend (quando ativo)
    sendToLaravelBackend(payload);

    // 2. Abertura do WhatsApp com telemetria pré-preenchida
    let msg = '';
    if (activeLang === 'en') {
      msg = encodeURIComponent(
        `Hello Pablo. I completed the Wealth Resilience Diagnostic on your site.\n\n` +
        `Name: ${payload.nome || 'Not provided'}\n` +
        `Resilience Score: ${payload.score}/100 (${payload.classificacao})\n` +
        `Estimated 5-Year Tax Drag: ${payload.arrasto_fiscal}\n` +
        `Wealth Band: ${payload.patrimonio}\n` +
        `Horizon: ${payload.horizonte}\n\n` +
        `I would like to schedule an advisory consultation regarding strategic asset allocation and fiscal efficiency.`
      );
    } else {
      msg = encodeURIComponent(
        `Olá, Pablo. Realizei o Diagnóstico Patrimonial no site.\n\n` +
        `Nome: ${payload.nome || 'Não informado'}\n` +
        `Score de Resiliência: ${payload.score}/100 (${payload.classificacao})\n` +
        `Arrasto Fiscal Estimado em 5 anos: ${payload.arrasto_fiscal}\n` +
        `Faixa Patrimonial: ${payload.patrimonio}\n` +
        `Horizonte: ${payload.horizonte}\n\n` +
        `Gostaria de agendar uma conversa sobre otimização da minha alocação e eficiência tributária.`
      );
    }

    const waUrl = `https://wa.me/5521979381580?text=${msg}`;
    window.open(waUrl, '_blank');

    // 3. Dispara o download do PDF executivo sem colidir com o popup blocker
    setTimeout(function () {
      downloadPdfDirect(true);
    }, 400);
  }

  function downloadPdfDirect(skipBackendSync) {
    const payload = getDiagnosticPayload();

    // Validação estrita de consentimento LGPD antes de emitir qualquer relatório
    if (!payload.consentimento) {
      alert(activeLang === 'en'
        ? 'Please consent to the processing of your data under LGPD before generating the report.'
        : 'Por favor, assinale o consentimento para geração do relatório nos termos da LGPD.');
      return;
    }

    if (!payload.honeypot && !skipBackendSync) {
      sendToLaravelBackend(payload);
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert(activeLang === 'en'
        ? 'Please allow popups to download/print the executive PDF report.'
        : 'Por favor, autorize popups para imprimir/baixar o relatório PDF.');
      return;
    }

    const isEn = activeLang === 'en';
    const reportTitle = isEn ? 'Wealth Resilience & Fiscal Drag Diagnostic' : 'Diagnóstico de Resiliência Patrimonial & Eficiência Fiscal';
    const reportSubtitle = isEn
      ? 'Pablo Diego de Albuquerque Pereira · Economist (UFRJ) · Accredited Investment Advisor ANCORD (CVM 178)'
      : 'Pablo Diego de Albuquerque Pereira · Economista (UFRJ) · Assessor de Investimentos ANCORD (CVM 178)';
    const scoreLabel = isEn ? 'Resilience Score' : 'Score de Resiliência';
    const dragLabel = isEn ? 'Estimated Fiscal Drag (5 Years)' : 'Arrasto Fiscal Estimado (5 anos)';
    const dragSub = isEn ? 'Erosion from come-cotas vs exempt wrappers' : 'Erosão por come-cotas vs isenções';
    const declaredTitle = isEn ? 'Declared Portfolio Parameters' : 'Parâmetros Declarados do Portfólio';
    const colParam = isEn ? 'Parameter' : 'Parâmetro';
    const colValue = isEn ? 'Reported Value' : 'Valor Informado';
    const paramName = isEn ? 'Name / Identifier' : 'Nome / Identificação';
    const valAnon = isEn ? 'Anonymous Investor' : 'Investidor Anônimo';
    const paramWealth = isEn ? 'Investable Wealth Band' : 'Faixa Patrimonial';
    const paramHoriz = isEn ? 'Allocation Horizon' : 'Horizonte de Alocação';
    const paramFunds = isEn ? 'Open-Ended Mutual Funds (Come-cotas)' : 'Parcela em Fundos Abertos (Come-cotas)';
    const paramIpca = isEn ? 'Inflation-Indexed Assets (IPCA+)' : 'Parcela Atrelada à Inflação (IPCA+)';
    const dirTitle = isEn ? 'Conceptual Asset Class Breakdown' : 'Direcionamento Conceitual de Classes de Ativos';
    const colClass = isEn ? 'Asset Class' : 'Classe de Ativos';
    const colWeight = isEn ? 'Suggested Theoretical Weight' : 'Peso Teórico Sugerido';
    const colRole = isEn ? 'Economic Function' : 'Função Econômica';
    const class1 = isEn ? 'Sovereign Floating Liquidity' : 'Reserva Pós-Fixada Soberana';
    const role1 = isEn ? 'Immediate liquidity and fundamental opportunity cost.' : 'Liquidez imediata e custo de oportunidade básico.';
    const class2 = isEn ? 'Real Protection (IPCA+ & Exempt)' : 'Proteção Real (IPCA+ & Isentos)';
    const role2 = isEn ? 'Inflation immunization and structural mitigation of tax drag.' : 'Imunização inflacionária e mitigação de perdas por come-cotas.';
    const class3 = isEn ? 'Macro Strategies & Decorrelation' : 'Multimercados & Descorrelação';
    const role3 = isEn ? 'Decorrelated alpha generation with disciplined volatility.' : 'Geração de alfa descorrelacionado sem volatilidade extrema.';
    const class4 = isEn ? 'Equities & Global Assets' : 'Renda Variável & Ativos Globais';
    const role4 = isEn ? 'Participation in corporate earnings and currency hedge.' : 'Participação no crescimento de lucros e proteção cambial.';
    const disclaimerTitle = isEn ? 'Mandatory Regulatory Disclosure (CVM Resolution 178):' : 'Aviso Regulatório Obrigatório (Resolução CVM 178):';
    const disclaimerText = isEn
      ? 'This diagnostic executive report is purely educational and mathematical in nature, modeling opportunity costs and quantitative finance principles. It does not constitute an individual securities analysis report under CVM Resolution 20 (Securities Analysts), financial consultancy under CVM Resolution 19, or guaranteed yields. Allocation decisions remain the sole responsibility of the investor following suitability profiling with the authorized distributing institution (Meta Investimentos affiliated with XP Investimentos CCTVM S/A).'
      : 'Este relatório possui caráter estritamente pedagógico e informativo, fundamentado em cálculos matemáticos de custo de oportunidade e finanças quantitativas. Não representa recomendação de valores mobiliários específicos nos termos da Resolução CVM nº 20 (Analistas), consultoria nos termos da Resolução CVM nº 19, nem garantia de rentabilidade. As decisões de aplicação cabem exclusivamente ao investidor após verificação de perfil de suitability junto à instituição integrante do sistema de distribuição de valores mobiliários (Meta Investimentos credenciada à XP Investimentos CCTVM S/A).';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${reportTitle} - Pablo Diego Pereira</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #0f172a; padding: 40px; margin: 0; }
          .header { border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 25px; }
          .title { font-size: 22px; font-weight: bold; margin: 0 0 5px 0; }
          .subtitle { font-size: 12px; color: #475569; margin: 0; font-family: monospace; }
          .metric-box { border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; margin-bottom: 20px; }
          .score-large { font-size: 36px; font-weight: bold; color: #0f172a; }
          .drag-large { font-size: 24px; font-weight: bold; color: #b91c1c; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 12px; }
          th, td { border-bottom: 1px solid #e2e8f0; padding: 8px 4px; text-align: left; }
          th { font-weight: bold; color: #475569; }
          .footer { margin-top: 40px; padding-top: 15px; border-top: 1px solid #cbd5e1; font-size: 10px; color: #64748b; line-height: 1.4; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">${reportTitle}</h1>
          <p class="subtitle">${reportSubtitle}</p>
        </div>

        <div style="display: flex; gap: 20px; margin-bottom: 20px;">
          <div class="metric-box" style="flex: 1; text-align: center;">
            <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-family: monospace;">${scoreLabel}</div>
            <div class="score-large">${payload.score} <span style="font-size: 14px; color: #64748b;">/100</span></div>
            <div style="font-weight: bold; font-size: 13px;">${payload.classificacao}</div>
          </div>
          <div class="metric-box" style="flex: 1; text-align: center; border-color: #fecdd3;">
            <div style="font-size: 11px; text-transform: uppercase; color: #b91c1c; font-family: monospace;">${dragLabel}</div>
            <div class="drag-large">${payload.arrasto_fiscal}</div>
            <div style="font-size: 11px; color: #475569;">${dragSub}</div>
          </div>
        </div>

        <h3 style="font-size: 14px; margin-bottom: 5px;">${declaredTitle}</h3>
        <table>
          <tr><th>${colParam}</th><th>${colValue}</th></tr>
          <tr><td>${paramName}</td><td>${payload.nome || valAnon}</td></tr>
          <tr><td>${paramWealth}</td><td>${payload.patrimonio}</td></tr>
          <tr><td>${paramHoriz}</td><td>${payload.horizonte}</td></tr>
          <tr><td>${paramFunds}</td><td>${payload.fundos_pct}</td></tr>
          <tr><td>${paramIpca}</td><td>${payload.ipca_pct}</td></tr>
        </table>

        <h3 style="font-size: 14px; margin-top: 25px; margin-bottom: 5px;">${dirTitle}</h3>
        <table>
          <tr><th>${colClass}</th><th>${colWeight}</th><th>${colRole}</th></tr>
          <tr><td>${class1}</td><td>${payload.alloc_liquidez}</td><td>${role1}</td></tr>
          <tr><td>${class2}</td><td>${payload.alloc_ipca}</td><td>${role2}</td></tr>
          <tr><td>${class3}</td><td>${payload.alloc_macro}</td><td>${role3}</td></tr>
          <tr><td>${class4}</td><td>${payload.alloc_global}</td><td>${role4}</td></tr>
        </table>

        <div class="footer">
          <strong>${disclaimerTitle}</strong> ${disclaimerText}
        </div>

        <script>
          window.onload = function() { window.print(); }
        <\/script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }

  // Inicializa cálculo na carga
  document.addEventListener('DOMContentLoaded', runDiagnostic);
</script>
