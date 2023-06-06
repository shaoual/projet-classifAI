<script setup lang="ts">
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import logo from '@/components/logo.vue'
</script>

<template>
<!-- Footer pour les appareils mobiles -->
<footer class="footer-gradient p-9 lg:hidden">
<div class="space-y-3">
<h4 class="uppercase font-bold">
<logo class="hidden lg:block mr-2" /> ClassifAI
</h4>

<div class="flex justify-between ">
<div>
<ul class="flex items-center gap-4">
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
<nav class="text-right">
<ul>
<li>
<RouterLink class="block rounded-lg" to="/politique">Politique de confidentialité</RouterLink>
</li>
<li>
<RouterLink class="block mt-2 rounded-lg" to="/cookie">Cookies</RouterLink>
</li>
<li>
<RouterLink class="block mt-2 rounded-lg" to="/contact">Contact</RouterLink>
</li>
<li>
<RouterLink class="block mt-2 rounded-lg" to="/apropos">À propos</RouterLink>
</li>
</ul>
</nav>
</div>
</div>

<div class="mt-4">
<p class="text-sm text-center">Tous droits réservés © 2023 - ClassifAI</p>
</div>
</footer>


<!-- Footer pour les tablettes et les écrans plus grands -->
<footer class="footer-gradient p-9 hidden lg:grid lg:grid-cols-4">
<div>
<h4 class="uppercase font-bold flex items-center">
<logo class="hidden lg:block mr-2" /> ClassifAI
</h4>
</div>

<div>
<ul class="grid grid-cols-1 gap-2">
<li>
<RouterLink class="block rounded-lg active" to="/politique">Politique de confidentialité</RouterLink>
</li>
<li>
<RouterLink class="block mt-2 rounded-lg" to="/cookie">Cookies</RouterLink>
</li>
</ul>
</div>

<div>
<ul class="grid grid-cols-1 gap-2">
<li>
<RouterLink class="block rounded-lg" to="/contact">Contact</RouterLink>
</li>
<li>
<RouterLink class="block mt-2 rounded-lg" to="/apropos">À propos</RouterLink>
</li>
</ul>
</div>

<div class="flex items-center justify-end">
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

<div class="col-span-4 mt-8">
<p class="text-sm text-center">Tous droits réservés © 2023 - ClassifAI</p>
</div>
</footer>


</template>


<style>
.footer-gradient {
background: linear-gradient(to bottom, rgba(140, 102, 165, 0.2), rgba(179, 178, 193, 0.2));
}
</style>