
# Dhruv Saxena #

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

    #miniMenu a{ text-decoration:none; color:var(--accent); font-weight:600; font-size:14px;}


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

  </style>

</head>

<body>


  <div id="miniMenu">

    <a href="#profile">Profile</a>

    <a href="#experience">Experience</a>

    <a href="#education">Education</a>

    <a href="#skills">Skills</a>

    <a href="#accomplishments">Accomplishments</a>

    <a href="#blogs">Blogs</a>

  </div>


  <!-- banner: drop banner.jpg in same folder to show an actual image -->

  <header id="banner">

    <img id="bannerImg" src="banner.jpg" alt="banner" onerror="this.style.background='#e7e7e7'; this.removeAttribute('src');" />

  </header>


  <main class="wrap">


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

      <!-- admin-only form -->

      <div style="margin-top:12px;">

        <div style="display:flex; gap:8px; align-items:center;">

          <input id="passkey" type="password" placeholder="admin passkey (unlock to edit/remove)" />

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

/* =============================

   Data + Helper utils

   ============================= */

const ADMIN_PASS = 'itrustedyou';

let isAdmin = false;


/* preloaded CV content (IDs chosen so experiences < 100 and blogs >=100) */

const PRELOADED_EXPERIENCES = [

  { id: 1, title: 'Student Partner — Comet Browser', text: 'Promoted campus events, organized workshops and student engagement activities to popularize Comet Browser.' },

  { id: 2, title: 'InternShala Student Partner', text: 'Promoted internships through social media & campus events; campus ambassador at Sunbeam Lahartara.' },

  { id: 3, title: 'Junior Research Fellow — ResearchGate', text: 'Conducted literature reviews, mathematical modelling, and collaborated with IIT-BHU, UPPEN & Cambridge on neural network research.' },

  { id: 4, title: 'Research Fellow — Next Voters', text: 'Fellowship on research for democracy through AI with mentorship from UPPEN and Stanford.' }

];


const PRELOADED_BLOGS = [

  { id: 100, title: 'ImagoPedia — AI tool overview', text: 'Short summary about ImagoPedia and its goals in research assistance.' }

];


function ensureInitialData(){

  if(!localStorage.getItem('experiences')) localStorage.setItem('experiences', JSON.stringify(PRELOADED_EXPERIENCES));

  if(!localStorage.getItem('blogs')) localStorage.setItem('blogs', JSON.stringify(PRELOADED_BLOGS));

}

ensureInitialData();


/* safe HTML escaping */

function esc(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }


/* =============================

   Rendering logic

   ============================= */

const expListEl = document.getElementById('experienceList');

const blogListEl = document.getElementById('blogList');


function renderLists(){

  render('experiences', expListEl, renderExperienceItem);

  render('blogs', blogListEl, renderBlogItem);

}


function render(key, container, itemRenderer){

  container.innerHTML = '';

  const items = JSON.parse(localStorage.getItem(key) || '[]');

  items.forEach(it => container.appendChild(itemRenderer(it)));

}


/* experience shows title only by default; click expands details */

function renderExperienceItem(item){

  const wrap = document.createElement('div');

  wrap.className = 'item';

  wrap.innerHTML = `

    <div class="title-row">

      <h4>${esc(item.title)}</h4>

      <div class="controls"></div>

    </div>

    <div class="details">${esc(item.text || '')}${mediaHtml(item)}</div>

  `;


  const details = wrap.querySelector('.details');

  // show/hide details when title clicked

  wrap.querySelector('h4').style.cursor = 'pointer';

  wrap.querySelector('h4').addEventListener('click', ()=> details.style.display = (details.style.display === 'block' ? 'none' : 'block'));


  const controls = wrap.querySelector('.controls');

  if(isAdmin){

    const editBtn = makeButton('Edit', ()=> openEditModal('experiences', item.id));

    const delBtn  = makeButton('Remove', ()=> removeItem('experiences', item.id));

    controls.appendChild(editBtn); controls.appendChild(delBtn);

  }

  return wrap;

}


function renderBlogItem(item){

  const wrap = document.createElement('div');

  wrap.className = 'item';

  wrap.innerHTML = `

    <div class="title-row">

      <h4>${esc(item.title)}</h4>

      <div class="controls"></div>

    </div>

    <div class="details">${esc(item.text || '')}${mediaHtml(item)}</div>

  `;

  const details = wrap.querySelector('.details');

  wrap.querySelector('h4').style.cursor = 'pointer';

  wrap.querySelector('h4').addEventListener('click', ()=> details.style.display = (details.style.display === 'block' ? 'none' : 'block'));


  const controls = wrap.querySelector('.controls');

  if(isAdmin){

    const editBtn = makeButton('Edit', ()=> openEditModal('blogs', item.id));

    const delBtn  = makeButton('Remove', ()=> removeItem('blogs', item.id));

    controls.appendChild(editBtn); controls.appendChild(delBtn);

  }

  return wrap;

}


/* small helper to generate media HTML (stored as blobUrl string in item.media) */

