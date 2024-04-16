<template>
<div class="about">
  <div class="headline">
    <h1 class="title text-3xl font-bold text-white">About Me</h1>
  </div>
    <div class="content">
        <div class="text">
            <p>
              I've always had a passion for <strong>coding</strong>, but it's something I never fully explored until recently. <br> Once I found my way into this field of study, I became completely hooked.
            </p>
            <p>
                Apart from coding, I possess various <strong>language skills</strong>. <br> I can speak <strong>Danish</strong>, <strong>English</strong>,<strong>German</strong>, and <strong>Swedish</strong> to different levels of proficiency.
            </p>
            <p>
                Overall, I'm an outgoing individual who thrives on challenges and enjoys trying out new things.<br> I'm constantly seeking opportunities for growth and learning.
            </p>
        </div>
        <div class="video-cv">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-xnen_yAlHs" title="Simon Erik Nyblom - Video CV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>

  
  </template>
  
  <style scoped>
  .about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}

.headline {
  margin-bottom: 50px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.text {
  color: white;
  max-width: 1500px;
  flex: 1;
  margin-right: 20px;
  font-size: 1.5rem;
  text-align: left;
}

.video-cv {
  flex: 1;
  max-width: 560px; /* Adjust as needed */
}
  
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  