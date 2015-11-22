---
layout: full-width
title: Portfolio
permalink: /portfolio/
---

<ul class="gallery grid-row">
  {% assign items = site.portfolio | sort: 'date' %}
  {% for portfolio in site.portfolio %}
    <li class="column-third">
      <article>
        <figure><a class="post-link" href="{{ portfolio.url | prepend: site.baseurl }}"><img src="/images/{{ portfolio.image_project }}/{{ portfolio.main_image }}.png" alt="{{ portfolio.title }}"/></a></figure>
        <header>
          <h2><a class="post-link" href="{{ portfolio.url | prepend: site.baseurl }}">{{ portfolio.short-title }}</a></h2>
          <p class="text-muted">{{ portfolio.timescale }}</p>
        </header>
      </article>
    </li>
  {% endfor %}
</ul>
