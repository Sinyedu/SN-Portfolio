<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
<nav>
<div class="container">
  <div class="navbar top-0 w-full text-white flex justify-between items-center px-4 py-3 pb-2" id="navbarapp">
      <div class="flex items-center">
      <RouterLink to="/" class="mr-4">Home</RouterLink>
      <RouterLink to="/about" class="mr-4">About</RouterLink>
      <RouterLink to="/portfolio">Projects</RouterLink>
      </div>
  </div>
</div>
</nav>
</header>
<footer>

  
</footer>
<Transition mode="out-in" name="slide-fade">
  <RouterView/>
</Transition>
</template>
<style>

body {
  margin: 0;
  padding: 0;
  background-color: #1c1c1c;
}
.container {
  width: 500vh;
}


.navbarapp {
  align-items: center;
  position: inherit;
}
.navbar-wrapper {
  position: inherit;
  width: 25vh;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 1s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
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

a {
  opacity: .5;
  transition: 0.5s ease;
}
a:hover {
  opacity: 1;
}

#app {
  overflow: hidden;
}
/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }
} */
</style>