import { ref } from 'vue'

import image1 from '@/assets/Trapholt.png'
import image2 from '@/assets/plakat.png'
import image3 from '@/assets/XDDesign1.png'
import image4 from '@/assets/Reklame1.png'
import image5 from '@/assets/Dicegame.png'
import image6 from '@/assets/Mændgolf.png'
import image7 from '@/assets/Golfpdf.png'

const getPortfolioItems = () => {
  const portfolioItems = ref([
          {
            id: 1,
            title: 'Trapholt Museum',
            description: 'First Semester Project built in HTML, CSS and Bootstrap!',
            image: image1,
            link: 'https://museum-trapholt.dk',
            category: 'Web'
        
          },
          {
            id: 2,
            title: 'Dice Game',
            description: 'A freetime project made for understanding the basics of JavaScript!',
            image: image5,
            link: 'https://github.com/Sinyedu/Dice-Game',
            category: 'Web'
          },
          {
            id: 3,
            title: 'Poster for Golf Exhibition',
            description: 'Poster with different offers for my local Golf Club',
            image:image7,
            category: 'Photo'
          },
          {
            id: 4,
            title: 'PDF For Local Golf club',
            description: 'Poster with enticing offers to start playing golf!',
            image: image6,
            category: 'Web',
          },
          {
            id: 5,
            title: 'XD App Design',
            description: 'App we made in Adobe XD for a UX project in our first semester. App was meant to be a Job Portal for students!',
            image: image3,
            link: 'https://xd.adobe.com/view/0e6742e1-b015-4dbb-b6f1-2a387be780c0-5b34/?fullscreen',
            category: 'Web'
          },
          {
            id: 6,
            title: 'Poster for Sustainability',
            description: 'A poster for Sustainability that was in tandem with our Sustainability week!',
            image: image2,  
            link: '',
            category: 'Photo'
          },
          {
            id: 7,
            title: 'Commericial for coffee',
            description: 'A short commericial that we made for some brand of coffee!',
            image: image4,  
            link:'https://www.youtube.com/watch?v=g4h9EjR9wW8',
            category: 'Video'
          }
        ])
  
          return { portfolioItems }
  }
  export default getPortfolioItems

