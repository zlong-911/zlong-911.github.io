---
layout: about
title: about
permalink: /
subtitle: Robot Learning · Deformable Object Manipulation · Simulation

profile:
  align: right
  image: zilong-huang.jpg
  image_circular: false
  more_info: >
    <p>Simulation Intern, Meituan LongCat</p>
    <p>Master's Student, SCUT</p>
    <p>Guangzhou, China</p>

selected_papers: true
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
---

I am a master's student in the School of Automation Science and Engineering at [South China University of Technology](https://www.scut.edu.cn/en/) and a **Simulation Research Intern at Meituan LongCat**.

My research focuses on enabling robots to perceive and manipulate deformable objects. I build scalable simulation and data systems for garment manipulation, and study how structural priors and visual representations can support generalization from simulation to the real world.

> I am interested in scalable robot learning systems that connect physics-grounded simulation, high-fidelity visual generation, and real-world manipulation.

## Research highlights

### Scalable garment trajectory generation

At Meituan LongCat, I work on a Newton-based simulation and data pipeline for garment manipulation. The system connects parallel cloth rollouts, trajectory recording and review, high-fidelity Isaac rendering, and downstream robot learning datasets.

<video class="img-fluid rounded z-depth-1" controls muted loop playsinline poster="{{ '/assets/img/scalable-garment-trajectories-poster.png' | relative_url }}">
  <source src="{{ '/assets/video/scalable-garment-trajectories.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support embedded video.
</video>

<div class="caption">
  A scalable workflow from web-supervised trajectory collection and unified Newton rollouts to physics-grounded evaluation and visual sim-to-real data.
</div>

### Generalizable garment flattening

My academic research investigates data-efficient grasp selection for garment flattening. **ClothMate** learns grasp-fling consistency across garment categories, while my ongoing work develops visual affordance priors distilled from large-scale structural supervision for zero-shot real-world transfer.

[Explore my projects]({{ '/projects/' | relative_url }}){: .btn .btn-primary }
