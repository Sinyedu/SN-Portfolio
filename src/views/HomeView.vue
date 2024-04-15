<template>
  <div class="flex justify-end">
    <div class="heroimg">
      <img class="h-96 w-96 rounded-full" src="/src/assets/Hero1.jpg" alt="Simon Nyblom">
    </div>
  </div>

  <div class="herotext">
    <h1 class="text-4xl font-bold">Simon Erik Nyblom</h1>
    <p class="text-2xl"> Multimedia Student, with a passion for Frontend Development</p>
  </div>
</template>

<style scoped>
  .heroimg {
    width: 200vh;
    display: flex;
    justify-content: flex-end;
  }

  .w-96 {
    width: 37rem;
  }

  .h-96 {
    height: 37rem;
  }

  .herotext {
    color: white;
    left: 10vh;
    top: 30vh;
    position: absolute;
  }
</style>
