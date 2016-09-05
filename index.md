---
layout: default
---

<body>
  <div class="index-wrapper">
    <div class="aside">
      <div class="info-card">
        <h1>MadaoNo</h1>
        <p><img src="email.ico" alt="mail" width="22"> : 464105353@qq.com</p><br>
        <p><img src="tel.ico" alt="" width="20"> : 18522501665</p><br>
        <p><img src="addr.ico" alt="" width="20"> : 北京昌平区</p><br>
      </div>
      <div id="particles-js"></div>
    </div>


    <div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.blog %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</body>
