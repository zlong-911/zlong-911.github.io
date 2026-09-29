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

<article class="work-entry work-entry--clothdojo">
  <div class="work-media">
    <video id="clothdojo-video" class="work-video" controls playsinline preload="metadata" poster="/images/clothdojo/overview-poster.jpg" aria-label="ClothDojo full project video">
      <source src="/files/clothdojo/clothdojo-full.mp4" type="video/mp4">
      <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title" data-i18n="clothdojo.title">ClothDojo: Learned Data Generation and Benchmarking for Bimanual Garment Flattening and Folding</h3>
    <p class="work-meta" data-i18n="clothdojo.meta">Meituan LongCat · Research project, 2026</p>
    <p class="work-summary" data-i18n="clothdojo.summary">ClothDojo is a simulation platform for learning long-horizon, closed-loop garment manipulation. A policy trained with VR demonstrations and targeted human corrections generates nearly 8,000 successful flattening and folding trajectories across hundreds of garments. Re-rendered RGB trajectories support downstream policy training, while shared initial states and task metrics enable systematic evaluation.</p>
    <p class="work-links">
      <a class="btn btn--primary" href="/files/clothdojo/clothdojo-paper.pdf" data-i18n="home.paper">Paper</a>
      <button class="btn" type="button" data-clothdojo-toggle aria-expanded="false" aria-controls="clothdojo-details" data-i18n="home.details">Details <span aria-hidden="true">↓</span></button>
    </p>
  </div>
  <section id="clothdojo-details" class="clothdojo-details" data-clothdojo-details hidden>
    <section class="clothdojo-slide clothdojo-slide--assets" data-clothdojo-slide data-slide-label-en="Platform" data-slide-label-zh="平台">
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter1Heading">A platform for continuous garment manipulation</h4>
          <p data-i18n="clothdojo.chapter1Text">ClothDojo brings bimanual flattening and folding into a shared closed-loop simulation environment. It combines robot dynamics with cloth physics and covers 500 structurally diverse garments and varied initial states.</p>
          <p data-i18n="clothdojo.chapter1Detail">The learned data generator ultimately collects 7,848 successful trajectories across the two tasks. Browse a small sample of garment assets alongside independently selected RGB rollout examples.</p>
        </div>
        <div class="clothdojo-asset-gallery" data-clothdojo-asset-gallery>
          <canvas width="1520" height="639" role="img" aria-label="Random garment asset sample" data-clothdojo-asset-canvas></canvas>
          <div class="clothdojo-asset-gallery__controls">
            <button type="button" data-clothdojo-asset-random data-i18n="clothdojo.asset.random" disabled>Shuffle assets</button>
          </div>
        </div>
        <div class="clothdojo-rgb-dataset" data-clothdojo-rgb-dataset>
          <div class="clothdojo-rgb-dataset__labels">
            <span data-i18n="clothdojo.asset.flatten">Flattening</span>
            <span data-i18n="clothdojo.asset.fold">Folding</span>
          </div>
          <div class="clothdojo-rgb-dataset__grid">
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 1" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 2" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 3" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 4" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 5" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 6" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 7" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 8" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 9" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 10" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 11" data-clothdojo-rgb-tile></video>
            <video muted loop playsinline preload="none" aria-label="RGB trajectory sample 12" data-clothdojo-rgb-tile></video>
          </div>
          <div class="clothdojo-rgb-dataset__controls">
            <button type="button" data-clothdojo-rgb-random data-i18n="clothdojo.asset.randomRgb" disabled>Sample RGB rollouts</button>
          </div>
        </div>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--pair" data-clothdojo-slide data-slide-label-en="White · NOCS · Mirror" data-slide-label-zh="白色 · NOCS · 镜像" hidden>
      <div class="clothdojo-pair">
        <div class="clothdojo-pair__intro">
          <h4 data-i18n="clothdojo.chapter2Heading">White texture, NOCS, and mirror augmentation</h4>
          <p data-i18n="clothdojo.chapter2Text">Three policies are evaluated from the same garment and initial state: a uniform white texture baseline, NOCS surface coordinates without augmentation, and NOCS with bilateral mirror augmentation.</p>
          <p data-i18n="clothdojo.chapter2Detail">These are separate policy rollouts, not one trajectory recolored three ways. The videos show the visual conditions; the ablation pages report success rates over the full evaluation.</p>
        </div>
        <figure class="clothdojo-pair__synced">
          <div class="clothdojo-pair__labels" aria-hidden="true">
            <span data-i18n="clothdojo.whiteLabel">White texture</span>
            <span>NOCS</span>
            <span data-i18n="clothdojo.mirrorLabel">Mirror augmentation</span>
          </div>
          <video class="clothdojo-clip" controls playsinline preload="metadata" poster="/images/clothdojo/texture/white-nocs-mirror.jpg" src="/files/clothdojo/texture/white-nocs-mirror.mp4" aria-label="Synchronized White, NOCS, and mirror augmentation rollouts"></video>
          <figcaption class="clothdojo-pair__captions">
            <span data-i18n="clothdojo.whiteCaption">Uniform garment color; no canonical surface coordinates.</span>
            <span data-i18n="clothdojo.nocsCaption">Canonical surface colors, without mirror augmentation.</span>
            <span data-i18n="clothdojo.mirrorCaption">NOCS policy trained with bilateral mirror augmentation.</span>
          </figcaption>
        </figure>
      </div>
    </section>
    <section class="clothdojo-slide" data-clothdojo-slide data-slide-label-en="Rollouts & corrections" data-slide-label-zh="执行与纠错" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter3Heading">Keep successes and correct failures</h4>
          <p data-i18n="clothdojo.chapter3Text">The policy runs offline to generate trajectories. Task metrics retain successful rollouts; for selected failures, an operator reviews the rollout, restores an earlier state, and continues from there in VR.</p>
          <p data-i18n="clothdojo.chapter3Detail">Those corrections are fed back into training, concentrating human effort on states the policy actually struggles with.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter3Fact1Label">Generate</strong><span data-i18n="clothdojo.chapter3Fact1Value">Autonomous rollouts</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter3Fact2Label">Keep</strong><span data-i18n="clothdojo.chapter3Fact2Value">Successful trajectories</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter3Fact3Label">Correct</strong><span data-i18n="clothdojo.chapter3Fact3Value">Selected failures in VR</span></div>
          </div>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/rollouts-corrections-poster.jpg" aria-label="Autonomous rollouts and human corrections">
          <source src="/files/clothdojo/rollouts-corrections.mp4" type="video/mp4">
          <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
        </video>
      </div>
    </section>
    <section class="clothdojo-slide" data-clothdojo-slide data-slide-label-en="Rendering & benchmark" data-slide-label-zh="渲染与评测" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter4Heading">Turn physical trajectories into reusable training data</h4>
          <p data-i18n="clothdojo.chapter4Text">The frozen policies generate 3,992 flattening and 3,856 folding trajectories. Successful physical rollouts are replayed with varied appearances to render RGB observations for downstream policies that do not receive NOCS.</p>
          <p data-i18n="clothdojo.chapter4Detail">Saved initial states and common task metrics support controlled comparisons across garment appearances. The next page shows how reference motions transfer to compatible robots.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter4Fact1Label">Flattening</strong><span data-i18n="clothdojo.chapter4Fact1Value">3,992 successes</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter4Fact2Label">Folding</strong><span data-i18n="clothdojo.chapter4Fact2Value">3,856 successes</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter4Fact3Label">Output</strong><span data-i18n="clothdojo.chapter4Fact3Value">RGB observations</span></div>
          </div>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/rendering-benchmark-poster.jpg" aria-label="RGB rendering and benchmark">
          <source src="/files/clothdojo/rendering-benchmark.mp4" type="video/mp4">
          <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
        </video>
      </div>
    </section>
    <section class="clothdojo-slide" data-clothdojo-slide data-slide-label-en="Robot retargeting" data-slide-label-zh="机器人重定向" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter11Heading">Retargeting across robot embodiments</h4>
          <p data-i18n="clothdojo.chapter11Text">Select a task and robot to inspect individual retargeted garment motions across five compatible embodiments. Saved initial states and common metrics support repeatable policy comparisons.</p>
          <p data-i18n="clothdojo.chapter11Detail">These clips illustrate embodiment coverage; reported policy success rates come from the full evaluation.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter11Fact1Label">Robots</strong><span data-i18n="clothdojo.chapter11Fact1Value">Five embodiments</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter11Fact2Label">Tasks</strong><span data-i18n="clothdojo.chapter11Fact2Value">Flatten + fold</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter11Fact3Label">Evaluation</strong><span data-i18n="clothdojo.chapter11Fact3Value">Shared initial states</span></div>
          </div>
        </div>
        <div class="clothdojo-focus" data-clothdojo-focus data-focus-family="retarget" data-focus-task="robot">
          <div class="clothdojo-focus__conditions" role="tablist" aria-label="Choose task">
            <button type="button" role="tab" aria-selected="true" data-focus-condition="flatten" data-i18n="clothdojo.asset.flatten">Flattening</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="fold" data-i18n="clothdojo.asset.fold">Folding</button>
          </div>
          <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/focus/retarget/robot_flatten/aloha2.jpg" src="/files/clothdojo/focus/retarget/robot_flatten/aloha2.mp4" aria-label="Aloha 2 flattening"></video>
          <div class="clothdojo-focus__methods" role="tablist" aria-label="Choose robot">
            <button type="button" role="tab" aria-selected="true" data-focus-method="aloha2">ALOHA 2</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="ur5e_2f85">UR5e</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="fr3_duo">FR3 Duo</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="piper">Piper</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="x5">X5</button>
          </div>
        </div>
      </div>
    </section>
    <section class="clothdojo-slide" data-clothdojo-slide data-slide-label-en="Flattening ablation" data-slide-label-zh="铺平消融" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter5Heading">What helps the generator flatten garments?</h4>
          <p data-i18n="clothdojo.chapter5Text">The flattening ablation compares the generator with and without NOCS cues and mirror augmentation. Both help in closed-loop trials on seen and unseen garments, where crumpled cloth can hide its structure and either arm may need to lead.</p>
          <p data-i18n="clothdojo.chapter5Detail">This evaluates the data-generation policy itself, before downstream RGB policy training.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter5Fact1Label">Task</strong><span data-i18n="clothdojo.chapter5Fact1Value">Garment flattening</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter5Fact2Label">Factors</strong><span data-i18n="clothdojo.chapter5Fact2Value">NOCS + mirroring</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter5Fact3Label">Test</strong><span data-i18n="clothdojo.chapter5Fact3Value">Seen and unseen assets</span></div>
          </div>
        </div>
        <div class="clothdojo-ablation">
          <h5 data-i18n="clothdojo.ablationRate">Overall success rate</h5>
          <div class="clothdojo-ablation__row" role="img" aria-label="White: 24.8% overall success"><span>White</span><div class="clothdojo-ablation__track"><i style="width: 24.8%"></i></div><strong>24.8%</strong></div>
          <div class="clothdojo-ablation__row" role="img" aria-label="+ NOCS: 62.9% overall success"><span>+ NOCS</span><div class="clothdojo-ablation__track"><i style="width: 62.9%"></i></div><strong>62.9%</strong></div>
          <div class="clothdojo-ablation__row" role="img" aria-label="+ Mirror: 69.6% overall success"><span>+ Mirror</span><div class="clothdojo-ablation__track"><i style="width: 69.6%"></i></div><strong>69.6%</strong></div>
          <div class="clothdojo-ablation__row" role="img" aria-label="+ HIL: 76.5% overall success"><span>+ HIL</span><div class="clothdojo-ablation__track"><i style="width: 76.5%"></i></div><strong>76.5%</strong></div>
          <details class="clothdojo-ablation__examples">
            <summary data-i18n="clothdojo.watchAblation">Watch selected rollouts</summary>
            <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/ablation-flattening-poster.jpg" aria-label="Flattening ablation">
          <source src="/files/clothdojo/ablation-flattening.mp4" type="video/mp4">
          <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
        </video>
          </details>
        </div>
      </div>
    </section>
    <section class="clothdojo-slide" data-clothdojo-slide data-slide-label-en="Folding ablation" data-slide-label-zh="折叠消融" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter6Heading">What helps the generator fold garments?</h4>
          <p data-i18n="clothdojo.chapter6Text">The folding ablation applies the same cumulative changes. NOCS and mirror augmentation bring smaller gains here than in flattening.</p>
          <p data-i18n="clothdojo.chapter6Detail">Human-in-the-loop corrections add recovery behavior from failed rollouts and provide the strongest single-step improvement for folding.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter6Fact1Label">Task</strong><span data-i18n="clothdojo.chapter6Fact1Value">Garment folding</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter6Fact2Label">Factors</strong><span data-i18n="clothdojo.chapter6Fact2Value">NOCS + mirroring</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter6Fact3Label">Key addition</strong><span data-i18n="clothdojo.chapter6Fact3Value">Human corrections</span></div>
          </div>
        </div>
        <div class="clothdojo-ablation">
          <h5 data-i18n="clothdojo.ablationRate">Overall success rate</h5>
          <div class="clothdojo-ablation__row" role="img" aria-label="White: 55.1% overall success"><span>White</span><div class="clothdojo-ablation__track"><i style="width: 55.1%"></i></div><strong>55.1%</strong></div>
          <div class="clothdojo-ablation__row" role="img" aria-label="+ NOCS: 57.6% overall success"><span>+ NOCS</span><div class="clothdojo-ablation__track"><i style="width: 57.6%"></i></div><strong>57.6%</strong></div>
          <div class="clothdojo-ablation__row" role="img" aria-label="+ Mirror: 60.5% overall success"><span>+ Mirror</span><div class="clothdojo-ablation__track"><i style="width: 60.5%"></i></div><strong>60.5%</strong></div>
          <div class="clothdojo-ablation__row" role="img" aria-label="+ HIL: 70.0% overall success"><span>+ HIL</span><div class="clothdojo-ablation__track"><i style="width: 70.0%"></i></div><strong>70.0%</strong></div>
          <details class="clothdojo-ablation__examples">
            <summary data-i18n="clothdojo.watchAblation">Watch selected rollouts</summary>
            <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/ablation-folding-poster.jpg" aria-label="Folding ablation">
          <source src="/files/clothdojo/ablation-folding.mp4" type="video/mp4">
          <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
        </video>
          </details>
        </div>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Flattening data" data-slide-label-zh="铺平数据" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter7Heading">Can generated data train an RGB flattening policy?</h4>
          <p data-i18n="clothdojo.chapter7Text">Human, Generated, and Combined use the same human supervision budget and RGB rendering pipeline. Generated adds successful autonomous rollouts without extra human action labels.</p>
          <p data-i18n="clothdojo.chapter7Detail">Switch conditions to compare three policies on the same garment and initial state. Generated exceeds Human in the full evaluation; the clips show selected examples.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter7Fact1Label">Human</strong><span data-i18n="clothdojo.chapter7Fact1Value">VR demonstrations</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter7Fact2Label">Generated</strong><span data-i18n="clothdojo.chapter7Fact2Value">Successful rollouts</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter7Fact3Label">Combined</strong><span data-i18n="clothdojo.chapter7Fact3Value">Both data sources</span></div>
          </div>
        </div>
        <div class="clothdojo-focus" data-clothdojo-focus data-focus-family="training_source" data-focus-task="flatten">
          <div class="clothdojo-focus__conditions" role="tablist" aria-label="Choose garment and appearance condition">
            <button type="button" role="tab" aria-selected="true" data-focus-condition="seen_asset_seen_appearance" data-i18n="clothdojo.condition.seen_asset.seen_appearance">Baseline</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="seen_asset_unseen_appearance" data-i18n="clothdojo.condition.seen_asset.unseen_appearance">New appearance</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="unseen_asset_seen_appearance" data-i18n="clothdojo.condition.unseen_asset.seen_appearance">New asset</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="unseen_asset_unseen_appearance" data-i18n="clothdojo.condition.unseen_asset.unseen_appearance">New asset + appearance</button>
          </div>
          <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/focus/training_source/flatten_seen_asset_seen_appearance/generated.jpg" src="/files/clothdojo/focus/training_source/flatten_seen_asset_seen_appearance/generated.mp4" aria-label="Flattening data: Generated, Baseline"></video>
          <div class="clothdojo-focus__methods" role="tablist" aria-label="Choose policy">
            <button type="button" role="tab" aria-selected="true" data-focus-method="generated">Generated</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="human">Human</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="combined">Combined</button>
          </div>
        </div>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Folding data" data-slide-label-zh="折叠数据" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter8Heading">Does the data advantage carry over to folding?</h4>
          <p data-i18n="clothdojo.chapter8Text">The folding benchmark uses the same three training sources. Generated again outperforms Human under matched closed-loop evaluation.</p>
          <p data-i18n="clothdojo.chapter8Detail">Each condition shows matched rollouts from the same garment and initial state. Selected autonomous successes extend the value of a fixed human supervision budget.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter8Fact1Label">Human</strong><span data-i18n="clothdojo.chapter8Fact1Value">VR demonstrations</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter8Fact2Label">Generated</strong><span data-i18n="clothdojo.chapter8Fact2Value">Successful rollouts</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter8Fact3Label">Combined</strong><span data-i18n="clothdojo.chapter8Fact3Value">Both data sources</span></div>
          </div>
        </div>
        <div class="clothdojo-focus" data-clothdojo-focus data-focus-family="training_source" data-focus-task="fold">
          <div class="clothdojo-focus__conditions" role="tablist" aria-label="Choose garment and appearance condition">
            <button type="button" role="tab" aria-selected="true" data-focus-condition="seen_asset_seen_appearance" data-i18n="clothdojo.condition.seen_asset.seen_appearance">Baseline</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="seen_asset_unseen_appearance" data-i18n="clothdojo.condition.seen_asset.unseen_appearance">New appearance</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="unseen_asset_seen_appearance" data-i18n="clothdojo.condition.unseen_asset.seen_appearance">New asset</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="unseen_asset_unseen_appearance" data-i18n="clothdojo.condition.unseen_asset.unseen_appearance">New asset + appearance</button>
          </div>
          <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/focus/training_source/fold_seen_asset_seen_appearance/generated.jpg" src="/files/clothdojo/focus/training_source/fold_seen_asset_seen_appearance/generated.mp4" aria-label="Folding data: Generated, Baseline"></video>
          <div class="clothdojo-focus__methods" role="tablist" aria-label="Choose policy">
            <button type="button" role="tab" aria-selected="true" data-focus-method="generated">Generated</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="human">Human</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="combined">Combined</button>
          </div>
        </div>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Flattening models" data-slide-label-zh="铺平模型" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter9Heading">Compare four models on flattening</h4>
          <p data-i18n="clothdojo.chapter9Text">Holding the generated training data fixed, ClothDojo compares π0.5, a StarVLA-based policy, GR00T N1.7, and Diffusion Policy under the same closed-loop flattening protocol.</p>
          <p data-i18n="clothdojo.chapter9Detail">The two displayed conditions have matched visual layouts. π0.5 has the highest reported success; all four models decline on unseen garments.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter9Fact1Label">Training data</strong><span data-i18n="clothdojo.chapter9Fact1Value">Generated rollouts</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter9Fact2Label">Models</strong><span data-i18n="clothdojo.chapter9Fact2Value">Four policies</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter9Fact3Label">Outcome</strong><span data-i18n="clothdojo.chapter9Fact3Value">Closed-loop flattening</span></div>
          </div>
        </div>
        <div class="clothdojo-focus" data-clothdojo-focus data-focus-family="policy_model" data-focus-task="flatten">
          <div class="clothdojo-focus__conditions" role="tablist" aria-label="Choose garment and appearance condition">
            <button type="button" role="tab" aria-selected="true" data-focus-condition="seen_asset_seen_appearance" data-i18n="clothdojo.condition.seen_asset.seen_appearance">Baseline</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="unseen_asset_seen_appearance" data-i18n="clothdojo.condition.unseen_asset.seen_appearance">New asset</button>
          </div>
          <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/focus/policy_model/flatten_seen_asset_seen_appearance/pi05.jpg" src="/files/clothdojo/focus/policy_model/flatten_seen_asset_seen_appearance/pi05.mp4" aria-label="Flattening models: π0.5, Baseline"></video>
          <div class="clothdojo-focus__methods" role="tablist" aria-label="Choose policy">
            <button type="button" role="tab" aria-selected="true" data-focus-method="pi05">π0.5</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="starvla">StarVLA</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="groot">GR00T N1.7</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="diffusion">Diffusion Policy</button>
          </div>
        </div>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Folding models" data-slide-label-zh="折叠模型" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter10Heading">Compare four models on folding</h4>
          <p data-i18n="clothdojo.chapter10Text">With generated data held fixed, the same four models are evaluated on folding. Their relative ranking differs from flattening.</p>
          <p data-i18n="clothdojo.chapter10Detail">Switch conditions to inspect matched rollouts. Results are from simulation; reliable end-to-end flattening followed by folding remains open.</p>
          <div class="clothdojo-slide__facts">
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter10Fact1Label">Training data</strong><span data-i18n="clothdojo.chapter10Fact1Value">Generated rollouts</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter10Fact2Label">Models</strong><span data-i18n="clothdojo.chapter10Fact2Value">Four policies</span></div>
            <div class="clothdojo-slide__fact"><strong data-i18n="clothdojo.chapter10Fact3Label">Outcome</strong><span data-i18n="clothdojo.chapter10Fact3Value">Closed-loop folding</span></div>
          </div>
        </div>
        <div class="clothdojo-focus" data-clothdojo-focus data-focus-family="policy_model" data-focus-task="fold">
          <div class="clothdojo-focus__conditions" role="tablist" aria-label="Choose garment and appearance condition">
            <button type="button" role="tab" aria-selected="true" data-focus-condition="seen_asset_seen_appearance" data-i18n="clothdojo.condition.seen_asset.seen_appearance">Baseline</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="seen_asset_unseen_appearance" data-i18n="clothdojo.condition.seen_asset.unseen_appearance">New appearance</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="unseen_asset_seen_appearance" data-i18n="clothdojo.condition.unseen_asset.seen_appearance">New asset</button>
            <button type="button" role="tab" aria-selected="false" data-focus-condition="unseen_asset_unseen_appearance" data-i18n="clothdojo.condition.unseen_asset.unseen_appearance">New asset + appearance</button>
          </div>
          <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/focus/policy_model/fold_seen_asset_seen_appearance/pi05.jpg" src="/files/clothdojo/focus/policy_model/fold_seen_asset_seen_appearance/pi05.mp4" aria-label="Folding models: π0.5, Baseline"></video>
          <div class="clothdojo-focus__methods" role="tablist" aria-label="Choose policy">
            <button type="button" role="tab" aria-selected="true" data-focus-method="pi05">π0.5</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="starvla">StarVLA</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="groot">GR00T N1.7</button>
            <button type="button" role="tab" aria-selected="false" data-focus-method="diffusion">Diffusion Policy</button>
          </div>
        </div>
      </div>
    </section>
    <nav class="clothmate-carousel__controls" aria-label="ClothDojo video chapters">
      <button class="clothmate-carousel__arrow" type="button" data-clothdojo-previous aria-label="Previous chapter" disabled>←</button>
      <div class="clothmate-carousel__position">
        <span data-clothdojo-status aria-live="polite">Platform · 1 / 11</span>
        <span class="clothmate-carousel__dots" role="tablist" aria-label="Choose chapter">
          <button type="button" role="tab" aria-label="Platform" aria-selected="true" data-clothdojo-page="0"></button>
          <button type="button" role="tab" aria-label="White · NOCS · Mirror" aria-selected="false" data-clothdojo-page="1"></button>
          <button type="button" role="tab" aria-label="Rollouts & corrections" aria-selected="false" data-clothdojo-page="2"></button>
          <button type="button" role="tab" aria-label="Rendering & benchmark" aria-selected="false" data-clothdojo-page="3"></button>
          <button type="button" role="tab" aria-label="Robot retargeting" aria-selected="false" data-clothdojo-page="4"></button>
          <button type="button" role="tab" aria-label="Flattening ablation" aria-selected="false" data-clothdojo-page="5"></button>
          <button type="button" role="tab" aria-label="Folding ablation" aria-selected="false" data-clothdojo-page="6"></button>
          <button type="button" role="tab" aria-label="Flattening data" aria-selected="false" data-clothdojo-page="7"></button>
          <button type="button" role="tab" aria-label="Folding data" aria-selected="false" data-clothdojo-page="8"></button>
          <button type="button" role="tab" aria-label="Flattening models" aria-selected="false" data-clothdojo-page="9"></button>
          <button type="button" role="tab" aria-label="Folding models" aria-selected="false" data-clothdojo-page="10"></button>
        </span>
      </div>
      <button class="clothmate-carousel__arrow" type="button" data-clothdojo-next aria-label="Next chapter">→</button>
    </nav>
  </section>
</article>

<script defer src="/assets/js/clothmate-details.js?v=1"></script>
<script defer src="/assets/js/clothmate-carousel.js?v=5"></script>
<script defer src="/assets/js/real-inference-home.js?v=4"></script>
<script defer src="/assets/js/visual-affordance-method.js?v=6"></script>
<script defer src="/assets/js/visual-affordance-assets.js?v=2"></script>
<script defer src="/assets/js/visual-affordance-results.js?v=6"></script>
<script defer src="/assets/js/visual-affordance-carousel.js?v=5"></script>
<script defer src="/assets/js/clothdojo-details.js?v=10"></script>
<script defer src="/assets/js/video-autoplay.js?v=1"></script>
