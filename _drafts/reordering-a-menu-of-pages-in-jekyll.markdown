---
layout: post
title:  "How to reorder menu items in Jekyll"
date:   2015-12-30 13:28:00 +0000
categories: jekyll
---
By default Jekyll orders the items (pages) in your menu alphabetically. This can be changed really simply by adding a line of code above the code for the menu on your site, which may appear in "includes/header.html".

{% highlight ruby %}
<nav id="site-nav" class="site-nav">
  {% assign pages = site.pages | sort:"weight"  %}
  {% for my_page in pages %}
    {% if my_page.title %}
    <a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
    {% endif %}
  {% endfor %}
  <a href="#head" class="back-to-top">&#8593;</a>
</nav>
{% endhighlight %}
