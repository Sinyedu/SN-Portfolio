<script setup>
import { RouterView } from 'vue-router'
import IntroView from '@/components/IntroView.vue';
import MainView from '@/components/MainView.vue';
import AboutmeView from '@/components/AboutmeView.vue';
import ContactView from '@/components/ContactView.vue';
import FooterView from '@/components/FooterView.vue';
import PortfoliosView from '@/views/PortfoliosView.vue';
</script>

<template>
    <IntroView/>
    <MainView/>
    <AboutmeView/>
    <PortfoliosView/>
    <ContactView/>
    <FooterView/>
  <RouterView />
</template>

<style lang="scss" scoped>




body {
  margin: 0 !important;
  background-color: #1c1c1c;
  background-image: linear-gradient(to bottom, #1c1c1c, #000000);
}
*{
  margin: 0;
  padding: 0;
}
</style>
