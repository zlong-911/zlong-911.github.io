---
title: "ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening"
collection: publications
category: manuscripts
permalink: /publication/clothmate
excerpt: "A data-efficient framework for generalizable garment flattening across multiple garment categories."
date: 2025-11-14
venue: "IEEE Robotics and Automation Letters, 11(1), 298–305"
paperurl: "https://ieeexplore.ieee.org/document/11248822/"
citation: "J. Luo, <b>Z. Huang</b>, H. Cheng, and Z. Hong. (2025). &quot;ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening.&quot; <i>IEEE Robotics and Automation Letters</i>, 11(1), 298–305."
---

ClothMate introduces a two-stage value-learning framework that leverages grasp-fling consistency to improve data efficiency and generalization across garment categories.

[IEEE Xplore](https://ieeexplore.ieee.org/document/11248822/) · [DOI](https://doi.org/10.1109/LRA.2025.3632758)

## Core insight

### Grasp-Fling Consistency

Flinging garments from semantically similar regions—such as sleeve corners, waistbands, and shoulder straps—tends to produce comparable post-fling poses and unfolding results. This consistency holds across different instances of the same garment and across garment categories.

<figure>
  <img
    src="/images/clothmate-grasp-fling-consistency.png"
    alt="Consistent outcomes from flinging semantically similar grasps across five garment categories"
    loading="eager"
  >
  <figcaption>
    Consistent outcomes from flinging semantically similar grasps. Rows 1–2 show different configurations of the same garment instance; Row 3 shows consistency across garment instances and categories.
  </figcaption>
</figure>

## Approach

ClothMate transfers manipulation strategies between similar semantic regions on the same garment and across different garments. The framework combines a learned fling policy with a heuristic pick-and-stretch policy to efficiently canonicalize and align garments from diverse categories.
