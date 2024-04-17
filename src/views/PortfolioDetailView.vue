<template>
<div>
     <div v-if="!specificPortfolioItem">
        <p class="font-bold underline">No such portfolio item exists</p>
     </div>
      <div v-else>
        <h1 class="font-bold underline"> {{ specificPortfolioItem.title }}</h1>
            <h1>{{ specificPortfolioItem.description }}</h1>
                <h1>{{ specificPortfolioItem.category }}</h1>
                    <img :src="specificPortfolioItem.image" alt="">
      </div>


</div>
</template>

<script setup>
import{ ref } from 'vue'
import { useRoute } from 'vue-router'
import getPortfolio from '@/modules/getPortfolio'
const { portfolioItems } = getPortfolio()
const route = useRoute()

const id = ref(route.params.id)

const specificPortfolioItem = portfolioItems.value.find(item => item.id == id.value)
</script>

<style lang="scss" scoped>

</style>