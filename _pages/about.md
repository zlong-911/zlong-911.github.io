---
permalink: /
title: "About Me 🤖"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hi! I am Zilong Huang, **a master's student at [South China University of Technology](https://www.scut.edu.cn/en/)** in the Automation Innovation Program and a **Simulation Research Intern at Meituan LongCat**. My research focuses on **learning-based manipulation of deformable objects**, particularly garments. I aim to build scalable simulation and data-generation systems that enable robot policies to generalize across tasks and platforms and transfer reliably to the real world.
{: .about-intro }

Selected Work ✨
------
{: .selected-work-title }

### ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening
{: .work-title }

<p class="work-meta">
Jiaxiang Luo, <strong>Zilong Huang</strong> <span class="author-note">(student first author)</span>, Hao Cheng, and Zixiang Hong<br>
<em>IEEE Robotics and Automation Letters</em>, 2026
</p>

ClothMate exploits grasp-fling consistency to reuse interaction knowledge across garment categories. Trained jointly on five categories with 15% of the aggregate data required by separate category-specific baselines, it achieves 91.5% coverage in 4.7 steps.
{: .work-summary }

<video controls muted playsinline preload="metadata" poster="/images/clothmate-poster.jpg" style="width: 100%; border-radius: 8px;">
  <source src="/files/clothmate-supplementary.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>

[Paper](https://ieeexplore.ieee.org/document/11248822/){: .btn .btn--primary }
[Code](https://github.com/chongchongjjj/clothmate){: .btn }
[Supplementary Video](/files/clothmate-supplementary.mp4){: .btn }

### Visual Affordance Priors for Generalizable Garment Flattening
{: .work-title }

My ongoing research develops visual affordance priors distilled from large-scale structural supervision for zero-shot real-world garment manipulation. The manuscript is currently under review at *IEEE Robotics and Automation Letters*.
{: .work-summary }

[Visual Affordance Project](https://garment-affordance-review.github.io/unfold-all-anonymous/){: .btn .btn--primary }

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
