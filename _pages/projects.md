---
layout: page
title: Projects
title_pt: Projetos e Fichas Técnicas Sanitizadas
title_en: Projects & Sanitized Technical Specifications
page_id: projects
permalink: /projects/
description: Technical specifications and applied research projects.
description_pt: Fichas técnicas públicas, modelos econométricos, pipelines de engenharia e relatórios analíticos aprofundados.
description_en: Public technical specifications, econometric models, engineering pipelines, and in-depth analytical reports.
nav: true
nav_order: 1
display_categories: ["Data Science", "Quantitative Finance", "Data Engineering", "Data Analytics"]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}" class="text-decoration-none">
    <h2 class="category font-serif text-2xl font-bold text-slate-950 dark:text-white pt-6 pb-2 mb-4 border-b border-slate-200 dark:border-slate-800">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="projects-grid-horizontal grid grid-cols-1 gap-6 mb-8">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
  </div>
  {% else %}
  <div class="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

  {% if page.horizontal %}
  <div class="projects-grid-horizontal grid grid-cols-1 gap-6 mb-8">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
  </div>
  {% else %}
  <div class="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

