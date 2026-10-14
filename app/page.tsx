import Image from 'next/image';
import type { ReactNode } from 'react';
import Engagement from './engagement';
import SiteControls from './site-controls';

function Localized({ zh, en }: { zh: ReactNode; en: ReactNode }) {
  return (
    <>
      <span className="langZh">{zh}</span>
      <span className="langEn">{en}</span>
    </>
  );
}

type ResearchItem = {
  period: string;
  authorship: string;
  authorshipEn: string;
  venue: string;
  venueEn?: string;
  venueHref?: string;
  title: string;
  summary: string;
  summaryEn: string;
  feedback?: string;
  feedbackEn?: string;
  href: string;
};

const research: ResearchItem[] = [
  {
    period: '2025.01 - 2025.06',
    authorship: '第三作者',
    authorshipEn: 'Third author',
    venue: 'Findings of the Association for Computational Linguistics: ACL 2025',
    title:
      'Understanding the Repeat Curse in Large Language Models from a Feature Perspective',
    summary: '从特征视角研究大语言模型中的重复现象及其内在机制。',
    summaryEn:
      'Investigated repetitive generation in large language models from a feature perspective and analyzed its underlying mechanisms.',
    href: 'https://aclanthology.org/2025.findings-acl.406/',
  },
  {
    period: '2024.09 - 2026.04',
    authorship: '第二作者',
    authorshipEn: 'Second author',
    venue: 'Chaos, Solitons & Fractals',
    venueHref: 'https://www.sciencedirect.com/journal/chaos-solitons-and-fractals',
    title:
      'Evolutionary Dynamics of Multi-agent Systems with Regret-based Learning and Random Exploration',
    summary: '研究基于遗憾学习与随机探索的多智能体系统演化动力学。',
    summaryEn:
      'Studied the evolutionary dynamics of multi-agent systems with regret-based learning and random exploration.',
    href:
      'https://www.sciencedirect.com/science/article/abs/pii/S0960077926004303?via%3Dihub',
  },
  {
    period: '2025.04 - 2025.07',
    authorship: '共同第一作者',
    authorshipEn: 'Co-first author',
    venue: 'ICML 2025 Workshop: Multi-Agent Systems in the Era of Foundation Models',
    title:
      'Is Your LLM-Based Multi-Agent a Reliable Real-World Planner? Exploring Fraud Detection in Travel Planning',
    summary: '围绕旅行规划中的欺诈检测，探索大模型多智能体的真实世界规划可靠性。',
    summaryEn:
      'Evaluated the real-world planning reliability of LLM-based multi-agent systems through fraud detection in travel planning.',
    feedback: '研究获所评测开源旅行规划框架作者 Arjun Prabhulal（Google Developer Expert）主动致信关注与致谢。',
    feedbackEn: 'Arjun Prabhulal (Google Developer Expert), author of the open-source travel-planning framework evaluated in this study, reached out by email to express interest and thanks.',
    href: 'https://arxiv.org/abs/2505.16557',
  },
  {
    period: '2025.06 - 2026.04',
    authorship: '第二作者',
    authorshipEn: 'Second author',
    venue: '《当代教育实践与教学研究》',
    venueEn: 'Contemporary Education Practice and Teaching Research',
    title: '高校理论宣讲促进青年思想政治教育的机制与路径研究',
    summary: '关注理论宣讲在青年思想政治教育中的作用机制与实践路径。',
    summaryEn:
      'Examined the mechanisms and practical pathways through which theoretical outreach advances ideological and political education for young people.',
    href:
      'https://d.wanfangdata.com.cn/periodical/CihQZXJpb2RpY2FsQ0hJU29scjkyMDI2MDYxMDIwMjYwNjEwMTYxMjM4EhpRS0JKQkQyMDI2MjAyNjA0MjQwMDAwMTkxOBoIc2txa3d5bmU%3D',
  },
  {
    period: '2025.09 - 2026.04',
    authorship: '第二作者',
    authorshipEn: 'Second author',
    venue: '《中国多媒体与网络教学学报》',
    venueEn: 'China Journal of Multimedia & Network Teaching',
    title: '人工智能赋能“五育并举”学生综合素质评价的体系构建研究',
    summary: '探索人工智能支持学生综合素质评价体系建设的方法与实践。',
    summaryEn:
      'Explored methods and practices for building an AI-empowered comprehensive student quality evaluation system.',
    href:
      'https://kns.cnki.net/kcms2/article/abstract?v=nNhQY13CyvUENdHedh-BW-K37wPAe382ShFH-5C7mD6EI7vH5PVhxYHem5OF5T9Xb4QVcnhhh9wnQ9c8PRtF_zep_5jCiPJbIqj1rlRu4FwvQiGy_KYtXn6M08r6yOoA9PVes2Xn4NsdAoNzCrNNgV6mhHfc40UCcEsltxP0vyR_WVZ9rJVi2JyB6-Jca4hdkH_woqOr1iY&uniplatform=NZKPT&captchaId=fa4331af-de99-4f45-ae1a-5fa8ad1b4155',
  },
];

