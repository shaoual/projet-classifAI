<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderPage.vue'
import Footer from './components/FooterPage.vue'
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import Connexion from './components/connexion.vue'
import seconnecter from '@/components/seconnecter.vue'
import Contact from '@/components/Contact.vue'
</script>



<template>
  
  

  <!-- Les pages s'affichent ici -->
  <RouterView />
<Header />
  
<Connexion />
<seconnecter/>
<Contact/>
  
<Footer />
</template>
