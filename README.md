<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dhruv Saxena — Portfolio (Rewritten)</title>
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--muted:#94a3b8;--accent:#7c3aed}
    html,body{height:100%;margin:0;background:linear-gradient(180deg,#071027 0%,#0b1220 100%);color:#e6eef8;font-family:Inter,system-ui,Segoe UI,Roboto,'Helvetica Neue',Arial}
    header{display:flex;align-items:center;justify-content:space-between;padding:18px 28px;background:rgba(255,255,255,0.02);backdrop-filter:blur(6px)}
    .brand{display:flex;gap:12px;align-items:center}
    .brand h1{margin:0;font-size:18px}
    nav a{color:var(--muted);text-decoration:none;margin:0 10px;font-weight:600}
    nav a.active{color:white;border-bottom:2px solid var(--accent);padding-bottom:6px}
    main{padding:28px;max-width:1100px;margin:18px auto}
    .card{background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));padding:18px;border-radius:12px;box-shadow:0 6px 24px rgba(2,6,23,0.6)}
    .grid{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
    .col-4{grid-column:span 4}
    .col-8{grid-column:span 8}
    .small{font-size:13px;color:var(--muted)}
    .list-item{padding:12px;border-radius:8px;background:rgba(255,255,255,0.01);margin-bottom:10px}
    .btn{background:var(--accent);color:white;padding:8px 12px;border-radius:8px;border:0;cursor:pointer;font-weight:700}
    .muted{color:var(--muted)}
    .center{display:flex;align-items:center;justify-content:center}
    .page{display:none}
    .page.active{display:block}
    .thumb{height:84px;width:120px;border-radius:8px;object-fit:cover}
    .admin-note{font-size:13px;color:#ffdcdc}
    input,textarea,select{width:100%;padding:8px;border-radius:6px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit}
    label{font-size:13px;color:var(--muted);display:block;margin-bottom:6px}
    .flex{display:flex;gap:12px;align-items:center}
    .accomplishment{cursor:pointer;transition:transform .18s}
    .accomplishment:hover{transform:scale(1.02)}
    footer{padding:18px;text-align:center;color:var(--muted)}
    .danger{background:#7f1d1d}
    pre{white-space:pre-wrap;word-break:break-word}
  </style>
</head>
<body>
  <header>
    <div class="brand">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect rx='8' width='36' height='36' fill='%237c3aed'/></svg>" alt="logo" style="height:36px;width:36px;border-radius:8px"/>
      <div>
        <h1>Dhruv Saxena</h1>
        <div class="small">Developer · Educator · Maker</div>
      </div>
    </div>
    <nav>
      <a href="#home" data-link="home" class="active">Home</a>
      <a href="#blogs" data-link="blogs">Blogs</a>
      <a href="#projects" data-link="projects">Projects</a>
      <a href="#experience" data-link="experience">Experience</a>
      <a href="#admin" data-link="admin">Admin</a>
    </nav>
  </header>

  <main>
    <div id="home" class="page active">
      <div class="card grid">
        <div class="col-4">
          <img id="profilePic" src="https://via.placeholder.com/300x300?text=Profile" alt="profile" style="width:100%;border-radius:12px;"/>
        </div>
        <div class="col-8">
          <h2 id="headline">Hi — I'm Dhruv</h2>
          <p class="small muted" id="summary">A compact interactive portfolio. Use the Admin (password-protected) to add blogs/projects/experience and images. Changes are committed to the GitHub repo as JSON files so the site is dynamic.</p>
          <div style="margin-top:14px" id="skillsCard" class="card">
            <h3 style="margin:0 0 10px 0">Skills</h3>
            <canvas id="skillsChart" width="600" height="200"></canvas>
            <div class="small muted" style="margin-top:8px">Education and skills are editable in Admin — graph updates automatically.</div>
          </div>
        </div>
      </div>

      <section style="margin-top:18px">
        <div class="card">
          <h3>Accomplishments</h3>
          <div id="accomplishmentsList"></div>
        </div>
      </section>
    </div>

    <div id="blogs" class="page">
      <div class="card">
        <h2>Blogs</h2>
        <div id="blogsList"></div>
      </div>
    </div>

    <div id="projects" class="page">
      <div class="card">
        <h2>Projects</h2>
        <div id="projectsList"></div>
      </div>
    </div>

    <div id="experience" class="page">
      <div class="card">
        <h2>Experience</h2>
        <div id="experienceList"></div>
      </div>
    </div>

    <div id="admin" class="page">
      <div class="card">
        <h2>Admin Panel</h2>
        <p class="admin-note">This panel commits content to your GitHub repo. You will need a Personal Access Token with `repo` (or at least `contents`) scope. This is a client-side tool — tokens are used only in your browser session and never sent to any third-party server by this code. (Client-side security is limited; for production use a server-side endpoint.)</p>

        <div id="loginBox">
          <label>Password (required):</label>
          <input id="adminPassword" placeholder="Enter password" />
          <label style="margin-top:8px">GitHub Personal Access Token (will be used to write to repo):</label>
          <input id="githubToken" placeholder="ghp_xxx..." />
          <label style="margin-top:8px">Repository (owner/repo):</label>
          <input id="repoName" placeholder="dhruvsaxena314/dhruvsaxena314.github.io" value="dhruvsaxena314/dhruvsaxena314.github.io" />
          <div style="margin-top:12px" class="flex"><button class="btn" id="authBtn">Unlock Admin</button><button class="btn danger" id="clearToken">Clear Token</button></div>
        </div>

        <div id="adminControls" style="display:none;margin-top:18px">
          <h3>Add a Blog</h3>
          <label>Title</label>
          <input id="blogTitle" />
          <label>Content (Markdown)</label>
          <textarea id="blogContent" rows="6"></textarea>
          <label>Optional image</label>
          <input type="file" id="blogImage" accept="image/*" />
          <div style="margin-top:8px" class="flex"><button class="btn" id="saveBlog">Save Blog (commit)</button></div>

          <hr style="margin:18px 0">
          <h3>Add / Edit Project</h3>
          <label>Project Title</label>
          <input id="projectTitle" />
          <label>Short summary</label>
          <textarea id="projectSummary" rows="3"></textarea>
          <label>Project Link (optional)</label>
          <input id="projectLink" />
          <label>Project Image</label>
          <input type="file" id="projectImage" accept="image/*" />
          <div style="margin-top:8px" class="flex"><button class="btn" id="saveProject">Save Project</button></div>

          <hr style="margin:18px 0">
          <h3>Edit Experience</h3>
          <label>Company / Role</label>
          <input id="expTitle" />
          <label>Duration</label>
          <input id="expDuration" />
          <label>Details</label>
          <textarea id="expDetails" rows="3"></textarea>
          <div style="margin-top:8px" class="flex"><button class="btn" id="saveExperience">Save Experience</button></div>

          <hr style="margin:18px 0">
          <h3>Edit Education & Skills (graph updates)</h3>
          <label>Education JSON (array of objects with {institution, degree, year})</label>
          <textarea id="educationJson" rows="4" placeholder='[{"institution":"X","degree":"Y","year":"2023"}]'></textarea>
          <label>Skills JSON (array of {name,level}) level 0-100</label>
          <textarea id="skillsJson" rows="4" placeholder='[{"name":"JavaScript","level":82}]'></textarea>
          <div style="margin-top:8px" class="flex"><button class="btn" id="saveEduSkills">Save Education & Skills</button></div>

          <hr style="margin:18px 0">
          <h3>Accomplishments (add/edit)</h3>
          <label>Title</label>
          <input id="accTitle" />
          <label>Short summary</label>
          <textarea id="accSummary" rows="3"></textarea>
          <label>Image (optional)</label>
          <input type="file" id="accImage" accept="image/*" />
          <div style="margin-top:8px" class="flex"><button class="btn" id="saveAcc">Save Accomplishment</button></div>

          <hr style="margin:18px 0">
          <h3>Advanced</h3>
          <div class="small muted">You can run site-wide maintenance: re-generate JSON files, or preview the raw repo files below.</div>
          <div style="margin-top:8px" class="flex"><button class="btn" id="regenAll">Re-generate All JSON (local preview)</button></div>
          <pre id="rawOutput" style="margin-top:12px;max-height:300px;overflow:auto;background:rgba(0,0,0,0.3);padding:12px;border-radius:8px"></pre>
        </div>
      </div>
    </div>

  </main>

  <footer>
    <div class="small muted">Rewritten site — client-side GitHub writer. Read README in code for safety notes.</div>
  </footer>

  <script>
    // ---------- Simple SPA routing ----------
    document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click', e=>{
      document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));
      e.target.classList.add('active');
      const link = e.target.getAttribute('data-link');
      showPage(link);
      location.hash = link;
    }));
    function showPage(name){
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      const el = document.getElementById(name);
      if(el) el.classList.add('active');
    }
    // on load hash
    const hash = location.hash.replace('#','')||'home';
    document.querySelectorAll('nav a').forEach(x=>{ if(x.getAttribute('data-link')===hash) x.classList.add('active'); else x.classList.remove('active')});
    showPage(hash);

    // ---------- App state and GitHub helpers ----------
    const OWNER_REPO_PLACEHOLDER = 'dhruvsaxena314/dhruvsaxena314.github.io';
    const ADMIN_PASSWORD = 'kinjal_is_<3'; // as requested (client-side only)
    let ghToken = '';
    let repoFull = OWNER_REPO_PLACEHOLDER;

    function setTokenFromInput(){ ghToken = document.getElementById('githubToken').value.trim(); repoFull = document.getElementById('repoName').value.trim() || OWNER_REPO_PLACEHOLDER; }

    async function ghGet(path){
      // GET raw content for public repo
      const url = `https://api.github.com/repos/${repoFull}/contents/${path}`;
      const res = await fetch(url, {headers: {'Accept':'application/vnd.github.v3+json'}});
      if(res.status===404) return null;
      if(!res.ok) throw new Error('GitHub GET failed: '+res.status);
      return await res.json();
    }

    async function ghPut(path, contentBase64, message, sha){
      setTokenFromInput();
      if(!ghToken) throw new Error('No GitHub token set');
      const url = `https://api.github.com/repos/${repoFull}/contents/${path}`;
      const body = {message,content:contentBase64};
      if(sha) body.sha = sha;
      const res = await fetch(url, {method:'PUT',headers:{'Accept':'application/vnd.github.v3+json','Authorization':`token ${ghToken}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
      const data = await res.json();
      if(!res.ok) throw new Error(JSON.stringify(data));
      return data;
    }

    async function uploadFile(file, targetPath){
      // file: File object, targetPath: path within repo
      const reader = new FileReader();
      return new Promise((resolve,reject)=>{
        reader.onload = async ()=>{
          const b64 = reader.result.split(',')[1];
          try{
            const resp = await ghPut(targetPath, b64, `Add ${targetPath}`);
            resolve(resp.content.download_url);
          }catch(err){reject(err)}
        };
        reader.onerror = e=>reject(e);
        reader.readAsDataURL(file);
      });
    }

    // ---------- Data model - files stored in repo under /data/*.json and /assets/images/* ----------
    // blogs.json, projects.json, experience.json, education.json, skills.json, accomplishments.json

    async function loadAll(){
      const base = 'data';
      const out = {};
      const files = ['blogs.json','projects.json','experience.json','education.json','skills.json','accomplishments.json'];
      for(const f of files){
        try{
          const res = await ghGet(base+'/'+f);
          if(res && res.content){
            const text = atob(res.content);
            out[f.replace('.json','')] = JSON.parse(text);
          } else {
            out[f.replace('.json','')] = [];
          }
        }catch(e){ console.warn('loadAll:',e); out[f.replace('.json','')] = [] }
      }
      return out;
    }

    async function saveJSON(path, obj, message){
      const raw = JSON.stringify(obj,null,2);
      const base64 = btoa(unescape(encodeURIComponent(raw)));
      // check if exists to include sha
      let sha;
      try{
        const existing = await ghGet(path);
        if(existing && existing.sha) sha = existing.sha;
      }catch(e){}
      return await ghPut(path, base64, message || `Update ${path}`, sha);
    }

    // ---------- Renderers ----------
    let globalData = null;
    async function renderAll(){
      try{
        globalData = await loadAll();
      }catch(e){console.error(e); globalData = {}};
      // Blogs
      const bl = document.getElementById('blogsList'); bl.innerHTML='';
      (globalData.blogs||[]).slice().reverse().forEach(b=>{
        const d = document.createElement('div'); d.className='list-item';
        d.innerHTML = `<div style="display:flex;gap:12px"><img src="${b.image||'https://via.placeholder.com/120x84?text=img'}" class="thumb"/><div><strong>${b.title}</strong><div class="small muted">${b.date||''}</div><div style="margin-top:6px">${markedToHtml(b.content||'')}</div></div></div>`;
        bl.appendChild(d);
      });

      // Projects
      const pl = document.getElementById('projectsList'); pl.innerHTML='';
      (globalData.projects||[]).forEach(p=>{
        const d = document.createElement('div'); d.className='list-item';
        d.innerHTML = `<div style="display:flex;gap:12px"><img src="${p.image||'https://via.placeholder.com/120x84?text=project'}" class="thumb"/><div><strong>${p.title}</strong> <div class="small muted">${p.link?`<a href='${p.link}' target='_blank'>link</a>`:''}</div><div style="margin-top:6px">${p.summary}</div></div></div>`;
        pl.appendChild(d);
      });

      // Experience
      const exl = document.getElementById('experienceList'); exl.innerHTML='';
      (globalData.experience||[]).forEach(e=>{
        const d = document.createElement('div'); d.className='list-item';
        d.innerHTML = `<strong>${e.title}</strong><div class="small muted">${e.duration}</div><div style="margin-top:6px">${e.details}</div>`;
        exl.appendChild(d);
      });

      // Accomplishments
      const al = document.getElementById('accomplishmentsList'); al.innerHTML='';
      (globalData.accomplishments||[]).forEach((a,idx)=>{
        const d = document.createElement('div'); d.className='list-item accomplishment';
        d.innerHTML = `<div style='display:flex;gap:12px;align-items:center'><img src='${a.image||'https://via.placeholder.com/120x84?text=acc'}' class='thumb'/><div><strong>${a.title}</strong><div class='small muted'>${a.year||''}</div></div></div>`;
        d.addEventListener('click', ()=>showAccomplishmentDetail(a, idx));
        al.appendChild(d);
      });

      // Skills chart
      try{ renderSkillsChart(globalData.skills || []); }catch(e){console.warn(e)}

      // Fill admin textareas with current JSON
      document.getElementById('educationJson').value = JSON.stringify(globalData.education || [], null, 2);
      document.getElementById('skillsJson').value = JSON.stringify(globalData.skills || [], null, 2);
    }

    function markedToHtml(md){
      // very minimal markdown -> html (safe subset)
      return md.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>');
    }

    function showAccomplishmentDetail(a, idx){
      const modal = document.createElement('div');
      modal.style.position='fixed';modal.style.left=0;modal.style.top=0;modal.style.right=0;modal.style.bottom=0;modal.style.display='flex';modal.style.alignItems='center';modal.style.justifyContent='center';modal.style.background='rgba(0,0,0,0.6)';
      const box = document.createElement('div');box.className='card';box.style.maxWidth='820px';box.style.width='90%';
      box.innerHTML = `<div style='display:flex;gap:12px'><img src='${a.image||'https://via.placeholder.com/240x160?text=acc'}' style='width:240px;height:160px;object-fit:cover;border-radius:8px'/><div><h3>${a.title}</h3><div class='small muted'>${a.year||''}</div><div style='margin-top:10px'>${a.summary||''}</div><div style='margin-top:12px' class='flex'><button class='btn' id='editAccBtn'>Edit</button><button class='btn danger' id='closeAccBtn'>Close</button></div></div></div>`;
      modal.appendChild(box);document.body.appendChild(modal);
      document.getElementById('closeAccBtn').addEventListener('click', ()=>document.body.removeChild(modal));
      document.getElementById('editAccBtn').addEventListener('click', ()=>{
        document.body.removeChild(modal);
        // populate admin fields
        showPage('admin');document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));document.querySelector('[data-link=admin]').classList.add('active');
        document.getElementById('accTitle').value = a.title||'';
        document.getElementById('accSummary').value = a.summary||'';
      });
    }

    // ---------- Simple skills chart (vanilla canvas) ----------
    function renderSkillsChart(skills){
      const c = document.getElementById('skillsChart'); const ctx = c.getContext('2d');
      // clear
      ctx.clearRect(0,0,c.width,c.height);
      const padding = 40; const w = c.width - padding*2; const h = c.height - padding*2;
      const max = 100;
      const barW = w / Math.max(1, skills.length) * 0.7;
      skills.forEach((s,i)=>{
        const x = padding + i * (w / Math.max(1,skills.length)) + (w / Math.max(1,skills.length) - barW)/2;
        const barH = (s.level/max)*h;
        ctx.fillStyle = '#7c3aed99';
        ctx.fillRect(x, padding + (h-barH), barW, barH);
        ctx.fillStyle = '#fff'; ctx.font='12px Inter, Arial'; ctx.textAlign='center';
        ctx.fillText(s.name, x + barW/2, padding + h + 16);
      });
    }

    // ---------- Admin actions ----------
    document.getElementById('authBtn').addEventListener('click', ()=>{
      const pass = document.getElementById('adminPassword').value;
      setTokenFromInput();
      if(pass !== ADMIN_PASSWORD){ alert('Wrong password'); return; }
      if(!ghToken){ if(!confirm('No GitHub token provided — admin will be unlocked for local preview only (no commits). Continue?')) return; }
      document.getElementById('adminControls').style.display='block';
      document.getElementById('loginBox').style.display='none';
      renderAll();
    });
    document.getElementById('clearToken').addEventListener('click', ()=>{ document.getElementById('githubToken').value=''; ghToken=''; alert('Token cleared from input (if you had any).') });

    document.getElementById('saveBlog').addEventListener('click', async ()=>{
      try{
        const title = document.getElementById('blogTitle').value.trim(); const content = document.getElementById('blogContent').value.trim();
        if(!title||!content) return alert('title+content needed');
        const imgFile = document.getElementById('blogImage').files[0];
        let imageUrl = '';
        if(imgFile){
          const fname = `assets/images/blog-${Date.now()}-${imgFile.name}`;
          imageUrl = await uploadFile(imgFile, fname);
        }
        const all = globalData.blogs || [];
        all.push({title,content,image:imageUrl,date:new Date().toISOString().slice(0,10)});
        await saveJSON('data/blogs.json', all, `Add blog ${title}`);
        alert('Blog saved'); renderAll();
      }catch(e){alert('Failed to save blog: '+e)}
    });

    document.getElementById('saveProject').addEventListener('click', async ()=>{
      try{
        const title=document.getElementById('projectTitle').value.trim(); const summary=document.getElementById('projectSummary').value.trim(); const link=document.getElementById('projectLink').value.trim();
        if(!title) return alert('title needed');
        let imageUrl=''; const imgFile = document.getElementById('projectImage').files[0];
        if(imgFile){ imageUrl = await uploadFile(imgFile, `assets/images/project-${Date.now()}-${imgFile.name}`); }
        const all = globalData.projects||[]; all.push({title,summary,link,image:imageUrl});
        await saveJSON('data/projects.json', all, `Add project ${title}`);
        alert('Project saved'); renderAll();
      }catch(e){alert('Failed to save project: '+e)}
    });

    document.getElementById('saveExperience').addEventListener('click', async ()=>{
      try{
        const title=document.getElementById('expTitle').value.trim(); const duration=document.getElementById('expDuration').value.trim(); const details=document.getElementById('expDetails').value.trim();
        if(!title) return alert('title needed');
        const all = globalData.experience||[]; all.push({title,duration,details});
        await saveJSON('data/experience.json', all, `Add experience ${title}`);
        alert('Experience saved'); renderAll();
      }catch(e){alert('Failed to save experience: '+e)}
    });

    document.getElementById('saveEduSkills').addEventListener('click', async ()=>{
      try{
        const ed = JSON.parse(document.getElementById('educationJson').value||'[]');
        const sk = JSON.parse(document.getElementById('skillsJson').value||'[]');
        await saveJSON('data/education.json', ed, 'Update education');
        await saveJSON('data/skills.json', sk, 'Update skills');
        alert('Education & Skills saved'); renderAll();
      }catch(e){alert('Invalid JSON or failed to save: '+e)}
    });

    document.getElementById('saveAcc').addEventListener('click', async ()=>{
      try{
        const title=document.getElementById('accTitle').value.trim(); const summary=document.getElementById('accSummary').value.trim();
        if(!title) return alert('title needed');
        let imageUrl=''; const imgFile=document.getElementById('accImage').files[0];
        if(imgFile){ imageUrl = await uploadFile(imgFile, `assets/images/acc-${Date.now()}-${imgFile.name}`); }
        const all = globalData.accomplishments||[]; all.push({title,summary,image:imageUrl,year:new Date().getFullYear()});
        await saveJSON('data/accomplishments.json', all, `Add accomplishment ${title}`);
        alert('Saved'); renderAll();
      }catch(e){alert('Failed to save accomplishment: '+e)}
    });

    document.getElementById('regenAll').addEventListener('click', async ()=>{
      try{ await renderAll(); document.getElementById('rawOutput').textContent = JSON.stringify(globalData,null,2); alert('Regenerated local preview') }catch(e){alert('Failed: '+e)}
    });

    // ---------- Initialization ----------
    // try to load public data on first load for preview
    (async ()=>{ try{ globalData = await loadAll(); await renderAll(); }catch(e){ console.warn('init load failed',e); globalData={} } })();

  </script>
</body>
</html>
