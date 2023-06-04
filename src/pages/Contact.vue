<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 
   <div class=" sm:grid grid-cols-2 gap-6">
  <div class="m-[100px]">
    <h1 class="text-3xl font-bold text-white">Contact</h1>
    <p class="mt-4 text-white">Si vous souhaitez nous contacter, veuillez remplir les informations suivantes :</p>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full text-white sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" class="w-full border border-gray-300 rounded-md p-2">
      </div>

      <div>
        <label for="prenom">Prénom</label>
        <input type="text" id="prenom" name="prenom" class="w-full border border-gray-300 rounded-md p-2">
      </div>

      <div>
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md p-2">
      </div>

      <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" class="w-full border border-gray-300 rounded-md p-2"></textarea>
      </div>

      <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded inline-flex items-center lg:flex-row">
        <span>Envoyer</span>
      </button>
    </form>
  </div>
</div>



<RouterView />
  
  </template>
  