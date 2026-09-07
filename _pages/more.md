---
layout: page
permalink: /more/
redirect_from:
  - /portfolio/
  - /mais/
title: Mais
title_pt: Mais
title_en: More
page_id: more
description: Assessoria de investimentos, projetos técnicos, estudos analíticos, publicações acadêmicas e comunicados.
description_pt: Assessoria de investimentos, projetos técnicos, estudos analíticos, publicações acadêmicas e comunicados.
description_en: Investment advisory, technical projects, analytical studies, academic publications, and updates.
nav: true
nav_order: 3
dropdown: true
children:
  - title: Investimentos
    page_id: investimentos
    permalink: /investimentos/
  - title: divider
  - title: Projetos
    page_id: projects
    permalink: /projects/
  - title: Estudos
    page_id: blog
    permalink: /blog/
  - title: divider
  - title: Publicações
    page_id: publications
    permalink: /publications/
  - title: Novidades
    page_id: news
    permalink: /news/
  - title: Repositórios
    page_id: repositories
    permalink: /repositories/
---

<div class="portfolio-index py-6 space-y-6">
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    {% if site.active_lang == "pt-br" %}
      Acesse as seções adicionais do portfólio, incluindo assessoria de investimentos, fichas técnicas de projetos, caderno editorial de estudos analíticos, publicações científicas e marcos institucionais através do menu de navegação ou pelos atalhos abaixo:
    {% else %}
      Explore additional sections of the portfolio, including investment advisory, technical project specifications, analytical studies, scientific publications, and institutional updates via the navigation menu or the links below:
    {% endif %}
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
    <a href="{{ "/investimentos/" | relative_url }}" class="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition text-decoration-none">
      <h3 class="font-sans font-semibold text-slate-950 dark:text-white m-0 flex items-center justify-between">
        <span>{% if site.active_lang == "pt-br" %}Investimentos &rarr;{% else %}Investments &rarr;{% endif %}</span>
      </h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0">
        {% if site.active_lang == "pt-br" %}Assessoria CVM 178, alocação estratégica de ativos e modelagem quantitativa de risco.{% else %}CVM 178 advisory, strategic asset allocation, and quantitative risk modeling.{% endif %}
      </p>
    </a>

    <a href="{{ "/projects/" | relative_url }}" class="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition text-decoration-none">
      <h3 class="font-sans font-semibold text-slate-950 dark:text-white m-0 flex items-center justify-between">
        <span>{% if site.active_lang == "pt-br" %}Projetos &rarr;{% else %}Projects &rarr;{% endif %}</span>
      </h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0">
        {% if site.active_lang == "pt-br" %}Sistemas de software, ferramentas quantitativas e engenharia de dados.{% else %}Software systems, quantitative tools, and data engineering.{% endif %}
      </p>
    </a>

    <a href="{{ "/blog/" | relative_url }}" class="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition text-decoration-none">
      <h3 class="font-sans font-semibold text-slate-950 dark:text-white m-0 flex items-center justify-between">
        <span>{% if site.active_lang == "pt-br" %}Estudos &rarr;{% else %}Studies &rarr;{% endif %}</span>
      </h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0">
        {% if site.active_lang == "pt-br" %}Caderno editorial de relatórios analíticos, inferência causal e econometria.{% else %}Editorial archive of analytical reports, causal inference, and econometrics.{% endif %}
      </p>
    </a>

    <a href="{{ "/publications/" | relative_url }}" class="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition text-decoration-none">
      <h3 class="font-sans font-semibold text-slate-950 dark:text-white m-0 flex items-center justify-between">
        <span>{% if site.active_lang == "pt-br" %}Publicações &rarr;{% else %}Publications &rarr;{% endif %}</span>
      </h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0">
        {% if site.active_lang == "pt-br" %}Artigos científicos, dissertações e produções bibliográficas.{% else %}Scientific papers, dissertations, and bibliographic production.{% endif %}
      </p>
    </a>

    <a href="{{ "/news/" | relative_url }}" class="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition text-decoration-none">
      <h3 class="font-sans font-semibold text-slate-950 dark:text-white m-0 flex items-center justify-between">
        <span>{% if site.active_lang == "pt-br" %}Novidades &rarr;{% else %}News &rarr;{% endif %}</span>
      </h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0">
        {% if site.active_lang == "pt-br" %}Anúncios institucionais, certificações e comunicados.{% else %}Institutional announcements, certifications, and updates.{% endif %}
      </p>
    </a>

    <a href="{{ "/repositories/" | relative_url }}" class="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition text-decoration-none">
      <h3 class="font-sans font-semibold text-slate-950 dark:text-white m-0 flex items-center justify-between">
        <span>{% if site.active_lang == "pt-br" %}Repositórios &rarr;{% else %}Repositories &rarr;{% endif %}</span>
      </h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 m-0">
        {% if site.active_lang == "pt-br" %}Repositórios de código aberto no GitHub.{% else %}Open-source code repositories on GitHub.{% endif %}
      </p>
    </a>
  </div>
</div>
