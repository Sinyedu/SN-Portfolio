<template>
  <div class="flex justify-end">
    <div class="heroimg">
      <img class="rounded-full w-72 h-72" src="/src/assets/Hero1.jpg" alt="Simon Nyblom">
    </div>
  </div>

  <div class="herotext">
    <h1 class="name text-4xl font-bold">Simon Erik Nyblom</h1>
    <p class="colortxt text-2xl">Multimedia Student</p>
    <p class="colortxt2 text-2xl">with a passion for Frontend Development</p>
    <div class="flex">
      <img class="h-20 w-25 mt-3 mr-7" src="/src/assets/htmlicon.png" alt="HTML Icon">
      <img class="h-20 w-25 mt-3" src="/src/assets/cssicon.png" alt="CSS Icon">
      <img class="h-28 w-25 mr-2 ml-3" src="/src/assets/Bootstrap.png" alt="Bootstrap Icon">
      <img class="h-16 w-25 mr-4 mt-6" src="/src/assets/JSIcon.png" alt="JS Icon">
      <img class="h-16 w-25 mr-1 mt-6 ml-3" src="/src/assets/SCSS.png" alt="SCSS Icon">
      <img class="h-16 w-25 mt-6 mr-5" src="/src/assets/VueIcon.png" alt="VUE Icon">
    </div>
  </div>
<Transition mode="out-in" name="fade">
<RouterView/>
</Transition>
</template>


<style>
.name {
  color: #F92665;
}

.colortxt {
color: #DBBE1C;
}

.colortxt2 {
  color: #8FEC38;
}

.heroimg {
    position: relative;
    width: 200vh;
    display: flex;
    align-items: end;
    flex-direction: column;
  }

  .w-72 {
    width: 30rem;
  }

  .h-72 {
    height: 30rem;
  }

  .herotext {
    color: white;
    left: 10vh;
    top: 42vh;
    position: absolute;
  }





  @media screen and (max-width: 1024px) {
    .heroimg {
      top: 82px;
      right: 40px;
      height: 50px;
      width: 350px;
    }
    .herotext {
      left: 3vh;
      top: 47vh;
    }
    .flex {
      display: flex;
      flex-wrap: wrap;
    }
    
  }
</style>
