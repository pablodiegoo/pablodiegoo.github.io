---
layout: page
title: Painel do Cliente
title_pt: Painel do Cliente & Histórico de Resiliência
title_en: Client Portal & Resilience History
page_id: painel
permalink: /investimentos/painel/
description: Acompanhamento longitudinal de diagnósticos de resiliência patrimonial, eficiência fiscal e governança de dados sob a LGPD.
description_pt: Acompanhamento longitudinal de diagnósticos de resiliência patrimonial, eficiência fiscal e governança de dados sob a LGPD.
description_en: Longitudinal tracking of wealth resilience diagnostics, fiscal efficiency, and data sovereignty under LGPD.
nav: false
---

{% if site.active_lang == "pt-br" %}

<!-- ======================================================================= -->
<!-- CABEÇALHO & GOVERNANÇA INSTITUCIONAL (PT-BR)                            -->
<!-- ======================================================================= -->

<section class="mb-8">
  <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
    <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">PORTAL PROGRESSIVO:</span>
        Histórico Longitudinal · Governança LGPD (Art. 18)
      </div>
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">AUTENTICAÇÃO:</span>
        Passwordless · Tokens Criptográficos Temporários
      </div>
    </div>
  </div>

  <h1 class="font-serif text-3xl font-bold text-slate-950 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
    Painel do Cliente & Histórico de Resiliência
  </h1>

  <p class="lead text-slate-800 dark:text-slate-200 text-justify leading-relaxed mb-4">
    Acompanhe a trajetória de resiliência da sua carteira e o impacto das calibrações de alocação realizadas ao longo do tempo. Este portal progressivo permite revisitar resultados passados, comparar a evolução do arrasto tributário e exercer soberania sobre seus dados pessoais nos termos da Lei Geral de Proteção de Dados (LGPD).
  </p>
</section>

<!-- ======================================================================= -->
<!-- ETAPA 1: AUTENTICAÇÃO PASSWORDLESS (MAGIC LINK) (PT-BR)                 -->
<!-- ======================================================================= -->

<section id="magic-link-section" class="mb-10 p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
  <div class="max-w-xl mx-auto text-center">
    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mb-3 border border-blue-200 dark:border-blue-900">
      <i class="fa-solid fa-key text-lg"></i>
    </div>
    <h2 class="font-serif text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
      Acesse seu Histórico sem Senha
    </h2>
    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
      Informe o e-mail cadastrado durante a realização do diagnóstico. Enviaremos um link de autenticação seguro e com validade de 30 minutos diretamente para a sua caixa de entrada.
    </p>

    <form id="magic-link-form" class="space-y-4 text-left" onsubmit="event.preventDefault(); requestMagicLink();">
      <div>
        <label for="portal-email-input" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
          E-mail cadastrado no diagnóstico:
        </label>
        <input
          type="email"
          id="portal-email-input"
          placeholder="seu@email.com"
          required
          class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 font-mono"
        >
      </div>

      <button
        type="submit"
        id="btn-request-magic-link"
        class="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-xs font-mono font-bold transition-colors inline-flex items-center justify-center gap-2"
      >
        <i class="fa-solid fa-paper-plane"></i>
        <span>Receber Link de Acesso</span>
      </button>
    </form>

    <div id="magic-link-status" class="text-xs font-mono mt-4 hidden"></div>
  </div>
</section>

<!-- ======================================================================= -->
<!-- ETAPA 2: HISTÓRICO PROGRESSIVO E EVOLUÇÃO LONGITUDINAL (PT-BR)          -->
<!-- ======================================================================= -->

