// 이력서 내용의 유일한 원본.
// 웹 페이지(index.html)와 PDF 두 종(print/resume.html, print/career.html)이 전부 이 파일을 읽는다.
// 문장 안의 **굵게** 표시는 렌더링할 때 강조로 바뀐다.
// links 의 display 는 PDF 에 주소 대신 보여줄 문구다 (검색 주소처럼 길고 읽기 어려운 링크용).
// 문체 — 요약은 서술형("~합니다"), 경력 불릿은 개조식("~구축", "~개발").

window.RESUME = {
  meta: {
    updated: "2026.09",
    webUrl: "https://kje5565265.github.io/JWKResume/",
    github: "",   // 공개할 계정이 생기면 채운다
  },

  profile: {
    name: "김재우",
    nameEn: "Hans",
    title: "CAIO · 게임 클라이언트 프로그래머",
    headline: "게임을 11년 만든 개발자가,\n이제는 AI가 게임을 만드는 방식을 설계합니다",
    email: "jaewookim355@gmail.com",
    careerTotal: "총 경력 10년 5개월 (2026.09 기준)",
    photo: "assets/img/photo.jpg",            // PDF 머리에 쓰는 증명사진
    caricature: "assets/img/caricature.jpg",  // 웹 첫 화면에 쓰는 캐리커처
  },

  summary: [
    "게임 개발 **11년차**. Unity와 Unreal로 모바일, PC(Steam), 콘솔(Nintendo Switch), WebGL 게임을 개발했고, **초기 개발부터 라이브와 서비스 종료까지 전체 주기를 세 번** 겪었습니다.",
    "지금은 게임 스타트업 **HAEON STUDIO의 CAIO**로서 AI 에이전트(Claude Code·Codex·Cursor)가 회사의 개발 규칙을 지키게 만드는 사내 인프라를 **직접 설계하고 운영**합니다. 또한 사업(CEO 담당)을 제외한 **회사 내부 운영 전반**을 맡아, 전 프로젝트의 PM·PD로서 일정, BM, 출시 스펙을 결정하고 조직을 관리합니다.",
    "경력 내내 일관되게 해 온 일은 **반복 작업을 없애는 도구를 만드는 것**입니다. 에디터 툴과 빌드 CI에서 시작해, 이제는 AI가 게임 엔진과 개발 공정을 움직이게 만듭니다.",
  ],

  // ── 웹 전용 표현 ─────────────────────────────────────────
  // PDF에는 들어가지 않는다. 수치는 아래 careers 의 사실과 일치해야 한다.
  web: {
    // 전·후 비교 막대 (HAEON AI-SKILLS 성과)
    metrics: [
      { label: "매 대화에 실리는 기본 문서", before: 36486, after: 12278, unit: "bytes", beforeText: "36KB", afterText: "12KB" },
      { label: "아침 브리핑 토큰 (개발 이력 214건 프로젝트)", before: 16000, after: 9000, unit: "tokens", beforeText: "16K", afterText: "약 9K" },
      { label: "누적 검토 문서", before: 202, after: 4.3, unit: "KB", beforeText: "202KB", afterText: "4.3KB" },
    ],
    // AI-SKILLS 3계층 안전 구조
    layers: [
      { name: "훅", desc: "키워드를 감지해 규칙을 강제 주입", guarantee: "도구가 보장 · Claude Code" },
      { name: "상시 문서", desc: "되돌릴 수 없는 사고를 막는 최소 규칙만", guarantee: "도구가 보장 · 3종 공통" },
      { name: "스킬", desc: "작업하는 순간에만 불러오는 세부 절차", guarantee: "AI 판단 · 3종 공통" },
    ],
    // 애니메이션 재생산 파이프라인
    animPipeline: [
      { step: "GASP 샘플", desc: "Epic 공식 로코모션 애니메이션" },
      { step: "데이터 추출", desc: "루트 · 발 위치 · 트래젝토리" },
      { step: "Cascadeur 재구성", desc: "자사 캐릭터 기준으로 재제작" },
      { step: "자사 캐릭터 적용", desc: "UE5 Motion Matching 공급" },
    ],
    // AI 애니메이션 분업 체계
    animDivision: [
      { tool: "NVIDIA Kimodo", role: "블록아웃 · 레퍼런스", desc: "텍스트로 방향별 동작 초안 생성" },
      { tool: "Cascadeur", role: "생산 · 클린업", desc: "접지 · 루프 · 정밀 연출" },
      { tool: "Unreal Engine 5.7", role: "Motion Matching 조립", desc: "실시간 블렌딩 · Foot IK" },
    ],
  },

  // 웹 첫 화면의 숫자 타일
  stats: [
    { value: "11년차", label: "게임 개발" },
    { value: "4 / 4", label: "사내 프로젝트 전체에\nAI 개발 인프라 배포" },
    { value: "⅓", label: "AI 상시 문서 축소\n36KB → 12KB" },
    { value: "3사", label: "Claude · Codex · Cursor\n공통 규칙 체계" },
  ],

  // 웹의 "경력 흐름" 3단계
  journey: [
    {
      period: "2013 — 2024",
      title: "게임을 만들다",
      text: "클라이언트 프로그래머로 모바일·PC 게임 6개 타이틀을 개발했습니다. 콘텐츠와 UI를 만들고, 빌드 CI와 기획·아트팀용 에디터 툴로 팀의 반복 작업을 줄였습니다.",
    },
    {
      period: "2025.12 — 2026.07",
      title: "AI와 일하는 방식을 실험하다",
      text: "돈크라이에서 Git·문서·빌드를 AI 중심으로 재편하고, AI가 언리얼 에디터와 애니메이션 파이프라인을 움직이게 했습니다.",
    },
    {
      period: "2026.08 — 현재",
      title: "실험을 회사의 표준으로",
      text: "HAEON STUDIO에서 그 경험을 3사 AI 공통 규칙 체계로 정리해 사내 전 프로젝트에 배포·운영합니다.",
    },
  ],

  highlights: [
    {
      label: "AI 개발 인프라 단독 구축",
      text: "AI 도구 3종이 공통으로 따르는 규칙 스킬 6종을 설계해 **사내 게임 프로젝트 4개 전체에 배포**. 매 대화에 실리는 기본 문서를 **36KB → 12KB로 ⅓ 축소**",
    },
    {
      label: "AI가 게임 엔진을 직접 제어",
      text: "언리얼 LLM 플러그인을 확장해 Claude·Codex가 **블루프린트, 비헤이비어 트리, 애니메이션·머티리얼 리소스를 직접 조작**하게 함. Epic 샘플 애니메이션을 **자사 캐릭터 기준으로 재생산하는 AI 애니메이션 파이프라인**(Cascadeur·NVIDIA Kimodo)을 단독 R&D",
    },
    {
      label: "희소 플랫폼 빌드",
      text: "공개 자료가 없는 NDA 환경에서 **Nintendo Switch 빌드를 성공**시키고 PC·Switch 멀티플랫폼 가능성 검증",
    },
    {
      label: "조직 리딩",
      text: "HAEON 5인 조직의 내부 운영 총괄 (일정·BM·출시 결정, 구성원 케어). 이전 회사에서는 클라이언트팀 6명 팀장으로 주니어 4명 대상 주간 스터디와 코드 리뷰 운영",
    },
  ],

  careers: [
    {
      id: "haeon",
      company: "HAEON STUDIO",
      role: "CAIO (PM·PD 겸임)",
      period: "2026.08 ~ 현재",
      brief: "AI 개발 인프라 설계·운영, 모바일 게임 4종 PM·PD (일정·BM·출시 결정), 내부 운영 총괄",
      meta: ["모바일 게임 스타트업 (Android · iOS · 토스 인앱)", "구성원 5명"],
      roleLine: "경영진으로서 회사의 AI 도입을 총괄하고, 사업(CEO 담당)을 제외한 회사 내부 운영 전반을 책임. 사내 전 프로젝트의 PM·PD 겸임",
      groups: [
        {
          title: "사내 AI 개발 인프라 \"AI-SKILLS\" — 설계 · 개발 · 운영 (단독)",
          notes: [
            {
              label: "배경",
              text: "직전 회사(돈크라이)에서 AI 실무 도입을 실험하며 얻은 경험을, 여러 프로젝트에 배포 가능한 체계로 정리한 작업. AI 코딩 에이전트가 회사 규칙을 모른 채 작업해 사람·세션마다 결과가 달랐고, 무단 커밋이나 에셋 임의 병합 같은 되돌리기 어려운 사고 위험이 있었음. 특히 기획·디자인 직군은 AI가 한 깃 작업이 맞는지 스스로 검증할 수 없었음. 규칙을 상시 문서 하나에 쌓는 방식은 매 턴 토큰 비용이 붙고, 정작 필요한 규칙이 묻히는 한계가 있었음",
            },
          ],
          items: [
            { label: "3사 AI 공통 규칙 체계 설계", text: "Claude Code·Codex·Cursor가 동일하게 따르는 스킬 6종 (코드 규약, 문서 규약, 깃 절차, 일일 루틴, 작업 기록, 배포 파이프라인)" },
            { label: "계층형 코드 규약", text: "설계 원칙 → 언어 → 엔진 → 플랫폼 → 프로젝트 고유의 5계층으로 분리하고, 저장소 스캔으로 해당 계층만 자동 로드" },
            { label: "실패를 전제로 한 안전 구조", text: "스킬 자동 로드가 어느 도구에서도 보장되지 않는다는 점을 설계 전제로, 규칙을 훅·상시 문서·스킬 3계층에 분산. 스킬이 로드되지 않아도 자동 커밋·이력 삭제·에셋 임의 병합을 차단" },
            { label: "행동 기반 검증 방법론", text: "AI의 자기 보고 대신 테스트 사실을 모르는 신규 세션의 실제 행동으로만 판정. Claude·Codex 교차 검토로 설계 결함 탐지 (작업 기록 스킬: 3회차, 지적 24건 전부 반영)" },
          ],
          resultsTitle: "성과",
          results: [
            "사내 게임 프로젝트 **4개 전체에 배포·운영** — 픽셀비즈: 도트 컬러링 퍼즐, 픽셀비즈: 루프, 아쿠아도쿠, 프로젝트 헌터. Unity 단일 프로젝트와 Unity + ASP.NET Core 모노레포 구조를 모두 지원",
            "AI 도구 **3종 전부 실측 검증**, 단일 저장소에서 전 프로젝트로 동일 버전 배포",
            "상시 문서 **36,486 → 12,278 bytes (⅓)** — Codex에서 문서 뒤쪽 10%가 잘려 전달되지 않던 문제 해소",
            "아침 브리핑 토큰 **16K → 약 9K** (개발 이력 214건 프로젝트 기준)",
            "누적 검토 문서 **202KB → 4.3KB**",
            "사용량 실측으로 **비용의 92%가 입력 재전송**임을 규명하고, 이를 \"상시 적재량 최소화\" 설계 원칙의 근거로 채택",
          ],
        },
        {
          title: "AI·업계 동향 모니터링 에이전트 \"ai-news\" — 개발 · 운영",
          items: [
            { label: "게임 스튜디오 맞춤 모니터링", text: "AI 모델·코딩 에이전트, 애니메이션·2D·3D 리소스 AI, Unity·Unreal, 플랫폼 정책·결제, 스타트업 투자 등 17개 분류 추적" },
            { label: "오보 방지 규칙화", text: "에이전트의 실제 오류 사례(미검색 상태의 \"새 소식 없음\" 보고, 과거 뉴스의 최신 뉴스 오인, 중복 보고)를 실패 사례집으로 축적해 규칙으로 전환" },
            { label: "사내 공유", text: "팀 슬랙 정기 브리핑, 공유 오픈소스의 라이선스(GPL·비상업 조항 등) 검토 포함" },
          ],
        },
        {
          title: "PM · PD — 사내 전 프로젝트 총괄",
          projects: [
            { name: "픽셀비즈: 도트 컬러링 퍼즐", platform: "Android · iOS · 토스 인앱" },
            { name: "픽셀비즈: 루프", platform: "Android · iOS · 토스 인앱" },
            { name: "아쿠아도쿠", platform: "Android · iOS · 토스 인앱" },
            { name: "프로젝트 헌터 (가제)", platform: "Android · iOS · 토스 인앱" },
          ],
          items: [
            { label: "일정 관리 · 의사결정", text: "전 프로젝트의 개발 일정 관리와 주요 의사결정" },
            { label: "콘텐츠 방향성", text: "게임별 콘텐츠 방향 결정" },
            { label: "BM 설계", text: "프로젝트별 수익 모델(BM) 결정" },
            { label: "검수 · 출시", text: "빌드 검수와 출시 스펙 결정 (Android · iOS · 토스 인앱)" },
            { label: "조직 관리", text: "구성원 면담과 멘탈 케어 등 팀 운영" },
          ],
        },
      ],
    },

    {
      id: "dontcry",
      company: "돈크라이",
      role: "클라이언트 프로그래머 (초기 멤버)",
      period: "2025.12 ~ 2026.07",
      brief: "UE5 하드코어 액션. AI 개발 인프라 결정, Unreal MCP, AI 로코모션 자동화",
      meta: ["세키로류 3인칭 하드코어 액션 (Steam·PC·콘솔 목표)", "Unreal Engine 5.7 (C++ · GAS · Motion Matching · MetaHuman)", "팀 4명"],
      roleLine: "초기 멤버로 AI를 개발 공정 전반에 도입하며 AI와 일하는 방식을 실험·검증하고, 회사 개발 인프라를 결정",
      groups: [
        {
          title: "AI 개발 인프라",
          items: [
            { label: "AI 협업 방식 실험 · 개발 인프라 결정", text: "AI를 적극 도입한 개발 환경에서 실무에 효과적인 AI 활용 방식을 직접 실험. 그 결과를 바탕으로 Git 운영을 AI에 전면 일임하고, 사내 문서를 AI가 읽고 쓰기 쉬운 Markdown으로 통일하는 등 회사 개발 인프라를 결정" },
            { label: "Claude Code 스킬 체계", text: "코드 아키텍처, 빌드 절차, GAS, 테이블, 비헤이비어 트리, 커밋 규칙 등 28종의 스킬로 개발 규칙을 AI가 따르도록 구성. 추측 수정을 금지하는 Log-First 디버깅, 구현 전 사양서 갭 검사 절차 포함" },
            { label: "Claude ↔ Codex 교차 검토 사이클", text: "두 AI가 한 문서·코드를 번갈아 검토·수정하며 완성도를 끌어올리는 자동화 커맨드" },
            { label: "게임 기획 에이전트 파이프라인", text: "시나리오·콘텐츠·레벨·테크니컬 디자이너·Fun QA 5개 에이전트를 조율하는 기획 파이프라인" },
            { label: "Unreal MCP 확장 개발", text: "기존 언리얼 LLM 플러그인을 기반으로 부족한 기능을 AI로 확장 개발해, Claude·Codex가 자연어 명령으로 언리얼 에디터를 제어하도록 연결. 블루프린트, 비헤이비어 트리, 텍스처·애니메이션·머티리얼 등 리소스 작업 전반 지원" },
            { label: "UE5 빌드 자동화 대시보드", text: "빌드 전용 PC 없이 각 개발자 PC에서 빌드하도록 Jenkins 대신 Python·Flask로 경량 구축. Git Pull → Compile → Cook → Package 단계 시각화, 실시간 로그, **빌드 에러 자동 분류와 AI 수정 프롬프트 생성**, Slack 알림" },
          ],
        },
        {
          title: "AI 애니메이션 자동화 R&D",
          notes: [
            { label: "목표", text: "Epic 샘플(GASP)의 로코모션 애니메이션을 **자사 캐릭터 기준으로 재생산**해, 전투용 8방향 로코모션 세트를 AI로 자동 생산하고 UE5 Motion Matching에 공급" },
            { label: "진행", text: "R&D 전 과정 단독 수행. Cascadeur로 재생산 파이프라인을 먼저 구축·검증하고, 전환 구간의 한계를 보완하려 NVIDIA Kimodo를 추가 도입" },
          ],
          items: [
            { label: "샘플 애니메이션 재생산 파이프라인", text: "UE에서 GASP 샘플 애니메이션의 루트·발 위치·트래젝토리 등 전체 데이터를 추출 → Cascadeur에서 자사 캐릭터 기준으로 루트와 발 위치를 재구성해 재제작 → 다시 추출해 게임 캐릭터에 적용하는 왕복 파이프라인 구축" },
            { label: "AI 보간 방식 확립", text: "핵심 포즈만 배치하고 Cascadeur AI Inbetweening이 사이 동작을 채우는 방식을 채택해, 기존 수작업 곡선(Bezier) 중심 제작을 대체. **좌·우 90°, 후방 180° 방향 전환 생성에 성공**" },
            { label: "자동화 도구", text: "Cascadeur Python API 기반 자동화 스크립트 35종 (데이터 추출, 트래젝토리 주입, 루프 추출, 2-본 IK, UE ↔ Cascadeur 왕복)" },
            { label: "전환 구간 보완 — NVIDIA Kimodo 도입", text: "뛰다가 갑자기 걷거나, 걷다가 뛰면서 옆으로 방향을 트는 등 **동작 상태가 바뀌는 전환 구간**의 어색함을 보완하기 위해 추가 R&D. 공개 약 4개월 만에 텍스트 → 모션 생성 → FBX 변환 → MetaHuman 캐릭터 IK 리타겟까지 UE5.7 파이프라인을 처음으로 실증 (RTX 5070 Ti 16GB에서 텍스트 인코더를 CPU로 분리해 구동)" },
            { label: "데이터로 방향 결정", text: "\"제약을 강하게 걸수록 품질이 오른다\"는 기존 가설이 실측으로 반증됨 (**손·발 떨림 10배 악화**). 이를 근거로 **Kimodo = 블록아웃·레퍼런스 / Cascadeur = 생산·클린업 / UE = Motion Matching 조립**의 분업 체계를 확립" },
            { label: "R&D 운영 방식", text: "성공·실패 사례집과 해결책 레지스트리를 누적하고, 검증 전 가정은 [가설]로 구분해 기록. 정량 측정 전에는 대량 생산 채택을 확정하지 않는 게이트 운영" },
          ],
        },
        {
          title: "AI 도구 도입",
          items: [
            { label: "", text: "Claude Code, Codex, Google Antigravity를 실제 개발 공정에 적용" },
          ],
        },
      ],
    },

    {
      id: "freelance",
      company: "프리랜서",
      role: "외주 개발",
      period: "2024.09 ~ 2025.11",
      brief: "배틀그라운드류 게임 아웃게임 콘텐츠, 스타트업 UI 매니징 시스템",
      meta: [],
      groups: [
        {
          items: [
            { label: "배틀그라운드류 게임 아웃게임 콘텐츠 개발", text: "" },
            { label: "신규 창업사 UI 매니징 시스템 개발", text: "" },
          ],
        },
      ],
    },

    {
      id: "wemadeblock",
      shots: [{ src: "assets/img/shots/wemadeblock-1.jpg", caption: "멀티플레이 홀덤" }, { src: "assets/img/shots/wemadeblock-2.jpg", caption: "MMO 월드" }],
      company: "위매드블록",
      role: "클라이언트팀 팀장",
      period: "2023.09 ~ 2024.09",
      project: "Another World",
      brief: "\"Another World\" — 팀 리딩, 클라이언트 기반 시스템, WebGL·텔레그램",
      meta: ["\"Another World\" (모바일 메타버스 MMORPG)", "Unity", "클라이언트 6명", "알파 ~ 홀더 대상 QA"],
      roleLine: "클라이언트팀 팀장으로 팀 운영과 클라이언트 개발 전반 총괄",
      groups: [
        {
          items: [
            { label: "팀 운영", text: "6명 팀의 역량 기반 업무 분담·일정 관리, 코드 리뷰·리팩토링 주도, 주니어 4명 대상 엔진·C# 주간 스터디 운영" },
            { label: "클라이언트 기반 시스템 설계", text: "UI 프레임워크(UIManager·Window·Popup·공통 컴포넌트), Addressables 리소스 체계, 사운드·이펙트·리소스 매니저" },
            { label: "MMO 월드 상호작용 시스템", text: "플레이어·오브젝트와 MMO 월드 간 상호작용 기반 개발" },
            { label: "빌드 파이프라인", text: "프로젝트 전체 빌드 관리, Jenkins CI 구축" },
            { label: "멀티플레이 홀덤", text: "3~8인 동시 플레이 소셜 카지노 콘텐츠 개발" },
            { label: "텔레그램 웹게임 R&D", text: "Unity WebGL 빌드, 텔레그램 봇 배포, TON 체인 인게임 재화 연동 (프로젝트 중단으로 내부 테스트 단계까지 진행)" },
            { label: "SDK · 최적화", text: "NHN Cloud Gamebase 연동, 코드·그래픽 리소스·게임 최적화" },
          ],
        },
      ],
      links: [{ label: "플레이 영상", url: "https://x.com/i/status/1787995835801759965" }],
    },

    {
      id: "pressa",
      shots: [{ src: "assets/img/shots/pressa-1.jpg", caption: "인게임" }, { src: "assets/img/shots/pressa-2.jpg", caption: "로비" }],
      company: "데브시스터즈 PressA",
      role: "클라이언트 프로그래머",
      period: "2022.03 ~ 2023.04",
      brief: "\"Oven Smash\" — Switch R&D, Steam 결제, 빌드 CI",
      meta: ["\"Oven Smash\" (Steam PC 슈팅, Dedicated Server)", "Unity", "클라이언트 5명", "알파 ~ Steam QA"],
      roleLine: "멀티플랫폼 확장(Switch·Steam), 빌드 자동화, 타 직군 지원 툴 담당",
      groups: [
        {
          items: [
            { label: "Nintendo Switch R&D", text: "개발킷·NDA 환경으로 외부 자료가 전무한 상황에서 공식 문서만으로 빌드 성공. 최적화를 거쳐 PC·Switch 멀티플랫폼 실현 가능성 검증" },
            { label: "Steam 결제 연동", text: "Steam Overlay 기반 인앱 결제 탑재, 상품 변경을 게임 내에서 즉시 확인하는 관리 툴 제공" },
            { label: "빌드 자동화", text: "Jenkins·Python으로 클라이언트(PC) 빌드와 Dedicated Server 빌드 CI 구축" },
            { label: "아트팀 지원 툴", text: "이펙트·사운드·애니메이션 리소스를 실제 게임 화면에서 바로 검증하는 Unity 에디터 툴 개발" },
            { label: "콘텐츠", text: "아웃게임(상점·시즌패스·튜토리얼), 인게임(조작 가이드 시스템)" },
          ],
        },
      ],
      links: [{ label: "Steam 페이지", url: "https://store.steampowered.com/app/1420800/" }],
    },

    {
      id: "linegames",
      shots: [{ src: "assets/img/shots/linegames-1.jpg", caption: "인게임 전투" }, { src: "assets/img/shots/linegames-2.jpg", caption: "캐릭터 UI" }],
      company: "라인게임즈",
      role: "클라이언트 프로그래머",
      period: "2020.11 ~ 2021.07",
      brief: "\"이카루스 이터널\" — 물리 퍼즐 던전, 미니게임",
      meta: ["\"이카루스 이터널\" (모바일 MMORPG)", "Unity", "클라이언트 9명", "개발 중 합류 ~ 라이브"],
      roleLine: "물리 기반 인게임 콘텐츠와 미니게임 전담",
      groups: [
        {
          items: [
            { label: "물리 퍼즐 던전 '유적' 전담 개발", text: "젤다의 전설 '사원'형 콘텐츠. 재질(철·나무·돌) × 속성 공격(물·불·전기) 상호작용 퍼즐, 함정·열쇠·문 기믹, 보스전과 숨겨진 보상까지 전체 구현 (Unity Rigidbody)" },
            { label: "미니게임 5종 이상", text: "설치 화면 공 튕기기, 프롤로그 3인칭 슈팅, 양궁, 수중 복어, NPC 상호작용 요리 퀘스트" },
            { label: "라이브 안정화", text: "출시 후 메모리 프로파일링으로 장시간 실행 시 메모리 누수 진단·개선" },
          ],
        },
      ],
      links: [
        { label: "유적 콘텐츠 영상", url: "https://www.youtube.com/results?search_query=%EC%9D%B4%EC%B9%B4%EB%A3%A8%EC%8A%A4+%EC%9D%B4%ED%84%B0%EB%84%90+%EC%9C%A0%EC%A0%81", display: "YouTube에서 \"이카루스 이터널 유적\" 검색" },
      ],
    },

    {
      id: "bluestone",
      shots: [{ src: "assets/img/shots/bluestone-1.jpg", caption: "스토어 · 타이틀" }, { src: "assets/img/shots/bluestone-2.jpg", caption: "기획팀 스토리 연출 툴" }],
      company: "블루스톤소프트",
      role: "클라이언트 프로그래머",
      period: "2017.03 ~ 2020.07",
      brief: "\"SoulArk\" — 전주기 3년, 아웃게임 전반, 기획 툴",
      meta: ["\"SoulArk\" (모바일 수집형 액션 RPG)", "Unity", "클라이언트 3명", "초기 개발 ~ 서비스 종료"],
      roleLine: "3인 클라이언트팀에서 아웃게임 콘텐츠 전반과 iOS 담당, 3년 이상 전주기 참여",
      groups: [
        {
          items: [
            { label: "전주기 개발", text: "초기 개발부터 라이브 운영, 서비스 종료까지 3년 이상 참여" },
            { label: "아웃게임 콘텐츠 전반", text: "인벤토리, 우편, 채팅, 상점, 개인상점(좌판), 길드전, 캐릭터 강화, 스테이지, 미션, 친구, 마을" },
            { label: "기획팀 스토리 연출 툴", text: "2D 캐릭터 대화 연출을 기획자가 직접 제작하는 에디터 툴 개발 (Bolt 에셋 구조를 참고해 필요한 기능만으로 경량화)" },
            { label: "iOS 빌드 · SDK", text: "라이브 중 담당 인수. AppsFlyer, IGAWorks, Facebook·Google·Apple 로그인 연동" },
          ],
        },
      ],
      links: [{ label: "블루스톤소프트 YouTube 채널", url: "https://www.youtube.com/@bluestonesoft3660" }],
    },

    {
      id: "corecreative",
      shots: [{ src: "assets/img/shots/corecreative-1.jpg", caption: "타이틀 · 인게임" }],
      company: "코어 크리에이티브",
      role: "클라이언트 프로그래머",
      period: "2014.12 ~ 2016.09",
      brief: "\"ONE for Kakao\" (UE3) — C++ UI 아키텍처",
      meta: ["\"ONE for Kakao\" (모바일 액션 RPG)", "Unreal Engine 3 (C++·UnrealScript)", "클라이언트 4명", "초기 개발 ~ 라이브"],
      roleLine: "UE3 기반 UI 아키텍처 설계와 콘텐츠 개발",
      groups: [
        {
          items: [
            { label: "UI 아키텍처 설계", text: "Sprite·Texture·Label 등 UI 최소 단위를 C++로 구현해 HUD 기반 UI 시스템 구축" },
            { label: "UI 애니메이션", text: "슬라이더·스크롤뷰·게이지 바 등 Tweener 기반 UI 개발" },
            { label: "콘텐츠 전반", text: "상점, 튜토리얼, 퀘스트, 길드, 인벤토리, 미션, 우편, 친구" },
            { label: "Kakao 플랫폼", text: "Kakao SDK 연동, 소셜 콘텐츠 개발 및 검수 대응" },
          ],
        },
      ],
      links: [{ label: "플레이 영상", url: "https://youtu.be/eGcGmCr4LbQ" }],
    },

    {
      id: "wemade",
      shots: [{ src: "assets/img/shots/wemade-1.jpg", caption: "인게임" }],
      company: "위메이드 엔터테인먼트",
      role: "클라이언트 프로그래머",
      period: "2013.09 ~ 2014.12",
      brief: "\"Dragon Hunter for Kakao\" — 콘텐츠, Kakao 연동",
      meta: ["\"Dragon Hunter for Kakao\" (모바일 수집형 RPG)", "Unity", "클라이언트 4명", "초기 개발 ~ 라이브"],
      roleLine: "콘텐츠 개발, Kakao 연동, 엔진·UI 개발 환경 관리",
      groups: [
        {
          items: [
            { label: "콘텐츠 전반", text: "캐릭터 인벤토리, 채팅, 튜토리얼, 스테이지, 상점, 미션, 우편, 친구" },
            { label: "Kakao 플랫폼", text: "Kakao SDK 연동, 소셜 콘텐츠 개발 및 검수 대응" },
            { label: "엔진 · UI 환경 관리", text: "Unity 버전 업데이트·관리(릴리즈 노트 검토, 업데이트 테스트), NGUI 버그 수정·최적화, UI 작업자 개발 환경 개선" },
          ],
        },
      ],
      links: [
        { label: "튜토리얼 영상", url: "https://youtu.be/YnhEF48NWSQ" },
        { label: "플레이 영상", url: "https://youtu.be/NLFp8WaO_4U" },
      ],
    },
  ],

  skills: [
    { group: "AI", items: ["Claude Code", "Codex", "Cursor", "Google Antigravity", "MCP 플러그인 확장", "에이전트 스킬 설계", "Cascadeur", "NVIDIA Kimodo"] },
    { group: "엔진", items: ["Unity (7년+)", "Unreal Engine 5.7", "Unreal Engine 3"] },
    { group: "언어", items: ["C#", "C++", "Python", "UnrealScript"] },
    { group: "빌드", items: ["Jenkins CI", "Addressables", "Android", "iOS", "WebGL", "Steam", "Nintendo Switch", "Dedicated Server"] },
    { group: "SDK", items: ["Steam", "NHN Cloud Gamebase", "Kakao", "Firebase", "AppsFlyer", "Apple·Google·Facebook 로그인"] },
    { group: "기타", items: ["UniTask", "UniRx", "Unity EditorWindow 툴 개발"] },
  ],

  education: [
    "동서대학교 게임전공 졸업 (2014.02) · 학점 4.2/4.5 · **디지털콘텐츠학부 수석 졸업**",
  ],

  awards: [
    "2012 글로벌 게임제작 경진대회 **은상** — \"대굴대굴\"",
    "2013 글로벌 게임제작 경진대회 **장려상** — \"Dungeon Gate\"",
  ],

  studentProjects: [
    { title: "2013 글로벌 게임제작 경진대회 장려상 — \"Dungeon Gate\"", text: "Android 3D 디펜스. FSM 캐릭터 AI, NGUI·iTween UI, 씬 관리 시스템", shot: "assets/img/shots/student-dungeongate.jpg" },
    { title: "2012 글로벌 게임제작 경진대회 은상 — \"대굴대굴\"", text: "PC·모바일 물리 아케이드. 프로젝트 총괄·클라이언트, 키보드·자이로·조이스틱 입력, Rigidbody R&D", shot: "assets/img/shots/student-daegul.jpg" },
    { title: "(주)대교 교육용 게임 2종 (2012)", text: "\"도형을 전송하라\", \"약수와 배수\" 1인 개발, 교재 부록 CD 수록", shot: "assets/img/shots/student-daekyo.jpg" },
  ],

  etc: [
    "병역: 해군 병장 만기 전역 (2009.03 ~ 2011.03)",
    "자격: 정보처리기능사",
  ],
};
