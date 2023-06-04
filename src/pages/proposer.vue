<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 
   
   
  <div class="m-[100px] mx-auto text-white max-w-sm">
    <h1 class="text-3xl  font-bold text-white">Contact</h1>
  
    <form class="space-y-6 mt-10" action="#" method="POST">
      <div>
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" class="w-full border border-gray-300 rounded-md p-2">
      </div>

      <div>
        <label for="prenom">Prénom</label>
        <input type="text" id="prenom" name="prenom" class="w-full border border-gray-300 rounded-md p-2">
      </div>

      <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" class="w-full border border-gray-300 rounded-md p-2"></textarea>
      </div>

      <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 inline-flex items-center ml-auto float-right">
        <span>Envoyer</span>
      </button>
    </form>
  </div>





<RouterView />
  
  </template>