<section id="portal-history-section" class="mb-12 hidden">
  <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-800 text-xs font-bold font-mono">
        <i class="fa-solid fa-user-check"></i>
      </div>
      <div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400 block">Sessão Autenticada</span>
        <span id="portal-user-email" class="text-xs font-mono font-bold text-slate-900 dark:text-slate-100"></span>
      </div>
    </div>
    <button
      type="button"
      onclick="logoutPortal()"
      class="py-1.5 px-3 rounded border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono transition-colors"
    >
      <i class="fa-solid fa-arrow-right-from-bracket mr-1"></i> Encerrar Sessão
    </button>
  </div>

  <!-- Evolução Longitudinal de Score -->
  <div class="mb-8 p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
      <div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
          Trajetória Analítica
        </span>
        <h2 class="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 m-0 mt-1">
          Evolução Temporal do Score de Resiliência
        </h2>
      </div>
      <span class="text-xs font-mono text-slate-500" id="portal-records-count">0 registros</span>
    </div>

    <div id="portal-score-evolution" class="space-y-4">
      <!-- Injetado dinamicamente via JS -->
    </div>
  </div>

  <!-- Submissões Individuais & Gestão LGPD -->
  <div class="p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
      <h2 class="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 m-0">
        Diagnósticos Registrados & Gestão de Dados
      </h2>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
        Consulte as métricas detalhadas de cada simulação e exerça seu direito de exclusão soberana nos termos do Art. 18 da LGPD.
      </p>
    </div>

    <div id="portal-history-list" class="space-y-4">
      <!-- Injetado dinamicamente via JS -->
    </div>
  </div>
</section>

<!-- ======================================================================= -->
<!-- MODAL DE CONFIRMAÇÃO DE EXCLUSÃO SOBERANA (LGPD ART. 18)                -->
<!-- ======================================================================= -->

<div id="deletion-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
  <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full p-6 shadow-2xl">
    <div class="flex items-center gap-3 text-rose-600 dark:text-rose-400 mb-3">
      <div class="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-950/50 flex items-center justify-center border border-rose-200 dark:border-rose-900">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <h3 class="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 m-0">
        Confirmar Exclusão de Dados
      </h3>
    </div>

    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
      Em conformidade com o <strong>Art. 18 da Lei Geral de Proteção de Dados (LGPD)</strong>, a solicitação de eliminação remove este diagnóstico imediatamente da sua visualização e cessa qualquer contato de assessoria.
    </p>

    <div class="p-3 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 mb-6 font-mono leading-relaxed">
      A exclusão opera via <em>soft delete</em> imediato: os parâmetros econômicos anônimos permanecem resguardados exclusivamente para finalidades de estudo e pesquisa econométrica estatística (LGPD Art. 16, II).
    </div>

    <div class="flex items-center justify-end gap-3">
      <button
        type="button"
        id="btn-cancel-delete"
        onclick="closeDeleteModal()"
        class="py-2 px-4 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        Cancelar
      </button>
      <button
        type="button"
        id="btn-confirm-delete"
        onclick="executeDelete()"
        class="py-2 px-4 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-mono font-bold transition-colors inline-flex items-center gap-2"
      >
        <i class="fa-solid fa-trash-can"></i>
        <span>Confirmar Exclusão</span>
      </button>
    </div>
  </div>
</div>

<!-- ======================================================================= -->
<!-- DISCLAIMER REGULATÓRIO ESTRITO (RESOLUÇÃO CVM 178) (PT-BR)              -->
<!-- ======================================================================= -->

<footer class="regulatory-disclaimer-box mt-12">
  <div class="font-bold font-mono text-xs text-slate-900 dark:text-slate-200 mb-2 uppercase">
    Informações Regulatórias e Aviso Legal Obrigatório (Resolução CVM 178)
  </div>
  <p class="mb-2">
    <strong>Credenciamento e Enquadramento:</strong> Pablo Diego de Albuquerque Pereira é Assessor de Investimentos credenciado pela ANCORD e registrado perante a CVM, atuando sob estrita observância da <strong>Resolução CVM 178</strong> na Meta Investimentos (credenciada à XP Investimentos CCTVM S/A).
  </p>
  <p class="mb-2">
    <strong>Natureza Analítica:</strong> Os scores e históricos apresentados decorrem de parâmetros quantitativos e educacionais, não caracterizando recomendação de investimento (CVM 20), consultoria individual (CVM 19) ou gestão discricionária de ativos (CVM 21).
  </p>
</footer>

{% else %}

