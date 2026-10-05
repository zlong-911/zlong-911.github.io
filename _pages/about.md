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

<p class="about-intro" data-i18n="home.intro">Hi! I am Zilong Huang, a master's student in Control Science and Engineering at <a href="https://www.scut.edu.cn/en/">South China University of Technology</a>. My research focuses on <strong>robot simulation for deformable object manipulation</strong>, particularly bimanual garment flattening and folding. I develop integrated pipelines connecting physics simulation, data generation, policy training, and closed-loop evaluation, and explore policy transfer to real robots. I also study grasp priors and visual policy learning to improve data efficiency and generalization in garment manipulation. During my internship at Meituan LongCat, I completed the <strong>simulation evaluation and real-robot policy post-training</strong> work for Meituan-Robotics-0.</p>

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
          <span data-i18n="timeline.meituan.date">May 2026 - Sep 2026</span>
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
    <p class="work-meta" data-i18n="clothmate.meta">Jiaxiang Luo<sup>*</sup>, <strong>Zilong Huang</strong>, Hao Cheng, Zixiang Hong<br><em>IEEE Robotics and Automation Letters</em>, 2026</p>
    <p class="work-summary" data-i18n="clothmate.summary">ClothMate addresses bimanual garment flattening through Grasp-Fling Consistency, transferring grasp values learned on flattened garments to crumpled configurations. This improves data efficiency and generalization across garment categories. A single policy covers five categories using only 15% of the aggregate training data required by category-specific baselines, while achieving better flattening performance.</p>
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
    <p class="work-meta" data-i18n="vap.meta"><strong>Zilong Huang</strong>, Sipeng Lu, Jiaxiang Luo<sup>*</sup><br><em>IEEE Robotics and Automation Letters</em>, Under review</p>
    <p class="work-summary" data-i18n="vap.summary">This work develops a complete pipeline for bimanual garment flattening across diverse shapes, appearances, and viewpoints, decoupling grasp-value learning from randomized rendering to train RGB policies. The pipeline covers 1,646 garments and achieves 19× the physics-evaluation throughput of the original PyFlex pipeline. Without real-data fine-tuning, it improves mean IoU from 64.9% to 77.6% over ClothMate on 22 real garments.</p>
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
    <p class="work-meta" data-i18n="clothdojo.meta"><strong>Zilong Huang</strong>, Zipeng Ye, Caicheng Wang, Yuchen Xie, Jiaxiang Luo<sup>*</sup><br><em>IEEE International Conference on Robotics and Automation</em>, Under review</p>
    <p class="work-summary" data-i18n="clothdojo.summary">ClothDojo enables large-scale closed-loop evaluation of bimanual garment flattening and folding through an integrated simulation, scalable data-generation, and benchmarking pipeline. Data-generation policies trained with privileged simulation information and limited human demonstrations execute autonomously, retaining successful trajectories. Experiments generate 7,848 successful trajectories across 500 core garment assets, supporting downstream policy training and evaluation across garments, appearances, and robot embodiments.</p>
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
          <p data-i18n="clothdojo.chapter1Text">ClothDojo couples robot dynamics with cloth simulation for bimanual flattening and folding. Its core pool contains 500 garments with varied shapes and initial states.</p>
          <p data-i18n="clothdojo.chapter1Detail">The learned generator collects 3,992 successful flattening and 3,856 successful folding trajectories. Sample the garment assets and RGB trajectory clips below to explore the data.</p>
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
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
            <video class="clothdojo-rgb-dataset__tile" data-clothdojo-rgb-tile muted playsinline preload="none"></video>
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
          <p data-i18n="clothdojo.chapter2Text">The same garment and initial state are shown under three generator policies: white texture, NOCS surface coordinates, and NOCS with mirror augmentation.</p>
          <p data-i18n="clothdojo.chapter2Detail">These are separate policy rollouts. The next two pages report their success rates over the full evaluation.</p>
        </div>
        <figure class="clothdojo-pair__synced">
          <div class="clothdojo-pair__labels" aria-hidden="true">
            <span data-i18n="clothdojo.whiteLabel">White texture</span>
            <span>NOCS</span>
            <span data-i18n="clothdojo.mirrorLabel">Mirror augmentation</span>
          </div>
          <video class="clothdojo-clip" controls playsinline preload="metadata" poster="/images/clothdojo/texture/white-nocs-mirror.jpg" src="/files/clothdojo/texture/white-nocs-mirror.mp4" aria-label="Synchronized White, NOCS, mirror augmentation rollouts"></video>
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
          <p data-i18n="clothdojo.chapter3Text">The generator runs autonomously and retains successful trajectories. For selected failures, an operator restores an earlier state and completes the motion in VR.</p>
          <p data-i18n="clothdojo.chapter3Detail">The corrections become training data, focusing human effort on states the policy finds difficult.</p>
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
    <section class="clothdojo-slide clothdojo-slide--ablation" data-clothdojo-slide data-slide-label-en="Flattening ablation" data-slide-label-zh="铺平消融" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter5Heading">What helps the generator flatten garments?</h4>
          <p data-i18n="clothdojo.chapter5Text">On flattening, NOCS provides the largest gain. Mirror augmentation adds further improvement across seen and unseen garments.</p>
          <p data-i18n="clothdojo.chapter5Detail">These ablations evaluate the data-generation policy before RGB policy training.</p>
          <table class="clothdojo-split-table">
            <caption data-i18n="clothdojo.splitRate">Success rate by garment split (%)</caption>
            <thead><tr><th scope="col" data-i18n="clothdojo.splitMethod">Method</th><th scope="col" data-i18n="clothdojo.splitSeen">Seen</th><th scope="col" data-i18n="clothdojo.splitUnseen">Unseen</th></tr></thead>
            <tbody>
              <tr><th scope="row">White</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 26.3%"></i></span><strong>26.3%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 23.3%"></i></span><strong>23.3%</strong></td></tr>
              <tr><th scope="row">+ NOCS</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 66.3%"></i></span><strong>66.3%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 59.5%"></i></span><strong>59.5%</strong></td></tr>
              <tr><th scope="row">+ Mirror</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 76.0%"></i></span><strong>76.0%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 63.3%"></i></span><strong>63.3%</strong></td></tr>
              <tr><th scope="row">+ HIL</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 82.3%"></i></span><strong>82.3%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 70.8%"></i></span><strong>70.8%</strong></td></tr>
            </tbody>
          </table>
          <p class="clothdojo-split-table__note" data-i18n="clothdojo.splitFlatCount">100 Seen · 100 Unseen garments</p>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/ablation-flattening-poster.jpg" aria-label="Flattening ablation">
          <source src="/files/clothdojo/ablation-flattening.mp4" type="video/mp4">
          <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
        </video>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--ablation" data-clothdojo-slide data-slide-label-en="Folding ablation" data-slide-label-zh="折叠消融" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter6Heading">What helps the generator fold garments?</h4>
          <p data-i18n="clothdojo.chapter6Text">The same additions bring smaller gains on folding than on flattening.</p>
          <p data-i18n="clothdojo.chapter6Detail">Human corrections provide the largest additional gain by teaching recovery from failed rollouts.</p>
          <table class="clothdojo-split-table">
            <caption data-i18n="clothdojo.splitRate">Success rate by garment split (%)</caption>
            <thead><tr><th scope="col" data-i18n="clothdojo.splitMethod">Method</th><th scope="col" data-i18n="clothdojo.splitSeen">Seen</th><th scope="col" data-i18n="clothdojo.splitUnseen">Unseen</th></tr></thead>
            <tbody>
              <tr><th scope="row">White</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 61.0%"></i></span><strong>61.0%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 44.3%"></i></span><strong>44.3%</strong></td></tr>
              <tr><th scope="row">+ NOCS</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 61.2%"></i></span><strong>61.2%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 51.1%"></i></span><strong>51.1%</strong></td></tr>
              <tr><th scope="row">+ Mirror</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 64.2%"></i></span><strong>64.2%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 53.6%"></i></span><strong>53.6%</strong></td></tr>
              <tr><th scope="row">+ HIL</th><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 73.7%"></i></span><strong>73.7%</strong></td><td><span class="clothdojo-split-table__bar" aria-hidden="true"><i style="width: 63.2%"></i></span><strong>63.2%</strong></td></tr>
            </tbody>
          </table>
          <p class="clothdojo-split-table__note" data-i18n="clothdojo.splitFoldCount">130 Seen · 70 Unseen garments</p>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/ablation-folding-poster.jpg" aria-label="Folding ablation">
          <source src="/files/clothdojo/ablation-folding.mp4" type="video/mp4">
          <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
        </video>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Flattening data" data-slide-label-zh="铺平数据" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter7Heading">Can generated data train an RGB flattening policy?</h4>
          <p data-i18n="clothdojo.chapter7Text">Human, Generated, and Combined use the same human supervision and RGB rendering pipeline. Generated adds successful autonomous rollouts without new human action labels.</p>
          <p data-i18n="clothdojo.chapter7Detail">Generated outperforms Human across all four garment–appearance evaluation pools. The video shows selected rollouts.</p>
          <div class="clothdojo-eval-table-wrap"><table class="clothdojo-eval-table">
            <caption data-i18n="clothdojo.evalRate">Success rate by evaluation pool (%)</caption>
            <thead>
              <tr><th scope="col" rowspan="2" data-i18n="clothdojo.splitMethod">Method</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalSeenGarment">Seen garments</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalUnseenGarment">Unseen garments</th><th scope="col" rowspan="2" data-i18n="clothdojo.evalAverage">Avg.</th></tr>
              <tr><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Human</th><td>33.3</td><td>30.5</td><td>22.3</td><td>19.3</td><td>26.3</td></tr>
              <tr><th scope="row">Generated</th><td class="is-best">41.3</td><td class="is-best">33.3</td><td class="is-best">23.5</td><td class="is-best">23.8</td><td class="is-best">30.4</td></tr>
              <tr><th scope="row">Combined</th><td>32.8</td><td>28.0</td><td>20.3</td><td>19.5</td><td>25.1</td></tr>
            </tbody>
          </table></div>
          <p class="clothdojo-split-table__note" data-i18n="clothdojo.evalNote">Each pool has 400 closed-loop rollouts; Avg. covers all 1,600. The edited video shows selected cases.</p>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/comparisons/complete-training_source-flatten.jpg" aria-label="Flattening data: edited comparison"><source src="/files/clothdojo/comparisons/complete-training_source-flatten.mp4" type="video/mp4"><span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span></video>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Folding data" data-slide-label-zh="折叠数据" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter8Heading">Does the data advantage carry over to folding?</h4>
          <p data-i18n="clothdojo.chapter8Text">On folding, Generated again outperforms Human with the same human supervision budget.</p>
          <p data-i18n="clothdojo.chapter8Detail">The four pools test both garment and appearance generalization. The video compares selected rollouts from each training set.</p>
          <div class="clothdojo-eval-table-wrap"><table class="clothdojo-eval-table">
            <caption data-i18n="clothdojo.evalRate">Success rate by evaluation pool (%)</caption>
            <thead>
              <tr><th scope="col" rowspan="2" data-i18n="clothdojo.splitMethod">Method</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalSeenGarment">Seen garments</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalUnseenGarment">Unseen garments</th><th scope="col" rowspan="2" data-i18n="clothdojo.evalAverage">Avg.</th></tr>
              <tr><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Human</th><td>68.0</td><td>61.8</td><td>40.0</td><td>37.8</td><td>51.9</td></tr>
              <tr><th scope="row">Generated</th><td class="is-best">72.3</td><td>69.0</td><td class="is-best">47.8</td><td class="is-best">47.0</td><td class="is-best">59.0</td></tr>
              <tr><th scope="row">Combined</th><td>71.0</td><td class="is-best">69.8</td><td>43.0</td><td>46.0</td><td>57.4</td></tr>
            </tbody>
          </table></div>
          <p class="clothdojo-split-table__note" data-i18n="clothdojo.evalNote">Each pool has 400 closed-loop rollouts; Avg. covers all 1,600. The edited video shows selected cases.</p>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/comparisons/complete-training_source-fold.jpg" aria-label="Folding data: edited comparison"><source src="/files/clothdojo/comparisons/complete-training_source-fold.mp4" type="video/mp4"><span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span></video>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Flattening models" data-slide-label-zh="铺平模型" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter9Heading">Compare four models on flattening</h4>
          <p data-i18n="clothdojo.chapter9Text">Using Generated data, we compare π0.5, a StarVLA-based policy, GR00T N1.7, and Diffusion Policy on flattening.</p>
          <p data-i18n="clothdojo.chapter9Detail">π0.5 leads in all four pools. StarVLA drops more under unseen appearances, while every model finds unseen garments harder.</p>
          <div class="clothdojo-eval-table-wrap"><table class="clothdojo-eval-table">
            <caption data-i18n="clothdojo.evalRate">Success rate by evaluation pool (%)</caption>
            <thead>
              <tr><th scope="col" rowspan="2" data-i18n="clothdojo.splitMethod">Method</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalSeenGarment">Seen garments</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalUnseenGarment">Unseen garments</th><th scope="col" rowspan="2" data-i18n="clothdojo.evalAverage">Avg.</th></tr>
              <tr><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">π0.5</th><td class="is-best">41.3</td><td class="is-best">33.3</td><td class="is-best">23.5</td><td class="is-best">23.8</td><td class="is-best">30.4</td></tr>
              <tr><th scope="row">StarVLA</th><td>25.0</td><td>14.3</td><td>12.8</td><td>8.3</td><td>15.1</td></tr>
              <tr><th scope="row">GR00T N1.7</th><td>16.0</td><td>17.3</td><td>10.8</td><td>12.3</td><td>14.1</td></tr>
              <tr><th scope="row">Diffusion</th><td>3.5</td><td>4.5</td><td>1.3</td><td>3.0</td><td>3.1</td></tr>
            </tbody>
          </table></div>
          <p class="clothdojo-split-table__note" data-i18n="clothdojo.evalNote">Each pool has 400 closed-loop rollouts; Avg. covers all 1,600. The edited video shows selected cases.</p>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/comparisons/complete-policy_models-flatten.jpg" aria-label="Flattening models: edited comparison"><source src="/files/clothdojo/comparisons/complete-policy_models-flatten.mp4" type="video/mp4"><span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span></video>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--comparison" data-clothdojo-slide data-slide-label-en="Folding models" data-slide-label-zh="折叠模型" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter10Heading">Compare four models on folding</h4>
          <p data-i18n="clothdojo.chapter10Text">The same four models are evaluated on folding. π0.5 again leads, and every model performs worse on unseen garments.</p>
          <p data-i18n="clothdojo.chapter10Detail">Diffusion Policy shows the largest appearance gap on folding. The video brings selected model rollouts into one view.</p>
          <div class="clothdojo-eval-table-wrap"><table class="clothdojo-eval-table">
            <caption data-i18n="clothdojo.evalRate">Success rate by evaluation pool (%)</caption>
            <thead>
              <tr><th scope="col" rowspan="2" data-i18n="clothdojo.splitMethod">Method</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalSeenGarment">Seen garments</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.evalUnseenGarment">Unseen garments</th><th scope="col" rowspan="2" data-i18n="clothdojo.evalAverage">Avg.</th></tr>
              <tr><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th><th scope="col" data-i18n="clothdojo.evalSeenAppearance">S app.</th><th scope="col" data-i18n="clothdojo.evalUnseenAppearance">U app.</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">π0.5</th><td class="is-best">72.3</td><td class="is-best">69.0</td><td class="is-best">47.8</td><td class="is-best">47.0</td><td class="is-best">59.0</td></tr>
              <tr><th scope="row">StarVLA</th><td>67.0</td><td>67.5</td><td>38.3</td><td>40.3</td><td>53.3</td></tr>
              <tr><th scope="row">GR00T N1.7</th><td>47.0</td><td>47.0</td><td>26.5</td><td>27.0</td><td>36.9</td></tr>
              <tr><th scope="row">Diffusion</th><td>16.8</td><td>5.0</td><td>10.8</td><td>2.0</td><td>8.6</td></tr>
            </tbody>
          </table></div>
          <p class="clothdojo-split-table__note" data-i18n="clothdojo.evalNote">Each pool has 400 closed-loop rollouts; Avg. covers all 1,600. The edited video shows selected cases.</p>
        </div>
        <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/comparisons/complete-policy_models-fold.jpg" aria-label="Folding models: edited comparison"><source src="/files/clothdojo/comparisons/complete-policy_models-fold.mp4" type="video/mp4"><span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span></video>
      </div>
    </section>
    <section class="clothdojo-slide clothdojo-slide--retarget" data-clothdojo-slide data-slide-label-en="Robot retargeting" data-slide-label-zh="机器人重定向" hidden>
      <div class="clothdojo-slide__grid">
        <div class="clothdojo-slide__copy">
          <h4 data-i18n="clothdojo.chapter11Heading">Trajectory reuse and joint-task evaluation</h4>
          <p data-i18n="clothdojo.chapter11Text">Garment trajectories can be retargeted to five compatible robot embodiments. We train Piper on the original trajectories and UR5e on retargeted ones, without collecting new human demonstrations.</p>
          <p data-i18n="clothdojo.chapter11Detail">The videos show trajectory retargeting and selected joint-policy rollouts. The table reports success over the full evaluation.</p>
          <div class="clothdojo-eval-table-wrap"><table class="clothdojo-eval-table clothdojo-joint-table">
            <caption data-i18n="clothdojo.jointRate">Closed-loop success rate (%)</caption>
            <thead>
              <tr><th scope="col" rowspan="2" data-i18n="clothdojo.jointRobot">Robot</th><th scope="colgroup" colspan="2" data-i18n="clothdojo.jointContinuous">Flatten → Fold</th><th scope="col" rowspan="2" data-i18n="clothdojo.jointStandalone">Standalone Fold</th></tr>
              <tr><th scope="col" data-i18n="clothdojo.jointFlattenSR">Flatten SR</th><th scope="col" data-i18n="clothdojo.jointFoldSR">Fold SR</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Piper</th><td>49.4</td><td class="is-best">20.0</td><td>17.8</td></tr>
              <tr><th scope="row">UR5e</th><td class="is-best">68.9</td><td>7.1</td><td class="is-best">27.8</td></tr>
            </tbody>
          </table></div>
          <p class="clothdojo-split-table__note" data-i18n="clothdojo.jointNote">Flatten → Fold starts crumpled and runs for 120 s; standalone Fold starts flat and runs for 40 s. The videos are illustrative.</p>
        </div>
        <div class="clothdojo-comparison clothdojo-retarget-comparison" data-clothdojo-comparison>
          <div class="clothdojo-comparison__buttons" role="tablist" aria-label="Choose retargeting or policy evaluation video">
            <button type="button" role="tab" aria-selected="true" aria-controls="clothdojo-retarget-montage" data-comparison-button data-i18n="clothdojo.retargetMontage">Five robot trajectories</button>
            <button type="button" role="tab" aria-selected="false" aria-controls="clothdojo-joint-policy" data-comparison-button data-i18n="clothdojo.jointMontage">Piper + UR5e policies</button>
          </div>
          <figure class="clothdojo-comparison__panel" id="clothdojo-retarget-montage" role="tabpanel" data-comparison-panel>
            <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/comparisons/retarget-five-robots.jpg" aria-label="Five-robot trajectory retargeting montage"><source src="/files/clothdojo/comparisons/retarget-five-robots.mp4" type="video/mp4"><span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span></video>
            <figcaption data-i18n="clothdojo.retargetCaption">Reference trajectories retargeted to five robot embodiments; these are not learned-policy evaluations.</figcaption>
          </figure>
          <figure class="clothdojo-comparison__panel" id="clothdojo-joint-policy" role="tabpanel" data-comparison-panel hidden>
            <video class="clothdojo-clip" controls playsinline preload="none" poster="/images/clothdojo/comparisons/joint-policy-piper-ur5e.jpg" aria-label="Piper and UR5e joint-policy rollout montage"><source src="/files/clothdojo/comparisons/joint-policy-piper-ur5e.mp4" type="video/mp4"><span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span></video>
            <figcaption data-i18n="clothdojo.jointCaption">Selected joint-task rollouts from Piper and UR5e; success rates come from all trials.</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <nav class="clothmate-carousel__controls" aria-label="ClothDojo video chapters">
      <button class="clothmate-carousel__arrow" type="button" data-clothdojo-previous aria-label="Previous chapter" disabled>←</button>
      <div class="clothmate-carousel__position">
        <span data-clothdojo-status aria-live="polite">Platform · 1 / 10</span>
        <span class="clothmate-carousel__dots" role="tablist" aria-label="Choose chapter">
          <button type="button" role="tab" aria-label="Platform" aria-selected="true" data-clothdojo-page="0"></button>
          <button type="button" role="tab" aria-label="White · NOCS · Mirror" aria-selected="false" data-clothdojo-page="1"></button>
          <button type="button" role="tab" aria-label="Rollouts & corrections" aria-selected="false" data-clothdojo-page="2"></button>
          <button type="button" role="tab" aria-label="Flattening ablation" aria-selected="false" data-clothdojo-page="3"></button>
          <button type="button" role="tab" aria-label="Folding ablation" aria-selected="false" data-clothdojo-page="4"></button>
          <button type="button" role="tab" aria-label="Flattening data" aria-selected="false" data-clothdojo-page="5"></button>
          <button type="button" role="tab" aria-label="Folding data" aria-selected="false" data-clothdojo-page="6"></button>
          <button type="button" role="tab" aria-label="Flattening models" aria-selected="false" data-clothdojo-page="7"></button>
          <button type="button" role="tab" aria-label="Folding models" aria-selected="false" data-clothdojo-page="8"></button>
          <button type="button" role="tab" aria-label="Robot retargeting" aria-selected="false" data-clothdojo-page="9"></button>
        </span>
      </div>
      <button class="clothmate-carousel__arrow" type="button" data-clothdojo-next aria-label="Next chapter">→</button>
    </nav>
  </section>
