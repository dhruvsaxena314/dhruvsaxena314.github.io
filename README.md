<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Portfolio</title>
  <style>
    :root{
      --max-width:1000px;
      --gap:24px;
      --radius:16px;
      --accent:#000;
      --muted: rgba(0,0,0,0.6);
      --bg:#fff;
      --menu-h: 70px;
    }
    *{box-sizing:border-box}
    body{
      margin:0; font-family:'Inter',system-ui,-apple-system,sans-serif;
      background:var(--bg); color:var(--accent); -webkit-font-smoothing:antialiased;
      min-height: 100vh; line-height: 1.5;
    }

    /* CRASH SCREEN */
    #crashScreen { 
      display:none; flex-direction:column; align-items:center; justify-content:center; 
      position:fixed; inset:0; background:#fff; z-index:9999; padding:40px; text-align:center; 
    }

    /* ENLARGED TOP MENU */
    #miniMenu{
      position:fixed; top:0; left:0; right:0; height:var(--menu-h);
      display:flex; align-items:center; justify-content:center;
      gap:20px; background:rgba(255,255,255,0.98); border-bottom:2px solid #000; z-index:100;
      overflow-x: auto; white-space: nowrap; padding: 0 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    #miniMenu a{ 
      text-decoration:none; color:var(--accent); font-weight:700; font-size:15px; 
      cursor: pointer; padding: 8px 4px; transition: color 0.2s;
      text-transform: uppercase; letter-spacing: 0.5px;
    }
    #miniMenu a:hover{ color: #555; text-decoration: underline; text-underline-offset: 6px; }

    header{
      margin-top:var(--menu-h); height:240px; border-bottom:2px solid #000; 
      display:flex; align-items:center; justify-content:center;
      overflow:hidden; border-radius:0 0 var(--radius) var(--radius); background:#f0f0f0;
    }
    header img{ width:100%; height:100%; object-fit:cover; display:block; }

    .wrap{ max-width:var(--max-width); margin:30px auto; padding:0 25px; animation:fadeUp .5s ease-out; }
    @keyframes fadeUp{ from{opacity:0; transform:translateY(20px)} to{opacity:1; transform:none} }

    section{ background:#fff; border:2px solid #000; padding:28px; border-radius:var(--radius); margin-bottom:25px; box-shadow: 6px 6px 0px #000; }
    
    .view-section { display: none; }
    .view-section.active { display: block; }

    /* PROFILE */
    .profile{ display:flex; gap:var(--gap); align-items:center; justify-content:center; flex-wrap:wrap; }
    .profile-pic{
      width:200px; height:200px; border-radius:20px; overflow:hidden; border:3px solid #000; flex:0 0 200px;
      display:flex; align-items:center; justify-content:center; background:#fff;
    }
    .profile-pic img{ width:100%; height:100%; object-fit:cover; }
    .profile-meta{ max-width:640px; flex:1 1 400px; }
    .name-row{ display:flex; align-items:center; gap:18px; flex-wrap:wrap; }
    .name-row h1{ margin:0; font-size:32px; letter-spacing:-1px; }
    .age-badge{ font-weight:900; font-size:54px; opacity:.08; line-height:1; transform:translateY(6px); }

    /* CONTENT STYLING */
    .item-text { white-space: pre-wrap; word-break: break-word; }
    .inline-img { 
      display: block; width: 100%; max-height: 400px; object-fit: contain; 
      margin: 15px 0; border-radius: 12px; border: 1px solid #ddd; background: #fdfdfd;
    }

    /* LISTS */
    .list .item{ 
      border-radius:14px; padding:20px; margin-bottom:18px; border:2px solid #111; background:#fff; 
      cursor:pointer; transition: transform 0.2s, box-shadow 0.2s;
    }
    .list .item:hover { transform: translate(-3px, -3px); box-shadow: 5px 5px 0px #000; }
    .project-item { border-left: 10px solid #000 !important; }

    /* SKILLS */
    .skill-item { margin-bottom: 20px; }
    .bar{ height:16px; background:#f0f0f0; border-radius:20px; overflow:hidden; border:2px solid #000; }
    .bar > i{ display:block; height:100%; background:#000; width:0; transition:width 1.2s cubic-bezier(0.1, 0.9, 0.2, 1); }

    /* ACCOMPLISHMENTS */
    .acc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 12px; }
    .acc-pill { 
      background: #fff; border: 2px solid #000; padding: 12px 22px; border-radius: 30px; 
      font-size: 15px; cursor: pointer; transition: all 0.2s; font-weight: 700;
    }
    .acc-pill:hover { background: #000; color: #fff; transform: translateY(-2px); }

    /* MODAL */
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.85); z-index: 1000; display: none;
      align-items: center; justify-content: center; backdrop-filter: blur(8px); padding: 20px;
    }
    .modal-card {
      background: #fff; width: 100%; max-width: 750px; max-height: 90vh; overflow-y: auto; padding: 40px;
      border-radius: var(--radius); border: 3px solid #000; position: relative; animation: pop .4s cubic-bezier(0.1, 0.9, 0.2, 1);
    }
    @keyframes pop { from{transform:scale(0.9); opacity:0} to{transform:scale(1); opacity:1} }
    .modal-close { position: absolute; top: 20px; right: 20px; font-weight: 900; cursor: pointer; font-size: 30px; }
    
    /* ADMIN */
    .admin-forms { display:none; border-top: 3px dashed #000; margin-top: 25px; padding:20px; background: #fafafa; border-radius: 12px; }
    .admin-forms label { display: block; font-size: 12px; font-weight: 900; margin-bottom: 6px; text-transform: uppercase; color: #444; }
    input, textarea{ padding:14px; border-radius:10px; border:2px solid #000; width:100%; margin-bottom: 15px; font-family: inherit; font-size: 15px;}
    .img-attach-box { border: 2px solid #000; background: #eee; padding: 15px; margin-bottom: 15px; border-radius: 10px; }
    .img-token { display: inline-block; background: #000; color: #fff; padding: 4px 8px; border-radius: 4px; font-family: monospace; cursor: copy; margin: 4px; font-size: 12px;}
    
    button.primary{ background:#000; color:#fff; padding:15px; border-radius:10px; border:none; cursor:pointer; font-weight: 800; width: 100%; font-size: 16px; text-transform: uppercase;}
    button.btn-xs { font-size:12px; padding:8px 14px; border-radius:8px; border:2px solid #000; background:#fff; cursor:pointer; font-weight: 800;}
    button.btn-delete { color: #d32f2f; border-color: #d32f2f; }

    #adminToggle { position: fixed; bottom: 25px; right: 25px; z-index: 500; }
    #adminToggle button { background: #fff; border: 3px solid #000; width: 56px; height: 56px; border-radius: 50%; cursor: pointer; font-size: 20px; box-shadow: 4px 4px 0px #000; }
    
    @media (max-width:720px){
      .profile-pic{ width:150px; height:150px; flex-basis:150px; }
      header{height:160px}
      #miniMenu { justify-content: flex-start; }
      .age-badge { font-size: 40px; }
    }
    .muted{ color:var(--muted); font-size:15px; }
  </style>
</head>
<body>

  <div id="crashScreen">
    <h2 style="margin-bottom:10px;">System Conflict Resolved</h2>
    <p class="muted" style="margin-bottom:20px;">LocalStorage has been cleared to prevent memory errors. Click below to reload.</p>
    <button onclick="localStorage.clear(); location.reload();" class="primary" style="width: auto; padding: 15px 40px;">Wipe & Restart</button>
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
  </header>

  <main class="wrap">
    
    <!-- HOME VIEW -->
    <div id="homeView" class="view-section active">
      <section>
        <div class="profile">
          <div class="profile-pic"><img src="profile.jpg" alt="Dhruv Saxena" onerror="this.style.display='none'; this.parentElement.innerText='DS';"></div>
          <div class="profile-meta">
            <div class="name-row">
              <h1 id="displayName">Dhruv Saxena</h1>
              <div class="age-badge">15</div>
            </div>
            <p class="muted" style="margin:15px 0; font-size: 17px;">ResearchGate Fellow, AI Developer, and Scientific Writer. Dedicated to building tools like ImagoPedia with research experience at IIT-BHU, UPPEN & Cambridge.</p>
            <p class="muted" style="font-size:14px; font-weight: 600;">Varanasi, India • dhruvisgood13@gmail.com • github.com/dhruvisgood</p>
          </div>
        </div>
      </section>
      <section>
        <h2 style="margin-top:0">Quick Contact</h2>
        <form action="https://formspree.io/f/xzzkvjjk" method="POST" style="display:grid; gap:12px; max-width:600px;">
          <input name="name" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email Address" required />
          <textarea name="message" rows="4" placeholder="How can I help you today?" required></textarea>
          <button class="primary" type="submit">Send Message</button>
        </form>
      </section>
    </div>

    <!-- REUSABLE LIST VIEW FOR EXP/PROJ/BLOG -->
    <div id="experienceView" class="view-section">
      <div style="margin-bottom:20px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <h2 style="margin:0">Experience</h2>
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

    <div id="projectsView" class="view-section">
      <div style="margin-bottom:20px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <h2 style="margin:0">Projects</h2>
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

    <div id="educationView" class="view-section">
      <div style="margin-bottom:20px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <h2 style="margin:0">Education</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('eduForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="eduForm">
          <input id="in_edu_title" placeholder="School" /><textarea id="in_edu_text" rows="3"></textarea>
          <button class="primary" onclick="submitNewData('education', 'edu')">Save</button>
        </div>
        <div class="list" id="educationList"></div>
      </section>
    </div>

    <div id="skillsView" class="view-section">
      <div style="margin-bottom:20px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <h2 style="margin:0">Expertise</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('skillForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="skillForm">
          <input id="in_skill_name" placeholder="Skill Name" /><input id="in_skill_val" type="number" placeholder="Percentage" />
          <button class="primary" onclick="addSkill()">Add Skill</button>
        </div>
        <div id="skillsList"></div>
      </section>
    </div>

    <div id="accomplishmentsView" class="view-section">
      <div style="margin-bottom:20px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <h2 style="margin:0">Accomplishments</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('accForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="accForm">
          <input id="in_acc_title" placeholder="Achievement" /><textarea id="in_acc_text" rows="3"></textarea>
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
      <div style="margin-bottom:20px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <h2 style="margin:0">Blog Posts</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('blogForm')">+ New Post</button>
        </div>
        <div class="admin-forms" id="blogForm">
          <label>Blog Title</label><input id="in_blog_title" />
          <label>Content (Use [img:0] tags for multiple images at various places)</label><textarea id="in_blog_text" rows="10"></textarea>
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
      <h3 id="mTitle" style="margin-top:0; font-size: 26px; border-bottom: 3px solid #000; padding-bottom: 10px; margin-bottom: 20px;"></h3>
      <div id="mBody" class="muted item-text"></div>
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
    { "id": 1, "title": "Student Partner — Comet Browser", "text": "Promoted campus events and engagement.\n[img:0]\nWorking on digital reach.", "images": ["pic1.jpg"] }
  ],
  "projects": [
    { "id": 1, "title": "ImagoPedia", "text": "AI-powered tool for scientific image analysis.\n[img:0]\nDeveloped using Python.", "images": ["proj1.png"] }
  ],
  "blogs": [
    { "id": 100, "title": "The Future of AI", "text": "AI is changing the world.\n[img:0]\nHere is a graph of growth.\n[img:1]\nConclusion reached.", "images": ["ai1.jpg", "ai2.png"] }
  ],
  "education": [], "skills": [], "accomplishments": []
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

/* =============================
   NAVIGATION & UI
   ============================= */
function router(view) {
  document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(view + 'View');
  if (target) { target.classList.add('active'); window.scrollTo(0,0); }
}

function toggleForm(id) {
  const f = document.getElementById(id);
  f.style.display = (f.style.display === 'block') ? 'none' : 'block';
  STATE.tempImages = []; 
  updateTokens(id.split('Form')[0]);
}

/* =============================
   RENDERING ENGINE
   ============================= */
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
  (STATE.data[key] || []).forEach(item => {
    const d = document.createElement('div');
    d.className = 'item' + (isProj ? ' project-item' : '');
    d.onclick = () => openModal(item.title, item.text, item.images);
    d.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <h4 style="margin:0; font-size: 19px;">${esc(item.title)}</h4>
        ${STATE.isAdmin ? `<button class="btn-xs btn-delete" onclick="event.stopPropagation(); deleteItem('${key}', ${item.id})">Delete</button>` : ''}
      </div>
      <p class="muted" style="margin-top:10px; font-size:13px; line-height: 1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
        ${stripTags(item.text)}
      </p>
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
      <div style="display:flex; justify-content:space-between; font-weight:700; font-size:14px; margin-bottom:8px;">
        <span>${esc(s.title)}</span>
        <span>${s.percent}% ${STATE.isAdmin ? `<span style="color:red; cursor:pointer;" onclick="deleteItem('skills', ${s.id})">×</span>` : ''}</span>
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
    l.innerHTML = `${esc(a.title)} ${STATE.isAdmin ? `<span style="color:red; margin-left:10px;" onclick="event.stopPropagation(); deleteItem('accomplishments', ${a.id})">×</span>` : ''}`;
    c.appendChild(l);
  });
}

/* =============================
   MODAL WITH INLINE IMAGES
   ============================= */
function openModal(t, b, imgs) {
  document.getElementById('mTitle').innerText = t;
  const body = document.getElementById('mBody');
  
  // Advanced parsing: replace [img:X] with <img> tag
  let html = esc(b).replace(/\n/g, '<br>');
  if (imgs && imgs.length) {
    imgs.forEach((src, idx) => {
      const tag = `[img:${idx}]`;
      const imgHtml = `<img src="${src}" class="inline-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlZWUiLz48L3N2Zz4='">`;
      html = html.replace(tag, imgHtml);
    });
  }
  
  body.innerHTML = html;
  document.getElementById('infoModal').style.display = 'flex';
}
function closeModal() { document.getElementById('infoModal').style.display = 'none'; }
window.onclick = (e) => { if(e.target.id === 'infoModal') closeModal(); }

/* =============================
   ADMIN LOGIC & MULTI-IMAGE
   ============================= */
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
  gitInput.value = '';
  fileInput.value = '';
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

  STATE.data[key].push({
    id: Date.now(),
    title: t,
    text: b,
    images: [...STATE.tempImages]
  });
  
  saveData();
  document.getElementById(`in_${prefix}_title`).value = '';
  document.getElementById(`in_${prefix}_text`).value = '';
  STATE.tempImages = [];
  toggleForm(`${prefix}Form`);
}

function addSkill() {
  const n = document.getElementById('in_skill_name').value;
  const v = document.getElementById('in_skill_val').value;
  if(!n || !v) return;
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
    ex.style.cssText = "position:fixed; bottom:90px; right:25px; width:auto; z-index:500; border:3px solid #000; box-shadow: 3px 3px 0 #000;";
    ex.onclick = () => {
      const code = "const DEFAULT_DATA = " + JSON.stringify(STATE.data, null, 2) + ";";
      navigator.clipboard.writeText(code).then(() => alert("Code copied! Replace DEFAULT_DATA in your file."));
    };
    document.body.appendChild(ex);
    renderAll();
  }
}

/* =============================
   UTILITIES
   ============================= */
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

function esc(s) { return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
function stripTags(s) { return (s || '').replace(/\[img:\d+\]/g, '(Image)'); }

init();
</script>
</body>
</html>
