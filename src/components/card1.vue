<template>
  <main>
    
    <div class="card-container mx-auto flex justify-center">
    <div class="transparent-gradient rounded-lg shadow-lg p-4">
      <img src="public/Projet_web/image_lexica_1.png" alt="Lexica" class="w-full mb-3">
  
      <div class="flex items-center">
        <img src="public/Projet_web/image_lexica_1.png" alt="Logo de Lexica" class="w-9 h-9 mt-2 mr-3">
        <div class="">
          <p class="text-sm">Lexica</p>
          <p class="text-sm">Générateur d'image</p>
        </div>
        <div class="flex-grow"></div>
       
        <div class="flex gap-5">
         <div class="flex flex-col items-center">
            <Icondollars />
            <p class="text-sm">Gratuit</p>
          </div>
  
          <div class="flex flex-col items-center">
            <Iconenregistrer />
            <p class="text-sm">72</p>
          </div>
        </div>
      </div>
  
      <div class="flex flex-col mt-7">
    <button class="flex bg-white text-black rounded-lg py-2 px-5 mb-2 items-center justify-center gap-3">
      <Iconcalendar />
      02/01/2023
    </button>
    <button class="flex bg-violet-900 text-white rounded-lg py-2 px-5 items-center justify-center gap-3">
      <Iconview />
      Voir le site
     
    </button>
  </div>
    </div>
  </div>
      </main>
  </template>
  
  <script>
  import Icondollars from "./icons/Iconedollars.vue";
  import Iconenregistrer from "../components/icons/Iconenregsitrer.vue";
  import Iconcalendar from "../components/icons/Iconcalendar.vue";
  import Iconview from "../components/icons/Iconview.vue";
  
  export default {
    data() {
    },
    components: { Icondollars, Iconenregistrer, Iconcalendar, Iconview },
  };
  </script> 