
<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 
   <main class="main-content">


    <h2 class="text-center lg:text-left">PROPOSER UNE IA</h2>

    <form class="w-full lg:w-1/2 space-y-6 mt-10 mb-44" action="#" method="POST">
      <div>
        <label for="nom">Nom de l'IA</label>
        <input type="text" id="nom" name="nom" class="w-full text-black rounded-md p-2">
      </div>

      <div>
        <label for="url">L'URL du site</label>
        <input type="text" id="url" name="url" class="w-full text-black rounded-md p-2">
      </div>

      <div>
        <label for="description">Description de l'IA</label>
        <textarea id="description" name="description" class="w-full text-black h-52 rounded-md p-2"></textarea>
      </div>

      <button class="float-right bg-white text-black font-bold py-2 px-10 inline-flex items-center">Envoyer</button>
    </form>


</main>

<RouterView />



  </template>