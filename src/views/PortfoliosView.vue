<template>
  <main>
      <div class="filter-buttons mb-4 flex justify-center">
        <h1 class="text-1xl font-bold underline pt-7">
          <button @click="selectedCategory = 'Video'" class="text-white p-2">Video</button>
          <button @click="selectedCategory = 'Web'" class="text-white p-2">Web</button>
          <button @click="selectedCategory = 'Photo'" class="text-white p-2">Photo</button>
          <button @click="selectedCategory = ''" class="text-white p-2">All</button>
        </h1>
      </div>
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
        <div class="portfolio-item flex items-center">
          <div class="info mr-4">
            <img class="object-fill" :src="portfolioItem.image" alt="">
            <h2 class="text-white">{{ portfolioItem.title }}</h2>
            <p class="text-white">{{ portfolioItem.description }}</p>
            <p :class="portfolioItem.stack">{{ portfolioItem.stack }}</p>
            <p class="text-white underline" :class="portfolioItem.category">{{ portfolioItem.category }}</p>
          </div>


        </div>
        <div class="projectlink" v-if="portfolioItem.link">
          <a class="text-white font-bold" :href="portfolioItem.link">LINK FOR THE PROJECT</a>
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

const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value == '') {
    return portfolioItems.value
  }
  else {
    return portfolioItems.value.filter(item => item.category == selectedCategory.value)
  }
}) 
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
.centercontainer {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-buttons {
  margin-bottom: 20px;
}

.card {
  width: 100%;
  max-width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.projectlink {
  color: white;
}

.text-white {
  color: white;
}

.text-1xl {
  font-size: 1.25rem;
}

.p-2 {
  padding: 0.5rem;

}

@media (max-width: 768px) {
  .centercontainer {
    padding: 0 20px;
  }

  .card {
    width: 90%;
  }
}
</style>
