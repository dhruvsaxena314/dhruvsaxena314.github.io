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
      display:flex; min-height:100vh;
    }

    /* SIDE NAV (replacement for the old top mini menu) */
    #sideNav{
      width:84px; min-width:84px; background:rgba(255,255,255,0.98); border-right:1px solid #111; padding-top:18px;
      position:fixed; left:0; top:0; bottom:0; z-index:50; display:flex; flex-direction:column; align-items:center; gap:8px;
    }
    #sideNav a{ writing-mode:vertical-rl; transform:rotate(180deg); text-decoration:none; color:var(--accent); font-weight:700; font-size:13px; padding:8px 6px; width:100%; text-align:center; }
    #sideNav .brand{ writing-mode:vertical-rl; transform:rotate(180deg); font-weight:900; margin-bottom:10px; }
    #sideNav .section-btn{ cursor:pointer; border:none; background:none; padding:10px 6px; }

    /* projects special area button */
    #projectsBtn{ margin-top:8px; border-top:1px solid #ddd; padding-top:12px; }

    /* main content shifted right to accommodate side nav */
    main.wrap{ margin-left:108px; max-width:var(--max-width); margin-top:28px; margin-bottom:28px; padding:0 20px; animation:fadeUp .5s ease; }
    @keyframes fadeUp{ from{opacity:0; transform:translateY(8px)} to{opacity:1; transform:none} }

    section{ background:#fff; border:1px solid #000; padding:22px; border-radius:var(--radius); margin-bottom:20px; }

    .profile{ display:flex; gap:var(--gap); align-items:center; justify-content:center; flex-wrap:wrap; }
    .profile-pic{ width:220px; height:220px; border-radius:16px; overflow:hidden; border:2px solid #000; flex:0 0 220px; display:flex; align-items:center; justify-content:center; background:#f5f5f5; }
    .profile-pic img{ width:100%; height:100%; object-fit:cover; display:block; }

    .profile-meta{ max-width:640px; flex:1 1 420px; }
    .name-row{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
    .name-row h1{ margin:0; font-size:26px; letter-spacing:-0.2px; }
    .age-badge{ font-weight:800; font-size:56px; opacity:.12; line-height:1; padding-left:6px; display:inline-block; transform:translateY(4px); }
    .meta-small{ color:var(--muted); margin:10px 0; }

    .bar{ height:16px; background:#eee; border-radius:10px; overflow:hidden; margin:8px 0; }
    .bar > i{ display:block; height:100%; background:#000; width:0; transition:width .9s cubic-bezier(.2,.9,.3,1); }

    .list .item{ border-radius:12px; padding:12px; margin-bottom:8px; border:1px solid #111; background:#fff; }
    .item .title-row{ display:flex; justify-content:space-between; align-items:center; gap:10px; }
    .item h4{ margin:0; font-size:16px; }
    .item .controls{ display:flex; gap:8px; align-items:center; }
    .item .controls button{ font-size:13px; padding:6px 8px; border-radius:8px; border:none; background:#000; color:#fff; cursor:pointer; }
    .details{ margin-top:10px; color:var(--muted); display:none; }

    .form-row{ display:grid; gap:8px; grid-template-columns:1fr; margin-top:10px; }
    input[type="text"], input[type="password"], input[type="email"], textarea{ padding:10px; border-radius:10px; border:1px solid #111; font-size:14px; width:100%; }
    input[type="file"]{ font-size:13px; }
    button.primary{ background:#000; color:#fff; padding:10px 14px; border-radius:10px; border:none; cursor:pointer; }

    @media (max-width:720px){
      #sideNav{ display:flex; flex-direction:row; height:56px; width:100%; min-width:unset; position:fixed; top:0; left:0; right:0; border-right:none; border-bottom:1px solid #111; }
      #sideNav a{ writing-mode:unset; transform:none; }
      main.wrap{ margin-left:0; margin-top:76px; }
      .age-badge{ font-size:36px; opacity:.14; }
      .profile-pic{ width:170px; height:170px; flex-basis:170px; }
      header{height:180px}
    }

    .muted{ color:var(--muted); font-size:13px }

    /* projects area grid */
    .projects-grid{ display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:12px; margin-top:12px; }
    .project-card{ border:1px solid #111; padding:10px; border-radius:10px; }
    .project-card img{ width:100%; height:160px; object-fit:cover; border-radius:6px; }
  </style>
</head>
<body>

  <!-- SIDE NAV -->
  <nav id="sideNav">
    <div class="brand">DS</div>
    <a class="section-btn" data-target="profile">Profile</a>
    <a class="section-btn" data-target="experience">Experience</a>
    <a class="section-btn" data-target="education">Education</a>
    <a class="section-btn" data-target="skills">Skills</a>
    <a class="section-btn" data-target="accomplishments">Accomplishments</a>
    <a class="section-btn" data-target="blogs">Blogs</a>
    <div id="projectsBtn">
      <button class="section-btn" data-target="projects">Projects</button>
    </div>
  </nav>

  <!-- banner -->
  <header id="banner" style="width:100%; position:fixed; left:108px; right:0; top:0; height:120px; border-bottom:2px solid #000; background:#efefef; display:flex; align-items:center; padding-left:20px;">
    <img id="bannerImg" src="banner.jpg" alt="banner" onerror="this.style.background='#e7e7e7'; this.removeAttribute('src');" style="height:100%; width:auto;"> 
  </header>

  <main class="wrap">

    <!-- PROFILE -->
    <section id="profile" style="margin-top:140px;">
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
      <h2>Experience</h2>
      <div class="list" id="experienceList"></div>

      <div style="margin-top:12px;">
        <div style="display:flex; gap:8px; align-items:center;">
          <input id="passkey" type="password" placeholder="admin passkey (unlock to edit/remove)" />
          <input id="ghToken" type="password" placeholder="(optional) GitHub PAT — for auto-persist" style="width:320px;" />
          <button id="unlock" class="primary">Unlock</button>
        </div>
        <div id="adminPanel" style="display:none; margin-top:10px;">
          <div class="form-row">
            <input id="expTitle" type="text" placeholder="Experience title (e.g. Junior Research Fellow — ResearchGate)" />
            <textarea id="expText" rows="3" placeholder="Optional details (these will be hidden by default and shown when you expand)"></textarea>
            <input id="expMedia" type="file" accept="image/*,video/*" />
            <div style="display:flex; gap:8px;">
              <button id="addExperienceBtn" class="primary">Add Experience</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education">
      <h2>Education</h2>
      <p><strong>Sunbeam School Lahartara</strong> — Current</p>
      <p class="muted">IMO & IEO Gold Medalist. Founding member, Young Society Science Club. Dissertation interest: Programming, AI/ML, Physics, Mathematics, Biology & more.</p>
    </section>

    <!-- SKILLS -->
    <section id="skills">
      <h2>Skills</h2>

      <div style="margin-top:8px;">
        <div class="muted">Project Management</div>
        <div class="bar"><i style="width:85%"></i></div>

        <div class="muted">Python / ML / DL</div>
        <div class="bar"><i style="width:90%"></i></div>

        <div class="muted">Computer Vision / NLP</div>
        <div class="bar"><i style="width:88%"></i></div>

        <div class="muted">Scientific Writing</div>
        <div class="bar"><i style="width:95%"></i></div>
      </div>
    </section>

    <!-- ACCOMPLISHMENTS -->
    <section id="accomplishments">
      <h2>Accomplishments</h2>
      <ul style="margin:8px 0 0 20px; color:var(--muted)">
        <li>ResearchGate Fellow</li>
        <li>Next Voters Fellow</li>
        <li>Perplexity Student Partner</li>
        <li>InternShala Student Partner</li>
        <li>INSPIRE MANAK Awardee</li>
        <li>Google Certified in AI & ML</li>
        <li>NVIDIA DLI Certified — LLM Development</li>
        <li>IBM Certified in Quantum Computing</li>
      </ul>
      <div id="achievementsContainer" style="margin-top:12px;"></div>
      <div id="achievementsAdmin" style="display:none; margin-top:10px;">
        <div class="form-row">
          <input id="achTitle" type="text" placeholder="Achievement title (e.g. XYZ Award, 2024)" />
          <textarea id="achText" rows="2" placeholder="Short details"></textarea>
          <button id="addAchievementBtn" class="primary">Add Achievement</button>
        </div>
      </div>
    </section>

    <!-- BLOGS -->
    <section id="blogs">
      <h2>Blogs</h2>
      <div id="blogList" class="list"></div>

      <div style="margin-top:12px;">
        <div id="blogAdminPanel" style="display:none;">
          <div class="form-row">
            <input id="blogTitle" type="text" placeholder="Blog title" />
            <textarea id="blogText" rows="4" placeholder="Blog summary/content"></textarea>
            <input id="blogMedia" type="file" accept="image/*,video/*" />
            <div style="display:flex; gap:8px;">
              <button id="addBlogBtn" class="primary">Add Blog</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS (new persistent side-category) -->
    <section id="projects" style="display:none;">
      <h2>Projects</h2>
      <div class="projects-grid" id="projectsGrid"></div>

      <div id="projectsAdmin" style="display:none; margin-top:12px;">
        <div class="form-row">
          <input id="projTitle" type="text" placeholder="Project title" />
          <input id="projLink" type="text" placeholder="External link (optional)" />
          <textarea id="projDesc" rows="2" placeholder="Short description"></textarea>
          <input id="projMedia" type="file" accept="image/*,video/*" multiple />
          <div style="display:flex; gap:8px;"><button id="addProjectBtn" class="primary">Add Project</button></div>
        </div>
      </div>
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

  </main>

<script>
/* Engineer-mode: concise, robust, and maintainable changes below.
   Objectives implemented:
   - Replace top menu with a persistent side menu (mobile collapses to top bar)
   - Add Achievements admin section
   - Add Projects section stored persistently in GitHub repo (with localStorage fallback)
   - Replace purely-local persistence with GitHub-backed persistence (optional via PAT entered in admin)
   - Keep overall design and image file names unchanged

   Important: This client-only approach uses GitHub REST API directly from the browser when a GitHub PAT
   is provided. This works but has security trade-offs — see notes below.
*/

/* -------------------- Configuration -------------------- */
const ADMIN_PASS = 'itrustedyou';
const GITHUB_OWNER = 'dhruvsaxena314';
const GITHUB_REPO = 'dhruvsaxena314.github.io';
const DATA_PATH = 'site-data.json'; // repo path where structured site data will be committed

let isAdmin = false;
let githubToken = null; // populated from admin input (optional) — DO NOT SHARE

/* -------------------- Default data -------------------- */
const defaultData = {
  experiences: [
    { id:1, title:'Student Partner — Comet Browser', text:'Promoted campus events, organized workshops and student engagement activities to popularize Comet Browser.'},
    { id:2, title:'InternShala Student Partner', text:'Promoted internships through social media & campus events; campus ambassador at Sunbeam Lahartara.'},
    { id:3, title:'Junior Research Fellow — ResearchGate', text:'Conducted literature reviews, mathematical modelling, and collaborated with IIT-BHU, UPPEN & Cambridge on neural network research.'},
    { id:4, title:'Research Fellow — Next Voters', text:'Fellowship on research for democracy through AI with mentorship from UPPEN and Stanford.'}
  ],
  blogs: [ { id:100, title:'ImagoPedia — AI tool overview', text:'Short summary about ImagoPedia and its goals in research assistance.' } ],
  achievements: [],
  projects: []
};

/* -------------------- Utilities -------------------- */
function esc(s){ return String(s || '').replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function el(tag, props={}, ...children){ const e=document.createElement(tag); Object.assign(e,props); children.forEach(c=>{ if(typeof c==='string') e.appendChild(document.createTextNode(c)); else if(c) e.appendChild(c); }); return e; }

/* -------------------- Persistence layer (GitHub + localStorage fallback) -------------------- */
// local key
const LS_KEY = 'dhruv_site_data_v1';

async function loadData(){
  // priority: localStorage -> GitHub (if token provided) -> default
  const local = localStorage.getItem(LS_KEY);
  if(local) try{ return JSON.parse(local); }catch(e){ /* fallthrough */ }

  if(githubToken) {
    try{
      const d = await fetchDataFromGitHub();
      if(d) { localStorage.setItem(LS_KEY, JSON.stringify(d)); return d; }
    }catch(e){ console.warn('GitHub fetch failed',e); }
  }
  // fallback
  localStorage.setItem(LS_KEY, JSON.stringify(defaultData));
  return JSON.parse(JSON.stringify(defaultData));
}

async function saveData(data, commitMessage='Update site data'){
  // always update localStorage first
  localStorage.setItem(LS_KEY, JSON.stringify(data));
  // attempt GitHub save if token present
  if(!githubToken) return Promise.resolve({ ok:false, reason:'no_token' });
  try{
    const existing = await fetchFileFromGitHub(DATA_PATH);
    const sha = existing && existing.sha;
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
    const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DATA_PATH}`, {
      method: 'PUT',
      headers:{ 'Authorization': 'token '+githubToken, 'Accept':'application/vnd.github+json' },
      body: JSON.stringify({ message: commitMessage, content, sha })
    });
    if(!res.ok) throw new Error('GitHub save failed: '+res.status);
    return { ok:true };
  }catch(e){ console.warn(e); return { ok:false, reason:e.message }; }
}

async function fetchFileFromGitHub(path){
  const r = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`, { headers: githubToken?{ Authorization: 'token '+githubToken }:{}});
  if(r.status===404) return null;
  if(!r.ok) throw new Error('GitHub read failed: '+r.status);
  return await r.json();
}

async function fetchDataFromGitHub(){
  const file = await fetchFileFromGitHub(DATA_PATH);
  if(!file || !file.content) return null;
  const text = decodeURIComponent(escape(atob(file.content.replace(/
/g,''))));
  return JSON.parse(text);
}

/* -------------------- Rendering -------------------- */
const expListEl = document.getElementById('experienceList');
const blogListEl = document.getElementById('blogList');
const achContainer = document.getElementById('achievementsContainer');
const projectsGrid = document.getElementById('projectsGrid');

let SITE_DATA = {};

function renderAll(){
  renderList('experiences', expListEl, renderExperienceItem);
  renderList('blogs', blogListEl, renderBlogItem);
  renderAchievements();
  renderProjects();
}

function renderList(key, container, renderer){
  container.innerHTML = '';
  (SITE_DATA[key] || []).forEach(it=> container.appendChild(renderer(it)) );
}

function renderExperienceItem(item){
  const wrap = el('div',{className:'item'});
  const titleRow = el('div',{className:'title-row'});
  const h4 = el('h4',{}, esc(item.title));
  h4.style.cursor='pointer';
  const controls = el('div',{className:'controls'});
  titleRow.appendChild(h4); titleRow.appendChild(controls);
  wrap.appendChild(titleRow);
  const details = el('div',{className:'details'}, esc(item.text||''));
  if(item.mediaHtml) details.innerHTML += item.mediaHtml;
  wrap.appendChild(details);
  h4.addEventListener('click', ()=> details.style.display = (details.style.display==='block'?'none':'block'));
  if(isAdmin){ controls.appendChild(makeButton('Edit', ()=> openEdit('experiences', item.id)) ); controls.appendChild(makeButton('Remove', ()=> removeItem('experiences', item.id)) ); }
  return wrap;
}

function renderBlogItem(item){
  const wrap = el('div',{className:'item'});
  const titleRow = el('div',{className:'title-row'});
  const h4 = el('h4',{}, esc(item.title));
  const controls = el('div',{className:'controls'});
  titleRow.appendChild(h4); titleRow.appendChild(controls);
  wrap.appendChild(titleRow);
  const details = el('div',{className:'details'}, esc(item.text||''));
  if(item.mediaHtml) details.innerHTML += item.mediaHtml;
  wrap.appendChild(details);
  h4.style.cursor='pointer'; h4.addEventListener('click', ()=> details.style.display = (details.style.display==='block'?'none':'block'));
  if(isAdmin){ controls.appendChild(makeButton('Edit', ()=> openEdit('blogs', item.id)) ); controls.appendChild(makeButton('Remove', ()=> removeItem('blogs', item.id)) ); }
  return wrap;
}

function renderAchievements(){
  achContainer.innerHTML='';
  (SITE_DATA.achievements || []).forEach(a=>{
    const node = el('div',{}, el('strong',{}, a.title+' '), el('div',{}, a.text));
    achContainer.appendChild(node);
  });
}

function renderProjects(){
  projectsGrid.innerHTML='';
  (SITE_DATA.projects || []).forEach(p=>{
    const card = el('div',{className:'project-card'});
    if(p.media && p.media.length){
      const m = p.media[0];
      if(m.type==='image') card.appendChild(el('img',{src:m.url}));
      else if(m.type==='video') card.appendChild(el('div',{}, 'Video attached — click to view'));
    }
    card.appendChild(el('h4',{}, p.title));
    card.appendChild(el('div',{}, esc(p.desc||'')));
    if(p.link) card.appendChild(el('a',{href:p.link, target:'_blank'}, 'Open'));
    if(isAdmin){ card.appendChild(makeButton('Edit', ()=> openEdit('projects', p.id)) ); card.appendChild(makeButton('Remove', ()=> removeItem('projects', p.id)) ); }
    projectsGrid.appendChild(card);
  });
}

/* -------------------- Buttons & basic UI helpers -------------------- */
function makeButton(label, onClick){ const b=document.createElement('button'); b.textContent=label; b.addEventListener('click', onClick); b.className=''; b.style.fontSize='13px'; b.style.padding='6px 8px'; b.style.borderRadius='8px'; b.style.cursor='pointer'; b.style.background='#111'; b.style.color='#fff'; b.style.border='none'; return b; }

/* -------------------- Admin behaviour -------------------- */
document.getElementById('unlock').addEventListener('click', async ()=>{
  const pass = document.getElementById('passkey').value;
  const token = document.getElementById('ghToken').value.trim();
  if(pass === ADMIN_PASS){
    isAdmin = true; githubToken = token || null;
    document.getElementById('adminPanel').style.display='block';
    document.getElementById('blogAdminPanel').style.display='block';
    document.getElementById('achievementsAdmin').style.display='block';
    document.getElementById('projectsAdmin').style.display='block';
    // show achievements admin area
    document.getElementById('achievementsAdmin') && (document.getElementById('achievementsAdmin').style.display='block');
    document.getElementById('projectsAdmin') && (document.getElementById('projectsAdmin').style.display='block');
    // if token provided, attempt to fetch remote data
    if(githubToken){ try{ const remote = await fetchDataFromGitHub(); if(remote){ SITE_DATA = remote; localStorage.setItem(LS_KEY, JSON.stringify(SITE_DATA)); } }catch(e){ console.warn('Remote fetch during unlock failed',e); }}
    renderAll();
    alert('Admin unlocked — you can add, edit & remove entries.');
  } else { alert('Incorrect passkey'); }
});

/* add handlers */
document.getElementById('addExperienceBtn').addEventListener('click', ()=> addFromForm('experiences','expTitle','expText','expMedia'));
document.getElementById('addBlogBtn') && document.getElementById('addBlogBtn').addEventListener('click', ()=> addFromForm('blogs','blogTitle','blogText','blogMedia'));
document.getElementById('addAchievementBtn') && document.getElementById('addAchievementBtn').addEventListener('click', ()=> addFromForm('achievements','achTitle','achText', null));
document.getElementById('addProjectBtn') && document.getElementById('addProjectBtn').addEventListener('click', ()=> addProjectFromForm());

async function addFromForm(key, tId, txtId, mediaId){
  if(!isAdmin) return alert('Unlock admin first.');
  const title = document.getElementById(tId).value.trim();
  const text  = txtId ? document.getElementById(txtId).value.trim() : '';
  const file  = mediaId ? document.getElementById(mediaId).files[0] : null;
  if(!title) return alert('Title required');
  const mediaObj = await processFileToMedia(file);
  const list = SITE_DATA[key] || [];
  const id = key==='blogs' ? (Date.now()%100000)+100 : (Date.now()%100000);
  const item = { id, title, text };
  if(mediaObj) item.media = [mediaObj];
  if(mediaObj && (mediaObj.type==='image' || mediaObj.type==='video')) item.mediaHtml = mediaHtml(item);
  list.push(item);
  SITE_DATA[key] = list;
  await saveData(SITE_DATA, `Add ${key} ${title}`);
  clearForm(tId, txtId, mediaId);
  renderAll();
}

async function addProjectFromForm(){
  if(!isAdmin) return alert('Unlock admin first.');
  const title = document.getElementById('projTitle').value.trim();
  const link = document.getElementById('projLink').value.trim();
  const desc = document.getElementById('projDesc').value.trim();
  const files = document.getElementById('projMedia').files;
  if(!title) return alert('Title required');
  const media = [];
  for(let i=0;i<files.length;i++){ const m = await processFileToMedia(files[i]); if(m) media.push(m); }
  const id = (Date.now()%1000000);
  const p = { id, title, link, desc, media };
  if(media.length) p.mediaHtml = mediaHtml(p);
  SITE_DATA.projects.push(p);
  await saveData(SITE_DATA, `Add project ${title}`);
  renderAll();
  clearForm('projTitle','projDesc','projMedia');
}

function clearForm(tId, txtId, mediaId){ if(tId) document.getElementById(tId).value=''; if(txtId) document.getElementById(txtId).value=''; if(mediaId && document.getElementById(mediaId)) document.getElementById(mediaId).value = ''; }

function processFileToMedia(file){
  return new Promise(async resolve=>{
    if(!file) return resolve(null);
    // Convert small files to base64 and store in data object. Note: large files will bloat the JSON.
    const reader = new FileReader();
    reader.onload = ()=>{
      const dataUrl = reader.result;
      const type = file.type.startsWith('image') ? 'image' : (file.type.startsWith('video') ? 'video' : 'other');
      resolve({ type, url: dataUrl, name: file.name });
    };
    reader.onerror = ()=> resolve(null);
    reader.readAsDataURL(file);
  });
}

function mediaHtml(item){
  if(!item.media || !item.media.length) return '';
  try{
    const m = item.media[0];
    if(m.type==='image') return `<div style=\"margin-top:10px;\"><img src=\"${esc(m.url)}\" style=\"max-width:100%; border-radius:10px;\"></div>`;
    if(m.type==='video') return `<div style=\"margin-top:10px;\"><video controls style=\"max-width:100%; border-radius:10px;\"><source src=\"${esc(m.url)}\"></video></div>`;
  }catch(e){ console.warn(e); }
  return '';
}

async function removeItem(key,id){ if(!isAdmin) return alert('Unlock admin first.'); if(!confirm('Remove this item?')) return; SITE_DATA[key] = (SITE_DATA[key]||[]).filter(x=>x.id!==id); await saveData(SITE_DATA, `Remove ${key} id:${id}`); renderAll(); }

function openEdit(key,id){ if(!isAdmin) return alert('Unlock admin first.'); const arr = SITE_DATA[key] || []; const it = arr.find(x=>x.id===id); if(!it) return alert('Item not found'); const newTitle = prompt('Edit title', it.title); if(newTitle===null) return; const newText = prompt('Edit details (optional)', it.text||''); if(newTitle.trim()==='') return alert('Title cannot be empty'); it.title = newTitle.trim(); it.text = newText===null?it.text:newText.trim(); saveData(SITE_DATA, `Edit ${key} id:${id}`); renderAll(); }

/* -------------------- GitHub helpers in more detail (browser-based) -------------------- */
async function fetchDataFromGitHub(){ return await fetchDataFromGitHub_internal(); }
async function fetchDataFromGitHub_internal(){
  const file = await fetchFileFromGitHub(DATA_PATH);
  if(!file || !file.content) return null;
  const text = decodeURIComponent(escape(atob(file.content.replace(/
/g,''))));
  return JSON.parse(text);
}

/* -------------------- Init -------------------- */
(async function init(){ SITE_DATA = await loadData(); renderAll(); /* animate bars */ window.addEventListener('load', ()=>{ document.querySelectorAll('.bar > i').forEach(i=>{ const w = i.style.width; i.style.width = '0'; setTimeout(()=> i.style.width = w, 60); }); }); })();

/* Side nav click handling */
document.querySelectorAll('#sideNav .section-btn').forEach(btn=> btn.addEventListener('click', ()=>{ const t=btn.getAttribute('data-target'); if(!t) return; document.querySelectorAll('main.wrap section').forEach(s=> s.style.display = s.id===t ? 'block' : 'none'); // show only target
  // special: projects should stay visible on click
  if(t==='projects'){ document.getElementById('projects').style.display='block'; }
}));

/* show all sections by default (keeps earlier behaviour) */
// ensure projects section exists and hidden initially
if(document.getElementById('projects')) document.getElementById('projects').style.display='none';

</script>
</body>
</html>
