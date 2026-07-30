---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hi, I am Zilong Huang, a master's student in the Automation Innovation Program at [South China University of Technology](https://www.scut.edu.cn/en/) and a Simulation Research Intern at Meituan LongCat. I work on **robot learning for deformable-object manipulation**, with a current focus on garments, scalable simulation, and data-generation systems that help policies generalize across tasks, visual domains, and robot platforms.
{: .about-intro }

<div class="research-snapshot" aria-label="Research snapshot">
  <div>
    <span>Current role</span>
    <strong>Master's student at SCUT</strong>
  </div>
  <div>
    <span>Research area</span>
    <strong>Robot learning for deformable objects</strong>
  </div>
  <div>
    <span>Recent focus</span>
    <strong>Garment flattening, simulation, and visual affordances</strong>
  </div>
</div>

Research Focus
------
{: .selected-work-title }

<div class="research-pillars">
  <div>
    <h3>Generalizable manipulation</h3>
    <p>Learning policies and value functions that transfer across garment categories, initial states, and robot embodiments.</p>
  </div>
  <div>
    <h3>Scalable simulation</h3>
    <p>Building data pipelines that combine GPU-parallel physics, trajectory curation, retargeting, and photorealistic rendering.</p>
  </div>
  <div>
    <h3>Visual affordances</h3>
    <p>Distilling structural supervision into image-space priors for zero-shot garment manipulation from RGB observations.</p>
  </div>
</div>

Selected Work
------
{: .selected-work-title }

<section class="featured-work">

### ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening
{: .work-title }

<p class="work-meta">
Jiaxiang Luo<sup>*</sup>, <strong>Zilong Huang</strong> <span class="author-note">(student first author)</span>, Hao Cheng, and Zixiang Hong<br>
<em>IEEE Robotics and Automation Letters</em>, 2026<br>
<span class="author-note"><sup>*</sup> Corresponding author</span>
</p>

A small observation sits behind ClothMate: once the robot grasps the garment well, the fling motion can do much of the unfolding without being tightly coupled to every detailed garment state. We turn this into a two-stage learning framework for grasp selection and fling evaluation, cutting the data requirement to **15%** of category-specific baselines while one model handles **five garment categories**.
{: .work-summary }

<ul class="work-highlights" aria-label="ClothMate highlights">
  <li>State-decoupled grasp-fling consistency</li>
  <li>Two-stage value-learning framework</li>
  <li>Single model for shirts, dresses, pants, jumpsuits, and skirts</li>
</ul>

<video controls muted loop playsinline preload="metadata" poster="/images/clothmate-five-categories-poster.jpg" style="width: 100%; border-radius: 8px;">
  <source src="/files/clothmate-five-categories.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>
<p class="video-caption">Five garment categories, one ClothMate policy. Each panel shows a representative grasp-fling rollout.</p>

[Paper](https://ieeexplore.ieee.org/document/11248822/){: .btn .btn--primary }
[Code](https://github.com/chongchongjjj/clothmate){: .btn }
[Full Supplementary Video](/files/clothmate-supplementary.mp4){: .btn }

</section>

<section class="featured-work">

### Visual Affordance Priors for Generalizable Garment Flattening
{: .work-title }

My ongoing research develops visual affordance priors distilled from large-scale structural supervision for zero-shot real-world garment manipulation. The manuscript is currently under review at *IEEE Robotics and Automation Letters*.
{: .work-summary }

[Visual Affordance Project](https://garment-affordance-review.github.io/unfold-all-anonymous/){: .btn .btn--primary }

</section>

<section class="featured-work">

### Scalable Garment Trajectory Generation
{: .work-title }

At Meituan LongCat, I work on an end-to-end simulation and data platform for garment manipulation. It connects GPU-parallel Newton environments, teleoperation and trajectory curation, cross-robot retargeting, Isaac-based photorealistic rendering, and downstream policy training and evaluation.
{: .work-summary }

<video controls muted loop playsinline preload="metadata" poster="/images/scalable-garment-trajectories.png" style="width: 100%; border-radius: 8px;">
  <source src="/files/scalable-garment-trajectories.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>

<p class="notice--info">
A scalable workflow for collecting, reusing, and rendering garment-manipulation trajectories across simulators, visual domains, and robot embodiments.
</p>

</section>
