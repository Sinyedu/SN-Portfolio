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
                    En <strong>multimediedesigner</strong>  fra Danmark. <br> 
                    Lad os arbejde sammen!
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        height: 100vh;
        display: flex;
        align-items: center;
        margin: 0;
        .introview{
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        align-items: center;
        gap: 100px;
        width: 90%;
        margin: 0 auto;
            .image{
                grid-column-start: 2;
                grid-column-end: 6;
                .img-simon{
                    width: 100%;
                    border-radius: 100%;
                }
            }
            .text{
                grid-column-start: 6;
                grid-column-end: 15;
                text-align: center;
                .name-intro-section{
                    font-size: 100px;
                    margin-bottom: 0;
                }
                .study-intro-section{
                    font-size: 25px;
                }
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        
    }
</style>