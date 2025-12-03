<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Portfolio (admin-enabled)</title>
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
    #miniMenu a{ text-decoration:none; color:var(--accent); font-weight:600; font-size:14px;}

    /* small admin open button top-left */
    #adminOpenBtn{
      position:fixed; top:10px; left:10px; z-index:80; width:40px; height:40px; border-radius:10px;
      background:#111; color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; box-shadow:0 6px 18px rgba(0,0,0,0.12);
    }

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

    /* profile block */
    .profile{
      display:flex; gap:var(--gap); align-items:center; justify-content:center; flex-wrap:wrap;
    }
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
    .bar{ height:16px; background:#eee; border-radius:10px; overflow:hidden; margin:8px 0; }
    .bar > i{ display:block; height:100%; background:#000; width:0; transition:width .9s cubic-bezier(.2,.9,.3,1); }

    /* experiences */
    .list .item{ border-radius:12px; padding:12px; margin-bottom:8px; border:1px solid #111; background:#fff; }
    .item .title-row{ display:flex; justify-content:space-between; align-items:center; gap:10px; }
    .item h4{ margin:0; font-size:16px; }
    .item .controls{ display:flex; gap:8px; align-items:center; }
    .item .controls button{ font-size:13px; padding:6px 8px; border-radius:8px; border:none; background:#000; color:#fff; cursor:pointer; }

    .details{ margin-top:10px; color:var(--muted); display:none; }

    /* forms */
    .form-row{ display:grid; gap:8px; grid-template-columns:1fr; margin-top:10px; }
    input[type="text"], input[type="password"], input[type="email"], textarea{
      padding:10px; border-radius:10px; border:1px solid #111; font-size:14px;
      width:100%;
    }
    input[type="file"]{ font-size:13px; }
    button.primary{ background:#000; color:#fff; padding:10px 14px; border-radius:10px; border:none; cursor:pointer;}

    /* responsive tweaks */
    @media (max-width:720px){
      .age-badge{ font-size:36px; opacity:.14; }
      .profile-pic{ width:170px; height:170px; flex-basis:170px; }
      header{height:180px}
    }
    /* subtle helpers */
    .muted{ color:var(--muted); font-size:13px }

    /* admin panel modal */
    #adminModal{ position:fixed; inset:0; display:none; align-items:center; justify-content:center; z-index:200; }
    #adminModal .backdrop{ position:absolute; inset:0; background:rgba(0,0,0,0.4); }
    #adminModal .panel{ position:relative; background:#fff; border:1px solid #111; border-radius:12px; padding:18px; width:min(720px,94%); z-index:10; }
    #adminPanelInner{ display:flex; gap:12px; }
    #adminPanelInner .col{ flex:1 }

    /* small toggle switch for achievements */
    .ach-toggle{ display:inline-flex; gap:8px; align-items:center }
    .small-summary{ display:none; margin-top:8px; color:var(--muted) }

    /* blog page full view */
    #blogsPage{ display:none; padding:28px; }

  </style>
</head>
<body>

  <button id="adminOpenBtn" title="Admin">⚙</button>

  <div id="miniMenu">
    <a href="#profile">Profile</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#accomplishments">Accomplishments</a>
    <a href="#blogs" id="blogsLink">Blogs</a>
  </div>

  <!-- banner: drop banner.jpg in same folder to show an actual image -->
  <header id="banner">
    <img id="bannerImg" src="banner.jpg" alt="banner" onerror="this.style.background='#e7e7e7'; this.removeAttribute('src');" />
  </header>

  <main class="wrap" id="mainContent">

    <!-- PROFILE -->
    <section id="profile">
      <div class="profile">
        <div class="profile-pic" id="profilePic">
          <!-- drop profile.jpg in same folder to show -->
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
    </section>

    <!-- EDUCATION -->
    <section id="education">
      <h2>Education</h2>
      <div id="educationList"></div>
    </section>

    <!-- SKILLS -->
    <section id="skills">
      <h2>Skills</h2>

      <div id="skillsList" style="margin-top:8px;"></div>
    </section>

    <!-- ACCOMPLISHMENTS -->
    <section id="accomplishments">
      <h2>Accomplishments</h2>
      <div id="accomplishmentsList"></div>
    </section>

    <!-- BLOGS (link goes to dedicated blog-page below) -->
    <section id="blogs">
      <h2>Blogs</h2>
      <div id="blogList" class="list"></div>
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

  <!-- Dedicated blog page view (single-page app style) -->
  <div id="blogsPage">
    <button id="backToSite" class="primary" style="margin-bottom:12px;">← Back to site</button>
    <h1>Blogs</h1>
    <div id="blogPageList" class="list" style="margin-top:12px;"></div>
    <div id="blogPageAdmin" style="margin-top:12px; display:none;">
      <div class="form-row">
        <input id="bpTitle" type="text" placeholder="Blog title" />
        <textarea id="bpText" rows="4" placeholder="Blog content / summary"></textarea>
        <input id="bpMedia" type="file" accept="image/*,video/*" />
        <div style="display:flex; gap:8px;"><button id="bpAdd" class="primary">Add Blog</button></div>
      </div>
    </div>
  </div>

  <!-- Admin modal -->
  <div id="adminModal">
    <div class="backdrop" onclick="closeAdminModal()"></div>
    <div class="panel">
      <h3>Admin access</h3>
      <div id="adminPanelInner">
        <div class="col">
          <input id="adminPassInput" type="password" placeholder="Enter passkey" />
        </div>
        <div class="col" style="display:flex; gap:8px;">
          <button id="adminUnlockBtn" class="primary">Unlock</button>
          <button id="adminCloseBtn">Close</button>
        </div>
      </div>
      <p style="margin-top:8px; color:var(--muted); font-size:13px;">Admin passkey is required to reveal editing controls. (Hint: provided by site owner.)</p>
      <hr />
      <div style="font-size:13px; color:var(--muted)">
        <strong>GitHub sync:</strong> If you want all changes to be saved to the GitHub repository for EVERYONE to see, set the following variables in the page (server-side or by a secure build process):
        <pre style="white-space:pre-wrap;">window.API_CLASSIC = 'ghp_...';
window.GITHUB_OWNER = 'your-username';
window.GITHUB_REPO = 'your-repo';
window.GITHUB_BRANCH = 'main';
window.GITHUB_DATA_PATH = 'data/site-data.json';</pre>
        <em>Warning:</em> storing a classic token in client-side JS is insecure. Prefer using a server or GitHub Actions to perform commits securely.
      </div>
    </div>
  </div>

<script>
/* =============================
   Data + Helper utils
   ============================= */
const ADMIN_PASS = 'itrustedyou'; // kept as requested
let isAdmin = false;

// default preloaded content (will be used only if no persisted data found)
const PRELOADED = {
  experiences: [
    { id: 1, title: 'Student Partner — Comet Browser', text: 'Promoted campus events, organized workshops and student engagement activities to popularize Comet Browser.' },
    { id: 2, title: 'InternShala Student Partner', text: 'Promoted internships through social media & campus events; campus ambassador at Sunbeam Lahartara.' }
  ],
  blogs: [ { id: 100, title: 'ImagoPedia — AI tool overview', text: 'Short summary about ImagoPedia and its goals in research assistance.' } ],
  education: [ { id:200, title: 'Sunbeam School Lahartara', text: 'IMO & IEO Gold Medalist. Founding member, Young Society Science Club.' } ],
  skills: [ { id:300, name:'Python / ML / DL', pct:90 }, { id:301, name:'Scientific Writing', pct:95 } ],
  accomplishments: [ { id:400, title:'ResearchGate Fellow', text:'Research fellowship and publications.' }, { id:401, title:'Next Voters Fellow', text:'Fellowship on research for democracy.' } ]
};

function ensureInitialData(){
  if(!localStorage.getItem('siteData')){
    localStorage.setItem('siteData', JSON.stringify(PRELOADED));
  }
}
ensureInitialData();

function getSiteData(){ return JSON.parse(localStorage.getItem('siteData') || '{}'); }
function saveSiteData(obj){ localStorage.setItem('siteData', JSON.stringify(obj)); // local fallback
  // attempt GitHub sync if token present
  if(window.API_CLASSIC && window.GITHUB_OWNER && window.GITHUB_REPO && window.GITHUB_DATA_PATH){
    syncToGithub(JSON.stringify(obj, null, 2)).catch(e=> console.warn('GitHub sync failed', e));
  }
}

/* =============================
   Simple GitHub sync
   - This is optional. If you provide token and repo variables (see admin modal), the page will attempt to create/update
     the data file at GITHUB_DATA_PATH inside the repo. This requires the token to have 'repo' scope for private repos or 'public_repo'.
   - Security warning: do NOT store tokens in client-side JS for production.
   ============================= */
async function syncToGithub(contentStr){
  // compute values
  const owner = window.GITHUB_OWNER;
  const repo = window.GITHUB_REPO;
  const branch = window.GITHUB_BRANCH || 'main';
  const path = window.GITHUB_DATA_PATH;
  const token = window.API_CLASSIC;
  if(!owner || !repo || !path || !token) throw new Error('GitHub sync not configured');

  const apiBase = 'https://api.github.com';

  // get existing file to learn sha
  const getUrl = `${apiBase}/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  const headers = { 'Authorization': 'token ' + token, 'Accept':'application/vnd.github+json' };

  let sha = null;
  try{
    const r = await fetch(getUrl, { headers });
    if(r.ok){
      const j = await r.json(); sha = j.sha;
    }
  }catch(e){ console.warn('fetch file info failed', e); }

  const putUrl = `${apiBase}/repos/${owner}/${repo}/contents/${path}`;
  const body = {
    message: `Site update: ${new Date().toISOString()}`,
    content: btoa(unescape(encodeURIComponent(contentStr))),
    branch
  };
  if(sha) body.sha = sha;

  const resp = await fetch(putUrl, { method:'PUT', headers: { ...headers, 'Content-Type':'application/json' }, body: JSON.stringify(body) });
  if(!resp.ok) throw new Error('GitHub put failed: ' + resp.status + ' ' + await resp.text());
  return await resp.json();
}

/* =============================
   Rendering logic
   ============================= */
const expListEl = document.getElementById('experienceList');
const blogListEl = document.getElementById('blogList');
const eduListEl = document.getElementById('educationList');
const skillsListEl = document.getElementById('skillsList');
const accListEl = document.getElementById('accomplishmentsList');
const blogPageListEl = document.getElementById('blogPageList');

function renderAll(){
  const d = getSiteData();
  renderList(d.experiences || [], expListEl, renderExperienceItem);
  renderList(d.blogs || [], blogListEl, renderBlogItem);
  renderList(d.education || [], eduListEl, renderEducationItem);
  renderSkills(d.skills || []);
  renderAccomplishments(d.accomplishments || []);
  renderList(d.blogs || [], blogPageListEl, renderBlogPageItem);
}

function renderList(items, container, fn){ container.innerHTML=''; items.forEach(it => container.appendChild(fn(it))); }

function esc(s){ return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function makeBtn(label, onclick){ const b=document.createElement('button'); b.textContent=label; b.addEventListener('click', onclick); b.className=''; b.style.padding='6px 8px'; b.style.border='none'; b.style.borderRadius='8px'; b.style.cursor='pointer'; b.style.background='#111'; b.style.color='#fff'; return b; }

/* Experience item */
function renderExperienceItem(item){
  const wrap=document.createElement('div'); wrap.className='item';
  wrap.innerHTML = `<div class="title-row"><h4>${esc(item.title)}</h4><div class="controls"></div></div><div class="details">${esc(item.text||'')}</div>`;
  const details = wrap.querySelector('.details');
  wrap.querySelector('h4').style.cursor='pointer';
  wrap.querySelector('h4').addEventListener('click', ()=> details.style.display = (details.style.display==='block'?'none':'block'));
  const controls = wrap.querySelector('.controls');
  if(isAdmin){ controls.appendChild(makeBtn('Edit', ()=> openEdit('experiences', item.id))); controls.appendChild(makeBtn('Remove', ()=> removeItem('experiences', item.id))); }
  return wrap;
}

/* Blog item (list view) */
function renderBlogItem(item){
  const wrap=document.createElement('div'); wrap.className='item';
  wrap.innerHTML = `<div class="title-row"><h4>${esc(item.title)}</h4><div class="controls"></div></div><div class="details">${esc(item.text||'')}</div>`;
  const details = wrap.querySelector('.details');
  wrap.querySelector('h4').style.cursor='pointer';
  wrap.querySelector('h4').addEventListener('click', ()=> details.style.display = (details.style.display==='block'?'none':'block'));
  const controls = wrap.querySelector('.controls');
  if(isAdmin){ controls.appendChild(makeBtn('Edit', ()=> openEdit('blogs', item.id))); controls.appendChild(makeBtn('Remove', ()=> removeItem('blogs', item.id))); }
  return wrap;
}

/* Blog page item (full) */
function renderBlogPageItem(item){
  const wrap=document.createElement('div'); wrap.className='item';
  wrap.innerHTML = `<div class="title-row"><h4>${esc(item.title)}</h4><div class="controls"></div></div><div class="details">${esc(item.text||'')}</div>`;
  const details = wrap.querySelector('.details');
  wrap.querySelector('h4').style.cursor='pointer';
  wrap.querySelector('h4').addEventListener('click', ()=> details.style.display = (details.style.display==='block'?'none':'block'));
  const controls = wrap.querySelector('.controls');
  if(isAdmin){ controls.appendChild(makeBtn('Edit', ()=> openEdit('blogs', item.id))); controls.appendChild(makeBtn('Remove', ()=> removeItem('blogs', item.id))); }
  return wrap;
}

/* Education */
function renderEducationItem(item){ const wrap=document.createElement('div'); wrap.className='item'; wrap.innerHTML=`<div class="title-row"><h4>${esc(item.title)}</h4><div class="controls"></div></div><div class="details">${esc(item.text||'')}</div>`; const details=wrap.querySelector('.details'); wrap.querySelector('h4').style.cursor='pointer'; wrap.querySelector('h4').addEventListener('click', ()=> details.style.display = (details.style.display==='block'?'none':'block')); const controls=wrap.querySelector('.controls'); if(isAdmin){ controls.appendChild(makeBtn('Edit', ()=> openEdit('education', item.id))); controls.appendChild(makeBtn('Remove', ()=> removeItem('education', item.id))); } return wrap; }

/* Skills */
function renderSkills(items){ skillsListEl.innerHTML=''; items.forEach(it=>{
  const el = document.createElement('div'); el.innerHTML = `<div class="muted">${esc(it.name)}</div><div class="bar"><i style="width:${it.pct}%"></i></div>`;
  if(isAdmin){ const ctr = document.createElement('div'); ctr.style.marginTop='6px'; ctr.appendChild(makeBtn('Edit', ()=> openEdit('skills', it.id))); ctr.appendChild(makeBtn('Remove', ()=> removeItem('skills', it.id))); el.appendChild(ctr); }
  skillsListEl.appendChild(el);
}); }

/* Accomplishments with mini toggle */
function renderAccomplishments(items){ accListEl.innerHTML=''; items.forEach(it=>{
  const wrap=document.createElement('div'); wrap.className='item';
  wrap.innerHTML = `<div class="title-row"><h4>${esc(it.title)}</h4><div class="controls"></div></div><div class="small-summary">${esc(it.text||'')}</div>`;
  const small = wrap.querySelector('.small-summary');
  const title = wrap.querySelector('h4'); title.style.cursor='pointer'; title.addEventListener('click', ()=> small.style.display = (small.style.display==='block'?'none':'block'));
  const controls = wrap.querySelector('.controls');
  const toggleBtn = makeBtn('Summary', ()=> small.style.display = (small.style.display==='block'?'none':'block'));
  controls.appendChild(toggleBtn);
  if(isAdmin){ controls.appendChild(makeBtn('Edit', ()=> openEdit('accomplishments', it.id))); controls.appendChild(makeBtn('Remove', ()=> removeItem('accomplishments', it.id))); }
  accListEl.appendChild(wrap);
}); }

/* =============================
   Add / Edit / Remove utilities
   ============================= */
function addItem(key, obj){ const d=getSiteData(); d[key]=d[key]||[]; d[key].push(obj); saveSiteData(d); renderAll(); }
function updateItem(key, id, patch){ const d=getSiteData(); d[key]=d[key]||[]; const idx=d[key].findIndex(x=>x.id===id); if(idx===-1) return; d[key][idx]=Object.assign({}, d[key][idx], patch); saveSiteData(d); renderAll(); }
function removeItem(key, id){ if(!isAdmin) return alert('Unlock admin first.'); if(!confirm('Remove this item?')) return; const d=getSiteData(); d[key]= (d[key]||[]).filter(x=>x.id!==id); saveSiteData(d); renderAll(); }

function openEdit(key, id){ if(!isAdmin) return alert('Unlock admin first.'); const d=getSiteData(); const arr=d[key]||[]; const it=arr.find(x=>x.id===id); if(!it) return alert('Not found'); const newTitle = prompt('Edit title/name', it.title || it.name); if(newTitle===null) return; const newText = prompt('Edit details/summary (leave blank to clear)', it.text || ''); if(newTitle.trim()==='') return alert('Title cannot be empty'); if(it.title!==undefined) it.title=newTitle.trim(); else it.name=newTitle.trim(); it.text = newText===null? it.text : newText.trim(); saveSiteData(d); renderAll(); }

/* Admin add forms created dynamically when unlocked */
function showAdminControls(){
  // Experience admin form
  const exDiv = document.createElement('div'); exDiv.style.marginTop='12px'; exDiv.innerHTML = `
    <h3>Manage content</h3>
    <div style="display:grid; gap:8px;">
      <input id="aTitle" type="text" placeholder="Title / name" />
      <textarea id="aText" rows="3" placeholder="Optional details / summary"></textarea>
      <div style="display:flex; gap:8px;">
        <select id="aKey"><option value="experiences">Experience</option><option value="education">Education</option><option value="skills">Skills</option><option value="accomplishments">Accomplishments</option><option value="blogs">Blogs</option></select>
        <input id="aPct" type="text" placeholder="(skills only) percentage e.g. 80" style="width:160px;" />
        <button id="aAddBtn" class="primary">Add</button>
      </div>
    </div>
  `;
  document.querySelector('#mainContent').prepend(exDiv);
  document.getElementById('aAddBtn').addEventListener('click', ()=>{
    const key = document.getElementById('aKey').value;
    const title = document.getElementById('aTitle').value.trim();
    const text = document.getElementById('aText').value.trim();
    const pct = parseInt(document.getElementById('aPct').value) || 0;
    if(!title) return alert('Title required');
    const id = Date.now() % 1000000;
    if(key==='skills') addItem('skills',{ id, name:title, pct: Math.min(100, Math.max(0, pct)) });
    else addItem(key,{ id, title, text });
    document.getElementById('aTitle').value=''; document.getElementById('aText').value=''; document.getElementById('aPct').value='';
  });

  // blog page admin
  document.getElementById('blogPageAdmin').style.display='block';
  document.getElementById('bpAdd').addEventListener('click', ()=>{
    const title=document.getElementById('bpTitle').value.trim(); const text=document.getElementById('bpText').value.trim();
    if(!title) return alert('Blog title required'); const id = (Date.now()%100000)+100; addItem('blogs',{ id, title, text }); document.getElementById('bpTitle').value=''; document.getElementById('bpText').value='';
  });
}

/* open admin modal and unlock */
function openAdminModal(){ document.getElementById('adminModal').style.display='flex'; document.getElementById('adminPassInput').value=''; }
function closeAdminModal(){ document.getElementById('adminModal').style.display='none'; }

document.getElementById('adminOpenBtn').addEventListener('click', openAdminModal);
document.getElementById('adminCloseBtn').addEventListener('click', closeAdminModal);
document.getElementById('adminUnlockBtn').addEventListener('click', ()=>{
  const val = document.getElementById('adminPassInput').value;
  if(val===ADMIN_PASS){ isAdmin=true; closeAdminModal(); showAdminControls(); renderAll(); alert('Admin unlocked — editing enabled.'); }
  else alert('Incorrect passkey');
});

/* open blog page */
document.getElementById('blogsLink').addEventListener('click', (e)=>{ e.preventDefault(); openBlogsPage(); });
function openBlogsPage(){ document.getElementById('mainContent').style.display='none'; document.getElementById('blogsPage').style.display='block'; }
function closeBlogsPage(){ document.getElementById('mainContent').style.display='block'; document.getElementById('blogsPage').style.display='none'; }
document.getElementById('backToSite').addEventListener('click', closeBlogsPage);

/* Save to local (and optional GitHub) whenever siteData changes is handled in saveSiteData */

/* Initialization render */
renderAll();

/* animate bars on load */
window.addEventListener('load', ()=> {
  document.querySelectorAll('.bar > i').forEach(i=>{
    const w = i.style.width;
    i.style.width = '0';
    setTimeout(()=> i.style.width = w, 60);
  });
});

/* small helper: if you want to pre-configure GitHub sync on page load, set these in a server-side templating step or before this script runs:
   window.API_CLASSIC, window.GITHUB_OWNER, window.GITHUB_REPO, window.GITHUB_BRANCH, window.GITHUB_DATA_PATH
*/

</script>
</body>
</html>
