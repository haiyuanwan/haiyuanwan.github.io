---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# 👋 About Me
<span class='anchor' id='about-me'></span>

I am currently a PhD student in Data Science and Information Technology at [Tsinghua University](https://www.tsinghua.edu.cn/), devoted to advancing general-purpose agents that can perceive, reason, and act. My main focus is on scientific reasoning, world models, and multi-agent systems. Prior to this, I earned my B.Eng. in Communication Engineering from [East China Normal University](https://www.ecnu.edu.cn/).

From May 2025, I have been a Research Intern at the PRIME-RL Team of [Shanghai AI Laboratory](https://www.shlab.org.cn/), working with [Ganqu Cui](https://cgq15.github.io/) and Prof. [Ning Ding](https://www.stingning.cn/) on post-training of foundation models. Before that, I was a visiting student at the [Qing Yuan Research Institute, Shanghai Jiao Tong University](https://qingyuan.sjtu.edu.cn/), working with Prof. [Guohao Dai](https://dai.sjtu.edu.cn/pepledetail.html?id=218). I also maintain long-term collaborations with [Junchi Yu](https://samyu0304.github.io/) and Prof. [Philip Torr](https://scholar.google.com/citations?user=kPxa2w0AAAAJ&hl=zh-CN) at the University of Oxford.

My recent work spans scientific reasoning, world models and embodied AI, multi-agent systems, and efficient / continual LLMs.

I am actively looking for research collaborations and discussions. Feel free to reach out! ([wanhy24@mails.tsinghua.edu.cn](mailto:wanhy24@mails.tsinghua.edu.cn)).

# 🔥 News
- *2026.04*: 🎉 Two papers accepted to **ICML 2026** ([HiPhO](#paper-hipho), [LabBuilder](#paper-labbuilder)).
- *2026.04*: 🎉 One paper accepted to **IJCAI 2026** (SDFLoRA).
- *2026.02*: 🎉 [**P1-VL-235B-A22B**](#paper-p1-vl) released — extending P1 to multimodal physics reasoning with visual perception.
- *2026.01*: 🎉 One paper accepted to **ICLR 2026** ([From What to Why](#paper-from-what-to-why)).
- *2025.11*: 🎉 [**P1-235B-A22B**](#paper-p1) released — the first open-source physics reasoning model trained purely via reinforcement learning to attain **gold-medal performance on IPhO 2025**, sweeping **12 Gold + 1 Silver** across 13 international and regional physics olympiads and rivaling frontier closed-source systems such as GPT-5 and Gemini-2.5-Pro.
- *2025.11*: 🎉 One paper accepted to **AAAI 2026** ([DeepResearch Arena](#paper-deepresearch-arena)).
- *2025.09*: 🎉 One paper accepted to **NeurIPS 2025** ([Spotlight Attention](#paper-spotlight-attention)).
- *2025.08*: 🎉 One paper accepted to **EMNLP 2025** ([RECALL](#paper-recall)).

# 📖 Education

<div class="education-item"><div class="education-logo"><img src="images/tsinghua.png" alt="Tsinghua University" /></div>
<div class="education-text" markdown="1">

**Sep. 2024 – Jul. 2029 (expected):** **Ph.D.** in Data Science and Information Technology, [**Tsinghua University (THU)**](https://www.tsinghua.edu.cn/), Beijing, China.

</div>
</div>

<div class="education-item"><div class="education-logo"><img src="images/ecnu.png" alt="East China Normal University" /></div>
<div class="education-text" markdown="1">

**Sep. 2020 – Jul. 2024:** **B.Eng.** in Communication Engineering, [**East China Normal University (ECNU)**](https://www.ecnu.edu.cn/), Shanghai, China.

</div>
</div>

# 📑 Technical Report

<div class='paper-box' id="paper-p1"><div class='paper-box-image'><div><div class="badge">Report</div><img src='images/papers/p1.png' alt="P1" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**P1: Mastering Physics Olympiads with Reinforcement Learning.**

Shanghai AI Lab PRIME-RL Team · **Haiyuan Wan** (Core Contributor)

<span style="color:#c00000">*Technical Report, 2026.*</span>

[<i class="fas fa-globe"></i> **Project**](https://prime-rl.github.io/P1/) &nbsp;·&nbsp;
[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2511.13612) &nbsp;·&nbsp;
[<i class="fab fa-github"></i> **Code**](https://github.com/PRIME-RL/P1) &nbsp;·&nbsp;
[<img src="images/icons/huggingface.svg" style="height:1em;vertical-align:-0.15em"> **P1-235B-A22B**](https://huggingface.co/PRIME-RL/P1-235B-A22B) &nbsp;·&nbsp;
[<img src="images/icons/huggingface.svg" style="height:1em;vertical-align:-0.15em"> **P1-30B-A3B**](https://huggingface.co/PRIME-RL/P1-30B-A3B)
</div>
</div>

<div class='paper-box' id="paper-p1-vl"><div class='paper-box-image'><div><div class="badge">Report</div><img src='images/papers/p1-vl.png' alt="P1-VL" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads.**

Shanghai AI Lab PRIME-RL Team · **Haiyuan Wan**

<span style="color:#c00000">*Technical Report, 2026.*</span>

[<i class="fas fa-globe"></i> **Project**](https://prime-rl.github.io/P1-VL/) &nbsp;·&nbsp;
[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2602.09443) &nbsp;·&nbsp;
[<i class="fab fa-github"></i> **Code**](https://github.com/PRIME-RL/P1-VL) &nbsp;·&nbsp;
[<img src="images/icons/huggingface.svg" style="height:1em;vertical-align:-0.15em"> **P1-VL-235B-A22B**](https://huggingface.co/PRIME-RL/P1-VL-235B-A22B) &nbsp;·&nbsp;
[<img src="images/icons/huggingface.svg" style="height:1em;vertical-align:-0.15em"> **P1-VL-30B-A3B**](https://huggingface.co/PRIME-RL/P1-VL-30B-A3B)
</div>
</div>

# 📝 Selected Publications

<div class='paper-box' id="paper-deepresearch-arena"><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><img src='images/papers/deepresearcharena.png' alt="DeepResearch Arena" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**DeepResearch Arena: The First Exam of LLMs' Research Abilities via Seminar-Grounded Tasks.**

**Haiyuan Wan**†, Chen Yang†, Junchi Yu, Meiqi Tu, Jiaxuan Lu, Di Yu, Jianbao Cao, Ben Gao, Jiaqing Xie, Aoran Wang, Wenlong Zhang, Philip Torr, Dongzhan Zhou.

<span style="color:#c00000">(† equal contribution) AAAI Conference on Artificial Intelligence (<strong>AAAI</strong>), 2026.</span>

[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2509.01396)
</div>
</div>

<div class='paper-box' id="paper-hipho"><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/papers/hipho.png' alt="HiPhO" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**HiPhO: How Far Are (M)LLMs from Humans in the Latest High School Physics Olympiad Benchmark?**

Fangchen Yu†, **Haiyuan Wan**†, Qianjia Cheng†, Yuchen Zhang, Jiacheng Chen, Fujun Han, Yulun Wu, Junchi Yao, Ruilizhen Hu, Ning Ding, Yu Cheng, Tao Chen, Lei Bai, Dongzhan Zhou, Yun Luo, Ganqu Cui, Peng Ye.

<span style="color:#c00000">(† equal contribution) International Conference on Machine Learning (<strong>ICML</strong>), 2026.</span>

[<i class="fas fa-globe"></i> **Project**](https://phyarena.github.io/) &nbsp;·&nbsp;
[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2509.07894) &nbsp;·&nbsp;
[<i class="fab fa-github"></i> **Code**](https://github.com/SciYu/HiPhO) &nbsp;·&nbsp;
[<img src="images/icons/huggingface.svg" style="height:1em;vertical-align:-0.15em"> **Dataset**](https://huggingface.co/datasets/SciYu/HiPhO)
</div>
</div>

<div class='paper-box' id="paper-recall"><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/papers/recall.png' alt="RECALL" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**RECALL: REpresentation-aligned Catastrophic-forgetting ALLeviation via Hierarchical Model Merging.**

Bowen Wang†, **Haiyuan Wan**†, Liwen Shi, Chen Yang, Peng He, Yue Ma, Haochen Han, Wenhao Li, Tiao Tan, Yongjian Li, Fangming Liu, Yifan Gong, Sheng Zhang.

<span style="color:#c00000">(† equal contribution) Conference on Empirical Methods in Natural Language Processing (<strong>EMNLP</strong>), 2025.</span>

[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2510.20479)
</div>
</div>

<div class='paper-box' id="paper-from-what-to-why"><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/papers/fromwhattowhy.png' alt="From What to Why" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**From What to Why: A Multi-Agent System for Evidence-based Chemical Reaction Condition Reasoning.**

Cheng Yang, Jiaxuan Lu, **Haiyuan Wan**, Junchi Yu, Feiwei Qin.

<span style="color:#c00000">International Conference on Learning Representations (<strong>ICLR</strong>), 2026.</span>

[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2509.23768)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/papers/fromtokenstoframes.png' alt="From Tokens to Frames" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**From Tokens to Frames: Video Generation as a New Paradigm for Spatial Reasoning.**

Cheng Yang†, **Haiyuan Wan**†, Yiran Peng†, Xin Cheng, Zhaoyang Yu, Jiayi Zhang, Junchi Yu, Xinlei Yu, Xiawu Zheng, Dongzhan Zhou, Chenglin Wu.

<span style="color:#c00000">(† equal contribution) <strong>arXiv</strong>, 2025.</span>

[<i class="fas fa-globe"></i> **Project**](https://imyangc7.github.io/VRBench_Web/) &nbsp;·&nbsp;
[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2511.15065) &nbsp;·&nbsp;
[<i class="fab fa-github"></i> **Code**](https://github.com/FoundationAgents/VR-Bench) &nbsp;·&nbsp;
[<img src="images/icons/huggingface.svg" style="height:1em;vertical-align:-0.15em"> **Dataset**](https://huggingface.co/datasets/amagipeng/VR-Bench) &nbsp;·&nbsp;
[<img src="images/icons/huggingface.svg" style="height:1em;vertical-align:-0.15em"> **Wan-R1**](https://huggingface.co/HY-Wan/Wan-R1)
</div>
</div>

<div class='paper-box' id="paper-spotlight-attention"><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/papers/spotlightattention.png' alt="Spotlight Attention" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Spotlight Attention: Towards Efficient LLM Generation via Non-linear Hashing-based KV Cache Retrieval.**

Wenhao Li, Yuxin Zhang, Gen Luo, **Haiyuan Wan**, Ziyang Gong, Fei Chao, Rongrong Ji.

<span style="color:#c00000">Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>), 2025.</span>

[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2508.19740)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/papers/physicsminions.png' alt="PhysicsMinions" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**PhysicsMinions: Winning Gold Medals in the Latest Physics Olympiads with a Coevolutionary Multimodal Multi-Agent System.**

Fangchen Yu†, Junchi Yao†, Ziyi Wang, **Haiyuan Wan**, Youling Huang, Bo Zhang, Shuyue Hu, Dongzhan Zhou, Ning Ding, Ganqu Cui, Lei Bai, Wanli Ouyang, Peng Ye.

<span style="color:#c00000">(† equal contribution) <strong>arXiv</strong>, 2025.</span>

[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2509.24855)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/papers/beyondstatictools.png' alt="Beyond Static Tools" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Beyond Static Tools: Test-Time Tool Evolution for Scientific Reasoning.**

Jiaxuan Lu†, Ziyu Kong†, Yemin Wang†, Rong Fu, **Haiyuan Wan**, Cheng Yang, Wenjie Lou, Haoran Sun, Lilong Wang, Yankai Jiang, Xiaosong Wang, Xiao Sun, Dongzhan Zhou.

<span style="color:#c00000">(† equal contribution) <strong>arXiv</strong>, 2026.</span>

[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2601.07641) &nbsp;·&nbsp;
[<i class="fab fa-github"></i> **Code**](https://github.com/lujiaxuan0520/Test-Time-Tool-Evol)
</div>
</div>

<div class='paper-box' id="paper-labbuilder"><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/papers/labbuilder.png' alt="LabBuilder" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**LabBuilder: Protocol-Grounded 3D Layout Generation for Interactable and Safe Laboratory.**

Jianbao Cao†, Zhangrui Zhao†, Bohan Feng†, Zixuan Hu, Rui Li, **Haiyuan Wan**, Chenxi Li, Jingyuan Li, Wenzhe Cai, Lei Bai, Wanli Ouyang, Lingyu Duan, Di Huang, Mingting Pan, Sha Zhang, Xinzhu Ma, Shixiang Tang, Dongzhan Zhou.

<span style="color:#c00000">(† equal contribution) International Conference on Machine Learning (<strong>ICML</strong>), 2026.</span>

[<i class="fas fa-file-pdf"></i> **Paper**](https://arxiv.org/pdf/2605.02288)
</div>
</div>

# 💼 Internships

<div class="internship-logos">
  <!-- 调整 logo 高度：改 inline style 里的 px 数字即可 -->
  <img src="images/sail.jpg" alt="Shanghai AI Laboratory" style="height: 50px !important; max-height: 50px !important;" />
</div>

- **May 2025 – May 2026:** [Shanghai AI Laboratory](https://www.shlab.org.cn/) · Research Intern · PRIME-RL Team · Post-training of foundation models

# 🎖 Honors and Awards
- **Junhao Foundation Soaring Scholarship** — Presented by Academician Chu Junhao; the only undergraduate awardee.
- **ECNU Outstanding Student Special Scholarship** — Sole recipient in the department, awarded for two consecutive years.

# 💬 Services
- **Reviewer:** ICML, NeurIPS, ICLR, AAAI, ECCV and other top-tier conferences/journals in computer vision, natural language processing, and machine learning.

# 📊 Visitor Statistics

<div class="visitor-stats" style="margin: 2em auto; padding: 0.75em; background: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef; width: fit-content; max-width: 100%; line-height: 0;">
  <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=kB96-8_SN94hOOXrYqCd5ETfatWQ4VHpZ7-UoEjsY3g&cl=ffffff&w=a"></script>
</div>
