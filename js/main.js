const linkedInIcon = `
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.5H5.67V18h2.67V9.5zM7 5.7A1.55 1.55 0 1 0 7 8.8a1.55 1.55 0 0 0 0-3.1zM18.34 18v-4.66c0-2.5-1.34-3.66-3.12-3.66-1.44 0-2.08.79-2.44 1.35V9.5h-2.67V18h2.67v-4.5c0-1.18.22-2.32 1.68-2.32 1.44 0 1.46 1.35 1.46 2.4V18h2.42z"/>
  </svg>`;

const githubIcon = `
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>`;

const portfolioIcon = `
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 6h16v2H4zm0 4h16v10H4zm2 2v6h12v-6H6z"/>
  </svg>`;

const members = [
  {
    id: "steve",
    name: "Steve Saji Philip",
    shortName: "Steve Philip",
    role: "Cybersecurity Engineer",
    accent: "#5853c8",
    bio: "Keeps PathwayIQ safe and trustworthy through risk reviews and security thinking.",
    skills: ["Cybersecurity", "Risk Management", "PwC"],
    linkedIn: "https://www.linkedin.com/in/steve-saji-philip/"
  },
  {
    id: "bill",
    name: "Bill Lee",
    alias: "Lee Kai Chun",
    shortName: "Bill Lee",
    role: "AI Engineer",
    accent: "#8878df",
    bio: "Brings intelligence into the product with LLM integrations and student-friendly guidance.",
    skills: ["AI Integration", "LLM", "Python"],
    linkedIn: "https://www.linkedin.com/in/bill-lee-ai/?locale=en-US"
  },
  {
    id: "prangige",
    name: "Prangige Peiris",
    alias: "Shavinthi",
    shortName: "Prangige Peiris",
    role: "Data Science Engineer",
    accent: "#ba89c9",
    bio: "Turns complex pathway data into clear stories, models and useful visualisations.",
    skills: ["Data Analytics", "Visualisation", "Power BI"],
    linkedIn: "https://www.linkedin.com/in/shavinthi-peiris-003b02214f/"
  },
  {
    id: "nora",
    name: "Nora Jin",
    alias: "NuoJin / Ruby",
    shortName: "Nora Jin",
    role: "Full-Stack Developer",
    accent: "#e88b91",
    bio: "Builds across APIs, cloud infrastructure and interfaces to keep the system connected.",
    skills: ["System Integration", "AWS", "Python / Jira / Java"],
    linkedIn: "https://www.linkedin.com/in/norajin-it/",
    github: "https://github.com/njin0009",
    portfolio: "https://norajinreferralportfolio.site/"
  },
  {
    id: "yanqing",
    name: "Yanqing Zhu",
    alias: "Sela",
    shortName: "Yanqing Zhu",
    role: "Project Coordinator",
    accent: "#e35b5d",
    bio: "Keeps delivery moving through planning, business analysis and team coordination.",
    skills: ["Project Coordination", "Business Analysis", "Leankit"],
    linkedIn: "https://www.linkedin.com/in/yanqing-zhu-166388320/"
  }
];

const portraits = document.querySelector("#portraits");
const teamGrid = document.querySelector("#team-grid");

portraits.innerHTML = members.map((member) => `
  <a class="portrait" href="#${member.id}" style="--accent:${member.accent}">
    <div class="portrait__image">
      <img src="assets/p-${member.id}.png" alt="${member.name}">
    </div>
    <strong>${member.shortName}</strong>
    <span>${member.role}</span>
  </a>
`).join("");

