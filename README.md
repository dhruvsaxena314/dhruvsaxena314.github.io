# Dhruv Saxena #
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dhruv Saxena</title>
  <style>
    body { font-family: Arial, sans-serif; background:#fff; color:#000; margin:0; padding:0; }
    header { width:100%; height:300px; background:#ddd; display:flex; justify-content:center; align-items:center; border-bottom:2px solid #000; animation: fadeIn 1s; }
    @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
    .container { width:90%; max-width:900px; margin:40px auto; animation: slideUp 0.7s; }
    @keyframes slideUp { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
    section { margin-bottom:60px; padding:30px; border:1px solid #000; border-radius:16px; }
    h2 { margin-top:0; }
    .bar { height:20px; width:100%; background:#eee; border-radius:10px; overflow:hidden; margin:8px 0; }
    .bar-fill { height:100%; background:#000; transition:width 1s; }
    #miniMenu { position:fixed; top:0; left:0; width:100%; padding:10px; background:white; border-bottom:1px solid #000; display:flex; gap:20px; justify-content:center; z-index:10; }
    #miniMenu a { text-decoration:none; color:#000; font-weight:bold; }
    #adminPanel { display:none; margin-top:20px; }
    input, textarea { width:100%; padding:10px; margin:6px 0; border-radius:8px; border:1px solid #000; }
    button { padding:10px 20px; border-radius:10px; border:none; background:black; color:white; cursor:pointer; }
    .item { padding:15px; border:1px solid #000; border-radius:12px; margin-top:10px; }
    @media(max-width:600px){ header{height:200px;} section{padding:20px;} }
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

<header>
  <h1>Banner Area — Add Image</h1>
</header>

<div class="container">

  <section id="profile">
    <img src="profile.jpg" alt="Profile" style="width:150px; height:150px; border-radius:20px; border:2px solid #000;">
    <h2>Dhruv Saxena <span style='font-size:1rem; opacity:0.6;'>• Age 15</span></h2>
    <p>A dedicated ResearchGate Fellow with strong experience in AI development, deep scientific writing, leadership, and creation of AI tools like ImagoPedia. Published work on ResearchGate & Crowd, strong quizzing background, and collaboration with IIT-BHU, Cambridge & UPPEN researchers.</p>
    <p><strong>Location:</strong> Varanasi, India</p>
    <p><strong>Email:</strong> dhruvisgood13@gmail.com</p>
    <p><strong>LinkedIn:</strong> dhruv-saxena-3a2b4e7a</p>
    <p><strong>GitHub:</strong> github.com/dhruvisgood</p>
</section>

  <section id="experience">
    <h2>Experience</h2>
    <div id="experienceList">
      <div class='item'>
        <h4>Student Partner – Comet Browser</h4>
        <p>Promoted campus events, student activities, and browser adoption through workshops and engagement programs.</p>
      </div>
      <div class='item'>
        <h4>InternShala Student Partner</h4>
        <p>Promoted internships through social media and school events; worked as campus ambassador at Sunbeam Lahartara.</p>
      </div>
      <div class='item'>
        <h4>Junior Research Fellow – ResearchGate</h4>
        <p>Worked on literature review, mathematical modelling, neural networks based on Janus, Maxwell & Lorentz systems. Collaborated with IIT-BHU, UPPEN & Cambridge academics.</p>
      </div>
      <div class='item'>
        <h4>Research Fellow – Next Voters</h4>
        <p>Worked on democracy development research using AI technology under guidance from UPPEN and Stanford professors.</p>
      </div>
    </div>
  </section>

  <section id="education">
    <h2>Education</h2>
    <p><strong>Sunbeam School Lahartara</strong> — Current</p>
  </section>

  <section id="skills">
    <h2>Skills</h2>

    <p><strong>Project Management</strong></p>
    <div class="bar"><div class="bar-fill" style="width:85%"></div></div>

    <p><strong>Python / ML / DL</strong></p>
    <div class="bar"><div class="bar-fill" style="width:90%"></div></div>

    <p><strong>Computer Vision / NLP</strong></p>
    <div class="bar"><div class="bar-fill" style="width:88%"></div></div>

    <p><strong>Scientific Writing</strong></p>
    <div class="bar"><div class="bar-fill" style="width:95%"></div></div>

    <p><strong>Critical Thinking / Research</strong></p>
    <div class="bar"><div class="bar-fill" style="width:92%"></div></div>
</section>

  <section id="accomplishments">
    <h2>Accomplishments</h2>
    <ul>
      <li>ResearchGate Fellow</li>
      <li>Next Voters Fellow</li>
      <li>Perplexity Student Partner</li>
      <li>InternShala Student Partner</li>
      <li>INSPIRE MANAK Awardee</li>
      <li>Co-Lead Dynamic Science Club</li>
      <li>Google Certified in AI & ML</li>
      <li>NVIDIA DLI Certified – LLM Development</li>
      <li>IBM Certified in Quantum Computing</li>
      <li>GFG Certified – CS & Math for AI</li>
    </ul>
</section>

  <section id="blogs">
    <h2>Blogs</h2>
    <div id="blogList"></div>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <form action="https://formspree.io/f/xzzkvjjk" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <section id="admin">
    <h2>Admin Access</h2>
    <input type="password" id="passkey" placeholder="Enter Passkey">
    <button onclick="checkKey()">Unlock</button>

    <div id="adminPanel">

      <h3>Add Experience</h3>
      <input id="expTitle" placeholder="Title">
      <textarea id="expText" placeholder="Description"></textarea>
      <input type="file" id="expMedia" accept="image/*,video/*">
      <button onclick="addExperience()">Add Experience</button>

      <h3>Add Blog</h3>
      <input id="blogTitle" placeholder="Title">
      <textarea id="blogText" placeholder="Content"></textarea>
      <input type="file" id="blogMedia" accept="image/*,video/*">
      <button onclick="addBlog()">Add Blog</button>

    </div>
  </section>

</div>

<script>
  const expList = document.getElementById('experienceList');
  const blogList = document.getElementById('blogList');

  window.onload = () => {
    loadSaved('experiences', expList);
    loadSaved('blogs', blogList);
  }

  function checkKey(){
    if(document.getElementById('passkey').value === 'itrustedyou'){
      document.getElementById('adminPanel').style.display='block';
    } else alert('Incorrect passkey');
  }

  function loadSaved(key, container){
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    saved.forEach(item => container.appendChild(createItem(item)));
  }

  function createItem(obj){
    const box = document.createElement('div');
    box.className='item';
    box.innerHTML = `<h4>${obj.title}</h4><p>${obj.text}</p>` + (obj.media ? obj.media : '');
    return box;
  }

  function addExperience(){
    addItem('experiences', expList, 'expTitle', 'expText', 'expMedia');
  }

  function addBlog(){
    addItem('blogs', blogList, 'blogTitle', 'blogText', 'blogMedia');
  }

  function addItem(key, container, tId, txtId, mediaId){
    const title = document.getElementById(tId).value;
    const text = document.getElementById(txtId).value;
    const file = document.getElementById(mediaId).files[0];

    if(!title || !text) return alert('Fill all fields');

    let mediaHTML = '';

    if(file){
      const url = URL.createObjectURL(file);
      if(file.type.startsWith('image')) mediaHTML = `<img src="${url}" style="max-width:100%; border-radius:10px; margin-top:10px;">`;
      else mediaHTML = `<video controls style="max-width:100%; margin-top:10px; border-radius:10px;"><source src="${url}"></video>`;
    }

    const obj = { title, text, media: mediaHTML };

    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    saved.push(obj);
    localStorage.setItem(key, JSON.stringify(saved));

    container.appendChild(createItem(obj));
  }

  function createItem(obj){
    const box = document.createElement('div');
    box.className='item';

    const media = obj.media ? obj.media : '';

    box.innerHTML = `
      <h4>${obj.title}</h4>
      <p>${obj.text}</p>
      ${media}
      <button onclick="editItem(this, '${obj.id}')">Edit</button>
      <button onclick="removeItem(this, '${obj.id}')">Remove</button>
    `;
    return box;
  }

  function addItem(key, container, tId, txtId, mediaId){
    const title = document.getElementById(tId).value;
    const text = document.getElementById(txtId).value;
    const file = document.getElementById(mediaId).files[0];

    if(!title || !text) return alert('Fill all fields');

    let mediaHTML = '';
    if(file){
      const url = URL.createObjectURL(file);
      if(file.type.startsWith('image')) mediaHTML = `<img src="${url}" style="max-width:100%; border-radius:10px; margin-top:10px;">`;
      else mediaHTML = `<video controls style="max-width:100%; margin-top:10px; border-radius:10px;"><source src="${url}"></video>`;
    }

    const obj = { id: Date.now(), title, text, media: mediaHTML };

    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    saved.push(obj);
    localStorage.setItem(key, JSON.stringify(saved));

    container.appendChild(createItem(obj));
  }

  function removeItem(btn, id){
    const section = btn.closest('.item');
    section.remove();

    ['experiences','blogs'].forEach(key =>{
      let saved = JSON.parse(localStorage.getItem(key) || '[]');
      saved = saved.filter(item => item.id != id);
      localStorage.setItem(key, JSON.stringify(saved));
    });
  }

  function editItem(btn, id){
    const section = btn.closest('.item');
    const titleEl = section.querySelector('h4');
    const textEl = section.querySelector('p');

    const newTitle = prompt('Edit title:', titleEl.textContent);
    const newText = prompt('Edit text:', textEl.textContent);

    if(!newTitle || !newText) return;

    titleEl.textContent = newTitle;
    textEl.textContent = newText;

    ['experiences','blogs'].forEach(key =>{
      let saved = JSON.parse(localStorage.getItem(key) || '[]');
      saved = saved.map(item =>{
        if(item.id == id){ item.title = newTitle; item.text = newText; }
        return item;
      });
      localStorage.setItem(key, JSON.stringify(saved));
    });
  }
</script>

</body>
</html>



