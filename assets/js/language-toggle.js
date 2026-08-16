(function () {
  "use strict";

  const storageKey = "preferred-language";
  const supportedLanguages = ["en", "zh"];

  const translations = {
    zh: {
      "common.languageLabel": "EN",
      "common.languageTitle": "切换到英文",
      "page.projectsTitle": "项目",
      "page.publicationsTitle": "论文",
      "home.role": "机器人学习 · 柔性物体操作",
      "home.location": "中国广州",
      "home.school": "华南理工大学",
      "home.affiliationLine": "华南理工大学 · 广州",
      "home.email": "邮箱",
      "home.intro": '你好！我是黄梓龙，<a href="https://www.scut.edu.cn/en/">华南理工大学</a> 控制科学与工程硕士研究生。我的工作围绕衣物等柔性物体的机器人操作展开，探索如何<strong>利用有限数据学习具有泛化能力的操作策略</strong>，使其适应不同的衣物类别、形变状态和真实场景。具体而言，我将结构化抓取先验与视觉可供性学习相结合，并通过可扩展的仿真数据流水线衔接布料物理、视觉观测与策略学习，为真实双臂机器人的衣物操作提供完整的数据与学习基础。',
      "home.selectedWork": "代表工作",
      "home.unsupportedVideo": "你的浏览器不支持嵌入视频。",
      "home.paper": "论文",
      "home.code": "代码",
      "home.details": '详情 <span aria-hidden="true">↓</span>',
      "home.projectPage": "项目主页",
      "timeline.heading": "时间线",
      "timeline.education": "教育经历",
      "timeline.experience": "实习经历",
      "timeline.scut.name": "华南理工大学",
      "timeline.scut.undergraduateShort": "本科生",
      "timeline.scut.masterShort": "硕士研究生",
      "timeline.scut.masterLine": "华南理工大学 · 控制科学与工程",
      "timeline.scut.masterDate": "2024年9月 - 至今",
      "timeline.scut.undergraduateLine": "华南理工大学 · 自动化创新班",
      "timeline.scut.undergraduateDate": "2020年9月 - 2024年7月",
      "timeline.meituan.role": "仿真研究实习生",
      "timeline.meituan.date": "2026年5月 - 至今",
      "timeline.meituan.line": "美团 LongCat · 衣物操作",
      "expertise.researchLabel": "研究方向",
      "expertise.researchItems": "机器人学习 · 柔性物体操作 · 视觉可供性学习 · 仿真到真实迁移",
      "expertise.stackLabel": "技术栈",
      "expertise.stackItems": "Python · PyTorch · PyFlex · Newton · Isaac Sim · LeRobot · OpenPI · RLinf",
      "clothmate.title": "ClothMate：利用抓取-甩动一致性实现泛化且数据高效的衣物展开",
      "clothmate.meta": 'Jiaxiang Luo, <strong>Zilong Huang</strong>, Hao Cheng, and Zixiang Hong<br><em>IEEE Robotics and Automation Letters</em>, 2026',
      "clothmate.summary": "ClothMate 研究如何利用可复用的抓取先验提升衣物展开的数据效率。它先在规范化衣物状态中学习抓取-甩动价值，再通过顶点映射迁移到任意皱褶构型，并结合 pick-and-stretch 完成最终铺平。一个策略即可泛化到五类衣物，且只需各类别独立基线总数据量的 15%。",
      "clothmate.coreInsight": "<strong>核心观察。</strong> 我们发现一个简单规律：即使衣物初始皱褶状态不同（左图中的 <em>Before</em> 行），抓取语义相近的区域，例如袖口、腰带或肩带（蓝色标注），也经常会得到相似的甩动后姿态和展开结果（<em>After</em> 行）。这种模式不仅存在于同一件衣物的不同状态，也能跨衣物实例和类别成立。它说明学习甩动动作可以从完整衣物状态的复杂性中解耦出来，在更紧凑的空间中学习。",
      "clothmate.method": "<strong>方法概览。</strong> 给定一张俯视 RGB 图像，ClothMate 选择两个抓取点并执行固定甩动原语。我们使用 Spatial Action Maps 表示双臂动作：每个像素编码一对位于其上下固定偏移处的抓取点。旋转输入会改变抓取方向，缩放输入会改变两个抓取点的距离。我们首先在规范化、对齐的衣物状态中评估候选抓取，并根据展开效果为每对抓取赋值（图 a）。仿真提供不同构型之间的顶点对应关系，使我们能够把抓取点及其价值投影到皱褶状态，并训练策略直接从当前图像中选择抓取（图 b）。当衣物大致展开后，ClothMate 切换到 pick-and-stretch 完成最终铺平与对齐（图 c）。",
      "clothmate.results": "<strong>实验结果。</strong> ClothMate 使用五类衣物联合训练一个策略，只需要训练各类别独立基线所需总数据量的 15%。在仿真衬衫基准上，相比 Cloth-Funnels，它将覆盖率从 85.0% 提升到 91.5%，并把平均交互步数从 7.0 降到 4.7。我们还在双臂机器人上用 24 件真实衣物、跨五个类别进行了评估。在两种方法都测试的 8 件衬衫上，ClothMate 将平均 IoU 从 37.2% 提升到 57.4%，平均覆盖率从 75.6% 提升到 83.1%。",
      "clothmate.consistency": "<strong>抓取-甩动一致性。</strong> Prior Value Module 展示出跨衣物实例和类别共享的抓取价值结构。通过顶点映射，ClothMate 在规范化、对齐状态中学习这一结构，并迁移到任意皱褶构型。这类似人处理衣物的方式：先识别有语义意义的抓取位置，再在皱褶布料中找到这些位置，而不是显式建模每一道褶皱。这种可复用的抓取先验解释了为什么 ClothMate 能以有限数据跨实例和类别泛化。",
      "vap.title": "Visual Affordance Priors for Generalizable Garment Flattening",
      "vap.meta": '<strong>Zilong Huang</strong>, Sipeng Lu, and Jiaxiang Luo<sup>*</sup><br>Under review',
      "vap.summary": "这个项目将 ClothMate 的抓取先验从受控仿真衣物扩展到更广泛的视觉部署。它先在衣物几何上学习结构化 pair-value teacher，再把这一信号蒸馏到 RGB 可供性预测器中，分别预测第一个抓取点和条件化的第二个抓取点。目标是让衣物展开策略适应更多衣物资产、纹理变化、相机视角和真实图像输入。",
      "vap.heading": "核心观察",
      "vap.insight": "在 ClothMate 中，我们探索了一个简单想法：结构相似的衣物往往共享有用的抓取模式。Visual Affordance Priors 是我们把这个想法做得更通用的一次尝试。相比只在较小、较受控的衣物集合上学习，我们希望让这种抓取价值先验适应更多样的衣物形状、外观和视觉条件。为此，我们先在结构域中学习哪些成对点值得抓，再把这种知识迁移到图像空间，让策略能够直接从 RGB 观测中做判断。",
      "vap.methodHeading": "方法概览",
      "vap.methodOverview": "我们在 <strong>1,646 件衣物资产</strong>上构建两条互补的数据流水线：并行物理仿真生成约 <strong>75.7 万条结构化抓取对标签</strong>，随机化渲染生成约 <strong>2.6 万张 RGB 图像</strong>。Pair-Value Teacher 从前者学习抓取价值，再由 Visual Affordance Prior 将其迁移到图像空间。",
      "vap.step1Title": "规模化评估抓取动作",
      "vap.step1Description": "纯物理仿真通过规范化初始状态和受控拉伸来评估抓取点对。它每小时可评估约 <strong>15,500 个动作</strong>，速度约为原 PyFlex 流水线的 <strong>19 倍</strong>。",
      "vap.step2Title": "学习结构化抓取价值",
      "vap.step2Description": "由于无法穷举衣物表面的所有抓取组合，我们训练 Pair-Value Teacher，从三维衣物结构和有限的仿真结果中预测未执行抓取对的价值。",
      "vap.step3Title": "将结构知识投影到图像",
      "vap.step3Description": "我们生成具有不同衣物状态、纹理、光照和视角的合成图像，并利用网格对应关系，将 Teacher 学到的三维抓取价值映射为图像空间中的监督信号。",
      "vap.step4Title": "从 RGB 选择抓取点对",
      "vap.step4Description": "Visual Affordance Prior 首先预测第一个抓取点，再以它为条件预测第二个抓取点，使策略能够直接应用于不同视角和外观下的真实 RGB 图像。",
      "vap.collection": "离线动作采集",
      "vap.teacher": "Pair-Value 教师",
      "vap.synthetic": "合成视觉数据",
      "vap.dynamics": "视觉成对策略动态",
      "vap.resultsHeading": "真实世界迁移",
      "vap.resultsOverview": "仿真中学到的抓取先验，只有在真实图像中仍然有意义，并能带来有效的机器人动作，才真正有用。我们从两个层面检验这种迁移：衣物连续形变过程中的视觉推理，以及双臂机器人上的实际部署。",
      "vap.inferenceHeading": "真实世界推理",
      "vap.inferenceText": "我们从一件铺平的真实衣物开始，逐渐改变其姿态并将它揉皱。尽管每一帧都是独立推理，预测抓取点仍会随着衣物折叠、旋转和局部遮挡，保持在具有结构意义的区域。在 <strong>4 个场景、70 段序列</strong>中，这种现象说明视觉先验学到的不是固定像素位置，而是能够跨形变保持的抓取可供性。",
      "vap.robotHeading": "真实机器人部署",
      "vap.robotText": "我们将同一视觉先验部署到双臂机器人上，并评估 <strong>22 件真实衣物</strong>，每件衣物测试 5 次，每次最多执行 3 次甩动。在相同执行流程下，相比 ClothMate，平均 IoU 从 <strong>64.9 提升到 77.6</strong>，覆盖率从 <strong>71.6 提升到 86.2</strong>。",
      "vap.scene1": "场景 1",
      "vap.scene2": "场景 2",
      "vap.scene3": "场景 3",
      "vap.scene4": "场景 4",
      "trajectory.title": "可扩展衣物仿真与数据流水线",
      "trajectory.meta": "美团 LongCat · 仿真研究实习生，2026",
      "trajectory.summary": "这个系统项目构建面向双臂衣物操作的数据与学习基础设施。它将 Newton/Style3D 布料仿真、粒子级抓取、VR 遥操作、EpisodeV1 轨迹记录、Isaac RTX 视觉生成，以及 LeRobot/OpenPI/RLinf 训练接口连接成可复现流水线，用于采集、审核、渲染、重定向和评估衣物操作数据。",
      "research.intro": "我的工作连接可扩展仿真、数据生成、视觉学习和真实世界机器人操作。"
    }
  };

  const englishCache = new WeakMap();

  function normalizeLanguage(value) {
    return supportedLanguages.includes(value) ? value : "en";
  }

  function getPreferredLanguage() {
    const saved = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(saved)) {
      return saved;
    }

    return "en";
  }

  function setElementContent(element, language) {
    if (!englishCache.has(element)) {
      englishCache.set(element, element.innerHTML);
    }

    const key = element.getAttribute("data-i18n");
    if (key === "home.details") {
      const label = language === "zh" ? "详情" : "Details";
      const arrow = element.getAttribute("aria-expanded") === "true" ? "↑" : "↓";
      element.innerHTML = `${label} <span aria-hidden="true">${arrow}</span>`;
      return;
    }

    const translated = translations[language] && translations[language][key];
    element.innerHTML = language === "en" || !translated ? englishCache.get(element) : translated;
  }

  function setPageTitle(language) {
    const pageTitle = document.querySelector(".page__title");
    if (!pageTitle) {
      return;
    }

    if (!englishCache.has(pageTitle)) {
      englishCache.set(pageTitle, pageTitle.innerHTML);
    }

    const pathname = window.location.pathname.replace(/index\.html$/, "");
    const key = pathname.endsWith("/research/") || pathname.endsWith("/research") ?
      "page.projectsTitle" :
      pathname.endsWith("/publications/") || pathname.endsWith("/publications") ?
        "page.publicationsTitle" :
        null;
    const translated = key && translations[language] && translations[language][key];
    pageTitle.innerHTML = language === "en" || !translated ? englishCache.get(pageTitle) : translated;
  }

  function applyLanguage(language) {
    const nextLanguage = normalizeLanguage(language);
    const label = nextLanguage === "zh" ? translations.zh["common.languageLabel"] : "中文";
    const title = nextLanguage === "zh" ? translations.zh["common.languageTitle"] : "Switch to Chinese";

    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      setElementContent(element, nextLanguage);
    });
    document.querySelectorAll("[data-language-label]").forEach(function (element) {
      element.textContent = label;
    });
    document.querySelectorAll(".language-toggle").forEach(function (button) {
      button.setAttribute("aria-label", title);
      button.setAttribute("title", title);
      button.setAttribute("aria-pressed", nextLanguage === "zh" ? "true" : "false");
    });
    setPageTitle(nextLanguage);
    localStorage.setItem(storageKey, nextLanguage);
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { language: nextLanguage } }));
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getPreferredLanguage());
    document.querySelectorAll(".language-toggle").forEach(function (button) {
      button.addEventListener("click", function () {
        const currentLanguage = normalizeLanguage(localStorage.getItem(storageKey));
        applyLanguage(currentLanguage === "zh" ? "en" : "zh");
      });
    });
  });
})();