teamGrid.innerHTML = members.map((member, index) => `
  <article class="member" id="${member.id}" style="--accent:${member.accent}">
    <div class="member__profile">
      <div class="member__photo">
        <img src="assets/p-${member.id}.png" alt="${member.name}">
      </div>
      <p class="member__count">0${index + 1} / 05</p>
    </div>
    <div>
      <h3>${member.name}</h3>
      ${member.alias ? `<p class="member__alias">a.k.a. ${member.alias}</p>` : ""}
      <span class="member__role">${member.role}</span>
      <p class="member__bio">${member.bio}</p>
      <div class="member__skills">
        ${member.skills.map((skill) => `<span>${skill}</span>`).join("")}
      </div>
      <div class="member__links">
        <a class="member__link" href="${member.linkedIn}" target="_blank" rel="noopener noreferrer">
          ${linkedInIcon} Connect on LinkedIn
        </a>
        ${member.github ? `<a class="member__link" href="${member.github}" target="_blank" rel="noopener noreferrer">${githubIcon} GitHub</a>` : ""}
        ${member.portfolio ? `<a class="member__link" href="${member.portfolio}" target="_blank" rel="noopener noreferrer">${portfolioIcon} Portfolio</a>` : ""}
      </div>
    </div>
  </article>
`).join("");

const journeyLikeKey = "pathwayiq-journey-likes";
const journeyLikedKey = "pathwayiq-liked-pages";
const journeyLikes = JSON.parse(localStorage.getItem(journeyLikeKey) || "{}");
const journeyLikedPages = new Set(JSON.parse(localStorage.getItem(journeyLikedKey) || "[]"));
const journeyButtons = document.querySelectorAll(".journey-like");

const updateJourneyLikes = () => {
  let highestCount = 0;
  let popularPages = [];

  journeyButtons.forEach((button) => {
    const page = button.dataset.likePage;
    const count = journeyLikes[page] || 0;
    const isLiked = journeyLikedPages.has(page);
    const card = button.closest(".journey-card");

    button.querySelector("b").textContent = count;
    button.querySelector("span").textContent = isLiked ? "♥" : "♡";
    button.classList.toggle("is-liked", isLiked);
    button.setAttribute("aria-pressed", String(isLiked));
    card.classList.remove("is-popular");

    if (count > highestCount) {
      highestCount = count;
      popularPages = [page];
    } else if (count === highestCount && count > 0) {
      popularPages.push(page);
    }
  });

  const popularPageLabel = document.querySelector("#popular-page");
  popularPageLabel.textContent = highestCount > 0
    ? `${popularPages.join(" + ")} · ${highestCount} like${highestCount === 1 ? "" : "s"}`
    : "Waiting for votes";

  if (highestCount > 0) {
    popularPages.forEach((page) => {
      document.querySelector(`.journey-card[data-page="${page}"]`).classList.add("is-popular");
    });
  }
};

journeyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const page = button.dataset.likePage;

    if (journeyLikedPages.has(page)) {
      journeyLikes[page] = Math.max(0, (journeyLikes[page] || 0) - 1);
      journeyLikedPages.delete(page);
    } else {
      journeyLikes[page] = (journeyLikes[page] || 0) + 1;
      journeyLikedPages.add(page);
    }

    localStorage.setItem(journeyLikeKey, JSON.stringify(journeyLikes));
    localStorage.setItem(journeyLikedKey, JSON.stringify([...journeyLikedPages]));
    updateJourneyLikes();
  });
});

updateJourneyLikes();

const roadmapSaveKey = "pathwayiq-saved-roadmap-features";
const savedRoadmapFeatures = new Set(JSON.parse(localStorage.getItem(roadmapSaveKey) || "[]"));
const roadmapSaveButtons = document.querySelectorAll(".roadmap-save");

const updateRoadmapSaves = () => {
  roadmapSaveButtons.forEach((button) => {
    const isSaved = savedRoadmapFeatures.has(button.dataset.saveFeature);
    button.textContent = isSaved ? "♥" : "♡";
    button.classList.toggle("is-saved", isSaved);
    button.setAttribute("aria-pressed", String(isSaved));
  });
};

roadmapSaveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const feature = button.dataset.saveFeature;

    if (savedRoadmapFeatures.has(feature)) {
      savedRoadmapFeatures.delete(feature);
    } else {
      savedRoadmapFeatures.add(feature);
    }

    localStorage.setItem(roadmapSaveKey, JSON.stringify([...savedRoadmapFeatures]));
    updateRoadmapSaves();
  });
});

updateRoadmapSaves();
