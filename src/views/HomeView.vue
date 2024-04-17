<script setup>
</script>

<template>
  <div class="container">
    <div class="intro-section">
    <span class="bracket1">{</span>
      <div class="text">
        <h1 class="name-section text-white">
          Simon Erik Nyblom
        </h1>
        <p class="subtitle">
          <strong class="text-white">Aspiring Frontend Developer</strong>
        </p>
      </div>
    </div>
    <span class="bracket2">}</span> 
  </div>
  
</template>

<style lang="scss" scoped>


.bracket1 {
    position: relative;
    top: -35px;
    left: 350px;
    font-size: 500px;
    color: #DBBE1C;
}

.bracket2 {
    position: relative;
    top: -35px;
    right: 50px;
    font-size: 500px;
    color: #DBBE1C;

  }

  body {
    margin: 0;
    padding: 0;
    background-color: #1c1c1c;
  }

  .container {
    width: 500vh;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .intro-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    max-width: 1250px;
    margin: 0 auto;
  }

  .text {
    padding-left: 300px;
    text-align: center;
  }

  .name-section {
  font-size: 71px;
  margin-bottom: 0;
  position: relative;
}

.name-section::after {
  content: ''; 
  position: absolute; 
  bottom: 5px; 
  left: 0; 
  width: 100%; 
  height: 3px;
  background-color: #ffffff;
}
  .subtitle {
    font-size: 25px;
  }

  @media screen and (max-width: 1220px) {
    body {
      background-color: #1c1c1c;
      background-image: none;
    }
  }
</style>
