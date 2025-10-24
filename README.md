<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Interactive Resume</title>
  <meta name="description" content="Interactive resume / portfolio for Dhruv Saxena" />
  <style>
    /* ---------- Reset & base ---------- */
    :root{
      --bg:#0f1724;
      --card:#0b1220;
      --accent:#6ee7b7;
      --muted:#9aa4b2;
      --glass: rgba(255,255,255,0.04);
      --glass-2: rgba(255,255,255,0.02);
      --glass-border: rgba(255,255,255,0.06);
      --card-radius:18px;
      --mono: "SFMono-Regular", ui-monospace, "Roboto Mono", Menlo, monospace;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background:
        radial-gradient(1200px 600px at 10% 10%, rgba(110,231,183,0.06), transparent 8%),
        radial-gradient(900px 400px at 90% 90%, rgba(99,102,241,0.03), transparent 10%),
        var(--bg);
      color:#e6eef6;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      padding:40px;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    /* ---------- Main container ---------- */
    .resume-wrap{
      width:100%;
      max-width:1100px;
      display:grid;
      grid-template-columns: 360px 1fr;
      gap:26px;
      align-items:start;
    }
    .card{
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius: var(--card-radius);
      border: 1px solid var(--glass-border);
      box-shadow: 0 10px 30px rgba(2,6,23,0.6);
      overflow:hidden;
      backdrop-filter: blur(6px) saturate(120%);
    }

    /* ---------- Left column: photo & contact ---------- */
    .left {
      padding:22px;
      display:flex;
      flex-direction:column;
      gap:18px;
      min-height:520px;
    }
    .portrait{
      border-radius:14px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,0.04);
      box-shadow: 0 8px 20px rgba(0,0,0,0.6);
      position:relative;
    }
    .portrait img{
      width:100%;
      height:360px;
      object-fit:cover;
      display:block;
      transform-origin:center;
      transition: transform .9s cubic-bezier(.2,.9,.2,1);
      filter: saturate(1.03) contrast(1.02);
    }
    .portrait:hover img{ transform: scale(1.04) rotate(-0.6deg); }

    .name {
      display:flex;
      gap:12px;
      align-items:center;
      justify-content:space-between;
    }
    .name h1{
      margin:0;
      font-size:22px;
      letter-spacing: -0.4px;
    }
    .role{
      font-size:12px;
      color:var(--muted);
      margin-top:6px;
    }

    .contact{
      display:flex;
      flex-direction:column;
      gap:8px;
      font-size:14px;
      color:var(--muted);
    }
    .contact a{ color:inherit; text-decoration:none; border-bottom:1px dashed rgba(255,255,255,0.03); padding-bottom:4px; }
    .contact .chip{
      display:flex;
      gap:8px;
      align-items:center;
      background:var(--glass-2);
      padding:8px;
      border-radius:10px;
      font-size:13px;
      color:#d9eef4;
      border:1px solid rgba(255,255,255,0.02);
    }

    .badges{
      display:flex;
      gap:8px;
      flex-wrap:wrap;
    }
    .badge{
      background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      padding:6px 10px;
      border-radius:999px;
      font-size:12px;
      color:var(--muted);
      border:1px solid rgba(255,255,255,0.02);
    }

    /* ---------- Right column: details ---------- */
    .right{
      padding:22px;
      display:flex;
      flex-direction:column;
      gap:18px;
    }
    .section-title{
      display:flex;
      align-items:center;
      gap:12px;
    }
    .section-title h2{
      margin:0;
      font-size:16px;
      letter-spacing:-0.3px;
    }
    .summary{
      color:#cfeaf0;
      line-height:1.5;
      font-size:15px;
    }

    /* ---------- Experience cards ---------- */
    .job{
      background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent);
      border-radius:12px;
      padding:14px;
      display:flex;
      gap:14px;
      align-items:flex-start;
      border:1px solid rgba(255,255,255,0.02);
      transition: transform .28s ease, box-shadow .28s ease;
    }
    .job:hover{ transform: translateY(-6px); box-shadow: 0 14px 40px rgba(2,6,23,0.6); }
    .job .meta{
      min-width:140px;
      font-size:13px;
      color:var(--muted);
    }
    .job .meta .dur{ display:block; margin-top:6px; color:#9eb6bd; font-size:12px; }
    .job .detail h3{ margin:0; font-size:15px; }
    .job .detail p{ margin:6px 0 0 0; color:#cfeaf0; font-size:14px; }

    /* ---------- Skill grid ---------- */
    .skills-grid{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      gap:12px;
    }
    .skill{
      background:var(--glass);
      border-radius:10px;
      padding:10px;
      border:1px solid rgba(255,255,255,0.02);
      font-size:13px;
      color:#d8f4ef;
    }

    /* ---------- Languages (bar thingy) ---------- */
    .lang-list{ display:flex; flex-direction:column; gap:12px; }
    .lang{
      display:flex;
      align-items:center;
      gap:12px;
    }
    .lang .label{
      width:120px;
      font-size:13px;
      color:var(--muted);
      min-width:110px;
    }
    .bar-wrap{
      flex:1;
      background:linear-gradient(90deg, rgba(255,255,255,0.02), transparent);
      height:14px;
      border-radius:999px;
      padding:3px;
      border:1px solid rgba(255,255,255,0.03);
      overflow:hidden;
    }
    .bar{
      height:100%;
      width:0%;
      border-radius:999px;
      background: linear-gradient(90deg, rgba(110,231,183,0.14), rgba(99,102,241,0.18));
      box-shadow: 0 6px 20px rgba(110,231,183,0.06);
      display:flex;
      align-items:center;
      justify-content:flex-end;
      padding-right:10px;
      font-size:12px;
      color:#022;
      font-weight:600;
    }
    .lang .lvl{ width:48px; text-align:right; color:var(--muted); font-size:13px; }

    /* ---------- Little utilities ---------- */
    .controls{
      display:flex;
      gap:8px;
      margin-top:8px;
    }
    .btn{
      background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02));
      color:#dff9f0;
      border-radius:10px;
      padding:10px 12px;
      font-weight:600;
      font-size:13px;
      border:1px solid rgba(255,255,255,0.03);
      text-decoration:none;
      display:inline-flex;
      gap:8px;
      align-items:center;
      transition: transform .14s ease, box-shadow .14s ease;
    }
    .btn:hover{ transform: translateY(-3px); box-shadow: 0 12px 30px rgba(2,6,23,0.55); }

    .tiny{
      font-size:12px;
      color:var(--muted);
    }

    /* ---------- Footer ---------- */
    .foot{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      margin-top:6px;
      color:var(--muted);
      font-size:13px;
    }

    /* ---------- Responsive ---------- */
    @media (max-width:980px){
      .resume-wrap{ grid-template-columns: 1fr; padding:12px; }
      .portrait img{ height:300px; }
    }
  </style>
