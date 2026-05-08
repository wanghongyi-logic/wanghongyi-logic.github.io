const translations = {
  zh: {
    name: "王鸿仪",
    brandField: "Logic · PKU",
    navResearch: "研究",
    navWriting: "成果",
    navContact: "联系",
    eyebrow: "北京大学 · 逻辑学",
    heroTitle: "王鸿仪",
    heroSubtitle: "北京大学逻辑学研究生。关注形式证明、模型论语义与哲学逻辑之间的结构关系。",
    primaryAction: "查看研究方向",
    secondaryAction: "联系我",
    aboutEyebrow: "简介",
    aboutTitle: "学术兴趣从形式系统出发，也回到清晰的论证。",
    aboutBody: "这里将放置个人简介、教育经历与研究计划。当前文本作为占位，用于预览页面气质与排版。",
    factAffiliation: "单位",
    factAffiliationValue: "北京大学哲学系 / 逻辑学方向",
    factStatus: "身份",
    factStatusValue: "研究生",
    factFocus: "关键词",
    factFocusValue: "逻辑学、形式证明、语义、哲学逻辑",
    researchEyebrow: "Research",
    researchTitle: "研究方向",
    researchOneTitle: "模型与语义",
    researchOneBody: "占位：可能放置模型论、可能世界语义、可满足性与有效性等主题。",
    researchTwoTitle: "证明与计算",
    researchTwoBody: "占位：可能放置自然演绎、类型论、证明论语义或形式化验证兴趣。",
    researchThreeTitle: "哲学逻辑",
    researchThreeBody: "占位：可能放置模态逻辑、条件句、知识逻辑与规范逻辑等方向。",
    writingEyebrow: "Writing",
    writingTitle: "论文、报告与笔记",
    paperOneTitle: "论文标题占位",
    paperOneBody: "摘要占位。可放置工作论文、课程论文、会议报告或预印本链接。",
    paperTwoTitle: "读书报告 / 研究笔记占位",
    paperTwoBody: "这里可以列出逻辑学、哲学、数学基础相关的笔记或讲稿。",
    contactEyebrow: "Contact",
    contactTitle: "欢迎交流逻辑学、哲学与形式方法。",
    cvLink: "CV 占位",
    footerName: "© 2026 王鸿仪"
  },
  en: {
    name: "Hongyi Wang",
    brandField: "Logic · PKU",
    navResearch: "Research",
    navWriting: "Writing",
    navContact: "Contact",
    eyebrow: "Peking University · Logic",
    heroTitle: "Hongyi Wang",
    heroSubtitle:
      "Graduate student in Logic at Peking University, interested in formal proof, model-theoretic semantics, and philosophical logic.",
    primaryAction: "Research Interests",
    secondaryAction: "Contact",
    aboutEyebrow: "About",
    aboutTitle: "My work begins with formal systems and returns to clear argument.",
    aboutBody:
      "This area will hold a short biography, education, and research plans. The current text is placeholder copy for testing the visual direction.",
    factAffiliation: "Affiliation",
    factAffiliationValue: "Department of Philosophy / Logic, Peking University",
    factStatus: "Status",
    factStatusValue: "Graduate student",
    factFocus: "Keywords",
    factFocusValue: "Logic, formal proof, semantics, philosophical logic",
    researchEyebrow: "Research",
    researchTitle: "Research Interests",
    researchOneTitle: "Models and Semantics",
    researchOneBody:
      "Placeholder: model theory, possible-world semantics, satisfiability, validity, and related topics.",
    researchTwoTitle: "Proof and Computation",
    researchTwoBody:
      "Placeholder: natural deduction, type theory, proof-theoretic semantics, or formal verification.",
    researchThreeTitle: "Philosophical Logic",
    researchThreeBody:
      "Placeholder: modal logic, conditionals, epistemic logic, deontic logic, and neighboring areas.",
    writingEyebrow: "Writing",
    writingTitle: "Papers, Talks, and Notes",
    paperOneTitle: "Paper Title Placeholder",
    paperOneBody:
      "Abstract placeholder. This can link to working papers, course papers, talks, or preprints.",
    paperTwoTitle: "Reading Report / Research Note Placeholder",
    paperTwoBody:
      "A place for notes or handouts on logic, philosophy, foundations of mathematics, and related work.",
    contactEyebrow: "Contact",
    contactTitle: "I welcome conversations about logic, philosophy, and formal methods.",
    cvLink: "CV Placeholder",
    footerName: "© 2026 Hongyi Wang"
  }
};

const languageToggle = document.querySelector(".language-toggle");
const toggleText = document.querySelector(".toggle-text");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  toggleText.textContent = language === "zh" ? "EN" : "中";
  localStorage.setItem("preferred-language", language);
}

languageToggle.addEventListener("click", () => {
  const currentLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  setLanguage(currentLanguage === "zh" ? "en" : "zh");
});

const savedLanguage = localStorage.getItem("preferred-language");
setLanguage(savedLanguage === "en" ? "en" : "zh");
