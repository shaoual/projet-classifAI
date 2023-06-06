<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'


</script>



<template> 
  <main class="main-content">
    <div class=" grid lg:grid-cols-2 gap-x-4 w-full">
      <div>
        <h2 class="text-center lg:text-left">Contact</h2>
        <p class="mt-4 text-center lg:text-left">Si vous souhaitez nous contacter, veuillez remplir les informations suivantes :</p>
      </div>

      <form class="space-y-6 sm:mx-auto sm:w-full text-white sm:max-w-sm mt-20 mb-20" action="#" method="POST">
        <div>
          <label for="nom">Nom</label>
          <input type="text" id="nom" name="nom" class="w-full text-black rounded-md p-2">
        </div>

        <div>
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" name="prenom" class="w-full text-black rounded-md p-2">
        </div>

        <div>
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" class="w-full text-black rounded-md p-2">
        </div>

        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message" class="w-full text-black h-44 rounded-md p-2"></textarea>
        </div>

        <button class="bg-white text-black font-bold py-2 px-10 rounded justify-center mx-auto block" type="button">Envoyer</button>
      </form>
    </div>




</main>



<RouterView />
  
  </template>
  