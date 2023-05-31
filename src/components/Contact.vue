<script setup lang="ts">
import { ref } from 'vue'

import { RouterLink } from 'vue-router'

</script>


<template> 
   <div class="hidden sm:grid grid-cols-2 gap-6">
  <div>
    <h1 class="text-3xl font-bold">Contact</h1>
    <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu mauris auctor, consectetur ipsum eget, efficitur ligula.</p>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded inline-flex items-center lg:flex-row">
        <span>Envoyer</span>
      </button>
    </form>
  </div>
</div>

<div class="grid sm:hidden">
  <h1 class="text-3xl font-bold">Contact</h1>
  <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu mauris auctor, consectetur ipsum eget, efficitur ligula.</p>

  <div class="mt-10">
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

      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded inline-flex items-center">
        <span>Envoyer</span>
      </button>
    </form>
  </div>
</div>

  
  </template>
  