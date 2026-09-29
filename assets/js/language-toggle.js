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
      "clothdojo.title": "ClothDojo：面向双臂衣物铺平与折叠的学习式数据生成和评测平台",
      "clothdojo.meta": "美团 LongCat · 研究项目，2026",
      "clothdojo.summary": "ClothDojo 是面向长时序、闭环衣物操作的仿真平台。利用 VR 示范和针对失败状态的人工纠错训练策略，在数百件衣物上生成近 8,000 条成功的铺平与折叠轨迹。平台将轨迹重新渲染为 RGB 训练数据，并通过统一初始状态和任务指标开展系统评测。",
      "clothdojo.platformHeading": "面向连续衣物操作的仿真平台",
      "clothdojo.platformText": "ClothDojo 将双臂铺平与折叠视为长时序、闭环任务。统一环境结合 MuJoCo 机器人动力学与 Newton/Style3D 布料物理，使 VR 示范、自主执行和评测共享同一套机器人与布料交互。核心资产池包含 <strong>500 件结构多样的衣物</strong>，保存的初始状态使策略对比可复现。",
      "clothdojo.platformScale": "在两项任务中，学习式生成策略共采集 <strong>7,848 条成功轨迹</strong>。视频开头展示平台覆盖的衣物与操作行为。",
      "clothdojo.policyHeading": "学习自适应行为，而非逐步编写操作脚本",
      "clothdojo.policyText": "铺平与折叠策略分别从 VR 示范中微调得到。执行时，策略反复观察布料、预测双臂动作、执行短时动作片段，再根据新状态重新规划。这样可以处理空中重新抓取、换手、旋转和局部调整，其时机由当前布料状态决定。",
      "clothdojo.nocsText": "将规范化物体坐标空间（NOCS）编码为衣物纹理，经预训练视觉语言动作模型原有的图像接口输入。在不提供隐藏网格状态的前提下，它为形变布料提供稳定的表面位置线索。双侧镜像增强在已记录轨迹中交换双臂角色，用相同人工数据扩充操作模式。",
      "clothdojo.workflowHeading": "从自主执行与人工纠错到可复用 RGB 数据",
      "clothdojo.workflowText": "任务指标自动保留成功执行。对于选中的失败轨迹，采集者先回看，再恢复到较早的介入状态，并通过 VR 接续完成任务；这些纠错数据用于更新生成策略。人工投入因此集中在失败状态，而不必逐条采集全部新轨迹。",
      "clothdojo.expansionText": "冻结后的策略生成 <strong>3,992 条铺平</strong>与 <strong>3,856 条折叠</strong>轨迹。每条保留的物理轨迹以随机外观重放渲染，生成不依赖 NOCS 的下游 RGB 策略训练数据。流程也支持在运动学兼容的机器人之间重定向轨迹；跨机器人画面展示重定向动作，训练策略的效果则由独立基准评估。",
      "clothdojo.ablationHeading": "哪些设计帮助了数据生成策略？",
      "clothdojo.ablationText": "草稿先展示铺平，再展示折叠。NOCS 线索和镜像增强提升铺平成功率：高度皱褶的状态会遮挡衣物结构，双臂也可能承担不同角色。折叠从这两项设计中获得的增益较小。HIL 纠错补充策略真实访问到的失败状态下的恢复行为，对折叠带来最大的单步增益。",
      "clothdojo.ablationScope": "这些结果来自固定已见与未见衣物划分上的闭环仿真评测，评估对象是数据生成策略，先于下游 RGB 策略训练。",
      "clothdojo.dataHeading": "生成轨迹能否训练只看 RGB 的策略？",
      "clothdojo.dataText": "视频先在铺平、再在折叠任务中比较 Human、Generated 和 Combined 三种训练来源。所有策略从相同预训练模型初始化，并使用相同人工监督预算。Generated 增加的是自动产生的成功轨迹，不引入新的人工动作标签；三组数据采用同一 RGB 重渲染流程。",
      "clothdojo.dataResult": "在所评估的已见／未见衣物和外观条件下，Generated 训练的策略均优于直接使用 Human 数据训练的策略。对比使用匹配的初始状态和外观。视频展示的是选定案例；成功率结论来自完整闭环评测，而非对画面中几个案例的主观判断。",
      "clothdojo.modelsHeading": "固定训练数据，比较不同策略模型",
      "clothdojo.modelsText": "最后一段比较使用相同生成数据训练的 π0.5、基于 StarVLA 的策略、GR00T N1.7 和 Diffusion Policy，先展示铺平，再展示折叠。在论文报告的任务和衣物划分中，π0.5 的成功率最高；四种模型在未见衣物上均下降。外观鲁棒性及中间两种模型的相对排序也因任务而异。",
      "clothdojo.limitationsText": "ClothDojo 目前只在仿真中验证上身衣物的铺平与折叠。重定向轨迹可用于另一种兼容机器人的策略训练，但可靠的端到端铺平后折叠仍未解决；两项任务的数据没有充分覆盖任务间的过渡。",
      "clothdojo.chapter1Heading": "连续衣物操作的仿真平台",
      "clothdojo.chapter1Text": "ClothDojo 在统一的闭环仿真环境中研究双臂铺平与折叠，结合机器人动力学和布料物理，覆盖 500 件结构多样的衣物及不同初始状态。",
      "clothdojo.chapter1Detail": "学习式数据生成策略最终在两项任务中采集了 7,848 条成功轨迹。左侧展示少量随机衣物资产，右侧独立展示 RGB 轨迹样例。",
      "clothdojo.asset.random": "随机换资产",
      "clothdojo.asset.randomRgb": "随机换轨迹",
      "clothdojo.asset.flatten": "展平",
      "clothdojo.mirror": "镜像增强",
      "clothdojo.asset.fold": "折叠",
      "clothdojo.chapter2Heading": "白色纹理、NOCS 与镜像增强",
      "clothdojo.chapter2Text": "三种策略从同一件衣物、同一初始状态出发：均匀白色纹理基线、未使用镜像增强的 NOCS 策略，以及使用双侧镜像增强的 NOCS 策略。",
      "clothdojo.chapter2Detail": "三段视频是独立的策略执行，并非同一轨迹换三种颜色。视频展示视觉条件；消融分页中的成功率来自完整评测。",
      "clothdojo.whiteLabel": "白色纹理",
      "clothdojo.whiteCaption": "衣物颜色均匀，不含规范表面坐标。",
      "clothdojo.nocsCaption": "规范表面坐标着色，未使用镜像增强。",
      "clothdojo.mirrorLabel": "镜像增强",
      "clothdojo.mirrorCaption": "使用双侧镜像增强训练的 NOCS 策略。",
      "clothdojo.mirrorHeading": "双侧镜像增强",
      "clothdojo.mirrorText": "反射仿真状态，并交换机器人的左右臂与夹爪。每条原始轨迹由此得到匹配的左右对称版本，无需重新采集人工示范。",
      "clothdojo.mirrorDetail": "下方并排展示同一来源动作。可切换展平或折叠，比较原始 NOCS 渲染与镜像轨迹。",
      "clothdojo.originalLabel": "原始轨迹",
      "clothdojo.originalCaption": "原始动作的 NOCS 渲染。",
      "clothdojo.mirroredLabel": "镜像轨迹",
      "clothdojo.mirroredCaption": "布料状态反射，左右机械臂互换。",
      "clothdojo.chapter3Heading": "保留成功轨迹，纠正失败状态",
      "clothdojo.chapter3Text": "策略离线执行并生成轨迹，任务指标筛选出成功结果。对于选中的失败轨迹，采集者回看、恢复到较早状态，再通过 VR 接续完成。",
      "clothdojo.chapter3Detail": "纠错数据重新用于训练，使人工投入集中在策略真正遇到困难的状态。",
      "clothdojo.chapter4Heading": "将物理轨迹转化为可复用的训练数据",
      "clothdojo.chapter4Text": "冻结后的策略生成 3,992 条铺平轨迹和 3,856 条折叠轨迹。成功的物理轨迹在不同外观下重放渲染，形成供下游 RGB 策略学习的数据；下游策略不接收 NOCS。",
      "clothdojo.chapter4Detail": "保存的初始状态和统一任务指标支持跨服装外观的可控比较。下一页展示参考动作如何迁移到兼容的机器人。",
      "clothdojo.chapter5Heading": "哪些设计提升了铺平生成策略？",
      "clothdojo.chapter5Text": "铺平消融比较了有无 NOCS 线索和镜像增强的策略。在已见与未见衣物的闭环试验中，两者均提升成功率；高度皱褶的布料会遮挡结构，双臂也可能轮流主导操作。",
      "clothdojo.chapter5Detail": "这里评估的是数据生成策略本身，先于下游 RGB 策略的训练。",
      "clothdojo.chapter6Heading": "哪些设计提升了折叠生成策略？",
      "clothdojo.chapter6Text": "折叠消融采用同样逐项叠加的配置。与铺平相比，NOCS 和镜像增强在折叠任务中的增益较小。",
      "clothdojo.chapter6Detail": "人工纠错补充了失败状态下的恢复行为，为折叠带来最明显的单项提升。",
      "clothdojo.chapter7Heading": "生成数据能否训练 RGB 铺平策略？",
      "clothdojo.chapter7Text": "Human、Generated 和 Combined 采用相同的人工监督预算与 RGB 渲染流程。Generated 增加自主生成的成功轨迹，无需额外人工动作标注。",
      "clothdojo.chapter7Detail": "切换条件，可在同一衣物和初始状态下比较三种策略。完整评测中 Generated 优于 Human；视频展示选取的案例。",
      "clothdojo.chapter8Heading": "数据优势能否延续到折叠？",
      "clothdojo.chapter8Text": "折叠评测沿用三种训练数据来源。在匹配的闭环评测中，Generated 再次优于 Human。",
      "clothdojo.chapter8Detail": "每种条件展示同一衣物与初始状态下的配对轨迹。筛选后的自主成功轨迹扩大了固定人工监督预算的效用。",
      "clothdojo.chapter9Heading": "固定数据，比较四种铺平模型",
      "clothdojo.chapter9Text": "使用相同生成数据训练 π0.5、基于 StarVLA 的策略、GR00T N1.7 和 Diffusion Policy，并在统一闭环协议下比较铺平表现。",
      "clothdojo.chapter9Detail": "展示的两种条件有匹配的视觉布局。π0.5 的报告成功率最高；四种模型在未见衣物上均下降。",
      "clothdojo.chapter10Heading": "固定数据，比较四种折叠模型",
      "clothdojo.chapter10Text": "固定生成数据后，四种模型继续用于折叠评测。它们的相对排序与铺平不同。",
      "clothdojo.chapter10Detail": "切换条件可查看配对轨迹。结果来自仿真；可靠的端到端先铺平再折叠仍未解决。",
      "clothdojo.chapter11Heading": "跨机器人本体的轨迹重定向",
      "clothdojo.chapter11Text": "选择任务和机器人，可逐一查看参考衣物动作向五种兼容本体的重定向。保存的初始状态与统一指标支持可重复比较。",
      "clothdojo.chapter11Detail": "这些片段展示机器人本体覆盖；策略成功率来自完整评测试验。",
      "clothdojo.chapter2Fact1Label": "NOCS",
      "clothdojo.chapter2Fact1Value": "规范表面位置",
      "clothdojo.chapter2Fact2Label": "镜像",
      "clothdojo.chapter2Fact2Value": "左右机械臂互换",
      "clothdojo.chapter2Fact3Label": "对照",
      "clothdojo.chapter2Fact3Value": "相同来源轨迹",
      "clothdojo.chapter3Fact1Label": "生成",
      "clothdojo.chapter3Fact1Value": "自主策略执行",
      "clothdojo.chapter3Fact2Label": "筛选",
      "clothdojo.chapter3Fact2Value": "成功轨迹",
      "clothdojo.chapter3Fact3Label": "纠错",
      "clothdojo.chapter3Fact3Value": "在 VR 中接续失败状态",
      "clothdojo.chapter4Fact1Label": "铺平",
      "clothdojo.chapter4Fact1Value": "3,992 条成功轨迹",
      "clothdojo.chapter4Fact2Label": "折叠",
      "clothdojo.chapter4Fact2Value": "3,856 条成功轨迹",
      "clothdojo.chapter4Fact3Label": "输出",
      "clothdojo.chapter4Fact3Value": "RGB 观测",
      "clothdojo.chapter5Fact1Label": "任务",
      "clothdojo.chapter5Fact1Value": "衣物铺平",
      "clothdojo.chapter5Fact2Label": "因素",
      "clothdojo.chapter5Fact2Value": "NOCS 与镜像增强",
      "clothdojo.chapter5Fact3Label": "测试",
      "clothdojo.chapter5Fact3Value": "已见与未见衣物",
      "clothdojo.chapter6Fact1Label": "任务",
      "clothdojo.chapter6Fact1Value": "衣物折叠",
      "clothdojo.chapter6Fact2Label": "因素",
      "clothdojo.chapter6Fact2Value": "NOCS 与镜像增强",
      "clothdojo.chapter6Fact3Label": "关键补充",
      "clothdojo.chapter6Fact3Value": "人工纠错",
      "clothdojo.chapter7Fact1Label": "Human",
      "clothdojo.chapter7Fact1Value": "VR 示范",
      "clothdojo.chapter7Fact2Label": "Generated",
      "clothdojo.chapter7Fact2Value": "自主成功轨迹",
      "clothdojo.chapter7Fact3Label": "Combined",
      "clothdojo.chapter7Fact3Value": "两类数据组合",
      "clothdojo.chapter8Fact1Label": "Human",
      "clothdojo.chapter8Fact1Value": "VR 示范",
      "clothdojo.chapter8Fact2Label": "Generated",
      "clothdojo.chapter8Fact2Value": "自主成功轨迹",
      "clothdojo.chapter8Fact3Label": "Combined",
      "clothdojo.chapter8Fact3Value": "两类数据组合",
      "clothdojo.chapter9Fact1Label": "训练数据",
      "clothdojo.chapter9Fact1Value": "生成轨迹",
      "clothdojo.chapter9Fact2Label": "模型",
      "clothdojo.chapter9Fact2Value": "四种策略",
      "clothdojo.chapter9Fact3Label": "结果",
      "clothdojo.chapter9Fact3Value": "闭环铺平",
      "clothdojo.chapter10Fact1Label": "训练数据",
      "clothdojo.chapter10Fact1Value": "生成轨迹",
      "clothdojo.chapter10Fact2Label": "模型",
      "clothdojo.chapter10Fact2Value": "四种策略",
      "clothdojo.chapter10Fact3Label": "结果",
      "clothdojo.chapter10Fact3Value": "闭环折叠",
      "clothdojo.chapter11Fact1Label": "机器人",
      "clothdojo.chapter11Fact1Value": "五种本体",
      "clothdojo.chapter11Fact2Label": "任务",
      "clothdojo.chapter11Fact2Value": "铺平与折叠",
      "clothdojo.chapter11Fact3Label": "评测",
      "clothdojo.chapter11Fact3Value": "共享初始状态",
      "clothdojo.ablationRate": "总体成功率",
      "clothdojo.watchAblation": "查看选定轨迹",
      "clothdojo.condition.seen_asset.seen_appearance": "基线",
      "clothdojo.condition.seen_asset.unseen_appearance": "新外观",
      "clothdojo.condition.unseen_asset.seen_appearance": "新衣物",
      "clothdojo.condition.unseen_asset.unseen_appearance": "新衣物与外观",
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
