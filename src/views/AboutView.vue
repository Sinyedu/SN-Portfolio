<template>
    <div class="container">
      <div class="simonimg">
        <img class="rounded-full" src="/src/assets/Hero1.jpg" alt="Simon Nyblom">
      </div>
      <div class="aboutmetext">
        <p class="text-white">
          My name is <strong class="red">Simon Erik Nyblom</strong>, I am currently studying <strong class="gold">Mulitmedia Design</strong>. <br>My focus is more on coding, especially <strong class="green">Frontend Development</strong>. <br>
        </p>
        <h1 class="text-white">Let us get to know me shall we? <br></h1>
        <p class="text-white">
          Hey there! I've got a love for the inner workings of technology and a deep-rooted passion for coding. Since I can remember, I've been intrigued by the intricate mechanisms behind video games, websites, and electronics. While I've yet to entertain the thought of the coding world, my fascination has always been there, driving me to understand the "whys" and "hows" of these digital marvels.
        </p>
        <p class="text-white">
          In addition to my technical interests, I pride myself on being a blend of passion, compassion, and competitiveness, with a touch of supportiveness thrown into the mix. As a team player, colleague, or peer, I've made it my mission to foster an environment that's not only honest but also infused with humor and openness, because let's face it, work should be enjoyable!
        </p>
        <p class="text-white">
          Beyond my coding prowess, I possess a diverse set of professional skills that you can explore further in my CV. So, if you're curious to learn more about how I can contribute to your team or project, let's connect!
        </p>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .container {
    display: flex;
    align-items: flex-start; 
    max-width: 1200px; 
    margin: 0 auto;
    padding: 20px;
  }
  
  .simonimg {
    width: 200px;
    flex-shrink: 0; 
    margin-right: 20px;
  }
  
  .aboutmetext {
    flex-grow: 1;
    font-size: 1.5rem;
  }
  
  .red {
    color: #F92665;
  }
  
  .gold {
    color: #DBBE1C;
  }
  
  .green {
    color: #25E98A;
  }
  </style>
  