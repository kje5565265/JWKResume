// 웹 이력서 렌더링. 내용은 data/resume.js 에서만 가져온다.

(function () {
  const D = window.RESUME;
  const { md, escapeHtml, group } = window.R;
  const $ = (id) => document.getElementById(id);

  function sectionHead(kicker, title, lead) {
    return `<div class="section-head reveal">
      <p class="kicker">${kicker}</p>
      <h2>${title}</h2>
      ${lead ? `<p class="lead">${lead}</p>` : ""}
    </div>`;
  }

  // ── 첫 화면 ──────────────────────────────────────────
  function renderHero() {
    const p = D.profile;
    const contact = [
      `<a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a>`,
      D.meta.github ? `<a href="${escapeHtml(D.meta.github)}" target="_blank" rel="noopener">GitHub</a>` : "",
      `<span>${escapeHtml(p.careerTotal)}</span>`,
    ].filter(Boolean).join('<span class="dot" aria-hidden="true">·</span>');

    $("hero").innerHTML = `
      <div class="hero-grid">
        <div class="hero-text">
          <p class="hero-eyebrow reveal">${escapeHtml(p.title)}</p>
          <h1 class="hero-title reveal">${md(p.headline)}</h1>
          <div class="hero-person reveal">
            <span class="hero-name">${escapeHtml(p.name)}</span>
            <span class="hero-en">${escapeHtml(p.nameEn)}</span>
          </div>
          <p class="hero-contact reveal">${contact}</p>
        </div>
        ${p.caricature ? `<figure class="hero-avatar reveal"><img src="${escapeHtml(p.caricature)}" alt="${escapeHtml(p.name)} 캐리커처" width="280" height="280"></figure>` : ""}
      </div>
      <div class="hero-summary reveal">${D.summary.map((s) => `<p>${md(s)}</p>`).join("")}</div>
      <ul class="stats reveal">
        ${D.stats.map((s) => `<li class="stat"><span class="stat-value">${escapeHtml(s.value)}</span><span class="stat-label">${md(s.label)}</span></li>`).join("")}
      </ul>`;
  }

  // ── 경력 흐름 ────────────────────────────────────────
  function renderJourney() {
    $("journey").innerHTML =
      sectionHead("Journey", "클라이언트 프로그래머에서 CAIO까지", "게임을 직접 만들어 온 경험 위에서, 지금은 AI로 게임을 만드는 방식을 바꾸고 있습니다.") +
      `<ol class="journey">
        ${D.journey.map((j, i) => `
          <li class="journey-step reveal" style="--i:${i}">
            <span class="journey-index">${String(i + 1).padStart(2, "0")}</span>
            <p class="journey-period">${escapeHtml(j.period)}</p>
            <h3>${escapeHtml(j.title)}</h3>
            <p>${md(j.text)}</p>
          </li>`).join("")}
      </ol>`;
  }

  // ── 핵심 성과 ────────────────────────────────────────
  function renderHighlights() {
    $("highlights").innerHTML =
      sectionHead("Highlights", "핵심 성과") +
      `<div class="cards">
        ${D.highlights.map((h, i) => `
          <article class="card reveal" style="--i:${i}">
            <h3>${md(h.label)}</h3>
            <p>${md(h.text)}</p>
          </article>`).join("")}
      </div>`;
  }

  // ── 웹 전용 도식 ─────────────────────────────────────
  function metricsViz() {
    return `<div class="viz viz-metrics">
      <p class="viz-title">규칙은 늘리고, 매번 싣는 양은 줄였습니다</p>
      ${D.web.metrics.map((m) => {
        const pct = Math.max(2, (m.after / m.before) * 100);
        return `<div class="metric">
          <p class="metric-label">${escapeHtml(m.label)}</p>
          <div class="bar-row"><span class="bar-tag">이전</span><span class="bar bar-before" style="--w:100%"></span><span class="bar-num">${escapeHtml(m.beforeText)}</span></div>
          <div class="bar-row"><span class="bar-tag">이후</span><span class="bar bar-after" style="--w:${pct.toFixed(1)}%"></span><span class="bar-num strong">${escapeHtml(m.afterText)}</span></div>
        </div>`;
      }).join("")}
    </div>`;
  }

  function layersViz() {
    return `<div class="viz viz-layers">
      <p class="viz-title">스킬이 안 떠도 사고는 막히는 3계층 구조</p>
      <ol class="layers">
        ${D.web.layers.map((l) => `
          <li class="layer">
            <span class="layer-name">${escapeHtml(l.name)}</span>
            <span class="layer-desc">${escapeHtml(l.desc)}</span>
            <span class="layer-guarantee">${escapeHtml(l.guarantee)}</span>
          </li>`).join("")}
      </ol>
    </div>`;
  }

  function pipelineViz() {
    return `<div class="viz viz-pipeline">
      <p class="viz-title">샘플 애니메이션을 우리 캐릭터 기준으로 재생산</p>
      <ol class="pipeline">
        ${D.web.animPipeline.map((s) => `
          <li class="pipe-step"><span class="pipe-name">${escapeHtml(s.step)}</span><span class="pipe-desc">${escapeHtml(s.desc)}</span></li>`).join("")}
      </ol>
    </div>`;
  }

  function divisionViz() {
    return `<div class="viz viz-division">
      <p class="viz-title">실측 데이터로 정한 AI 애니메이션 분업</p>
      <div class="division">
        ${D.web.animDivision.map((d) => `
          <div class="division-col">
            <span class="division-tool">${escapeHtml(d.tool)}</span>
            <span class="division-role">${escapeHtml(d.role)}</span>
            <span class="division-desc">${escapeHtml(d.desc)}</span>
          </div>`).join("")}
      </div>
    </div>`;
  }

  // 회사별 · 그룹별로 끼워 넣을 도식
  const extras = {
    haeon: { 0: () => metricsViz() + layersViz() },
    dontcry: { 1: () => pipelineViz() + divisionViz() },
  };

  // ── 링크 · 영상 ──────────────────────────────────────
  function youtubeId(url) {
    const m = url.match(/youtu\.be\/([\w-]{6,})/) || url.match(/[?&]v=([\w-]{6,})/);
    return m ? m[1] : null;
  }

  function links(list) {
    if (!list || !list.length) return "";
    return `<div class="media">
      ${list.map((l) => {
        const id = youtubeId(l.url);
        if (id) {
          return `<a class="media-thumb" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">
            <img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt="" loading="lazy" width="320" height="180">
            <span class="media-label"><span class="play" aria-hidden="true">▶</span>${escapeHtml(l.label)}</span>
          </a>`;
        }
        return `<a class="media-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)} ↗</a>`;
      }).join("")}
    </div>`;
  }

  function gallery(shots) {
    if (!shots || !shots.length) return "";
    return `<div class="gallery${shots.length === 1 ? " single" : ""}">
      ${shots.map((s) => `
        <figure class="shot">
          <button type="button" class="shot-btn" data-src="${escapeHtml(s.src)}" data-caption="${escapeHtml(s.caption || "")}" aria-label="${escapeHtml(s.caption || "스크린샷")} 크게 보기">
            <img src="${escapeHtml(s.src)}" alt="${escapeHtml(s.caption || "")}" loading="lazy">
          </button>
          ${s.caption ? `<figcaption>${escapeHtml(s.caption)}</figcaption>` : ""}
        </figure>`).join("")}
    </div>`;
  }

  function careerBody(c) {
    const ex = extras[c.id] || {};
    let h = "";
    if (c.meta && c.meta.length) h += `<p class="career-meta">${c.meta.map(md).join('<span class="dot" aria-hidden="true">·</span>')}</p>`;
    if (c.roleLine) h += `<p class="career-role"><span class="note-label">역할</span>${md(c.roleLine)}</p>`;
    c.groups.forEach((g, i) => {
      h += `<div class="group">${group(g)}${ex[i] ? ex[i]() : ""}</div>`;
    });
    h += gallery(c.shots);
    h += links(c.links);
    return h;
  }

  // ── 경력 ─────────────────────────────────────────────
  function renderCareers() {
    const featured = D.careers.slice(0, 2);
    const rest = D.careers.slice(2);

    $("careers").innerHTML =
      sectionHead("Career", "경력", "최근 두 곳은 펼쳐 두었습니다. 이전 경력은 눌러서 자세히 볼 수 있습니다.") +
      featured.map((c) => `
        <article class="career featured reveal" id="career-${c.id}">
          <header class="career-head">
            <p class="career-period">${escapeHtml(c.period)}</p>
            <h3 class="career-company">${escapeHtml(c.company)}</h3>
            <p class="career-title">${escapeHtml(c.role)}</p>
          </header>
          <div class="career-body">${careerBody(c)}</div>
        </article>`).join("") +
      `<div class="timeline">
        ${rest.map((c) => `
          <details class="career compact reveal" id="career-${c.id}">
            <summary>
              <span class="career-period">${escapeHtml(c.period)}</span>
              <span class="summary-main">
                <span class="career-company">${escapeHtml(c.company)}</span>
                <span class="career-title">${escapeHtml(c.role)}</span>
                <span class="career-brief">${md(c.brief)}</span>
              </span>
              <span class="chev" aria-hidden="true"></span>
            </summary>
            <div class="career-body">${careerBody(c)}</div>
          </details>`).join("")}
      </div>`;
  }

  // ── 기술 ─────────────────────────────────────────────
  function renderSkills() {
    $("skills").innerHTML =
      sectionHead("Skills", "기술") +
      `<div class="skills reveal">
        ${D.skills.map((s) => `
          <div class="skill-row${s.accent ? " accent" : ""}">
            <p class="skill-group">${escapeHtml(s.group)}</p>
            <ul class="chips">${s.items.map((it) => `<li>${escapeHtml(it)}</li>`).join("")}</ul>
          </div>`).join("")}
      </div>`;
  }

  // ── 학력 · 수상 · 기타 ───────────────────────────────
  function renderEducation() {
    $("education").innerHTML =
      sectionHead("Education & Awards", "학력 · 수상") +
      `<div class="edu-grid reveal">
        <div>
          <h3 class="mini-title">학력</h3>
          <ul class="plain">${D.education.map((e) => `<li>${md(e)}</li>`).join("")}</ul>
          <h3 class="mini-title">수상</h3>
          <ul class="plain">${D.awards.map((a) => `<li>${md(a)}</li>`).join("")}</ul>
          <h3 class="mini-title">기타</h3>
          <ul class="plain">${D.etc.map((a) => `<li>${md(a)}</li>`).join("")}</ul>
        </div>
        <div>
          <h3 class="mini-title">학생 시절 프로젝트</h3>
          <ul class="student">
            ${D.studentProjects.map((s) => `
              <li>
                ${s.shot ? gallery([{ src: s.shot, caption: "" }]) : ""}
                <p class="student-title">${md(s.title)}</p>
                <p>${md(s.text)}</p>
                ${s.url ? `<a class="media-link" href="${escapeHtml(s.url)}" target="_blank" rel="noopener">플레이 영상 ↗</a>` : ""}
              </li>`).join("")}
          </ul>
        </div>
      </div>`;
  }

  function renderFooter() {
    const p = D.profile;
    $("footer").innerHTML = `
      <div class="footer-inner">
        <div>
          <p class="footer-name">${escapeHtml(p.name)} <span>${escapeHtml(p.nameEn)}</span></p>
          <p><a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a></p>
        </div>
        <div class="pdf-buttons">
          <a class="btn btn-ghost" href="pdf/KimJaewoo_Resume.pdf" download="김재우_이력서.pdf">이력서 PDF</a>
          <a class="btn btn-solid" href="pdf/KimJaewoo_CareerDetails.pdf" download="김재우_경력기술서.pdf">경력기술서 PDF</a>
        </div>
      </div>
      <p class="footer-updated">최종 수정 ${escapeHtml(D.meta.updated)}</p>`;
  }

  // ── 스크롤 등장 효과 ─────────────────────────────────
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  // ── 스크린샷 크게 보기 ───────────────────────────────
  function setupLightbox() {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.hidden = true;
    box.innerHTML = `<figure><img alt=""><figcaption></figcaption></figure><button type="button" class="lightbox-close" aria-label="닫기">×</button>`;
    document.body.appendChild(box);
    const img = box.querySelector("img");
    const cap = box.querySelector("figcaption");
    let last = null;

    function close() {
      box.hidden = true;
      document.body.classList.remove("no-scroll");
      if (last) last.focus();
    }
    document.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".shot-btn");
      if (btn) {
        last = btn;
        img.src = btn.dataset.src;
        img.alt = btn.dataset.caption;
        cap.textContent = btn.dataset.caption;
        box.hidden = false;
        document.body.classList.add("no-scroll");
        box.querySelector(".lightbox-close").focus();
      } else if (!box.hidden && (ev.target === box || ev.target.closest(".lightbox-close"))) {
        close();
      }
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && !box.hidden) close();
    });
  }

  // 브라우저 인쇄(Ctrl+P) 때는 접힌 경력을 모두 펼친다
  window.addEventListener("beforeprint", () => {
    document.querySelectorAll("details.career").forEach((d) => (d.open = true));
    document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in"));
  });

  renderHero();
  renderJourney();
  renderHighlights();
  renderCareers();
  renderSkills();
  renderEducation();
  renderFooter();
  setupLightbox();
  setupReveal();
})();
