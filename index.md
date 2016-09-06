---
layout: default
---

<body>
  <div class="index-wrapper">
    <div class="aside">
      <div class="info-card">
        <h1>MadaoNo</h1>
        <p><img src="email.ico" alt="mail" width="22"> : 464105353@qq.com</p><br>
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
  
  <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
    particlesJS('particles-js', {particles: {
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }},interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    }},retina_detect: true});
  </script>
</body>
