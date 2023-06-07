<script setup lang="ts">
import hero from '@/components/hero.vue'
</script>

<template>
  <main class="main-content">
  <hero class="mb-44 lg:mb-96" />

 <div class="md:w-full gap-10 items-center grid md:grid-cols-3 md:mx-0">
    <div class="mx-auto w-1/3 md:col-span-1">
<img src="public/Projet_web/cerveau.png" alt="cerveau et ia">
    </div>
    <div class="text-center md:text-left md:col-span-2">
        <h3 class="text-2xl">À qui s'adresse ce site ?</h3> 
        <p class="md:text-sm"> ClassifIA est particulièrement utile pour les personnes qui veulent travailler avec l'IA,pour celles qui n'ont pas de connaissances approfondies dans ce domaine, ou si vous voulez l'utiliser pour vous aider dans vos tâches professionnelles, vos passions...</p>
        <p class="md:text-sm mt-4">Grâce à une interface conviviale et intuitive, les utilisateurs peuvent naviguer sur le site pour découvrir les différentes catégories et thèmes de l'IA, ce qui facilite l'apprentissage et la compréhension de ce domaine en constante évolution.</p>
    </div>
  </div>
   
 <div class="md:w-full mt-24 md:mt-16 lg:mt-40 gap-10 items-center grid md:grid-cols-3 md:mx-0">
    <div class="mx-auto w-1/3 md:col-span-1">
      <img src="public/Projet_web/ia-desktop.png" alt="logo ia-desktop ">
    </div>
     <div class="text-center md:text-left md:col-span-2">
        <h3 class="text-2xl">Ce qu'il faut savoir sur l'IA</h3> 
        <p class="md:text-sm"> Les intelligences artificielles sont des systèmes informatiques conçus pour imiter les capacités humaines d'apprentissage, de raisonnement et de résolution de problèmes. Les IA sont de plus en plus présentes dans notre vie quotidienne, des assistants vocaux tels que Siri et Alexa aux voitures autonomes, en passant par les applications de reconnaissance faciale et de traduction automatique.</p>
        <p class="md:text-sm mt-4">Ces intelligences artificielles sont capables de traiter de grandes quantités de données, d'en extraire des informations précieuses et d'identifier des modèles complexes.</p>
    </div>
</div>


<h3 class="text-center font-bold text-xl mt-32">Notre site vous intéresse ? </h3>
<p class="text-center mt-3 text-sm"> Renseignez votre adresse mail pour être tenu au courant des dernières nouveautés de ClassifAI ?</p>

<h3 class="text-center mt-8">E-mail</h3>
 <div class="flex items-center justify-center w-full">

  <div class="md:w-1/3 lg:w-1/4">
    <label for="email" class="block text-sm font-medium leading-6 text-white"></label>
    <input id="email" name="email" type="email" autocomplete="email" required
      class="md:w-full rounded-md py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
  </div>
  <button class="bg-purple-900 text-white font-bold ml-2 py-2 px-4 rounded inline-flex items-center lg:flex-row">
    S'inscrire
  </button>
</div>


 <p class="text-center  text-xs mt-8 mb-20">
 Vous pouvez vous désabonner à tout moment. </p>


</main>
</template>