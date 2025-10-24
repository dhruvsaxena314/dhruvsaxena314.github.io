<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Resume</title>
  <meta name="description" content="Dhruv Saxena — Resume / Portfolio" />
  <style>
    :root{
      --bg:#0f1724;
      --card:#0b1220;
      --muted:#9aa4b2;
      --accent1:#7c3aed;
      --accent2:#06b6d4;
      --glass: rgba(255,255,255,0.03);
      --glass-2: rgba(255,255,255,0.02);
      --glass-3: rgba(255,255,255,0.015);
      --glass-border: rgba(255,255,255,0.04);
      --success: #10b981;
    }
    /* Reset & layout */
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: radial-gradient(1200px 600px at 10% 20%, rgba(124,58,237,0.09), transparent 8%),
                  radial-gradient(900px 500px at 90% 80%, rgba(6,182,212,0.05), transparent 10%),
                  var(--bg);
      color: #e6eef6;
      padding:32px;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    /* Main container */
    .wrap{
      max-width:1100px;
      margin:0 auto;
      display:grid;
      grid-template-columns:360px 1fr;
      gap:28px;
      align-items:start;
    }

    /* Left column (card) */
    .card{
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:16px;
      padding:22px;
      border:1px solid var(--glass-border);
      box-shadow: 0 8px 40px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
      position:relative;
      overflow:hidden;
    }
    .photo {
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      margin-bottom:18px;
    }

    /* SVG initial-avatar (can replace with <img src="photo.jpg">) */
    .avatar {
      width:220px;
      height:220px;
      border-radius:18px;
      background:linear-gradient(135deg,var(--accent1),var(--accent2));
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      font-weight:700;
      font-size:64px;
      letter-spacing:1px;
      box-shadow: 0 10px 30px rgba(6,11,34,0.6), 0 2px 0 rgba(255,255,255,0.02) inset;
      transition:transform .45s cubic-bezier(.2,.9,.3,1);
    }
    .avatar:hover{transform:translateY(-6px) rotate(-2deg) scale(1.02)}

    .name{
      text-align:center;
      margin-top:12px;
    }
    .name h1{
      margin:0;
      font-size:20px;
      letter-spacing:0.2px;
    }
    .name p{
      margin:6px 0 0 0;
      color:var(--muted);
      font-size:13px;
    }

    .contact{
      margin-top:16px;
      display:grid;
      gap:8px;
      font-size:13px;
      color:var(--muted);
    }
    .contact a{color:inherit; text-decoration:none}
    .chip{
      display:flex;
      gap:8px;
      align-items:center;
      background:var(--glass-2);
      padding:8px 10px;
      border-radius:999px;
      font-weight:600;
      font-size:13px;
      color: #dce9ff;
    }

    /* Progress circles for quick stats (optional) */
    .mini-stats{
      display:flex;
      gap:10px;
      margin-top:14px;
      justify-content:center;
    }
    .stat{
      text-align:center;
      font-size:12px;
      color:var(--muted);
    }

    /* Right column (content) */
    .content{
      background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.008));
      border-radius:16px;
      padding:20px;
      border:1px solid var(--glass-border);
      box-shadow: 0 10px 40px rgba(2,6,23,0.55);
    }
    .row{
      display:flex;
      gap:16px;
      align-items:flex-start;
      margin-bottom:18px;
    }
    .title{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    h2{
      margin:0 0 8px 0;
      font-size:18px;
      color: #eaf2ff;
    }
    p.lead{
      margin:0;
      color:var(--muted);
      font-size:14px;
      line-height:1.6;
    }

    /* Experience timeline */
    .timeline{
      border-left:2px dashed rgba(255,255,255,0.03);
      padding-left:18px;
      margin-top:6px;
    }
    .job{
      margin-bottom:16px;
      position:relative;
      padding-left:14px;
    }
    .job:before{
      content:"";
      width:12px;height:12px;border-radius:50%;
      background:linear-gradient(90deg,var(--accent1),var(--accent2));
      position:absolute;
      left:-26px;
      top:6px;
      box-shadow:0 4px 12px rgba(12,20,40,0.6);
    }
    .job h3{
      margin:0;
      font-size:15px;
      color:#fff;
    }
    .job .meta{
      font-size:12px;
      color:var(--muted);
      margin-bottom:6px;
    }
    .job p{margin:0;color:var(--muted);font-size:13px;line-height:1.5}

    /* Skills and languages */
    .grid{
      display:grid;
      grid-template-columns:repeat(2, 1fr);
      gap:14px;
    }
    .skill{
      background:var(--glass-3);
      padding:12px;
      border-radius:10px;
      border:1px solid rgba(255,255,255,0.02);
    }
    .skill h4{margin:0 0 8px 0;font-size:13px;color:#eaf2ff}
    .skill .skill-list{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
    }
    .badge{background:rgba(255,255,255,0.02);padding:6px 10px;border-radius:999px;font-size:13px;color:var(--muted)}

    /* Language bar */
    .lang{
      display:flex;
      align-items:center;
      gap:12px;
      margin-bottom:10px;
    }
    .lang .lbl{width:110px;font-size:13px;color:var(--muted)}
    .bar-wrap{
      flex:1;
      background:linear-gradient(90deg, rgba(255,255,255,0.016), rgba(255,255,255,0.01));
      border-radius:999px;
      padding:6px;
      height:18px;
      display:flex;
      align-items:center;
    }
    .bar{
      height:100%;
      border-radius:999px;
      transition:width 1s cubic-bezier(.2,.9,.25,1);
      background: linear-gradient(90deg,var(--accent1),var(--accent2));
      box-shadow: 0 6px 18px rgba(7,10,30,0.6);
      display:flex;
      align-items:center;
      justify-content:flex-end;
      padding-right:8px;
      font-size:12px;
      color:#fff;
      font-weight:600;
    }

    /* Accomplishments */
    .chips{display:flex;flex-wrap:wrap;gap:8px}
    .chip-acc{background:linear-gradient(90deg,#0b1220, rgba(255,255,255,0.02)); border-radius:10px;padding:8px 10px;font-size:13px;color:var(--muted);border:1px solid rgba(255,255,255,0.02)}

    /* Footer / actions */
    .actions{
      display:flex;
      gap:10px;
      margin-top:18px;
      align-items:center;
    }
    .btn{
      display:inline-flex;
      gap:10px;
      align-items:center;
      padding:10px 14px;
      border-radius:10px;
      font-weight:700;
      text-decoration:none;
      cursor:pointer;
      border:none;
      background:linear-gradient(90deg,var(--accent1),var(--accent2));
      color:white;
      box-shadow:0 8px 30px rgba(7,9,40,0.6);
      transition:transform .18s ease, box-shadow .18s ease;
    }
    .btn:active{transform:translateY(1px)}
    .btn.secondary{
      background:transparent;
      border:1px solid rgba(255,255,255,0.04);
      color:var(--muted);
      font-weight:600;
    }

    /* Responsive */
    @media (max-width:920px){
      .wrap{grid-template-columns:1fr; padding-bottom:60px;}
      .avatar{width:180px;height:180px}
    }

    /* little floaty decorations */
    .float-dot{
      position:absolute;
      width:10px;height:10px;border-radius:50%;
      background:rgba(255,255,255,0.03);
      left:10px; top:10px;
    }
    .float-dot.alt{right:10px; left:auto; top:8px;}
    .small-muted{color:var(--muted); font-size:13px}
    .linkish{color:#bfefff;text-decoration:underline}
  </style>
</head>
<body>
  <main class="wrap">
    <!-- LEFT CARD -->
    <aside class="card" aria-label="Profile card">
      <div class="float-dot"></div>
      <div class="float-dot alt"></div>

      <div class="photo" title="Avatar — replace with your photo.jpg if you have one">
        <!-- SVG initial avatar; to use a real photo replace this SVG with:
             <img src="photo.jpg" alt="Dhruv Saxena" style="width:220px;height:220px;border-radius:16px;object-fit:cover">
        -->
        <svg class="avatar" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DH avatar">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stop-color="#7c3aed"/>
              <stop offset="1" stop-color="#06b6d4"/>
            </linearGradient>
            <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#07102a" flood-opacity="0.5"/>
            </filter>
          </defs>
          <rect width="120" height="120" rx="16" fill="url(#g1)" filter="url(#f1)"/>
          <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="rgba(255,255,255,0.95)" font-weight="700" font-family="Inter, Arial">DS</text>
        </svg>
      </div>

      <div class="name">
        <h1>Dhruv Saxena</h1>
        <p class="small-muted">ResearchGate Fellow · AI & ML · Student Partner · Quizzing champ</p>
      </div>

      <div class="contact" style="margin-top:14px;">
        <div class="chip"><svg height="14" width="14" style="opacity:.85" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Varanasi, India</div>
        <a class="chip" href="tel:+917080880393"><svg height="14" width="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A20 20 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.86.36 1.7.71 2.5a1 1 0 0 1-.24 1L8.91 9.91c1.86 3.73 5.3 7.17 9.03 9.03l1.65-1.65a1 1 0 0 1 1-.24c.8.35 1.64.59 2.5.71a1 1 0 0 1 .75 1V22z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg> +91 7080880393</a>
        <a class="chip" href="mailto:dhruvisgood13@gmail.com">✉ dhruvisgood13@gmail.com</a>
        <a class="chip" href="https://www.linkedin.com/in/dhruv-saxena-3a2b4e7a/" target="_blank" rel="noopener">LinkedIn</a>
        <a class="chip" href="https://github.com/dhruvisgood" target="_blank" rel="noopener">GitHub</a>
        <a class="chip" href="rhfb.pdf" download>📄 Download Resume</a>
      </div>

      <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;">
        <div class="mini-stats">
          <div class="stat">
            <div style="font-size:18px;font-weight:800">AI</div>
            <div class="small-muted">Deep interest</div>
          </div>
          <div class="stat">
            <div style="font-size:18px;font-weight:800">Quizzes</div>
            <div class="small-muted">International wins</div>
          </div>
        </div>
      </div>

      <div style="margin-top:18px">
        <div class="small-muted" style="margin-bottom:6px;font-weight:700">Quick summary</div>
        <p class="small-muted" style="line-height:1.5;margin:0">
          Dedicated ResearchGate Fellow with a strong background in AI development, deep scientific writing, leadership, and creation of the AI tool <strong>ImagoPedia</strong>. Published research, international quiz awards, and experience collaborating with IITBHU, UPPEN, and Cambridge.
        </p>
      </div>

    </aside>

    <!-- RIGHT CONTENT -->
    <section class="content" aria-label="Resume content">
      <div class="title">
        <h2>Experience</h2>
        <div class="small-muted">Latest roles & highlights</div>
      </div>

      <div class="timeline" aria-hidden="false">
        <!-- Student Comet -->
        <div class="job">
          <h3>Partner — Student Comet (Remote)</h3>
          <div class="meta">Oct 2025 — Current</div>
          <p>
            Joined forces with fellow students to promote campus events and initiatives to popularize Comet Browser. Organized workshops and activities for student engagement.
          </p>
        </div>

        <!-- InternShala Student Partner -->
        <div class="job">
          <h3>Student Partner — InternShala (Remote, India)</h3>
          <div class="meta">Sep 2025 — Current</div>
          <p>
            Promoted internship opportunities via social media and campus events. Student Ambassador at Sunbeam Lahartara.
          </p>
        </div>

        <!-- Junior Research Fellow -->
        <div class="job">
          <h3>Junior Research Fellow — ResearchGate (Varanasi, India)</h3>
          <div class="meta">Sep 2025 — Current</div>
          <p>
            Conducted comprehensive literature, scientific and mathematical reviews; collaborated with experts from IITBHU, UPPEN, and Cambridge. Worked on neural-network simulations of biological systems. Provided advanced GPT-5 access and domain resources.
          </p>
        </div>

        <!-- Research Fellow -->
        <div class="job">
          <h3>Research Fellow — Next Voters (Remote)</h3>
          <div class="meta">Sep 2025 — Current</div>
          <p>
            Fellowship focused on developing democracy through AI & technology. Engaged with professors from UPPEN and Stanford to strengthen scholarly work.
          </p>
        </div>
      </div>

      <hr style="opacity:.06;border:none;border-top:1px solid rgba(255,255,255,0.03);margin:20px 0">

      <div class="row">
        <div style="flex:1 1 60%">
          <h2>Education & Training</h2>
          <p class="lead">
            <strong>Sunbeam School Lahartara (Varanasi, India)</strong><br>
            Status: Current. Achievements: National Topper Award; IMO Gold; IEO Gold; School Super Luminary; Scholarship holder (Class IX — 96.13%). Founding member of Young Society Science Club and content writer/quizzer for Dynamic Science Club.
          </p>
          <p class="small-muted" style="margin-top:8px">
            Dissertation & interests: Programming, AI & ML Development, APIs, Physics, Mathematics (Calc I/II), Biology, Chemistry, Biogenomics, Aerodynamics.
          </p>
        </div>

        <div style="flex:1 1 40%">
          <h2>Key Skills</h2>
          <div class="grid" style="margin-top:10px">
            <div class="skill">
              <h4>Project & Research</h4>
              <div class="skill-list">
                <span class="badge">Project management</span>
                <span class="badge">Research analysis</span>
                <span class="badge">Team collaboration</span>
                <span class="badge">Scientific writing</span>
                <span class="badge">Problem-solving</span>
              </div>
            </div>

            <div class="skill">
              <h4>Programming & Data Science</h4>
              <div class="skill-list" style="margin-top:4px">
                <span class="badge">Python</span>
                <span class="badge">NumPy</span>
                <span class="badge">Pandas</span>
                <span class="badge">Matplotlib</span>
                <span class="badge">ML / DL / NLP</span>
                <span class="badge">Computer Vision</span>
                <span class="badge">DSA</span>
                <span class="badge">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr style="opacity:.06;border:none;border-top:1px solid rgba(255,255,255,0.03);margin:18px 0">

      <div class="row">
        <div style="flex:1 1 60%">
          <h2>Languages</h2>
          <p class="small-muted" style="margin:6px 0 12px 0">Proficiency levels (bars show approximate competency):</p>

          <!-- Language bars: values are percentages (you can tweak) -->
          <div id="languages">
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
        </div>

        <div style="flex:1 1 40%">
          <h2>Accomplishments</h2>
          <div class="chips" style="margin-top:8px">
            <div class="chip-acc">ResearchGate Fellow</div>
            <div class="chip-acc">ImagoPedia (AI Tool)</div>
            <div class="chip-acc">Next Voters Fellow</div>
            <div class="chip-acc">Perplexity Student Partner</div>
            <div class="chip-acc">InternShala Student Partner</div>
            <div class="chip-acc">INSPIRE MANAK awardee</div>
            <div class="chip-acc">Co-Lead Dynamic Science Club</div>
            <div class="chip-acc">GeeksforGeeks CS & Math for AI cert</div>
            <div class="chip-acc">Google Certified — AI & ML</div>
            <div class="chip-acc">NVIDIA DLI — LLM dev student</div>
            <div class="chip-acc">IBM Certified — Quantum Computing</div>
          </div>
        </div>
      </div>

      <hr style="opacity:.06;border:none;border-top:1px solid rgba(255,255,255,0.03);margin:18px 0">

      <div class="row" style="align-items:center;">
        <div style="flex:1">
          <h2>Profile</h2>
          <p class="lead">
            A dedicated ResearchGate Fellow with expertise across AI & ML, scientific writing, and tool-building (ImagoPedia). Active in research collaborations, seminars, and competitive quizzing. Passionate about continuous learning and applying cutting-edge AI tech.
          </p>
        </div>
        <div style="width:220px;">
          <div class="small-muted" style="margin-bottom:6px;font-weight:700">Links</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <a class="btn" href="https://github.com/dhruvisgood" target="_blank" rel="noopener">GitHub · dhruvisgood</a>
            <a class="btn secondary" href="https://www.linkedin.com/in/dhruv-saxena-3a2b4e7a/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="actions">
        <a class="btn" href="mailto:dhruvisgood13@gmail.com">Email Dhruv</a>
        <button class="btn secondary" id="printBtn">Print / Save PDF</button>
      </div>

      <footer style="margin-top:18px;color:var(--muted);font-size:13px">
        Crafted with ❤️ — drop your real photo as <code>photo.jpg</code> in the same folder to replace the avatar. Resume PDF: <a class="linkish" href="rhfb.pdf" download>rhfb.pdf</a>
      </footer>

    </section>
  </main>

  <script>
    // Small "experienced coding genius" JS to animate bars and allow print.
    (function(){
      // Animate language bars after load
      function animateBars(){
        document.querySelectorAll('.bar').forEach(function(el, i){
          var pct = Number(el.getAttribute('data-pct')) || 0;
          // small easing stagger
          setTimeout(function(){
            el.style.width = pct + '%';
            // update text to show percent only when width animation is done
            setTimeout(function(){
              el.textContent = pct + '%';
            }, 400);
          }, 200 + i*120);
        });
      }

      // On DOM ready
      document.addEventListener('DOMContentLoaded', function(){
        animateBars();

        // Print button
        var printBtn = document.getElementById('printBtn');
        printBtn.addEventListener('click', function(){
          // open print friendly version (just print this page)
          window.print();
        });

        // keyboard quick shot: press "D" to download resume PDF
        document.addEventListener('keydown', function(e){
          if(e.key === 'd' || e.key === 'D'){
            window.location.href = 'rhfb.pdf';
          }
        });

      });

      // friendly little resize - reanimate on focus (if user navigates back)
      window.addEventListener('focus', function(){ animateBars(); });
    })();
  </script>
</body>
</html>

