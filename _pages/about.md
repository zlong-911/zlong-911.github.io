---
permalink: /
title: "About Me 🤖"
author_profile: false
hide_title: true
main_class: home-inline-profile
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="home-hero__avatar">
    <img src="/images/zilong-huang.jpg" alt="Zilong Huang">
  </div>
  <div class="home-hero__body" markdown="1">

<h1 class="page__title home-hero__title">About Me 🤖</h1>

<div class="home-profile-card">
  <div>
    <strong>黄梓龙 · Zilong Huang</strong>
    <span>Master's Student</span>
  </div>
  <ul>
    <li><i class="fas fa-fw fa-location-dot icon-pad-right" aria-hidden="true"></i>Guangzhou, China</li>
    <li><i class="fas fa-fw fa-building-columns icon-pad-right" aria-hidden="true"></i>SCUT</li>
    <li><a href="mailto:auhuangzl@mail.scut.edu.cn"><i class="fas fa-fw fa-envelope icon-pad-right" aria-hidden="true"></i>Email</a></li>
    <li><a href="https://github.com/zlong-911"><i class="fab fa-fw fa-github icon-pad-right" aria-hidden="true"></i>GitHub</a></li>
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
    </p>
  </div>
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
