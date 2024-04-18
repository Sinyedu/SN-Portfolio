<template>
    <div class="container">
      <div class="simonimg">
        <img class="rounded-full" src="/src/assets/Hero1.jpg" alt="Simon Nyblom">
      </div>
      <div class="aboutmetext pt-5 pb-5">
        <p class="text-white">
          My name is <strong class="red">Simon Erik Nyblom</strong>, I am currently studying <strong class="gold">Mulitmedia Design</strong>. <br>My focus is more on coding, especially <strong class="green">Frontend Development</strong>. <br>
        </p>
        <h1 class="text-white">Let us get to know me shall we? <br></h1>
        <p class="text-white">
          Hey there! I've got a love for the inner workings of <strong class="red">technology</strong> and a <strong class="gold">deep-rooted passion for coding</strong>. <br> Since I can remember, I've been intrigued by the intricate mechanisms behind <strong class="green"> video games, websites, and electronics</strong>. <br> While I've yet to entertain the thought of the coding world, my fascination has always been there, driving me to understand the "whys" and "hows" of these digital marvels.
        </p>
        <p class="text-white">
          In addition to my technical interests, I pride myself on being a blend of <strong class="red">passion</strong>, <strong class="gold">compassion</strong>, and <strong class="green">competitiveness</strong>, with a touch of supportiveness thrown into the mix. <br> As a team player, colleague, or peer, I've made it my mission to foster an environment that's not only honest but also infused with humor and openness, because let's face it, work should be enjoyable! <br>
        </p>
        <p class="text-white">
          Beyond my coding prowess, I possess a diverse set of <strong class="red">professional</strong> skills that you can explore further in my <strong class="gold">CV</strong>. <br> So, if you're curious to learn more about how I can contribute to your team or project, <strong class="red">let's connect</strong>!
        </p>
      </div>
    </div>
    <div class="links flex justify-center" id="contact">
          <h1 class="text-2xl text-white">
            <strong>If you want to contact me or see more of my work!</strong>
          </h1>
    </div>
    <div class="icons flex justify-center">
    <a href="https://github.com/sinyedu"><img class="h-32 md:h-52 w-32 md:w-52 mt-5 md:mt-10 mb-5" src="/src/assets/Githubicon.png" alt="githubicon" id="githubicon"></a>
    <a href="https://www.linkedin.com/in/simoneriknyblom/"><img class="h-32 md:h-52 w-32 md:w-52 mt-5 md:mt-10 ml-4 md:ml-10 mb-5" src="/src/assets/LinkedInIcon.png" alt="linkedinicon" id="linkedinicon"></a>
    </div>
  </template>
  
  <style lang="scss" scoped>

  .icons {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    max-width: 1200px; 
    margin: 0 auto;
    padding: 20px;
  }
  
  .simonimg {
    width: 350px;
    flex-shrink: 0; 
    margin-right: 20px;
  }
  
  .aboutmetext {
    text-align: start;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    gap: 30px;
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

@media screen and (max-width: 1200px){
    .aboutmetext {
      font-size: 1.2rem;
      max-width: 100%;
    }

    .contact {
      font-size: 1.5rem;
    }
  }
@media screen and (max-width: 1024px){
    .aboutmetext {
      font-size: 1.2rem;
      max-width: 60%;
    }
    .container {
      justify-content: center;
      align-items: start; 
    }
    .container img {
      width: 100%;
    }
    .contact {
      font-size: 1.5rem;
    }
    .links {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 749px){
    .aboutmetext {
      font-size: 1rem;
      max-width: 30%;
    }
    .contact {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
    .links
    {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 500px){
    .aboutmetext {
      font-size: 0.8rem;
      max-width: 20%;
    }
    .contact {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
    .links
    {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
    .container img {
      width: 70%;
    }
    
  }

  </style>
  