const internships = [
  {
    period: '2025.10 - 2026.06',
    role: '实习辅导员',
    roleEn: 'Student Counselor Intern',
    organization: '电子科技大学数学科学学院',
    organizationEn: 'School of Mathematical Sciences, UESTC',
    points: [
      '第一学期负责 2025 级本科新生日常管理工作。',
      '第二学期负责学院研究生日常管理工作。',
    ],
    pointsEn: [
      'Managed the daily affairs of the 2025 undergraduate cohort during the first semester.',
      'Supported the daily administration of graduate students during the second semester.',
    ],
  },
  {
    period: '2024.07 - 2024.08',
    role: '极道班班长',
    roleEn: 'Training Cohort Leader',
    organization: '极道科技（北京）有限公司',
    organizationEn: 'Jidao Technology (Beijing) Co., Ltd.',
    points: [
      '参加院企联培项目，基于 Django 与 MySQL 构建支持分级权限的校园活动社区系统。',
      '实现活动发起、投票、报名、评论、公告、用户管理、多图上传与文件存储。',
    ],
    pointsEn: [
      'Joined a university–industry training program and built a role-based campus activity community with Django and MySQL.',
      'Implemented activity publishing, voting, registration, comments, announcements, user management, multi-image uploads, and file storage.',
    ],
    href: 'https://github.com/JhengXu/campus_activity',
    linkLabel: '校园活动社区系统 · GitHub',
    linkLabelEn: 'Campus Activity Community · GitHub',
  },
  {
    period: '2023.07 - 2023.08',
    role: '算法工程师',
    roleEn: 'Algorithm Engineer',
    organization: '四川犍小茉科技有限公司',
    organizationEn: 'Sichuan Qianxiaomo Technology Co., Ltd.',
    points: [
      '开发基于 YOLOv5 的油茶果识别算法，结合动态缩放、边缘填充与 ONNX Runtime 加速。',
      '通过 RGB-D 数据同步采集与三维坐标转换完成空间定位，并构建颜色分割与目标检测双通道验证机制。',
    ],
    pointsEn: [
      'Developed a YOLOv5-based camellia fruit recognition algorithm with dynamic resizing, edge padding, and ONNX Runtime acceleration.',
      'Implemented RGB-D synchronized acquisition and 3D coordinate conversion for localization, with a dual-channel color segmentation and object detection validation pipeline.',
    ],
  },
];

