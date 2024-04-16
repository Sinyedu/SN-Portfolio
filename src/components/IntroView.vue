<script setup>
</script>
<template>
    <div class="container">
        <div class="introview">
            <div class="image">
                <img src="/src/assets/Hero1.jpg" alt="" class="img-simon rounded-full w-96 h-96">
            </div>
            <div class="text">
                <div class="name-intro-section">
                <h1><strong>Simon Erik Nyblom</strong></h1>
                </div>
                <p class="study text-white ml-2">Multimedia Student<strong class="titlesection ml-2">Frontend Development</strong></p>
            </div>
        </div>
    </div>
        <div class="flex">
            <img class="h-20 w-25 mt-3 mr-7" src="/src/assets/htmlicon.png" alt="HTML Icon">
            <img class="h-20 w-25 mt-3" src="/src/assets/cssicon.png" alt="CSS Icon">
            <img class="h-28 w-25 mr-2 ml-3 mt-5" src="/src/assets/Bootstrap.png" alt="Bootstrap Icon">
            <img class="h-16 w-25 mr-4 mt-6" src="/src/assets/JSIcon.png" alt="JS Icon">
            <img class="h-16 w-25 mr-1 mt-6 ml-3" src="/src/assets/SCSS.png" alt="SCSS Icon">
            <img class="h-16 w-25 mt-6 mr-5" src="/src/assets/VueIcon.png" alt="VUE Icon">
        </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    left: 10%;
}


.flex {
    position: relative;
    left: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}

.name-intro-section {
    color: #DBBE1C;
    font-size: 2rem;
    font-weight: bold;
}

.titlesection {
    color: #F92665;
    font-size: 2rem;
    font-weight: bold;
}

.study {
    font-size: 2rem;
    font-weight: bold;
}
</style>