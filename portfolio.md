---
layout: full-width
title: Portfolio
permalink: /portfolio/
---

<ul class="gallery grid-row">
  {% assign items = site.portfolio | sort: 'date' %}
  {% for service in site.portfolio %}
    <li class="column-third">
      <article>
        <figure><a class="post-link" href="{{ service.url | prepend: site.baseurl }}"><img src="/images/{{ service.image_project }}/{{ service.main_image }}.png" alt="{{ service.title }}"/></a></figure>
        <header>
          <h3><a class="post-link" href="{{ service.url | prepend: site.baseurl }}">{{ service.short-title }}</a></h3>
          <p class="text-muted">{{ service.timescale }}</p>
        </header>
      </article>
    </li>
  {% endfor %}
</ul>
