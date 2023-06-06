<script setup>
import PocketBase from 'pocketbase'
import { ref } from 'vue';
</script>

<template>
  <main class="main-content">
    <h2 class="text-center">S'INSCRIRE</h2>
   
    <form class="space-y-6 mt-10 mb-36 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-Jet text-xs mb-2" for="last-name">
          Nom
        </label>
        <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="last-name" type="text">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-Jet text-xs mb-2" for="first-name">
          Prénom
        </label>
        <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="first-name" type="text">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-Jet text-xs mb-2" for="login">
          E-mail
        </label>
        <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="login" type="email">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-Jet text-xs mb-2" for="passwd">
          Mot de passe
        </label>
        <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="passwd" type="password">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-Jet text-xs mb-2" for="passwd-confirm">
          Confirmer le mot de passe
        </label>
        <input class="block w-full bg-Impure-white text-Jet border rounded py-3 px-4 mb-3 h-11" id="passwd-confirm" type="password">
      </div>
      <div class="flex items-center justify-center">
        <input type="checkbox" id="conditions" name="conditions" class="mr-2 purple-checkbox">
        <router-link to="/conditions">
          <label for="conditions">J'accepte les conditions d'utilisation</label>
        </router-link>
      </div>
      <div class="md:col-span-2 flex justify-center m-4">
        <button class="bg-purple-500 text-white font-bold rounded py-2 px-10 mb-5" type="button" @click="register">S'inscrire</button>
      </div>
      <router-link to="/seconnecter">
        <p class="text-center">Déjà un compte ? <span class="text-violet-500">Se connecter</span></p>
      </router-link>
    </form>
  </main>
</template>



<script>
const pb = new PocketBase('http://127.0.0.1:8090');

const register = async () => {
  const email = document.getElementById('login').value;
  const password = document.getElementById('passwd').value;
  const passwordConfirm = document.getElementById('passwd-confirm').value;
  const name = document.getElementById('last-name').value;

  await pb.collection('users').create({ email, password, passwordConfirm, name });
};

export default {
  register,
};
</script>

