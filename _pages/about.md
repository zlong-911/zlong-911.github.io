---
permalink: /
title: "Zilong Huang"
author_profile: false
hide_title: true
hide_masthead: true
main_class: home-inline-profile
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="home-hero__portrait">
    <div class="home-hero__avatar">
      <img src="/images/zilong-huang.jpg" alt="Zilong Huang">
    </div>
  </div>
  <div class="home-hero__body" markdown="1">

<div class="home-profile-card">
  <div>
    <h1 class="home-profile-name">黄梓龙 · Zilong Huang</h1>
    <span>Master's Student</span>
  </div>
  <ul>
    <li><i class="fas fa-fw fa-location-dot icon-pad-right" aria-hidden="true"></i>Guangzhou, China</li>
    <li><i class="fas fa-fw fa-building-columns icon-pad-right" aria-hidden="true"></i>SCUT</li>
    <li><a href="mailto:auhuangzl@mail.scut.edu.cn"><i class="fas fa-fw fa-envelope icon-pad-right" aria-hidden="true"></i>Email</a></li>
    <li><a href="https://github.com/zlong-911"><i class="fab fa-fw fa-github icon-pad-right" aria-hidden="true"></i>GitHub</a></li>
    <li class="home-theme-control">
      <button id="theme-toggle" type="button" aria-label="Toggle light and dark mode" title="Toggle light and dark mode">
        <i id="theme-icon" class="fa-solid fa-sun" aria-hidden="true"></i>
      </button>
    </li>
  </ul>
</div>

Hi! I am Zilong Huang, **a master's student at [South China University of Technology](https://www.scut.edu.cn/en/)** in the Automation Innovation Program and a **Simulation Research Intern at Meituan LongCat**. My research focuses on **learning-based manipulation of deformable objects**, particularly garments. I aim to build scalable simulation and data-generation systems that enable robot policies to generalize across tasks and platforms and transfer reliably to the real world.
{: .about-intro }

  </div>
</section>

Selected Work ✨
------
{: .selected-work-title }

<article class="work-entry">
  <div class="work-media">
    <video class="work-video" controls muted playsinline preload="metadata" poster="/images/clothmate-poster.jpg">
      <source src="/files/clothmate-supplementary.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title">ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening</h3>
    <p class="work-meta">Jiaxiang Luo, <strong>Zilong Huang</strong>, Hao Cheng, and Zixiang Hong<br><em>IEEE Robotics and Automation Letters</em>, 2026</p>
    <p class="work-summary">ClothMate starts from a simple observation: given a good grasp, a garment's response to a fling depends far less on its detailed state. It turns this insight into a two-stage learning framework that separates action-value learning from state estimation, reducing the effective complexity of the garment's high-dimensional state space. As a result, a single model handles five garment categories using only 15% of the total training data required by separate category-specific baselines.</p>
    <p class="work-links">
      <a class="btn btn--primary" href="/publication/clothmate/">Details</a>
      <a class="btn btn--primary" href="https://ieeexplore.ieee.org/document/11248822/">Paper</a>
      <a class="btn" href="https://github.com/chongchongjjj/clothmate">Code</a>
    </p>
  </div>
</article>

<article class="work-entry">
  <div class="work-media">
    <video class="work-video" controls muted playsinline preload="metadata" poster="/images/visual-affordance-priors-poster.jpg">
      <source src="/files/visual-affordance-priors.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title">Visual Affordance Priors for Generalizable Garment Flattening</h3>
    <p class="work-meta"><strong>Zilong Huang</strong>, Sipeng Lu, and Jiaxiang Luo<sup>*</sup><br><em>IEEE Robotics and Automation Letters</em>, under review</p>
    <p class="work-summary">Visual Affordance Priors asks a practical question: can a robot learn where to grasp a garment in simulation and apply that knowledge directly to real images? We first learn the value of grasp pairs from large-scale physics simulation, then distill this structural knowledge into image-space affordance maps through randomized rendering. The resulting prior transfers to real garments without real-data fine-tuning and improves unfolding across 22 garment assets.</p>
    <p class="work-links">
      <a class="btn btn--primary" href="https://garment-affordance-review.github.io/unfold-all-anonymous/">Project Page</a>
      <a
        class="btn"
        href="#real-inference-demo"
        role="button"
        data-real-inference-toggle
        aria-expanded="false"
        aria-controls="real-inference-demo"
      >Explore Predictions</a>
    </p>
  </div>
  <section
    id="real-inference-demo"
    class="real-inference-demo"
    data-real-inference-demo
    data-asset-base="https://garment-affordance-review.github.io/unfold-all-anonymous"
    hidden
  >
    <div class="real-inference-demo__content">
      <div class="real-inference-demo__heading">
        <div>
          <h4>Real-World Predictions</h4>
          <p>Watch how the model updates its grasp-pair predictions as a garment is gradually crumpled by hand across four real-world scenes.</p>
        </div>
        <span>4 scenes · 72 states</span>
      </div>
      <div class="real-inference-scenes" role="tablist" aria-label="Real-world scene">
        <button class="is-active" type="button" role="tab" aria-selected="true" data-scene="1">Scene 1</button>
        <button type="button" role="tab" aria-selected="false" data-scene="2">Scene 2</button>
        <button type="button" role="tab" aria-selected="false" data-scene="3">Scene 3</button>
        <button type="button" role="tab" aria-selected="false" data-scene="4">Scene 4</button>
      </div>
      <div class="real-inference-stage">
        <video
          class="real-inference-video"
          controls
          muted
          playsinline
          preload="none"
          aria-label="Real-world grasp-pair prediction"
        ></video>
      </div>
      <div class="real-inference-navigation">
        <button type="button" data-instance-prev aria-label="Previous state">←</button>
        <span data-instance-caption>Scene 1 · State 01 / 26</span>
        <button type="button" data-instance-next aria-label="Next state">→</button>
      </div>
    </div>
  </section>
</article>

<article class="work-entry">
  <div class="work-media">
    <video class="work-video" controls muted loop playsinline preload="metadata" poster="/images/scalable-garment-trajectories.png">
      <source src="/files/scalable-garment-trajectories.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title">Scalable Garment Trajectory Generation</h3>
    <p class="work-summary">At Meituan LongCat, I work on an end-to-end simulation and data platform for garment manipulation, connecting GPU-parallel physics, trajectory curation, retargeting, photorealistic rendering, and downstream policy training.</p>
  </div>
</article>

<script defer src="/assets/js/real-inference-home.js?v=2"></script>
