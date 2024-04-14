import { ref } from 'vue'

import image1 from '@/assets/test.jpeg'

const getPortfolioItems = () => {
const portfolioItems = ref([
        {
          id: 1,
          title: 'Portfolio Item 1',
          description: 'This is the first portfolio item',
          image: image1,
          category: 'Web'
      
        },
        {
          id: 2,
          title: 'Portfolio Item 2',
          description: 'This is the second portfolio item',
          image: 'https://via.placeholder.com/150',
          link: 'https://www.google.com',
          category: 'Photo'
        },
        {
          id: 3,
          title: 'Portfolio Item 3',
          description: 'This is the third portfolio item',
          image: 'https://via.placeholder.com/150',
          category: 'Web'
        },
        {
          id: 4,
          title: 'Portfolio Item 4',
          description: 'This is the second portfolio item',
          image: 'https://via.placeholder.com/150',
          category: 'Photo'
        }  
      ])


        return { portfolioItems }
}

export default getPortfolioItems

