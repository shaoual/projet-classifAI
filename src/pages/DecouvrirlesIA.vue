<script setup lang="ts">
import Card1 from '@/components/card1.vue';
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>

<template>
  <main class="main-content">

    <h2 class="text-center font-bold">DÉCOUVREZ LES IA</h2>
  <div class="mb-6 flex justify-center gap-2 ">
    <input type="search"  class="w-1/2 block rounded border border-gray-800 h-12 transparent-gradient  px-3 transition duration-200 ease-in-out text-white"
      placeholder="Recherchez ici"
      aria-label="Recherchez ici"
      aria-describedby="button-addon3" />
  
      <button class="flex items-center rounded border border-gray-800 h-12 px-6 py-2 text-xs uppercase transition duration-150 ease-in-out " type="button" id="button-addon3" data-te-ripple-init>Filtre
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.331 7.5L10.6623 12.5L15.9937 7.5" stroke="#FBFBFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

  </div>
  

  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-20 mb-44">
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
  </div>






 <RouterView />
</main>
</template> 
