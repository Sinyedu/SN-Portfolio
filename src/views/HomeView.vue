<script setup>
</script>


<template>
 <div class="container" id="scrollToTop">
        <div class="intro-section">
            <div class="image">
                <img src="/src/assets/Hero1.jpg" alt="" class="image-simon">
            </div>
            <div class="text">
                <h1 class="name-section">SIMON ERIK NYBLOM</h1>
                <p class="subtitle"> 
                    A <strong>Multimedia Designer</strong> with a strong <strong>passion</strong> for <strong>Frontend Development</strong></p>
            </div>
        </div>
</div>
</template>

<style lang="scss" scoped>


body {
      margin: 0;
      padding: 0;
      background-color: #1c1c1c;
    }

.container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0;
    } 

 .intro-section {
    display: flex;
    align-items: center;
    gap: 100px;
    width: 90%;
    margin: 0 auto;
    }
    .image {
    width: 500px;
    grid-column-start: 2;
    grid-column-end: 6;
    }
    .image-simon {
    width: 100%;
    border-radius: 100%;
    }
    .text{
    grid-column-start: 6;
    grid-column-end: 15;
    text-align: center;
}
    .name-section {
    color: #DBBE1C;
    font-size: 77px;
    margin-bottom: 0;
    }
    .subtitle {
    font-size: 25px;
    }
strong {
    color: #8FEC38;
}
@media screen and (max-width: 1220px){
    body{
      background-color: #1c1c1c;
      background-image: none;
    }
  }
</style>
  