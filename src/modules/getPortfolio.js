import { ref } from 'vue'

import image1 from '@/assets/Trapholt.png'
import image2 from '@/assets/plakat.png'
import image3 from '@/assets/XDDesign1.png'

const getPortfolioItems = () => {
const portfolioItems = ref([
        {
          id: 1,
          title: 'Trapholt Museum',
          description: 'The first proper webpage that we built for our First Semester project!',
          image: image1,
          link: 'https://museum-trapholt.dk',
          category: 'Web'
      
        },
        {
          id: 2,
          title: 'Dice Game',
          description: 'This is a small dice game that I built to understand the basics of JavaScript',
          image: 'https://via.placeholder.com/150',
          link: '',
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
          image: image3,
          link: 'https://xd.adobe.com/view/0e6742e1-b015-4dbb-b6f1-2a387be780c0-5b34/?fullscreen',
          category: 'Web'
        },
        {
          id: 6,
          title: 'Poster for Sustainability',
          description: 'A poster for Sustainability that was in tandem with our Sustainability week!',
          image: image2,  
          link: 'Press here for the viewing of the Project!',
          category: 'Photo'
        }
      ])


        return { portfolioItems }
}

export default getPortfolioItems

