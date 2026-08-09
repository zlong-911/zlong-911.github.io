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
            <p><strong>Method Overview.</strong> Given a top-down RGB image, ClothMate selects two grasp points and executes a fixed fling primitive. We use Spatial Action Maps to represent these bimanual actions: each pixel encodes a pair of grasp points at fixed offsets above and below it. Rotating the input changes the grasp direction, while scaling it changes the distance between the two points. We first evaluate candidate grasps on garments in a canonical, aligned state, assigning each pair a score based on how well it unfolds the garment (Fig. a). In simulation, we know which cloth points correspond across different configurations. This lets us carry each grasp pair and its score over to crumpled states, and train the policy to select grasps directly from the current image (Fig. b). Once the garment is mostly unfolded, ClothMate switches to pick-and-stretch for final flattening and alignment (Fig. c).</p>
          </div>
        </div>
      </div>
    </section>
    <section class="clothmate-carousel__slide" data-clothmate-slide data-slide-label="Results" hidden>
      <div class="clothmate-results">
        <div class="clothmate-results__grid">
          <div class="clothmate-results__card clothmate-results__video-card">
            <video class="clothmate-results__video" data-clothmate-autoplay-video aria-label="ClothMate simulation results across five garment categories" controls loop muted playsinline preload="metadata" poster="/images/clothmate-five-category-results-poster.jpg">
              <source src="/files/clothmate-five-category-results.mp4" type="video/mp4">
              Your browser does not support embedded video.
            </video>
          </div>
          <div class="clothmate-results__card clothmate-results__analysis">
            <figure class="clothmate-results__value">
              <a href="/images/clothmate-teacher-value.webp">
                <img
                  src="/images/clothmate-teacher-value.webp"
                  alt="Teacher value maps showing shared hot regions across garment categories and transformed instances"
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
            <video class="clothmate-results__video" data-clothmate-autoplay-video aria-label="ClothMate real-world results across 24 garments" controls loop muted playsinline preload="metadata" poster="/images/clothmate-real-results-poster.jpg">
              <source src="/files/clothmate-real-results.mp4" type="video/mp4">
              Your browser does not support embedded video.
            </video>
          </div>
          <div class="clothmate-results__copy">
            <p><strong>Results.</strong> We jointly train one policy across five garment categories with only 15% of the aggregate data used by separate category-specific baselines. The model converges quickly and produces consistent flattening behavior across categories.</p>
            <p><strong>Real-World Evaluation.</strong> We evaluate ClothMate with two collaborative robot arms and 24 garments from five categories: shirts, jumpsuits, dresses, pants, and skirts. The set includes different colors, patterns, and materials. Each garment is tested from randomized starting configurations.</p>
            <p><strong>Value Analysis.</strong> The teacher's value predictions show a shared structure across garment instances and categories. High-value grasps recur around the same kinds of semantic point pairs, even after rotation and scale changes. This suggests that the policy can learn a compact set of common grasp combinations, then locate them again in a crumpled garment without representing every wrinkle in detail.</p>
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
    <video class="work-video" controls muted playsinline preload="metadata" poster="/images/visual-affordance-priors-poster.jpg">
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
    data-asset-base="https://garment-affordance-review.github.io/unfold-all-anonymous"
    hidden
  >
    <div class="real-inference-demo__content">
      <section class="vap-artf-showcase" data-vap-artf-showcase>
        <div class="real-inference-demo__heading vap-artf-heading">
          <div>
            <h4>Zero-Shot Predictions Across Environments</h4>
            <p>Representative predictions on aRTF-Clothes. The same model identifies semantically meaningful grasp pairs across eight unseen scenes without fine-tuning on real images.</p>
          </div>
          <span>3 categories · 8 scenes</span>
        </div>
        <div class="vap-artf-tabs" role="tablist" aria-label="aRTF-Clothes garment category">
          <button class="is-active" type="button" role="tab" aria-selected="true" data-artf-category="towels">Towels</button>
          <button type="button" role="tab" aria-selected="false" data-artf-category="tshirts">T-shirts</button>
          <button type="button" role="tab" aria-selected="false" data-artf-category="shorts">Shorts</button>
        </div>
        <figure class="vap-artf-stage">
          <img
            src="/images/visual-affordance-priors/artf-towels.jpg"
            alt="Zero-shot grasp-pair predictions for towels across eight unseen aRTF-Clothes scenes"
            width="1920"
            height="540"
            loading="lazy"
            decoding="async"
            data-artf-preview
          >
          <figcaption>
            <span data-artf-caption>Towels · eight unseen scenes</span>
            <a href="https://garment-affordance-review.github.io/unfold-all-anonymous/#artf-visualization">Explore the full benchmark</a>
          </figcaption>
        </figure>
      </section>
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

<script defer src="/assets/js/clothmate-details.js?v=1"></script>
<script defer src="/assets/js/clothmate-carousel.js?v=2"></script>
<script defer src="/assets/js/real-inference-home.js?v=4"></script>
