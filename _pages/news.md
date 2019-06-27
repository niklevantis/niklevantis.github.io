---
layout: page
title: News
---

<section class="c-archives">
{% for post in site.posts  %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

    {% if forloop.first %}
        <h3 class="c-archives__year" id="{{ this_year }}-ref">{{this_year}}</h3>
        <ul class="c-archives__list">
    {% endif %}
        <li class="c-archives__item">
            <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
            <h3>{{ post.date | date: "%b %-d, %Y" }}</h3>
        </li>
    {% if forloop.last %}
        </ul>
    {% else %}
        {% if this_year != next_year %}
        </ul>
        <h2 class="c-archives__year" id="{{ next_year }}-ref">{{next_year}}</h2>
        <ul class="c-archives__list">
        {% endif %}
    {% endif %}
{% endfor %}
</section>
