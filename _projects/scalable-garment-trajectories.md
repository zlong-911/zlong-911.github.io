---
layout: page
title: Scalable Garment Trajectory Generation
description: Physics-grounded simulation and data infrastructure for robot learning
img: assets/img/scalable-garment-trajectories-poster.png
importance: 1
category: research
---

This project develops a scalable simulation and data workflow for deformable-object manipulation during my internship at **Meituan LongCat**.

The system brings together:

- parallel Newton-based cloth simulation and multi-environment rollouts;
- dual-arm garment manipulation with particle-level grasping;
- structured trajectory, state, action, and multi-camera observation recording;
- human-in-the-loop trajectory review and data curation;
- high-fidelity Isaac rendering and visual randomization;
- export pipelines for downstream robot learning.

<video class="img-fluid rounded z-depth-1" controls autoplay muted loop playsinline poster="{{ '/assets/img/scalable-garment-trajectories-poster.png' | relative_url }}">
  <source src="{{ '/assets/video/scalable-garment-trajectories.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support embedded video.
</video>

The goal is to connect scalable physics-grounded rollouts with visually diverse training data while preserving consistent state-action trajectories across rendering domains.

**Role:** Simulation Research Intern, Meituan LongCat.
