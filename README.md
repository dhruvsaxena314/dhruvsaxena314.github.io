# Dhruv Saxena
<!DOCTYPE html>
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
    <h2>Dhruv Saxena</h2>
    <p>ResearchGate Fellow, AI Developer, Scientific Writer.</p>
  </section>

  <section id="experience">
    <h2>Experience</h2>
    <div id="experienceList"></div>
  </section>

  <section id="education">
    <h2>Education</h2>
    <p><strong>Sunbeam School Lahartara</strong> — Current</p>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <p>Programming</p>
    <div class="bar"><div class="bar-fill" style="width:90%"></div></div>
  </section>

  <section id="accomplishments">
    <h2>Accomplishments</h2>
    <ul>
      <li>ResearchGate Fellow</li>
      <li>NVIDIA DLI Certified</li>
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
</script>

</body>
</html>
