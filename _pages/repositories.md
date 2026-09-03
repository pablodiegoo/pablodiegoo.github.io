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
nav: true
nav_order: 6
---

{% if site.data.repositories.github_users %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
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
