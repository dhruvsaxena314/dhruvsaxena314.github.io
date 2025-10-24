<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Portfolio</title>
  <meta name="description" content="Dhruv Saxena — Research Fellow, AI/ML, Quizzing & Projects" />
  <link rel="icon" href="data:," />
  <style>
    /* =========================
       Minimal reset & fonts
       ========================= */
    :root{
      --bg:#0b1020;
      --card:#0f1724;
      --muted:#9fb0c8;
      --accent-a:#7c3aed;
      --accent-b:#06b6d4;
      --glass: rgba(255,255,255,0.03);
      --glass2: rgba(255,255,255,0.02);
      --radius:14px;
      --maxwidth:1100px;
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0}
    body{
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
      background:
        radial-gradient(800px 400px at 10% 10%, rgba(124,58,237,0.07), transparent 8%),
        radial-gradient(700px 350px at 95% 85%, rgba(6,182,212,0.04), transparent 7%),
        var(--bg);
      color: #e6eef6;
      padding:32px 20px;
      display:flex;
      justify-content:center;
    }

    /* =========================
       Container & layout
       ========================= */
    .shell{
      width:100%;
      max-width:var(--maxwidth);
      display:grid;
      grid-template-columns: 420px 1fr;
      gap:28px;
      align-items:start;
    }

    @media (max-width:920px) {
      .shell{grid-template-columns:1fr; padding-bottom:50px}
    }

    /* =========================
       Left panel (profile)
       ========================= */
    .panel {
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:var(--radius);
      padding:22px;
      border:1px solid rgba(255,255,255,0.04);
      box-shadow: 0 10px 40px rgba(2,6,23,0.6);
      position:relative;
      overflow:hidden;
    }
    .profile-photo {
      width:100%;
      display:flex;
      justify-content:center;
      margin-bottom:14px;
    }
    .photo {
      width:240px;
      height:240px;
      border-radius:16px;
      overflow:hidden;
      box-shadow: 0 16px 40px rgba(2,6,23,0.6);
      transition:transform .45s cubic-bezier(.2,.9,.3,1);
      border:1px solid rgba(255,255,255,0.03);
      background:linear-gradient(135deg,var(--accent-a),var(--accent-b));
      display:inline-flex;
      align-items:center;
      justify-content:center;
      font-weight:800;
      font-size:44px;
      color:rgba(255,255,255,0.95);
    }
    .photo:hover{transform:translateY(-8px) rotate(-1deg)}
    .name{
      text-align:center;
      margin-top:10px;
    }
    .name h1{margin:6px 0 0 0;font-size:22px}
    .name p{margin:6px 0 0 0;color:var(--muted);font-size:13px}

    .contact {
      display:flex;
      flex-direction:column;
      gap:8px;
      margin-top:14px;
    }
    .tag{
      display:flex;
      gap:8px;
      align-items:center;
      padding:8px 10px;
      background:var(--glass2);
      border-radius:999px;
      font-weight:700;
      color:#eaf2ff;
      text-decoration:none;
      width:max-content;
    }

    .mini {
      display:flex;
      gap:10px;
      margin-top:16px;
      justify-content:center;
      flex-wrap:wrap;
    }
    .mini .box{
      background:linear-gradient(180deg, rgba(255,255,255,0.015), transparent);
      border-radius:10px;padding:10px 12px;font-size:13px;color:var(--muted);border:1px solid rgba(255,255,255,0.02)
    }

    /* =========================
       Right content
       ========================= */
    .main {
      background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.008));
      border-radius:var(--radius);
      padding:24px;
      border:1px solid rgba(255,255,255,0.04);
      box-shadow: 0 10px 40px rgba(2,6,23,0.55);
      position:relative;
    }

    .nav {
      position:sticky;
      top:20px;
      display:flex;
      gap:12px;
      justify-content:flex-end;
      margin-bottom:12px;
      z-index:30;
    }
    .nav a{
      padding:8px 12px;border-radius:10px;text-decoration:none;color:var(--muted);font-weight:700;font-size:13px;
      background:transparent;border:1px solid rgba(255,255,255,0.02)
    }
    .nav a.primary{
      background:linear-gradient(90deg,var(--accent-a),var(--accent-b));color:white;border:none;
      box-shadow:0 8px 30px rgba(7,9,40,0.5);
    }

    /* Hero */
    .hero{
      display:flex;
      gap:22px;
      align-items:center;
      justify-content:space-between;
      margin-bottom:18px;
    }
    @media (max-width:920px){ .hero{flex-direction:column;align-items:flex-start} }

    .hero-left{
      max-width: 62%;
    }
    @media (max-width:920px){ .hero-left{max-width:100%} }

    .kicker{
      color:var(--muted);font-weight:700;font-size:13px;margin-bottom:8px;
      display:inline-flex;gap:8px;align-items:center;
    }

    .headline{
      font-size:30px;line-height:1.02;margin:0 0 12px 0;color:#f8fcff;
      font-weight:800;
    }
    .sub{
      color:var(--muted);font-size:15px;margin:0 0 12px 0;line-height:1.6;
    }

    .hero-cta{display:flex;gap:10px;align-items:center}
    .btn{
      padding:12px 16px;border-radius:10px;font-weight:800;text-decoration:none;color:white;
      display:inline-flex;gap:10px;align-items:center;border:none;background:linear-gradient(90deg,var(--accent-a),var(--accent-b));
      box-shadow:0 10px 30px rgba(7,9,40,0.4)
    }
    .btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.04);color:var(--muted);font-weight:700}

    /* right hero card (portrait + blob) */
    .hero-right{
      width:280px;
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
    }
    .blob{
      position:absolute;right:-28px;top:-48px;width:300px;height:300px;border-radius:48% 52% 45% 55%/52% 48% 52% 48%;
      background:linear-gradient(135deg,var(--accent-b),var(--accent-a));
      filter:blur(36px);
      opacity:.35;transform:rotate(-6deg);
    }
    .portrait{
      width:220px;height:220px;border-radius:16px;overflow:hidden;border:6px solid rgba(255,255,255,0.03);
      box-shadow:0 30px 80px rgba(7,9,40,0.6);background:#081224;display:flex;align-items:center;justify-content:center;
    }
    .portrait img{width:100%;height:100%;object-fit:cover;display:block}

    /* sections */
    section.block{margin-top:18px}
    h3.block-title{margin:0 0 8px 0;font-size:18px;color:#eaf2ff}
    p.block-lead{color:var(--muted);margin:0 0 12px 0;line-height:1.6}

    /* timeline */
    .timeline{border-left:2px dashed rgba(255,255,255,0.03);padding-left:18px;margin-top:8px}
    .role{margin-bottom:16px;position:relative;padding-left:14px}
    .role:before{content:"";position:absolute;left:-26px;top:6px;width:12px;height:12px;border-radius:50%;background:linear-gradient(90deg,var(--accent-a),var(--accent-b));box-shadow:0 6px 18px rgba(7,9,40,0.6)}
    .role h4{margin:0;font-size:15px}
    .role .meta{font-size:12px;color:var(--muted);margin-bottom:6px}
    .role p{margin:0;color:var(--muted);font-size:13px;line-height:1.5}

    /* skills & languages grid */
    .two-col{display:grid;grid-template-columns:1fr 320px;gap:18px}
    @media (max-width:920px){ .two-col{grid-template-columns:1fr} }

    .badges{display:flex;flex-wrap:wrap;gap:8px}
    .pill{padding:8px 10px;border-radius:999px;background:rgba(255,255,255,0.02);font-weight:700;font-size:13px;color:var(--muted)}

    /* language bars */
    .lang{
      display:flex;align-items:center;gap:12px;margin-bottom:12px;
    }
    .lang .lbl{width:110px;color:var(--muted);font-weight:700;font-size:13px}
    .bar-wrap{
      flex:1;background:linear-gradient(90deg, rgba(255,255,255,0.014), rgba(255,255,255,0.01));
      border-radius:999px;padding:6px;height:18px;display:flex;align-items:center;
    }
    .bar{
      height:100%;border-radius:999px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;
      font-weight:800;font-size:12px;color:white;transition:width 1000ms cubic-bezier(.2,.9,.25,1);
      box-shadow:0 10px 30px rgba(2,6,23,0.6);
      background:linear-gradient(90deg,var(--accent-a),var(--accent-b));
    }

    /* small footer / contact */
    .contact-grid{display:flex;gap:10px;flex-wrap:wrap}
    footer.note{color:var(--muted);font-size:13px;margin-top:18px}

    /* small reveal animation */
    .reveal{opacity:0; transform: translateY(10px); transition: all 600ms cubic-bezier(.2,.9,.25,1); will-change:opacity,transform; }
    .reveal.show{opacity:1; transform: translateY(0);}

    /* utilities */
    .muted{color:var(--muted)}
    pre.small{font-size:12px;color:var(--muted);background:transparent;border-radius:8px;padding:6px}

  </style>
</head>
<body>
  <div class="shell" role="main" aria-label="Dhruv Saxena portfolio">
    <!-- LEFT PANEL -->
    <aside class="panel" aria-labelledby="profile-heading">
      <div class="profile-photo">
        <!-- Replace the SVG with your own photo.jpg if you have it -->
        <!-- To use a real photo: replace the <svg> block below with:
             <div class="photo"><img src="photo.jpg" alt="Dhruv Saxena"></div>
        -->
        <div class="photo" aria-hidden="true">
          <svg width="240" height="240" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DS">
            <defs>
              <linearGradient id="gA" x1="0" x2="1">
                <stop offset="0" stop-color="#7c3aed"/>
                <stop offset="1" stop-color="#06b6d4"/>
              </linearGradient>
            </defs>
            <rect width="120" height="120" rx="16" fill="url(#gA)"/>
            <text x="50%" y="55%" fill="#fff" font-size="36" text-anchor="middle" font-weight="800" font-family="Inter, Arial">DS</text>
          </svg>
        </div>
      </div>

      <div id="profile-heading" class="name">
        <h1>Dhruv Saxena</h1>
        <p class="muted">ResearchGate Fellow · AI / ML · Quizzer · Student Partner</p>
      </div>

      <div class="contact" style="margin-top:14px">
        <a class="tag" href="mailto:dhruvisgood13@gmail.com">✉ dhruvisgood13@gmail.com</a>
        <a class="tag" href="tel:+917080880393">📞 +91 7080880393</a>
        <a class="tag" href="https://github.com/dhruvisgood" target="_blank" rel="noopener">GitHub</a>
        <a class="tag" href="https://www.linkedin.com/in/dhruv-saxena-3a2b4e7a/" target="_blank" rel="noopener">LinkedIn</a>
        <a class="tag" href="rhfb.pdf" download>📄 Resume (PDF)</a>
      </div>

      <div class="mini" aria-hidden="true">
        <div class="box"><strong>AI</strong> research</div>
        <div class="box">Quizzing — national/international</div>
      </div>

      <div style="margin-top:16px">
        <p class="muted" style="margin:6px 0 8px 0;font-weight:800">Quick summary</p>
        <p class="muted" style="margin:0;line-height:1.5">
          ResearchGate Fellow & student partner with experience building AI tools (ImagoPedia), publishing research, and leading science/quiz clubs. Comfortable in Python, ML stacks, and scientific writing.
        </p>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="main">
      <nav class="nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a class="primary" href="#contact">Contact</a>
      </nav>

      <!-- HERO -->
      <header class="hero">
        <div class="hero-left">
          <div class="kicker">Hello — I'm Dhruv</div>
          <h1 class="headline">I build AI tools, write research, and win quizzes — I make ideas behave.</h1>
          <p class="sub">Research Fellowship in biological neural simulations, author of ImagoPedia, collaborator with IITBHU & Cambridge, and active participant in international quizzing circuits.</p>

          <div class="hero-cta">
            <a class="btn" href="rhfb.pdf" download>Download CV</a>
            <a class="btn ghost" href="#projects">Explore Projects</a>
          </div>
        </div>

        <div class="hero-right" aria-hidden="true">
          <div class="blob" aria-hidden="true"></div>
          <div class="portrait">
            <!-- Replace with your real photo.jpg (drop it into repo) -->
            <img src="photo.jpg" alt="Dhruv Saxena" onerror="this.style.display='none';">
            <!-- fallback minimal card -->
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--muted);padding:18px;">
              <div style="font-weight:800;font-size:22px;color:#fff">Dhruv Saxena</div>
              <div style="font-size:12px;margin-top:6px">Research | AI | Quizzing</div>
            </div>
          </div>
        </div>
      </header>

      <!-- ABOUT / PROJECTS -->
      <section id="about" class="block reveal">
        <h3 class="block-title">About me</h3>
        <p class="block-lead">I love building things that learn. From prototyping neural models to making consumer-facing AI tools (ImagoPedia), I combine deep curiosity with engineering discipline.</p>

        <div style="display:flex;gap:18px;flex-wrap:wrap;margin-top:12px">
          <div style="min-width:220px">
            <h4 style="margin:0 0 8px 0">Key focus</h4>
            <div class="badges">
              <span class="pill">AI / ML</span>
              <span class="pill">Computer Vision</span>
              <span class="pill">NLP</span>
              <span class="pill">Scientific writing</span>
            </div>
          </div>

          <div style="flex:1;min-width:260px">
            <h4 style="margin:0 0 8px 0">Tools</h4>
            <div class="badges">
              <span class="pill">Python</span>
              <span class="pill">PyTorch</span>
              <span class="pill">NumPy</span>
              <span class="pill">Pandas</span>
              <span class="pill">SQL</span>
              <span class="pill">Git</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="block reveal">
        <h3 class="block-title">Selected projects</h3>
        <div style="display:grid;gap:12px;margin-top:10px">
          <article style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.015);border:1px solid rgba(255,255,255,0.02)">
            <h4 style="margin:0 0 6px 0">ImagoPedia · AI tool</h4>
            <p class="muted" style="margin:0">Image understanding & knowledge retrieval platform I helped design and prototype — integrates visual embeddings with RAG-style retrieval.</p>
          </article>

          <article style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.015);border:1px solid rgba(255,255,255,0.02)">
            <h4 style="margin:0 0 6px 0">Neural simulations — biologically-inspired models</h4>
            <p class="muted" style="margin:0">Simulations of small networks for research projects with collaborators from IITBHU and Cambridge (literature review, modeling, and evaluation).</p>
          </article>
        </div>
      </section>

      <!-- RESUME (experience, education, languages) -->
      <section id="resume" class="block reveal">
        <h3 class="block-title">Experience & Education</h3>

        <div class="timeline" style="margin-top:10px">
          <div class="role">
            <h4>Junior Research Fellow — ResearchGate (Varanasi)</h4>
            <div class="meta">Sep 2025 — Current</div>
            <p class="muted">Literature reviews, neural-network simulations, domain access & research contributions collaborating with IITBHU, UPPEN & Cambridge.</p>
          </div>

          <div class="role">
            <h4>Research Fellow — Next Voters (Remote)</h4>
            <div class="meta">Sep 2025 — Current</div>
            <p class="muted">Fellowship to explore AI for democratic engagement and research communication.</p>
          </div>

          <div class="role">
            <h4>Student Partner — InternShala / Perplexity / Student Comet</h4>
            <div class="meta">2024 — Current</div>
            <p class="muted">Ambassador & campus promotion for internship platforms and AI tools.</p>
          </div>
        </div>

        <div style="display:flex;gap:18px;margin-top:18px;flex-wrap:wrap">
          <div style="flex:1;min-width:260px">
            <h4 style="margin:0 0 8px 0">Education</h4>
            <p class="muted" style="margin:0">Sunbeam School Lahartara — Current. Awards: IMO Gold, IEO Gold, INSPIRE MANAK awardee. Scholarship & top scores.</p>
          </div>

          <div style="width:320px">
            <h4 style="margin:0 0 8px 0">Skills</h4>
            <div class="badges">
              <span class="pill">Python</span>
              <span class="pill">NLP</span>
              <span class="pill">Computer Vision</span>
              <span class="pill">Research</span>
              <span class="pill">Public speaking</span>
            </div>
          </div>
        </div>

      </section>

      <!-- LANGUAGES with bars -->
      <section class="block reveal" style="margin-top:18px">
        <h3 class="block-title">Languages</h3>
        <p class="muted" style="margin:6px 0 12px 0">Proficiency bars — animated on load.</p>

        <div>
          <!-- each .bar has data-pct attribute. JS animates widths. -->
          <div class="lang">
            <div class="lbl">English</div>
            <div class="bar-wrap" aria-hidden="true">
              <div class="bar" data-pct="85" style="width:0%">85%</div>
            </div>
          </div>

          <div class="lang">
            <div class="lbl">Hindi</div>
            <div class="bar-wrap">
              <div class="bar" data-pct="95" style="width:0%">95%</div>
            </div>
          </div>

          <div class="lang">
            <div class="lbl">French</div>
            <div class="bar-wrap">
              <div class="bar" data-pct="30" style="width:0%">30%</div>
            </div>
          </div>

          <div class="lang">
            <div class="lbl">Japanese</div>
            <div class="bar-wrap">
              <div class="bar" data-pct="15" style="width:0%">15%</div>
            </div>
          </div>

          <div class="lang">
            <div class="lbl">Bengali</div>
            <div class="bar-wrap">
              <div class="bar" data-pct="15" style="width:0%">15%</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="block reveal">
        <h3 class="block-title">Get in touch</h3>
        <p class="muted">Prefer email? I respond quickly to research & collab requests.</p>

        <div style="margin-top:12px" class="contact-grid">
          <a class="btn" href="mailto:dhruvisgood13@gmail.com">Email me</a>
          <a class="btn ghost" href="https://github.com/dhruvisgood" target="_blank" rel="noopener">GitHub</a>
          <a class="btn ghost" href="https://www.linkedin.com/in/dhruv-saxena-3a2b4e7a/" target="_blank" rel="noopener">LinkedIn</a>
        </div>

        <footer class="note">Drop <code>photo.jpg</code> to replace the portrait. Resume available as <a href="rhfb.pdf" class="muted" download>rhfb.pdf</a>.</footer>
      </section>

    </main>
  </div>

  <!-- ===========================
       JS: small helper animations & smooth scroll
       =========================== -->
  <script>
    (function(){
      // Smooth scroll for nav anchors
      document.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var target = document.querySelector(this.getAttribute('href'));
          if(target){
            e.preventDefault();
            window.scrollTo({top: target.getBoundingClientRect().top + window.scrollY - 18, behavior:'smooth'});
          }
        });
      });

      // Animate bars on DOMContentLoaded
      function animateBars(){
        document.querySelectorAll('.bar').forEach(function(el, i){
          var pct = Number(el.dataset.pct) || 0;
          setTimeout(function(){
            el.style.width = pct + '%';
            // small delay to set number text after animation starts
            setTimeout(function(){ el.textContent = pct + '%'; }, 350);
          }, 200 + i*100);
        });
      }

      // simple scroll reveal for .reveal elements
      function revealOnScroll(){
        var reveals = document.querySelectorAll('.reveal');
        var windowH = window.innerHeight;
        reveals.forEach(function(el){
          var rect = el.getBoundingClientRect();
          if(rect.top <= windowH - 80){
            el.classList.add('show');
          }
        });
      }

      // init
      document.addEventListener('DOMContentLoaded', function(){
        animateBars();
        revealOnScroll();
        window.addEventListener('scroll', revealOnScroll);
        // keyboard shortcuts
        document.addEventListener('keydown', function(e){
          if((e.key==='p' || e.key==='P') && (e.ctrlKey || e.metaKey)){
            e.preventDefault();
            window.print();
          }
        });
      });

      // accessibility: prefers-reduced-motion
      var q = window.matchMedia('(prefers-reduced-motion: reduce)');
      if(q.matches){
        document.querySelectorAll('.bar').forEach(function(el){ el.style.transition = 'none'; });
        document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('show'); });
      }
    })();
  </script>
</body>
</html>
