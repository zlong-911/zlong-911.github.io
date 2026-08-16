---
permalink: /
title: "Zilong Huang"
author_profile: false
hide_title: true
main_class: home-inline-profile
academicons: false
fontawesome: false
main_js: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="home-hero__portrait">
    <div class="home-hero__avatar">
      <img src="/images/zilong-huang.webp" alt="Zilong Huang" width="480" height="471" fetchpriority="high" decoding="async">
    </div>
    <div class="home-identity">
      <h1 class="home-profile-name">黄梓龙 · Zilong Huang</h1>
      <a class="home-identity__detail" href="https://www.scut.edu.cn/en/" data-i18n="home.affiliationLine">SCUT · Guangzhou, China</a>
      <a class="home-identity__detail" href="mailto:auhuangzl@mail.scut.edu.cn">auhuangzl@mail.scut.edu.cn</a>
    </div>
  </div>
  <div class="home-hero__body" markdown="1">

<p class="about-intro" data-i18n="home.intro">Hi! I am Zilong Huang, a master's student in <strong>Control Science and Engineering at <a href="https://www.scut.edu.cn/en/">South China University of Technology</a></strong>. My work explores robot manipulation of garments and other deformable objects, with an emphasis on <strong>learning generalizable policies from limited data</strong> across garment categories, deformation states, and real-world settings. I combine structured grasp priors with visual affordance learning and develop scalable simulation and data pipelines that connect cloth physics, visual observations, and policy learning for garment manipulation with real bimanual robotic systems.</p>

  <div class="home-credentials" aria-label="Academic and internship timeline">
    <div class="credential-timeline">
      <article class="credential-item">
        <div class="credential-mark credential-mark--seal" aria-hidden="true">
          <img src="/images/scut-emblem.webp" alt="" width="128" height="128" decoding="async">
        </div>
        <div class="credential-copy">
          <span data-i18n="timeline.scut.undergraduateDate">Sep 2020 - Jul 2024</span>
          <h3 data-i18n="timeline.scut.undergraduateShort">Bachelor's Student</h3>
          <p data-i18n="timeline.scut.undergraduateLine">SCUT · Automation Innovation Program</p>
        </div>
      </article>
      <article class="credential-item">
        <div class="credential-mark credential-mark--seal" aria-hidden="true">
          <img src="/images/scut-emblem.webp" alt="" width="128" height="128" decoding="async">
        </div>
        <div class="credential-copy">
          <span data-i18n="timeline.scut.masterDate">Sep 2024 - Present</span>
          <h3 data-i18n="timeline.scut.masterShort">Master's Student</h3>
          <p data-i18n="timeline.scut.masterLine">SCUT · Control Science and Engineering</p>
        </div>
      </article>
      <article class="credential-item">
        <div class="credential-mark credential-mark--meituan" aria-hidden="true"></div>
        <div class="credential-copy">
          <span data-i18n="timeline.meituan.date">May 2026 - Present</span>
          <h3 data-i18n="timeline.meituan.role">Simulation Research Intern</h3>
          <p data-i18n="timeline.meituan.line">Meituan LongCat · Garment Manipulation</p>
        </div>
      </article>
    </div>
  </div>
  </div>
  <section class="expertise-section" aria-label="Research focus and technical stack">
    <div class="expertise-track">
      <div class="expertise-item">
        <div class="expertise-copy">
          <h3 data-i18n="expertise.researchLabel">Research Focus</h3>
          <p data-i18n="expertise.researchItems">Robot Learning · Deformable Object Manipulation · Visual Affordance Learning · Sim-to-Real</p>
        </div>
      </div>
      <div class="expertise-item">
        <div class="expertise-copy">
          <h3 data-i18n="expertise.stackLabel">Technical Stack</h3>
          <p data-i18n="expertise.stackItems">Python · PyTorch · PyFlex · Newton · Isaac Sim · LeRobot · OpenPI · RLinf</p>
        </div>
      </div>
    </div>
  </section>
</section>

<h2 class="selected-work-title" data-i18n="home.selectedWork">Selected Work</h2>

