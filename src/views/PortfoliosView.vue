<template>
    <main>
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
        <div class="filter-buttons mb-4">
          <h1 class="text-1xl font-bold underline">
            <button @click="selectedCategory = 'Web'" class="text-white p-2">Web</button>
            <button @click="selectedCategory = 'Photo'" class="text-white p-2">Photo</button>
            <button @click="selectedCategory = ''" class="text-white p-2">All</button>
          </h1>
        </div>
       
        <div class="portfolio-item flex items-center">
          <div class="info mr-4">
        <router-link :to="`/portfoliodetail/${portfolioItem.id}`"> 
          <p class="text-white">Go to project!</p>
        </router-link>
         
        <h2 class="text-white">{{ portfolioItem.title }}</h2>
        <p class="text-white">{{ portfolioItem.description }}</p>
        <a href="https://museum-trapholt.dk/" class="text-white">{{ portfolioItem.link }}</a>
        <p :class="portfolioItem.stack">{{ portfolioItem.stack }}</p>
        <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
        </div>
        
        <img :src="portfolioItem.image" alt="">
      </div>
        <div v-if="portfolioItem.link">
          <a :href="portfolioItem.link">Link</a>
        </div>
        <div v-else>
  
        </div>
      </div>
    
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  const { portfolioItems } = getPortfolio()
  import getPortfolio from '@/modules/getPortfolio'
  
  let selectedCategory = ref('')
  
  const filteredPortfolioItems = computed(() =>{
    if (selectedCategory.value == '') {
      return portfolioItems.value
    }
    else {
      return portfolioItems.value.filter(item => item.category == selectedCategory.value)
    }
  }) 
  </script>
  
  <style lang="scss">
  .card {
    width: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    color:#333;
    background-color: #1c1c1c;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .card img {
    display: flex;
    width: 55%;
    height: auto;
    margin-top: 1rem;
  }
  .HTML {
    color: white;
  }
  .filter-buttons {
    margin-bottom: 20px;
  }

  .Web{
    color: white;
    text-decoration: underline;
  }
  .Photo {
    color: white;
    text-decoration: underline;
  }

  .selectedCategory {
    z-index: 1;
  }
  </style>