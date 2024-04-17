<template>
<div class="container">
   <div class="aboutmetext">
        <p class="text-white">
          My name is <strong class="red">Simon Erik Nyblom</strong> , I am currently studying <strong class="gold">Mulitmedia Design</strong>. <br>My focus is more on coding, especially <strong class="green">Frontend Development</strong>. <br>      </p>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    width: 500vh;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: center;
    gap: 100px;
    max-width: 1500px;
    margin: 0 auto;
    padding-left: 450px;
    text-align: center;
}




.aboutmetext {
    font-size: 1.5rem;
}


.red {
    color: #F92665
}

.gold {
   color: #DBBE1C;
}

.green {
    color: #25E98A;
}
</style>