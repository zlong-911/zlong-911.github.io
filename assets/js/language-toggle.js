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
      "home.intro": "你好！我是黄梓龙，<a href=\"https://www.scut.edu.cn/en/\">华南理工大学</a>控制科学与工程硕士研究生。我的研究聚焦<strong>面向可变形物体操作的机器人仿真</strong>，以双臂衣物展平与折叠为主要任务，构建连接物理仿真、数据生成、策略训练与闭环评测的完整流程，并探索策略向真实机器人的迁移。我也开展抓取先验与视觉策略学习，提高衣物操作的数据效率和泛化能力。在美团 LongCat 实习期间，我负责并完成了 Meituan-Robotics-0 的<strong>仿真评测与真机策略后训练</strong>。",
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
      "timeline.meituan.date": "2026年5月 - 2026年9月",
      "timeline.meituan.line": "美团 LongCat · 衣物操作",
      "expertise.researchLabel": "研究方向",
      "expertise.researchItems": "机器人学习 · 柔性物体操作 · 视觉可供性学习 · 仿真到真实迁移",
      "expertise.stackLabel": "技术栈",
      "expertise.stackItems": "Python · PyTorch · PyFlex · Newton · Isaac Sim · LeRobot · OpenPI · RLinf",
      "clothmate.title": "ClothMate: Leveraging Grasp-Fling Consistency for Generalizable and Data-Efficient Garment Flattening",
      "clothmate.meta": "Jiaxiang Luo<sup>*</sup>, <strong>Zilong Huang</strong>, Hao Cheng, Zixiang Hong<br><em>IEEE Robotics and Automation Letters</em>, 2026",
      "clothmate.summary": "ClothMate 面向双臂衣物展平，利用 Grasp-Fling Consistency，将铺平衣物上学到的抓取价值迁移到不同皱褶状态，提高策略的数据效率与跨类别泛化能力。单一策略覆盖五类衣物，仅使用各类别独立训练方案总数据量的 15%，并取得更好的展平效果。",
      "clothmate.coreInsight": "<strong>核心观察。</strong> 我们发现一个简单规律：即使衣物初始皱褶状态不同（左图中的 <em>Before</em> 行），抓取语义相近的区域，例如袖口、腰带或肩带（蓝色标注），也经常会得到相似的甩动后姿态和展开结果（<em>After</em> 行）。这种模式不仅存在于同一件衣物的不同状态，也能跨衣物实例和类别成立。它说明学习甩动动作可以从完整衣物状态的复杂性中解耦出来，在更紧凑的空间中学习。",
      "clothmate.method": "<strong>方法概览。</strong> 给定一张俯视 RGB 图像，ClothMate 选择两个抓取点并执行固定甩动原语。我们使用 Spatial Action Maps 表示双臂动作：每个像素编码一对位于其上下固定偏移处的抓取点。旋转输入会改变抓取方向，缩放输入会改变两个抓取点的距离。我们首先在规范化、对齐的衣物状态中评估候选抓取，并根据展开效果为每对抓取赋值（图 a）。仿真提供不同构型之间的顶点对应关系，使我们能够把抓取点及其价值投影到皱褶状态，并训练策略直接从当前图像中选择抓取（图 b）。当衣物大致展开后，ClothMate 切换到 pick-and-stretch 完成最终铺平与对齐（图 c）。",
      "clothmate.results": "<strong>实验结果。</strong> ClothMate 使用五类衣物联合训练一个策略，只需要训练各类别独立基线所需总数据量的 15%。在仿真衬衫基准上，相比 Cloth-Funnels，它将覆盖率从 85.0% 提升到 91.5%，并把平均交互步数从 7.0 降到 4.7。我们还在双臂机器人上用 24 件真实衣物、跨五个类别进行了评估。在两种方法都测试的 8 件衬衫上，ClothMate 将平均 IoU 从 37.2% 提升到 57.4%，平均覆盖率从 75.6% 提升到 83.1%。",
      "clothmate.consistency": "<strong>抓取-甩动一致性。</strong> Prior Value Module 展示出跨衣物实例和类别共享的抓取价值结构。通过顶点映射，ClothMate 在规范化、对齐状态中学习这一结构，并迁移到任意皱褶构型。这类似人处理衣物的方式：先识别有语义意义的抓取位置，再在皱褶布料中找到这些位置，而不是显式建模每一道褶皱。这种可复用的抓取先验解释了为什么 ClothMate 能以有限数据跨实例和类别泛化。",
      "vap.title": "Visual Affordance Priors for Generalizable Garment Flattening",
      "vap.meta": "<strong>Zilong Huang</strong>, Sipeng Lu, Jiaxiang Luo<sup>*</sup><br><em>IEEE Robotics and Automation Letters</em>, Under review",
      "vap.summary": "面向不同衣物形状、外观与视角下的双臂展平，构建从物理交互评估到 RGB 视觉策略训练的完整流程，将抓取价值学习与随机化渲染解耦。流程覆盖 1,646 件衣物，物理评估吞吐达到原 PyFlex 流程的 19 倍；无需真实数据微调，在 22 件真实衣物上，相比 ClothMate，平均 IoU 从 64.9% 提升至 77.6%。",
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
      "vap.teacher": "Pair-Value Teacher",
      "vap.synthetic": "合成视觉数据",
      "vap.dynamics": "Visual Pair Policy Dynamics",
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
      "clothdojo.title": "ClothDojo: Learned Data Generation and Benchmarking for Bimanual Garment Flattening and Folding",
      "clothdojo.meta": "<strong>Zilong Huang</strong>, Zipeng Ye, Caicheng Wang, Yuchen Xie, Jiaxiang Luo<sup>*</sup><br><em>IEEE International Conference on Robotics and Automation</em>, Under review",
      "clothdojo.summary": "ClothDojo 面向双臂衣物展平与折叠的规模化闭环策略评测，集成衣物仿真、可扩展的数据生成与统一评测流程。利用仿真特权信息和少量人工示范训练数据生成策略，自主执行并筛选成功轨迹；实验在 500 件核心衣物资产上生成 7,848 条成功轨迹，支持下游策略训练与跨衣物、外观和机器人本体的评测。",
      "simpt.title": "SimPT: An Automated Simulation Framework for Intervention-Based VLA Post-Training",
      "simpt.meta": "Caicheng Wang, Zipeng Ye<sup>*</sup>, Zhexuan Zhou, <strong>Zilong Huang</strong>, Xi Zhang, Yuchen Xie<br><em>IEEE International Conference on Robotics and Automation</em>, Under review",
      "simpt.summary": "SimPT 面向基于干预的 VLA 后训练，将仿真中的纠错数据采集、策略训练与评测整合为自动化流程。任务进度图保存稳定状态，帮助专家高效恢复失败轨迹。在七项 RoboTwin 任务上，恢复尝试次数减少 75%。",
      "mr0.title": "Meituan-Robotics-0",
      "mr0.meta": "技术报告署名作者 · 美团 · 仿真评测与真机后训练",
      "mr0.summary": "在 Meituan-Robotics-0 工作中，负责并完成了仿真评测与真机策略后训练。在 RoboTwin、RoboDojo 基准上评估模型表现，面向精细、长程操作任务开展 HG-DAgger 与 RECAP 策略迭代。通过三轮人工纠错与监督微调，HG-DAgger 将摆字母、叠衣服和插网线任务的成功率分别从 <strong>23% / 0% / 25% 提升至 83% / 83% / 69%</strong>。",
      "mgdcd.title": "Multimodal Generalized Defect Category Discovery in industrial scenarios via defect-aware representation guided calibrated clustering",
      "mgdcd.meta": "Hao Cheng, Jiaxiang Luo<sup>*</sup>, <strong>Zilong Huang</strong><br><em>Advanced Engineering Informatics</em>, 2026",
      "mgdcd.summary": "M-GDCD 利用少量有标注缺陷样本，从二维图像和三维点云中识别已知缺陷并发现新类别。方法结合由正常样本学习的缺陷感知表征与校准聚类，支持工业场景中的多模态缺陷类别发现。",
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
      "clothdojo.modelsText": "最后一段比较使用相同生成数据训练的 π0.5、基于 StarVLA 的策略、GR00T N1.7 和 Diffusion Policy，先展示铺平，再展示折叠。在论文报告的任务和衣物划分中，π0.5 的成功率最高；四种模型在未见衣物上均下降。",
      "clothdojo.limitationsText": "ClothDojo 目前只在仿真中验证上身衣物的铺平与折叠。重定向轨迹可用于另一种兼容机器人的策略训练，但可靠的端到端铺平后折叠仍未解决；两项任务的数据没有充分覆盖任务间的过渡。",
      "clothdojo.chapter1Heading": "连续衣物操作的仿真平台",
      "clothdojo.chapter1Text": "ClothDojo 结合机器人动力学与布料仿真，研究双臂铺平和折叠。核心资产池包含 500 件形状各异的衣物及多种初始状态。",
      "clothdojo.chapter1Detail": "学习式数据生成策略获得 3,992 条成功的铺平轨迹和 3,856 条成功的折叠轨迹。下方可随机查看衣物资产和 RGB 轨迹片段。",
      "clothdojo.asset.random": "随机换资产",
      "clothdojo.asset.randomRgb": "随机换轨迹",
      "clothdojo.asset.flatten": "展平",
      "clothdojo.mirror": "镜像增强",
      "clothdojo.asset.fold": "折叠",
      "clothdojo.chapter2Heading": "白色纹理、NOCS 与镜像增强",
      "clothdojo.chapter2Text": "同一件衣物、同一初始状态下，分别展示白色纹理、NOCS 表面坐标及加入镜像增强的三种生成策略。",
      "clothdojo.chapter2Detail": "三段画面是独立的策略执行；后两页给出完整评测的成功率。",
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
      "clothdojo.chapter3Text": "生成策略自主执行并保留成功轨迹。对于选中的失败案例，操作者恢复到较早状态，通过 VR 接续完成动作。",
      "clothdojo.chapter3Detail": "纠错轨迹回到训练集，使人工投入集中在策略难以处理的状态。",
      "clothdojo.chapter4Heading": "将物理轨迹转化为可复用的训练数据",
      "clothdojo.chapter4Text": "冻结后的策略生成 3,992 条铺平轨迹和 3,856 条折叠轨迹。成功的物理轨迹在不同外观下重放渲染，形成供下游 RGB 策略学习的数据；下游策略不接收 NOCS。",
      "clothdojo.chapter4Detail": "保存的初始状态和统一任务指标支持跨服装外观的可控比较。下一页展示参考动作如何迁移到兼容的机器人。",
      "clothdojo.chapter5Heading": "哪些设计提升了铺平生成策略？",
      "clothdojo.chapter5Text": "在铺平任务中，NOCS 带来最大的成功率提升；镜像增强进一步改善已见和未见衣物上的表现。",
      "clothdojo.chapter5Detail": "这里评测的是数据生成策略，先于下游 RGB 策略训练。",
      "clothdojo.chapter6Heading": "哪些设计提升了折叠生成策略？",
      "clothdojo.chapter6Text": "同样的设计在折叠任务中也有效，但 NOCS 和镜像增强的增益小于铺平。",
      "clothdojo.chapter6Detail": "人工纠错教会策略从失败状态恢复，带来最大的额外提升。",
      "clothdojo.chapter7Heading": "生成数据能否训练 RGB 铺平策略？",
      "clothdojo.chapter7Text": "Human、Generated 和 Combined 使用相同的人工监督与 RGB 渲染流程。Generated 额外加入自主生成的成功轨迹，不需要新的人工动作标注。",
      "clothdojo.chapter7Detail": "Generated 在四个衣物与外观评测池中均优于 Human。视频展示选定的策略回放。",
      "clothdojo.chapter8Heading": "数据优势能否延续到折叠？",
      "clothdojo.chapter8Text": "在折叠任务中，Generated 同样优于 Human，且人工监督预算相同。",
      "clothdojo.chapter8Detail": "四个评测池同时检验衣物和外观泛化。视频对比三种训练数据对应的选定回放。",
      "clothdojo.chapter9Heading": "固定数据，比较四种铺平模型",
      "clothdojo.chapter9Text": "使用 Generated 数据，比较 π0.5、基于 StarVLA 的策略、GR00T N1.7 和 Diffusion Policy 的铺平表现。",
      "clothdojo.chapter9Detail": "π0.5 在四个评测池中均领先。StarVLA 对未见外观更敏感，所有模型在未见衣物上表现较弱。",
      "clothdojo.chapter10Heading": "固定数据，比较四种折叠模型",
      "clothdojo.chapter10Text": "同样四种模型也用于折叠评测。π0.5 再次领先，各模型在未见衣物上都更难成功。",
      "clothdojo.chapter10Detail": "Diffusion Policy 在折叠任务中对外观变化最敏感。视频将选定的模型回放放在同一画面中。",
      "clothdojo.chapter11Heading": "轨迹复用与联合任务评测",
      "clothdojo.chapter11Text": "衣物轨迹可适配五种兼容的机器人本体。Piper 使用原始轨迹训练，UR5e 使用重定向轨迹训练，无需新增人工示范。",
      "clothdojo.chapter11Detail": "视频分别展示轨迹重定向和选定的联合策略回放；表格汇总完整评测的成功率。",
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
      "clothdojo.splitRate": "按衣物划分的成功率 (%)",
      "clothdojo.splitMethod": "方法",
      "clothdojo.splitSeen": "已见 Seen",
      "clothdojo.splitUnseen": "未见 Unseen",
      "clothdojo.splitFlatCount": "已见 100 件 · 未见 100 件衣物",
      "clothdojo.splitFoldCount": "已见 130 件 · 未见 70 件衣物",
      "clothdojo.splitAppearanceNote": "每列平均已见与未见外观，每组 800 次闭环测试；右侧视频是选定案例。",
      "clothdojo.evalRate": "各评测池成功率 (%)",
      "clothdojo.evalSeenGarment": "已见衣物",
      "clothdojo.evalUnseenGarment": "未见衣物",
      "clothdojo.evalSeenAppearance": "已见外观",
      "clothdojo.evalUnseenAppearance": "未见外观",
      "clothdojo.evalAverage": "平均",
      "clothdojo.evalNote": "每个评测池有 400 次闭环测试；平均值涵盖全部 1,600 次。拼接视频展示选定案例。",
      "clothdojo.jointRate": "闭环成功率 (%)",
      "clothdojo.jointRobot": "机器人",
      "clothdojo.jointContinuous": "铺平 → 折叠",
      "clothdojo.jointStandalone": "独立折叠",
      "clothdojo.jointFlattenSR": "铺平成功率",
      "clothdojo.jointFoldSR": "折叠成功率",
      "clothdojo.jointNote": "连续任务从皱褶状态开始，运行 120 秒；独立折叠从平整状态开始，运行 40 秒。视频仅展示选定案例。",
      "clothdojo.retargetMontage": "五本体轨迹",
      "clothdojo.jointMontage": "Piper + UR5e 策略",
      "clothdojo.retargetCaption": "参考轨迹重定向到五种机器人本体；此视频不是学习策略评测。",
      "clothdojo.jointCaption": "Piper 与 UR5e 的选定联合任务回放；成功率统计来自全部测试。",
      "clothdojo.focusAxes": "衣物 / 外观",
      "clothdojo.watchAblation": "查看选定轨迹",
      "clothdojo.condition.seen_asset.seen_appearance": "已见 / 已见",
      "clothdojo.condition.seen_asset.unseen_appearance": "已见 / 未见",
      "clothdojo.condition.unseen_asset.seen_appearance": "未见 / 已见",
      "clothdojo.condition.unseen_asset.unseen_appearance": "未见 / 未见",
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
