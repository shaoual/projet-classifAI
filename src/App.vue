<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderPage.vue'
import Footer from './components/FooterPage.vue'

</script>



<template>

  <!-- Les pages s'affichent ici -->
  <Header/>
  
  
  <Suspense>
    <RouterView />
</Suspense>
  
<Footer/>

</template>
