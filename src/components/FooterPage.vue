<script setup lang="ts">
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import logo from '@/components/logo.vue'
</script>

<template>
  <footer class=" bg-gray-900 text-white py-8 px-10 space-y-6 grid grid-cols-2 grap-4">

    <div class="space-y-3">
  <h4 class="uppercase font-bold flex items-center">
    <logo class="hidden lg:block mr-2" /> ClassifAI
  </h4>
  <ul class="flex gap-4">
    <li>
      <a href="https://facebook.com" aria-label="facebook">
        <FacebookIcon />
      </a>
    </li>
    <li>
      <a href="https://instagram.com" aria-label="instagram">
        <InstagramIcon />
      </a>
    </li>
  </ul>
</div>

    <nav class="space-y-3 lg:text-right">
  <ul>
    <li><a href="#">Politique de confidentialité</a></li>
    <li><a href="#">Cookies</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">À propos</a></li>
  </ul>
</nav>
   
  
    <div class="col-span-2" style="display: flex; justify-content: center; align-items: center; text-align: center;">
        <h4> Tous droits réservés © 2023 - ClassifAI</h4>
    </div>

  </footer>
</template>
