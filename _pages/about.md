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
    <video class="work-video" controls muted playsinline preload="none" poster="/images/clothmate-poster.jpg">
      <source src="/files/clothmate-preview.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title">ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening</h3>
    <p class="work-meta">Jiaxiang Luo, <strong>Zilong Huang</strong>, Hao Cheng, and Zixiang Hong<br><em>IEEE Robotics and Automation Letters</em>, 2026</p>
    <p class="work-summary">ClothMate starts from a simple observation: flinging from semantically analogous garment regions often produces consistent responses, even across garment instances and categories. Its two-stage framework learns grasp values in canonicalized, aligned states and transfers them to arbitrary crumpled configurations through vertex mapping. This allows a single policy to handle five garment categories using just 15% of the aggregate data required by separate category-specific baselines.</p>
    <p class="work-links">
      <a class="btn btn--primary" href="https://ieeexplore.ieee.org/document/11248822/">Paper</a>
      <a class="btn" href="https://github.com/chongchongjjj/clothmate">Code</a>
      <button
        class="btn clothmate-details-toggle"
        type="button"
        data-clothmate-details-toggle
        aria-expanded="false"
        aria-controls="clothmate-details"
      >Details <span aria-hidden="true">↓</span></button>
    </p>
  </div>
  <section id="clothmate-details" class="clothmate-details" data-clothmate-details data-clothmate-carousel hidden>
    <section class="clothmate-carousel__slide" data-clothmate-slide data-slide-label="Overview">
      <div class="clothmate-details__content">
        <div class="clothmate-details__design clothmate-details__design--insight">
          <p><strong>Core Insight.</strong> We noticed a simple pattern: even when a garment starts from different crumpled states (the <em>Before</em> rows in the left figure), grasping semantically similar regions—such as sleeve corners, waistbands, or shoulder straps (marked in blue)—often leads to similar post-fling poses and unfolding outcomes (the <em>After</em> rows). This pattern holds across different states of the same garment, and even across garment instances and categories. It suggests that learning to fling can be decoupled from the full complexity of a garment's state, allowing us to learn the action in a more compact space.</p>
        </div>
        <div class="clothmate-details__figure-card clothmate-details__figure-card--insight">
          <figure class="clothmate-details__figure">
            <a href="/images/clothmate-grasp-fling-consistency.png">
              <img
                src="/images/clothmate-grasp-fling-consistency-preview.webp"
                alt="Consistent outcomes from flinging semantically similar grasps across five garment categories"
                width="1400"
                height="1651"
                loading="lazy"
                decoding="async"
              >
            </a>
          </figure>
        </div>
        <div class="clothmate-details__figure-card clothmate-details__figure-card--method">
          <figure class="clothmate-details__figure">
            <a href="/images/clothmate-method-overview.png">
              <img
                src="/images/clothmate-method-overview-preview.webp"
                alt="Overview of the ClothMate two-stage value-learning and pick-and-stretch framework"
                width="2400"
                height="921"
                loading="lazy"
                decoding="async"
              >
            </a>
          </figure>
          <div class="clothmate-details__design">
            <p><strong>Method Overview.</strong> Given a top-down RGB image, ClothMate selects two grasp points and executes a fixed fling primitive. We use Spatial Action Maps to represent these bimanual actions: each pixel encodes a pair of grasp points at fixed offsets above and below it. Rotating the input changes the grasp direction, while scaling it changes the distance between the two points. We first evaluate candidate grasps on garments in a canonicalized, aligned state, assigning each pair a value based on how well it unfolds the garment (Fig. a). Simulation provides vertex correspondences across configurations, allowing us to project each grasp pair and its value onto crumpled states and train the policy to select grasps directly from the current image (Fig. b). Once the garment is mostly unfolded, ClothMate switches to pick-and-stretch for final flattening and alignment (Fig. c).</p>
          </div>
        </div>
      </div>
    </section>
    <section class="clothmate-carousel__slide" data-clothmate-slide data-slide-label="Results" hidden>
      <div class="clothmate-results">
        <div class="clothmate-results__grid">
          <div class="clothmate-results__card clothmate-results__video-card">
            <video class="clothmate-results__video" data-clothmate-autoplay-video aria-label="ClothMate simulation results across five garment categories" controls loop muted playsinline preload="none" poster="/images/clothmate-five-category-results-poster.jpg">
              <source src="/files/clothmate-five-category-results.mp4" type="video/mp4">
              Your browser does not support embedded video.
            </video>
          </div>
          <div class="clothmate-results__card clothmate-results__analysis">
            <figure class="clothmate-results__value">
              <a href="/images/clothmate-teacher-value.webp">
                <img
                  src="/images/clothmate-teacher-value.webp"
                  alt="Prior Value Module outputs showing a shared grasp-value structure across garment categories and transformed instances"
                  width="1400"
                  height="1163"
                  loading="lazy"
                  decoding="async"
                >
              </a>
            </figure>
          </div>
        </div>
        <div class="clothmate-results__real-row">
          <div class="clothmate-results__card clothmate-results__video-card">
            <video class="clothmate-results__video" data-clothmate-autoplay-video aria-label="ClothMate real-world results across 24 garments" controls loop muted playsinline preload="none" poster="/images/clothmate-real-results-poster.jpg">
              <source src="/files/clothmate-real-results.mp4" type="video/mp4">
              Your browser does not support embedded video.
            </video>
          </div>
          <div class="clothmate-results__copy">
            <p><strong>Results.</strong> ClothMate trains a single policy across five garment categories using just 15% of the aggregate data required to train separate category-specific baselines. On the simulated shirt benchmark, it improves coverage from 85.0% to 91.5% while reducing the average number of interaction steps from 7.0 to 4.7 relative to Cloth-Funnels. We further evaluate ClothMate on 24 real garments across five categories using a dual-arm robot. Across the eight shirts tested by both methods, ClothMate improves mean IoU from 37.2% to 57.4% and mean coverage from 75.6% to 83.1%.</p>
            <p><strong>Grasp-Fling Consistency.</strong> The Prior Value Module reveals a shared grasp-value structure across garment instances and categories. Through vertex mapping, ClothMate learns this structure in canonicalized, aligned states and transfers it to arbitrary crumpled configurations. This resembles how people approach garment manipulation: first identify semantically meaningful grasp locations, then find those locations in the crumpled cloth, rather than explicitly modeling every wrinkle. This reusable grasp prior helps explain why ClothMate can generalize across instances and categories with limited data.</p>
          </div>
        </div>
      </div>
    </section>
    <nav class="clothmate-carousel__controls" aria-label="ClothMate detail pages">
      <button class="clothmate-carousel__arrow" type="button" data-clothmate-previous aria-label="Previous detail page" disabled>←</button>
      <div class="clothmate-carousel__position">
        <span data-clothmate-status aria-live="polite">Overview · 1 / 2</span>
        <span class="clothmate-carousel__dots" role="tablist" aria-label="Choose detail page">
          <button type="button" role="tab" aria-label="Show Overview" aria-selected="true" data-clothmate-page="0"></button>
          <button type="button" role="tab" aria-label="Show Results" aria-selected="false" data-clothmate-page="1"></button>
        </span>
      </div>
      <button class="clothmate-carousel__arrow" type="button" data-clothmate-next aria-label="Next detail page">→</button>
    </nav>
  </section>
