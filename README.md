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
    }

    /* top sticky mini menu */
    #miniMenu{
      position:fixed; top:0; left:0; right:0; height:56px;
      display:flex; align-items:center; justify-content:center;
      gap:18px; background:rgba(255,255,255,0.98); border-bottom:1px solid #111; z-index:40;
    }
    #miniMenu a{ text-decoration:none; color:var(--accent); font-weight:600; font-size:14px; cursor: pointer;}
    #miniMenu a:hover{ text-decoration: underline; }

    /* header banner */
    header{
      margin-top:56px;
      height:260px; border-bottom:2px solid #000; display:flex; align-items:center; justify-content:center;
      overflow:hidden; border-radius:0 0 var(--radius) var(--radius); background:#efefef;
    }
    header img{ width:100%; height:100%; object-fit:cover; display:block; }

    /* layout */
    .wrap{ max-width:var(--max-width); margin:28px auto; padding:0 20px; animation:fadeUp .5s ease; }
    @keyframes fadeUp{ from{opacity:0; transform:translateY(8px)} to{opacity:1; transform:none} }

    section{ background:#fff; border:1px solid #000; padding:22px; border-radius:var(--radius); margin-bottom:20px; }
    
    /* views (SPA behavior) */
    .view-section { display: none; }
    .view-section.active { display: block; animation:fadeUp .5s ease; }

    /* profile block */
    .profile{ display:flex; gap:var(--gap); align-items:center; justify-content:center; flex-wrap:wrap; }
    .profile-pic{
      width:220px; height:220px; border-radius:16px; overflow:hidden; border:2px solid #000; flex:0 0 220px;
      display:flex; align-items:center; justify-content:center; background:#f5f5f5;
    }
    .profile-pic img{ width:100%; height:100%; object-fit:cover; display:block; }
    .profile-meta{ max-width:640px; flex:1 1 420px; }
    .name-row{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
    .name-row h1{ margin:0; font-size:26px; letter-spacing:-0.2px; }
    .age-badge{
      font-weight:800; font-size:56px; opacity:.12; line-height:1; padding-left:6px;
      display:inline-block; transform:translateY(4px);
    }
    .meta-small{ color:var(--muted); margin:10px 0; }

    /* skills bars */
    .skill-item { margin-bottom: 12px; }
    .skill-header { display:flex; justify-content: space-between; font-size: 13px; color: var(--muted); margin-bottom:4px; }
    .bar{ height:16px; background:#eee; border-radius:10px; overflow:hidden; }
    .bar > i{ display:block; height:100%; background:#000; width:0; transition:width 1s cubic-bezier(.2,.9,.3,1); }

    /* lists (Experience, Projects, Education) */
    .list .item{ border-radius:12px; padding:12px; margin-bottom:8px; border:1px solid #111; background:#fff; }
    .item .title-row{ display:flex; justify-content:space-between; align-items:center; gap:10px; cursor:pointer; }
    .item h4{ margin:0; font-size:16px; }
    .item .controls{ display:flex; gap:8px; align-items:center; }
    
    /* generic button style */
    button.btn-xs { font-size:12px; padding:4px 8px; border-radius:6px; border:none; background:#000; color:#fff; cursor:pointer; }
    button.btn-xs:hover { opacity: 0.8; }
    button.btn-delete { background: #d32f2f; }

    .details{ margin-top:10px; color:var(--muted); display:none; border-top:1px dashed #ddd; padding-top:10px; }
    .item.expanded .details { display: block; }
    
    /* Accomplishments */
    .acc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 8px; }
    .acc-pill { 
      background: #f0f0f0; border: 1px solid #ccc; padding: 8px 12px; border-radius: 20px; 
      font-size: 14px; cursor: pointer; transition: all 0.2s; 
    }
    .acc-pill:hover { background: #000; color: #fff; border-color: #000; }
    
    /* Projects (Grid-ish or List) */
    .project-item { border-left: 4px solid #000; }

    /* Modal */
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5); z-index: 100; display: none;
      align-items: center; justify-content: center; backdrop-filter: blur(2px);
    }
    .modal-card {
      background: #fff; width: 90%; max-width: 500px; padding: 24px;
      border-radius: var(--radius); border: 2px solid #000; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      position: relative; animation: fadeUp 0.3s ease;
    }
    .modal-close { position: absolute; top: 12px; right: 12px; font-weight: bold; cursor: pointer; font-size: 20px; }
    
    /* forms */
    .admin-forms { display:none; border-top: 2px dashed #000; margin-top: 20px; padding-top: 20px; background: #f9f9f9; padding:15px; border-radius: 8px; }
    .form-row{ display:grid; gap:8px; grid-template-columns:1fr; margin-top:5px; }
    input, textarea{ padding:10px; border-radius:10px; border:1px solid #111; font-size:14px; width:100%; font-family: inherit;}
    button.primary{ background:#000; color:#fff; padding:10px 14px; border-radius:10px; border:none; cursor:pointer;}
    
    /* Global Admin sticky toggle */
    #adminToggle { position: fixed; bottom: 20px; right: 20px; z-index: 50; }
    #adminToggle button { background: #fff; border: 2px solid #000; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-weight: bold; }
    
    /* responsive tweaks */
    @media (max-width:720px){
      .age-badge{ font-size:36px; opacity:.14; }
      .profile-pic{ width:170px; height:170px; flex-basis:170px; }
      header{height:180px}
    }
    .muted{ color:var(--muted); font-size:13px }
  </style>
</head>
<body>

  <div id="miniMenu">
    <a onclick="router('home', 'profile')">Profile</a>
    <a onclick="router('home', 'experience')">Experience</a>
    <a onclick="router('home', 'projects')">Projects</a>
    <a onclick="router('home', 'education')">Education</a>
    <a onclick="router('home', 'skills')">Skills</a>
    <a onclick="router('home', 'accomplishments')">Accomplishments</a>
    <a onclick="router('blog', null)">Blogs</a>
  </div>

  <header id="banner">
    <img id="bannerImg" src="banner.jpg" alt="banner" onerror="this.style.background='#e7e7e7'; this.removeAttribute('src');" />
  </header>

  <main class="wrap">
    
    <!-- === MAIN PAGE VIEW === -->
    <div id="homeView" class="view-section active">

      <!-- PROFILE -->
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

      <!-- EXPERIENCE -->
      <section id="experience">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Experience</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('expForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="expForm">
           <h4>Add Experience</h4>
           <div class="form-row">
             <input id="in_exp_title" placeholder="Title (e.g. Researcher)" />
             <textarea id="in_exp_text" rows="2" placeholder="Description"></textarea>
             <input id="in_exp_img" type="file" accept="image/*" />
             <button class="primary" onclick="addData('experience', 'in_exp_title', 'in_exp_text', 'in_exp_img')">Save</button>
           </div>
        </div>
        <div class="list" id="experienceList"></div>
      </section>

      <!-- PROJECTS -->
      <section id="projects">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Projects</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('projForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="projForm">
           <h4>Add Project</h4>
           <div class="form-row">
             <input id="in_proj_title" placeholder="Project Name" />
             <textarea id="in_proj_text" rows="3" placeholder="Project Details"></textarea>
             <input id="in_proj_img" type="file" accept="image/*" />
             <button class="primary" onclick="addData('projects', 'in_proj_title', 'in_proj_text', 'in_proj_img')">Save</button>
           </div>
        </div>
        <div class="list" id="projectsList"></div>
      </section>

      <!-- EDUCATION -->
      <section id="education">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Education</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('eduForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="eduForm">
           <h4>Add Education</h4>
           <div class="form-row">
             <input id="in_edu_title" placeholder="School / Institution" />
             <textarea id="in_edu_text" rows="2" placeholder="Details (Grades, Activities)"></textarea>
             <button class="primary" onclick="addData('education', 'in_edu_title', 'in_edu_text')">Save</button>
           </div>
        </div>
        <div class="list" id="educationList"></div>
      </section>

      <!-- SKILLS -->
      <section id="skills">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Skills</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('skillForm')">+ Add</button></div>
        </div>
        <div class="admin-forms" id="skillForm">
           <h4>Add Skill</h4>
           <div class="form-row">
             <input id="in_skill_name" placeholder="Skill Name (e.g. Python)" />
             <input id="in_skill_val" type="number" min="0" max="100" placeholder="Percent (0-100)" />
             <button class="primary" onclick="addSkill()">Save</button>
           </div>
        </div>
        <div id="skillsList" style="margin-top:10px;"></div>
      </section>

      <!-- ACCOMPLISHMENTS -->
      <section id="accomplishments">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>Accomplishments</h2>
            <div class="admin-only" style="display:none"><button class="btn-xs" onclick="toggleForm('accForm')">+ Add</button></div>
        </div>
        <p class="muted">Click items for details.</p>
        <div class="admin-forms" id="accForm">
           <h4>Add Accomplishment</h4>
           <div class="form-row">
             <input id="in_acc_title" placeholder="Title (e.g. Gold Medalist)" />
             <textarea id="in_acc_text" rows="3" placeholder="Detailed description for the modal popup"></textarea>
             <button class="primary" onclick="addData('accomplishments', 'in_acc_title', 'in_acc_text')">Save</button>
           </div>
        </div>
        <ul id="accList" class="acc-list"></ul>
      </section>

      <!-- CONTACT -->
      <section id="contact">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/xzzkvjjk" method="POST">
          <div style="display:grid; gap:8px; max-width:560px;">
            <input name="name" type="text" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
            <button class="primary" type="submit">Send message</button>
          </div>
        </form>
      </section>

    </div><!-- End HomeView -->

    <!-- === BLOG PAGE VIEW === -->
    <div id="blogView" class="view-section">
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h1 style="margin:0;">Blogs</h1>
          <button class="btn-xs" onclick="router('home', null)">← Back to Home</button>
        </div>
        
        <div class="admin-only" style="display:none; margin-bottom:20px;">
           <button class="btn-xs" onclick="toggleForm('blogForm')">+ New Blog Post</button>
           <div class="admin-forms" id="blogForm">
             <div class="form-row">
               <input id="in_blog_title" placeholder="Blog Title" />
               <textarea id="in_blog_text" rows="6" placeholder="Content"></textarea>
               <input id="in_blog_img" type="file" accept="image/*" />
               <button class="primary" onclick="addData('blogs', 'in_blog_title', 'in_blog_text', 'in_blog_img')">Publish</button>
             </div>
           </div>
        </div>

        <div id="blogList" class="list"></div>
      </section>
    </div>

  </main>

  <!-- MODAL FOR ACCOMPLISHMENTS -->
  <div id="infoModal" class="modal-overlay">
    <div class="modal-card">
      <span class="modal-close" onclick="closeModal()">×</span>
      <h3 id="mTitle" style="margin-top:0"></h3>
      <div id="mBody" class="muted" style="line-height:1.6"></div>
    </div>
  </div>

  <!-- ADMIN TOGGLE -->
  <div id="adminToggle">
    <button id="lockBtn" title="Admin Access">🔒</button>
  </div>

<script>
/* =======================================================
   DEFAULT DATA (Fallback if localStorage is empty)
   Admin Note: To make changes permanent for everyone, 
   Export data from Admin Panel and paste it here.
   ======================================================= */
const DEFAULT_DATA = {
  experience: [
    { id: 1, title: 'Student Partner — Comet Browser', text: 'Promoted campus events, organized workshops and student engagement activities to popularize Comet Browser.' },
    { id: 2, title: 'InternShala Student Partner', text: 'Promoted internships through social media & campus events; campus ambassador at Sunbeam Lahartara.' },
    { id: 3, title: 'Junior Research Fellow — ResearchGate', text: 'Conducted literature reviews, mathematical modelling, and collaborated with IIT-BHU, UPPEN & Cambridge on neural network research.' },
    { id: 4, title: 'Research Fellow — Next Voters', text: 'Fellowship on research for democracy through AI with mentorship from UPPEN and Stanford.' }
  ],
  education: [
    { id: 1, title: 'Sunbeam School Lahartara', text: 'Current Student. IMO & IEO Gold Medalist. Founding member, Young Society Science Club. Interests: Programming, AI/ML, Physics.' }
  ],
  skills: [
    { id: 1, title: 'Project Management', percent: 85 },
    { id: 2, title: 'Python / ML / DL', percent: 90 },
    { id: 3, title: 'Computer Vision / NLP', percent: 88 },
    { id: 4, title: 'Scientific Writing', percent: 95 }
  ],
  accomplishments: [
    { id: 1, title: 'ResearchGate Fellow', text: 'Awarded fellowship for outstanding contribution to open science.' },
    { id: 2, title: 'Next Voters Fellow', text: 'Recognized for work in AI and democracy.' },
    { id: 3, title: 'Perplexity Student Partner', text: 'Campus ambassador for Perplexity AI.' },
    { id: 4, title: 'INSPIRE MANAK Awardee', text: 'National level award for scientific innovation.' },
    { id: 5, title: 'Google Certified in AI & ML', text: 'Professional certification from Google Cloud.' },
    { id: 6, title: 'NVIDIA DLI Certified', text: 'LLM Development certification.' }
  ],
  projects: [
    { id: 1, title: 'ImagoPedia', text: 'An AI-powered tool designed to assist in scientific research and image analysis. Built using Python and Deep Learning frameworks.' }
  ],
  blogs: [
    { id: 100, title: 'Welcome to my Portfolio', text: 'This is the start of my journey sharing insights on AI, ML and Physics.' }
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
  // Load data from localstorage or default
  const stored = localStorage.getItem('dhruv_portfolio_data');
  if(stored){
    STATE.data = JSON.parse(stored);
  } else {
    STATE.data = JSON.parse(JSON.stringify(DEFAULT_DATA)); // deep copy
    saveData();
  }
  
  renderAll();
  
  // Admin listener
  document.getElementById('lockBtn').addEventListener('click', handleAdminUnlock);
  
  // Image fallback fix
  if(!document.getElementById('profileImage').getAttribute('src')){
      const c = document.getElementById('profilePic');
      c.innerHTML = '<div style="font-size:30px; font-weight:bold;">DS</div>';
  }
}

function saveData(){
  localStorage.setItem('dhruv_portfolio_data', JSON.stringify(STATE.data));
  renderAll();
}

/* =============================
   ROUTING & VIEW LOGIC
   ============================= */
function router(viewName, anchorId){
  // Switch Views
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  if(viewName === 'blog'){
    document.getElementById('blogView').classList.add('active');
    window.scrollTo(0,0);
  } else {
    document.getElementById('homeView').classList.add('active');
    if(anchorId){
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if(el) el.scrollIntoView({behavior:'smooth'});
      }, 100);
    }
  }
}

function toggleForm(id){
  const f = document.getElementById(id);
  f.style.display = (f.style.display === 'block') ? 'none' : 'block';
}

/* =============================
   RENDERING
   ============================= */
function renderAll(){
  renderList('experience', 'experienceList');
  renderList('projects', 'projectsList', true); // true = project style
  renderList('education', 'educationList');
  renderList('blogs', 'blogList');
  renderSkills();
  renderAccomplishments();
}

// Generic List Renderer (Experience, Edu, Projects, Blogs)
function renderList(key, containerId, isProject = false){
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const items = STATE.data[key] || [];

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    if(isProject) div.classList.add('project-item');

    // Controls
    let controlsHtml = '';
    if(STATE.isAdmin){
      controlsHtml = `
        <div class="controls">
          <button class="btn-xs" onclick="editItem('${key}', ${item.id})">Edit</button>
          <button class="btn-xs btn-delete" onclick="deleteItem('${key}', ${item.id})">Del</button>
        </div>`;
    }

    // Media
    let mediaHtml = '';
    if(item.image) mediaHtml = `<div style="margin-top:10px;"><img src="${item.image}" style="max-width:100%; border-radius:8px; max-height:300px; object-fit:contain;"></div>`;

    div.innerHTML = `
      <div class="title-row" onclick="toggleDetails(this)">
        <h4>${esc(item.title)}</h4>
        ${controlsHtml}
      </div>
      <div class="details">
        <p style="white-space:pre-wrap; margin:0;">${esc(item.text)}</p>
        ${mediaHtml}
      </div>
    `;
    container.appendChild(div);
  });
}

function toggleDetails(headerEl){
  // Don't toggle if clicking buttons
  if(event.target.tagName === 'BUTTON') return;
  headerEl.parentElement.classList.toggle('expanded');
}

// Skills Renderer
function renderSkills(){
  const container = document.getElementById('skillsList');
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
  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.bar i').forEach(b => b.style.width = b.getAttribute('data-width'));
  }, 100);
}

// Accomplishments Renderer
function renderAccomplishments(){
  const container = document.getElementById('accList');
  container.innerHTML = '';
  (STATE.data.accomplishments || []).forEach(acc => {
    const li = document.createElement('li');
    li.className = 'acc-pill';
    li.innerHTML = `${esc(acc.title)} ${STATE.isAdmin ? `<span style="margin-left:5px; color:#d32f2f;" onclick="event.stopPropagation(); deleteItem('accomplishments', ${acc.id})">×</span>` : ''}`;
    li.onclick = () => openModal(acc.title, acc.text);
    container.appendChild(li);
  });
}

/* =============================
   ADMIN LOGIC
   ============================= */
const PASSKEY = 'itrustedyou';

function handleAdminUnlock(){
  if(STATE.isAdmin){
    alert('Already Admin'); return;
  }
  const pass = prompt("Enter Admin Passkey:");
  if(pass === PASSKEY){
    STATE.isAdmin = true;
    document.body.classList.add('admin-mode');
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');
    document.getElementById('lockBtn').textContent = '🔓';
    // Add export button
    const btn = document.createElement('button');
    btn.textContent = 'EXPORT DATA';
    btn.className = 'primary';
    btn.style.position = 'fixed'; btn.style.bottom = '70px'; btn.style.right = '20px'; btn.style.zIndex='100';
    btn.onclick = () => {
        navigator.clipboard.writeText(JSON.stringify(STATE.data));
        alert('Data copied to clipboard! Paste this into the DEFAULT_DATA variable in the code to make changes permanent for everyone.');
    };
    document.body.appendChild(btn);
    renderAll();
  } else {
    alert("Incorrect.");
  }
}

// Generic Add
async function addData(key, titleId, textId, imgId){
  const title = document.getElementById(titleId).value;
  const text = document.getElementById(textId).value;
  let imgStr = null;
  
  if(imgId){
     const file = document.getElementById(imgId).files[0];
     if(file) imgStr = await toBase64(file);
  }

  if(!title) return alert("Title required");

  const newItem = {
    id: Date.now(),
    title: title,
    text: text,
    image: imgStr
  };

  if(!STATE.data[key]) STATE.data[key] = [];
  STATE.data[key].push(newItem);
  saveData();

  // Clear form
  document.getElementById(titleId).value = '';
  document.getElementById(textId).value = '';
  if(imgId) document.getElementById(imgId).value = '';
  toggleForm(document.getElementById(titleId).closest('.admin-forms').id);
}

function addSkill(){
  const title = document.getElementById('in_skill_name').value;
  const perc = document.getElementById('in_skill_val').value;
  if(!title || !perc) return;
  if(!STATE.data.skills) STATE.data.skills = [];
  STATE.data.skills.push({ id: Date.now(), title, percent: parseInt(perc) });
  saveData();
  document.getElementById('in_skill_name').value = '';
  document.getElementById('in_skill_val').value = '';
}

function deleteItem(key, id){
  if(!confirm("Delete this item?")) return;
  STATE.data[key] = STATE.data[key].filter(x => x.id !== id);
  saveData();
}

function editItem(key, id){
  const item = STATE.data[key].find(x => x.id === id);
  if(!item) return;
  const newT = prompt("Edit Title:", item.title);
  if(newT === null) return;
  const newTx = prompt("Edit Details:", item.text);
  
  item.title = newT;
  if(newTx !== null) item.text = newTx;
  saveData();
}

/* =============================
   HELPERS
   ============================= */
function esc(s){
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Modal
function openModal(title, text){
  document.getElementById('mTitle').textContent = title;
  document.getElementById('mBody').textContent = text || "No details available.";
  document.getElementById('infoModal').style.display = 'flex';
}
function closeModal(){
  document.getElementById('infoModal').style.display = 'none';
}
document.getElementById('infoModal').addEventListener('click', (e)=>{
  if(e.target.id === 'infoModal') closeModal();
})

// Run
init();

</script>
</body>
</html>
