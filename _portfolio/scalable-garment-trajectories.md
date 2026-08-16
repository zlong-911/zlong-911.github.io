---
title: "Scalable Garment Trajectory Generation"
excerpt: "Physics-grounded simulation and data infrastructure for robot learning.<br/><img src='/images/scalable-garment-trajectories-cropped.webp' width='1948' height='960' loading='lazy' decoding='async'>"
collection: portfolio
permalink: /research/scalable-garment-trajectories/
---

This project develops a scalable simulation and data workflow for deformable-object manipulation during my internship at **Meituan LongCat**.

The system brings together parallel Newton-based cloth simulation, dual-arm garment manipulation, trajectory recording and review, multi-camera observations, high-fidelity Isaac rendering, and dataset export for downstream robot learning.

<video controls muted loop playsinline preload="none" poster="/images/scalable-garment-trajectories-cropped.webp" data-viewport-autoplay style="width: 100%; border-radius: 8px;">
  <source src="/files/scalable-garment-trajectories-cropped.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>

<script defer src="/assets/js/video-autoplay.js?v=1"></script>

The goal is to connect scalable physics-grounded rollouts with visually diverse training data while preserving consistent state-action trajectories across rendering domains.
