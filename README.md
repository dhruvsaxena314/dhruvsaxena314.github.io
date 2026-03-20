<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --max-width: 1060px;
      --gap: 28px;
      --radius: 4px;
      --ink: #0a0a0a;
      --paper: #f5f0e8;
      --yellow: #f5d84b;
      --muted: #5a5550;
      --border: 2px solid #0a0a0a;
      --menu-h: 64px;
      --shadow: 5px 5px 0px var(--ink);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    ::selection { background: var(--yellow); color: var(--ink); }

    body {
      font-family: 'Outfit', sans-serif;
      background: var(--paper);
      color: var(--ink);
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
      line-height: 1.6;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Ccircle cx='30' cy='30' r='.5' fill='%230a0a0a' opacity='.07'/%3E%3C/svg%3E");
    }

    /* ===== CRASH SCREEN ===== */
    #crashScreen {
      display: none; flex-direction: column; align-items: center; justify-content: center;
      position: fixed; inset: 0; background: var(--paper); z-index: 9999; padding: 40px; text-align: center;
    }

    /* ===== TOP NAV ===== */
    #miniMenu {
      position: fixed; top: 0; left: 0; right: 0; height: var(--menu-h);
      display: flex; align-items: center; justify-content: center;
      gap: 0; background: var(--ink); z-index: 100;
      overflow-x: auto; white-space: nowrap;
      border-bottom: 3px solid var(--yellow);
    }
    #miniMenu a {
      text-decoration: none; color: var(--paper); font-family: 'DM Mono', monospace;
      font-weight: 500; font-size: 11px; cursor: pointer; padding: 22px 18px;
      text-transform: uppercase; letter-spacing: 2px; position: relative;
      transition: color 0.2s, background 0.2s;
    }
    #miniMenu a::after {
      content: ''; position: absolute; bottom: 0; left: 50%; right: 50%;
      height: 3px; background: var(--yellow); transition: left 0.25s, right 0.25s;
    }
    #miniMenu a:hover { color: var(--yellow); }
    #miniMenu a:hover::after { left: 0; right: 0; }

    /* ===== HEADER BANNER ===== */
    header {
      margin-top: var(--menu-h); height: 220px; overflow: hidden;
      position: relative; border-bottom: 3px solid var(--ink);
    }
    header img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(20%); }
    header::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to right, rgba(10,10,10,0.55) 0%, transparent 60%);
    }
    .header-tagline {
      position: absolute; bottom: 24px; left: 32px; z-index: 2;
      font-family: 'Bebas Neue', sans-serif; font-size: 52px; color: #fff;
      letter-spacing: 3px; line-height: 1; text-shadow: 3px 3px 0 rgba(0,0,0,0.5);
    }
    .header-tagline span { color: var(--yellow); }

    /* ===== LAYOUT ===== */
    .wrap {
      max-width: var(--max-width); margin: 40px auto; padding: 0 28px;
    }

    /* ===== STAGGERED LOAD ANIMATION ===== */
    .view-section > * {
      opacity: 0; transform: translateY(24px);
      animation: none;
    }
    .view-section.active > * {
      animation: riseUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    .view-section.active > *:nth-child(1) { animation-delay: 0.05s; }
    .view-section.active > *:nth-child(2) { animation-delay: 0.12s; }
    .view-section.active > *:nth-child(3) { animation-delay: 0.19s; }
    .view-section.active > *:nth-child(4) { animation-delay: 0.26s; }
    @keyframes riseUp {
      to { opacity: 1; transform: translateY(0); }
    }

    .view-section { display: none; }
    .view-section.active { display: block; }

    /* ===== SECTION CARDS ===== */
    section {
      background: #fff; border: var(--border); padding: 36px;
      border-radius: var(--radius); margin-bottom: 28px;
      box-shadow: var(--shadow);
      transition: box-shadow 0.2s, transform 0.2s;
    }

    .section-header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 28px; padding-bottom: 16px;
      border-bottom: 3px solid var(--ink);
    }
    .section-header h2 {
      font-family: 'Bebas Neue', sans-serif; font-size: 36px;
      letter-spacing: 2px; line-height: 1;
    }

    /* ===== PROFILE ===== */
    .profile { display: flex; gap: 36px; align-items: flex-start; flex-wrap: wrap; }
    .profile-pic {
      width: 180px; height: 180px; border-radius: var(--radius); overflow: hidden;
      border: var(--border); flex: 0 0 180px; box-shadow: var(--shadow);
      display: flex; align-items: center; justify-content: center;
      background: var(--paper); font-family: 'Bebas Neue'; font-size: 48px;
    }
    .profile-pic img { width: 100%; height: 100%; object-fit: cover; }
    .profile-meta { flex: 1 1 380px; padding-top: 6px; }
    .name-row { display: flex; align-items: baseline; gap: 16px; flex-wrap: wrap; margin-bottom: 6px; }
    .name-row h1 {
      font-family: 'Bebas Neue', sans-serif; font-size: 56px;
      letter-spacing: 2px; line-height: 1;
    }
    .age-tag {
      background: var(--yellow); border: var(--border); padding: 3px 10px;
      font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
      border-radius: 2px; letter-spacing: 1px; text-transform: uppercase;
    }
    .profile-bio {
      color: var(--muted); font-size: 16px; line-height: 1.7;
      margin: 14px 0 18px; max-width: 560px;
    }
    .profile-links {
      display: flex; gap: 10px; flex-wrap: wrap;
    }
    .pill-link {
      background: var(--ink); color: var(--paper);
      font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 1px;
      padding: 7px 14px; border-radius: 2px; text-decoration: none;
      text-transform: uppercase; transition: background 0.2s;
    }
    .pill-link:hover { background: var(--yellow); color: var(--ink); }

    /* ===== CONTACT FORM ===== */
    .contact-grid { display: grid; gap: 14px; max-width: 580px; }
    .contact-grid label {
      font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
      text-transform: uppercase; letter-spacing: 2px; color: var(--muted);
      display: block; margin-bottom: 5px;
    }
    .contact-grid input,
    .contact-grid textarea {
      padding: 14px 16px; border-radius: var(--radius); border: var(--border);
      width: 100%; font-family: 'Outfit', sans-serif; font-size: 15px;
      background: var(--paper); transition: box-shadow 0.2s;
      outline: none;
    }
    .contact-grid input:focus,
    .contact-grid textarea:focus {
      box-shadow: 3px 3px 0 var(--ink); background: #fff;
    }

    /* ===== BACK BUTTON ===== */
    .back-btn {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
      text-transform: uppercase; letter-spacing: 1px;
      border: var(--border); padding: 9px 18px; border-radius: 2px;
      background: #fff; cursor: pointer; margin-bottom: 24px;
      transition: background 0.2s, transform 0.15s, box-shadow 0.15s;
      box-shadow: 3px 3px 0 var(--ink);
    }
    .back-btn:hover { background: var(--yellow); transform: translate(-2px, -2px); box-shadow: 5px 5px 0 var(--ink); }

    /* ===== LIST ITEMS ===== */
    .list { display: flex; flex-direction: column; gap: 14px; }
    .item {
      border: var(--border); border-radius: var(--radius);
      padding: 22px 24px; background: var(--paper);
      cursor: pointer; transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
      position: relative; overflow: hidden;
    }
    .item::before {
      content: '→'; position: absolute; right: 24px; top: 50%; transform: translateY(-50%);
      font-size: 20px; opacity: 0; transition: opacity 0.2s, right 0.2s;
    }
    .item:hover { transform: translate(-4px, -4px); box-shadow: 6px 6px 0 var(--ink); background: #fff; }
    .item:hover::before { opacity: 1; right: 20px; }
    .project-item { border-left: 6px solid var(--yellow) !important; }
    .item h4 { font-family: 'DM Serif Display', serif; font-size: 20px; margin-bottom: 8px; }
    .item-preview { color: var(--muted); font-size: 13px; line-height: 1.5;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .item-tag {
      display: inline-block; margin-top: 10px;
      font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 1px;
      text-transform: uppercase; color: var(--muted);
    }

    /* ===== SKILLS ===== */
    .skill-item { margin-bottom: 22px; }
    .skill-label {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-bottom: 8px;
    }
    .skill-name { font-family: 'DM Serif Display', serif; font-size: 18px; }
    .skill-pct { font-family: 'DM Mono', monospace; font-size: 13px; color: var(--muted); }
    .bar {
      height: 10px; background: var(--paper); border-radius: 0;
      overflow: hidden; border: var(--border);
    }
    .bar > i {
      display: block; height: 100%; background: var(--ink); width: 0;
      transition: width 1.4s cubic-bezier(0.1, 0.9, 0.2, 1);
      position: relative;
    }
    .bar > i::after {
      content: ''; position: absolute; right: 0; top: 0; bottom: 0;
      width: 6px; background: var(--yellow);
    }

    /* ===== ACCOMPLISHMENTS ===== */
    .acc-list { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 12px; }
    .acc-pill {
      background: #fff; border: var(--border); padding: 12px 20px;
      border-radius: 2px; font-size: 14px; font-family: 'Outfit', sans-serif;
      cursor: pointer; font-weight: 600; transition: all 0.2s;
      box-shadow: 3px 3px 0 var(--ink);
    }
    .acc-pill:hover { background: var(--yellow); transform: translate(-2px, -2px); box-shadow: 5px 5px 0 var(--ink); }

    /* ===== MODAL ===== */
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(10,10,10,0.85);
      z-index: 1000; display: none; align-items: center; justify-content: center;
      backdrop-filter: blur(6px); padding: 20px;
    }
    .modal-card {
      background: var(--paper); width: 100%; max-width: 720px; max-height: 90vh;
      overflow-y: auto; padding: 48px; border-radius: var(--radius);
      border: 3px solid var(--ink); position: relative;
      box-shadow: 10px 10px 0 var(--ink);
      animation: modalPop 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    }
    @keyframes modalPop {
      from { transform: scale(0.92) translateY(20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }
    .modal-close {
      position: absolute; top: 18px; right: 24px; font-weight: 900; cursor: pointer;
      font-size: 28px; font-family: 'DM Mono', monospace; opacity: 0.5;
      transition: opacity 0.2s, transform 0.2s;
    }
    .modal-close:hover { opacity: 1; transform: rotate(90deg); }
    .modal-card h3 {
      font-family: 'Bebas Neue', sans-serif; font-size: 40px; letter-spacing: 2px;
      border-bottom: 3px solid var(--ink); padding-bottom: 14px; margin-bottom: 22px;
      line-height: 1.1;
    }
    .item-text { white-space: pre-wrap; word-break: break-word; color: var(--muted); line-height: 1.75; font-size: 15px; }
    .inline-img {
      display: block; width: 100%; max-height: 420px; object-fit: contain;
      margin: 18px 0; border-radius: var(--radius); border: var(--border);
      background: #fff;
    }

    /* ===== ADMIN FORMS ===== */
    .admin-forms {
      display: none; border-top: 3px dashed var(--ink);
      margin-top: 24px; padding: 24px; background: var(--paper); border-radius: var(--radius);
    }
    .admin-forms label {
      display: block; font-size: 11px; font-weight: 600; margin-bottom: 6px;
      text-transform: uppercase; color: var(--muted); letter-spacing: 1px;
      font-family: 'DM Mono', monospace;
    }
    input, textarea {
      padding: 13px 15px; border-radius: var(--radius); border: var(--border);
      width: 100%; margin-bottom: 14px; font-family: 'Outfit', sans-serif; font-size: 15px;
      background: #fff; outline: none; transition: box-shadow 0.2s;
    }
    input:focus, textarea:focus { box-shadow: 3px 3px 0 var(--ink); }
    .img-attach-box {
      border: var(--border); background: var(--paper); padding: 16px;
      margin-bottom: 14px; border-radius: var(--radius);
    }
    .img-token {
      display: inline-block; background: var(--ink); color: var(--paper);
      padding: 4px 9px; border-radius: 2px; font-family: 'DM Mono', monospace;
      cursor: copy; margin: 4px; font-size: 11px;
    }

    button.primary {
      background: var(--ink); color: var(--paper); padding: 15px; border-radius: var(--radius);
      border: var(--border); cursor: pointer; font-weight: 800; width: 100%; font-size: 15px;
      text-transform: uppercase; letter-spacing: 2px; font-family: 'Outfit', sans-serif;
      transition: background 0.2s, transform 0.15s, box-shadow 0.15s;
      box-shadow: 4px 4px 0 rgba(0,0,0,0.3);
    }
    button.primary:hover { background: var(--yellow); color: var(--ink); transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--ink); }

    button.btn-xs {
      font-size: 11px; padding: 8px 14px; border-radius: 2px; border: var(--border);
      background: #fff; cursor: pointer; font-weight: 700; font-family: 'DM Mono', monospace;
      letter-spacing: 1px; text-transform: uppercase; transition: background 0.2s, box-shadow 0.15s;
    }
    button.btn-xs:hover { background: var(--yellow); box-shadow: 2px 2px 0 var(--ink); }
    button.btn-delete { color: #c62828; border-color: #c62828; }
    button.btn-delete:hover { background: #c62828; color: #fff; box-shadow: 2px 2px 0 #800000; }

    /* ===== ADMIN FAB ===== */
    #adminToggle { position: fixed; bottom: 28px; right: 28px; z-index: 500; }
    #adminToggle button {
      background: var(--ink); border: 3px solid var(--yellow); width: 54px; height: 54px;
      border-radius: 50%; cursor: pointer; font-size: 20px;
      box-shadow: 4px 4px 0 rgba(0,0,0,0.3);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    #adminToggle button:hover { transform: scale(1.1); box-shadow: 6px 6px 0 rgba(0,0,0,0.3); }

    /* ===== TICKER ===== */
    .ticker-wrap {
      background: var(--yellow); border-top: var(--border); border-bottom: var(--border);
      overflow: hidden; padding: 10px 0; white-space: nowrap;
    }
    .ticker-inner {
      display: inline-block;
      animation: ticker 22s linear infinite;
    }
    .ticker-inner span {
      font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
      letter-spacing: 2px; text-transform: uppercase; padding: 0 36px;
    }
    .ticker-inner span::before { content: '◆ '; }
    @keyframes ticker {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    /* ===== SECTION DIVIDER ===== */
    .ruled { border: none; border-top: var(--border); margin: 8px 0 28px; }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 720px) {
      .profile-pic { width: 130px; height: 130px; flex-basis: 130px; }
      header { height: 140px; }
      .header-tagline { font-size: 34px; }
      #miniMenu { justify-content: flex-start; }
      .name-row h1 { font-size: 42px; }
      section { padding: 24px 20px; }
      .modal-card { padding: 28px 22px; }
    }

    .muted { color: var(--muted); font-size: 14px; }

    /* ===== SUBTLE HOVER LIFT ON SECTION ===== */
    section:hover { box-shadow: 8px 8px 0 var(--ink); }
  </style>
</head>
<body>

  <div id="crashScreen">
    <h2 style="margin-bottom:12px; font-family:'Bebas Neue'; font-size:40px; letter-spacing:2px;">SYSTEM CONFLICT</h2>
    <p class="muted" style="margin-bottom:24px;">LocalStorage cleared to fix memory errors.</p>
    <button onclick="localStorage.clear(); location.reload();" class="primary" style="width:auto; padding:15px 44px;">Wipe &amp; Restart</button>
  </div>

  <div id="miniMenu">
    <a onclick="router('home')">Home</a>
    <a onclick="router('experience')">Experience</a>
    <a onclick="router('projects')">Projects</a>
    <a onclick="router('education')">Education</a>
    <a onclick="router('skills')">Skills</a>
    <a onclick="router('accomplishments')">Accomp.</a>
    <a onclick="router('blog')">Blogs</a>
  </div>

  <header>
    <img src="banner.jpg" alt="banner" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';">
    <div class="header-tagline">Dhruv<br><span>Saxena</span></div>
  </header>

  <div class="ticker-wrap">
    <div class="ticker-inner">
      <span>AI Developer</span><span>ResearchGate Fellow</span><span>Scientific Writer</span><span>IIT-BHU Research</span><span>Cambridge Experience</span><span>UPPEN Research</span><span>ImagoPedia</span><span>Varanasi, India</span>
      <span>AI Developer</span><span>ResearchGate Fellow</span><span>Scientific Writer</span><span>IIT-BHU Research</span><span>Cambridge Experience</span><span>UPPEN Research</span><span>ImagoPedia</span><span>Varanasi, India</span>
    </div>
  </div>

  <main class="wrap">

    <!-- HOME VIEW -->
    <div id="homeView" class="view-section active">
      <section>
        <div class="profile">
          <div class="profile-pic">
            <img src="profile.jpg" alt="Dhruv Saxena" onerror="this.style.display='none'; this.parentElement.innerText='DS';">
          </div>
          <div class="profile-meta">
            <div class="name-row">
              <h1 id="displayName">Dhruv Saxena</h1>
              <span class="age-tag">Age 15</span>
            </div>
            <p class="profile-bio">ResearchGate Fellow, AI Developer, and Scientific Writer. Dedicated to building tools like ImagoPedia with research experience at IIT-BHU, UPPEN &amp; Cambridge.</p>
            <div class="profile-links">
              <span class="pill-link">📍 Varanasi, India</span>
              <a href="mailto:dhruvisgood13@gmail.com" class="pill-link">✉ Email</a>
              <a href="https://github.com/dhruvisgood" target="_blank" class="pill-link">⌥ GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-header">
          <h2>Get In Touch</h2>
        </div>
        <form action="https://formspree.io/f/xzzkvjjk" method="POST" class="contact-grid">
          <div>
            <label>Full Name</label>
            <input name="name" placeholder="Your name" required />
          </div>
          <div>
            <label>Email Address</label>
            <input name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" rows="4" placeholder="How can I help you today?" required></textarea>
          </div>
          <button class="primary" type="submit">Send Message →</button>
        </form>
      </section>
    </div>

    <!-- EXPERIENCE VIEW -->
    <div id="experienceView" class="view-section">
      <button class="back-btn" onclick="router('home')">← Back</button>
      <section>
        <div class="section-header">
          <h2>Experience</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('expForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="expForm">
          <label>Position / Role</label><input id="in_exp_title" />
          <label>Content (Use [img:0] tags for photos)</label><textarea id="in_exp_text" rows="5"></textarea>
          <div class="img-attach-box" id="attach_exp">
            <label>Attach Images</label>
            <div id="tokens_exp"></div>
            <input type="text" id="in_exp_git" placeholder="GitHub Filename (e.g. pic.jpg)" style="margin-bottom:5px">
            <input type="file" id="in_exp_file" accept="image/*" style="margin-bottom:5px">
            <button class="btn-xs" onclick="attachImage('exp')">Attach to List</button>
          </div>
          <button class="primary" onclick="submitNewData('experience', 'exp')">Save Experience</button>
        </div>
        <div class="list" id="experienceList"></div>
      </section>
    </div>

    <!-- PROJECTS VIEW -->
    <div id="projectsView" class="view-section">
      <button class="back-btn" onclick="router('home')">← Back</button>
      <section>
        <div class="section-header">
          <h2>Projects</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('projForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="projForm">
          <label>Project Name</label><input id="in_proj_title" />
          <label>Project Details (Use [img:0] tags)</label><textarea id="in_proj_text" rows="5"></textarea>
          <div class="img-attach-box" id="attach_proj">
            <label>Attach Images</label>
            <div id="tokens_proj"></div>
            <input type="text" id="in_proj_git" placeholder="Filename" style="margin-bottom:5px">
            <input type="file" id="in_proj_file" accept="image/*" style="margin-bottom:5px">
            <button class="btn-xs" onclick="attachImage('proj')">Attach</button>
          </div>
          <button class="primary" onclick="submitNewData('projects', 'proj')">Save Project</button>
        </div>
        <div class="list" id="projectsList"></div>
      </section>
    </div>

    <!-- EDUCATION VIEW -->
    <div id="educationView" class="view-section">
      <button class="back-btn" onclick="router('home')">← Back</button>
      <section>
        <div class="section-header">
          <h2>Education</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('eduForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="eduForm">
          <input id="in_edu_title" placeholder="School" />
          <textarea id="in_edu_text" rows="3"></textarea>
          <button class="primary" onclick="submitNewData('education', 'edu')">Save</button>
        </div>
        <div class="list" id="educationList"></div>
      </section>
    </div>

    <!-- SKILLS VIEW -->
    <div id="skillsView" class="view-section">
      <button class="back-btn" onclick="router('home')">← Back</button>
      <section>
        <div class="section-header">
          <h2>Expertise</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('skillForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="skillForm">
          <input id="in_skill_name" placeholder="Skill Name" />
          <input id="in_skill_val" type="number" placeholder="Percentage (0–100)" />
          <button class="primary" onclick="addSkill()">Add Skill</button>
        </div>
        <div id="skillsList"></div>
      </section>
    </div>

    <!-- ACCOMPLISHMENTS VIEW -->
    <div id="accomplishmentsView" class="view-section">
      <button class="back-btn" onclick="router('home')">← Back</button>
      <section>
        <div class="section-header">
          <h2>Accomplishments</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('accForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="accForm">
          <input id="in_acc_title" placeholder="Achievement" />
          <textarea id="in_acc_text" rows="3"></textarea>
          <div class="img-attach-box" id="attach_acc">
            <div id="tokens_acc"></div>
            <input type="text" id="in_acc_git" placeholder="Filename" style="margin-bottom:5px">
            <input type="file" id="in_acc_file" accept="image/*" style="margin-bottom:5px">
            <button class="btn-xs" onclick="attachImage('acc')">Attach</button>
          </div>
          <button class="primary" onclick="submitNewData('accomplishments', 'acc')">Save</button>
        </div>
        <ul id="accList" class="acc-list"></ul>
      </section>
    </div>

    <!-- BLOG VIEW -->
    <div id="blogView" class="view-section">
      <button class="back-btn" onclick="router('home')">← Back</button>
      <section>
        <div class="section-header">
          <h2>Blog Posts</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('blogForm')">+ New Post</button>
        </div>
        <div class="admin-forms" id="blogForm">
          <label>Blog Title</label><input id="in_blog_title" />
          <label>Content (Use [img:0] tags for inline images)</label>
          <textarea id="in_blog_text" rows="10"></textarea>
          <div class="img-attach-box" id="attach_blog">
            <label>Images for this Post</label>
            <div id="tokens_blog"></div>
            <input type="text" id="in_blog_git" placeholder="Filename" style="margin-bottom:5px">
            <input type="file" id="in_blog_file" accept="image/*" style="margin-bottom:5px">
            <button class="btn-xs" onclick="attachImage('blog')">Attach Image</button>
          </div>
          <button class="primary" onclick="submitNewData('blogs', 'blog')">Publish Blog</button>
        </div>
        <div class="list" id="blogList"></div>
      </section>
    </div>

  </main>

  <!-- MODAL -->
  <div id="infoModal" class="modal-overlay">
    <div class="modal-card">
      <span class="modal-close" onclick="closeModal()">×</span>
      <h3 id="mTitle"></h3>
      <div id="mBody" class="item-text"></div>
    </div>
  </div>

  <div id="adminToggle"><button id="lockBtn">🔒</button></div>

<script>
/* =============================
   DATA STATE
   ============================= */
const DEFAULT_DATA = {
  "version": 1.3,
  "experience": [
    {
      "id": 1,
      "title": "Student Partner — Comet Browser",
      "text": "Promoted campus events and engagement.\n[img:0]\nWorking on digital reach.",
      "images": [
        "pic1.jpg"
      ]
    },
    {
      "id": 1773991139234,
      "title": "proxy123456",
      "text": "srdhtfjgkj,",
      "images": []
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "ImagoPedia",
      "text": "AI-powered tool for scientific image analysis.\n[img:0]\nDeveloped using Python.",
      "images": [
        "proj1.png"
      ]
    }
  ],
  "blogs": [
    {
      "id": 1768142901245,
      "title": "Tesla In India",
      "text": "\n                                                                                 [img:1]\n\n\nSo recently, Tesla launched its first store in Mumbai, India. This has caused an immense rumble in the automotive sector of India, the unexpected entry of Tesla may change the future of EVs in India. But, in this article, we'll NOT talk about the economic impact or its potential, but about its fundamentals.\n\nIt all started in 1769, when a French Inventor Nicolas-Joseph Cugnot, built the first steam-powered vehicle, a slow, cumbersome \nmachine considered the earliest automobile.        \nIn 1886, Karl Benz patented the first gasoline-powered automobile, the Benz Patent- Motorwagen, widely regarded as the first practical car. It had a single-cylinder engine and three wheels.\n\nThen in 1908, Henry Ford introduced the Model T, revolutionizing the industry with assembly-line production, making cars affordable for the masses.\n\nIn 1940, General Motors introduced the \"Hydra-Matic,\" the first mass-produced fully automatic transmission, in Oldsmobile models.The Hydra-Matic was a fully automatic transmission that shifted gears automatically, unlike manual transmissions requiring clutch operation or earlier semi-automatic systems needing some driver input.Later such systems spread to Cadillac, Pontiac, and other GM brands, becoming a hallmark of American cars. After World War II, automatic transmissions gained widespread popularity, fueled by the economic boom and a growing demand for convenience.\n\nCut to 2003, when Tesla Motors was founded by  Martin Eberhard and Marc Tarpenning in California, USA, with the goal to prove electric cars could be better than gasoline-powered cars in terms of performance and design. Later,             Elon Musk, co-founder of PayPal and SpaceX, invested $6.5 million in 2004 and became Chairman of the Board.\n\n\n\nThe main breakthrough of Tesla came in 2008 when, The Tesla Roadster, became the first highway-legal serial production all-electric car to use lithium-ion batteries and travel more than 200 miles on a single charge. But, in the same year, Tesla faced a \"Financial Crisis\" due to which Elon Musk took over as CEO and product architect. In 2012, Tesla  launched Model S, the first luxury electric sedan, and they also introduced the world to \"Supercharger Stations\" to support long-distance travel. Recently, Tesla also launched Tesla \"Cybertruck\", which was instantly converted to an Internet Sensation because of its potentially Destructive advertising.\n\n\n\n\n\n\n[img:0]\n\n\n\n\n\n\nSo, now we can talk about how does an Automated Tesla works. Before starting, I would recommend to watch Mark Rober's amazing video after reading. Tesla's main automation highlight is it's ADAS ( Advanced Driver-Assistance System) or Autopilot.\n\nThe car is equipped with 8 external camera to gather data about Other vehicles, Lanes, Pedestrians, Traffic lights, Signs in the form of images. Tesla earlier used Ultrasonic Detectors or RADARs but due to some \"Unknown Logistic Reasons\", these were removed even though they work better than cameras.\n\nNow, after this Tesla Vision uses AI and Neural Networks, All decision-making is based on neural networks trained on billions of miles of real-world driving and every bit of extracted information. It's very difficult to explain the working of Neural Networks but, one may say that its main aim is to replicate human brain and it's data driven nature.The programme is trained by Tesla's Supercomputer Dojo\n\nOn March 18, 2018, in Arizona, Elaine Marie Herzberg (49) was killed while walking her bicycle across a roadway outside of a crosswalk when she was struck by an Uber test vehicle operating in autonomous mode. This incident raises several questions about the accuracy of these self-driving car. This fatality occurred in the presence of an onboard safety driver, Rafaela Vasquez.\n\nWe should also focus on this screenshot of the official site of Tesla. The site mentions\n\" Full Self - Driving (Supervised) \". We must also remember that while automatic cars have advanced, they still work only upon the data and algorithm fed into them by humans, and humans commit error. \n\nThe main reason why Tesla is not very safe in India is because the Traffic Pattern in India is very unpredictable and different then any other country. This adversely affects the algorithm used in the Car and leads to incorrect decision. Also the harsh driving conditions add up to difficulties.\n\nOne more major yet subtle problem is Stray Animals and Bumps and Potholes which are usually not considered Data Points in Tesla Vision Neural Networks. \n\nBut still Tesla's market capitalization—the total value of all its shares—is currently around $1.07 trillion, placing it among the top 10 most valuable companies globally and the most valuable automotive company of all time.\n\n\n\n\n\n\n\n\n\n\"Autonomous vehicles hold great promise for reducing accidents and giving mobility to millions, but we must move responsibly—this is life-and-death technology.\"\n\n\n-Sundar Pichai, CEO, Alphabet \n",
      "images": [
        "elon.jpg",
        "Headerrr.jpg"
      ]
    }
  ],
  "education": [],
  "skills": [],
  "accomplishments": []
};
  
let STATE = { isAdmin: false, data: {}, tempImages: [] };

function init() {
  try {
    const stored = localStorage.getItem('dhruv_v1_3');
    if (stored) {
      STATE.data = JSON.parse(stored);
      if ((DEFAULT_DATA.version || 0) > (STATE.data.version || 0)) {
        Object.keys(DEFAULT_DATA).forEach(k => { if (!STATE.data[k]) STATE.data[k] = DEFAULT_DATA[k]; });
        STATE.data.version = DEFAULT_DATA.version;
      }
    } else {
      STATE.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    renderAll();
    document.getElementById('lockBtn').onclick = unlockAdmin;
  } catch (e) {
    document.getElementById('crashScreen').style.display = 'flex';
  }
}

function saveData() {
  try {
    localStorage.setItem('dhruv_v1_3', JSON.stringify(STATE.data));
    renderAll();
  } catch (e) {
    alert("Storage Error: Too many uploaded files. Use GitHub Filenames instead.");
  }
}

/* ===== NAVIGATION ===== */
function router(view) {
  document.querySelectorAll('.view-section').forEach(v => {
    v.classList.remove('active');
  });
  const target = document.getElementById(view + 'View');
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleForm(id) {
  const f = document.getElementById(id);
  f.style.display = (f.style.display === 'block') ? 'none' : 'block';
  STATE.tempImages = [];
  updateTokens(id.split('Form')[0]);
}

/* ===== RENDERING ===== */
function renderAll() {
  renderListView('experience', 'experienceList');
  renderListView('projects', 'projectsList', true);
  renderListView('blogs', 'blogList');
  renderListView('education', 'educationList');
  renderSkills();
  renderAccomplishments();
}

function renderListView(key, containerId, isProj = false) {
  const c = document.getElementById(containerId);
  if (!c) return; c.innerHTML = '';
  (STATE.data[key] || []).forEach((item, idx) => {
    const d = document.createElement('div');
    d.className = 'item' + (isProj ? ' project-item' : '');
    d.style.animationDelay = `${idx * 0.06}s`;
    d.onclick = () => openModal(item.title, item.text, item.images);
    d.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <h4>${esc(item.title)}</h4>
        ${STATE.isAdmin ? `<button class="btn-xs btn-delete" onclick="event.stopPropagation(); deleteItem('${key}', ${item.id})">Delete</button>` : ''}
      </div>
      <p class="item-preview">${stripTags(item.text)}</p>
      <span class="item-tag">${key === 'blogs' ? '✍ Blog Post' : key === 'projects' ? '⚙ Project' : key === 'experience' ? '💼 Experience' : '🎓 Education'} &nbsp;→ Click to read</span>
    `;
    c.appendChild(d);
  });
}

function renderSkills() {
  const c = document.getElementById('skillsList');
  if (!c) return; c.innerHTML = '';
  (STATE.data.skills || []).forEach(s => {
    const d = document.createElement('div');
    d.className = 'skill-item';
    d.innerHTML = `
      <div class="skill-label">
        <span class="skill-name">${esc(s.title)}</span>
        <span class="skill-pct">${s.percent}%${STATE.isAdmin ? ` <span style="color:#c62828; cursor:pointer; margin-left:8px;" onclick="deleteItem('skills', ${s.id})">×</span>` : ''}</span>
      </div>
      <div class="bar"><i style="width:${s.percent}%"></i></div>
    `;
    c.appendChild(d);
  });
}

function renderAccomplishments() {
  const c = document.getElementById('accList');
  if (!c) return; c.innerHTML = '';
  (STATE.data.accomplishments || []).forEach(a => {
    const l = document.createElement('li');
    l.className = 'acc-pill';
    l.onclick = () => openModal(a.title, a.text, a.images);
    l.innerHTML = `${esc(a.title)}${STATE.isAdmin ? `<span style="color:#c62828; margin-left:10px;" onclick="event.stopPropagation(); deleteItem('accomplishments', ${a.id})">×</span>` : ''}`;
    c.appendChild(l);
  });
}

/* ===== MODAL ===== */
function openModal(t, b, imgs) {
  document.getElementById('mTitle').innerText = t;
  const body = document.getElementById('mBody');
  let html = esc(b).replace(/\n/g, '<br>');
  if (imgs && imgs.length) {
    imgs.forEach((src, idx) => {
      const tag = `[img:${idx}]`;
      const imgHtml = `<img src="${src}" class="inline-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlZWUiLz48L3N2Zz4='" alt="">`;
      html = html.replace(tag, imgHtml);
    });
  }
  body.innerHTML = html;
  document.getElementById('infoModal').style.display = 'flex';
}
function closeModal() { document.getElementById('infoModal').style.display = 'none'; }
window.onclick = (e) => { if (e.target.id === 'infoModal') closeModal(); }

/* ===== ADMIN ===== */
async function attachImage(prefix) {
  const gitInput = document.getElementById(`in_${prefix}_git`);
  const fileInput = document.getElementById(`in_${prefix}_file`);
  let src = "";
  if (gitInput.value.trim()) {
    src = gitInput.value.trim();
    if (!src.includes('.')) src += '.jpg';
  } else if (fileInput.files[0]) {
    src = await compressImage(fileInput.files[0]);
  } else {
    return alert("Provide a filename or upload a file");
  }
  STATE.tempImages.push(src);
  gitInput.value = ''; fileInput.value = '';
  updateTokens(prefix);
}

function updateTokens(prefix) {
  const box = document.getElementById(`tokens_${prefix}`);
  if (!box) return;
  box.innerHTML = STATE.tempImages.map((s, i) =>
    `<span class="img-token" title="Click to copy" onclick="copyTag(${i})">[img:${i}]</span>`
  ).join('');
}

function copyTag(i) {
  const tag = `[img:${i}]`;
  navigator.clipboard.writeText(tag);
  alert(`Copied ${tag}. Paste it in your description where you want this image!`);
}

function submitNewData(key, prefix) {
  const t = document.getElementById(`in_${prefix}_title`).value;
  const b = document.getElementById(`in_${prefix}_text`).value;
  if (!t) return alert("Title is required");
  STATE.data[key].push({ id: Date.now(), title: t, text: b, images: [...STATE.tempImages] });
  saveData();
  document.getElementById(`in_${prefix}_title`).value = '';
  document.getElementById(`in_${prefix}_text`).value = '';
  STATE.tempImages = [];
  toggleForm(`${prefix}Form`);
}

function addSkill() {
  const n = document.getElementById('in_skill_name').value;
  const v = document.getElementById('in_skill_val').value;
  if (!n || !v) return;
  STATE.data.skills.push({ id: Date.now(), title: n, percent: parseInt(v) });
  saveData();
  document.getElementById('in_skill_name').value = '';
  document.getElementById('in_skill_val').value = '';
}

function deleteItem(k, id) {
  if (confirm("Permanently delete?")) {
    STATE.data[k] = STATE.data[k].filter(x => x.id !== id);
    saveData();
  }
}

function unlockAdmin() {
  const p = prompt("Passkey:");
  if (p === 'itrustedyou') {
    STATE.isAdmin = true;
    document.querySelectorAll('.admin-only').forEach(e => e.style.display = 'inline-block');
    document.getElementById('lockBtn').innerText = '🔓';
    const ex = document.createElement('button');
    ex.innerText = "EXPORT SOURCE";
    ex.className = 'primary';
    ex.style.cssText = "position:fixed; bottom:90px; right:28px; width:auto; z-index:500; border:3px solid #000; box-shadow:3px 3px 0 #000; padding: 12px 20px;";
    ex.onclick = () => {
      const code = "const DEFAULT_DATA = " + JSON.stringify(STATE.data, null, 2) + ";";
      navigator.clipboard.writeText(code).then(() => alert("Code copied! Replace DEFAULT_DATA in your file."));
    };
    document.body.appendChild(ex);
    renderAll();
  }
}

/* ===== UTILITIES ===== */
function compressImage(file) {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX = 900;
        let w = img.width, h = img.height;
        if (w > MAX) { h *= MAX / w; w = MAX; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        res(canvas.toDataURL('image/jpeg', 0.65));
      };
    };
  });
}

function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
function stripTags(s) { return (s || '').replace(/\[img:\d+\]/g, '(Image)'); }

init();
</script>
</body>
</html>