<article class="work-entry">
  <div class="work-media">
    <video class="work-video" controls muted loop playsinline preload="none" poster="/images/clothmate-poster.webp" data-viewport-autoplay>
      <source src="/files/clothmate-preview.mp4" type="video/mp4">
      <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title" data-i18n="clothmate.title">ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening</h3>
    <p class="work-meta" data-i18n="clothmate.meta">Jiaxiang Luo, <strong>Zilong Huang</strong>, Hao Cheng, and Zixiang Hong<br><em>IEEE Robotics and Automation Letters</em>, 2026</p>
    <p class="work-summary" data-i18n="clothmate.summary">ClothMate studies how reusable grasp priors can make garment flattening more data-efficient. It learns grasp-fling values in canonicalized garment states, transfers them to crumpled configurations through vertex mapping, and combines fling with pick-and-stretch for final flattening. A single policy generalizes across five garment categories using only 15% of the aggregate data required by category-specific baselines.</p>
    <p class="work-links">
      <a class="btn btn--primary" href="https://ieeexplore.ieee.org/document/11248822/" data-i18n="home.paper">Paper</a>
      <a class="btn" href="https://github.com/chongchongjjj/clothmate" data-i18n="home.code">Code</a>
      <button
        class="btn clothmate-details-toggle"
        type="button"
        data-clothmate-details-toggle
        aria-expanded="false"
        aria-controls="clothmate-details"
        data-i18n="home.details"
      >Details <span aria-hidden="true">↓</span></button>
    </p>
  </div>
  <section id="clothmate-details" class="clothmate-details" data-clothmate-details data-clothmate-carousel hidden>
    <section class="clothmate-carousel__slide" data-clothmate-slide data-slide-label="Overview">
      <div class="clothmate-details__content">
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
          <div class="clothmate-details__design clothmate-details__design--insight">
            <p data-i18n="clothmate.coreInsight"><strong>Core Insight.</strong> We noticed a simple pattern: even when a garment starts from different crumpled states (the <em>Before</em> rows in the left figure), grasping semantically similar regions, such as sleeve corners, waistbands, or shoulder straps (marked in blue), often leads to similar post-fling poses and unfolding outcomes (the <em>After</em> rows). This pattern holds across different states of the same garment, and even across garment instances and categories. It suggests that learning to fling can be decoupled from the full complexity of a garment's state, allowing us to learn the action in a more compact space.</p>
          </div>
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
            <p data-i18n="clothmate.method"><strong>Method Overview.</strong> Given a top-down RGB image, ClothMate selects two grasp points and executes a fixed fling primitive. We use Spatial Action Maps to represent these bimanual actions: each pixel encodes a pair of grasp points at fixed offsets above and below it. Rotating the input changes the grasp direction, while scaling it changes the distance between the two points. We first evaluate candidate grasps on garments in a canonicalized, aligned state, assigning each pair a value based on how well it unfolds the garment (Fig. a). Simulation provides vertex correspondences across configurations, allowing us to project each grasp pair and its value onto crumpled states and train the policy to select grasps directly from the current image (Fig. b). Once the garment is mostly unfolded, ClothMate switches to pick-and-stretch for final flattening and alignment (Fig. c).</p>
          </div>
        </div>
      </div>
    </section>
    <section class="clothmate-carousel__slide" data-clothmate-slide data-slide-label="Results" hidden>
      <div class="clothmate-results">
        <div class="clothmate-results__grid">
          <div class="clothmate-results__card clothmate-results__video-card">
            <video class="clothmate-results__video" aria-label="ClothMate simulation results across five garment categories" controls loop muted playsinline preload="none" data-deferred-poster="/images/clothmate-five-category-results-poster.webp">
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
            <video class="clothmate-results__video" aria-label="ClothMate real-world results across 24 garments" controls loop muted playsinline preload="none" data-deferred-poster="/images/clothmate-real-results-poster.webp">
              <source src="/files/clothmate-real-results.mp4" type="video/mp4">
              Your browser does not support embedded video.
            </video>
          </div>
          <div class="clothmate-results__copy">
            <p data-i18n="clothmate.results"><strong>Results.</strong> ClothMate trains a single policy across five garment categories using just 15% of the aggregate data required to train separate category-specific baselines. On the simulated shirt benchmark, it improves coverage from 85.0% to 91.5% while reducing the average number of interaction steps from 7.0 to 4.7 relative to Cloth-Funnels. We further evaluate ClothMate on 24 real garments across five categories using a dual-arm robot. Across the eight shirts tested by both methods, ClothMate improves mean IoU from 37.2% to 57.4% and mean coverage from 75.6% to 83.1%.</p>
            <p data-i18n="clothmate.consistency"><strong>Grasp-Fling Consistency.</strong> The Prior Value Module reveals a shared grasp-value structure across garment instances and categories. Through vertex mapping, ClothMate learns this structure in canonicalized, aligned states and transfers it to arbitrary crumpled configurations. This resembles how people approach garment manipulation: first identify semantically meaningful grasp locations, then find those locations in the crumpled cloth, rather than explicitly modeling every wrinkle. This reusable grasp prior helps explain why ClothMate can generalize across instances and categories with limited data.</p>
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
    <video class="work-video" controls muted loop playsinline preload="none" poster="/images/visual-affordance-priors-poster.webp" data-viewport-autoplay>
      <source src="/files/visual-affordance-priors.mp4" type="video/mp4">
      <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title" data-i18n="vap.title">Visual Affordance Priors for Generalizable Garment Flattening</h3>
    <p class="work-meta" data-i18n="vap.meta"><strong>Zilong Huang</strong>, Sipeng Lu, and Jiaxiang Luo<sup>*</sup><br>Under review</p>
    <p class="work-summary" data-i18n="vap.summary">This project scales ClothMate's grasp prior from controlled simulated garments to broader visual deployment. It first learns a structural pair-value teacher on garment geometry, then distills that signal into RGB affordance predictors that choose the first grasp and the second grasp conditioned on it. The goal is to make garment flattening policies robust to asset diversity, texture variation, camera changes, and real-image inputs.</p>
    <p class="work-links">
      <a class="btn btn--primary" href="https://garment-affordance-review.github.io/unfold-all-anonymous/" data-i18n="home.projectPage">Project Page</a>
      <button
        class="btn"
        type="button"
        data-real-inference-toggle
        aria-expanded="false"
        aria-controls="real-inference-demo"
        data-i18n="home.details"
      >Details <span aria-hidden="true">↓</span></button>
    </p>
  </div>
  <section
    id="real-inference-demo"
    class="real-inference-demo"
    data-real-inference-demo
    data-vap-carousel
    hidden
  >
    <section class="vap-carousel__slide" data-vap-slide data-slide-label-en="Method" data-slide-label-zh="方法">
    <div class="visual-affordance-overview">
      <div class="visual-affordance-overview__intro">
        <h4 data-i18n="vap.heading">Core Insight</h4>
        <p data-i18n="vap.insight">In ClothMate, we explored a simple idea: garments with similar structures often share useful grasping patterns. Visual Affordance Priors is our attempt to make this idea more general. Instead of learning only from a small, controlled set of garments, we want this grasp-value prior to work across a wider range of garment shapes, appearances, and visual conditions. To do so, we first learn which pairs of points are useful to grasp in a structural domain, then transfer that knowledge into image space so the policy can reason directly from RGB observations.</p>
        <nav class="visual-affordance-method-nav" aria-label="Method overview" data-vap-method-nav>
          <h4 data-i18n="vap.methodHeading">Method Overview</h4>
          <p class="visual-affordance-method-nav__overview" data-i18n="vap.methodOverview">We scale the pipeline across <strong>1,646 garment assets</strong> using two complementary data streams: <strong>757K structural pair labels</strong> from parallel physics simulation and <strong>25.9K randomized RGB images</strong>. A Pair-Value Teacher learns grasp values from the former, while a Visual Affordance Prior transfers them into image-space predictions.</p>
          <button class="visual-affordance-method-step is-active" type="button" data-vap-method-step="0" aria-pressed="true" aria-controls="vap-method-card-1">
            <span class="visual-affordance-method-step__number">01</span>
            <span>
              <strong data-i18n="vap.step1Title">Scaling Up Grasp Evaluation</strong>
              <small data-i18n="vap.step1Description">Physics-only simulation evaluates grasp pairs through canonicalized initialization and controlled loading. At <strong>15.5K actions per hour</strong>, it runs about <strong>19× faster</strong> than our original PyFlex pipeline.</small>
            </span>
          </button>
          <button class="visual-affordance-method-step" type="button" data-vap-method-step="1" aria-pressed="false" aria-controls="vap-method-card-2">
            <span class="visual-affordance-method-step__number">02</span>
            <span>
              <strong data-i18n="vap.step2Title">Learning Structural Pair Values</strong>
              <small data-i18n="vap.step2Description">Because evaluating every surface pair is impractical, we train a Pair-Value Teacher to predict unevaluated pair values from 3D garment structure and sparse simulation outcomes.</small>
            </span>
          </button>
          <button class="visual-affordance-method-step" type="button" data-vap-method-step="2" aria-pressed="false" aria-controls="vap-method-card-3">
            <span class="visual-affordance-method-step__number">03</span>
            <span>
              <strong data-i18n="vap.step3Title">Projecting Structure into Images</strong>
              <small data-i18n="vap.step3Description">We render synthetic images with varied garment states, textures, lighting, and viewpoints, then use mesh correspondence to map the Teacher's 3D pair values into image-space supervision.</small>
            </span>
          </button>
          <button class="visual-affordance-method-step" type="button" data-vap-method-step="3" aria-pressed="false" aria-controls="vap-method-card-4">
            <span class="visual-affordance-method-step__number">04</span>
            <span>
              <strong data-i18n="vap.step4Title">Selecting Grasp Pairs from RGB</strong>
              <small data-i18n="vap.step4Description">The Visual Affordance Prior predicts the first grasp, then the second conditioned on it, allowing the policy to operate directly on real RGB images across different viewpoints and appearances.</small>
            </span>
          </button>
        </nav>
      </div>
      <div class="visual-affordance-method-stage">
      <div class="visual-affordance-method-grid" data-vap-method-grid>
        <figure id="vap-method-card-1" class="visual-affordance-method-card visual-affordance-method-card--wide is-active" data-vap-method-card="0">
          <div class="visual-affordance-method-card__heading">
            <span>01</span>
            <h4 data-i18n="vap.collection">Offline Action Collection</h4>
          </div>
          <div class="visual-affordance-method-media visual-affordance-method-media--video">
            <video data-vap-autoplay loop muted playsinline preload="none" aria-label="Parallel simulation collection with many garment environments">
              <source src="/files/visual-affordance-method/offline_collection.mp4" type="video/mp4">
            </video>
          </div>
        </figure>
        <figure id="vap-method-card-2" class="visual-affordance-method-card" data-vap-method-card="1">
          <div class="visual-affordance-method-card__heading">
            <span>02</span>
            <h4 data-i18n="vap.teacher">Pair-Value Teacher</h4>
          </div>
          <div class="visual-affordance-teacher" data-vap-teacher>
            <canvas data-vap-teacher-canvas aria-label="Point-cloud pair-value teacher preview"></canvas>
            <button class="visual-affordance-instance-arrow visual-affordance-instance-arrow--previous" type="button" data-vap-asset-previous aria-label="Previous garment asset" title="Previous asset">←</button>
            <button class="visual-affordance-instance-arrow visual-affordance-instance-arrow--next" type="button" data-vap-asset-next aria-label="Next garment asset" title="Next asset">→</button>
            <div class="visual-affordance-teacher__legend" aria-hidden="true">
              <span>Low</span>
              <i></i>
              <span>High</span>
            </div>
          </div>
          <figcaption class="visual-affordance-instance-status" data-vap-teacher-asset-status aria-live="polite">Asset 1 / 8</figcaption>
        </figure>
        <figure id="vap-method-card-3" class="visual-affordance-method-card visual-affordance-method-card--wide" data-vap-method-card="2">
          <div class="visual-affordance-method-card__heading">
            <span>03</span>
            <h4 data-i18n="vap.synthetic">Synthetic Visual Data</h4>
          </div>
          <div class="visual-affordance-method-media">
            <img
              src="/images/visual-affordance-priors/synthetic-collection-poster.webp"
              data-vap-animated-src="/images/visual-affordance-priors/synthetic_collection.gif"
              alt="Rendered garment mosaics for visual supervision"
              width="960"
              height="540"
              loading="lazy"
              decoding="async"
            >
          </div>
        </figure>
        <figure id="vap-method-card-4" class="visual-affordance-method-card" data-vap-method-card="3">
          <div class="visual-affordance-method-card__heading">
            <span>04</span>
            <h4 data-i18n="vap.dynamics">Visual Pair Policy Dynamics</h4>
          </div>
          <div class="visual-affordance-method-media visual-affordance-method-media--portrait">
            <video data-vap-autoplay loop muted playsinline preload="none" aria-label="First- and second-grasp heatmap dynamics">
              <source src="/files/visual-affordance-method/a1_a2_asset_1.mp4" type="video/mp4">
            </video>
            <button class="visual-affordance-instance-arrow visual-affordance-instance-arrow--previous" type="button" data-vap-asset-previous aria-label="Previous visual policy asset" title="Previous asset">←</button>
            <button class="visual-affordance-instance-arrow visual-affordance-instance-arrow--next" type="button" data-vap-asset-next aria-label="Next visual policy asset" title="Next asset">→</button>
          </div>
          <figcaption class="visual-affordance-instance-status" data-vap-policy-asset-status aria-live="polite">Asset 1 / 8</figcaption>
        </figure>
      </div>
      </div>
    </div>
    </section>
    <section class="vap-carousel__slide" data-vap-slide data-slide-label-en="Results" data-slide-label-zh="结果" hidden>
    <div class="visual-affordance-results" data-vap-results>
      <div class="visual-affordance-results__copy">
        <h4 data-i18n="vap.resultsHeading">Real-World Transfer</h4>
        <p data-i18n="vap.resultsOverview">A grasp prior learned in simulation is only useful if it remains meaningful in real images and leads to effective robot actions. We evaluate this transfer at two levels: continuous inference as a garment deforms, and deployment on a bimanual robot.</p>

        <section class="visual-affordance-results__section">
          <h5 data-i18n="vap.inferenceHeading">Real-World Inference</h5>
          <p data-i18n="vap.inferenceText">We begin with a flattened real garment and progressively deform and crumple it. Although each frame is processed independently, the predicted grasps remain aligned with structurally meaningful regions as the garment folds, rotates, and becomes partially occluded. Across <strong>4 scenes and 70 sequences</strong>, this suggests that the prior captures deformation-consistent grasp affordances rather than fixed image locations.</p>
        </section>

        <section class="visual-affordance-results__section">
          <h5 data-i18n="vap.robotHeading">Real-Robot Deployment</h5>
          <p data-i18n="vap.robotText">We deploy the same prior on a bimanual robot and evaluate <strong>22 real garments</strong>, with five trials per garment and up to three flings per trial. Under the same execution protocol, mean IoU improves from <strong>64.9 to 77.6</strong> over ClothMate, while coverage increases from <strong>71.6 to 86.2</strong>.</p>
        </section>
      </div>

      <div class="visual-affordance-results__media">
        <figure class="visual-affordance-result-media visual-affordance-result-media--inference">
          <div class="visual-affordance-result-media__header">
            <h4 data-i18n="vap.inferenceHeading">Real-World Inference</h4>
            <div class="visual-affordance-scene-tabs" aria-label="Real-world inference scene">
              <button type="button" class="is-active" data-vap-inference-scene="1" aria-pressed="true" data-i18n="vap.scene1">Scene 1</button>
              <button type="button" data-vap-inference-scene="2" aria-pressed="false" data-i18n="vap.scene2">Scene 2</button>
              <button type="button" data-vap-inference-scene="3" aria-pressed="false" data-i18n="vap.scene3">Scene 3</button>
              <button type="button" data-vap-inference-scene="4" aria-pressed="false" data-i18n="vap.scene4">Scene 4</button>
            </div>
          </div>
          <div class="visual-affordance-result-media__stage">
            <video muted loop playsinline preload="none" data-vap-inference-video aria-label="Real-world inference instances 1 to 4"></video>
            <button class="visual-affordance-instance-arrow visual-affordance-instance-arrow--previous" type="button" data-vap-instance-previous aria-label="Previous inference group" title="Previous group" disabled>←</button>
            <button class="visual-affordance-instance-arrow visual-affordance-instance-arrow--next" type="button" data-vap-instance-next aria-label="Next inference group" title="Next group">→</button>
          </div>
          <figcaption class="visual-affordance-instance-status" data-vap-instance-status aria-live="polite">Scene 1 · Instances 01–04 / 24</figcaption>
        </figure>

        <figure class="visual-affordance-result-media visual-affordance-result-media--robot">
          <div class="visual-affordance-result-media__header">
            <h4 data-i18n="vap.robotHeading">Real-Robot Deployment</h4>
          </div>
          <div class="visual-affordance-result-media__stage">
            <video
              controls
              muted
              loop
              playsinline
              preload="none"
              data-deferred-poster="/images/visual-affordance-priors/results/real-robot-poster.webp"
              aria-label="Bimanual robot deploying the visual affordance prior on real garments"
            >
              <source src="/files/visual-affordance-results/real-robot-deployment.mp4" type="video/mp4">
            </video>
          </div>
        </figure>
      </div>
    </div>
    </section>
    <nav class="clothmate-carousel__controls" aria-label="Visual Affordance Prior detail pages">
      <button class="clothmate-carousel__arrow" type="button" data-vap-previous aria-label="Previous detail page" disabled>←</button>
      <div class="clothmate-carousel__position">
        <span data-vap-status aria-live="polite">Method · 1 / 2</span>
        <span class="clothmate-carousel__dots" role="tablist" aria-label="Choose detail page">
          <button type="button" role="tab" aria-label="Show Method" aria-selected="true" data-vap-page="0"></button>
          <button type="button" role="tab" aria-label="Show Results" aria-selected="false" data-vap-page="1"></button>
        </span>
      </div>
      <button class="clothmate-carousel__arrow" type="button" data-vap-next aria-label="Next detail page">→</button>
    </nav>
  </section>