</article>

<article class="work-entry">
  <div class="work-media">
    <video class="work-video" controls muted playsinline preload="none" poster="/images/visual-affordance-priors-poster.jpg">
      <source src="/files/visual-affordance-priors.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title">Visual Affordance Priors for Generalizable Garment Flattening</h3>
    <p class="work-meta"><strong>Zilong Huang</strong>, Sipeng Lu, and Jiaxiang Luo<sup>*</sup><br>Under review</p>
    <p class="work-summary">Visual Affordance Priors asks a practical question: can a robot learn where to grasp a garment in simulation and apply that knowledge directly to real images? We first learn the value of grasp pairs from large-scale physics simulation, then distill this structural knowledge into image-space affordance maps through randomized rendering. The resulting prior transfers to real garments without real-data fine-tuning and improves unfolding across 22 garment assets.</p>
    <p class="work-links">
      <a class="btn btn--primary" href="https://garment-affordance-review.github.io/unfold-all-anonymous/">Project Page</a>
      <button
        class="btn"
        type="button"
        data-real-inference-toggle
        aria-expanded="false"
        aria-controls="real-inference-demo"
      >Details <span aria-hidden="true">↓</span></button>
    </p>
  </div>
  <section
    id="real-inference-demo"
    class="real-inference-demo"
    data-real-inference-demo
    hidden
  >
    <div class="visual-affordance-overview">
      <div class="visual-affordance-overview__intro">
        <h4>Design Idea</h4>
        <p><strong>Goal.</strong> Learn where a robot should grasp a crumpled garment from a single RGB view, without relying on real-data fine-tuning for every new garment or scene.</p>
        <p><strong>Key Move.</strong> Separate structural reasoning from visual deployment: first learn what makes a dual-grasp pair useful on the garment surface, then transfer that pair-value knowledge into image space.</p>
        <p><strong>Implementation.</strong> Parallel physics evaluates ordered grasp pairs, a point-cloud teacher fills in the pair-value field, synthetic rendering connects teacher predictions to RGB observations, and the final visual prior predicts coordinated first- and second-grasp heatmaps.</p>
      </div>
      <div class="visual-affordance-method-grid">
        <figure class="visual-affordance-method-card visual-affordance-method-card--wide">
          <div class="visual-affordance-method-card__heading">
            <span>01</span>
            <h4>Offline Action Collection</h4>
          </div>
          <div class="visual-affordance-method-media visual-affordance-method-media--video">
            <video autoplay loop muted playsinline preload="metadata" aria-label="Parallel simulation collection with many garment environments">
              <source src="/files/visual-affordance-method/offline_collection.mp4" type="video/mp4">
            </video>
          </div>
        </figure>
        <figure class="visual-affordance-method-card">
          <div class="visual-affordance-method-card__heading">
            <span>02</span>
            <h4>Pair-Value Teacher</h4>
          </div>
          <div class="visual-affordance-teacher" data-vap-teacher>
            <canvas data-vap-teacher-canvas aria-label="Point-cloud pair-value teacher preview"></canvas>
            <div class="visual-affordance-teacher__legend" aria-hidden="true">
              <span>Low</span>
              <i></i>
              <span>High</span>
            </div>
          </div>
        </figure>
        <figure class="visual-affordance-method-card visual-affordance-method-card--wide">
          <div class="visual-affordance-method-card__heading">
            <span>03</span>
            <h4>Synthetic Visual Data</h4>
          </div>
          <div class="visual-affordance-method-media">
            <img
              src="/images/visual-affordance-priors/synthetic_collection.gif"
              alt="Rendered garment mosaics for visual supervision"
              width="960"
              height="540"
              loading="lazy"
              decoding="async"
            >
          </div>
        </figure>
        <figure class="visual-affordance-method-card">
          <div class="visual-affordance-method-card__heading">
            <span>04</span>
            <h4>Visual Pair Policy Dynamics</h4>
          </div>
          <div class="visual-affordance-method-media visual-affordance-method-media--portrait">
            <video autoplay loop muted playsinline preload="metadata" aria-label="First- and second-grasp heatmap dynamics">
              <source src="/files/visual-affordance-method/a1_a2_asset_1.mp4" type="video/mp4">
            </video>
          </div>
        </figure>
      </div>
    </div>
  </section>
</article>

<article class="work-entry">
  <div class="work-media">
    <video class="work-video" controls muted loop playsinline preload="none" poster="/images/scalable-garment-trajectories.png">
      <source src="/files/scalable-garment-trajectories.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title">Scalable Garment Trajectory Generation</h3>
    <p class="work-summary">At Meituan LongCat, I work on an end-to-end simulation and data platform for garment manipulation, connecting GPU-parallel physics, trajectory curation, retargeting, photorealistic rendering, and downstream policy training.</p>
  </div>
</article>

<script defer src="/assets/js/clothmate-details.js?v=1"></script>
<script defer src="/assets/js/clothmate-carousel.js?v=2"></script>
<script defer src="/assets/js/real-inference-home.js?v=4"></script>
<script defer src="/assets/js/vendor/three.min.js?v=0.160.0"></script>
<script defer src="/assets/js/visual-affordance-method.js?v=2"></script>