</article>

<article class="work-entry">
  <div class="work-media">
    <video class="work-video" controls playsinline preload="metadata" poster="/images/simpt/poster.jpg" aria-label="SimPT project video">
      <source src="/files/simpt/simpt-video.mp4" type="video/mp4">
      <span data-i18n="home.unsupportedVideo">Your browser does not support embedded video.</span>
    </video>
  </div>
  <div class="work-body">
    <h3 class="work-title" data-i18n="simpt.title">SimPT: An Automated Simulation Framework for Intervention-Based VLA Post-Training</h3>
    <p class="work-meta" data-i18n="simpt.meta">Caicheng Wang, Zipeng Ye<sup>*</sup>, Zhexuan Zhou, <strong>Zilong Huang</strong>, Xi Zhang, Yuchen Xie<br><em>IEEE International Conference on Robotics and Automation</em>, Under review</p>
    <p class="work-summary" data-i18n="simpt.summary">SimPT integrates corrective data collection, policy training, and evaluation into an automated simulation pipeline for intervention-based VLA post-training. A task progress graph stores stable states to help experts recover failed rollouts efficiently, reducing recovery attempts by 75% across seven RoboTwin tasks.</p>
    <p class="work-links"><a class="btn btn--primary" href="/files/simpt/simpt-paper.pdf" data-i18n="home.paper">Paper</a></p>
  </div>