</article>

<article class="work-entry">
  <div class="work-media">
    <video class="work-video work-video--wide" controls muted loop playsinline preload="none" poster="/images/scalable-garment-trajectories-cropped.webp" data-viewport-autoplay>
      <source src="/files/scalable-garment-trajectories-cropped.mp4" type="video/mp4">
      <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title" data-i18n="trajectory.title">Scalable Garment Simulation & Data Pipeline</h3>
    <p class="work-meta" data-i18n="trajectory.meta">Meituan LongCat · Simulation Research Intern, 2026</p>
    <p class="work-summary" data-i18n="trajectory.summary">This system project builds the data and learning infrastructure behind bimanual garment manipulation. It connects Newton/Style3D cloth simulation, particle-level grasping, VR teleoperation, EpisodeV1 trajectory recording, Isaac RTX visual generation, and LeRobot/OpenPI/RLinf training interfaces into a reproducible pipeline for collecting, reviewing, rendering, retargeting, and evaluating cloth manipulation data.</p>
  </div>
</article>

<script defer src="/assets/js/clothmate-details.js?v=1"></script>
<script defer src="/assets/js/clothmate-carousel.js?v=5"></script>
<script defer src="/assets/js/real-inference-home.js?v=4"></script>
<script defer src="/assets/js/visual-affordance-method.js?v=6"></script>
<script defer src="/assets/js/visual-affordance-assets.js?v=2"></script>
<script defer src="/assets/js/visual-affordance-results.js?v=6"></script>
<script defer src="/assets/js/visual-affordance-carousel.js?v=5"></script>
<script defer src="/assets/js/video-autoplay.js?v=1"></script>
