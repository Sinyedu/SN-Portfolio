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
        <p class="subtitle text-white">
          Aspiring Frontend Developer
        </p>
      </div>
      <span class="bracket2">}</span> 
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bracket1, .bracket2 {
    position: absolute;
    top: 22%;
    font-size: 500px;
    color: #DBBE1C;
  }

  .bracket1 {
    left: -3%;
    transform: translate(-50%, -50%);
  }

  .bracket2 {
    right: -3%;
    transform: translate(50%, -50%);
  }

  .container {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .intro-section {
    max-width: 90%;
    margin: 0 auto;
    position: relative;
  }

  .text {
    padding-top: 9%;
    text-align: center;
  }

  .name-section {
    font-size: 71px;
    margin-bottom: 0;
    position: relative;
  }

  .subtitle {
    font-size: 25px;
  }

  @media screen and (max-width: 749px) {
    .name-section {
      font-size: 40px;
    }
    .text {
      padding-top: 5%;
    }
    .subtitle {
      font-size: 20px;
    }
    .bracket1 {
      font-size: 150px;
      left: -5%;
      bottom: -35%;
    }
    .bracket2 {
      font-size: 150px;
      right: -5%;
      bottom: -35%;
    }
  }
@media screen and (max-width: 750px){
  .text {
    padding-top: 13%;
  }
}



  @media screen and (max-width: 500px) {
    .name-section {
      font-size: 30px;
    }
    .subtitle {
      font-size: 15px;
    }
    .bracket1 {
      font-size: 100px;
      left: -5%;
      bottom: 10%;
    }
    .bracket2 {
      font-size: 100px;
      right: -5%;
      bottom: 10%;
    }
  }

  @media screen and (max-width: 500px) {
    .name-section {
      font-size: 25px;
    }
    .text {
      padding-top: 20%;
    }
    .subtitle {
      font-size: 12px;
    }
    .bracket1 {
      font-size: 80px;
      left: -5%;
      bottom: 30%;
    }
    .bracket2 {
      font-size: 80px;
      right: -5%;
      bottom: 30%;
    }
  }

  @media screen and (max-width: 300px) {
    .name-section {
      font-size: 20px;
    }
    .text {
      padding-top: 30%;
    }
    .subtitle {
      font-size: 10px;
    }
    .bracket1 {
      font-size: 60px;
      left: -5%;
      bottom: 70%;
    }
    .bracket2 {
      font-size: 60px;
      right: -5%;
      bottom: 70%;
    }
  }
  
</style>
