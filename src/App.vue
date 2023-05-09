<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="text-2xl">Base avec pages</h1>
    <nav>
      <ul>
        <li><RouterLink activeClass="text-red-700 font-bold" to="/">Accueil</RouterLink></li>
        <li>
          <RouterLink activeClass="text-red-700 font-bold" to="/autre-page">Autre Page</RouterLink>
        </li>
        <li>
          <RouterLink activeClass="text-red-700 font-bold" to="/sous-dossier"
            >sous-dossier</RouterLink
          >
        </li>
        <li>
          <RouterLink
            activeClass="text-red-700 font-bold"
            :to="{ name: 'sous-dossier-nomParam', params: { nomParam: 'valeur en paramétre' } }"
            >sous-dossier avec paramétre</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>

  <!-- Les pages s'affichent ici -->
  <RouterView />

  <footer>
    <!--  -->
  </footer>
</template>
