---
layout: post
title:  "How to set up custom Sass partials in the GOV.UK Prototype Kit"
date:   2016-01-20 13:44:00 +0000
categories: govuk sass
post_image: prototype-kit-sass-folder-stucture
---

When writing your own CSS/Sass for your prototypes it is advised that any custom styling gets put under the `Add extra styles here, or re-organise the Sass files in whichever way makes most sense to you` comment in `application.scss`. However, when you start adding a lot of styling, it starts to get messy. I prefer to use partials to break code up into manageable and easy to read partials (smaller files with "chunks" of styling for certain elements).

* Create a directory under `sass`, called `custom` (or whatever) - this should sit alongside **elements** and **patterns**.
* Then put any files you have into that folder - remember they must start with `_`, so `_tabs.scss`.
* In **application.scss**, under the comment, put the following `@import 'custom/tabs';`

Your folder structure should look a bit like this

![Prototype Kit Sass folder structure](/images/posts/prototype-kit-sass-folder-stucture.jpg "Prototype Kit Sass folder structure")