</article>

<article class="work-entry work-entry--mr0">
  <div class="work-media work-leaderboard">
    <a class="work-leaderboard-preview" href="/images/mr0/robodojo-leaderboard-2026-09-28.png" target="_blank" rel="noopener" aria-label="Open the full RoboDojo Sim leaderboard screenshot">
      <img src="/images/mr0/robodojo-leaderboard-2026-09-28.png" alt="RoboDojo Sim leaderboard with Meituan-Robotics-0 listed in twelfth place" width="2162" height="1208" loading="lazy" decoding="async">
    </a>
  </div>
  <div class="work-body">
    <h3 class="work-title" data-i18n="mr0.title">Meituan-Robotics-0</h3>
    <p class="work-meta" data-i18n="mr0.meta">Report Author · Meituan · Simulation Evaluation and Real-Robot Post-Training</p>
    <p class="work-summary" data-i18n="mr0.summary">Completed simulation evaluation and real-robot policy post-training for Meituan-Robotics-0. Evaluated the model on RoboTwin and RoboDojo benchmarks, and iterated HG-DAgger and RECAP policies for precise, long-horizon manipulation. Across three rounds of human corrections and supervised fine-tuning, HG-DAgger improved success rates on letter placement, garment stacking, and Ethernet cable insertion from <strong>23% / 0% / 25% to 83% / 83% / 69%</strong>.</p>
  </div>
