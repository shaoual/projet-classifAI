<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main-content">


        <h2 class="text-center">S'INSCRIRE</h2>
       
        <form class="space-y-6 mt-10 mb-36 sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="mb-2 md:mb-8">
              <label class="block tracking-wide text-Jet text-xs mb-2" for="grid-last-name">
                  Nom
              </label>
              <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="grid-last-name" type="text">
          </div>
          <div class="mb-2 md:mb-8">
              <label class="block tracking-wide text-Jet text-xs mb-2" for="grid-first-name">
                  Prénom
              </label>
              <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="grid-first-name" type="text">
          </div>
          <div class="mb-2 md:mb-8">
              <label class="block tracking-wide text-Jet text-xs mb-2" for="grid-email">
                  E-mail
              </label>
              <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="grid-email" type="email">
          </div>

          <div class="mb-2 md:mb-8">
              <label class="block tracking-wide text-Jet text-xs mb-2" for="grid-email">
                  Mot de passe
              </label>
              <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="grid-email" type="email">
          </div>

          <div class="mb-2 md:mb-8">
              <label class="block tracking-wide text-Jet text-xs mb-2" for="grid-email">
                  Confirmer le mot de passe
              </label>
              <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="grid-email" type="email">
          </div>

          <div class="flex items-center justify-center">
            <input type="checkbox" id="conditions" name="conditions" class="mr-2 purple-checkbox">
            <RouterLink to="/conditions"><label for="conditions">J'accepte les conditions d'utilisation</label></RouterLink>
            </div>

          <div class="md:col-span-2 flex justify-center m-4 ">
            <button class="bg-purple-500 text-white font-bold rounded py-2 px-10 mb-5" type="button">S'inscrire</button>
          </div>

       <RouterLink to="/seconnecter">
        <p class="text-center">Déjà un compte ? <span class="text-violet-500">Se connecter</span></p>
       </RouterLink>
      </form>
      <RouterView />
  </main>
  </template>