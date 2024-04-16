<template>
  <div class="flex justify-end">
    <div class="heroimg">
      <img class="h-72 w-72 rounded-full" src="/src/assets/Hero1.jpg" alt="Simon Nyblom">
      <div class="flex">
      <img class="h-16 w-25 mr-3 mt-4" src="/src/assets/htmlicon.png" alt="HTML Icon">
      <img class="h-16 w-25 mr-3 mt-4" src="/src/assets/cssicon.png" alt="CSS Icon">
      <img class="h-16 w-25 mr-3 mt-4" src="/src/assets/Bootstrap.png" alt="Bootstrap Icon">
      <img class="h-16 w-25 mr-3 mt-4" src="/src/assets/JSIcon.png" alt="JS Icon">
      <img class="h-16 w-25 mr-3 mt-4" src="/src/assets/SCSS.png" alt="SCSS Icon">
      <img class="h-16 w-25 mr-3 mt-4" src="/src/assets/Vueicon.png" alt="VUE Icon">
      </div>
    </div>
  </div>

  <div class="herotext">
    <h1 class="text-4xl font-bold">Simon Erik Nyblom</h1>
    <p class="text-2xl"> Multimedia Student, with a passion for Frontend Development</p>
  </div>
</template>

<style scoped>

.flex {
position: relative;
right: 25vh;
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
    top: 30vh;
    position: absolute;
  }
</style>