</head>
<body>
  <main class="resume-wrap">

    <!-- LEFT: Portrait & Contacts -->
    <aside class="card left" aria-label="left column">
      <div class="portrait" title="Profile photo (replace profile.jpg)">
        <img src="profile.jpg" alt="Dhruv Saxena — profile photo" onerror="this.src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=60&auto=format&fit=crop'">
      </div>

      <div class="name">
        <div>
          <h1>Dhruv Saxena</h1>
          <div class="role">Research Fellow • AI / ML • Student Partner</div>
        </div>
        <div style="text-align:right;">
          <div class="tiny">Varanasi, India</div>
          <div class="tiny">221010</div>
        </div>
      </div>

      <div class="contact" aria-label="contact info">
        <div class="chip">📞 +91 7080880393</div>
        <a class="chip" href="mailto:dhruvisgood13@gmail.com">✉️ dhruvisgood13@gmail.com</a>
        <a class="chip" href="https://github.com/dhruvisgood" target="_blank" rel="noopener">🐙 github.com/dhruvisgood</a>
        <a class="chip" href="https://www.linkedin.com/in/dhruv-saxena-3a2b4e7a/" target="_blank" rel="noopener">🔗 LinkedIn</a>
      </div>

      <div>
        <div class="tiny">Highlights & Fellowships</div>
        <div class="badges" style="margin-top:8px;">
          <span class="badge">ResearchGate Fellow</span>
          <span class="badge">Next Voters Fellow</span>
          <span class="badge">Perplexity / InternShala</span>
          <span class="badge">ImagoPedia</span>
        </div>
      </div>

      <div style="margin-top:auto;">
        <div class="tiny">Quick actions</div>
        <div class="controls" style="margin-top:8px;">
          <a class="btn" href="rhfb.pdf" download>⬇️ Download Resume</a>
          <button class="btn" id="themeToggle" onclick="toggleTheme()" title="Toggle fun glow">✨ Theme</button>
        </div>
        <div class="foot" style="margin-top:12px;">
          <div>Built with ❤️</div>
          <div class="tiny">Last updated: Oct 2025</div>
        </div>
      </div>
    </aside>

    <!-- RIGHT: Summary, Experience, Skills, Languages -->
    <section class="card right" aria-label="right column">

      <!-- Summary -->
      <div>
        <div class="section-title">
          <h2>Summary</h2>
        </div>
        <p class="summary">
          A dedicated ResearchGate Fellow with strong AI development, deep scientific writing, leadership,
          and creator of the ImagoPedia AI tool. Keen on research collaboration and practical AI integration.
          Published research, quiz champion, and constantly exploring new ML frontiers. (Text from uploaded resume). :contentReference[oaicite:1]{index=1}
        </p>
      </div>

      <!-- Experience -->
      <div>
        <div class="section-title">
          <h2>Experience</h2>
        </div>

        <article class="job">
          <div class="meta">
            Student Partner<br><span class="dur">Perplexity / Comet Browser — Oct 2025 - Current</span>
          </div>
          <div class="detail">
            <h3>Student Partner — Student Comet / Perception</h3>
            <p>Promoted campus engagement, organized workshops and events. Engaged fellow students to popularize the Comet Browser experience.</p>
          </div>
        </article>

        <article class="job">
          <div class="meta">
            Student Partner<br><span class="dur">InternShala — Sep 2025 - Current</span>
          </div>
          <div class="detail">
            <h3>InternShala Student Partner</h3>
            <p>Promoted internship opportunities and served as a Student Ambassador at Sunbeam Lahartara.</p>
          </div>
        </article>

        <article class="job">
          <div class="meta">
            Junior Research Fellow<br><span class="dur">ResearchGate — Sep 2025 - Current</span>
          </div>
          <div class="detail">
            <h3>Junior Research Fellow, ResearchGate</h3>
            <p>Conducted literature reviews, collaborated with researchers from IITBHU, UPPEN, Cambridge; researched neural systems & simulation projects.</p>
          </div>
        </article>

        <article class="job">
          <div class="meta">
            Research Fellow<br><span class="dur">Next Voters — Sep 2025 - Current</span>
          </div>
          <div class="detail">
            <h3>Next Voters Research Fellow</h3>
            <p>Selected to research development of democracy through AI and technology; collaborated with academic mentors.</p>
          </div>
        </article>
      </div>

      <!-- Skills -->
      <div>
        <div class="section-title"><h2>Skills & Tools</h2></div>
        <div class="skills-grid" aria-hidden="false">
          <div class="skill">Python • Numpy • Pandas • Matplotlib</div>
          <div class="skill">Machine Learning • Deep Learning • NLP • CV</div>
          <div class="skill">Data Structures & Algorithms • SQL</div>
          <div class="skill">Research Analysis • Scientific Writing • Project Management</div>
        </div>
      </div>

      <!-- Languages -->
      <div>
        <div class="section-title"><h2>Languages</h2></div>
        <div class="lang-list" id="langList">
          <!-- Each .bar will be animated by JS -->
          <div class="lang">
            <div class="label">English</div>
            <div class="bar-wrap" aria-hidden="true"><div class="bar" data-val="90">90%</div></div>
            <div class="lvl">C1</div>
          </div>

          <div class="lang">
            <div class="label">Hindi</div>
            <div class="bar-wrap"><div class="bar" data-val="95">95%</div></div>
            <div class="lvl">C2</div>
          </div>

          <div class="lang">
            <div class="label">French</div>
            <div class="bar-wrap"><div class="bar" data-val="40">40%</div></div>
            <div class="lvl">A2</div>
          </div>

          <div class="lang">
            <div class="label">Japanese</div>
            <div class="bar-wrap"><div class="bar" data-val="18">18%</div></div>
            <div class="lvl">A1</div>
          </div>

          <div class="lang">
            <div class="label">Bengali</div>
            <div class="bar-wrap"><div class="bar" data-val="18">18%</div></div>
            <div class="lvl">A1</div>
          </div>
        </div>
      </div>

      <!-- Accomplishments -->
      <div>
        <div class="section-title"><h2>Accomplishments</h2></div>
        <ul style="margin:8px 0 0 18px; color:#cfeaf0; line-height:1.45;">
          <li>ResearchGate Fellow • ImagoPedia (AI Tool)</li>
          <li>INSPIRE MANAK awardee • Google & NVIDIA certified</li>
          <li>Won international quizzes • Co-Lead Dynamic Science Club</li>
        </ul>
      </div>

    </section>
  </main>

  <script>
    /* ---------- Little playful JS ---------- */

    // Progressively reveal language bars on load
    document.addEventListener('DOMContentLoaded', ()=> {
      const bars = document.querySelectorAll('.bar');
      bars.forEach((b, i) => {
        const val = parseInt(b.dataset.val || '0', 10);
        // stagger animation delays
        setTimeout(() => {
          // animate width with springy effect using CSS transitions
          b.style.transition = 'width 1100ms cubic-bezier(.22,1,.36,1), transform 700ms ease';
          b.style.width = val + '%';
          // tiny bounce
          b.style.transform = 'translateY(-2px)';
          setTimeout(()=> b.style.transform = 'translateY(0)', 600);
        }, 180 * i + 200);
      });
    });

    // Theme toggle (simple hue rotation / glow)
    let themeOn = false;
    function toggleTheme(){
      themeOn = !themeOn;
      if(themeOn){
        document.documentElement.style.setProperty('--accent','#ffd166');
        document.body.style.transition = 'filter .6s ease';
        document.body.style.filter = 'saturate(1.05) brightness(1.03)';
      } else {
        document.documentElement.style.setProperty('--accent','#6ee7b7');
        document.body.style.filter = 'none';
      }
      // micro confetti-ish dot (tiny flourish)
      tinySpark();
    }

    function tinySpark(){
      const dot = document.createElement('div');
      dot.style.position='fixed';
      dot.style.left=(50 + (Math.random()-0.5)*200)+'%';
      dot.style.top=(20 + (Math.random()-0.5)*200)+'%';
      dot.style.width='10px'; dot.style.height='10px';
      dot.style.borderRadius='50%';
      dot.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(110,231,183,0.9))';
      dot.style.pointerEvents='none'; dot.style.opacity='0.95';
      dot.style.transform='scale(0)';
      dot.style.transition='transform .6s ease, opacity .9s ease';
      document.body.appendChild(dot);
      requestAnimationFrame(()=> dot.style.transform='scale(1.6)');
      setTimeout(()=> { dot.style.opacity='0'; }, 600);
      setTimeout(()=> { dot.remove(); }, 1600);
    }

    // Accessible keyboard shortcut: press "L" to toggle language animation (replay)
    window.addEventListener('keydown', (e)=>{
      if(e.key.toLowerCase() === 'l'){
        const bars = document.querySelectorAll('.bar');
        bars.forEach(b => { b.style.width = '0%'; });
        setTimeout(()=> {
          bars.forEach((b, i) => {
            const val = parseInt(b.dataset.val || '0', 10);
            setTimeout(()=> b.style.width = val + '%', 180 * i + 200);
          });
        }, 180);
      }
    });

    // If user has no profile.jpg placed, we already provide fallback via onerror of <img>.
  </script>
</body>
</html>

