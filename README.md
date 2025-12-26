<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Portfolio</title>
  <style>
    :root{
      --max-width:980px;
      --gap:20px;
      --radius:14px;
      --accent:#000;
      --muted: rgba(0,0,0,0.65);
      --bg:#fff;
    }
    *{box-sizing:border-box}
    body{
      margin:0; font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;
      background:var(--bg); color:var(--accent); -webkit-font-smoothing:antialiased;
      min-height: 100vh;
    }

    /* top sticky mini menu */
    #miniMenu{
      position:fixed; top:0; left:0; right:0; height:56px;
      display:flex; align-items:center; justify-content:center;
      gap:14px; background:rgba(255,255,255,0.95); border-bottom:1px solid #000; z-index:40;
      overflow-x: auto; white-space: nowrap; padding: 0 10px;
    }
    #miniMenu a{ text-decoration:none; color:var(--accent); font-weight:600; font-size:13px; cursor: pointer; padding: 5px 2px;}
    #miniMenu a:hover{ text-decoration: underline; }

    /* header banner */
    header{
      margin-top:56px;
      height:220px; border-bottom:2px solid #000; display:flex; align-items:center; justify-content:center;
      overflow:hidden; border-radius:0 0 var(--radius) var(--radius); background:#efefef;
    }
    header img{ width:100%; height:100%; object-fit:cover; display:block; }

    /* layout */
    .wrap{ max-width:var(--max-width); margin:20px auto; padding:0 20px; animation:fadeUp .4s ease; }
    @keyframes fadeUp{ from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:none} }

    section{ background:#fff; border:1px solid #000; padding:22px; border-radius:var(--radius); margin-bottom:20px; }
    
    /* views (SPA behavior) */
    .view-section { display: none; }
    .view-section.active { display: block; }

    /* profile block */
    .profile{ display:flex; gap:var(--gap); align-items:center; justify-content:center; flex-wrap:wrap; }
    .profile-pic{
      width:200px; height:200px; border-radius:16px; overflow:hidden; border:2px solid #000; flex:0 0 200px;
      display:flex; align-items:center; justify-content:center; background:#f5f5f5;
    }
    .profile-pic img{ width:100%; height:100%; object-fit:cover; display:block; }
    .profile-meta{ max-width:640px; flex:1 1 400px; }
    .name-row{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
    .name-row h1{ margin:0; font-size:24px; letter-spacing:-0.2px; }
    .age-badge{
      font-weight:800; font-size:48px; opacity:.1; line-height:1; padding-left:4px;
      display:inline-block; transform:translateY(4px);
    }
    .meta-small{ color:var(--muted); margin:10px 0; line-height:1.5; }

    /* skills bars */
    .skill-item { margin-bottom: 15px; }
    .skill-header { display:flex; justify-content: space-between; font-size: 13px; color: var(--muted); margin-bottom:6px; }
    .bar{ height:14px; background:#eee; border-radius:10px; overflow:hidden; border:1px solid #ddd;}
    .bar > i{ display:block; height:100%; background:#000; width:0; transition:width 1s cubic-bezier(.2,.9,.3,1); }

    /* List Cards */
    .list .item{ 
      border-radius:12px; padding:16px; margin-bottom:12px; border:1px solid #111; background:#fff; 
      cursor:pointer; transition: transform 0.2s, box-shadow 0.2s;
    }
    .list .item:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .item .title-row{ display:flex; justify-content:space-between; align-items:center; gap:10px; }
    .item h4{ margin:0; font-size:17px; }
    
    /* Accomplishments */
    .acc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
    .acc-pill { 
      background: #fdfdfd; border: 1px solid #000; padding: 10px 18px; border-radius: 20px; 
      font-size: 14px; cursor: pointer; transition: all 0.2s; font-weight: 500;
    }
    .acc-pill:hover { background: #000; color: #fff; }
    
    /* Projects Style */
    .project-item { border-left: 6px solid #000 !important; }

    /* Modal */
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6); z-index: 100; display: none;
      align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 20px;
    }
    .modal-card {
      background: #fff; width: 100%; max-width: 600px; max-height: 90vh; overflow-y: auto; padding: 30px;
      border-radius: var(--radius); border: 2px solid #000; box-shadow: 0 20px 50px rgba(0,0,0,0.3);
      position: relative; animation: modalPop 0.3s cubic-bezier(.17,.67,.41,.99);
    }
    @keyframes modalPop{ from{opacity:0; transform:scale(0.9)} to{opacity:1; transform:scale(1)} }
    .modal-close { position: absolute; top: 15px; right: 15px; font-weight: bold; cursor: pointer; font-size: 24px; color: #000; }
    .modal-img { width: 100%; border-radius: 10px; margin-bottom: 20px; border: 1px solid #ddd; display: none; }
    
    /* generic button style */
    button.btn-xs { font-size:12px; padding:6px 12px; border-radius:8px; border:1px solid #000; background:#fff; color:#000; cursor:pointer; font-weight: 600; }
    button.btn-xs:hover { background: #000; color: #fff; }
    button.btn-delete { color: #d32f2f; border-color: #d32f2f; }
    button.btn-delete:hover { background: #d32f2f; color: #fff; }

    /* forms */
    .admin-forms { display:none; border-top: 2px dashed #000; margin-top: 20px; padding-top: 20px; background: #f9f9f9; padding:15px; border-radius: 8px; }
    .form-row{ display:grid; gap:10px; grid-template-columns:1fr; margin-top:5px; }
    input, textarea{ padding:12px; border-radius:10px; border:1px solid #111; font-size:14px; width:100%; font-family: inherit;}
    button.primary{ background:#000; color:#fff; padding:12px 16px; border-radius:10px; border:none; cursor:pointer; font-weight: bold; width: 100%;}
    
    /* Global Admin sticky toggle */
    #adminToggle { position: fixed; bottom: 20px; right: 20px; z-index: 50; }
    #adminToggle button { background: #fff; border: 2px solid #000; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    
    #crashScreen { display:none; flex-direction:column; align-items:center; justify-content:center; position:fixed; inset:0; background:#fff; z-index:999; padding:20px; text-align:center; }

    @media (max-width:720px){
      #miniMenu { justify-content: flex-start; }
      .age-badge{ font-size:36px; opacity:.14; }
      .profile-pic{ width:150px; height:150px; flex-basis:150px; }
      header{height:160px}
    }
    .muted{ color:var(--muted); font-size:14px; line-height: 1.6; }
    .back-btn-container { margin-bottom: 20px; }
  </style>
</head>
<body>

  <div id="crashScreen">
    <h2>Something went wrong</h2>
    <p>The site data might be corrupted.</p>
    <button onclick="localStorage.clear(); location.reload();" class="primary" style="width: auto;">Reset App Data</button>
  </div>

  <div id="miniMenu">
    <a onclick="router('home')">Home</a>
    <a onclick="router('experience')">Experience</a>
    <a onclick="router('projects')">Projects</a>
    <a onclick="router('education')">Education</a>
    <a onclick="router('skills')">Skills</a>
    <a onclick="router('accomplishments')">Accomplishments</a>
    <a onclick="router('blog')">Blogs</a>
  </div>

  <header id="banner">
    <img id="bannerImg" src="banner.jpg" alt="banner" onerror="this.style.background='#e7e7e7'; this.removeAttribute('src');" />
  </header>

  <main class="wrap">
    
    <!-- === HOME VIEW === -->
    <div id="homeView" class="view-section active">
      <section id="profile">
        <div class="profile">
          <div class="profile-pic" id="profilePic">
            <img id="profileImage" src="profile.jpg" alt="Dhruv Saxena" onerror="this.remove();">
          </div>
          <div class="profile-meta">
            <div class="name-row">
              <h1 id="displayName">Dhruv Saxena</h1>
              <div class="age-badge" title="Age">15</div>
            </div>
            <p class="meta-small" id="profileSummary">
              A dedicated ResearchGate Fellow with experience in AI development, scientific writing and building AI tools (ImagoPedia). Collaborations include IIT-BHU, UPPEN & Cambridge.
            </p>
            <p class="muted"><strong>Location:</strong> Varanasi, India &nbsp; • &nbsp; <strong>Email:</strong> <a href="mailto:dhruvisgood13@gmail.com">dhruvisgood13@gmail.com</a></p>
            <p class="muted"><strong>LinkedIn:</strong> dhruv-saxena-3a2b4e7a &nbsp; • &nbsp; <strong>GitHub:</strong> github.com/dhruvisgood</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Get in Touch</h2>
        <form action="https://formspree.io/f/xzzkvjjk" method="POST">
          <div style="display:grid; gap:12px; max-width:560px;">
            <input name="name" type="text" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
            <button class="primary" type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>

    <!-- === EXPERIENCE VIEW === -->
    <div id="experienceView" class="view-section">
      <div class="back-btn-container"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Experience</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('expForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="expForm">
           <h4>Add Experience</h4>
           <div class="form-row">
             <input id="in_exp_title" placeholder="Title (e.g. Researcher)" />
             <textarea id="in_exp_text" rows="3" placeholder="Description"></textarea>
             <input id="in_exp_img" type="file" accept="image/*" />
             <button class="primary" onclick="addData('experience', 'in_exp_title', 'in_exp_text', 'in_exp_img')">Save</button>
           </div>
        </div>
        <div class="list" id="experienceList"></div>
      </section>
    </div>

    <!-- === PROJECTS VIEW === -->
    <div id="projectsView" class="view-section">
      <div class="back-btn-container"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Projects</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('projForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="projForm">
           <h4>Add Project</h4>
           <div class="form-row">
             <input id="in_proj_title" placeholder="Project Name" />
             <textarea id="in_proj_text" rows="4" placeholder="Project Details"></textarea>
             <input id="in_proj_img" type="file" accept="image/*" />
             <button class="primary" onclick="addData('projects', 'in_proj_title', 'in_proj_text', 'in_proj_img')">Save</button>
           </div>
        </div>
        <div class="list" id="projectsList"></div>
      </section>
    </div>

    <!-- === EDUCATION VIEW === -->
    <div id="educationView" class="view-section">
      <div class="back-btn-container"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Education</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('eduForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="eduForm">
           <h4>Add Education</h4>
           <div class="form-row">
             <input id="in_edu_title" placeholder="School / Institution" />
             <textarea id="in_edu_text" rows="3" placeholder="Details"></textarea>
             <button class="primary" onclick="addData('education', 'in_edu_title', 'in_edu_text')">Save</button>
           </div>
        </div>
        <div class="list" id="educationList"></div>
      </section>
    </div>

    <!-- === SKILLS VIEW === -->
    <div id="skillsView" class="view-section">
      <div class="back-btn-container"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Skills</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('skillForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="skillForm">
           <h4>Add Skill</h4>
           <div class="form-row">
             <input id="in_skill_name" placeholder="Skill Name" />
             <input id="in_skill_val" type="number" min="0" max="100" placeholder="Percent" />
             <button class="primary" onclick="addSkill()">Save</button>
           </div>
        </div>
        <div id="skillsList" style="margin-top:20px;"></div>
      </section>
    </div>

    <!-- === ACCOMPLISHMENTS VIEW === -->
    <div id="accomplishmentsView" class="view-section">
      <div class="back-btn-container"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Accomplishments</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('accForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="accForm">
           <h4>Add Accomplishment</h4>
           <div class="form-row">
             <input id="in_acc_title" placeholder="Title" />
             <textarea id="in_acc_text" rows="3" placeholder="Description"></textarea>
             <button class="primary" onclick="addData('accomplishments', 'in_acc_title', 'in_acc_text')">Save</button>
           </div>
        </div>
        <ul id="accList" class="acc-list" style="margin-top:20px;"></ul>
      </section>
    </div>

    <!-- === BLOG VIEW === -->
    <div id="blogView" class="view-section">
      <div class="back-btn-container"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h1 style="margin:0;">Blogs</h1>
          <div class="admin-only" style="display:none;"><button class="btn-xs" onclick="toggleForm('blogForm')">+ New</button></div>
        </div>
        <div class="admin-forms" id="blogForm">
             <div class="form-row">
               <input id="in_blog_title" placeholder="Blog Title" />
               <textarea id="in_blog_text" rows="6" placeholder="Content"></textarea>
               <input id="in_blog_img" type="file" accept="image/*" />
               <button class="primary" onclick="addData('blogs', 'in_blog_title', 'in_blog_text', 'in_blog_img')">Publish</button>
             </div>
        </div>
        <div id="blogList" class="list"></div>
      </section>
    </div>

  </main>

  <!-- MODAL -->
  <div id="infoModal" class="modal-overlay">
    <div class="modal-card">
      <span class="modal-close" onclick="closeModal()">×</span>
      <img id="mImg" class="modal-img" src="" alt="">
      <h3 id="mTitle" style="margin:0 0 15px 0; font-size: 22px;"></h3>
      <div id="mBody" class="muted"></div>
    </div>
  </div>

  <!-- ADMIN TOGGLE -->
  <div id="adminToggle">
    <button id="lockBtn" title="Admin Access">🔒</button>
  </div>

<script>
/* =======================================================
   DEFAULT DATA
   ======================================================= */
const DEFAULT_DATA = {
  "experience": [
    { "id": 1, "title": "Student Partner — Comet Browser", "text": "Promoted campus events, organized workshops and student engagement activities to popularize Comet Browser." },
    { "id": 2, "title": "InternShala Student Partner", "text": "Promoted internships through social media & campus events; campus ambassador at Sunbeam Lahartara." },
    { "id": 3, "title": "Junior Research Fellow — ResearchGate", "text": "Conducted literature reviews, mathematical modelling, and collaborated with IIT-BHU, UPPEN & Cambridge on neural network research." },
    { "id": 4, "title": "Research Fellow — Next Voters", "text": "Fellowship on research for democracy through AI with mentorship from UPPEN and Stanford." }
  ],
  "education": [
    { "id": 1, "title": "Sunbeam School Lahartara", "text": "Current Student. IMO & IEO Gold Medalist. Founding member, Young Society Science Club. Interests: Programming, AI/ML, Physics." }
  ],
  "skills": [
    { "id": 1, "title": "Project Management", "percent": 85 },
    { "id": 2, "title": "Python / ML / DL", "percent": 90 },
    { "id": 3, "title": "Computer Vision / NLP", "percent": 88 },
    { "id": 4, "title": "Scientific Writing", "percent": 95 }
  ],
  "accomplishments": [
    { "id": 1, "title": "ResearchGate Fellow", "text": "Awarded fellowship for outstanding contribution to open science." },
    { "id": 2, "title": "Next Voters Fellow", "text": "Recognized for work in AI and democracy." },
    { "id": 3, "title": "Perplexity Student Partner", "text": "Campus ambassador for Perplexity AI." },
    { "id": 4, "title": "INSPIRE MANAK Awardee", "text": "National level award for scientific innovation." },
    { "id": 5, "title": "Google Certified in AI & ML", "text": "Professional certification from Google Cloud." },
    { "id": 6, "title": "NVIDIA DLI Certified", "text": "LLM Development certification." }
  ],
  "projects": [
    { "id": 1, "title": "ImagoPedia", "text": "An AI-powered tool designed to assist in scientific research and image analysis. Built using Python and Deep Learning frameworks." }
  ],
  "blogs": [
    { "id": 100, "title": "TESLA IN INDIA", "text": "Tesla's entry into India signals a major shift in the EV landscape. This article explores the fundamentals of automotive history from 1769 to Musk's Tesla. We discuss ADAS, Autopilot, and the specific challenges of Indian traffic conditions." },
    { "id": 101, "title": "HEYY", "text": "hmmm 🤍" }
  ]
};

/* =============================
   STATE & INIT
   ============================= */
const STATE = {
  isAdmin: false,
  data: {}
};

function init(){
  try {
    const stored = localStorage.getItem('dhruv_portfolio_data');
    if(stored){
      STATE.data = JSON.parse(stored);
    } else {
      STATE.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      saveData();
    }
    
    renderAll();
    
    // Admin listener
    document.getElementById('lockBtn').addEventListener('click', handleAdminUnlock);
    
    // Image fallback
    const profileImg = document.getElementById('profileImage');
    if(profileImg) {
      profileImg.onerror = () => {
         const c = document.getElementById('profilePic');
         if(c) c.innerHTML = '<div style="font-size:30px; font-weight:bold;">DS</div>';
      };
    }
  } catch(e) {
    console.error("Critical Failure:", e);
    document.getElementById('crashScreen').style.display = 'flex';
  }
}

function saveData(){
  localStorage.setItem('dhruv_portfolio_data', JSON.stringify(STATE.data));
  renderAll();
}

/* NAVIGATION */
function router(viewName){
  // Hide all
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  
  // Show target
  const viewId = viewName + 'View';
  const target = document.getElementById(viewId);
  if(target){
    target.classList.add('active');
    window.scrollTo(0,0);
  } else if(viewName === 'home') {
    document.getElementById('homeView').classList.add('active');
  }
}

function toggleForm(id){
  const f = document.getElementById(id);
  f.style.display = (f.style.display === 'block') ? 'none' : 'block';
}

/* RENDERING */
function renderAll(){
  renderList('experience', 'experienceList');
  renderList('projects', 'projectsList', true);
  renderList('education', 'educationList');
  renderList('blogs', 'blogList');
  renderSkills();
  renderAccomplishments();
}

function renderList(key, containerId, isProject = false){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  const items = STATE.data[key] || [];

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    if(isProject) div.classList.add('project-item');

    let controlsHtml = '';
    if(STATE.isAdmin){
      controlsHtml = `
        <div class="controls" style="margin-top:10px;">
          <button class="btn-xs" onclick="event.stopPropagation(); editItem('${key}', ${item.id})">Edit</button>
          <button class="btn-xs btn-delete" onclick="event.stopPropagation(); deleteItem('${key}', ${item.id})">Del</button>
        </div>`;
    }

    div.innerHTML = `
      <div class="title-row">
        <h4>${esc(item.title)}</h4>
      </div>
      <p class="muted" style="margin-top:5px; font-size:13px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">
        ${esc(item.text)}
      </p>
      ${controlsHtml}
    `;
    div.onclick = () => openModal(item.title, item.text, item.image);
    container.appendChild(div);
  });
}

function renderSkills(){
  const container = document.getElementById('skillsList');
  if(!container) return;
  container.innerHTML = '';
  (STATE.data.skills || []).forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.innerHTML = `
      <div class="skill-header">
        <span>${esc(skill.title)}</span>
        <span>${skill.percent}% ${STATE.isAdmin ? `<span style="cursor:pointer; color:red; margin-left:8px;" onclick="deleteItem('skills', ${skill.id})">×</span>` : ''}</span>
      </div>
      <div class="bar"><i style="width:0%" data-width="${skill.percent}%"></i></div>
    `;
    container.appendChild(div);
  });
  setTimeout(() => {
    document.querySelectorAll('.bar i').forEach(b => b.style.width = b.getAttribute('data-width'));
  }, 100);
}

function renderAccomplishments(){
  const container = document.getElementById('accList');
  if(!container) return;
  container.innerHTML = '';
  (STATE.data.accomplishments || []).forEach(acc => {
    const li = document.createElement('li');
    li.className = 'acc-pill';
    li.innerHTML = `${esc(acc.title)} ${STATE.isAdmin ? `<span style="margin-left:5px; color:#d32f2f;" onclick="event.stopPropagation(); deleteItem('accomplishments', ${acc.id})">×</span>` : ''}`;
    li.onclick = () => openModal(acc.title, acc.text);
    container.appendChild(li);
  });
}

/* MODAL SYSTEM */
function openModal(title, text, image){
  const mTitle = document.getElementById('mTitle');
  const mBody = document.getElementById('mBody');
  const mImg = document.getElementById('mImg');
  
  mTitle.textContent = title;
  mBody.innerHTML = esc(text).replace(/\n/g, '<br>');
  
  if(image){
    mImg.src = image;
    mImg.style.display = 'block';
  } else {
    mImg.style.display = 'none';
  }
  
  document.getElementById('infoModal').style.display = 'flex';
}
function closeModal(){ document.getElementById('infoModal').style.display = 'none'; }
document.getElementById('infoModal').onclick = (e) => { if(e.target.id === 'infoModal') closeModal(); }

/* ADMIN TOOLS */
const PASSKEY = 'itrustedyou';

function handleAdminUnlock(){
  if(STATE.isAdmin) return;
  const pass = prompt("Admin Passkey:");
  if(pass === PASSKEY){
    STATE.isAdmin = true;
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');
    document.getElementById('lockBtn').textContent = '🔓';
    
    const btn = document.createElement('button');
    btn.textContent = 'EXPORT DATA';
    btn.className = 'primary';
    btn.style.position = 'fixed'; btn.style.bottom = '74px'; btn.style.right = '20px'; btn.style.zIndex='100'; btn.style.width = 'auto';
    btn.onclick = () => {
        const exportCode = "const DEFAULT_DATA = " + JSON.stringify(STATE.data, null, 2) + ";";
        navigator.clipboard.writeText(exportCode);
        alert('Code Copied! Replace the DEFAULT_DATA block in your file.');
    };
    document.body.appendChild(btn);
    renderAll();
  }
}

async function addData(key, titleId, textId, imgId){
  const title = document.getElementById(titleId).value;
  const text = document.getElementById(textId).value;
  if(!title) return;
  
  let imgStr = null;
  if(imgId){
     const file = document.getElementById(imgId).files[0];
     if(file) imgStr = await toBase64(file);
  }

  STATE.data[key].push({ id: Date.now(), title, text, image: imgStr });
  saveData();
  document.getElementById(titleId).value = '';
  document.getElementById(textId).value = '';
  if(imgId) document.getElementById(imgId).value = '';
  toggleForm(document.getElementById(titleId).closest('.admin-forms').id);
}

function addSkill(){
  const title = document.getElementById('in_skill_name').value;
  const perc = document.getElementById('in_skill_val').value;
  if(!title || !perc) return;
  STATE.data.skills.push({ id: Date.now(), title, percent: parseInt(perc) });
  saveData();
  document.getElementById('in_skill_name').value = '';
  document.getElementById('in_skill_val').value = '';
}

function deleteItem(key, id){
  if(confirm("Delete?")){
    STATE.data[key] = STATE.data[key].filter(x => x.id !== id);
    saveData();
  }
}

function editItem(key, id){
  const item = STATE.data[key].find(x => x.id === id);
  const newT = prompt("Edit Title:", item.title);
  if(newT === null) return;
  const newTx = prompt("Edit Details:", item.text);
  item.title = newT;
  if(newTx !== null) item.text = newTx;
  saveData();
}

function esc(s){ return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function toBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result);
    reader.onerror = e => rej(e);
  });
}

init();
</script>
</body>
</html>