</article>

<article class="work-entry work-entry--paper">
  <div class="work-media">
    <a class="work-paper-preview" href="/files/mgdcd/mgdcd-paper.pdf" aria-label="Open the M-GDCD paper">
      <img src="/images/mgdcd/paper-preview.webp" alt="Title and author section of the M-GDCD paper" width="1072" height="715" loading="lazy" decoding="async">
    </a>
  </div>
  <div class="work-body">
    <h3 class="work-title" data-i18n="mgdcd.title">Multimodal Generalized Defect Category Discovery in industrial scenarios via defect-aware representation guided calibrated clustering</h3>
    <p class="work-meta" data-i18n="mgdcd.meta">Hao Cheng, Jiaxiang Luo<sup>*</sup>, <strong>Zilong Huang</strong><br><em>Advanced Engineering Informatics</em>, 2026</p>
    <p class="work-summary" data-i18n="mgdcd.summary">M-GDCD identifies known defects and discovers new categories from 2D images and 3D point clouds with limited labeled defect samples. It combines defect-aware representations learned from normal samples with calibrated clustering for multimodal defect category discovery in industrial scenarios.</p>
    <p class="work-links"><a class="btn btn--primary" href="/files/mgdcd/mgdcd-paper.pdf" data-i18n="home.paper">Paper</a></p>
  </div>
</article>

<script defer src="/assets/js/clothmate-details.js?v=1"></script>
<script defer src="/assets/js/clothmate-carousel.js?v=5"></script>
<script defer src="/assets/js/real-inference-home.js?v=4"></script>
<script defer src="/assets/js/visual-affordance-method.js?v=6"></script>
<script defer src="/assets/js/visual-affordance-assets.js?v=2"></script>
<script defer src="/assets/js/visual-affordance-results.js?v=6"></script>
<script defer src="/assets/js/visual-affordance-carousel.js?v=5"></script>
<script defer src="/assets/js/clothdojo-details.js?v=13"></script>
<script defer src="/assets/js/video-autoplay.js?v=1"></script>