const leadership = [
  {
    period: '2025.06 - 2026.06',
    role: '本科生第二党支部副书记',
    roleEn: 'Deputy Secretary, Undergraduate Party Branch No. 2',
    organization: '电子科技大学数学科学学院',
    organizationEn: 'School of Mathematical Sciences, UESTC',
    points: [
      '获 2025-2026 年度校优秀共产党员（全校 10 人）。',
      '所在支部获学院先进党支部。',
    ],
    pointsEn: [
      'Named a 2025–2026 Outstanding Communist Party Member of UESTC, one of ten university-wide recipients.',
      'The branch was recognized as an Advanced Party Branch of the school.',
    ],
  },
  {
    period: '2024.06 - 2026.06',
    role: '学生兼职副书记',
    roleEn: 'Part-time Student Deputy Secretary',
    organization: '共青团电子科技大学委员会',
    organizationEn: 'Communist Youth League Committee, UESTC',
    points: [
      '入选四川省青马工程第八届高校班；协助举办系列学习教育活动 200 余场。',
      '参与撰写二十余篇制度文件，其中一项管理办法由校党委印发。',
    ],
    pointsEn: [
      'Selected for the eighth Sichuan Young Marxists Program university cohort and helped organize more than 200 educational events.',
      'Contributed to over twenty institutional documents, including one regulation issued by the university Party committee.',
    ],
  },
  {
    period: '2022.08 - 2026.06',
    role: '班长',
    roleEn: 'Class President',
    organization: '电子科技大学数学科学学院',
    organizationEn: 'School of Mathematical Sciences, UESTC',
    points: [
      '班级 40% 同学保研，70% 同学获省级以上奖项。',
      '带领班级连续三年获校优秀班级和校五四红旗团支部。',
    ],
    pointsEn: [
      'Forty percent of the class secured postgraduate recommendation, and seventy percent received provincial-level or higher awards.',
      'Led the class to earn Outstanding Class and May Fourth Red Flag Youth League Branch honors for three consecutive years.',
    ],
  },
];

const hackathons = [
  {
    award: '北京中关村学院首届 AI Future 黑客马拉松第三名',
    awardEn: '3rd Place · Inaugural AI Future Hackathon, Beijing Zhongguancun Academy',
    title: 'EduBuddy · 儿童教育智能体',
    titleEn: 'EduBuddy · AI Learning Companion for Children',
    summary:
      '面向亲子教育的多模态故事生成平台，结合 GPT-4.1 与 Coze 图像、音频智能体，为儿童生成个性化互动学习内容。',
    summaryEn:
      'A multimodal story-generation platform for family education, combining GPT-4.1 with Coze image and audio agents to create personalized interactive learning experiences for children.',
    href: 'https://github.com/fans1106/EduBuddy',
    video: '/videos/edubuddy-web.mp4',
  },
  {
    award: '微距黑客松 PRO 赛道第二名',
    awardEn: '2nd Place · PRO Track, MicroEngine AI Hackathon',
    title: 'MindCare AI · 像素心灵驿站',
    titleEn: 'MindCare AI · Pixel Mind Haven',
    summary:
      '面向青少年与大学生的 AI 心理自我探索平台，提供多智能体陪伴、实时语音对话、标准化量表与多种循证疗愈工具。',
    summaryEn:
      'An AI-powered self-exploration platform for teenagers and university students, featuring multi-agent support, real-time voice conversations, standardized assessments, and evidence-based wellness tools.',
    href: 'https://github.com/JhengXu/mindcare-ai',
    video: '/videos/mindcare-ai-web.mp4',
  },
  {
    award: '首届贵客松最佳产业奖',
    awardEn: 'Best Industry Award · Inaugural Guike Hackathon',
    title: 'PepperSight · 辣椒 AI 智能分级一体机',
    titleEn: 'PepperSight · AI-Powered Chili Grading System',
    summary:
      '面向贵州干辣椒门店、合作社与中小加工场景，集成 YOLO11 视觉检测、品种识别、质量分级与实时质检看板。',
    summaryEn:
      'A lightweight system for Guizhou chili retailers, cooperatives, and small processors, integrating YOLO11 visual detection, variety recognition, quality grading, and a real-time inspection dashboard.',
    href: 'https://github.com/JhengXu/PepperSight',
    video: '/videos/peppersight-web.mp4',
  },
  {
    award: '爱化身 City OS 产品型 CEO 挑战赛冠军',
    awardEn: 'Top 1 · iAvatar City OS Product CEO Challenge',
    title: 'CityOS Flood · 深圳城市多灾种预测与情景推演',
    titleEn: 'CityOS Flood · Shenzhen Multi-Hazard Forecasting and Scenario Simulation',
    summary:
      '融合降雨、潮位、河网、土壤与台风驱动，以可审计的守恒图状态空间模型支持城市多灾种预测与情景推演。',
    summaryEn:
      'Combines rainfall, tide, river-network, soil, and typhoon drivers in an auditable conservative graph state-space model for urban multi-hazard forecasting and scenario simulation.',
    href: 'https://github.com/JhengXu/cityos-flood',
    image: '/cityos-flood-demo.jpg',
  },
];

