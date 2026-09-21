// 웹 페이지와 인쇄 페이지가 함께 쓰는 렌더링 도우미.

(function () {
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // "**굵게**" → <strong>, 줄바꿈 → <br>
  function md(s) {
    return escapeHtml(s || "")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }

  // 경력 불릿 한 줄: "라벨 — 설명"
  function item(it) {
    if (it.label && it.text) {
      return `<li><span class="item-label">${md(it.label)}</span> — ${md(it.text)}</li>`;
    }
    return `<li>${it.label ? `<span class="item-label">${md(it.label)}</span>` : md(it.text)}</li>`;
  }

  function group(g) {
    let h = "";
    if (g.title) h += `<h4 class="group-title">${md(g.title)}</h4>`;
    if (g.notes) {
      h += g.notes.map((n) => `<p class="group-note"><span class="note-label">${md(n.label)}</span>${md(n.text)}</p>`).join("");
    }
    if (g.projects) {
      h += `<ul class="project-list">${g.projects
        .map((p) => `<li><span class="project-name">${md(p.name)}</span><span class="project-platform">${md(p.platform)}</span></li>`)
        .join("")}</ul>`;
    }
    if (g.items) h += `<ul class="items">${g.items.map(item).join("")}</ul>`;
    if (g.results) {
      h += `<p class="results-title">${md(g.resultsTitle || "성과")}</p>`;
      h += `<ul class="items results">${g.results.map((r) => `<li>${md(r)}</li>`).join("")}</ul>`;
    }
    return h;
  }

  // 인쇄 페이지 전용: ?private 이면 로컬 전용 연락처(data/private.js)를 불러온 뒤 렌더링한다.
  // private.js 는 git 에 올리지 않는다.
  function withPrivate(basePath, done) {
    if (!new URLSearchParams(location.search).has("private")) {
      done(null);
      return;
    }
    const s = document.createElement("script");
    s.src = basePath + "data/private.js";
    s.onload = () => done(window.RESUME_PRIVATE || null);
    s.onerror = () => done(null);
    document.head.appendChild(s);
  }

  window.R = { escapeHtml, md, item, group, withPrivate };
})();
