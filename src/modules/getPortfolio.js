import { ref } from 'vue'

import image1 from '@/assets/Trapholt.png'

const getPortfolioItems = () => {
const portfolioItems = ref([
        {
          id: 1,
          title: 'Trapholt Museum',
          description: 'The first proper webpage that we built for our First Semester project!',
          image: image1,
          link: "Press here for the project!",
          category: 'Web'
      
        },
        {
          id: 2,
          title: 'Dice Game',
          description: 'This is a small dice game that I built to understand the basics of JavaScript',
          image: 'https://via.placeholder.com/150',
          link: 'Press here for the Github link!',
          category: 'Web'
        },
        {
          id: 3,
          title: 'PDF For Local Golf club',
          description: 'This is a PDF that I made for a local golf club in Denmark. It was made in Adobe Acrobat',
          image: 'https://via.placeholder.com/150',
          category: 'Web'
        },
        {
          id: 4,
          title: 'PDF For Local Golf club2',
          description: 'This is the second portfolio item that I made for the local golf club in Denmark. It was made in Adobe Acrobat',
          image: 'https://via.placeholder.com/150',
          category: 'Web'
        },
        {
          id: 5,
          title: 'XD App Design',
          description: 'This is a design that we made in Adobe XD for a project in our first semester, that was made for Job searching!',
          image: 'https://via.placeholder.com/150',
          category: 'Web'
        }
      ])


        return { portfolioItems }
}

export default getPortfolioItems