function Entry({
  period,
  role,
  roleEn,
  organization,
  organizationEn,
  points,
  pointsEn,
  href,
  linkLabel,
  linkLabelEn,
}: {
  period: string;
  role: string;
  roleEn: string;
  organization: string;
  organizationEn: string;
  points: string[];
  pointsEn: string[];
  href?: string;
  linkLabel?: string;
  linkLabelEn?: string;
}) {
  return (
    <article className="entry">
      <div className="entryDate">{period}</div>
      <div className="entryBody">
        <div className="entryHeading">
          <h3>
            <Localized zh={organization} en={organizationEn} />
          </h3>
          <strong>
            <Localized zh={role} en={roleEn} />
          </strong>
        </div>
        <ul>
          {points.map((point, index) => (
            <li key={point}>
              <Localized zh={point} en={pointsEn[index]} />
            </li>
          ))}
        </ul>
        {href && linkLabel ? (
          <a className="entryResource" href={href} target="_blank" rel="noreferrer">
            <Localized zh={linkLabel} en={linkLabelEn ?? linkLabel} />{' '}
            <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skipLink" href="#content">
        <Localized zh="跳到主要内容" en="Skip to main content" />
      </a>

      <header className="masthead">
        <div className="mastheadInner pageWidth">
          <a className="siteTitle" href="#top" aria-label="徐建华个人主页 / Jianhua Xu homepage">
            <strong>
              <Localized zh="徐建华" en="Jianhua Xu" />
            </strong>
            <span className="siteTitleSubtitle">
              <Localized zh="Jianhua Xu" en="徐建华" />
            </span>
          </a>

          <nav className="primaryNav" aria-label="页面导航 / Page navigation">
            <a href="#about"><Localized zh="关于" en="About" /></a>
            <a href="#education"><Localized zh="教育背景" en="Education" /></a>
            <a href="#research"><Localized zh="科研经历" en="Research" /></a>
            <a className="navWide" href="#hackathons"><Localized zh="黑客松" en="Hackathons" /></a>
            <a className="navWide" href="#experience"><Localized zh="实习经历" en="Experience" /></a>
            <a className="navWide" href="#leadership"><Localized zh="学生工作" en="Leadership" /></a>
            <details className="moreNav">
              <summary aria-label="更多导航 / More navigation">
                <Localized zh="更多" en="More" />
              </summary>
              <div>
                <a className="navNarrowOnly" href="#research"><Localized zh="科研经历" en="Research" /></a>
                <a href="#hackathons"><Localized zh="黑客松" en="Hackathons" /></a>
                <a href="#experience"><Localized zh="实习经历" en="Experience" /></a>
                <a href="#leadership"><Localized zh="学生工作" en="Leadership" /></a>
              </div>
            </details>
          </nav>

          <div className="siteActions">
            <span className="updateTime">
              <Localized zh="更新：2026-08" en="Updated: 2026-08" />
            </span>
            <SiteControls />
          </div>
        </div>
      </header>

      <div className="pageWidth pageLayout" id="content">
        <aside className="authorProfile" aria-label="个人资料 / Profile">
          <Image
            className="authorAvatar"
            src="/profile.jpg"
            width={278}
            height={417}
            sizes="(max-width: 924px) 86px, 176px"
            alt="徐建华 / Jianhua Xu"
            priority
          />
          <div className="authorText">
            <h1><Localized zh="徐建华" en="Jianhua Xu" /></h1>
            <p className="authorNameEn"><Localized zh="Jianhua Xu" en="徐建华" /></p>
            <p className="authorRole">
              <Localized
                zh={<>北京大学数学科学学院<br />大数据专业硕士</>}
                en={<>School of Mathematical Sciences<br />Peking University · M.S. in Big Data</>}
              />
            </p>
            <ul className="authorDetails">
              <li className="authorInterests">
                <Localized
                  zh="复杂网络上的演化博弈 · 世界模型 · AI+教育"
                  en="Evolutionary games on complex networks · World models · AI for education"
                />
              </li>
              <li className="authorEngagement">
                <Engagement />
              </li>
              <li className="authorLinks">
                <span className="authorLinksLabel"><Localized zh="个人主页" en="Profiles" /></span>
                <div>
                  <a href="mailto:jianhuaxu0410@gmail.com">Email</a>
                  <a href="https://github.com/JhengXu" target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=a40KvsgAAAAJ&hl=zh-CN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Scholar <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="https://orcid.org/0009-0009-8410-0271"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ORCID <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="https://www.xiaohongshu.com/user/profile/62b1389f000000001902ad3a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Localized zh="小红书" en="RedNote" /> <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div className="mainContent">
          <section className="section aboutSection" id="about">
            <h2><Localized zh="关于我" en="About Me" /></h2>
            <p>
              <Localized
                zh="我是徐建华，现为北京大学数学科学学院 26 级大数据专业硕士研究生，师从杨超教授"
                en="I am Jianhua Xu, a Class of 2026 master's student in the Big Data program at the School of Mathematical Sciences, Peking University，advised by Professor Chao Yang."
              />
            </p>
            <p>
              <Localized
                zh="本科毕业于电子科技大学数学科学学院，师从陈小杰教授，曾获得学校授予学生的最高荣誉——成电杰出学生。"
                en="I received my bachelor's degree from the School of Mathematical Sciences at the University of Electronic Science and Technology of China, where I was advised by Professor Xiaojie Chen. I was awarded UESTC Outstanding Student, the university's highest honor for students."
              />
            </p>
            <p>
              <Localized
                zh="研究兴趣包括复杂网络上的演化博弈、世界模型与 AI+教育，在多场黑客松比赛中获得过前三名的成绩，希望把严谨的数学视角、真实世界问题与可落地的技术实践连接起来。"
                en="My research interests include evolutionary games on complex networks, world models, and AI for education. Having placed among the top three in several hackathons, I hope to connect rigorous mathematical perspectives, real-world problems, and deployable technical practice."
              />
            </p>
            <blockquote>
              <Localized
                zh="“用数学理解智能，也用实践检验想法。”"
                en="“Understand intelligence through mathematics, and test ideas through practice.”"
              />
            </blockquote>
          </section>

          <section className="section" id="education">
            <h2><Localized zh="教育背景" en="Education" /></h2>
            <div className="educationList">
              <article>
                <time>2026 - 2028</time>
                <div>
                  <h3><Localized zh="北京大学数学科学学院" en="School of Mathematical Sciences, Peking University" /></h3>
                  <p><Localized zh="大数据专业硕士" en="M.S. in Big Data" /></p>
                </div>
              </article>
              <article>
                <time>2022 - 2026</time>
                <div>
                  <h3><Localized zh="电子科技大学数学科学学院" en="School of Mathematical Sciences, UESTC" /></h3>
                  <p><Localized zh="理学学士 · 荣誉学士" en="B.S. · Honors Degree" /></p>
                  <p><Localized zh="加权均分 93.33 · 专业排名 3 / 27" en="Weighted Average 93.33 · Rank 3 / 27" /></p>
                  <p className="educationNote">
                    <Localized
                      zh="国家奖学金 · 成电杰出学生 · 四川省优秀毕业生"
                      en="National Scholarship · UESTC Outstanding Student · Outstanding Graduate of Sichuan Province"
                    />
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="section" id="research">
            <h2><Localized zh="科研经历" en="Research" /></h2>
            <div className="publicationList">
              {research.map((item, index) => (
                <article className="publication" key={item.title}>
                  <span className="publicationNumber">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.title} <span className="externalMark" aria-hidden="true">↗</span>
                      </a>
                    </h3>
                    <p className="publicationMeta">
                      <Localized zh={item.authorship} en={item.authorshipEn} /> ·{' '}
                      {item.venueHref ? (
                        <a href={item.venueHref} target="_blank" rel="noreferrer">
                          <Localized zh={item.venue} en={item.venueEn ?? item.venue} />
                        </a>
                      ) : (
                        <Localized zh={item.venue} en={item.venueEn ?? item.venue} />
                      )}{' '}
                      · {item.period}
                    </p>
                    <p><Localized zh={item.summary} en={item.summaryEn} /></p>
                    {item.feedback && (
                      <p>
                        <Localized zh={item.feedback} en={item.feedbackEn ?? item.feedback} />
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="hackathons">
            <h2><Localized zh="黑客松经历" en="Hackathons" /></h2>
            <div className="hackathonList">
              {hackathons.map((item, index) => (
                <article className="hackathon" key={item.title}>
                  <span className="hackathonNumber">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="hackathonAward">
                      <Localized zh={item.award} en={item.awardEn} />
                    </p>
                    <h3>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <Localized zh={item.title} en={item.titleEn} />{' '}
                        <span className="externalMark" aria-hidden="true">↗</span>
                      </a>
                    </h3>
                    <p><Localized zh={item.summary} en={item.summaryEn} /></p>
                    {item.video ? (
                      <video
                        className="hackathonVideo"
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={`${item.title} / ${item.titleEn} demo video`}
                      >
                        <source src={item.video} type="video/mp4" />
                        您的浏览器暂不支持嵌入式视频播放。 / Your browser does not
                        support embedded video playback.
                      </video>
                    ) : null}
                    {item.image ? (
                      <Image
                        className="hackathonImage"
                        src={item.image}
                        width={2212}
                        height={1280}
                        sizes="(max-width: 760px) 100vw, 760px"
                        alt={`${item.title} 演示界面 / ${item.titleEn} demo interface`}
                      />
                    ) : null}
                    <a
                      className="hackathonResource"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Localized zh="在 GitHub 查看" en="View on GitHub" />{' '}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="experience">
            <h2><Localized zh="实习经历" en="Experience" /></h2>
            <div className="entryList">
              {internships.map((item) => (
                <Entry key={item.organization + item.role} {...item} />
              ))}
            </div>
          </section>

          <section className="section" id="leadership">
            <h2><Localized zh="学生工作" en="Leadership" /></h2>
            <div className="entryList">
              {leadership.map((item) => (
                <Entry key={item.organization + item.role} {...item} />
              ))}
            </div>
          </section>

          <section className="contactSection" id="contact">
            <h2><Localized zh="联系我" en="Contact" /></h2>
            <p>
              <Localized
                zh="欢迎通过邮件交流研究、项目与合作想法。"
                en="Feel free to reach out about research, projects, or collaboration."
              />
            </p>
            <a href="mailto:jianhuaxu0410@gmail.com">
              jianhuaxu0410@gmail.com
            </a>
          </section>

          <footer className="pageFooter">
            <p>© 2026 徐建华 · Jianhua Xu</p>
            <a href="#top"><Localized zh="返回顶部 ↑" en="Back to top ↑" /></a>
          </footer>
        </div>
      </div>
    </main>
  );
}
