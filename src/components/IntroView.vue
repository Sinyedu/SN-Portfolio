<script setup>
</script>
<template>
 <div class="container">
        <div class="intro-section">
            <div class="image">
                <img src="/src/assets/Hero1.jpg" alt="" class="image-simon">
            </div>
            <div class="text">
                <h1 class="name-section">SIMON ERIK NYBLOM</h1>
                <p class="subtitle"> 
                    En <strong>multimediedesigner</strong> med <strong>passion</strong> for <strong>Frontend Development</strong></p>
            </div>
        </div>
        <div class="flex">
            <img class="h-20 w-25 mt-3 mr-7" src="/src/assets/htmlicon.png" alt="HTML Icon">
            <img class="h-20 w-25 mt-3" src="/src/assets/cssicon.png" alt="CSS Icon">
            <img class="h-28 w-25 mr-2 ml-3" src="/src/assets/Bootstrap.png" alt="Bootstrap Icon">
            <img class="h-16 w-25 mr-4 mt-6" src="/src/assets/JSIcon.png" alt="JS Icon">
            <img class="h-16 w-25 mr-1 mt-6 ml-3" src="/src/assets/SCSS.png" alt="SCSS Icon">
            <img class="h-16 w-25 mt-6 mr-5" src="/src/assets/VueIcon.png" alt="VUE Icon">
        </div>
</div>
</template>

<style lang="scss" scoped>

.container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0;
    } 

    .flex {
    position: absolute;
    bottom: -3%;
    left: 14%;
    width: 100%;
    }   
 .intro-section {
    display: flex;
    align-items: center;
    gap: 100px;
    width: 90%;
    margin: 0 auto;
    }
    .image {
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
</style>