<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="text-2xl">Base avec pages</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
      </ul>
    </nav>
  </header>

  <!-- Les pages s'affichent ici -->
  <RouterView />

  <footer>
    <!--  -->
  </footer>
</template>
