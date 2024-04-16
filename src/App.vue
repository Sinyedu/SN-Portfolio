<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
<nav>
  <div class="navbar-wrapper fixed top-0 w-full text-white flex justify-between items-center px-4 py-3 pb-5">
  <div class="flex items-center">
  </div>
  <div class="flex items-center">
    <RouterLink to="/" class="mr-4">Home</RouterLink>
    <RouterLink to="/about" class="mr-4">About</RouterLink>
    <RouterLink to="/portfolio" class="mr-4">Projects</RouterLink>
  </div>
  </div>
</nav>
</header>
<RouterView />

</template>

<style lang="scss">
.nav-flex-justify-center {
  width: 100vh;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}



/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

} */
</style>
