
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main-content">


        <h2 class="text-center">SE CONNECTER</h2>

        <form class="space-y-6 mt-10 mb-36 sm:mx-auto sm:w-full sm:max-w-sm" action="#" method="POST">

          <div>
            <label for="email" class="block text-sm  leading-6 text-white">E-mail </label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm leading-6 text-white">Mot de passe </label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

          <p class="mt-10 text-center text-white text-sm ">J'ai oublié mon mot de passe</p>

        <div class="flex justify-center space-x-4">
            <RouterLink to="/Inscription"><button class="bg-white text-black font-bold py-2 px-5 rounded inline-flex items-center lg:flex-row">S'inscrire</button></RouterLink>
            <RouterLink to="/profil"><button class="bg-white text-black font-bold py-2 px-5 rounded inline-flex items-center lg:flex-row">Se connecter</button></RouterLink>
        </div>

        </form>

  </main>
  </template>
  