function mediaHtml(item){

  if(!item.media) return '';

  // item.media is stored as { type:'image'|'video', url: 'blob:...' }

  try{

    const m = item.media;

    if(m.type==='image') return `<div style="margin-top:10px;"><img src="${esc(m.url)}" style="max-width:100%; border-radius:10px;"></div>`;

    if(m.type==='video') return `<div style="margin-top:10px;"><video controls style="max-width:100%; border-radius:10px;"><source src="${esc(m.url)}"></video></div>`;

  }catch(e){}

  return '';

}


/* button maker */

function makeButton(label, onClick){

  const btn = document.createElement('button');

  btn.textContent = label;

  btn.addEventListener('click', onClick);

  btn.style.fontSize = '13px';

  btn.style.padding = '6px 8px';

  btn.style.borderRadius = '8px';

  btn.style.cursor = 'pointer';

  btn.style.background = '#111';

  btn.style.color = '#fff';

  btn.style.border = 'none';

  return btn;

}


/* =============================

   Admin: unlock, add, edit, remove

   ============================= */

document.getElementById('unlock').addEventListener('click', ()=>{

  const pass = document.getElementById('passkey').value;

  if(pass === ADMIN_PASS){

    isAdmin = true;

    document.getElementById('adminPanel').style.display = 'block';

    document.getElementById('blogAdminPanel').style.display = 'block';

    renderLists();

    alert('Admin unlocked — you can add, edit & remove entries.');

  } else {

    alert('Incorrect passkey');

  }

});


/* add experience/blog from admin forms */

document.getElementById('addExperienceBtn').addEventListener('click', ()=> addFromForm('experiences','expTitle','expText','expMedia'));

document.getElementById('addBlogBtn') && document.getElementById('addBlogBtn').addEventListener('click', ()=> addFromForm('blogs','blogTitle','blogText','blogMedia'));


function addFromForm(key, tId, txtId, mediaId){

  if(!isAdmin) return alert('Unlock admin first.');

  const title = document.getElementById(tId).value.trim();

  const text  = document.getElementById(txtId).value.trim();

  const file  = document.getElementById(mediaId) ? document.getElementById(mediaId).files[0] : null;

  if(!title) return alert('Title required');


  processFileToMedia(file).then(mediaObj=>{

    const list = JSON.parse(localStorage.getItem(key) || '[]');

    // new id heuristic: experiences <100, blogs >=100

    const id = key==='blogs' ? (Date.now() % 100000) + 100 : (Date.now() % 100000);

    list.push({ id, title, text, media: mediaObj });

    localStorage.setItem(key, JSON.stringify(list));

    clearForm(tId, txtId, mediaId);

    renderLists();

  });

}


function processFileToMedia(file){

  return new Promise(resolve=>{

    if(!file) return resolve(null);

    const url = URL.createObjectURL(file);

    const type = file.type.startsWith('image') ? 'image' : (file.type.startsWith('video') ? 'video' : 'other');

    resolve({ type, url });

  });

}


function clearForm(tId, txtId, mediaId){

  document.getElementById(tId).value = '';

  document.getElementById(txtId).value = '';

  if(document.getElementById(mediaId)) document.getElementById(mediaId).value = '';

}


/* remove item (admin-only) */

function removeItem(key, id){

  if(!isAdmin) return alert('Unlock admin first.');

  if(!confirm('Remove this item?')) return;

  const arr = JSON.parse(localStorage.getItem(key) || '[]').filter(it => it.id !== id);

  localStorage.setItem(key, JSON.stringify(arr));

  renderLists();

}


/* edit item (admin-only) — uses prompt for simplicity, can be upgraded to modal form) */

function openEditModal(key, id){

  if(!isAdmin) return alert('Unlock admin first.');

  const arr = JSON.parse(localStorage.getItem(key) || '[]');

  const it = arr.find(x=>x.id===id);

  if(!it) return alert('Item not found');

  const newTitle = prompt('Edit title', it.title);

  if(newTitle === null) return; // cancel

  const newText = prompt('Edit details (optional)', it.text || '');

  if(newTitle.trim() === '') return alert('Title cannot be empty');

  it.title = newTitle.trim();

  it.text = newText === null ? it.text : newText.trim();

  localStorage.setItem(key, JSON.stringify(arr));

  renderLists();

}


/* =============================

   Initialization

   ============================= */

renderLists();


/* animate bars on load */

window.addEventListener('load', ()=> {

  document.querySelectorAll('.bar > i').forEach(i=>{

    const w = i.style.width;

    i.style.width = '0';

    setTimeout(()=> i.style.width = w, 60);

  });

});


/* image fixes: ensure profile image covers and centered

   If profile.jpg is missing, keep placeholder background; user-supplied image will replace it */

(function ensureProfileImage(){

  const img = document.getElementById('profileImage');

  // if image exists and loads, it's already fine (object-fit:cover is applied via CSS)

  // if missing image removed, keep the .profile-pic background grey and show initials

  if(!img || !img.getAttribute('src')){

    const container = document.getElementById('profilePic');

    // show initials fallback

    const fallback = document.createElement('div');

    fallback.style.fontSize = '28px';

    fallback.style.color = '#111';

    fallback.style.fontWeight = '700';

    fallback.textContent = 'DS';

    container.appendChild(fallback);

  }

})();


/* optional: clicking profile uploads (dev convenience) - not required */

</script>

</body>

</html>