<!-- ======================================================================= -->
<!-- HEADER & INSTITUTIONAL GOVERNANCE (EN)                                  -->
<!-- ======================================================================= -->

<section class="mb-8">
  <div class="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
    <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">CLIENT PORTAL:</span>
        Longitudinal Diagnostics · LGPD Data Sovereignty (Art. 18)
      </div>
      <div>
        <span class="font-bold text-slate-900 dark:text-slate-100">AUTHENTICATION:</span>
        Passwordless · Expiring Cryptographic Tokens
      </div>
    </div>
  </div>

  <h1 class="font-serif text-3xl font-bold text-slate-950 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
    Client Portal & Resilience History
  </h1>

  <p class="lead text-slate-800 dark:text-slate-200 text-justify leading-relaxed mb-4">
    Track the progression of your portfolio's wealth resilience and the impact of asset allocation adjustments over time. This progressive client portal allows you to revisit past diagnostic results, monitor tax drag mitigation, and exercise sovereign data rights under Brazilian data protection law (LGPD).
  </p>
</section>

<!-- ======================================================================= -->
<!-- STEP 1: PASSWORDLESS MAGIC LINK AUTHENTICATION (EN)                     -->
<!-- ======================================================================= -->

<section id="magic-link-section" class="mb-10 p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
  <div class="max-w-xl mx-auto text-center">
    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mb-3 border border-blue-200 dark:border-blue-900">
      <i class="fa-solid fa-key text-lg"></i>
    </div>
    <h2 class="font-serif text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
      Access Your History Without Passwords
    </h2>
    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
      Enter the email provided during your diagnostic submission. We will dispatch a secure signed login link with a 30-minute validity window directly to your inbox.
    </p>

    <form id="magic-link-form" class="space-y-4 text-left" onsubmit="event.preventDefault(); requestMagicLink();">
      <div>
        <label for="portal-email-input" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
          Registered email address:
        </label>
        <input
          type="email"
          id="portal-email-input"
          placeholder="your@email.com"
          required
          class="w-full p-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 font-mono"
        >
      </div>

      <button
        type="submit"
        id="btn-request-magic-link"
        class="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-xs font-mono font-bold transition-colors inline-flex items-center justify-center gap-2"
      >
        <i class="fa-solid fa-paper-plane"></i>
        <span>Request Magic Link</span>
      </button>
    </form>

    <div id="magic-link-status" class="text-xs font-mono mt-4 hidden"></div>
  </div>
</section>

<!-- ======================================================================= -->
<!-- STEP 2: PROGRESSIVE HISTORY & SCORE TRAJECTORY (EN)                     -->
<!-- ======================================================================= -->

<section id="portal-history-section" class="mb-12 hidden">
  <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-800 text-xs font-bold font-mono">
        <i class="fa-solid fa-user-check"></i>
      </div>
      <div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400 block">Authenticated Session</span>
        <span id="portal-user-email" class="text-xs font-mono font-bold text-slate-900 dark:text-slate-100"></span>
      </div>
    </div>
    <button
      type="button"
      onclick="logoutPortal()"
      class="py-1.5 px-3 rounded border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono transition-colors"
    >
      <i class="fa-solid fa-arrow-right-from-bracket mr-1"></i> Sign Out
    </button>
  </div>

  <!-- Longitudinal Score Evolution -->
  <div class="mb-8 p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
      <div>
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
          Analytical Trajectory
        </span>
        <h2 class="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 m-0 mt-1">
          Historical Evolution of Wealth Resilience Score
        </h2>
      </div>
      <span class="text-xs font-mono text-slate-500" id="portal-records-count">0 records</span>
    </div>

    <div id="portal-score-evolution" class="space-y-4">
      <!-- Injected dynamically via JS -->
    </div>
  </div>

  <!-- Historical Diagnostic Records & LGPD Data Governance -->
  <div class="p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
      <h2 class="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 m-0">
        Diagnostic History & Data Governance
      </h2>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
        Inspect detailed parameters across quarters and exercise sovereign data erasure under LGPD Art. 18.
      </p>
    </div>

    <div id="portal-history-list" class="space-y-4">
      <!-- Injected dynamically via JS -->
    </div>
  </div>
