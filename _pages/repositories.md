---
layout: page
permalink: /repositories/
page_id: repositories
title: Repositories
title_pt: Repositórios
title_en: Repositories
description: GitHub profile and featured open-source repositories.
description_pt: Perfil no GitHub e repositórios de código aberto em destaque.
description_en: GitHub profile and featured open-source repositories.
nav: false
nav_order: 7
---

{% if site.data.repositories.github_users %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center mb-4">
    <img class="w-100 mb-3" src="https://raw.githubusercontent.com/pablodiegoo/dataprofile/output/generated/tufte/header.svg" alt="DataProfile Animated Header" loading="lazy" />
    <img class="col-12 col-md-6 p-1" src="https://raw.githubusercontent.com/pablodiegoo/dataprofile/output/generated/tufte/languages.svg" alt="Languages, Notebooks & Engineering Hygiene" loading="lazy" />
    <img class="col-12 col-md-6 p-1" src="https://raw.githubusercontent.com/pablodiegoo/dataprofile/output/generated/tufte/stack.svg" alt="Data, ML & Analytics Stack" loading="lazy" />
    <img class="col-12 col-md-6 p-1" src="https://raw.githubusercontent.com/pablodiegoo/dataprofile/output/generated/tufte/kaggle.svg" alt="Kaggle Standing & Medals" loading="lazy" />
    <img class="col-12 col-md-6 p-1" src="https://raw.githubusercontent.com/pablodiegoo/dataprofile/output/generated/tufte/impact.svg" alt="Open-Source & Community Impact" loading="lazy" />
    {% for user in site.data.repositories.github_users %}
      {% include repository/repo_user.liquid username=user %}
    {% endfor %}
  </div>
{% endif %}

{% if site.data.repositories.github_repos %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% for repo in site.data.repositories.github_repos %}
      {% include repository/repo.liquid repository=repo %}
    {% endfor %}
  </div>
{% endif %}
