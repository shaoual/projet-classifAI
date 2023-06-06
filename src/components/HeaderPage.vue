<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/components/logo.vue'
import iconsoleil from '@/components/icons/iconsoleil.vue'
import { RouterLink } from 'vue-router'

const activeMenu = ref(false)

	function closeMenu() {
	  activeMenu.value = false
	}

</script>
<template>
  <header class=" bg-fond-site flex items-center justify-between px-4 h-20 ">
  

    <RouterLink to="/">
      <logo/>
    </RouterLink>
    <div class="relative z-10">
      <button
    class="w-6 h-3 flex flex-col justify-between lg:hidden"
    @click="activeMenu = !activeMenu">

    <span
      class="block h-[2px] w-full rounded-full transition duration-300"
      :class="{ 'bg-white': !activeMenu, 'bg-white translate-y-[5px] rotate-45': activeMenu } "></span>
    <span
      class="block h-[2px] w-full rounded-full transition duration-300"
      :class="{ 'bg-white': !activeMenu, 'bg-white -translate-y-[5px] -rotate-45': activeMenu }"></span>
  </button>
   </div>


  
 
  <nav class="invisible bg-gray-900 fixed inset-0 px-6 py-12 flex flex-col justify-between lg:visible lg:opacity-100 lg:static lg:bg-transparent lg:mt-0 lg:flex-row lg:flex-1" :class="{ '!visible !opacity-100': activeMenu }" v-scroll-lock="activeMenu">
  <ul class="my-auto flex flex-col gap-4 lg:flex-row">
    <li><RouterLink class="text-light-gray text-xl font-bold lg:text-base lg:font-normal mt-4 lg:mt-0 block rounded-lg active" to="/DecouvrirlesIA" @click="closeMenu">Découvrir les IA</RouterLink></li>
    <hr class="border-light-gray">
    <li><RouterLink class="text-light-gray text-xl font-bold lg:text-base lg:font-normal mt-4 lg:mt-0 block rounded-lg" to="/Proposer" @click="closeMenu">Proposer une IA</RouterLink></li>
    <hr class="border-light-gray">
    <li><RouterLink class="text-light-gray text-xl font-bold lg:text-base lg:font-normal mt-4 lg:mt-0 block rounded-lg" to="/Contact" @click="closeMenu">Contact</RouterLink></li>
    <hr class="border-light-gray">
   
    <li class="lg:hidden"><RouterLink class="text-light-gray text-xl font-bold lg:text-base lg:font-normal mt-4 lg:mt-0 block rounded-lg" to="/Seconnecter" @click="closeMenu">Se connecter</RouterLink></li>
    <hr class="border-light-gray mb-6">
    <li class="flex justify-start items-center lg:hidden">
      <RouterLink to="/" class="mr-2">
        <img src="/public/projet_web/englishflag.webp"  alt="card" class="w-2/4">
      </RouterLink>
      <RouterLink to="/" class="ml-2">
        <iconsoleil/>
      </RouterLink>
    </li>
  </ul>
</nav>

<div class="hidden lg:flex items-center gap-4 px-4 lg:flex-row">
  <RouterLink to="/">
    <img src="/public/projet_web/englishflag.webp"  alt="card" class="w-2/4">
  </RouterLink>

  <RouterLink to="/">
    <iconsoleil/>
  </RouterLink>

  <RouterLink class="flex-1 p-4 rounded-lg text-indigo-500 font-bold lg:flex-none lg:px-6" to="/Seconnecter">
    Se connecter
  </RouterLink>
</div>



    
  </header>

</template>