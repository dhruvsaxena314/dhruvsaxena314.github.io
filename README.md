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

    #crashScreen { 
      display:none; flex-direction:column; align-items:center; justify-content:center; 
      position:fixed; inset:0; background:#fff; z-index:9999; padding:40px; text-align:center; 
    }

    #miniMenu{
      position:fixed; top:0; left:0; right:0; height:56px;
      display:flex; align-items:center; justify-content:center;
      gap:14px; background:rgba(255,255,255,0.95); border-bottom:1px solid #000; z-index:40;
      overflow-x: auto; white-space: nowrap; padding: 0 15px;
    }
    #miniMenu a{ text-decoration:none; color:var(--accent); font-weight:600; font-size:13px; cursor: pointer; padding: 5px 2px;}
    #miniMenu a:hover{ text-decoration: underline; }

    header{
      margin-top:56px; height:200px; border-bottom:2px solid #000; 
      display:flex; align-items:center; justify-content:center;
      overflow:hidden; border-radius:0 0 var(--radius) var(--radius); background:#efefef;
    }
    header img{ width:100%; height:100%; object-fit:cover; display:block; }

    .wrap{ max-width:var(--max-width); margin:20px auto; padding:0 20px; animation:fadeUp .4s ease; }
    @keyframes fadeUp{ from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:none} }

    section{ background:#fff; border:1px solid #000; padding:22px; border-radius:var(--radius); margin-bottom:20px; }
    
    .view-section { display: none; }
    .view-section.active { display: block; }

    .profile{ display:flex; gap:var(--gap); align-items:center; justify-content:center; flex-wrap:wrap; }
    .profile-pic{
      width:180px; height:180px; border-radius:16px; overflow:hidden; border:2px solid #000; flex:0 0 180px;
      display:flex; align-items:center; justify-content:center; background:#f5f5f5;
    }
    .profile-pic img{ width:100%; height:100%; object-fit:cover; display:block; }
    .profile-meta{ max-width:640px; flex:1 1 400px; }
    .name-row{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
    .name-row h1{ margin:0; font-size:24px; letter-spacing:-0.2px; }
    .age-badge{ font-weight:800; font-size:42px; opacity:.1; line-height:1; transform:translateY(4px); }

    .list .item{ 
      border-radius:12px; padding:16px; margin-bottom:12px; border:1px solid #111; background:#fff; 
      cursor:pointer; transition: transform 0.2s;
    }
    .list .item:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .project-item { border-left: 6px solid #000 !important; }

    .skill-item { margin-bottom: 15px; }
    .bar{ height:12px; background:#eee; border-radius:10px; overflow:hidden; border:1px solid #ddd; }
    .bar > i{ display:block; height:100%; background:#000; width:0; transition:width 1s ease; }

    .acc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
    .acc-pill { 
      background: #fff; border: 1px solid #000; padding: 10px 18px; border-radius: 20px; 
      font-size: 14px; cursor: pointer; transition: all 0.2s; font-weight: 500;
    }
    .acc-pill:hover { background: #000; color: #fff; }

    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.8); z-index: 100; display: none;
      align-items: center; justify-content: center; backdrop-filter: blur(5px); padding: 20px;
    }
    .modal-card {
      background: #fff; width: 100%; max-width: 600px; max-height: 85vh; overflow-y: auto; padding: 30px;
      border-radius: var(--radius); border: 2px solid #000; position: relative; animation: pop .3s ease;
    }
    @keyframes pop { from{transform:scale(0.95); opacity:0} to{transform:scale(1); opacity:1} }
    .modal-close { position: absolute; top: 15px; right: 15px; font-weight: bold; cursor: pointer; font-size: 24px; }
    .modal-img { width: 100%; border-radius: 10px; margin-bottom: 20px; border: 1px solid #ddd; display: none; max-height: 400px; object-fit: contain; background: #f9f9f9; }

    .admin-forms { display:none; border-top: 2px dashed #000; margin-top: 20px; padding:15px; background: #f9f9f9; border-radius: 8px; }
    .admin-forms label { display: block; font-size: 11px; font-weight: bold; margin-bottom: 4px; text-transform: uppercase; color: #666; }
    input, textarea{ padding:12px; border-radius:10px; border:1px solid #000; width:100%; margin-bottom: 12px; font-family: inherit; font-size: 14px;}
    button.primary{ background:#000; color:#fff; padding:12px; border-radius:10px; border:none; cursor:pointer; font-weight: bold; width: 100%; transition: opacity .2s;}
    button.primary:hover { opacity: 0.8; }
    button.btn-xs { font-size:11px; padding:5px 10px; border-radius:6px; border:1px solid #000; background:#fff; cursor:pointer; font-weight: bold;}
    button.btn-delete { color: #d32f2f; border-color: #d32f2f; }

    #adminToggle { position: fixed; bottom: 20px; right: 20px; z-index: 50; }
    #adminToggle button { background: #fff; border: 2px solid #000; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    
    @media (max-width:720px){
      .profile-pic{ width:120px; height:120px; flex-basis:120px; }
      header{height:140px}
    }
    .muted{ color:var(--muted); font-size:14px; line-height: 1.6; }
  </style>
</head>
<body>

  <div id="crashScreen">
    <h2 style="margin-bottom:10px;">Storage & Sync Warning</h2>
    <p class="muted" style="margin-bottom:20px;">The site data is either too large or corrupted. This usually happens if you try to save massive image files. Click below to clear and reset.</p>
    <button onclick="localStorage.clear(); location.reload();" class="primary" style="width: auto; padding: 12px 30px;">Reset to Defaults</button>
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

  <header>
    <img src="banner.jpg" alt="banner" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';">
  </header>

  <main class="wrap">
    
    <div id="homeView" class="view-section active">
      <section>
        <div class="profile">
          <div class="profile-pic"><img src="profile.jpg" alt="Dhruv Saxena" onerror="this.style.display='none'; this.parentElement.innerText='DS';"></div>
          <div class="profile-meta">
            <div class="name-row">
              <h1 id="displayName">Dhruv Saxena</h1>
              <div class="age-badge">15</div>
            </div>
            <p class="muted" style="margin:10px 0;">ResearchGate Fellow, AI Developer, and Scientific Writer. Dedicated to building tools like ImagoPedia with research experience at IIT-BHU, UPPEN & Cambridge.</p>
            <p class="muted" style="font-size:13px;"> Varanasi, India • dhruvisgood13@gmail.com • github.com/dhruvisgood</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <form action="https://formspree.io/f/xzzkvjjk" method="POST" style="display:grid; gap:10px; max-width:500px;">
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" rows="4" placeholder="Message" required></textarea>
          <button class="primary" type="submit">Send Message</button>
        </form>
      </section>
    </div>

    <!-- EXPERIENCE -->
    <div id="experienceView" class="view-section">
      <div style="margin-bottom:15px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2>Experience</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('expForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="expForm">
          <label>Job Title</label><input id="in_exp_title" placeholder="e.g. Research Fellow" />
          <label>Description</label><textarea id="in_exp_text" rows="3" placeholder="What did you do?"></textarea>
          <label>GitHub Filename (e.g. pic1.jpg)</label><input id="in_exp_git" placeholder="Type name only if uploading to GitHub" />
          <label>OR: Local Upload (Small size only)</label><input id="in_exp_img" type="file" accept="image/*" />
          <button class="primary" onclick="handleNewData('experience', 'in_exp_title', 'in_exp_text', 'in_exp_git', 'in_exp_img')">Add Experience</button>
        </div>
        <div class="list" id="experienceList"></div>
      </section>
    </div>

    <!-- PROJECTS -->
    <div id="projectsView" class="view-section">
      <div style="margin-bottom:15px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2>Projects</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('projForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="projForm">
          <label>Project Name</label><input id="in_proj_title" placeholder="e.g. ImagoPedia" />
          <label>Details</label><textarea id="in_proj_text" rows="3" placeholder="Describe the project"></textarea>
          <label>GitHub Filename (e.g. proj1.png)</label><input id="in_proj_git" placeholder="Type name only if uploading to GitHub" />
          <label>OR: Local Upload (Small size only)</label><input id="in_proj_img" type="file" accept="image/*" />
          <button class="primary" onclick="handleNewData('projects', 'in_proj_title', 'in_proj_text', 'in_proj_git', 'in_proj_img')">Add Project</button>
        </div>
        <div class="list" id="projectsList"></div>
      </section>
    </div>

    <div id="educationView" class="view-section">
      <div style="margin-bottom:15px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2>Education</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('eduForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="eduForm">
          <input id="in_edu_title" placeholder="School" /><textarea id="in_edu_text" rows="2" placeholder="Details"></textarea>
          <button class="primary" onclick="handleNewData('education', 'in_edu_title', 'in_edu_text')">Save</button>
        </div>
        <div class="list" id="educationList"></div>
      </section>
    </div>

    <div id="skillsView" class="view-section">
      <div style="margin-bottom:15px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2>Skills</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('skillForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="skillForm">
          <input id="in_skill_name" placeholder="Skill Name" /><input id="in_skill_val" type="number" placeholder="Percentage" />
          <button class="primary" onclick="addSkill()">Save Skill</button>
        </div>
        <div id="skillsList" style="margin-top:20px;"></div>
      </section>
    </div>

    <div id="accomplishmentsView" class="view-section">
      <div style="margin-bottom:15px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2>Accomplishments</h2>
          <button class="btn-xs admin-only" style="display:none" onclick="toggleForm('accForm')">+ Add</button>
        </div>
        <div class="admin-forms" id="accForm">
          <label>Achievement Title</label><input id="in_acc_title" placeholder="e.g. INSPIRE Award" />
          <label>Description</label><textarea id="in_acc_text" rows="2" placeholder="Tell us more"></textarea>
          <label>GitHub Filename (e.g. cert.jpg)</label><input id="in_acc_git" placeholder="e.g. award.jpg" />
          <label>OR: Local Upload</label><input id="in_acc_img" type="file" accept="image/*" />
          <button class="primary" onclick="handleNewData('accomplishments', 'in_acc_title', 'in_acc_text', 'in_acc_git', 'in_acc_img')">Add Accomplishment</button>
        </div>
        <ul id="accList" class="acc-list" style="margin-top:20px;"></ul>
      </section>
    </div>

    <div id="blogView" class="view-section">
      <div style="margin-bottom:15px;"><button class="btn-xs" onclick="router('home')">← Home</button></div>
      <section>
        <h2>Blogs</h2>
        <div id="blogList" class="list"></div>
      </section>
    </div>

  </main>

  <!-- MODAL -->
  <div id="infoModal" class="modal-overlay">
    <div class="modal-card">
      <span class="modal-close" onclick="closeModal()">×</span>
      <img id="mImg" class="modal-img" src="" alt="" onerror="this.style.display='none';">
      <h3 id="mTitle" style="margin-bottom:15px; border-bottom: 1px solid #eee; padding-bottom: 10px;"></h3>
      <div id="mBody" class="muted" style="white-space: pre-wrap;"></div>
    </div>
  </div>

  <div id="adminToggle"><button id="lockBtn">🔒</button></div>

<script>
/** 
 * DATA SCHEMA
 * GitHub images can be passed as simple strings like "pic1.jpg"
 */
const DEFAULT_DATA = {
  "version": 1.2,
  "experience": [
    {
      "id": 1,
      "title": "Student Partner — Comet Browser",
      "text": "Promoted campus events and engagement."
    },
    {
      "id": 2,
      "title": "InternShala Student Partner",
      "text": "Campus ambassador promoting internships."
    },
    {
      "id": 3,
      "title": "Junior Research Fellow — ResearchGate",
      "text": "Neural network research collaborator."
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "ImagoPedia",
      "text": "AI-powered tool for scientific image analysis."
    }
  ],
  "education": [
    {
      "id": 1,
      "title": "Sunbeam School Lahartara",
      "text": "IMO Gold Medalist & Science Club founder."
    }
  ],
  "skills": [
    {
      "id": 1,
      "title": "Python / ML",
      "percent": 90
    },
    {
      "id": 2,
      "title": "Scientific Writing",
      "percent": 95
    }
  ],
  "accomplishments": [
    {
      "id": 1,
      "title": "ResearchGate Fellow",
      "text": "Fellowship for contribution to open science."
    },
    {
      "id": 1766752589818,
      "title": "Indian Oil Science Quiz",
      "text": "Won the Indian Oil Science Quiz 3.0 and brought home a reamrkable prize money of 1,20,000",
      "image": "award.jpeg"
    }
  ],
  "blogs": []
};
const STATE = { isAdmin: false, data: {} };

function init() {
  try {
    const stored = localStorage.getItem('dhruv_data_v2');
    if (stored) {
      STATE.data = JSON.parse(stored);
      // Logic: If Code Version is higher, force update missing keys
      if ((DEFAULT_DATA.version || 0) > (STATE.data.version || 0)) {
        Object.keys(DEFAULT_DATA).forEach(k => {
           if (!STATE.data[k]) STATE.data[k] = DEFAULT_DATA[k];
        });
        STATE.data.version = DEFAULT_DATA.version;
      }
    } else {
      STATE.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    renderAll();
    document.getElementById('lockBtn').onclick = unlockAdmin;
  } catch (e) {
    console.error("Initialization Failed", e);
    document.getElementById('crashScreen').style.display = 'flex';
  }
}

function saveData() {
  try {
    localStorage.setItem('dhruv_data_v2', JSON.stringify(STATE.data));
    renderAll();
  } catch (e) {
    alert("CRITICAL ERROR: Browser storage full. You likely added too many big photos. Use the 'GitHub Filename' option instead of uploading!");
  }
}

function router(view) {
  document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(view + 'View');
  if (target) { target.classList.add('active'); window.scrollTo(0,0); }
}

function toggleForm(id) {
  const f = document.getElementById(id);
  f.style.display = (f.style.display === 'block') ? 'none' : 'block';
}

function renderAll() {
  renderList('experience', 'experienceList');
  renderList('projects', 'projectsList', true);
  renderList('education', 'educationList');
  renderSkills();
  renderAccomplishments();
}

function renderList(key, containerId, isProj = false) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  (STATE.data[key] || []).forEach(item => {
    const d = document.createElement('div');
    d.className = 'item' + (isProj ? ' project-item' : '');
    d.onclick = () => openModal(item.title, item.text, item.image);
    d.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <h4 style="margin:0;">${esc(item.title)}</h4>
        ${STATE.isAdmin ? `<button class="btn-xs btn-delete" onclick="event.stopPropagation(); deleteItem('${key}', ${item.id})">Del</button>` : ''}
      </div>
      <p class="muted" style="margin-top:8px; font-size:12px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${esc(item.text)}</p>
    `;
    c.appendChild(d);
  });
}

function renderSkills() {
  const c = document.getElementById('skillsList');
  if (!c) return;
  c.innerHTML = '';
  (STATE.data.skills || []).forEach(s => {
    const d = document.createElement('div');
    d.className = 'skill-item';
    d.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px;">
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
  if (!c) return;
  c.innerHTML = '';
  (STATE.data.accomplishments || []).forEach(a => {
    const l = document.createElement('li');
    l.className = 'acc-pill';
    l.onclick = () => openModal(a.title, a.text, a.image);
    l.innerHTML = `${esc(a.title)} ${STATE.isAdmin ? `<span style="color:red; margin-left:8px;" onclick="event.stopPropagation(); deleteItem('accomplishments', ${a.id})">×</span>` : ''}`;
    c.appendChild(l);
  });
}

function openModal(t, b, i) {
  document.getElementById('mTitle').innerText = t;
  document.getElementById('mBody').innerText = b || "";
  const img = document.getElementById('mImg');
  if (i) { 
    img.src = i; 
    img.style.display = 'block'; 
  } else { 
    img.style.display = 'none'; 
  }
  document.getElementById('infoModal').style.display = 'flex';
}
function closeModal() { document.getElementById('infoModal').style.display = 'none'; }
document.getElementById('infoModal').onclick = (e) => { if(e.target.id === 'infoModal') closeModal(); }

async function handleNewData(key, tId, bId, gId, iId) {
  const t = document.getElementById(tId).value;
  const b = document.getElementById(bId).value;
  if (!t) return alert("Title is mandatory");

  let finalImg = null;
  
  // Choice 1: GitHub Filename
  if (gId && document.getElementById(gId).value.trim()) {
    finalImg = document.getElementById(gId).value.trim();
    // Ensure extension if missing
    if (!finalImg.includes('.')) finalImg += '.jpg';
  } 
  // Choice 2: Local File Upload (Backup)
  else if (iId) {
    const file = document.getElementById(iId).files[0];
    if (file) finalImg = await compressImage(file);
  }

  STATE.data[key].push({ id: Date.now(), title: t, text: b, image: finalImg });
  saveData();
  
  // Cleanup
  document.getElementById(tId).value = '';
  document.getElementById(bId).value = '';
  if(gId) document.getElementById(gId).value = '';
  if(iId) document.getElementById(iId).value = '';
  toggleForm(document.getElementById(tId).closest('.admin-forms').id);
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
  if (confirm("Delete forever?")) {
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
    ex.innerText = "EXPORT SOURCE CODE";
    ex.className = 'primary';
    ex.style.cssText = "position:fixed; bottom:75px; right:20px; width:auto; z-index:100; border:2px solid #000;";
    ex.onclick = () => {
      const code = "const DEFAULT_DATA = " + JSON.stringify(STATE.data, null, 2) + ";";
      navigator.clipboard.writeText(code).then(() => alert("Code copied! Replace the DEFAULT_DATA block in your editor and save."));
    };
    document.body.appendChild(ex);
    renderAll();
  }
}

function compressImage(file) {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX = 800; // Even smaller for safety
        let w = img.width, h = img.height;
        if (w > MAX) { h *= MAX / w; w = MAX; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        res(canvas.toDataURL('image/jpeg', 0.6));
      };
    };
  });
}

function esc(s) { return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

init();
</script>
</body>
</html>
