/*Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
- al click su una thumb, visualizzare in grande l’immagine corrispondente
- aggiungere la classe active alla thumb attivaBonus:
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/

const {createApp} = Vue;

createApp ({
  data(){
    return {
      carouselData : {
        images : [
            'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
            'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
            'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
            'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
            'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
        ],
        titles : [
          'Argentina',
          'Chile',
          'Colombia',
          'Peru',
          'Sweden',
        ],
        descriptions : [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitatione',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat','Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ]
      },
      activeImage : 0
    }
  },
  methods: {
    //functions
  }
}).mount('#app');