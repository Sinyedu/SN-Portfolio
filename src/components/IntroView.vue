<script setup>
</script>
<template>
    <div id="scrollToOne" class="container">
        <div class="introview">
            <div class="image">
                <img src="/src/assets/Hero1.jpg" alt="" class="img-simon">
            </div>
            <div class="text">
                <h1 class="name-intro-section">Simon Erik Nyblom</h1>
                <p class="study-intro-section">
                    En <strong>multimediedesigner</strong> fra Danmark. <br>
                    Lad os arbejde sammen!
                </p>
            </div>
        </div>
    </div>
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
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0;

    .introview {
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        align-items: center;
        gap: 100px;
        width: 90%;
        margin: 0 auto;

        .image {
            grid-column-start: 2;
            grid-column-end: 6;

            .img-simon {
                width: 100%;
                border-radius: 100%;
            }
        }

        .text {
            grid-column-start: 6;
            grid-column-end: 15;
            text-align: center;

            .name-intro-section {
                font-size: 100px;
                margin-bottom: 0;
            }

            .study-intro-section {
                font-size: 25px;
            }
        }
    }
}

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

@media only screen and (max-width: 1000px) {}

;
</style>