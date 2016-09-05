---
layout: default
---

<body>
  <div class="index-wrapper">
    <div class="aside">
      <div class="info-card">
        <h1>BeiYuu</h1>
        <p><img src="mail.ico" alt="mail">464105353@qq.com</p>
        <p><img src="http://download.easyicon.net/ico/1147601/128/" alt="">18522501665</p>
        <p><img src="addr.ico" alt="">北京昌平区</p>
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