</section>

<!-- ======================================================================= -->
<!-- SOVEREIGN DELETION CONFIRMATION MODAL (LGPD ART. 18) (EN)               -->
<!-- ======================================================================= -->

<div id="deletion-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
  <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full p-6 shadow-2xl">
    <div class="flex items-center gap-3 text-rose-600 dark:text-rose-400 mb-3">
      <div class="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-950/50 flex items-center justify-center border border-rose-200 dark:border-rose-900">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <h3 class="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 m-0">
        Confirm Sovereign Data Erasure
      </h3>
    </div>

    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
      In accordance with <strong>Art. 18 of the Brazilian General Data Protection Law (LGPD)</strong>, confirming erasure immediately removes this diagnostic submission from active view and terminates commercial outreach.
    </p>

    <div class="p-3 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 mb-6 font-mono leading-relaxed">
      Erasure operates via immediate <em>soft delete</em>: anonymized macroeconomic variables are retained strictly for statistical econometric research (LGPD Art. 16, II).
    </div>

    <div class="flex items-center justify-end gap-3">
      <button
        type="button"
        id="btn-cancel-delete"
        onclick="closeDeleteModal()"
        class="py-2 px-4 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        Cancel
      </button>
      <button
        type="button"
        id="btn-confirm-delete"
        onclick="executeDelete()"
        class="py-2 px-4 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-mono font-bold transition-colors inline-flex items-center gap-2"
      >
        <i class="fa-solid fa-trash-can"></i>
        <span>Confirm Erasure</span>
      </button>
    </div>
  </div>
</div>

<!-- ======================================================================= -->
<!-- REGULATORY DISCLAIMER (CVM RESOLUTION 178) (EN)                         -->
<!-- ======================================================================= -->

<footer class="regulatory-disclaimer-box mt-12">
  <div class="font-bold font-mono text-xs text-slate-900 dark:text-slate-200 mb-2 uppercase">
    Regulatory Compliance Notice (CVM Resolution 178)
  </div>
  <p class="mb-2">
    <strong>Accreditation and Regulatory Framework:</strong> Pablo Diego de Albuquerque Pereira is an accredited Investment Advisor certified by ANCORD and registered with CVM, operating under strict adherence to <strong>CVM Resolution 178</strong> at Meta Investimentos (affiliated with XP Investimentos CCTVM S/A).
  </p>
  <p class="mb-2">
    <strong>Analytical Scope:</strong> Historical scores and simulation metrics are educational and quantitative in nature, and do not constitute securities analysis (CVM 20), financial consultancy (CVM 19), or portfolio management (CVM 21).
  </p>
</footer>

{% endif %}

<!-- ======================================================================= -->
<!-- SCRIPT CLIENT-SIDE DO PORTAL DO CLIENTE                                 -->
<!-- ======================================================================= -->

