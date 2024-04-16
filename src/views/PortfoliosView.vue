<template>
  <main>
    <div class="filter-buttons mb-7">
        <h1 class="text-2xl font-bold underline">
          <button @click="selectedCategory = 'Video'" class="text-white p-2">Video</button>
          <button @click="selectedCategory = 'Web'" class="text-white p-2">Web</button>
          <button @click="selectedCategory = 'Photo'" class="text-white p-2">Photo</button>
          <button @click="selectedCategory = ''" class="text-white p-2">All</button>
        </h1>
      </div>
    <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card w-2/5">
      <div class="portfolio-item flex items-center">
        <div class="info mr-4">
          <router-link :to="`/portfoliodetail/${portfolioItem.id}`">
            <p class="text-white">Click here for more details!</p>
          </router-link>

          <h2 class="text-white">{{ portfolioItem.title }}</h2>
          <p class="text-white">{{ portfolioItem.description }}</p>
          <p :class="portfolioItem.stack">{{ portfolioItem.stack }}</p>
          <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
        </div>

        <img :src="portfolioItem.image" alt="">
      </div>
      <div class="projectlink" v-if="portfolioItem.link">
        <a :href="portfolioItem.link">Link for the project!</a>
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
  .projectlink {
    color: white;
  }
  .card {
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
    height: 55%;
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



  @media screen and (max-width: 768px){
    .card {
      width: 40vh;
    }
    
  }
  </style>