# dhruvsaxena314.github.io
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Personal Site</title>
  <style>
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f8f9fa;
    }
    .container {
      display: flex;
      align-items: center;
      background: white;
      border-radius: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      overflow: hidden;
      max-width: 800px;
      width: 90%;
    }
    .image {
      flex: 1;
    }
    .image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .text {
      flex: 2;
      padding: 30px;
    }
    h1 {
      margin-top: 0;
      color: #222;
    }
    p {
      line-height: 1.6;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="image">
      <img src="myphoto.jpg" alt="My Photo" />
    </div>
    <div class="text">
      <h1>Hi, I'm Dhruv!</h1>
      <p>
        Welcome to my site.  
        I’m passionate about science, mathematics, learning, and quizzing
        Here, I’ll share my achievements, experiments, thoughts, and resources I find interesting.
      </p>
    </div>
  </div>