<script>
  const activeLang = "{{ site.active_lang }}";
  const apiBaseUrl = window.API_BASE_URL || '';

  let currentTargetUuid = null;

  function getStoredToken() {
    return sessionStorage.getItem('portal_token') || localStorage.getItem('portal_token');
  }

  function setStoredToken(token, email) {
    sessionStorage.setItem('portal_token', token);
    if (email) sessionStorage.setItem('portal_email', email);
  }

  function clearStoredToken() {
    sessionStorage.removeItem('portal_token');
    sessionStorage.removeItem('portal_email');
    localStorage.removeItem('portal_token');
    localStorage.removeItem('portal_email');
  }

  async function requestMagicLink() {
    const emailInput = document.getElementById('portal-email-input');
    const statusMsg = document.getElementById('magic-link-status');
    const btn = document.getElementById('btn-request-magic-link');

    if (!emailInput || !emailInput.value) return;

    const email = emailInput.value.trim();
    if (statusMsg) {
      statusMsg.className = 'text-xs font-mono mt-4 text-blue-600 dark:text-blue-400 block';
      statusMsg.innerText = activeLang === 'en' ? 'Dispatching access link...' : 'Enviando link de acesso...';
    }
    if (btn) btn.disabled = true;

    try {
      const response = await fetch(apiBaseUrl + '/api/v1/auth/magic-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });

      const data = await response.json();

      if (response.ok) {
        if (statusMsg) {
          statusMsg.className = 'text-xs font-mono mt-4 text-emerald-600 dark:text-emerald-400 block';
          statusMsg.innerHTML = activeLang === 'en'
            ? 'Access link generated successfully. Check your email or use the link below:<br>' +
              (data.magic_link ? `<a href="${data.magic_link}" class="underline font-bold mt-1 inline-block">Click here to enter portal</a>` : '')
            : 'Link de acesso seguro gerado com sucesso. Verifique seu e-mail ou utilize o atalho:<br>' +
              (data.magic_link ? `<a href="${data.magic_link}" class="underline font-bold mt-1 inline-block">Clique aqui para acessar o painel</a>` : '');
        }
      } else {
        if (statusMsg) {
          statusMsg.className = 'text-xs font-mono mt-4 text-rose-600 dark:text-rose-400 block';
          statusMsg.innerText = data.message || (activeLang === 'en' ? 'Unable to locate diagnostic for this email.' : 'Nenhum diagnóstico localizado para este e-mail.');
        }
      }
    } catch (err) {
      if (statusMsg) {
        statusMsg.className = 'text-xs font-mono mt-4 text-rose-600 dark:text-rose-400 block';
        statusMsg.innerText = activeLang === 'en' ? 'Connection error. Try again later.' : 'Erro de conexão com o servidor. Tente novamente.';
      }
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  async function verifyMagicLinkFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const hasSignature = urlParams.has('signature') && urlParams.has('expires');
    const tokenParam = urlParams.get('token');

    if (tokenParam) {
      setStoredToken(tokenParam, urlParams.get('email') || '');
      window.history.replaceState({}, document.title, window.location.pathname);
      loadClientHistory();
      return;
    }

    if (hasSignature) {
      try {
        const verifyUrl = apiBaseUrl + '/api/v1/auth/verify?' + urlParams.toString();
        const response = await fetch(verifyUrl, {
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          const data = await response.json();
          setStoredToken(data.token, data.user ? data.user.email : urlParams.get('email'));
          window.history.replaceState({}, document.title, window.location.pathname);
          loadClientHistory();
          return;
        }
      } catch (e) {
        console.warn('Falha na verificação de assinatura:', e);
      }
    }

    const storedToken = getStoredToken();
    if (storedToken) {
      loadClientHistory();
    }
  }

  async function loadClientHistory() {
    const token = getStoredToken();
    if (!token) return;

    const loginSection = document.getElementById('magic-link-section');
    const historySection = document.getElementById('portal-history-section');
    const userEmailEl = document.getElementById('portal-user-email');

    try {
      const response = await fetch(apiBaseUrl + '/api/v1/diagnostico/history', {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json'
        }
      });

      if (response.status === 401) {
        clearStoredToken();
        if (loginSection) loginSection.classList.remove('hidden');
        if (historySection) historySection.classList.add('hidden');
        return;
      }

      const res = await response.json();
      const records = res.data || [];

      if (loginSection) loginSection.classList.add('hidden');
      if (historySection) historySection.classList.remove('hidden');
      if (userEmailEl) userEmailEl.innerText = sessionStorage.getItem('portal_email') || (records[0] ? records[0].email : 'Cliente');

      renderHistory(records);
    } catch (err) {
      console.warn('Erro ao carregar histórico:', err);
    }
  }

  function renderHistory(records) {
    const listEl = document.getElementById('portal-history-list');
    const evolutionEl = document.getElementById('portal-score-evolution');
    const countEl = document.getElementById('portal-records-count');

    if (countEl) countEl.innerText = records.length + (activeLang === 'en' ? ' records' : ' registros');

    if (!records.length) {
      if (listEl) {
        listEl.innerHTML = `<div class="p-6 text-center text-xs font-mono text-slate-500 bg-slate-50 dark:bg-slate-900 rounded-lg">
          ${activeLang === 'en' ? 'No active diagnostic records found.' : 'Nenhum registro ativo encontrado.'}
        </div>`;
      }
      if (evolutionEl) evolutionEl.innerHTML = '';
      return;
    }

    // Ordenação cronológica para visualizador de evolução (mais antigo -> mais recente)
    const chronological = [...records].reverse();

    if (evolutionEl) {
      let evolutionHtml = '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">';
      chronological.forEach((rec, idx) => {
        const dateStr = new Date(rec.created_at).toLocaleDateString(activeLang === 'en' ? 'en-US' : 'pt-BR');
        const score = rec.score_resiliencia;
        let badgeColor = 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900';
        if (score >= 75) badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900';
        else if (score >= 50) badgeColor = 'bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900';

        evolutionHtml += `
          <div class="p-3 rounded-lg border ${badgeColor} flex flex-col justify-between text-center">
            <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">#${idx + 1} · ${dateStr}</span>
            <div class="text-2xl font-bold font-serif my-1">${score}<span class="text-xs text-slate-500">/100</span></div>
            <span class="text-[11px] font-medium leading-tight">${rec.classificacao_resiliencia}</span>
          </div>
        `;
      });
      evolutionHtml += '</div>';
      evolutionEl.innerHTML = evolutionHtml;
    }

    if (listEl) {
      let listHtml = '';
      records.forEach((rec) => {
        const dateStr = new Date(rec.created_at).toLocaleDateString(activeLang === 'en' ? 'en-US' : 'pt-BR');
        listHtml += `
          <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs font-bold text-slate-900 dark:text-slate-100">${dateStr}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Score: ${rec.score_resiliencia}/100
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                  ${rec.classificacao_resiliencia}
                </span>
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-400 font-mono">
                Arrasto Fiscal: <span class="text-rose-600 dark:text-rose-400 font-bold">${rec.arrasto_fiscal_estimado}</span> · 
                Faixa: ${rec.patrimonio_faixa} · 
                Horizonte: ${rec.horizonte}
              </div>
            </div>
            <div>
              <button
                type="button"
                onclick="openDeleteModal('${rec.uuid}')"
                class="py-1.5 px-3 rounded border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-mono transition-colors inline-flex items-center gap-1.5"
              >
                <i class="fa-solid fa-trash-can text-[11px]"></i>
                <span>${activeLang === 'en' ? 'Erasure (LGPD)' : 'Excluir Dados (LGPD)'}</span>
              </button>
            </div>
          </div>
        `;
      });
      listEl.innerHTML = listHtml;
    }
  }

  function openDeleteModal(uuid) {
    currentTargetUuid = uuid;
    const modal = document.getElementById('deletion-modal');
    if (modal) modal.classList.remove('hidden');
  }

  function closeDeleteModal() {
    currentTargetUuid = null;
    const modal = document.getElementById('deletion-modal');
    if (modal) modal.classList.add('hidden');
  }

  async function executeDelete() {
    if (!currentTargetUuid) return;
    const token = getStoredToken();
    if (!token) return;

    try {
      const response = await fetch(apiBaseUrl + '/api/v1/diagnostico/' + currentTargetUuid, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        closeDeleteModal();
        loadClientHistory();
      } else {
        alert(activeLang === 'en' ? 'Unable to delete submission.' : 'Não foi possível excluir o diagnóstico.');
      }
    } catch (e) {
      alert(activeLang === 'en' ? 'Error during deletion request.' : 'Erro ao processar solicitação de exclusão.');
    }
  }

  function logoutPortal() {
    clearStoredToken();
    const loginSection = document.getElementById('magic-link-section');
    const historySection = document.getElementById('portal-history-section');
    if (loginSection) loginSection.classList.remove('hidden');
    if (historySection) historySection.classList.add('hidden');
  }

  document.addEventListener('DOMContentLoaded', verifyMagicLinkFromUrl);
</script>
