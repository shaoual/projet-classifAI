<script setup lang="ts">
import { ref } from 'vue'

import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">S'inscrire</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
  
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail </label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe </label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="flex justify-center space-x-4">
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded inline-flex items-center lg:flex-row">
    <span>S'inscrire</span>
  </button>

  <div class="w-1"></div> 

  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded inline-flex items-center lg:flex-row">
    <span>S'inscrire</span>
  </button>
</div>
  
          
  
        </form>
        <p class="mt-10 text-center text-sm ">
        J'ai oublié mon mot de passe

      </p>
        
      </div>
    </div>
  </template>
  